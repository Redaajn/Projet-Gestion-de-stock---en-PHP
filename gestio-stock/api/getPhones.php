<?php
$dbh = new PDO("mysql:host=localhost;dbname=Phone","root","Tanger123");
$sql = " SELECT * FROM Phones ";
$phonesQuery = $dbh->query($sql);
$getphones = $phonesQuery->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getphones));
?>
