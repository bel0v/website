import React from "react"
import Router from "next/router"

export default class Index extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: "/blog"
      })
      res.end()
    } else {
      Router.push("/blog")
    }
    return { namespacesRequired: ["common"] }
  }
}
