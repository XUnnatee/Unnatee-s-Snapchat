function preload(){
  img = loadImage ('https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
}
function setup() {
  canvas = createCanvas(640, 480); 
  canvas = canvas.position(110,250);
  video = createCapture(VIDEO);
  video.hide();
  
  tint_color= "";
}

function draw() {
  image(video, 0,0,640,480);
  tint(tint_color);
}
 
function take_snapshot(){
  save('student_name.png');
}

function filter_tint(){
  tint_color = document.getElementById("color_name").value;
}