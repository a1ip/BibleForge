<?php

/**
 * BibleForge
 *
 * @date    10-30-08
 * @version 0.2 alpha
 * @link http://BibleForge.com
 * @license Reciprocal Public License 1.5 (RPL1.5)
 * @author BibleForge <http://mailhide.recaptcha.net/d?k=01jGsLrhXoE5xEPHj_81qdGA==&c=EzCH6aLjU3N9jI2dLDl54-N4kPCiE8JmTWHPxwN8esM=>
 */

error_reporting(E_ALL);

?>
<!doctype html>
<html>
<head>
	<meta http-equiv=content-type content="text/html; charset=UTF-8">
	<title>BibleForge</title>
	<link rel=stylesheet type="text/css" href="styles/base.css">
</head>
<?php flush() ?>
<body>
<div id=topBar>
	<div id=searchBar>
		<form action="#" onsubmit="return prepare_new_search(true);">
			BibleForge
			<input type=text name=q id=q>
			<input type=submit name=Search value=Go>
		</form>
	</div>
	<div id=infoBar></div>
</div>
<div id=topLoader class=loader></div><div id=page></div><div id=bottomLoader class=loader></div>
<script src="js/lang/en.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>
</body>
</html>