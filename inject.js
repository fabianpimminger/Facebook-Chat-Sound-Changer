var intervalid;
var counter = 0;
	

function checksound(){
	counter++;
	
	if(counter == 10){
		clearInterval(intervalid);
	}
	
	if(typeof(Sound) != "undefined"){
		Sound.play = function(d,f){var a=false;var b='so_sound_player'; Sound.init();d = "http://www.facebook.com/sound/pop.mp3"; var g=URI(d);if(!g.getDomain())d=URI(env_get('static_base')).setPath(g.getPath()).toString();var e=document[b]||window[b];var c;if(/\.mp3$/.test(d))if(e){if(!e.playSound&&e.length)e=e[0];if(e.playSound){e.playSound(d, !!f);return;}}c=ge('sound');if(!c){c=document.createElement('span');c.setAttribute('id','sound');DOM.getRootElement().appendChild(c);}c.innerHTML='<embed src="'+d+'" autostart="true" loop="false" '+'hidden="true" />';}   
	}
	   
}


intervalid = setInterval(checksound, 1000);
