$(document).ready(function() {

    var partners = [
        "redacted1@redacted.agency",
        "redacted2@redacted.agency",
        "redacted3@redacted.agency",
        "redacted4@redacted.agency",
        "redacted5@redacted.agency",
        "redacted6@redacted.agency",
        "redacted7@redacted.agency",
        "redacted8@redacted.agency",
        "redacted9@redacted.agency",
        "redacted10@redacted.agency",
        "redacted11@redacted.agency",
        "immyouany@gmail.com"
    ]


    var checkExist = setInterval(function() {
        if ($('td._1yROUQkfNEKqWjFTc17eMi._1HvyyLKrooIkCnFS1csmzA').length) {
            console.log("Exists!");

            $("#manage-content").find("._1vZ2GMaRAsTjvdQSRORCBj td._1yROUQkfNEKqWjFTc17eMi._1HvyyLKrooIkCnFS1csmzA").each(function(index) {
                var email = $(this).text();
                if ($.inArray(email, partners) !== -1) {
                    $(this).prepend('<span class="partner"> Partner</span>  ');
                    console.log("found email");
                } else {
                    console.log(email);
                }
            });
            clearInterval(checkExist);
        }
    }, 100); // check every 100ms if the element exists.
});
