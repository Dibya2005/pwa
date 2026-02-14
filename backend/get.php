<?php
header("Content-Type: application/json");
include "db.php";

$res = $conn->query("SELECT * FROM expenses ORDER BY id DESC");

$out = [];

while ($row = $res->fetch_assoc()) {
  $out[] = $row;
}

echo json_encode($out);
?>
