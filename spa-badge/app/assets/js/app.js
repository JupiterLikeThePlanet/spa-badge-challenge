$.ready(function(){
  var theTemplateScript = $('#person_template').html();
  var theTemplate = Handlebars.compile(theTemplateScript);

  $.ajax({
    url: '/',
    type: 'GET'
  }).then(function(response){
    console.log(response);
  });
});
