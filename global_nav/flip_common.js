function flipInit() {
  window.onhashchange = populateDropDown();
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

  function populateDropDown() {

    function rafAsync() {
      return new Promise(resolve => {
        requestAnimationFrame(resolve); //faster than set time out
      });
    }

    async function checkElement(selector) {
      while (document.querySelector(selector) === null) {
        await rafAsync();
      }
      return true;
    }

    checkElement('.kuiLocalMenu') //use whichever selector you want
      .then((element) => {
        const arrayList = ['Application', 'Application1', 'Application2', 'Application3', 'Application4'];
        const div = document.createElement('div');
        const select = document.createElement('select');
        select.id = 'applicationDropDown';
        console.log(document.querySelector('.kuiLocalMenu'));
        const label = document.createElement('label');
        label.innerHTML  = 'Application List';
        div.appendChild(label);
        div.appendChild(select);
        document.querySelector('.kuiLocalMenu')
          .appendChild(
            div);
        //Create and append the options
        arrayList.forEach(d => {
          const option = document.createElement('option');
          option.value = d;
          option.text = d;
          select.appendChild(option);
        });

      });
  }
}

//https://gist.github.com/hexad3cimal/c3de0ca5c5b00b7d2f6cc11b0d66dd0b
export { flipInit };
