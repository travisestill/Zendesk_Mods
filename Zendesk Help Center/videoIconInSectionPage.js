//Section page video icons

$(document).ready(function() {
  $('.article-list-link').each(function(index,value) {
      var articleUrlRaw = ($(this).attr('href'));
      var articleUrlParsed = articleUrlRaw.split("/")[4];

    $.getJSON('https://company.zendesk.com/api/v2/help_center/en-us/articles/' + articleUrlParsed, function(data) {
      var labels = [];
      $('.article-list-link').each(function(index, el) {
        if ($(this).text() === data.article.name) {
          labels.push(data.article.label_names);
          if (data.article.label_names.indexOf("featurevideo") > -1) {
            $(this).append("  " + '<img src="{{asset 'videoIcon.png'}}">');
          }
        }
      });
    });
  });
});
