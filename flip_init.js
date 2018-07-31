function flipInit() {
  window.onhashchange = hideHome('.global-nav__links a[href*="flip-plugin"]');

  function hideHome(selector) {

    function rafAsync() {
      return new Promise(resolve => {
        requestAnimationFrame(resolve); //faster than set time out
      });
    }

    async function checkElement(selector) {
      while (document.querySelector(selector) === null) {
        await rafAsync();
      }
      return document.querySelector(selector);
    }

    let flipHref = '';
    checkElement(selector)
      .then((element) => {
        flipHref = element.href;
        element.parentNode.style.display = 'none';

        checkElement('nav > .global-nav__logo > a') //Update Href of kibana logo
          .then((element) => {
            element.href = flipHref;
          });

      });


  }

}

export { flipInit };
