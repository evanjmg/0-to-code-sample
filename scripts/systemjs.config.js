/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    "app":                        "js",

    "@angular":                   "lib/@angular",
    "angular2-in-memory-web-api": "lib/angular2-in-memory-web-api",
    "rxjs":                       "lib/rxjs"
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    "app":                        { main: "app.js",  defaultExtension: "min.js" },
    "rxjs":                       { defaultExtension: "min.js" },
    "angular2-in-memory-web-api": { main: "index.min.js", defaultExtension: "min.js" },
  };

  var ngPackageNames = [
    "common",
    "compiler",
    "core",
    "forms",
    "http",
    "platform-browser",
    "platform-browser-dynamic",
    "router",
    "router-deprecated",
    "upgrade",
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages["@angular/"+pkgName] = { main: "index.js", defaultExtension: "js" };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages["@angular/"+pkgName] = { main: "/bundles/" + pkgName + ".umd.min.js", defaultExtension: "min.js" };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
