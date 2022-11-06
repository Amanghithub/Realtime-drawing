noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    canvas=createCanvas(550,500);
    canvas.position(560,150);

    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getPoses);
}

function modelLoaded(){
    console.log("Pose Net model loaded");
}

function draw(){
background("white");
document.getElementById("square_sides").innerHTML="The Side of squre is - "+difference+" px";
fill("Green");
stroke("Green");
square(noseX,noseY,difference);
}

function getPoses(results){
    if(results.length>0){
        console.log(results);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;

       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x

       difference = Math.floor(leftWristX - rightWristX);

       
       console.log("Nose X = "+noseX);
       console.log("Nose Y = "+noseY);

       console.log("leftWrist X = "+leftWristX);
       console.log("rightWrist X = "+rightWristX);

       console.log("Difference = "+difference);
    }
}