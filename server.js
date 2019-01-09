const express = require("express")
const compression = require("compression")
const next = require("next")
const nextI18NextMiddleware = require("next-i18next/middleware")
const nextI18next = require("./i18n")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(compression())

    nextI18NextMiddleware(nextI18next, app, server)

    let port = 3000
    if (process.argv.indexOf("-p") != -1) {
      port = process.argv[process.argv.indexOf("-p") + 1]
    }

    server.get("/blog/p/:slug", (req, res) => {
      const actualPage = "/blog/post"
      const queryParams = { slug: req.params.slug }
      app.render(req, res, actualPage, queryParams)
    })

    server.get("*", (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
