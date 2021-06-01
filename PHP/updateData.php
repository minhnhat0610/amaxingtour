<?php
$servername = 'localhost';
$username = 'root';
$password = '';

$confirmation = $_POST['confirmation_Number'];
$customerID;
$firstName = $_POST['guest_First_Name_Review_1'];
$lastName = $_POST['guest_Last_Name_Review_1'];
$email = $_POST['email_Review_1'];
$phoneNumber = $_POST['phone_Review_1'];
$gender = $_POST['gender_Review_1'];
try{
    $conn = new PDO("mysql:host=$servername;dbname=amazingTour",$username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    

    //Lookup customer ID base on Confirmation number
    $customerIDQuery = $conn->prepare('SELECT CustomerID
    FROM TripBooked
    where ConfirmationNumber = :confirmationNumber');
    $customerIDQuery->bindParam(':confirmationNumber', $confirmation);
    $customerIDQuery->execute();

    $customerIDQuery->setFetchMode(PDO::FETCH_ASSOC);


    //find Customer base on retrieved CustomerID
    $customerID = $customerIDQuery->fetch();

    $update = $conn->prepare('UPDATE GuestInformation
    SET FirstName = :firstName, LastName = :lastName, Email = :email, PhoneNumber = :phoneNumber, Gender = :gender
    WHERE CustomerID = :customerID');
    $update->bindParam(':firstName',$firstName);
    $update->bindParam(':lastName',$lastName);
    $update->bindParam(':email',$email);
    $update->bindParam(':phoneNumber',$phoneNumber);
    $update->bindParam(':gender',$gender);
    $update->bindParam(':customerID', $customerID['CustomerID']);

    if($update->execute()){
        echo 'Update successfully!';
    }
    else{
        echo 'Unable to update!';
    }

}

catch (PDOException $e){
    echo "Connection failed: " . $e->getMessage();

}