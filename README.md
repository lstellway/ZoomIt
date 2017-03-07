# ZoomIt - jQuery Zoom Plugin
jQuery plugin that adds simple, highly configurable dynamic zoom functionality for your images. 

## Options
  - **img** (jQuery Object)
  - **class** (Object) - Object containing different class names used by the plugin
    - **container** (String: Default `zoomit-container`) - Class to be used as the container for 
    - **loaded** (String: Default `loaded`) - Class to be used when the zoomed image is loaded
    - **img** (String: Default `zoomit-zoomed`) - Class to be used for the zoomed image element
    - **ghost** (String: Default `zoomit-ghost`) - Class to be used for the "ghost" element above the zoomed image element. The "ghost" element is used to watch mouse events.

## Events
  - **onZoomIn** (function) - Callback function that is executed when the image is zoomed
    - The **options** object is passed as an argument
  - **onZoomOut** (function) - Callback function that is executed when the image zoom is hidden
    - The **options** object is passed as an argument
  - **onClick** (function) - Callback function that is executed when the zoom area is clicked
    - The **options** object is passed as an argument
  - **onInit** (function) - Callback function that is executed when the plugin is initialized
    - The **options** object is passed as an argument

## API
You can access the ZoomIt options by accessing the "**zoom**" data property of your specified **img** option - **$(this)** by default. 

  - **enable()** - Enables zoom functionality
  - **disable()** - Disables zoom functionality
