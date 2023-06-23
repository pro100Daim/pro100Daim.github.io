(function () {
  function App() {
    // Check "new" word
    if (!new.target) {
      return new App();
    }
    var _self = this;

    this.options = {
      header: document.querySelector(".page-header"),
      bot: {
        token: "NjIzNzczNDQwOTpBQUZGTGhMQmFmZzBQWmR0Yk1EUUNfbmlPVjhGb1doODBadw==",
        phrase: encodeURI("АХТУНГ! КТО-ТО НАСРАЛ В ТАБЛИЦУ!"),
        chatId: "-920880062",
      },       
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
    
    this.botMessageLink = makeLink();

    init();

    function scrollHeader() {
      const scrollTop = !!window.scrollY;
      if (scrollTop) _self.options.header.classList.add("is-scroll");
      else _self.options.header.classList.remove("is-scroll");
    }

    function toggler(ev) {
      if (ev.currentTarget && ev.currentTarget.closest("[data-toggler]")) {
        ev.currentTarget.closest("[data-toggler]").classList.toggle("is-open");
      }
    }

    function makeLink() {
      var bot = _self.options.bot;
      return "https://api.telegram.org/bot" + Base64.decode(bot.token) + "/sendMessage?chat_id=" + bot.chatId + "&text=" + bot.phrase;
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

    function expander(ev) {
      const content = document.querySelector(ev.currentTarget.dataset.expand);
      // const curHeight = content.clientHeight;
      content.style.height = 'auto';
      content.setAttribute('aria-expanded', true);
      var autoHeight = content.clientHeight;
      // with scroll height of scrolled element
      content.style.height = autoHeight;
      ev.currentTarget.remove();
    }

    function setMessage(ev) {
      var target = document.getElementById('message');
      var message = ev.currentTarget.dataset.message;

      target.value = message;
    }

    function scrollTo(ev) {
      showMenu(true);
      var toEl = ev.currentTarget.getAttribute("href") || document.body;
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
        el.addEventListener('click', scrollTo);  
      })
      document.querySelectorAll("[data-expand]").forEach(function(el) {
        el.addEventListener('click', expander);
      })
      document.querySelectorAll("[data-message]").forEach(function(el) {
        el.addEventListener('click', setMessage);
      })
      document.querySelectorAll(".js-toggle").forEach(function(el) {
        el.addEventListener('click', toggler);
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
