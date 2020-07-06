function record() {var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.onresult = function(event) {
document.getElementById('o').value = event.results[0][0].transcript;}
recognition.start();};
var cars = ["https://abp-i.akamaihd.net/hls/live/765529/abphindi/master.m3u8","https://tinyurl.com/Sony-yay",
"https://tinyurl.com/Sony-Max"
,"http://z5amshls.akamaized.net/ztvme/tracks-v1a1/playlist.m3u8","http://103.214.202.218:8081/live/zeecinema-34/chunks.m3u8","https://itpolly.iptv.digijadoo.net/live/star_gold/chunks.m3u8","https://sony247channels.akamaized.net/hls/live/2011671/SETHD/master.m3u8?hdnea=exp=1594424839~acl=/*~hmac=83f1aab290adcecd58296efe621ec7c8ed08d086c488a97c87cf62465105997c&__nn__=5606168722001&hdne",
"https://sony247channels.akamaized.net/hls/live/2011749/SABHD/master.m3u8?hdnea=exp=1594424839~acl=/*~hmac=83f1aab290adcecd58296efe621ec7c8ed08d086c488a97c87cf62465105997c&__nn__=5606168722001&hdne","https://itpolly.iptv.digijadoo.net/live/zing/chunks.m3u8","http://fash1043.cloudycdn.services/slive/_definst_/ftv_pg16_adaptive.smil/playlist.m3u8",
"http://103.135.208.14/live/ibox/bd/2.m3u8?RocketTV",
"http://103.135.208.14/live/ibox/bd/93.m3u8?RocketTV",
"http://103.135.208.14/live/ibox/bd/53.m3u8?RocketTV"
];
var cc =["abp news","sony yay", "sony max","zee tv","zee cinema","star gold","sony tv","sony Sab" ,"zing","fashion tv","cartoon network","animal planet","star sports"];
function search(){ var v =document.getElementById('o').value;
v=v.toLowerCase(); 
var a = cc.indexOf(v);
document.getElementById('myImage').src=cars[a];}
function next(i){ var u=i+1;
if(i<12){
document.getElementById('myImage').src = cars[u];document.getElementById('d'). onclick=function(){ next(u);};
document.getElementById('demo'). innerHTML= cc[u];
document.getElementById('g'). onclick=function(){ ext(u);};}
if(i>=12){document.getElementById('myImage').src = cars[0];document.getElementById('d'). onclick=function(){ next(0);};document.getElementById('demo'). innerHTML= cc[0];
document.getElementById('g'). onclick=function(){ ext(0);};}
}function ext(i){ var z=i-1;

if(i>=0){document.getElementById('demo'). innerHTML= cc[z];
document.getElementById('myImage').src = cars[z];document.getElementById('g'). onclick=function(){ ext(z);};
document.getElementById('d'). onclick=function(){ next(12);};
}
if(i<0){document.getElementById('demo'). innerHTML= cc[12];
document.getElementById('myImage').src = cars[12];document.getElementById('g'). onclick=function(){ ext(12);};document.getElementById('d'). onclick=function(){ next(12);};
    
}
}

