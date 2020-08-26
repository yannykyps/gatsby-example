import React from 'react'
import {useStaticQuery, graphql} from "gatsby"
const getData = graphql`
query FirstQuery {
  site {
    info: siteMetadata {
      author
      data
      description
      person {
        age
        name
      }
      title
    }
  }
}`

export default function Header() {
  const {site:{info:{title, person:{name}}}} = useStaticQuery(getData)
  return (
    <div>
      {/* <h1>title: {data.site.info.title}</h1>
      <h1> name: {data.site.info.name} </h1>  */}
      <h1>title: {title}</h1>
      <h1>name: {name}</h1>
    </div>
  )
}

