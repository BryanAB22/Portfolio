<?php
  if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Replace with your email address
    $to = "bryanbarrios89@gmail.com";
    $subject = "New Contact Form Submission from $name";

    $headers = "From: $name <$email>";

    if (mail($to, $subject, $message, $headers)) {
      http_response_code(200);
      echo "Thank You! Your message has been sent.";
    } else {
      http_response_code(500);
      echo "Oops! Something went wrong, please try again later.";
    }
  } else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
  }
?>
