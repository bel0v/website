import { PageLayout } from "../../components/Layouts/PageLayout"
import { PostPreview } from "../../components/PostPreview"
import gql from "graphql-tag"
import { Query } from "react-apollo"

const getPosts = gql`
  {
    posts {
      _id
      title
    }
  }
`

const Blog = () => {
  return (
    <PageLayout>
      <Query query={getPosts}>
        {({ loading, error, data }) => {
          if (loading) {
            return "Loading.."
          }
          if (error) {
            return `Error! ${error.message}`
          }
          return JSON.stringify(data)
        }}
      </Query>
    </PageLayout>
  )
}
export default Blog
