import { PageLayout } from "../components/Layouts/PageLayout"
import { ShortcodeRenderer } from "../components/ShortcodeRenderer"
import { Box } from "../components/grid"
import { withNamespaces } from "../i18n"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import ReactMarkdown from "react-markdown"
import shortcodes from "remark-shortcodes"

const getAboutText = gql`
  query($lang: String) {
    articles(where: { language: $lang, published: true }) {
      text
    }
  }
`

const About = props => {
  return (
    <PageLayout>
      <Query query={getAboutText} variables={{ lang: props.i18n.language }}>
        {({ loading, error, data }) => {
          if (loading) {
            return "Loading.."
          }
          if (error) {
            return `Error! ${error.message}`
          }
          if (data.articles.length === 0) {
            return "¯_(ツ)_/¯"
          }
          return (
            <Box width={{ desktop: "60%" }}>
              <ReactMarkdown
                source={data.articles[0].text}
                plugins={[[shortcodes]]}
                renderers={{ shortcode: ShortcodeRenderer }}
              />
            </Box>
          )
        }}
      </Query>
    </PageLayout>
  )
}

About.getInitialProps = async props => {
  return {
    namespacesRequired: ["common"]
  }
}

export default withNamespaces("common")(About)
