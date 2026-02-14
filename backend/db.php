<?php
$conn = new mysqli("localhost", "root", "db17012005", "expense_pwa");

if ($conn->connect_error) {
  die("DB Connection failed");
}
?>
