<?php
$servername = 'localhost';
$username = 'root';
$password = '';

$customerID = "CUS002";
$firstName = $_REQUEST['guest_First_Name_Review_1'];
$lastName = $_REQUEST['guest_Last_Name_Review_1'];
$email = $_REQUEST['email_Review_1'];
$phone = $_REQUEST['phone_Review_1'];
$gender = $_REQUEST['gender_Review_1'];


function dateGenerate($string){
    $new_array = explode("-",$string);
    $month =  $new_array[0];
    $day = $new_array[1];
    $year = $new_array[2];

    $newDate = $year . "-" . $month . "-" . $day;
    return $newDate;
}
$tourName = $_REQUEST['tour_Name'];
$confirmationNumber = $_REQUEST['confirmation_Number'];
$tourID;
$startDate = dateGenerate($_REQUEST['startDate_Review']);
$endDate = dateGenerate($_REQUEST['endDate_Review']);





try{
    $conn = new PDO("mysql:host=$servername;dbname=amazingTour",$username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected to database successfully";
    //check Connection

    //Look your TourID
    $tourIDQuery = $conn->prepare("SELECT TourID
    from tourinformation
    where TourName = :tourName");
    $tourIDQuery->bindParam(':tourName', $tourName);
    $tourIDQuery->execute();

    $tourIDQuery->setFetchMode(PDO::FETCH_ASSOC);

    $tourID = $tourIDQuery->fetch();

    //create user
    $sql = $conn->prepare("INSERT INTO GuestInformation 
        VALUES (:customerID, :firstName, :lastName, :email, :phone, :gender)");
    $sql->bindParam(':customerID',$customerID);
    $sql->bindParam(':firstName',$firstName);
    $sql->bindParam(':lastName',$lastName);
    $sql->bindParam(':email',$email);
    $sql->bindParam(':phone',$phone);
    $sql->bindParam(':gender',$gender);

    echo "<br>";
    echo "<br>";
    $sql->execute();
    echo "New guest added successfully!";


    //create trip
    $sql2 = $conn->prepare("INSERT INTO tripBooked
        VALUES (:ConfirmationNumber, :CustomerID, :TourID, :StartDate, :EndDate)");
    $sql2->bindParam(':ConfirmationNumber',$confirmationNumber);
    $sql2->bindParam(':CustomerID',$customerID);
    $sql2->bindParam(':TourID',$tourID['TourID']);
    $sql2->bindParam(':StartDate',$startDate);
    $sql2->bindParam(':EndDate',$endDate);
    echo "<br>";
    $sql2->execute();
    echo "New trip added successfully!";

    // //Sent confirmation to email
    // ini_set("SMTP", "email-smtp.us-east-2.amazonaws.com");
    // ini_set("sendmail_from", "corydang0610@gmail.com");

    // $email_from = 'amazingtours@gmail.com';
    // $email_subject = 'Amazing Tours - Confirmation';
    // $email_body = "Thank you for booking with us
    //                 \n Your Confirmation number: $confirmationNumber";
    // $to = $email;
    // $header = "From: $email_from \r\n";

    // mail($to,$email_subject,$email_body,$header);
}

catch(PDOException $e){
    echo "Connection failed: " . $e->getMessage();
}



