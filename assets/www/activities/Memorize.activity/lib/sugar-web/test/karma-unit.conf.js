/*! Sugarizer 2020-03-14 */
sharedConfig=require("./karma-shared.conf.js"),module.exports=function(a){var b=[{pattern:"test/unit/*Spec.js",included:!1},{pattern:"test/graphics/*Spec.js",included:!1}];sharedConfig(a),a.files=a.files.concat(b)};