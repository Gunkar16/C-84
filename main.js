var canvas = document.getElementById("myCanvas");
var CTX = canvas.getContext("2d");
var NASA = ["NASA1.jpg","NASA2.jpg","NASA3.jpg","NASA4.jfif"];
var Random_Number=Math.floor(Math.random()*4)
rover_width=100;
rover_height=90;
background_image=NASA[Random_Number];
rover_image="rover.png";
roverX=10;
roverY=10;

function add(){
    background_image_tag=new Image();
    background_image_tag.onload=uploadbackground;
    background_image_tag.src=background_image;

    rover_image_tag=new Image();
    rover_image_tag.onload=uploadrover;
    rover_image_tag.src=rover_image;
}
function uploadbackground(){
    CTX.drawImage(background_image_tag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    CTX.drawImage(rover_image_tag,roverX,roverY,rover_width,rover_height)
}
window.addEventListener("keydown",kd);
function kd(e){
    keyPressed=e.keycode;
    if(keyPressed=='38'){
        up();
        console.log("up")
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }
    if(keyPressed=='40'){
        down();
    }
}
function up(){
    if(roverY>=0){
        roverY=roverY-10;
        uploadbackground();
        uploadrover();
        console.log(roverY)
    } 
}
function down(){
    if(roverY<=600){
        roverY=roverY+10;
        uploadbackground();
        uploadrover();
        console.log(roverY)
    } 
}
function right(){
    if(roverX<=1000){
        roverX=roverX+10;
        uploadbackground();
        uploadrover();
        console.log(roverX)
    } 
}
function left(){
    if(roverX>=0){
        roverX=roverX-10;
        uploadbackground();
        uploadrover();
        console.log(roverX)
    } 
}