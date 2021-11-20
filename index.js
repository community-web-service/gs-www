/**
 * @fileoverview Exports module:GsWww.
 * @copyright Robert Gaines 2020
 * @license Apache-2.0
 * @author Robert Gaines <rob@communitywebservice.com>
 */
 
"use strict";

/**
 * Gulp Swallower plugin for building websites based on HTML/CSS/JS.
 * Outputs minified files to "./build/min/www/" and raw files to "./build/raw/www/"
 * Built on gs-dhtml, which can be extended with Mustache, SASS, SCSS, PHP and other Swallower plugins.
 * @module {Function} GsWww
 * @requires module:GulpSwallower
 * @requires module:GsDhtml
 * @implements {module:GulpSwallower.SwallowerPlugin}
 * @param {GulpSwallower} gulpSwallower Gulp Swallower.
 * @param {object} [templateOptions] Default Swallower task template options.
 * @future Lint all all modules
 * @future Beautify all modules
 * @future Consistent variable and file names. i.e. globSet instead of globs.
 * @future .gitignore is not always working.
 * @future dotFolders excluded by .gitignore are being copied.
 * @future Consider stream-combiner;
 * @future Consider gulp-wrap
 * @future Consider gulp-declare
 * @future Consider gulp-filter
 * @future Change var names to the following pattern: fileType + "Files" | Directories + Src | Dest
 * @future Convert ES5 classes to ES6 classes.
 */

module.exports = function GsWww(gulpSwallower, templateOptions) {

	var _this = {}; // Private scope.

	_this.gulpSwallower = gulpSwallower;
	_this.templateOptions = typeof templateOptions !== "undefined" ? templateOptions : {};
	_this.namedGlobs = [];

	/**
	 * Run the plugin. Usually called internally by Gulp Swallower.
	 * @method run
	 */

	this.run = function run() {
		_this.loadSettings();
		_this.loadGlobSets();
	};

	/**
	 * Get plugin ID.
	 * @method getId
	 * @returns {string} plugin ID.
	 */

	this.getId = function () {
		return "gs-www";
	};

	/**
	 * Get plugin requirements.
	 * @method getRequirements
	 * @returns {string} plugin ID.
	 */

	this.getRequirements = function () {
		return ["gs-dhtml"];
	};

	_this.loadSettings = function loadSettings() {
		var defaultTemplateOptions = require("./defaultSettings.js");

		_this.templateOptions = Object.assign(defaultTemplateOptions, templateOptions);

		_this.templateOptions.defaultGlobOptions.base = _this.templateOptions.wwwBase;
	}.bind(this);

	_this.loadGlobSets = function loadGlobSets() {
		_this.namedGlobs = require("./namedGlobs.js");

		_this.gulpSwallower.extendNamedGlobSets(_this.namedGlobs);
	}.bind(this);

};
