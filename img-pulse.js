(function(window, document, undefined) {
    // Refers to the "importer", which is index.html
    var thatDoc = document;
    // Refers to the "importee", which is src/hello-world.html
    var thisDoc =  (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;
    // Gets content from <template>
    var template = thisDoc.querySelector('template').content;
    // Creates an object based in the HTML Element prototype
    var ImgPulse = Object.create(HTMLElement.prototype);

    // Fires when an instance of the element is created
    ImgPulse.createdCallback = function() {
        // Creates the shadow root
        var shadowRoot = this.createShadowRoot();

        // Adds a template clone into shadow root
        var clone = thatDoc.importNode(template, true);
        shadowRoot.appendChild(clone);

        // Caches the elements
        this.pulseEl = shadowRoot.querySelectorAll('.ImgPulse-pulse')[0];
        this.photoEl = shadowRoot.querySelectorAll('.ImgPulse-photo')[0];

        // Checks if the "size" attribute has been overwritten
        if ( this.hasAttribute('size') ) {
            this.setSize( this.getAttribute('size') );
        } else {
            this.setSize( 150 );
        }

        if( this.hasAttribute('pulse-color') ) {
            this.setPulseColor( this.getAttribute('pulse-color') );
        } else {
            this.setPulseColor( '#ff0000' );
        }

        if (this.hasAttribute('src')) {
            this.setSrc( this.getAttribute('src') );
        }
    };

    // Fires when an instance was inserted into the document
    ImgPulse.attachedCallback = function() {
        this.pulse();
    };

    // Fires when an instance was removed from the document
    ImgPulse.detachedCallback = function() {};

    // Fires when an attribute was added, removed, or updated
    ImgPulse.attributeChangedCallback = function(attr, oldVal, newVal) {
        if(oldVal === newVal ) {
            return;
        }

        switch(attr) {
            case 'size':
                this.setSize( newVal );
                break;

            case 'src':
                this.setSrc( newVal );
                break;

            case 'pulse-color':
                this.setPulseColor( newVal );
                break;

        }
    };

    ImgPulse.pulse = function() {
        var pulseEl = this.pulseEl;
        var size = this.size;

        setInterval(function() {
            pulseEl.style.height = size + 'px';
            pulseEl.style.width = size + 'px';

            size++;

            if(size > 200) {
                pulseEl.style.opacity = pulseEl.style.opacity - 0.001
            }

            if(size > 500) {
                size = 50;

                pulseEl.style.height = size + 'px';
                pulseEl.style.width = size + 'px';
                pulseEl.style.opacity = 0.3;
            }
        }, 0);
    };

    ImgPulse.setSize = function(size) {
        this.size = size;
        this.photoEl.style.height = size + 'px';
        this.photoEl.style.width = size + 'px';
    };

    ImgPulse.setSrc = function(src) {
        this.src = src;
        this.photoEl.src = src;
    };

    ImgPulse.setPulseColor = function(color) {
        this.pulseColor = color;
        this.pulseEl.style.background = 'radial-gradient(white 25%, ' + color + ')';
        this.pulseEl.style.borderColor = color;
    };

    // Registers custom element
    document.registerElement('img-pulse', {
        prototype: ImgPulse
    });
}(window, document));