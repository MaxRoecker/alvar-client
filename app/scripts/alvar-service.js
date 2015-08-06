var AlvarService = AlvarService || {};

/* Resource */
AlvarService.Resource = AlvarService.Resource || {};

AlvarService.Resource.find = function() {
  var req = new XMLHttpRequest();
  var result;
  req.addEventListener('load',function(){

  })

  req.open('get','http://0.0.0.0:3000/api/Resources');
  req.send();
};
