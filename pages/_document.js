import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] }
  }
  render() {
    return (
      <html lang={this.props.__NEXT_DATA__.props.initialLanguage}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 400;
                  src: url('/static/fonts/Open_Sans/OpenSans-Regular.woff2') format('woff2');
                }
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 400;
                  font-style: italic;
                  src: url('/static/fonts/Open_Sans/OpenSans-Italic.woff2') format('woff2');
                }
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 500;
                  src: url('/static/fonts/Open_Sans/OpenSans-SemiBold.woff2') format('woff2');
                }
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 500;
                  font-style: italic;
                  src: url('/static/fonts/Open_Sans/OpenSans-SemiBoldItalic.woff2') format('woff2');
                }
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 300;
                  src: url('/static/fonts/Open_Sans/OpenSans-Light.woff2') format('woff2');
                }
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 300;
                  font-style: italic;
                  src: url('/static/fonts/Open_Sans/OpenSans-LightItalic.woff2') format('woff2');
                }
                @font-face {
                  font-family: 'Amatic SC';
                  font-weight: 400;
                  src: url('/static/fonts/Amatic_SC/AmaticSC-Regular.woff2') format('woff2');
                }
                @font-face {
                  font-family: 'Amatic SC';
                  font-weight: 500;
                  src: url('/static/fonts/Amatic_SC/AmaticSC-Bold.woff2') format('woff2');
                }
              }
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
