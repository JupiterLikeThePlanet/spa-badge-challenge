$.ready(function(){
  var theTemplateScript = $('#person_template').html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var content
  console.log("Starting:")
  $.ajax({
    url: 'http://localhost:3000/people',
    type: 'GET'
  }).then(function(response){
    // debugger
    // console.log('success');
    // console.log(response);
    content = JSON.parse(response);

    // console.log(content);
  }).catch(function(response){
    console.log("you fucked up");
  });
// debugger
  console.log("Content:");
  console.log(content);




});

function parse_response(response) {
  // processing happens here
  console.log("Running #parse_response");
  console.log(response);
  var parsed = JSON.parse(response);
  console.log(parsed);

  var array = [];
  for(var i = 0; i < parsed.length; i++) {
    console.log(parsed[i]);
  };
  return processed;
}
