# YOUTUBE CHANNEL AND RESOURCES
## MOSH       
[Programming With Mosh](https://www.youtube.com/c/programmingwithmosh)    
[Node.js Tutorial for Beginners: Learn Node in 1 Hour - YouTube](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=799s)

## FOLDERS

(15:32 - MOSH) Module Explaination 

### Logger 
(21:56  - MOSH) Inspecting Module Object 
* app_inspect.js
```JS
Module {
  id: '.',
  path: 'C:\\Users\\john\\Documents\\NodeJS_Sandbox\\Logger',
  exports: {},
  filename: 'C:\\Users\\john\\Documents\\NodeJS_Sandbox\\Logger\\app.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\john\\Documents\\NodeJS_Sandbox\\Logger\\node_modules',
    'C:\\Users\\john\\Documents\\NodeJS_Sandbox\\node_modules',
    'C:\\Users\\john\\Documents\\node_modules',
    'C:\\Users\\john\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
```
(23:19 - MOSH) Code Example 
* app_code.js and logger.js
```JS
Hello World! 
URL EndPoint: http://www.yahoo.com
```

### Wrapper
(33:02 - MOSH) Inspects the wrappers
* app_inspect.js
```JS
Export:[object Object]
Require:function require(path) {
      return mod.require(path);
    }
Module:[object Object]
__filename:C:\Users\john\Documents\NodeJS_Sandbox\Programing_With_Mosh\Wrapper\app_inspect.js
__dirname:C:\Users\john\Documents\NodeJS_Sandbox\Programing_With_Mosh\Wrapper
```
### Path

(43:25  - MOSH) parse       
*app_inspect.js         
```JS
{
  root: 'C:\\',
  dir: 'C:\\Users\\john\\Documents\\NodeJS_Sandbox\\Programing_With_Mosh\\Path',
  base: 'app_inspect.js',
  ext: '.js',
  name: 'app_inspect'
}
```

### FileSystem

(53:01  - MOSH) readdir           
*app_readdir.js
