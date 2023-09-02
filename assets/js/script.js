  document.addEventListener('DOMContentLoaded', () => {

      function aos_init() {
          AOS.init({
              duration: 1000,
              easing: 'ease-in-out',
              once: true,
              mirror: false
          });
      }

      window.addEventListener('load', () => {
          aos_init();
      });

      const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
      if (mobileNavToogle) {
          mobileNavToogle.addEventListener('click', function (event) {
              event.preventDefault();

              document.querySelector('body').classList.toggle('mobile-nav-active');

              this.classList.toggle('bi-list');
              this.classList.toggle('bi-x');
          });
      }
      const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
      navDropdowns.forEach(el => {
          el.addEventListener('click', function (event) {
              if (document.querySelector('.mobile-nav-active')) {
                  event.preventDefault();
                  this.classList.toggle('active');
                  this.nextElementSibling.classList.toggle('dropdown-active');

                  let dropDownIndicator = this.querySelector('.dropdown-indicator');
                  dropDownIndicator.classList.toggle('bi-chevron-up');
                  dropDownIndicator.classList.toggle('bi-chevron-down');
              }
          })
      });

  });