import './index.css'

const BlogItem = props => {
  const {listDetails} = props
  const {title, description, publishedDate} = listDetails

  return (
    <li className="list-item">
      <div className="post-title-div">
        <h1 className="post-title">{title}</h1>
        <p className="post-time">{publishedDate}</p>
      </div>
      <p className="post-description">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}
export default BlogItem
