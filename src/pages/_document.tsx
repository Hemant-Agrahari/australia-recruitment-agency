import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { GoogleTagManager } from "@next/third-parties/google";

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

    return { ...initialProps, slug };
  }

  render() {
    const { slug } = this.props;
    const lang = slug === "ar" ? "ar-AE" : "en";
    
    return (
      <Html lang={lang}>
        <Head>
          <link rel="preconnect" href="https://allianceaeapi.alliancerecruitmentagency.ae" />
          <link rel="dns-prefetch" href="https://allianceaeapi.alliancerecruitmentagency.ae" />
          <link rel="preconnect" href="https://apialliancerecruitmentagencyae.aistechnolabs.pro" />
          <link rel="preconnect" href="https://alliancerecruitmentagencyae.aistechnolabs.pro" />
          <meta name="google-site-verification" content="x_jxqfvariuKFGjzKb_ckAid7_XNFINF_SNRyl2kSAY" />
          <meta name="yandex-verification" content="2b487a175b782b24" />
        </Head>
        <body>
          <GoogleTagManager gtmId="GTM-T67V4Z8" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
