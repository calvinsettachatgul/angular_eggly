angular.module('Eggly', [


])
.controller('MainCtrl', function($scope){
  $scope.hello = 'world';
  $scope.categories=[
    {"id": 0,
     "name": "Development"
    },
    {"id": 1,
     "name": "Design"
    },
    {"id": 2,
     "name": "Exercise"
    },
    {"id": 3,
     "name": "Humor"
    },
  ]
  $scope.bookmarks = [
    {
      "id":0,
      "title":"AngularJS",
      "url": "http://angularjs.org",
      "category":"Developemnt"
    },
    {
      "id":1,
      "title":"Egghead.io",
      "url": "http://angularjs.org",
      "category":"Developemnt"
    },
    {
      "id":2,
      "title":"A List Apart",
      "url": "http://alistapart.com",
      "category":"Design"
    },
     {
      "id":3,
      "title":"A List Apart",
      "url": "http://alistapart.com",
      "category":"Humor"
    }

  ]
})