<?php
// weight.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow requests from anywhere (development)

// Handle only GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Only GET requests are allowed']);
    exit;
}

// Dummy data — normally this would come from a database
$weights = [
    ['date' => '2025-04-01', 'weight' => 75.0],
    ['date' => '2025-04-05', 'weight' => 74.9],
    ['date' => '2025-04-08', 'weight' => 74.5],
    ['date' => '2025-04-15', 'weight' => 74.2],
    ['date' => '2025-04-22', 'weight' => 73.8],
    ['date' => '2025-04-28', 'weight' => 73.5],
    ['date' => '2025-04-29', 'weight' => 73.6],
];

// Return the dummy weight entries
echo json_encode(
    $weights
);
