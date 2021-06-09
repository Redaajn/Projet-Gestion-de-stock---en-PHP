<?php
$dbh = new PDO("mysql:host=localhost;dbname=Phone","root","Tanger123");
$sql = " INSERT INTO Phones(Name,Price,Model) VALUES (:Name,:Price,:Model)";
$addphonesQuery = $dbh->prepare($sql);
$addphonesQuery->bindParam(":Name",$_POST["Name"],PDO::PARAM_STR);
$addphonesQuery->bindParam(":Price",$_POST["Price"],PDO::PARAM_STR);
$addphonesQuery->bindParam(":Model",$_POST["Model"],PDO::PARAM_STR);
$addphonesQuery->execute();
?>
