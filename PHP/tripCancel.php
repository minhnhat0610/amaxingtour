<?php
$servername = 'localhost';
$username = 'root';
$password = '';

$ConfirmationNumber = $_POST['confirmation_Number'];

try{
    $conn = new PDO("mysql:host=$servername;dbname=amazingTour",$username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //check Connection
    
    $delete = $conn->prepare("DELETE FROM TripBooked WHERE ConfirmationNumber = :confirmationNumber");
    $delete->bindParam(':confirmationNumber', $ConfirmationNumber);
    if($delete->execute()){
        echo 'trip has been canceled successfully!';
    }

    else{
        echo 'unable to delete your trip. Please try again!';
    }
}

catch(PDOException $e){
    echo "Connection failed: " . $e->getMessage();
}