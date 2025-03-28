// Main file, used only for Electron

var electron = require('electron'),
	fs = require('fs'),
	temp = require('tmp'),
	path = require('path'),
	requirejs = require('requirejs'),
	activities = require('./activities.json'),
	l10n = require('./lib/l10n');

var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var Menu = electron.Menu;
var ipc = electron.ipcMain;
var dialog = electron.dialog;
var nativeImage = electron.nativeImage;

var mainWindow = null;

var debug = false;
var frameless = true;
var reinit = false;
var logoff = false;
var launch = null;


// Save a file
function saveFile(file, arg, sender) {
	var buf;
	if (arg.text) {
		buf = arg.text;
	} else {
		var data = arg.binary.replace(/^data:.+;base64,/, "");
		buf = new Buffer(data, 'base64');
	}
	fs.writeFile(file, buf, function(err) {
		sender.send('save-file-reply', {err: err, filename: file});
	});
}

// Load a file
function LoadFile(event, file) {
	var extension = path.extname(file).substr(1);
	var fileProperty = {};
	fileProperty.name = path.basename(file);
	var extToMimetypes = {'json':'application/json','jpg':'image/jpeg','png':'image/png','wav':'audio/wav','webm':'video/webm','mp3':'audio/mp3','mp4':'video/mp4','txt':'text/plain','pdf':'application/pdf','doc':'application/msword','odt':'application/vnd.oasis.opendocument.text'};
	for (var ext in extToMimetypes) {
		if (ext == extension) {
			fileProperty.type = extToMimetypes[ext];
			break;
		}
	}
	var json = (extension == 'json' ? 'utf8' : null);
	fs.readFile(file, json, function(err, data) {
		var text = (json ? data : "data:"+fileProperty.type+";base64,"+data.toString('base64'));
		event.sender.send('choose-files-reply', fileProperty, err, text);
	});
}

function createWindow () {
	// Process argument
	for (var i = 0 ; i < process.argv.length ; i++) {
		if (process.argv[i] == '--sdebug') {
			debug = true;
		} else if (process.argv[i] == '--window') {
			frameless = false;
		} else if (process.argv[i] == '--init') {
			reinit = true;
		} else if (process.argv[i] == '--logoff') {
			logoff = true;
		} else if (process.argv[i] == '--launch') {
			let found = false;
			if (i+1 < process.argv.length) {
				let activity = process.argv[i+1];
				if (activity.indexOf('&') != -1) {
					activity = activity.split('&')[0];
				}
				for (var j = 0 ; j < activities.length ; j++) {
					if (activities[j].id == activity) {
						launch = 'file://'+app.getAppPath()+'/'+activities[j].directory+'/index.html?n='+activities[j].name+'&a=' + process.argv[i+1];
						found = true;
						break;
					}
				}
				if (!found) {
					console.log('Warning: Activity "'+process.argv[i+1]+'" not found');
				}
			} else {
				console.log('Warning: No activity to launch provided');
			}
		}
	}

	// Create the browser window
	mainWindow = new BrowserWindow({
		show: false,
		backgroundColor: '#FFF',
		minWidth: 640,
		minHeight: 480,
		fullscreen: frameless,
		frame: !frameless,
		webPreferences: {
			webSecurity: false,
			contextIsolation: false,
			nodeIntegration: true
		},
		icon: nativeImage.createFromPath('./res/icon/electron/icon-1024.png')
	});
	if (process.platform === 'darwin') {
		app.dock.setIcon(app.getAppPath()+'/res/icon/electron/icon-1024.png');
	}

	// Load the index.html of Sugarizer
	mainWindow.loadURL(launch ? launch : 'file://'+app.getAppPath()+'/index.html'+(reinit?'?rst=1':'')+(logoff?'?rst=2':''));
	if (frameless) {
		mainWindow.maximize();
	}

	// Wait for 'ready-to-show' to display our window
	mainWindow.webContents.once('did-finish-load', function() {
		// Initialize locales
		l10n.init(app.getLocale() || "en");

		// Handle save file dialog
		ipc.on('save-file-dialog', function(event, arg) {
			var saveFunction = function(file) {
				if (file) {
					saveFile(file, arg, event.sender);
				}
			}
			if (!arg.directory) {
				// Ask directory to use, then save
				var dialogSettings = {
					defaultPath: arg.filename,
					filters: [
						{ name: arg.mimetype, extensions: [arg.extension] }
					]
				};
				dialogSettings.title = l10n.get("SaveFile");
				dialogSettings.buttonLabel = l10n.get("Save");
				dialog.showSaveDialog(dialogSettings).then(function(result) {
					saveFunction(result.filePath);
				});
			} else {
				// Save in the directory provided
				saveFunction(path.join(arg.directory,arg.filename));
			}
		});
		ipc.on('choose-directory-dialog', function(event) {
			var dialogSettings = {
				properties: ['openDirectory', 'createDirectory']
			};
			dialogSettings.title = l10n.get("ChooseDirectory");
			dialogSettings.buttonLabel = l10n.get("Choose");
			dialog.showOpenDialog(dialogSettings).then(function(result) {
				var files = result.filePaths;
				if (files && files.length > 0) {
					event.sender.send('choose-directory-reply', files[0]);
				}
			});
		});
		ipc.on('choose-files-dialog', function(event) {
			var dialogSettings = {
				properties: ['openFile', 'multiSelections'],
				filters: [
					{name: 'Activities', extensions: ['jpg','png','json','webm','wav','mp3','mp4','pdf','txt','doc','odt']}
				]
			};
			dialogSettings.title = l10n.get("ChooseFiles");
			dialogSettings.buttonLabel = l10n.get("Choose");
			dialogSettings.filters[0].name = l10n.get("FilesSupported");
			dialog.showOpenDialog(dialogSettings).then(function(result) {
				var files = result.filePaths;
				if (files && files.length > 0) {
					for (var i = 0 ; i < files.length ; i++) {
						LoadFile(event, files[i]);
					}
				}
			});
		});
		ipc.on('create-tempfile', function(event, arg) {
			temp.file('sugarizer', function(err, path, fd) {
				if (!err) {
					var data = arg.text.replace(/^data:.+;base64,/, "");
					var buf = Buffer.from(data, 'base64');
					fs.writeFile(fd, buf, function(err) {
						event.sender.send('create-tempfile-reply', path);
					});
				}
			});
		});

		// Build menu
		var template = [];
		if (process.platform === 'darwin') {
			var appname = electron.app.getName();
			var menu = {
				label: appname,
				submenu: [{
					accelerator: 'Command+Q',
					click: function () {
						app.quit()
					}
				}]
			};
			menu.submenu[0].label = l10n.get("Quit");
			template.unshift(menu);

			const { systemPreferences } = require('electron')
			systemPreferences.askForMediaAccess('microphone');
			systemPreferences.askForMediaAccess('camera');
		}
		var menu = Menu.buildFromTemplate(template);
		Menu.setApplicationMenu(menu);

		// Debug console
		if (debug) {
			var devtools = new BrowserWindow();
			mainWindow.webContents.setDevToolsWebContents(devtools.webContents);
			mainWindow.webContents.openDevTools({ mode: 'detach' });
		}

		// Show wmain window
		mainWindow.show();
	});

	// Emitted when the window is closed
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	app.quit()
});

app.on('activate', function () {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});
