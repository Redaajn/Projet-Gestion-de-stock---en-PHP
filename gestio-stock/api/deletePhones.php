<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost;dbname=Phone","root","Tanger123");
$sql = "DELETE FROM Phones WHERE id = $id";
$getphones = $dbh->prepare($sql) ;
$getphones->execute();
?>
