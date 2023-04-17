(function () {
  function App() {
    if (!new.target) {
      return new App();
    }

    this.options = {
      header: document.querySelector(".page-header")
    };
    var _self = this;
    init();

    function accordionMenus() {
      var acc = document.querySelectorAll(".accordion__button");
      var toggler = function(el) {
        if (!el.classList.contains("is-active")) {
          el.closest(".accordion").querySelectorAll(".accordion__button").forEach(function(btn) {
            btn.classList.remove("is-active");
            btn.nextElementSibling.style.maxHeight = null;
          });
        }
        var panel = el.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
      for (var i = 0; i < acc.length; i++) {
        if (acc[i].classList.contains("is-active")) {
          toggler(acc[i]);
        }
        acc[i].addEventListener("click", function() {
          toggler(this);
          this.classList.toggle("is-active");
        });
      }
    }

    function scrollHeader() {
      const scrollTop = !!window.scrollY;
      if (scrollTop) _self.options.header.classList.add("is-scroll");
      else _self.options.header.classList.remove("is-scroll");
    }

    function scrollToTop() {
      const offsetTop = document.body.offsetTop;
      document.querySelector(".btn-to-top").addEventListener("click", function() {
        scroll({
          top: offsetTop,
          behavior: "smooth"
        });
      });
    }

    function menuToggle() {
      var nav = document.querySelector(".page-header__nav");
      document.querySelector(".burger-container").addEventListener("click", function () {
        nav.classList.toggle("is-animate");
      });
      document.addEventListener("click", function(ev) {
        if (!ev.target.closest(".page-header__nav")) {
          nav.classList.remove("is-animate");
        }
      });
    }

    function init() {
      menuToggle();
      scrollHeader();
      scrollToTop();
      accordionMenus();
      
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
  new App();
})();
