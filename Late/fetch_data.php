
<?php
header('Content-Type: application/json'); 

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "employee_db"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT `DATE`, `EMPLOYEE_ID`, `TIME_IN`, `SCHEDULED_TIME` FROM late_employees ORDER BY `DATE` DESC";
$result = $conn->query($sql);

$data = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = [
            "DATE" => $row["DATE"],
            "EMPLOYEE_ID" => $row["EMPLOYEE_ID"],
            "TIME_IN" => $row["TIME_IN"],
            "SCHEDULED_TIME" => $row["SCHEDULED_TIME"],
        ];
    }
}


echo json_encode($data);
$conn->close();
?>