<?php


class WinesManagement
{
    private $conn;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getOriginCountries(){
        $query = "SELECT DISTINCT country FROM wine";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function getWinesFromCountry($country){
        $query = "SELECT * FROM wine WHERE country = :country";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':country', $country);
        $stmt->execute();
        return $stmt;
    }

}