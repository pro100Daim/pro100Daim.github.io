(function () {
  function App() {
    // Check "new" word
    if (!new.target) {
      return new App();
    }

    this.options = {
      header: document.querySelector(".page-header"),
      validations: {
        autoTrim: true,
        defaultBrowserValidation: false,
        errorTextClassName: 'error-message',
        //method is searching error block and return it
        getErrorTextBlock: (field) => {
          let element = field.nextElementSibling;
          if (element && element.classList.contains('error-message')) {
            return element;
          }
          return null;
        }
      }
    };

    this.scrollTo = scrollTo;

    var _self = this;
    init();

    function scrollHeader() {
      const scrollTop = !!window.scrollY;
      if (scrollTop) _self.options.header.classList.add("is-scroll");
      else _self.options.header.classList.remove("is-scroll");
    }

    function showMenu(close = false) {
      if (close || _self.options.header.querySelector(".burger-container").classList.contains("is-animate")) {
        _self.options.header.classList.remove("is-open");
        _self.options.header.querySelector(".burger-container").classList.remove("is-animate");
      } else {
        _self.options.header.classList.add("is-open");
        _self.options.header.querySelector(".burger-container").classList.add("is-animate");
      }
    }

    function scrollTo(ev) {
      showMenu(true);
      const toEl = ev.currentTarget.getAttribute("href") || document.body;
      scroll({
        top: toEl.offsetTop - _self.options.header.offsetHeight,
        behavior: "smooth"
      });
    }
    
    function formValidations() {
      _self.validation = new FormValidation(_self.options.validations);
    }

    function addEventListeners() {
      document.querySelectorAll(".btn-to-top, a[href^=\'#sec\']").forEach(function(el) {
        el.addEventListener('click', _self.scrollTo);  
      })
      document.querySelector('#nav-toggle')
      .addEventListener('click', function() {
        showMenu();
      });
    }

    function init() {
      addEventListeners();
      scrollHeader();
      formValidations();      
      
      window.onscroll = function() {
        scrollHeader();
        if (window.pageYOffset >= window.innerHeight) {
          document.querySelector(".btn-to-top").classList.add("is-show");
        } else {
          document.querySelector(".btn-to-top").classList.remove("is-show");
        }
      }
    }
  }
  window.APP = new App();
})(window);
