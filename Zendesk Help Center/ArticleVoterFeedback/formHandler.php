<?php

//global variables
$curl_connection = curl_init();
$credentials = parse_ini_file("sample.ini");
$feedbackImprovement = isset($_POST["feedbackImprovement"]) ? $_POST['feedbackImprovement'] : null;
$feedbackFavorite = isset($_POST["feedbackFavorite"]) ? $_POST['feedbackFavorite'] : null;
$ArticleIDNo = isset($_POST["ArticleIDNo"]) ? $_POST["ArticleIDNo"] : null;
$ArticleIDYes = isset($_POST["ArticleIDYes"]) ? $_POST["ArticleIDYes"] : null;
$originArticleFieldId = 360002643753;

//create array of data to be posted
if ($feedbackImprovement !== null) {
    $sentiment = 'Negative';
    $body = $feedbackImprovement;
    $articleFieldValue = $ArticleIDNo;
} else {
    $sentiment = 'Positive';
    $body = $feedbackFavorite;
    $articleFieldValue = $ArticleIDYes;
}

$data = array(
    'ticket' => array(
        'subject' => "New Article Feedback ($sentiment)",
        'comment' => array('body' => $body),
        'priority' => 'normal',
        'custom_fields' => array( 0 => array('id' => $originArticleFieldId, 'value' => $articleFieldValue)),
    ),
);

//conver array to json and get length
$data_string = json_encode($data);
$contentLength = strlen($data_string);

//headers
$headers = array(
    'Content-Type:application/json',
    'Content-lengh: '. $contentLength,
    'Access-Control-Allow-Origin:https://help.company.com',
    'Authorization: Basic '. base64_encode($credentials["user"] . ":" . $credentials["apiKey"])  //pulled from sample.ini
);

//define curlOpts
curl_setopt($curl_connection, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($curl_connection, CURLOPT_URL, 'https://company.zendesk.com/api/v2/tickets.json');
curl_setopt($curl_connection, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($curl_connection, CURLOPT_USERAGENT,
    "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.17 Safari/537.36");
curl_setopt($curl_connection, CURLOPT_RETURNTRANSFER, false);
curl_setopt($curl_connection, CURLOPT_HEADER, 0);
curl_setopt($curl_connection, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl_connection, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl_connection, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($curl_connection, CURLOPT_PUT, 0);
curl_setopt($curl_connection, CURLOPT_POST, 1);
curl_setopt($curl_connection, CURLINFO_HEADER_OUT, true);

//perform our request
$result = curl_exec($curl_connection);


//show information regarding the request

echo curl_errno($curl_connection) . '-' .
    curl_error($curl_connection);

if(curl_errno($curl_connection))
{
    echo 'error:' . curl_error($curl_connection);
} else {
    echo "Connection Established";
}

//close the connection
curl_close($curl_connection);
return $result;
