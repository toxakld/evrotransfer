<?php

$db = new PDO('mysql:host=localhost;dbname=coursework;charset=utf8', 'root', '');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $db->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $result = $stmt->execute([$username, $password]);

    if ($result) {
        
        header("Location: index.html");
        exit;
    } else {
        echo "Ошибка регистрации";
    }
}
?>
