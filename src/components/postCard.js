import React from "react"
import { Link } from "gatsby"

export default props => {
  const background = props.node.frontmatter.thumbnail

  return (
    <article
      className={`post-card ${props.count % 3 === 0 ? `post-card-large` : ``} ${
        props.postClass
      } ${background ? `with-image` : `no-image`}`}
      style={
        background
          ? {
              backgroundImage: `url(${background})`,
            }
          : {}
      }
    >
      <Link
        to={
          props.node.fields.slug.split("/").slice(2, -1).join("/") === ""
            ? "/"
            : `/${props.node.fields.slug.split("/").slice(2, -1).join("/")}`
        }
        className="post-card-link"
      >
        <div className="post-card-content">
          <h2 className="post-card-title">{props.node.frontmatter.title}</h2>
        </div>
      </Link>
    </article>
  )
}
