document.addEventListener('DOMContentLoaded', () => {

  const featuredSlider = (function () {

    const CUSTOM_PARAMS =  {
      items: 1,
      responsive: {
        768: { items: 3 },
        992: { items: 4 },
        1700: { items: 5 }
      },
      gutter: 20,
      nav: false,
      mouseDrag: true,
      swipeAngle: false,
      speed: 400
    }

    let customsliders = [];
    // Check if the page has Custom Carousels before intialising them
    $(() => {
      if (document.querySelectorAll('[data-featured-slider]')) {
        [...document.querySelectorAll('[data-featured-slider]')].map(slider => {
          featuredSlider.init('[data-featured-slider=' + slider.getAttribute('data-featured-slider') + ']');
        });
      }
    })

    return {
      init: (selector, params) => {
        const container = {
          container: selector,
        },

        slider = tns({ ...CUSTOM_PARAMS, ...params, ...container });

        customsliders.push(slider);
      }
    }

  })();
});
