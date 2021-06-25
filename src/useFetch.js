/* eslint-disable no-unused-vars */
// this is the custom Hook that we are creating
// custom Hooks need to start with the word 'use', so 'useFetch' works
import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setPending] = useState(true)
  const [error, setError] = useState(null)

  // fetching data from server then displaying only the title
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((response) => {
        // check if response object is the object we want
        if (!response.ok) {
          throw Error('could not fetch data from server')
        }
        return response.json()
      })
      .then((data) => {
        console.log(data[0].title)
        setData(data) // this does not create an infinite loop because of setting the dependency parameter of useEffect to '[]'
        setPending(false)
        setError(null)
      })
      .catch((err) => {
        setPending(false)
        setError(err.message)
      })
  }, [url]) // so whenever the 'url' changes, it will re-rerun the fetch function

  return { data, isPending, error }
}

export default useFetch
