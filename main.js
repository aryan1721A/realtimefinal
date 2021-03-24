noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#377a4b');
    document.getElementById("text_white").innerHTML="The size of the text is "+difference+"px";
    fill("#FFE707")
    text("Aryan",noseX,noseY);
    textSize(difference)
}
function modalLoaded(){
    console.log("Posenet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}