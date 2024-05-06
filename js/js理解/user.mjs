//promise方法进行
// let users;
// export default(async () => {
//   const url = 'https://jsonplaceholder.typicode.com/users';
//   const response = await fetch(url);
//   users = await response.json();
// })();
// export { users };

//引入顶层await模块来解决此问题 使用await关键字而无需在函数放置async关键字。
const url = 'https://jsonplaceholder.typicode.com/users';
const response = await fetch(url);
let users = await response.json();

export { users };