# ZoomIt - jQuery Zoom Plugin
jQuery plugin that adds simple, highly configurable dynamic zoom functionality for your images.

## Usage
  - Include jQuery

  ```
  <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  ```

  - Include ZoomIt (CSS / Script)

  ```
  <link rel="stylesheet" media="all" href="dist/styles/zoomit.css" />
  <script src="dist/scripts/jquery.zoomit.min.js"></script>
  ```

  - Initialize on image element

  ```
  <img id="zoomit-target" src="/path/to/small.jpg" data-zoomed="/path/to/large.jpg" alt="Image To Zoom">

  <script type="text/javascript">
  $('#zoomit-target').zoomIt();
  </script>
  ```

## Bower
The plugin is available on the Bower registry
```
bower install --save zoomit
```

## NPM / Yarn
The package is also available via the NPM repository. Simply:
```
npm install --save zoomit
```
Or
```
yarn add zoomit
```

## Options
  - **img** ([jQuery Object](https://api.jquery.com/Types/#jQuery)) - The "unzoomed" image object that is intended to zoom
  - **src** ([String](https://api.jquery.com/Types/#String) | [Function](https://api.jquery.com/Types/#Function)) - May either be a string or a function that returns a string of the path to the large image to be zoomed.
  - **class** ([Object](https://api.jquery.com/Types/#Object)) - Object containing different class names used by the plugin
    - **container** ([String](https://api.jquery.com/Types/#String): Default `zoomit-container`) - Class to be used for the container
    - **loaded** ([String](https://api.jquery.com/Types/#String): Default `loaded`) - Class to be used when the zoomed image is loaded
    - **img** ([String](https://api.jquery.com/Types/#String): Default `zoomit-zoomed`) - Class to be used for the zoomed image element
    - **ghost** ([String](https://api.jquery.com/Types/#String): Default `zoomit-ghost`) - Class to be used for the "ghost" element above the zoomed image element. The "ghost" element is used to watch mouse events.

## Events
  - **onZoomIn** ([Function](https://api.jquery.com/Types/#Function)) - Callback function that is executed when the image is zoomed
    - The **options** object is passed as an argument
  - **onZoomOut** ([Function](https://api.jquery.com/Types/#Function)) - Callback function that is executed when the image zoom is hidden
    - The **options** object is passed as an argument
  - **onClick** ([Function](https://api.jquery.com/Types/#Function)) - Callback function that is executed when the zoom area is clicked
    - The **options** object is passed as an argument
  - **onInit** ([Function](https://api.jquery.com/Types/#Function)) - Callback function that is executed when the plugin is initialized
    - The **options** object is passed as an argument

## API
You can access the ZoomIt options by accessing the "**zoom**" data property of your specified **img** option - **$(this)** by default.

  - **enable()** - Enables zoom functionality
  - **disable()** - Disables zoom functionality

Example:
```
$('#zoomit-target').data('zoom').enable()
```
