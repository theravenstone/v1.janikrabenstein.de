<?php
$user_name = 'root';
$password = '4Fc$654%AZV%&VZP6';

$db = new PDO("mysql:host=10.7.1.2", $user_name, $password);
$db->exec('use janikrabenstein_de');

$myparams = file_get_contents('php://input');

$myparams = json_decode($myparams, true);


http_response_code(401);


$stmt = $db->prepare('
SELECT id, name, slug FROM tags;
');

$stmt->execute();

$tags = [];
foreach ($stmt as $s){
    http_response_code(200);
    $tag["id"] = $s["id"];
    $tag["name"] = $s["name"];
    $tag["slug"] = $s["slug"];
    $tags[] = $tag;
    
}

echo json_encode($tags)

?>