noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup(){
    canvas = createCanvas(600,450);
    canvas.position(500,100);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log("Model is displayed");
}

function draw(){
    background("#3edff7");
    fill("#ed8d0e");
    stroke("#ed8d0e");
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML = "Width and height of square is "+difference+" px";
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = "+noseX+"Nose y = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left wrist = "+leftWristX+"Right wrist = "+ rightWristX+"Difference is = "+difference);
    }


}

