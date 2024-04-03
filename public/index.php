<?php
require_once "../config.php";

/*
try {
    $db = new PDO(DB_DRIVER . ":host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET . ";port=" . DB_PORT, DB_LOGIN, DB_PWD);
} catch (Exception $e) {
    die($e->getMessage());
}    
*/
if (isset($_GET["pg"])) {
    switch($_GET["pg"]) {
        case "home" :
            $title = "Welcome to my JS Games";
            include("../view/mainView.php");
            break;
        case "typing" :
            $title = "Test Your Typing Speed and Accuracy";
            include("../view/typingView.php");
            break;
            default :
            $title = "Welcome to my JS Game3s";
            include("../view/mainView.php");
        }
    }else {
        $title = "Welcome to my JS Games";
        include("../view/mainView.php");
    }
