import App, { Container } from "next/app"
import React from "react"
import withApolloClient from "../lib/with-apollo-client"
import { ApolloProvider } from "react-apollo"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../components/styles"

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle />
              <Component {...pageProps} />
            </>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
