export function add(a, b) {
    return a + b;
  }
   
  export function subtract(a, b) {
    return a - b;
  }
   
  const multiply = (a, b) => a * b;
  export { multiply };
 export  function random(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
};
export const name='ikun'

// 等价于这样写export{ add,subtract,multiply,name}

// const obj={
//   foo:'foo'
// }
// export default obj;   //一个模块只有一个默认抛出
class Person{
  constructor(){
  }
    sayAge(){
      console.log('16');
    }
 
}
export default Person;