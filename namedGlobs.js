"use strict";

// @future Simplify this. 
// @future Include comments that explains what each of these does.
// @future Consider using glob-intersection to simplify patterns.
// @future Consider converting this to XML.
module.exports = [
	// @future Isn't this including folders it shouldn't include?
	{
		name: "staticAssetFiles",
		globSet: [
			"./build/min/www/css/**/*.css",
			"./build/min/www/img/**/*",
			"./build/min/www/lib/**/*",
			"./build/min/www/fonts/**/*",
			"./build/min/www/*",
			"./build/raw/www/css/**/*.css",
			"./build/raw/www/img/**/*",
			"./build/raw/www/lib/**/*",
			"./build/raw/www/fonts/**/*",
			"./build/raw/www/*"
		]
	},
	{
		name: "srcRootDestFile",
		globSet: [
			"./build/min/www/*",
			"./build/raw/www/*"
		]
	},
	{
		name: "cssDestFiles",
		globSet: [
			"./build/min/www/css/**/*.css",
			"./build/raw/www/css/**/*.css"
		]
	},
	{
		name: "imgDestFiles",
		globSet: [
			"./build/min/www/img/**/*",
			"./build/raw/www/img/**/*"
		]
	},
	{
		name: "fontDestFiles",
		globSet: [
			"./build/min/www/fonts/**/*",
			"./build/raw/www/fonts/**/*"
		]
	},
	{
		name: "audioDestFiles",
		globSet: [
			"./build/min/www/audio/**/*",
			"./build/raw/www/audio/**/*"
		]
	},
	{
		name: "libDestFiles",
		globSet: [
			"./build/min/www/lib/**/*",
			"./build/raw/www/lib/**/*"
		]
	},
	{
		name: "jsDestFiles",
		globSet: [
			"./build/min/www/js/**/*.js",
			"./build/raw/www/js/**/*.js"
		]
	},
	{
		name: "htmlDestFiles",
		globSet: [
			"./build/min/www/*.htm",
			"./build/min/www/*.html",
			"./build/min/www/*.xhtm",
			"./build/min/www/*.xhtml",
			"./build/min/www/*.mhtm",
			"./build/min/www/*.mhtml",
			"./build/min/www/*.shtm",
			"./build/min/www/*.shtml",
			"./build/raw/www/*.htm",
			"./build/raw/www/*.html",
			"./build/raw/www/*.xhtm",
			"./build/raw/www/*.xhtml",
			"./build/raw/www/*.mhtm",
			"./build/raw/www/*.mhtml",
			"./build/raw/www/*.shtm",
			"./build/raw/www/*.shtml"
		]
	},
	{
		name: "minDestDirectories",
		globSet: [
			"./build/min/www/"
		]
	},
	{
		name: "rawDestDirectories",
		globSet: [
			"./build/raw/www/"
		]
	},
	{
		name: "destDirectories",
		globSet: [
			"./build/raw/www/",
			"./build/min/www/"
		]
	}
];
