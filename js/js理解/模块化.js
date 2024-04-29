import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
// <!-- 模块化简单来说就是将一个完整的长篇代码文件根据功能进行划分成几个文件，
// 这些文件各自负责一个独立的功能，各个文件组合起来实现一个完整的大功能，
// 这就是模块化，每个负责独立功能的文件就是模块。 -->
// <!-- import 和 export 语句用于将一个模块里实现某些功能的变量或函数,类导入/导出 -->

function Test1(){    
    console.log("这是默认导出")}      //默认导出的变量只能有一个
   function Test2(){   
   console.log('这是命名导出')}
    export default Test1       
    function Test2(){    
   console.log('这是命名导出')}
   export {Test1, Test2}       //批量导出
   // import 导入模块
   import x from "./model.js" //x就是默认导出的Test1x()
   import {Test1, Test2} from "./model.js";Test1();Test2();  //批量导入
   import {Test1 as x1, Test2 as x2} from "./model.js";x1();x2();//也可在导出时用as关键字重命名


   //CommonJS模块不能再浏览器中直接运行 ，定义时需要使用require()指定依赖 以服务端为目标环境
   //模块第一次加载后会被缓存，后续加载取得缓存的模块
   if(loadCondition){
    require('./moduleA')     //为ture才加载 if后的代码都会再模块加载完成后执行
    }

//AMD异步模块定义以浏览器为目标环境 先声明依赖再按需获取依赖，加载完后立刻执行
//umd是通用模块定义

//ES6模块 
//模块文件末尾使用单个 export 语句，后跟要导出的要素的逗号分隔列表，并用大括号括起来 
{模板文件}  export { name, draw, reportArea, reportPerimeter };
<script type='mooduel'> 模块代码 </script> //可以嵌入网页，也可以作为js文件引入




 