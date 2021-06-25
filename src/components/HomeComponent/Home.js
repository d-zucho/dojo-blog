import useFetch from '../../useFetch'
import BlogList from '../blogListComponent/BlogList'
import './home.style.css'

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs')
  // The 'data:blogs' in the destructuring just means to use the 'data' object but call it 'blogs'

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Is Loading...</div>}
      <div>{blogs && <BlogList blogs={blogs} title="All Blogs" />}</div>
    </div>
  )
}
// we added the blogs && <Bl/>/ code because it has to wait for the promise from the fetch since it would take some time. then when it comes back with data, making it as true
// **JS sees data on left of '&&' and will only go to the right
// **if and/or when 'blogs' results as true (not null)
export default Home
