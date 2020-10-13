<?php

$recepient = "zpmainbarbershop@gmail.com";
$sitename = "m2barber";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$city = trim($_POST["city"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \n Город: $city \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");