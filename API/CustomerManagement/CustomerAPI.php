<?php
include_once 'CustomerManagement/CustomerManagement.php';
include_once 'DatabaseConnection/DatabaseConn.php';

class CustomerAPI
{
    private $customerManagement;

    public function __construct()
    {
        $databaseConn = new DatabaseConn();
        $conn = $databaseConn->getConn();
        $this->customerManagement = new CustomerManagement($conn);
    }

    public function registerCustomer()
    {
        $data = json_decode(file_get_contents("php://input"));
        $email = $data->email;

        if ($this->customerManagement->checkIfEmailExist($email)) {
            if ($this->customerManagement->registerNewCustomer($data)) {
                http_response_code(200);
                echo json_encode(array(
                    "message" => "Account registered successful!"
                ));
            } else {
                http_response_code(400);
                echo json_encode(array(
                    "message" => "Server Error"
                ));
            }
        } else {
            http_response_code(400);
            echo json_encode(array(
                "message" => "There is account connceted with this email"
            ));
        }
    }

    public function logInCustomer()
    {
        $data = json_decode(file_get_contents("php://input"));
        $login = $data->login;
        $password = $data->password;

        if ($this->customerManagement->checkIfCustomerExist($login, $password)) {
            http_response_code(200);
            echo json_encode(
                array(
                    "id" => $this->customerManagement->id,
                    "password" => $this->customerManagement->first_name,
                    "last_name" => $this->customerManagement->last_name,
                    "address_street" => $this->customerManagement->address_street,
                    "address_postal_code" => $this->customerManagement->address_postal_code,
                    "address_city" => $this->customerManagement->address_city,
                    "login" => $this->customerManagement->login,
                    "email" => $this->customerManagement->email,
                    "mobile" => $this->customerManagement->mobile,
                    "message" => "User logged successful!"
                )
            );
        } else {
            http_response_code(401);
            echo json_encode(
                array(
                    "message" => "User does not exist!"
                )
            );
        }
    }
}