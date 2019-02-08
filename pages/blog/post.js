import { withRouter } from 'next/router'
import { PageLayout } from '../../components/Layouts/PageLayout'
import { ShortcodeRenderer } from '../../components/ShortcodeRenderer'
import { Box } from '../../components/grid'
import { withNamespaces } from '../../i18n'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import ReactMarkdown from 'react-markdown'
import shortcodes from 'remark-shortcodes'
import Link from 'next/link'

const getPost = gql`
  query($lang: String, $slug: String) {
    posts(where: { slug: $slug, language: $lang, published: true }) {
      intro
      content
    }
  }
`

const Content = withRouter(props => {
  console.log(props.language)
  console.log(props.router.query.slug)
  return (
    <Query query={getPost} variables={{ slug: props.router.query.slug, lang: props.language }}>
      {({ loading, error, data }) => {
        if (loading) {
          return 'Loading..'
        }
        if (error) {
          return `Error! ${error.message}`
        }
        if (data.posts.length === 0) {
          return (
            <div>
              ¯_(ツ)_/¯ Post not found.{' '}
              <Link href="/blog">
                <a>Return to blog</a>
              </Link>
            </div>
          )
        }
        const post = data.posts[0]
        return (
          <Box width={{ desktop: '60%' }}>
            {post.intro && <ReactMarkdown source={post.intro} />}
            <ReactMarkdown
              source={post.content}
              plugins={[[shortcodes]]}
              renderers={{ shortcode: ShortcodeRenderer }}
            />
          </Box>
        )
      }}
    </Query>
  )
})

const Post = props => {
  return (
    <PageLayout>
      <Content language={props.i18n.language} />
    </PageLayout>
  )
}
Post.getInitialProps = async props => {
  return {
    namespacesRequired: ['common']
  }
}

export default withNamespaces('common')(Post)
