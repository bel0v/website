import { PageLayout } from "../../components/Layouts/PageLayout"
import { PostPreview } from "../../components/PostPreview"
import fetch from "isomorphic-unfetch"

const Blog = ({ posts }) => {
  console.log(posts)
  return (
    <PageLayout>
      <p>This is the blog page</p>
      {posts.map(post => (
        <PostPreview key={post.id} {...post} />
      ))}
    </PageLayout>
  )
}
Blog.getInitialProps = async () => {
  const res = await fetch("http://admin.belov.codes/posts")
  const json = await res.json()
  return { posts: json }
}
export default Blog
