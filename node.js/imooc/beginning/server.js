// 加载http模块 职责创建web服务器及处理http相关的任务等
let http = require('http')
// 通过createServer创建web服务器
  // 链式调用
http.createServer((req,res)=>{
  // 收到请求后的回调函数
  // 返回请求头的状态码为200  返回的文本内容的类型是纯文本
  res.writeHead(200,{'Content-Type':'text/plain'})
  res.end('Hello Node.js\n')
  // 通过listen让服务器在1234端口监听请求
}).listen(1234,'127.0.0.1')
console.log('Server running at http://127.0.0.1:1234')