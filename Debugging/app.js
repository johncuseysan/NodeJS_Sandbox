// Getting started with Node.js debugging in VS Code
// https://www.youtube.com/watch?v=2oFKNL7vYV8&t=54s

var  i = 1;

setInterval(function(){ 
	console.log("Iteration: " + i);
    i++;
}, 2000);