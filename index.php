<!DOCTYPE html>
<html>
	<head>
		<title>Leap Motion JS</title>
		<meta charset="utf-8">
      	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
    	<meta name="description" content="Music in Motion">
    	<meta name="author" content="Huy Le">

    	<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
		<link href="http://fonts.googleapis.com/css?family=Ubuntu|Open+Sans:400,600" rel="stylesheet" />
	</head>
	<body>

	<div id = "splashScreen">
		<img id = "splashIcon" src = "img/icon1.png"></img>
	</div>

    <div class = "container" style = "margin-top: 100px">
	    <div class = "col-md-6">
	    	<img src = "img/donut.png" id = "aDonut">
	    	<img src = "img/donut.png" id = "donut" style = "z-index: 100;">
	    </div>
	    <div class = "col-md-6">
	    	<img src = "img/pokeball.png" id = "aPokeball">
	    	<img src = "img/pokeball.png" id = "pokeball" style = "z-index: 100;">
	    </div>
    </div>

    <br>
    <div class = "container text-center">
    	<audio controls src="sound/music1.mp3" id="mp3" preload="auto"></audio>
		<!-- <button onClick = "playMP3();">Click to play MP3</button> -->
	</div>
	<br>

	<div id="songList">
		<button class="songbuttons" id="song1">Somewhere Over The Rainbow</button>
		<button class="songbuttons" id="song2">Slay It</button>
		<button class="songbuttons" id="song3">Bangarang</button>
		<button class="songbuttons" id="song4">Bang!</button>
		<button class="songbuttons" id="song5">Can't Tell Me Nothing</button>
		<button class="songbuttons" id="song6">Come with me now</button>
		<button class="songbuttons" id="song7">Dragon Rider</button>
		<button class="songbuttons" id="song8">Elements</button>
		<button class="songbuttons" id="song9">Happy</button>
		<button class="songbuttons" id="song10">Incredible</button>
		<button class="songbuttons" id="song11">One Tribe</button>
		<button class="songbuttons" id="song12">Rap God</button>
		<button class="songbuttons" id="song13">Pentonix</button>
		<button class="songbuttons" id="song14">Turn Down for what</button>
		<button class="songbuttons" id="song15">21 Guns</button>
		<button class="songbuttons" id="song16">Titanium</button>
	</div>

	<script type="text/javascript">
		function playMP3(){
			document.getElementById("mp3").play();
		}
	</script>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="//js.leapmotion.com/leap-0.4.3.min.js"></script>
	<script src="//js.leapmotion.com/leap-plugins-0.1.3.js"></script>
	<script src="js/musicinmotion.js"></script>
	</body>
</html>