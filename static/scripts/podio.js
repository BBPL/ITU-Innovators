// Embeds the iframe for the webform into the referencing webpage and handles
// resizing on of the iframe on request of the document inside it
(function (window, undefined) {

  var forms = {};

  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function indexOf(elt /*, from*/) {
      var len = this.length >>> 0;

      var from = Number(arguments[1]) || 0;
      from = (from < 0) ? Math.ceil(from) : Math.floor(from);
      if (from < 0) {
        from += len;
      }

      for (; from < len; from++) {
        if (from in this && this[from] === elt) {
          return from;
        }
      }
      return -1;
    };
  }

  function applyContext(context, func) {
    return function() {
      func.apply(context, arguments);
    };
  }

  function receiveMessage(callback, origin) {
    var attachedCallback;
    if (window['postMessage']) { // the browser supports window.postMessage
      if (callback) {
        attachedCallback = function(e) {
          if ((typeof origin === 'string' && e.origin !== origin)
              || (Object.prototype.toString.call(origin) === "[object Function]" && origin(e.origin) === false))
          {
            return false;
          }
          callback(e);
        };
      }

      if (window['addEventListener']) {
        window[callback ? 'addEventListener' : 'removeEventListener']('message', attachedCallback, !1);
      } else {
        window[callback ? 'attachEvent' : 'detachEvent']('onmessage', attachedCallback);
      }
    }
  }

  function getForm(identifier) {
    if (!forms[identifier]) {
      forms[identifier] = new PodioWebForm(identifier);
      forms[identifier].initialize();
    }
    return forms[identifier];
  }

  function render(identifier) {
    getForm(identifier).render();
  }

  function configure(identifier, params) {
    var form = getForm(identifier);
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        form[key] = params[key];

        if(key == 'frameUrl') {
          form['domain'] = params[key].replace( /([^:]+:\/\/[^\/]+).*/, '$1');
        }
      }
    }
    form.setupMessaging();
  }

  // Form object instance
  function PodioWebForm(identifier) {
    this.identifier = identifier;
    this.key = '';
    this.height = '';
    this.frameUrl = '';
    this.domain = '';
    this.iframeId = '';
    this.disabledUrl = '';
    this.allowedDomains = '';
    this.isDisabled = false;
    this.theme = '';

    this.initialize = function() {
      this.key = this.identifier + '' + Math.floor(Math.random() * 1000000);
      this.iframeId = 'podioWebForm' + this.key;
    };

    this.setupMessaging = function() {
      window._podioWebForm.receiveMessage(applyContext(this, this.onFormResize), this.domain);
    };

    this.render = function() {
      this.isDisabled = this.allowedDomains.indexOf(location.host) === -1;
      document.write(this.generateFrameMarkup());
    };

    this.onFormResize = function(message) {
      if(!message.data) {
        return;
      }

      var msg_components = message.data.split(':');
      if(msg_components.length < 2) {
        return;
      }

      var senderId = msg_components[0];

      if(senderId != this.identifier) {
        return;
      }

      var curHt = parseInt(msg_components[1], 10);
      if (!curHt) {
        return;
      }

      var scrollToTop = (msg_components[2] === 'true');

      var iframe = document.getElementById(this.iframeId);
      // iframe.style.height = (curHt) + "px";

      // Scroll to iframe if there is an error message
      if(scrollToTop) {
        //FIXME: Unrequired jquery.scrollTo
        window.scrollTo(0, absOffsetTop(iframe));
      }
    };

    this.generateFrameMarkup = function() {
      return '<iframe class="podio-webform-frame" id="' + this.iframeId + '"' + ' height="' + this.height + '" style="width:100%;border:none;overflow:scroll !important"' + 'allowTransparency="true" frameborder="0" scrolling="yes"' + 'src="' + ((this.isDisabled) ? this.disabledUrl + '?domain=' + location.host : this.frameUrl) + '#' + encodeURIComponent(document.location.href) + '"></iframe>';
    };
  }

  function absOffsetTop(domObject){
    var selectedPosY = 0;

    while(domObject !== null){
      selectedPosY += domObject.offsetTop;
      domObject = domObject.offsetParent;
    }

    return selectedPosY;
  }

  // Expose methods
  window._podioWebForm = {
    configure: configure,
    render: render,
    receiveMessage: receiveMessage
  };


})(window);


_podioWebForm.configure(1592076, {"height":730,"frameUrl":"https://podio.com/webforms/22559549/1592076?e=true","disabledUrl":"https://podio.com/webforms/22559549/1592076/disabled","allowedDomains":["dev.itu-innovators.dk"],"theme":"flatly"});
_podioWebForm.render("1592076");
console.log("should be added now");
