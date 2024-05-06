//代码如何运行
// 首先，app.mjs 导入 user.mjs 模块。
// 其次，user.mjs 模块执行并进行 API 调用。
// 第三，当第二步仍在进行时，app.mjs 开始从 user.mjs 模块导入 users 的数据并使用。
// 由于第 2 步尚未完成，因此 users 变量为 undefined。因此，您在页面上看到了错误消息。

//但如果再user.mjs中使用await 关键字 
// 这时app.mjs 模块将在执行其主体之前等待user.mjs模块完成。
import { users } from './user.mjs';
function render(users) {
  if (!users) {
    throw 'The user list is not available';
  }

  const list = users
    .map((user) => {
      return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
    })
    .join('');

  return `<ol>${list}</ol>`;
}

const container = document.querySelector('.container');
try {
  container.innerHTML = render(users);
} catch (e) {
  container.innerHTML = e;
}


//使用promise，调用promise的then()方法并等待API调用完成
// import promise, { users } from './user.mjs';
// function render(users) {
//   if (!users) {
//     throw 'The user list is not available';
//   }

//  let list = users
//     .map((user) => {
//       return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
//     })
//     .join('');

//   return `<ol>${list}</ol>`;
// }

// promise.then(() => {
//   let container = document.querySelector('.container');
//   try {
//     container.innerHTML = render(users);
//   } catch (error) {
//     container.innerHTML = error;
//   }
// });
//先导入新的promise方法，再调用promise的then()方法并等待 API 调用完成，然后使用其结果
//现在打开 index.html，得到了用户列表。但是需要在使用模块时知道等待 Promise 。