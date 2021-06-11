import { useState } from 'react'
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

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ])

  return (
    <div className="home">
      <div>
        <BlogList blogs={blogs} title="All Blogs" />
        <BlogList
          blogs={blogs.filter((blog) => blog.author === 'mario')}
          title="Mario's Blogs"
        />
      </div>
    </div>
  )
}

export default Home
