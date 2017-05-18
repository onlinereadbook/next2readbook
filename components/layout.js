import Link from 'next/link'
import Head from 'next/head'
import MainLayout from './MainLayout'





export default (({ children, title = 'This is the default title', ...Mainprops }) => {
    //console.log(isOpenMenu);
    return (
        <div id="body"  >
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel='stylesheet' href='/static/my.css' />
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto' />

            </Head>
            <MainLayout {...Mainprops}>
                {children}
            </MainLayout>
        </div>
    )
})