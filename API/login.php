<?php
include_once 'CustomerManagement/CustomerAPI.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

$customerAPI = new CustomerAPI();
$customerAPI->logInCustomer();