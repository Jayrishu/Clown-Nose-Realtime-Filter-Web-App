function preload(){
    clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
    canvas = createCanvas(500,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,600);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
    
}
function modelLoaded(){
    console.log("PoseNet is loaded");
}
nosex=0;
nosey=0;
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;
        console.log(nosex+","+nosey);
    }
}
function draw(){
image(video,0,0,500,600);
image(clown_nose,nosex,nosey,30,30);
}
function take_photo(){
    save("FilterImage.png");
}