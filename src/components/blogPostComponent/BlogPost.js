import { useParams } from 'react-router-dom'

const BlogPost = () => {
  const { id } = useParams()

  return (
    <div className="blog-details">
      <h2>Blog Post Details - {id} </h2>
    </div>
  )
}

export default BlogPost
