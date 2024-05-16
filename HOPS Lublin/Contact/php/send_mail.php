<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['imie'];
    $email = $_POST['email'];
    $phone = $_POST['numer'];
    $message = $_POST['wiadomosc'];
    
    $to = "konung1109@gmail.com";
    $subject = "Nowa wiadomość od " . $name;
    $body = "Imię: " . $name . "\n" . "Email: " . $email . "\n" . "Telefon: " . $phone . "\n" . "Wiadomość: " . $message;

    if (mail($to, $subject, $body)) {
        echo "SENDED!";
    } else {
        echo "ERROR";
    }
}
?>