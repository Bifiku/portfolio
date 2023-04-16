<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = 'andrey0499@mail.ru'; // замените на свой email
  $subject = 'Новое сообщение с сайта';
  $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";
  
  if (mail($to, $subject, $body)) {
    echo 'Ваше сообщение было успешно отправлено.';
  } else {
    echo 'Произошла ошибка при отправке сообщения.';
  }
}
?>