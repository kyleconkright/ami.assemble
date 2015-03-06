<?php

    $message = "Interest: ".$_POST['interest']."\n";
    $message .= "Name: ".$_POST['name']."\n";
    $message .= "Company: ".$_POST['company']."\n";
    $message .= "Email: ".$_POST['email']."\n";
    $message .= "Phone: ".$_POST['phone']."\n";
    $message .= "Country: ".$_POST['country']."\n";
    $message .= "Message: ".$_POST['message']."\n";

    $message = wordwrap($message, 70);

    $subject = $_POST['interest'];

    mail('onlinesales@allenmyland.com', $subject, $message);
?>
