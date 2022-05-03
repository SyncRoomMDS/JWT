<?php
/*$username = "b08d12de22c049";
$password = "d49f8fc8";
$host = "eu-cdbr-west-02.cleardb.net";
$database = "heroku_8d7f3340915580c";
$port = 3306;*/

$host = "bj2076817-002.eu.clouddb.ovh.net";
$port = 35627;
$username = "syncroom";
$password = "ir2AS8as5mfhsHSg";
$database = "syncroom-api";

try {
  /*$conn = new PDO("mysql://[$username]:[$password]@[$host]/[$database]?reconnect=true", $username, $password);*/
  $conn = new PDO("mysql:host=$host;port=$port;dbname=$database;", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>