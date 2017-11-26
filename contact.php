<?php
if(isset($_POST['email'])) {
	$from = $_POST['email'];
	$to = "sharedcare@hotmail.com";
    $subject = "Comments from homepage";
} else {
	$errName = 'Please enter your email<br />';
} 

if(isset($_POST['name']) && isset($_POST['surname'])) {
	$first_name = $_POST['name'];
	$last_name = $_POST['surname'];
} else {
	$errName = 'Please enter your name<br />';
}
$message = $_POST['message'];
$body = "From: $first_name $last_name\nE-Mail: $from\nMessage: $message";
$headers = 'From: $from' . "\r\n" .
    'Reply-To: $to' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail ($to, $subject, $body, $headers)) {
	$result='div class="alert alert-success">Thank You! Your message </div>';
} else {
	$result='<div class="alert alert-danger">Sorry there was an error sending your message.</div>';
}
?>