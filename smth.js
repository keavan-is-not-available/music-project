music1 = ""
music2 = ""
function preload(){
 music1 = loadSound("music.mp3")
 music2 = loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(400, 300)
    vid = createCapture(VIDEO)
    vid.hide()
}
function draw() {
    image(vid, 0, 0, 400, 300)
}

