import Document, {Head, Main, NextScript} from 'next/document'
import {YMInitializer} from 'react-yandex-metrika';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta name="yandex-verification" content="49e34bd8a11a83fb"/>
                <YMInitializer accounts={[132186]} options={{defer: true}} version="2"/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
                <link href="https://fonts.googleapis.com/css?family=Ubuntu:300i,400,500,500i,700" rel="stylesheet"/>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            </body>
            </html>
        )
    }
}