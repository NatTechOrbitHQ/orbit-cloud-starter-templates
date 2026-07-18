<?php
$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
if ($uri === "/health") {
    http_response_code(200);
    echo "ok";
    exit;
}
header("Content-Type: application/json");
echo json_encode(["service" => "orbit-php-starter", "status" => "ok"]);
