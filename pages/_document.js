import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap"
            rel="stylesheet"
          />

          <link href="/static/favicons/phong-vn.ico" rel="shortcut icon" />

          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <link
            href="/static/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#4a9885"
            href="/static/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="pM4nU9JEo0lDNc8hgCsYCAWFFAvCDGsO2nz2rzEkakc"
            name="google-site-verification"
          />
          <meta
            name="p:domain_verify"
            content="1975346e757422e5e792ad21fb3a1d88"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TCMHSHC45D"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-TCMHSHC45D');
          `,
            }}
          />

          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "b1c3abfca41643e7b2e9b67d8fa02a71"}'
          />

          <script async src="https://cdn.splitbee.io/sb.js" />

          <link rel="canonical" href="https://phong.vn" />
        </Head>
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
