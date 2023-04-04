function preload(){
classifier = ml5.imageClassifier('DoodleNet');
}
function setup(){
myCanvas = createCanvas(340,340);
myCanvas.center();
background("white");
myCanvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}
function eraseSketches(){
background("white");
}
function draw(){
strokeWeight(8);
stroke(0)
if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);
}
}
function classifyCanvas(){
classifier.classify(canvas,gotResult);
}
function gotResult(error,results){
if(error){
console.log(error);
}
console.log(results);
document.getElementById("item").innerHTML =  results[0].label;
document.getElementById("confidence").innerHTML =  Math.round(results[0].confidence*100) + "%.";
utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}