# FieldDBActivityFeed

Activity feed widgets library

## Getting Started
### On the server
Install the module with: `npm install fielddb-activity-feed --save`

```javascript
var Glosser = require('FieldDBActivityFeed');
Glosser.init(); // "init"
```

### In the browser

Install the module with: `bower install fielddb-activity-feed --save`

Or, download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/OpenSourceFieldlinguistics/FieldDBActivityFeed/master/dist/scripts/scripts.min.js
[max]: https://raw.github.com/OpenSourceFieldlinguistics/FieldDBActivityFeed/master/dist/scripts/scripts.js

In your web page:

```html
<script src="bower_components/fielddb-activity-feed/dist/scripts/scripts.js"></script>
```

```javascript
angular
  .module('myAppThatUsesActivityFeeds', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'fielddbActivityHeatmap'
  ])
  .config(function($routeProvider, $locationProvider) {
    //...
  });

```
## Examples

To show a corpus's activity heat-map:

```html
<div data-fielddb-activity-heatmap json="activities"></div>
```



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "lib" subdirectory!_

## Release History

* Used by corpus pages 

## License
Copyright (c) 2013-2014 FieldDB Contributors
Licensed under the Apache 2.0 license.
