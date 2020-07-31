function BlogPostLink({ date, image, title }) {
  return (
    <div className="container">
      <img alt={title} src={image} />
      <div className="text">
        <h2>{title}</h2>
        <h3>{date}</h3>
      </div>
    </div>
  )
}

export default BlogPostLink
