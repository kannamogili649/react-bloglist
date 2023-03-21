import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-item-container">
      {blogsList.map(eachList => (
        <BlogItem listDetails={eachList} key={eachList.id} />
      ))}
    </ul>
  )
}

export default BlogList
