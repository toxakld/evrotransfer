<?php
$host = 'localhost'; 
$database = 'coursework'; 
$user = 'root'; 
$password = ''; 
$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $conn->real_escape_string($_POST['name']);
$from = $conn->real_escape_string($_POST['from']);
$email = $conn->real_escape_string($_POST['email']);
$to = $conn->real_escape_string($_POST['to']);

$passengers = is_numeric($_POST['passengers']) ? (int)$_POST['passengers'] : 1;
$preferences = $conn->real_escape_string($_POST['preferences']);


$sql = "INSERT INTO feedbacks (name, from_location, email, to_location, passengers, preferences) VALUES ('$name', '$from', '$email', '$to', '$passengers', '$preferences')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
