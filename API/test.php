<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: POST");
$test = array();
$test['id'] = "ABCD";

echo json_encode($test);