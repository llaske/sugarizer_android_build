window._isOffline=document.getElementById("myBlocks")&&"offlinemode"==document.getElementById("myBlocks").className,requirejs.config({baseUrl:"lib",paths:{activity:"../js"}}),requirejs(["activity/activity"]);