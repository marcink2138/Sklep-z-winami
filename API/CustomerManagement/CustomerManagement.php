<?php
include_once '../config/errorConfig.php';

class CustomerManagement
{
    private $conn;
    public $id;
    public $first_name;
    public $last_name;
    public $address_city;
    public $address_postal_code;
    public $address_street;
    public $login;
    private $password;
    public $email;
    public $mobile;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function checkIfCustomerExist($email, $password)
    {
        $query = "SELECT * FROM customers WHERE email = :email AND password = :password";
        $stmt = $this->conn->prepare($query);
        $this->email = htmlspecialchars(strip_tags($email));
        $this->password = htmlspecialchars(strip_tags($password));
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);
        $stmt->execute();

        $rowNumber = $stmt->rowCount();

        if ($rowNumber == 1) {
            $resultSet = $stmt->fetch(PDO::FETCH_ASSOC);
            $this->id = $resultSet['id'];
            $this->first_name = $resultSet['first_name'];
            $this->last_name = $resultSet['last_name'];
            $this->address_city = $resultSet['address_city'];
            $this->address_postal_code = $resultSet['address_postal_code'];
            $this->address_street = $resultSet['address_street'];
            $this->email = $resultSet['email'];
            $this->mobile = $resultSet['mobile'];
            return true;
        }
        $this->login = '';
        $this->password = '';
        return false;
    }

    public function registerNewCustomer($data)
    {
        $query = "INSERT INTO customers (first_name, last_name, 
                       address_city, address_postal_code,
                       address_street, login,
                       password, email,
                       mobile) VALUES (
                              :first_name, :last_name, 
                              :address_city, :address_postal_code, 
                              :address_street, :login,
                              :password, :email,
                              :mobile)";

        $stmt = $this->conn->prepare($query);
        $this->setParams($data);
        $stmt->bindParam(":first_name", $this->first_name);
        $stmt->bindParam(":last_name", $this->last_name);
        $stmt->bindParam(":address_city", $this->address_city);
        $stmt->bindParam(":address_postal_code", $this->address_postal_code);
        $stmt->bindParam(":address_street", $this->address_street);
        $stmt->bindParam(":login", $this->login);
        $stmt->bindParam(":password", $this->password);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":mobile", $this->mobile);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function checkIfEmailExist($email)
    {
        $query = "SELECT email FROM customers WHERE email = :email";
        $stmt = $this->conn->prepare($query);
        $tempEmail = htmlspecialchars(strip_tags($email));
        $stmt->bindParam(":email", $tempEmail);
        $stmt->execute();
        return $stmt->rowCount() == 0;
    }

    public function addToBasket($data, $customerId){
        $query = "INSERT INTO basket (id_customer, id_wine, amount) VALUES (:id_customer, :id_wine, :amount)";
        $stmt = $this->conn->prepare($query);
        $wineId = htmlspecialchars(strip_tags($data->wineId));
        $customerId = htmlspecialchars(strip_tags($customerId));
        $amount = htmlspecialchars(strip_tags($data->amount));
        $stmt->bindParam(":id_customer", $customerId);
        $stmt->bindParam(":id_wine", $wineId);
        $stmt->bindParam(":amount", $amount);
        try {
            if ($stmt->execute())
                return true;
            return false;
        }catch (PDOException $e){
            echo $e;
            return false;
        }
    }

    public function getBasket($customerId){
        $query = "SELECT basket.id, wine.name as wineName, basket.amount FROM basket, wine WHERE id_customer = :id_customer AND wine.id = id_wine";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id_customer", $customerId);
        $stmt->execute();
        return $stmt;
    }

    public function deleteFromBasket($data, $customerId){
        $ids = array_values($data->ids);
        $query = "DELETE FROM basket WHERE id IN (" . implode(",", array_map('intval', $ids)) . ") AND id_customer = :id_customer";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id_customer", $customerId);
        try {
            if ($stmt->execute())
                return true;
            return false;
        }catch (PDOException $e){
            echo $e;
            return false;
        }
    }

    

    private function setParams($data)
    {
        $this->login = htmlspecialchars(strip_tags($data->login));
        $this->password = htmlspecialchars(strip_tags($data->password));
        $this->first_name = htmlspecialchars(strip_tags($data->first_name));
        $this->last_name = htmlspecialchars(strip_tags($data->last_name));
        $this->address_city = htmlspecialchars(strip_tags($data->address_city));
        $this->address_postal_code = htmlspecialchars(strip_tags($data->address_postal_code));
        $this->address_street = htmlspecialchars(strip_tags($data->address_street));
        $this->email = htmlspecialchars(strip_tags($data->email));
        $this->mobile = htmlspecialchars(strip_tags($data->mobile));
    }

}