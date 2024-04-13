function setup() {
    canvas = createCanvas(400, 300)
    vid = createCapture(VIDEO)
    vid.hide()
}
function draw() {
    image(vid, 0, 0, 400, 300)
}
