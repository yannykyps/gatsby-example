import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import img from "../images/hornbill.jpg"
import Image from "gatsby-image"

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "leopard.jpg"}) {
      childImageSharp {
        fixed (width:300,grayscale:true){
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "wilddog.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    example: file(relativePath: {eq: "wilddog.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
  }
`

export default function Images() {
    const data = useStaticQuery(getImages)
    return (
        <section className="images">
            <article className="single-image">
            <h3>Basic Image</h3>
            <img src={img} alt="hornbill" width="100%"/>
            </article>
            <article className="single-image">
            <h3>Fixed Image/blur</h3>
            <Image fixed={data.fixed.childImageSharp.fixed}/>
            </article>
            <article className="single-image">
            <h3>Fluid Image/svg</h3>
            <Image fluid={data.fluid.childImageSharp.fluid}/>
            <div><Image fluid={data.example.childImageSharp.fluid}/></div>
            </article>
        </section>
    )
}
