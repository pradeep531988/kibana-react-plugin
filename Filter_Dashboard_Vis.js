const localAppMapping = JSON.parse(localStorage.getItem('appMapping'));
  const localStorageStoredApp = localStorage.getItem('app');
  window.onpopstate = function() {
    if(document.location){
      if(document.location.href.indexOf('viewMode:edit') !== -1) {

        checkElement('[aria-label="Save your dashboard"]').then( element =>{
          debugger;
          angular.element(document.querySelector('.kuiLocalNavRow'))
          .scope().getDashboardState().appState.application = localStorageStoredApp ;
          angular.element(document.querySelector('.kuiLocalNavRow'))
            .scope().getDashboardState().savedDashboard.application = localStorageStoredApp;
        })
    
        }
    }
  
  }
  if (localStorageStoredApp) {
    if (window.location.href.indexOf('dashboard') !== -1) {
      // if(window.location.href.indexOf('viewMode:edit') !== -1) {
      //   // store.getState().appState.application  = localStorageStoredApp;
      // }

  

      const existCondition = setInterval(function () {
        if ($('.kuiTableRow').length) {
          // const element = document.querySelector('.kuiToolBarSearchBox__input');
          // element.value = localStorageStoredApp;
          let dashboardData = [];
          fetch("http://localhost:5601/"+window.location.href.split('/')[3]+"/api/saved_objects/?type=dashboard&search=" + localStorageStoredApp + "&per_page=1000&page=1&search_fields=application")
            .then((response) => response.json())
            .then((responseJson) => {
              dashboardData = responseJson.saved_objects;
              const dashBoardAttributes = [];
              dashboardData.forEach(d => {
                d.attributes.id = d.id;
                dashBoardAttributes.push(d.attributes);
              })
              angular
                .element(document.querySelector('.kuiToolBarSearchBox__input'))
                .scope().listingController.items =
                dashBoardAttributes;
              angular
                .element(document.querySelector('.kuiToolBarSearchBox__input'))
                .scope().listingController.pageOfItems =
                dashBoardAttributes;
              angular
                .element(document.querySelector('.kuiToolBarSearchBox__input'))
                .scope().listingController.pager.totalItems =
                dashBoardAttributes.length;
              angular
                .element(document.querySelector('.kuiToolBarSearchBox__input'))
                .scope().listingController.totalItems =
                dashBoardAttributes.length;
              angular
                .element(document.querySelector('.kuiToolBarSearchBox__input'))
                .scope()
                .$apply();
            })
            .catch(error => {
              console.error(error);
            });

          clearInterval(existCondition);

          // angular.element(element).triggerHandler('change');
        }
      }, 100);
    }
}