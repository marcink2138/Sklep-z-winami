<?php
include_once '../WinesManagement/WinesManagement.php';
include_once '../WinesManagement/WinesAPI.php';
include_once '../errorfun.php';
//register_shutdown_function('my_error_handler');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");


if ($_SERVER['REQUEST_METHOD']=='GET') {
    $winesAPI = new WinesAPI();
    $winesAPI->getOriginCountries();
}else{
    http_response_code(404);
    echo json_encode(array(
        "message"=>"Get method required"
    ));
}