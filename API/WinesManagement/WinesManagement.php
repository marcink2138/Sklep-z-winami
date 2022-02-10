<?php
include_once '../config/errorConfig.php';

class WinesManagement
{
    private $conn;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getOriginCountries()
    {
        $query = "SELECT DISTINCT country FROM wine";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function getWinesFromCountry($country)
    {
        $query = "SELECT * FROM wine WHERE country = :country";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':country', $country);
        $stmt->execute();
        return $stmt;
    }

    public function createNewWine($data, $importerId, $imgPath)
    {
        $query = "INSERT INTO wine (country, price, name, wine_type, id_importer, capacity, alcoholic_strength, img_path)
                VALUES (:country, :price, :name, :wine_type, :id_importer, :capacity, :alcoholic_strength, :img_path)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':country', $data->country);
        $stmt->bindParam(':price', $data->price);
        $stmt->bindParam(':name', $data->name);
        $stmt->bindParam(':wine_type', $data->wineType);
        $stmt->bindParam(':id_importer', $importerId);
        $stmt->bindParam(':capacity', $data->capacity);
        $stmt->bindParam(':alcoholic_strength', $data->alcoholicStrength);
        $stmt->bindParam(':img_path', $imgPath);
        try {
            if ($stmt->execute())
                return true;
            return false;
        }catch (PDOException $e){
            return false;
        }
    }

}