<?php

/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");



$url = "https://jsonplaceholder.typicode.com/comments?postId=3";
header('Content-Type: application/json');
echo $jsondata = file_get_contents($url); 