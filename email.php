<?php
	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
	$output['isValid'] = true;
	echo json_encode($output);
?>