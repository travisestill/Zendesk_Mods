$(function() {
  var client = ZAFClient.init();
  client.invoke('resize', { width: '100%', height: '120px' });
  client.get('ticket.organization.id').then(
	function(data) {
		var org_id = data['ticket.organization.id'];
        requestUserInfo(client, org_id);
	}
  );
});

function requestUserInfo(client, org_id) {
  var settings = {
    url: '/api/v2/organizations/' + org_id + '.json',
    type:'GET',
    dataType: 'json',
  };

  client.request(settings).then(
    function(data) {
      showInfo(data);
    },
    function(response) {
      showError(response);
    }
  );
}

function showInfo(data) {
    var requester_data = {
      'notes': data.organization.notes
    };
    var source = $("#requester-template").html();
    var template = Handlebars.compile(source);
    var html = template(requester_data);
    $("#content").html(html);
  }

function showError(response) {
  var error_data = {
    'status': response.status,
    'statusText': response.statusText
  };
  var source = $("#error-template").html();
  var template = Handlebars.compile(source);
  var html = template(error_data);
  $("#content").html(html);
}
