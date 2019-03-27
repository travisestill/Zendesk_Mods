//This belongs on the search template

//get search term from URL
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
//append the query parameter to the api request
var searchTerm = getQueryVariable("query");
var searchAPI = "https://company.zendesk.com/api/v2/help_center/articles/search.json?query=" + searchTerm;

//spit out an array of labels
$(document).ready(function() {
  var links = {};
  $(".search-result-link").each(function(i, item) {
    console.log(item);
    links[$(item).html()] = item;
  });
    $.getJSON(searchAPI, function(data){
        $.each(data.results, function (index, item) {
          if (links[item.name] !== undefined) {
            console.log(item);
            if (item.label_names.indexOf("featurevideo") > -1) {
  						$(links[item.name]).append("  " + '<img src="{{asset 'videoIcon.png'}}">');
            }
            else {
              console.log("failure inner");
            }
          }
          else {
            console.log("failure outer");
          }

        });
    });
});
