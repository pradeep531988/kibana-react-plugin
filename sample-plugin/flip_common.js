// inject

function initFlip() {
  window.onhashchange = populateDropDown(window.location);
  window.onload = hideLink();
}

//To hide any sidebar links
function hideLink() {
  checkElement('.global-nav__links a[href*="flip-plugin"]')
    .then((element) => {
      const flipHref = element.href;
      element.parentNode.style = 'display : none';
      checkElement('nav > .global-nav__logo > a') //Update Href of kibana logo
        .then((element) => {
          element.href = flipHref;
        });

    });
}


function waitForElement() {
  return new Promise(resolve => {
    requestAnimationFrame(resolve);
  });
}

async function checkElement(selector) {
  const element = document.querySelector(selector);
  while (element === null) {
    await waitForElement();
  }
  return element;
}

function hideHomeLink() {
  let flipHref = '';
  checkElement('.global-nav-link a[href*="flip-plugin"]')
    .then((element) => {
      flipHref = element.href;
      element.parentNode.style.display = 'none';

      checkElement('nav > .global-nav__logo > a') //Update Href of kibana logo
        .then((element) => {
          element.href = flipHref;
        });

    });
}

function getApplicationList(url) {
  //const myHeaders = new Headers();

  const myInit = { method: 'GET',
    //headers: myHeaders,
    //mode: 'cors',
    cache: 'default'
  };

  const myRequest = new Request(url, myInit);
  return fetch(myRequest).then(function (data) {
    return data.json();
  }).catch(error => {console.error(error);}
  );
}

function populateDropDown(location) {
  const allApplicationName = 'ALL APPLICATIONS';
  const hashChecker = ['#/discover', '#/visualize', '/dashboards', '#/dashboard']; //Dropdown allowed location
  const isDrowDownAllowed = hashChecker.some((hashRoute) => {
    return location.hash.match(hashRoute);});

  if (!isDrowDownAllowed) {
    return;
  }

  checkElement('.kuiLocalMenu')
    .then((element) => {

      const applicationJson = getApplicationList('https://18ff233a-df27-42ac-87d2-863c44a26085.mock.pstmn.io/scroll');
      let dropDownValues = [];
      dropDownValues.push(allApplicationName);
      applicationJson.then(data => data.map(function (element) {
        dropDownValues.push(element.title);
      })).then(function () {
        const ele = document.querySelector('.flip-drop');
        if (ele === undefined || ele == null) {
          dropDownValues =  [...new Set(dropDownValues)].sort();
          const wrapperDiv = document.createElement('div');
          wrapperDiv.style.margin = '5px 25px 5px 5px';
          wrapperDiv.className = 'form-group row flip-drop';
          /*
          const selectLabel = document.createElement('div');
          selectLabel.innerHTML = 'Select application';
          selectLabel.className = 'kuiButton col-md-6';
          selectLabel.style = 'text-align : right; padding-right: 0px;font-size:15px;font-weight:700';

          wrapperDiv.appendChild(selectLabel); */
          const selectDiv = document.createElement('div');
          selectDiv.className = 'col-md-12';
          const select = document.createElement('select');
          select.className = 'form-control';
          select.style.color = 'white';
          select.style.background = '#0079a5';
          select.style.width = '183px';
          select.addEventListener(
            'change',
            function () { localStorage.setItem('app', select.value); },
            false
          );
          selectDiv.appendChild(select);
          wrapperDiv.appendChild(selectDiv);
          element.appendChild(wrapperDiv);
          const option = document.createElement('option');
          option.setAttribute('disabled', 'disabled');
          option.setAttribute('selected', 'selected');
          option.setAttribute('hidden', 'hidden');
          option.setvalue = '';
          option.innerHTML = allApplicationName;
          const localStorageStoredApp = localStorage.getItem('app');

          if(localStorageStoredApp && localStorageStoredApp !== 'undefined') {
            option.setvalue = localStorageStoredApp;
            option.innerHTML = localStorageStoredApp;
            option.removeAttribute('disabled');
            option.removeAttribute('hidden');
          }
          select.appendChild(option);

          dropDownValues.splice(dropDownValues.indexOf(localStorageStoredApp), 1);
          dropDownValues.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v;
            opt.innerHTML = v;
            select.appendChild(opt);
          });
        }});

    });

}

export { initFlip };