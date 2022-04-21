<?php
$user_name = 'root';
$password = 'notSecureChangeMe';

$db = new PDO("mysql:host=10.7.1.2", $user_name, $password);
$db->exec('use janikrabenstein_de');

$myparams = file_get_contents('php://input');

$myparams = json_decode($myparams, true);


http_response_code(401);


$stmt = $db->prepare('
SELECT id, name, description, url FROM projects;
');

$stmt->execute();

$projects = [];
foreach ($stmt as $s){
    http_response_code(200);
    $project["id"] = $s["id"];
    $project["name"] = $s["name"];
    $project["description"] = $s["description"];
    $project["url"] = $s["url"];
    $projects[] = $project;
    
}

echo json_encode($projects)

?>