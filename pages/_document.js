import Document, { Head, NextScript, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          ></link>
          <title>Context App</title>
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
