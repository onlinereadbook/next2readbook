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

allen 大
@技安 把 package.json 的 dev 改成 "dev": "node --inspect-brk=5858 ./node_modules/.bin/next",
可以把 node debug 模式開啟來，不過我還是無法停在我要的斷點, 你可以接著研究看看