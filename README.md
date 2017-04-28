注意雷擊
1. import 的元件 一定要大寫 
2. 前後端要撈元件要用custom server 
新解法可以使用 
        server.get('*', (req, res) => {
            //req.req.data=''; //<-- url  這邊會對應到 getInitialProps
            return handle(req, res)
        })

3. pm2 語法要使用 pm2 start npm --name "next" -- start
4. vscode debug 還在研究中
5. getInitialProps 在子元件中是沒辦法work的一定要寫在container

6. 重構Table要資料
 主要的清楚state需要的資料有total 然後就是會異動的資料會動到哪些state
 根據這些state 在去撈茲料

7. 部署雷  fs mz 跟檔案操作有關的會GG linux上 ,要記得使用 NODE_ENV=production node ./server.js  模式 不然會一直hmr

8. 為了相依性安裝時
npm install bluebird components express isomorphic-fetch moment mongoose next prop-types react react-addons-css-transition-group react-addons-transition-group react-dom react-md sort-by stringz

9. 用docker萬歲 

FROM node:7.8.0
COPY / /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000
CMD npm start

10.  server.get('*', (req, res) => { }
這邊使用初始值 使用req.data='xxx'另外在 getInitialProps 這邊用 res.data就可以吃到了




直接下語法讓自己查找不要限定版本不然會ＧＧ

allen 大
@技安 把 package.json 的 dev 改成 "dev": "node --inspect-brk=5858 ./node_modules/.bin/next",
可以把 node debug 模式開啟來，不過我還是無法停在我要的斷點, 你可以接著研究看看


