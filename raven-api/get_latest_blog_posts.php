<?php
$host_name = '10.7.1.2';
$user_name = 'root';
$password = 'notSecureChangeMe';

$db = new PDO("mysql:host=10.7.1.2", $user_name, $password);
$db->exec('use janikrabenstein_de');

$myparams = file_get_contents('php://input');

$myparams = json_decode($myparams, true);

$succes = 401;
http_response_code(401);

$stmt = $db->prepare('
SELECT id, title, teaser, content, date, slug FROM blog_posts ORDER BY date DESC LIMIT 4;
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
        SELECT blog_tags.id, blog_tags.name, blog_tags.slug FROM blog_tags
        INNER JOIN blog_post_has_tags ON blog_tags.id = blog_post_has_tags.tag_id
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