/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.authenticated = false;

  app.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!document.querySelector('platinum-sw-cache').disabled) {
      document.querySelector('#caching-complete').show();
    }
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    //console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    var resourceViewList = document.querySelector('resource-view-list');
    resourceViewList.refresh();

    var authorization = document.createElement('alvar-authentication');
    console.log(authorization.isAuthenticated());
    app.authenticated = authorization.isAuthenticated();

    // imports are loaded and elements have been registered

    // var login = document.querySelector('alvar-login');
    // var drawerPanel = document.querySelector('#paperDrawerPanel');
    // var resourceView = document.querySelector('resource-view');
    // var resourceViewList = document.querySelector('resource-view-list');
    // var resourceCreateInterface = document.querySelector('resource-create-interface');
    // var menu = document.querySelector('')
    //
    // login.addEventListener('authorized',function(){
    //   login.close();
    // });
    //
    // resourceViewList.refresh();
    // resourceViewList.addEventListener('menu',menuHandler);
    //
    // resourceView.addEventListener('menu',menuHandler);
    //
    // resourceCreateInterface.addEventListener('unauthorized',function(){
    //   login.open();
    // });
    //
    // resourceCreateInterface.addEventListener('resource-created',function(){
    //   page.redirect('/');
    //   resourceViewList.refresh();
    // });
    //
    // resourceCreateInterface.addEventListener('menu',menuHandler);

  });

  app.authenticatedHandler = function(){
    app.authenticated = true;
    app.closeLogin();
  };

  app.unauthenticatedHandler = function(){
    app.authenticated = false;
    app.openLogin();
  };

  //Open login modal
  app.openLogin = function () {
    var login = document.querySelector('alvar-login');
    login.open();
  };

  //Close login modal
  app.closeLogin = function (){
    var login = document.querySelector('alvar-login');
    login.close();
  };

  //Open menu if screen is narrow
  app.openMenu = function () {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.openDrawer();
    }
  };

  //Close menu if the screen is narrow
  app.closeMenu = function(){
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  }

  //Redirect the user to home page
  app.redirectToHome = function () {
    var resourceViewList = document.querySelector('resource-view-list');
    resourceViewList.refresh();
    page.redirect('/');
  };

  //Redirect the user to previous page
  app.redirectToPrevious = function () {
    window.history.back();
  };

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
     document.getElementById('mainContainer').scrollTop = 0;
  };

})(document);
