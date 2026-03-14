<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Love Text Glow</title>

<style>
body{
margin:0;
background:black;
overflow:hidden;
font-family:monospace;
}

canvas{
display:block;
}
</style>

</head>
<body>

<canvas id="canvas"></canvas>

<script>

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

/* TEXT HEART */
const text = "i love u piya";
let offset = 0;

let heart = [];

for(let t=0; t<Math.PI*2; t+=0.01){

let x = 16*Math.pow(Math.sin(t),3);
let y = 13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);

heart.push({x,y});

}

/* STAR BACKGROUND */
let stars = [];

for(let i=0;i<200;i++){
stars.push({
x: Math.random()*canvas.width,
y: Math.random()*canvas.height,
size: Math.random()*2,
speed: Math.random()*0.4
});
}

function drawStars(){

for(let s of stars){

ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(s.x,s.y,s.size,0,Math.PI*2);
ctx.fill();

s.y += s.speed;

if(s.y > canvas.height){
s.y = 0;
s.x = Math.random()*canvas.width;
}

}

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

/* gambar bintang */
drawStars();

/* style heart */
ctx.fillStyle="#ff6fa5";
ctx.font="16px monospace";
ctx.textAlign="center";

ctx.shadowColor="#ff6fa5";
ctx.shadowBlur=10;

let centerX = canvas.width/2;
let centerY = canvas.height/2;

for(let i=0;i<heart.length;i++){

let index = Math.floor((i+offset)%heart.length);
let p = heart[index];

let px = centerX + p.x*17;
let py = centerY - p.y*17;

if(i%10===0){
ctx.fillText(text,px,py);
}

}

/* gerakan lebih smooth */
offset += 0.35;

requestAnimationFrame(draw);

}

draw();

</script>

</body>
</html>
