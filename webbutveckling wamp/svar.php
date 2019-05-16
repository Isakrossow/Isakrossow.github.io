<?php

$username = filter_input(INPUT_GET, 'username', FILTER_SANITIZE_STRING);

echo"<h1>".htmlspecialchars($username, ENT_QUOTES)."<h1>";

 ?>
