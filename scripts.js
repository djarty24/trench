let rain = new Audio('/assets/audio/heavy-rain.mp3');
let marching = new Audio('/assets/audio/marching.mp3');
let drums = new Audio('/assets/audio/drums.mp3');
let whistle = new Audio('/assets/audio/whistle.mp3');
let gunshots = new Audio('/assets/audio/gunshots.mp3');
let artillery = new Audio('/assets/audio/artillery.mp3');
let gas = new Audio('/assets/audio/gas.mp3');
let explosions = new Audio('/assets/audio/explosions.mp3');

let slider1 = document.getElementById('slider1');
let slider2 = document.getElementById('slider2');
let slider3 = document.getElementById('slider3');
let slider4 = document.getElementById('slider4');
let slider5 = document.getElementById('slider5');
let slider6 = document.getElementById('slider6');
let slider7 = document.getElementById('slider7');
let slider8 = document.getElementById('slider8');

rain.volume = 0.1;
marching.volume = 0.75;
drums.volume = 0.65;
whistle.volume = 0.5;
gunshots.volume = 0.75;
artillery.volume = 0.5;
gas.volume = 1;
explosions.volume = 0.5;

slider1.oninput = function(){ rain.volume = this.value/100; }
slider2.oninput = function(){ marching.volume = this.value/100; }
slider3.oninput = function(){ drums.volume = this.value/100; }
slider4.oninput = function(){ whistle.volume = this.value/100; }
slider5.oninput = function(){ gunshots.volume = this.value/100; }
slider6.oninput = function(){ artillery.volume = this.value/100; }
slider7.oninput = function(){ gas.volume = this.value/100; }
slider8.oninput = function(){ explosions.volume = this.value/100; }

function toggleSound(file){
    if (file === 0){
        if (document.getElementById('play' + file).className === "on"){
            document.getElementById('play' + file).className = "off";
            document.getElementById('pause' + file).className = "on";
            rain.play();
            marching.play();
            drums.play();
            whistle.play();
            gunshots.play();
            artillery.play();
            gas.play();
            explosions.play();
            rain.loop = true;
            marching.loop = true;
            drums.loop = true;
            whistle.loop = true;
            gunshots.loop = true;
            artillery.loop = true;
            gas.loop = true;
            explosions.loop = true;
        } else if (document.getElementById('pause' + file).className === "on") {
            document.getElementById('pause' + file).className = "off";
            document.getElementById('play' + file).className = "on";
            rain.pause();
            marching.pause();
            drums.pause();
            whistle.pause();
            gunshots.pause();
            artillery.pause();
            gas.pause();
            explosions.pause();
        }
    } else if (file === 1){
        if (document.getElementById('play' + file).className === "on"){
            document.getElementById('play' + file).className = "off";
            document.getElementById('pause' + file).className = "on";
            rain.play();
            rain.loop = true;
        } else if (document.getElementById('pause' + file).className === "on") {
            document.getElementById('pause' + file).className = "off";
            document.getElementById('play' + file).className = "on";
            rain.pause();
        }
    } else if (file === 2){
        if (document.getElementById('play' + file).className === "on"){
            document.getElementById('play' + file).className = "off";
            document.getElementById('pause' + file).className = "on";
            marching.play();
            marching.loop = true;
        } else if (document.getElementById('pause' + file).className === "on") {
            document.getElementById('pause' + file).className = "off";
            document.getElementById('play' + file).className = "on";
            marching.pause();
        }
    } else if (file === 3){
        if (document.getElementById('play' + file).className === "on"){
            document.getElementById('play' + file).className = "off";
            document.getElementById('pause' + file).className = "on";
            drums.loop = true;
            drums.play();
        } else if (document.getElementById('pause' + file).className === "on") {
            document.getElementById('pause' + file).className = "off";
            document.getElementById('play' + file).className = "on";
            drums.pause();
        }
    } else if (file === 4){
        if (document.getElementById('play' + file).className === "on"){
            document.getElementById('play' + file).className = "off";
            document.getElementById('pause' + file).className = "on";
            whistle.play();
            whistle.loop = true;
        } else if (document.getElementById('pause' + file).className === "on") {
            document.getElementById('pause' + file).className = "off";
            document.getElementById('play' + file).className = "on";
            whistle.pause();
        }
    } else if (file === 5){
        if (document.getElementById('play' + file).className === "on"){
            document.getElementById('play' + file).className = "off";
            document.getElementById('pause' + file).className = "on";
            gunshots.play();
            gunshots.loop = true;
        } else if (document.getElementById('pause' + file).className === "on") {
            document.getElementById('pause' + file).className = "off";
            document.getElementById('play' + file).className = "on";
            gunshots.pause();
        }
    } else if (file === 6){
        if (document.getElementById('play' + file).className === "on"){
            document.getElementById('play' + file).className = "off";
            document.getElementById('pause' + file).className = "on";
            artillery.play();
            artillery.loop = true;
        } else if (document.getElementById('pause' + file).className === "on") {
            document.getElementById('pause' + file).className = "off";
            document.getElementById('play' + file).className = "on";
            artillery.pause();
        }
    } else if (file === 7){
        if (document.getElementById('play' + file).className === "on"){
            document.getElementById('play' + file).className = "off";
            document.getElementById('pause' + file).className = "on";
            gas.play();
            gas.loop = true;
        } else if (document.getElementById('pause' + file).className === "on") {
            document.getElementById('pause' + file).className = "off";
            document.getElementById('play' + file).className = "on";
            gas.pause();
        }
    } else if (file === 8){
        if (document.getElementById('play' + file).className === "on"){
            document.getElementById('play' + file).className = "off";
            document.getElementById('pause' + file).className = "on";
            explosions.play();
            explosions.loop = true;
        } else if (document.getElementById('pause' + file).className === "on") {
            document.getElementById('pause' + file).className = "off";
            document.getElementById('play' + file).className = "on";
            explosions.pause();
        }
    }
}