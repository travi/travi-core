Travi Core JS Library
=====================

A collection of JS modules that I have shaped over time to simplify some common activities that are foundational to how I build front-end enhancements.

[![Build Status](http://img.shields.io/travis/travi/travi-core.svg?style=flat)](https://travis-ci.org/travi/travi-core)
[![Coverage Status](http://img.shields.io/coveralls/travi/travi-core.svg?style=flat)](https://coveralls.io/r/travi/travi-core?branch=master)
[![Code Climate](http://img.shields.io/codeclimate/github/travi/travi-core.svg?style=flat)](https://codeclimate.com/github/travi/travi-core)
[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/dbf0f99784c157897e7978f91ebe62fe "githalytics.com")](http://githalytics.com/travi/travi-core)
[![Dependency Status](http://img.shields.io/gemnasium/travi/travi-core.svg?style=flat)](https://gemnasium.com/travi/travi-core)

[![Bower version](http://img.shields.io/bower/v/travi-core.svg?style=flat)](http://bower.io/search/?q=travi-core)



## Current capabilities

 * Code Maintainability
   * Revealing module pattern for encapsulation
   * Namespacing to avoid polluting the global namespace
 * Client-side templating
 * Cookie mainipulation
 * Event bus
   * Use application level events to decouple modules from each other and from the DOM event system
 * Feature detection
   * Determines browser capabilities 
   * Sets cookie values to send capability findings, needed by middle-end to determine enhancements to apply, to the server
   * Currently only determines screen size
    
## Future enhancements

 * Dependencies
   * Dependency resolution mechanism
   * Dependency injection upon resolution of said dependencies
   * Lazy-load of dependencies that are not yet loaded
   * Likely move this out of core to its own library
 * Feature detection
   * Checks for threshold of minimum browser threshold to recieve enhancements beyond "basic"
   * SVG support for icon enhancement (fallback to just text if no support rather than current Grunticon approach)
   * Likely move this out of core to its own library
 * Templating
   * Support other templating libraries through same API (probably use `content-type` header to determine which)
   * Mustache/Hogan
