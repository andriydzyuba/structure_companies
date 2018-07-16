<?php
include '../credentials.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
mysqli_set_charset($conn,"utf8");

$sql = "UPDATE Company SET name='$request->name', earnings='$request->earnings', parent_id='$request->parent_id' WHERE id='$request->id'";


if ($conn->query($sql) === TRUE) {
    echo "Successfully updated";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>