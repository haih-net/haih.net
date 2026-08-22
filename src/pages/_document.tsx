import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    const analyticsEnabled =
      process.env.NEXT_PUBLIC_DISABLE_ANALYTICS !== 'true'

    const gid = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID

    return (
      <Html>
        <Head>
          {/* Google Font: Nunito */}
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Favicon */}
          <link rel="icon" href="/logo.svg" type="image/svg+xml" />

          {/* 
            next/head умеет читать только прямъ потомков. Вглубь ингорирует. 
            Поэтому приходится каждый блок оборачивать отдельно
          */}
          {analyticsEnabled && gid && (
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gid}`}
              strategy="afterInteractive"
            />
          )}

          {analyticsEnabled && gid && (
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gid}');
    `,
              }}
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet()

  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => {
        return <>{sheet.collectStyles(<App {...props} />)}</>
      },
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheet.getStyleElement(),
    ],
  }
}
