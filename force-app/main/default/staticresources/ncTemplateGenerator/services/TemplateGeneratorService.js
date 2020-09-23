/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var app = angular.module('ncTemplateGenerator');

	var metadata = __webpack_require__(1);
	var objectPageTemplate = __webpack_require__(2);
	var objectUIPageTemplate = __webpack_require__(3);

	app.service('templateGeneratorService', function() {
		this.generateAllFiles = function (objectName, apiName, namespace, template) {
			var mergeFields = {
				objectName: objectName,
				apiName: apiName,
				namespace: (namespace == null ? '' : namespace),
				template: template
			};

			var toReturn = [];
			toReturn[0] = {
				fullName: objectName,
				content: window.btoa(generateFile(objectPageTemplate, mergeFields)),
				label: objectName,
				confirmationTokenRequired: false,
				availableInTouch: true,
				apiVersion: metadata.version
			};
	//		toReturn[1] = {
	//			fullName: objectName + "UI",
	//			content: window.btoa(generateFile(objectUIPageTemplate, mergeFields)),
	//			label: objectName + "UI",
	//			confirmationTokenRequired: false,
	//			availableInTouch: true,
	//			apiVersion: metadata.version
	//		};

			return toReturn;
		}

		function generateFile(file, mergeFields) {
			angular.forEach(mergeFields, function(value, key){
				file = file.replaceAll("<%= " + key + " %>", value);
			})
			return file;
		}
	});

	String.prototype.replaceAll = function(search, replacement) {
		var target = this;
		return target.split(search).join(replacement);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		'version': '38.0',
		'xmlns': 'http://soap.sforce.com/2006/04/metadata'
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<!-- This page was autogenerated by the nCino UI Template Generator tool -->\n<apex:page docType=\"html-5.0\"\n\tsidebar=\"false\"\n\tstandardController=\"<%= apiName %>\"\n\textensions=\"<%= namespace %>DefaultAppController,nFORCE.TemplateController\">\n\n\t<apex:composition template=\"<%= template %>\">\n\n\t\t<apex:define name=\"topbar\">\n\t\t\t<apex:include rendered=\"{!!isNull(route.nFORCE__Topbar__c)}\" pageName=\"{!route.nFORCE__Topbar__c}\" />\n\t\t</apex:define>\n\n\t\t<apex:define name=\"navigation\">\n\t\t\t<apex:include rendered=\"{!!isNull(route.nFORCE__Navigation__c)}\" pageName=\"{!route.nFORCE__Navigation__c}\" />\n\t\t</apex:define>\n\n\t\t<apex:define name=\"subNavigation\">\n\t\t\t<apex:include rendered=\"{!!isNull(route.nFORCE__Sub_Navigation__c)}\"\n\t\t\t\tpageName=\"{!route.nFORCE__Sub_Navigation__c}\" />\n\t\t</apex:define>\n\n\t\t<apex:define name=\"body\">\n\t\t\t<apex:include rendered=\"{!!isNull(route.nFORCE__Body__c)}\" pageName=\"{!route.nFORCE__Body__c}\" />\n\t\t</apex:define>\n\n\t</apex:composition>\n\n</apex:page>\n"

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<!-- This page was autogenerated by the nCino UI Template Generator tool -->\n<apex:page docType=\"html-5.0\" standardController=\"<%= apiName %>\">\n\t<div id=\"detail\" style=\"display:none;\">\n\t\t<apex:detail subject=\"{!<%= apiName %>.Id}\"\n\t\t\t\t\t inlineEdit=\"false\"\n\t\t\t\t\t relatedList=\"true\"\n\t\t\t\t\t title=\"false\" />\n\t</div>\n</apex:page>"

/***/ }
/******/ ]);