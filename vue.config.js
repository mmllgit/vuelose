// module.exports = {
//     pages: {
//       index: {
//         //入口
//         entry: 'src/main.js',
//       },
//     },
//       devServer: {
//       proxy: {
//         '/api': {
//             target: 'http://47.96.86.132:1019/lost',
//             pathRewrite:{'^/api':''},
//             ws: true, //用于支持websocket
//             changeOrigin: true //用于控制请求头中的host值
//         }
//       }
//     }
//   }