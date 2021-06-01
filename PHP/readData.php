<?php
$servername = 'localhost';
$username = 'root';
$password = '';


$ConfirmationNumber = $_POST['confirmation_Number'];
$tripResult;
try{
    $conn = new PDO("mysql:host=$servername;dbname=amazingTour",$username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //check Connection

    $tripQuery = $conn->prepare("SELECT date_format(StartDate, '%m-%d-%Y')as StartDate, 
    date_format(EndDate,'%m-%d-%Y') as EndDate, TourName, ConfirmationNumber
    FROM TripBooked
    JOIN tourinformation on TripBooked.TourID = tourinformation.TourID
    WHERE ConfirmationNumber = :confirmation_Number");

    $tripQuery->bindParam(':confirmation_Number', $ConfirmationNumber);

    $tripQuery->execute();
    $tripQuery->setFetchMode(PDO::FETCH_ASSOC);

    $tripResult = $tripQuery->fetch();
    if(empty($tripResult)){
        echo "empty";
    }

    else{
        $guestQuery = $conn->prepare("SELECT FirstName, LastName, Email, PhoneNumber, Gender
        FROM TripBooked
        JOIN GuestInformation on TripBooked.CustomerID = GuestInformation.CustomerID
        WHERE ConfirmationNumber = :confirmation_Number");
        
        $guestQuery->bindParam(':confirmation_Number', $ConfirmationNumber);
    
        $guestQuery->execute();
        $guestQuery->setFetchMode(PDO::FETCH_ASSOC);
    
        $tripImploded = implode('...',$tripResult);
        $guestImploded = implode('...',$guestQuery->fetch());
        $resultImploded = $tripImploded . '...' . $guestImploded;
        echo($resultImploded);
    }

   
}

catch(PDOException $e){
    echo "Connection failed: " . $e->getMessage();
}