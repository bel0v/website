import { PageLayout } from "../components/Layouts/PageLayout"
import { withNamespaces } from "../i18n"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import ReactMarkdown from "react-markdown"

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
          console.log(data)
          return <ReactMarkdown source={data.articles[0].text} />
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
