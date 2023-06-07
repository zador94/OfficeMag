<?php
require($_SERVER['DOCUMENT_ROOT'] . "/bitrix/header.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $errorText = $_POST['error'];
}
//Отправить на электронную почту
$to = 'zador94@mail.ru';
$subject = 'Ошибка на сайте';
$message = 'Текст ошибки' . $errorText;

$result = \CEvent::Send(
    "FEEDBACK_FROM", // Идентификатор почтового события
    's1', // ID сайта на котором происходит отправка(может быть изменен)
    [
        'EMAIL_TO' => $to, // Получатель письма
        'SUBJECT' => $subject, // Тема письма
        'MESSAGE' => $message // Текст письма
    ]
);

if ($result) {
    // Ответить клиенту что сообщение успешно отправлено
    http_response_code(200);
} else {
    // Ошибка отправки
    http_response_code(500);
}
