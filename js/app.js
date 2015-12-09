$.ready(function(){
  var theTemplateScript = $('#person_template').html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var content

  $.ajax({
    // This calls our people index off the server at said url
    url: 'http://localhost:3000/people',
    type: 'GET'
  }).then(function(response){
    content = JSON.parse(response);
    //context appears to be like a params hash, pass things in there and they can be used in the html file
    console.log(content);
    var context = {"name": content};
    console.log(context);
    var compiledHTML = theTemplate(context);
    $('.name-placeholder').append('LI',compiledHTML);

  }).catch(function(response){
    console.log("you ducked up");
  });



});
