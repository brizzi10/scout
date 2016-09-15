// function markShot(canvas, evt, result) {
//   var context = canvas.getContext('2d');
//    context.clearRect(0, 0, canvas.width, canvas.height);
//   var mousePos = getMousePos(clickCanvas, evt);
//   var result = buttonPush()
//   if (result){
//     context.font = "30px Arial";
//     context.fillStyle = "green";
//     context.fillText("o",mousePos.x,mousePos.y);
//   }
//   else{
//     context.font = "30px Arial";
//     context.fillStyle = "red";
//     context.fillText("x",mousePos.x,mousePos.y);
//   }
// }
//
//
// function getMousePos(canvas, evt) {
//   var rect = canvas.getBoundingClientRect();
//   return {
//     x: evt.clientX - rect.left,
//     y: evt.clientY - rect.top
//   };
// }
//
// function buttonPush(result){
//   if (result){
//
//   }
// }
//
// var missButton = document.getElementById('miss');
// var makeButton = document.getElementById('make');
// var clickCanvas = document.getElementById('clickCanvas');
// var markCanvas = document.getElementById('markCanvas');
// var context = clickCanvas.getContext('2d');
//
//
// clickCanvas.addEventListener('click', function(evt) {
//   markShot(markCanvas, evt, result);
// }, false);
//
// makeButton.addEventListener('click', function(evt) {
//   buttonpush(true);
// }, false);
//
// massButton.addEventListener('click', function(evt) {
//   buttonpush(false);
// }, false);
