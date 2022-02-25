import Layout from '../components/Layout'
import { getAllPostData } from '../lib/fetch'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { POST } from '../types/Types'
import Post from '../components/Post'

interface STATICPROPS {
  posts: POST[]
}

const BlogPage: React.FC<STATICPROPS> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <p className="text-4xl mb-8">Blog Page</p>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostData()
  return {
    props: { posts },
  }
}
