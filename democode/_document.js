import Document from 'next/document'


export default class MyDocument extends Document {
    render() {
        const { html } = this.props
        return (
            <html  >

                <body>
                    <div id='__next' dangerouslySetInnerHTML={{ __html: html }} />
                </body>
            </html>
        )
    }
}