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