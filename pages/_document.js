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
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 400;
                  src: url('/static/fonts/Open_Sans/OpenSans-Regular.ttf') format('truetype');
                }
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 400;
                  font-style: italic;
                  src: url('/static/fonts/Open_Sans/OpenSans-Italic.ttf') format('truetype');
                }
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 500;
                  src: url('/static/fonts/Open_Sans/OpenSans-SemiBold.ttf') format('truetype');
                }
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 500;
                  font-style: italic;
                  src: url('/static/fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf') format('truetype');
                }
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 300;
                  src: url('/static/fonts/Open_Sans/OpenSans-Light.ttf') format('truetype');
                }
                @font-face {
                  font-family: 'Open Sans';
                  font-weight: 300;
                  font-style: italic;
                  src: url('/static/fonts/Open_Sans/OpenSans-LightItalic.ttf') format('truetype');
                }
                @font-face {
                  font-family: 'Amatic SC';
                  font-weight: 400;
                  src: url('/static/fonts/Amatic_SC/AmaticSC-Regular.ttf') format('truetype');
                }
                @font-face {
                  font-family: 'Amatic SC';
                  font-weight: 500;
                  src: url('/static/fonts/Amatic_SC/AmaticSC-Bold.ttf') format('truetype');
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
