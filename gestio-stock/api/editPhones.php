<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost;dbname=Phone","root","Tanger123");
$sql = "UPDATE Phones SET name = :name,Name = :Name, = :rollno,degree = :degree,branch = :branch WHERE id = $id";
$addStudentsQuery = $dbh->prepare($sql);
$addStudentsQuery->bindParam(":name",$_POST["name"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":Price",$_POST["Price"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":Model",$_POST["Model"],PDO::PARAM_STR);
$addStudentsQuery->execute();
?>
