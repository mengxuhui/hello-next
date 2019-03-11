/**
 * Created by yangguang on 2018/4/27
 */
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps
        };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    {/* <link rel="icon" type="image/x-icon" href="//cache.soso.com/deploy/image/favicon.ico" /> */}
                    <title>hello-next</title>
                    <link href="//cache.soso.com/deploy/css/antd/3.10.10/antd.min.css" rel="stylesheet"></link>
                    <link href="//cache.soso.com/wenwen/deploy/js/bootstrap3/bootstrap.css" rel="stylesheet" />
                    <link href="/static/css/style.css" rel="stylesheet"></link>
                    <script src="//cache.soso.com/wenwen/deploy/js/jquery/jquery-1.11.1.min.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="//cache.soso.com/wenwen/deploy/js/bootstrap3/bootstrap.js"></script>
                </body>
            </html>
        );
    }
}