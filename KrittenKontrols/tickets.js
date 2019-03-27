//get ticket number from URL
var url = window.location.href;
var getNumber = url.split("/");
var number = getNumber[5];
var ticketRequestURL = "https://subdomain.zendesk.com/api/v2/tickets/" + number;
var get = "GET";
var user = "travisestill@company.com/token";
var apiKey = "<redacted>";

function checker(){

  $.ajax({
    method: get,
    url: ticketRequestURL,
    username: user,
    password: apiKey,
    success: function(resultTickets){
      var orgRequest = "https://subdomain.zendesk.com/api/v2/organizations/" + resultTickets.ticket.organization_id;

      $.ajax({
        method: get,
        url: orgRequest,
        username: user,
        password: apiKey,
        success: function (resultsOrganizations){
          var notes = resultsOrganizations.organization.notes;

                if (notes == "" || notes == null){
                $(".app_view.app-161644.apps_ticket_sidebar.box").hide();
                console.log("No notes found");
              } else {
                console.log("Notes Found");
              }
            }
      });
    }

  });
}

setTimeout(checker, 2000);
