<?php

include '../credentials.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn,"utf8");

$sql = "SELECT * FROM Company WHERE parent_id=$postdata";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
		$rows = array();
		while($r = mysqli_fetch_assoc($result)) {
		    $rows[] = $r;
		}
		print json_encode($rows);   
    
} else {
    echo json_encode(array());
}

$conn->close();
?>