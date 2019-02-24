import { PageLayout } from '../../components/Layouts/PageLayout'
import { PostPreview } from '../../components/PostPreview'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { withNamespaces } from '../../i18n'
import { Box } from '../../components/grid'

const getPosts = gql`
  query($lang: String) {
    posts(where: { language: $lang, published: true }) {
      _id
      title
      subtitle
      previewImage
      slug
    }
  }
`

const Blog = (props) => (
  <PageLayout>
    <Query query={getPosts} variables={{ lang: props.i18n.language }}>
      {({ loading, error, data }) => {
        if (loading) {
          return 'Loading..'
        }
        if (error) {
          return `Error! ${error.message}`
        }
        return (
          <Box mg='-.5rem' flexWrap='wrap' display='flex'>
            {data.posts.map((post = {}) => (
              <PostPreview key={post._id} {...post} />
            ))}
          </Box>
        )
      }}
    </Query>
  </PageLayout>
)

Blog.getInitialProps = async() => ({
  namespacesRequired: ['common'],
})

export default withNamespaces('common')(Blog)
