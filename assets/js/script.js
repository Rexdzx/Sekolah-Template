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

      let navbarlinks = document.querySelectorAll('#navbar .scrollto');

      function navbarlinksActive() {
          navbarlinks.forEach(navbarlink => {

              if (!navbarlink.hash) return;

              let section = document.querySelector(navbarlink.hash);
              if (!section) return;

              let position = window.scrollY;
              if (navbarlink.hash != '#header') position += 200;

              if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                  navbarlink.classList.add('active');
              } else {
                  navbarlink.classList.remove('active');
              }
          })
      }

      window.addEventListener('load', navbarlinksActive);
      document.addEventListener('scroll', navbarlinksActive);


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

  const glightbox = GLightbox({
      selector: '.glightbox'
  });

  let KsIsotope = document.querySelector('.karya-siswa-isotope');

  if (KsIsotope) {

      let ksFiler = KsIsotope.getAttribute('data-karya-siswa-filter') ? KsIsotope.getAttribute('data-karya-siswa-filter') : '*';
      let ksLayout = KsIsotope.getAttribute('data-karya-siswa-layout') ? KsIsotope.getAttribute('data-karya-siswa-layout') : 'masonry';
      let ksSort = KsIsotope.getAttribute('data-karya-siswa-sort') ? KsIsotope.getAttribute('data-karya-siswa-sort') : 'original-order';

      window.addEventListener('load', () => {
          let KsIsotope = new Isotope(document.querySelector('.karya-siswa-container'), {
              itemSelector: '.karya-siswa-item',
              layoutMode: ksLayout,
              filter: ksFiler,
              sortBy: ksSort
          });

          let menuFilters = document.querySelectorAll('.karya-siswa-isotope .filter-karya-siswa li');
          menuFilters.forEach(function (el) {
              el.addEventListener('click', function () {
                  document.querySelector('.karya-siswa-isotope .filter-karya-siswa .filter-active').classList.remove('filter-active');
                  this.classList.add('filter-active');
                  KsIsotope.arrange({
                      filter: this.getAttribute('data-filter')
                  });
                  if (typeof aos_init === 'function') {
                      aos_init();
                  }
              }, false);
          });

      });

  }