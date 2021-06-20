import { useState, useEffect } from 'react'
import BlogList from '../blogListComponent/BlogList'
import './home.style.css'

const Home = () => {
  // hook -- useState hook
  // >> gives us a way to make a reactive value and provides us a way to change that value whenever we want

  // const [name, setName] = useState('mario')
  // const [age, setAge] = useState(25)
  // const handleClick = () => {
  //   if (name === 'mario') {
  //     setName('luigi')
  //     setAge(30)
  //   } else if (name === 'luigi') {
  //     setName('mario')
  //     setAge(25)
  //   }
  // }

  /**
   * react hook to make the blogs object 'reactionable' and alterable by setting this data to the state.
   * - useState also always comes with a second parameter that changes/updates this value
   */
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data[0].title)
        setBlogs(data) // this does not create an infinite loop because of setting the dependency parameter of useEffect to '[]'
      })
  }, [])

  return (
    <div className="home">
      <div>{blogs && <BlogList blogs={blogs} title="All Blogs" />}</div>
    </div>
  )
}

export default Home
