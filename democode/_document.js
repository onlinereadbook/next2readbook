import Document, { Head } from 'next/document'


export default class MyDocument extends Document {
    render() {
        const { html } = this.props
        return (
            <html  >
                <Head>
                    <meta charset='utf-8' />
                    <meta name='viewport' content='width=device-width,minimum-scale=1' />
                    <link rel='stylesheet' href='/static/my.css' />
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto' />
                </Head>
                <body>
                    <div id='__next' dangerouslySetInnerHTML={{ __html: html }} />

                </body>
            </html>
        )
    }
}