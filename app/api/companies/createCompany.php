<?php
include '../credentials.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn,"utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO Company (name, earnings, parent_id) VALUES ('$request->name', '$request->earnings', '$request->parent_id')";


if ($conn->query($sql) === TRUE) {
	$last_id = mysqli_insert_id($conn);
 	echo $last_id;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>