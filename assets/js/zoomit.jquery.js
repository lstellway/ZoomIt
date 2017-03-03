(function(code){
    code(document, window, jQuery);
}(function(document, window, $){
    $.fn.zoomIt = function (options) {
        // Default parameters
        var defaults = {
            status: 0,
            loaded: 0,
            img: $(this),
            offset: [0,0],
            class: {
                container: 'zoomit-container',
                loaded: 'loaded',
                img: 'zoomit-zoomed',
                ghost: 'zoomit-ghost'
            },
            // Get image src
            src: function () {
                return this.img.data('zoomed')
            },
            // Get zoom image src
            getSrc: function () {
                return typeof this.src == 'function' ? this.src() : this.src;
            },
            // Image HTML
            imgTag: null
        };

        // Merge options
        options = $.extend(defaults, options);



        // Get container
        options.getContainer = function () {
            return $('<div class="' + options.class.container + '"></div>');
        };
        
        // Get zoom image src
        options.getImgSrc = function () {
            if ( options.imgTag === null ) {
                options.imgTag = $('<img />').addClass( options.class.img ).attr('src', this.getSrc());

                // Alt Tag
                if ( typeof options.img.attr('alt') !== 'undefined' ) {
                    options.imgTag.attr( 'alt', options.img.attr('alt') );
                }
            }

            return options.imgTag;
        };

        // Get zoomed image instance
        options.getZoomInstance = function () {
            return options.img.parent().find('.' + options.class.img);
        };

        // Position zoomed image element
        options.setPosition = function (event) {
            // Add loaded class
            options.img.parent().addClass( options.class.loaded );
            options.loaded = 1;

            // Set position
            options.position = {
                img: {
                    width: options.img.width(),
                    height: options.img.height(),
                    offset: options.img.offset()
                },
                zoom: {
                    width: options.getZoomInstance().width(),
                    height: options.getZoomInstance().height()
                }
            };

            // Percentages
            options.position.x = (event.pageX - options.position.img.offset.left) / options.position.img.width;
            options.position.y = (event.pageY - options.position.img.offset.top) / options.position.img.height;

            // Offsets
            options.position.zoom.offset = {
                left: (options.position.zoom.width - options.position.img.width) * options.position.x,
                top: (options.position.zoom.height - options.position.img.height) * options.position.y
            };

            options.getZoomInstance().css({
                'transform': 'translate(-' + options.position.zoom.offset.left + 'px, -' + options.position.zoom.offset.top + 'px)'
            });
        };

        // Show zoom
        options.show = function (event) {
            // Return early if image is loading
            if ( options.status === 1 && options.loaded === 0 ) {
                return;
            }

            // Set zoom status
            options.status = 1;

            // Append image
            if ( options.img.parent().find('.' + options.class.img).length == 0 ) {
                options.img.after( options.getImgSrc() );

                // Image loaded callback
                options.getZoomInstance().on('load', function() {
                    options.setPosition(event);
                }).each(function() {
                    if( this.complete ) options.setPosition(event);
                });
            } else {
                options.setPosition(event);
            }
        };

        // Hide zoom
        options.hide = function () {
            options.status = 0;
            options.imgTag = null;
            options.img.parent().removeClass( options.class.loaded );
            options.getZoomInstance().remove();
        };

        // Move zoom
        options.move = function (event) {
            if (options.status) {
                options.show(event);
            }
        };

        // Initialize
        options.init = function () {
            options.img
                .wrap( options.getContainer() )
                .after('<div class="' + options.class.ghost + '"></div>');

            // Ghost
            options.ghost = options.img.parent().find('.' + options.class.ghost);

            // Mouse events
            options.ghost.on('mouseenter touchstart', function (event) {
                options.show(event);
            }).on('mouseleave touchend', function () {
                options.hide();
            }).on('mousemove touchmove', function (event) {
                event.preventDefault();
                options.move(event);
            });
        };
        
        // Destroy
        options.destroy = function () {
            // 
        };

        // Bind zoom data
        $(this).data('zoom', options);
        options.init();
    };
}));
