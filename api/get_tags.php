<?php
$username = 'root';
$password = '4Fc$654%AZV%&VZP6';
$database = 'janikrabenstein_de';

$db = new PDO("mysql:host=10.7.1.2", $username, $password);
$db->exec('use '. $database);

$myparams = file_get_contents('php://input');

$myparams = json_decode($myparams, true);


http_response_code(200);


$stmt = $db->prepare('
SELECT id, name, slug FROM tags;
');

$stmt->execute();

$tags = [];
foreach ($stmt as $s){
    $tag["id"] = $s["id"];
    $tag["name"] = $s["name"];
    $tag["slug"] = $s["slug"];
    $tags[] = $tag;
    
}

echo json_encode($tags)

?>