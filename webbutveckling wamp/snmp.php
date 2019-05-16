<?php
$syscontact = snmp2_get("192.168.30.1", "public", "system.sysUpTime.0");

echo "<h2>" .$syscontact."</h2>";


 ?>
