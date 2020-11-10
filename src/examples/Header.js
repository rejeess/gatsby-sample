import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`
const Header = () => {
  const {
    site: {
      siteMetadata: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h2>{data.site.siteMetadata.person.name}</h2>
      <h2>{data.site.siteMetadata.person.age}</h2> */}
      <h1>title : {title}</h1>
      <h1>name : {name}</h1>
    </div>
  )
}

export default Header
