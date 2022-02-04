var weight = [30, 37, 35, 43, 45];

function weight_average(){
var weight = [30, 37, 35, 43, 45];
var sum = weight[0]+ weight[1]+ weight[2]+ weight[3]+ weight[4];
  var average = sum/weight.length;
  console.log(average);
}
function setup() 
{
  createCanvas(400,400);
  weight_average();
}

function draw() 
{
background(51);

}

