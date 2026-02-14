<?php
header("Content-Type: application/json");
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$title = $data["title"];
$amount = $data["amount"];

$conn->query("INSERT INTO expenses (title, amount) VALUES ('$title', '$amount')");

echo json_encode(["status" => "ok"]);
?>
