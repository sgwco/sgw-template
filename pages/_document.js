import Document, { Head, Main, NextScript } from 'next/document';

export default class DocumentPage extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="keywords" content="sai gon web, web nhanh, web trong ngay" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="author" content="Vo Hoai Son" />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="static/css/swiper.min.css" />
          <link rel="stylesheet" href="static/css/line-icons.css" />
          <link rel="stylesheet" href="static/css/magnific-popup.css" />
          <link rel="stylesheet" href="static/css/animate.css" />
          <link rel="stylesheet" href="static/css/color-switcher.css" />
          <link rel="stylesheet" href="static/css/menu_sideslide.css" />
          <link rel="stylesheet" href="static/css/main.css" />
          <link rel="stylesheet" href="static/css/responsive.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossOrigin="anonymous"
          />
          <script src="static/js/mixitup.min.js" />
        </body>
      </html>
    );
  }
}
