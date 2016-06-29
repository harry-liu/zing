'use strict';

var zingControllers = angular.module('zingControllers', []);

zingControllers.controller('SkillsCtrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('AboutCtrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('WorksCtrl', function($scope,$timeout,$rootScope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  //$scope.imageScale = 0;
  document.getElementById("logo").src = "img/logo.png";
  document.body.style.backgroundImage = "url('')";

  $scope.init = function(){
    $scope.tagStatus = false;
    if($rootScope.selectedTag){
      $scope.all = 'unselected';
      $scope.motionGraphic = 'unselected';
      $scope.film = 'unselected';
      $scope.branding = 'unselected';
      $scope.illustration = 'unselected';

      switch ($rootScope.selectedTag) {
          case 'all':
              $scope.all = 'selected';
              break;
          case 'motionGraphic':
              $scope.motionGraphic = 'selected';
              break;
          case 'film':
              $scope.film = 'selected';
              break;
          case 'branding':
              $scope.branding = 'selected';
              break;
          case 'illustration':
              $scope.illustration = 'selected';
              break;
          default:
              break;
      }
    }
    else{
      setRootScopeTag('all');
      $scope.all = 'selected';
      $scope.motionGraphic = 'unselected';
      $scope.film = 'unselected';
      $scope.branding = 'unselected';
      $scope.illustration = 'unselected';
    }
  }

  $scope.selecting = function(tag){
    $scope.all = 'unselected';
    $scope.motionGraphic = 'unselected';
    $scope.film = 'unselected';
    $scope.branding = 'unselected';
    $scope.illustration = 'unselected';
    switch (tag) {
        case 'all':
            $timeout(function(){$scope.all = 'selected'},600);
            setRootScopeTag('all');
            break;
        case 'motionGraphic':
            $timeout(function(){$scope.motionGraphic = 'selected'},600);
            setRootScopeTag('motionGraphic');
            break;
        case 'film':
            $timeout(function(){$scope.film = 'selected'},600);
            setRootScopeTag('film');
            break;
        case 'branding':
            $timeout(function(){$scope.branding = 'selected'},600);
            setRootScopeTag('branding');
            break;
        case 'illustration':
            $timeout(function(){$scope.illustration = 'selected'},600);
            setRootScopeTag('illustration');
            break;
        default:
            break;
    }
    $scope.changeTagStatus();
  }

  $scope.changeTagStatus = function(){
    $scope.tagStatus = !$scope.tagStatus;
  }

  function setRootScopeTag(tag){
    $rootScope.selectedTag = tag;
  }

  //$scope.selected = "all";
  // $scope.delayShow = function(answer){
  //   if(answer){
  //     console.log($(this));
  //   }
  //   else{
  //     $(this).css('width':'300px');
  //   }
  //   return true;
  // }

});

zingControllers.controller('ContactCtrl', function($scope) {
  $('html').css({
    'overflow': 'hidden',
    'height': '100%'
  });
  document.body.style.overflow = "hidden";
  document.getElementById("logo").src = "img/logo_white.png";
  document.getElementById("contact_content").src = "img/square.gif";
  document.body.style.backgroundImage = "url('img/contact_background.jpg')";
  document.body.style.backgroundSize = "cover";
  if(document.body.clientWidth > 768)
  {
    document.body.style.backgroundPositionY = "-600px";
  }
  else
  {
    document.body.style.backgroundPositionY = "0";
  }
});

zingControllers.controller('HomeCtrl', function($scope) {
  $('html').css({
    'overflow': 'hidden',
    'height': '100vh'
  });
  document.body.style.overflow = "hidden";
  document.getElementById("logo").src = "img/logo.png"
  var bodyContent = document.getElementById('bodyContent');
  var parallax = new Parallax(bodyContent);
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('Work1Ctrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('Work2Ctrl', function($scope) {

  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });

  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";

  $.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];
    
    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
    
    window.onscroll = function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }
  }

  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };

  moveItItem.prototype.update = function(scrollTop){
    var pos = scrollTop / this.speed;
    this.el.css('transform', 'translateY(' + -pos + 'px)');
  };

  $(function(){
    $('[data-scroll-speed]').moveIt();
  });
});

zingControllers.controller('Work3Ctrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('Work4Ctrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('Work5Ctrl', function($scope,$document) {
  $('html').css({
    'overflow': 'hidden',
    'height': 'auto'
  });

  document.getElementById("logo").src = "img/logo_white.png"
  document.body.style.backgroundImage = "url('')";

  var myMenu = angular.element( document.querySelector( '.menu' ) );
  myMenu.addClass('change-menu');

  $scope.$on('$locationChangeStart', function( event ) {
    myMenu.removeClass('change-menu');

  });

  var currentPosition = 1;
  var offset = 0;
  var duration = 500;

  $document.bind('mousewheel', function(event) {
    //event.preventDefault();
    var section1 = angular.element(document.getElementById('section-1'));
    var section2 = angular.element(document.getElementById('section-2'));
    var section3 = angular.element(document.getElementById('section-3'));

    if (event.originalEvent.wheelDelta >= 0) {
        //console.log('Scroll up');
        if (currentPosition == 3) {
          $document.scrollToElement(section2, offset, duration).then(function(){
            currentPosition--;
          });
        }
        else if (currentPosition == 2) {
          $document.scrollToElement(section1, offset, duration).then(function(){
            currentPosition--;
          });
        }
    }
    else {
        //console.log('Scroll down');
        if (currentPosition == 1) {
          $document.scrollToElement(section2, offset, duration).then(function(){
            currentPosition++;
          });
        }
        else if (currentPosition == 2) {
          $document.scrollToElement(section3, offset, duration).then(function(){
            currentPosition++;
          });
        }
    }
  })


});

zingControllers.controller('Work6Ctrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });

  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";

  $.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];
    
    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
    
    window.onscroll = function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }
  }

  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };

  moveItItem.prototype.update = function(scrollTop){
    var pos = scrollTop / this.speed;
    this.el.css('transform', 'translateY(' + -pos + 'px)');
  };

  $(function(){
    $('[data-scroll-speed]').moveIt();
  });
});

zingControllers.controller('Work7Ctrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('Work8Ctrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('Work9Ctrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('Work10Ctrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('Work11Ctrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('Work12Ctrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('Work13Ctrl', function($scope) {
  $('html').css({
    'overflow': 'auto',
    'height': 'auto'
  });
  document.getElementById("logo").src = "img/logo.png"
  document.body.style.backgroundImage = "url('')";
});

zingControllers.controller('BackController', function($scope) {
  $(window).scroll(function() {
   document.getElementById("backToTop").style.display = "block";
   var scroll = $(window).scrollTop();
   if (scroll == 0)
   {
    document.getElementById("backToTop").style.display = "none";
   }
  });

  $scope.back = function(){
    $(function() {
       $('body').scrollTop(0);
    });
  }
});
