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
SELECT id, name, description, url FROM projects;
');

$stmt->execute();

$projects = [];
foreach ($stmt as $s){
    $project["id"] = $s["id"];
    $project["name"] = $s["name"];
    $project["description"] = $s["description"];
    $project["url"] = $s["url"];

    $stmt2 = $db->prepare('
        SELECT tags.id, tags.name, tags.slug FROM tags
        INNER JOIN project_has_tags ON tags.id = project_has_tags.tag_id
        WHERE project_has_tags.project_id = :id;
        ');

        $stmt2->execute(['id' => $project["id"]]);

        $tags = [];
        foreach ($stmt2 as $s2){
            $tag["id"] = $s2["id"];
            $tag["name"] = $s2["name"];
            $tag["slug"] = $s2["slug"];
            $tags[] = $tag;

        }
        $project["tags"] = $tags;

    $projects[] = $project;
    
}

echo json_encode($projects)

?>