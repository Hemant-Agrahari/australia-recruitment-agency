import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

interface MyDocumentProps extends DocumentInitialProps {
  slug: string;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const { req } = ctx;

    let slug = "en"; // Default to "en"

    if (req) {
      const pathname = req.url || "/";
      slug = pathname.split("/")[1] || "en"; // Extract slug from the request URL
    }

    // console.log("slug", slug); // Debug: Check the extracted slug

    return { ...initialProps, slug };
  }

  render() {
    const { slug } = this.props;

    // console.log("slug in render", slug); // Debug: Verify the slug

    const lang = slug === "ar" ? "ar-AE" : "en";
    const scriptGoolgeTagmanager = `
    (function() {
      function loadGTM() {
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T67V4Z8');
      }
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(function() { setTimeout(loadGTM, 3000); });
      } else {
        setTimeout(loadGTM, 4000);
      }
    })();`;
    return (
      <Html lang={lang}>
        <Head>
        <meta name="google-site-verification" content="x_jxqfvariuKFGjzKb_ckAid7_XNFINF_SNRyl2kSAY" />
          <meta name="yandex-verification" content="2b487a175b782b24" />
          <script
            type="text/javascript"
            data-cfasync="false"
            dangerouslySetInnerHTML={{ __html: scriptGoolgeTagmanager }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-T67V4Z8"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
