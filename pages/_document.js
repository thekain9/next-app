import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;


{/* <Head>
// I added a link to the Montserrat font from Google Fonts with specific font weights.
// This way, I can use Montserrat across my app.
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap" rel="stylesheet" />
</Head>
<body>
// The Main component renders the page's content. I made sure to include it.
<Main />
// NextScript renders necessary scripts for Next.js to manage page navigation and hydration.
// I included it to ensure the smooth functioning of my app.
<NextScript /> */}