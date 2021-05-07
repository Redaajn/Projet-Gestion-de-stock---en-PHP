<?php
   
   // Ouverture de la connexion à la base de données
   $dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = 'Tanger123';
   $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
   
 
if(! $conn ) {
echo "not connected :";
exit();
}
 echo "Connected successfully";
?>

