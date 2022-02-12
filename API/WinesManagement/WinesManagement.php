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
        } catch (PDOException $e) {
            return false;
        }
    }

    public function filterWines()
    {
        $query = "SELECT * FROM wine WHERE 1";
        $filters = $this->getFilters();
        if (!empty($filters)) {
            foreach ($filters as $filter) {
                $query = $query . $filter;
            }
        }
        $stmt = $this->conn->prepare($query);
        if (isset($_GET['country'])) {
            $stmt->bindParam(":country", $_GET['country']);
            echo $_GET['country'];
        }
        if (isset($_GET['importerName'])) {
            $stmt->bindParam(":importerName", $_GET['importerName']);
        }
        echo $query;
        $stmt->execute();
        return $stmt;
    }

    private function getFilters()
    {
        $filters = array();
        if (isset($_GET['country'])) {
            $filters[] = " AND country = :country";
        }
        if (isset($_GET['importerName'])) {
            $filters[] = " AND id_importer = (SELECT id_importer FROM importer WHERE name = :name)";
        }
        if (isset($_GET['price'])) {
            if ($_GET['price'] == "DESC") {
                $filters[] = " ORDER BY price DESC";
            } else {
                $filters[] = " ORDER BY price ASC";
            }
        } elseif (isset($_GET['quantity'])) {
            if ($_GET['quantity'] == "DESC") {
                $filters[] = " ORDER BY quantity DESC";
            } else {
                $filters[] = " ORDER BY quantity ASC";
            }
        } elseif (isset($_GET['name'])) {
            if ($_GET['name'] == "DESC") {
                $filters[] = " ORDER BY name DESC";
            } else {
                $filters[] = " ORDER BY name ASC";
            }
        }
        return $filters;
    }

}