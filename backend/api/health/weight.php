<?php
// weight.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$weights = [
    ['date' => '2025-04-01', 'weight' => 75.0],
    ['date' => '2025-04-05', 'weight' => 74.9],
    ['date' => '2025-04-08', 'weight' => 74.5],
    ['date' => '2025-04-15', 'weight' => 74.2],
    ['date' => '2025-04-22', 'weight' => 73.8],
    ['date' => '2025-04-28', 'weight' => 73.5],
    ['date' => '2025-04-29', 'weight' => 73.6],
];

// Handle only GET requests
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Return the dummy weight entries
    echo json_encode(
        $weights
    );
} elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    $input = file_get_contents('php://input');
    $newEntries = json_decode($input, true);
    echo json_encode(['status' => 'success']);
} elseif ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code(200);
    exit;
} else {
    http_response_code(405);
    echo json_encode(['error' => 'This request method is not allowed!']);
    exit;
}
