<?php 
// Database connection file
// Uncomment for Live/Hosted Connection
// $host = "";
// $dbname = "";
// $dbuser = "";
// $password = "";

// Variables for Local connection
$host = "localhost";
$dbname = "labinvites";
$dbuser = "root";
$password = "";

$db = new mysqli($host,$dbuser,$password,$dbname); 

?>