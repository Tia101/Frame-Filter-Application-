
function preload(){

}

function setup(){
    canvas = createCanvas(0, 650);
    canvas.position(150, 150);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
function draw() {
    image(video, 230, 150, 220, 200);
    fill(158, 2, 54);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);

    fill(245, 83, 137);
    stroke(0, 128, 0);
    circle(90, 40, 460, 20);

    rect(90, 40, 460, 20);
    rect(40, 90, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);
}

function take_snapshot(){
    save('MyFilterFrameImage.png');
}

