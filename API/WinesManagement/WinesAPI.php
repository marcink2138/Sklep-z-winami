<?php
include_once 'WinesManagement.php';
include_once '../DatabaseConnection/DatabaseConn.php';

class WinesAPI
{
    private $winesManagement;

    public function __construct()
    {
        $databaseConn = new DatabaseConn();
        $conn = $databaseConn->getConn();
        $this->winesManagement = new WinesManagement($conn);
    }

    public function getOriginCountries(){
        $resultSet = $this->winesManagement->getOriginCountries();
        $countries = array();
        while ($row = $resultSet->fetch(PDO::FETCH_ASSOC)){
            $countries[] = $row;
        }
        http_response_code(200);
        echo json_encode(array(
            'countries'=>$countries
        ));
    }

    public function getWinesFromCountry($country){
        $resultSet = $this->winesManagement->getWinesFromCountry($country);
        $winesFromCountry = array();
        while ($row = $resultSet->fetch(PDO::FETCH_ASSOC)){
            $winesFromCountry[] = $row;
        }
        http_response_code(200);
        echo json_encode(array(
            'wines'=>$winesFromCountry
        ));
    }

}