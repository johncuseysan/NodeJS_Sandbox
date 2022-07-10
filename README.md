<img src="https://github.com/johncuseysan/GettingStarted/blob/main/SanBanner.png" alt="John Cusey Sandbox Logo" height="150" width="1000">

# Node JavaScript Sandbox

## INTRODUCTION  
Note: Begin Name is Upper Case is Classes, lower case is functions

* global Object - can be object access anywhere in the application. 

```JS
globalThis.console.log("My Message")
```
Do not define function, object, variable and etc.. in the global scope it is better define using module. Using Module you can control access each script gets. 

# TOPICS  
 
## Setup Environment        
### FOLDER: Debugging 
How to up the Debugger with Visual Studio Code Editor.

## Module       
### FOLDER: Logger 
Inspection of the Export Object (app_inspect.js). Code Example of using the Export Oject (app_code.js) to import variables and functions from one JavaScript to another script.  

## Module Wrapper Function 
### FOLDER: Wrapper 
Node do not execute own code directly but wrappers in the following wrapper.

```JS
(fuction (exports, require, module, __filename, __dirname){

})
```
## Path
### FOLDER: Path
* parse - The path.parse() method returns an object whose properties represent significant elements of the path 

## File System
### FOLDER: FileSystem
* readdir - Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.   

## Events
### FOLDER: Events