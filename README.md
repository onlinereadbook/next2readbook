注意雷擊
1. import 的元件 一定要大寫 
2. 前後端要撈元件要用custom server 
新解法可以使用 
        server.get('*', (req, res) => {
            //req.data=''; //<-- url  這邊會對應到 getInitialProps
            req.res.data
            return handle(req, res)
        })

3. pm2 語法要使用 pm2 start npm --name "next" -- start
4. vscode debug 還在研究中
5. getInitialProps 在子元件中是沒辦法work的一定要寫在container

6. 重構Table要資料
 主要的清楚state需要的資料有total 然後就是會異動的資料會動到哪些state
 根據這些state 在去撈茲料

7. 部署雷  fs mz 跟檔案操作有關的會GG linux上 ,要記得使用 NODE_ENV=production node ./server.js  模式 不然會一直hmr

8. 為了相依性安裝時 直接下語法讓自己查找不要限定版本不然會ＧＧ
npm install bluebird components express isomorphic-fetch moment mongoose next prop-types react react-addons-css-transition-group react-addons-transition-group react-dom react-md sort-by stringz

9. 用docker萬歲 

FROM node:7.8.0
COPY / /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000
CMD npm start

10.  server.get('*', (req, res) => { }
這邊使用初始值 使用req.data='xxx'另外在 getInitialProps 這邊用 res.data就可以吃到了

11. 更細相的 react-md sass 自己設定 可以參考這邊的用法 先build在使用import css 在用classname吃
https://github.com/mlaursen/react-md/tree/master/examples/with-react-router-v4


12. 把 mongo的sercet抽出來

allen 大
@技安 把 package.json 的 dev 改成 "dev": "node --inspect-brk=5858 ./node_modules/.bin/next",
可以把 node debug 模式開啟來，不過我還是無法停在我要的斷點, 你可以接著研究看看
react-md 筆記 Rwd 效果不好

13. 把react-md 換成 material-ui.com
設定上要注意 有前後端render 問題 
要使用 
 static getInitialProps ({ req }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }

    return { userAgent }
  }

  14.安裝redux 方便global state 管理

  15.在MenuItem新增Link元件<MenuItem >
  golink = (href) => () => console.log(href) 
   onChange={this.golink.bind(this,'ppp')}

  16.準備做會員機制 採用FB會員登入
   express-jwt
   jsonwebtoken
   passport
   passport-facebook  
   會員部分使用

  17.使用 babel-node 
      "dev2": "babel-node server.js --presets es2015,stage-2",
   讓他可以支援import  效能不好

   18.ccs部分使用isomorphic-style-loader + postcss-loader +webpack設定

   19.加入middleware  expressJwt
   20.login時候 使用cookies 紀錄token
   21.改回   不要使用 import模式 
   22.找出className 在哪裡設定
   23.加入已登入與登出

   24.material-ui 要build的時候要加這一段並使用 npm run build 不能直接next build

   module.exports = {
    webpack: (config, { dev }) => {
        // Remove minifed react aliases for material-ui so production builds work
        if (config.resolve.alias) {
            delete config.resolve.alias.react
            delete config.resolve.alias['react-dom']
        }

        return config
    }
}

25.套件改成koa 登入改成firebase
參考https://www.youtube.com/watch?v=Dn9vMaX3FZY

26.next hmr模式 firebase 會一直初始化 這個部分需要校調一下