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
SELECT id, title, teaser, content, date, slug FROM blog_posts ORDER BY date DESC;
');

$stmt->execute();

$posts = [];

foreach ($stmt as $s) {
	  
		http_response_code(200);

		$data["id"] = $s["id"];
		$data["title"] = $s["title"];
		$data["teaser"] = $s["teaser"];
		$data["content"] = $s["content"];
		$data["date"] = $s["date"];
		$data["slug"] = $s["slug"];

        $stmt2 = $db->prepare('
        SELECT tags.id, tags.name, tags.slug FROM tags
        INNER JOIN blog_post_has_tags ON tags.id = blog_post_has_tags.tag_id
        WHERE blog_post_has_tags.post_id = :id;
        ');

        $stmt2->execute(['id' => $data["id"]]);

        $tags = [];
        foreach ($stmt2 as $s2){
            $tag["id"] = $s2["id"];
            $tag["name"] = $s2["name"];
            $tag["slug"] = $s2["slug"];
            $tags[] = $tag;

        }
        $data["tags"] = $tags;
        
	    $posts[] = $data; 
}
echo json_encode($posts);
return json_encode($posts);
?>