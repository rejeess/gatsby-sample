import React from "react"
import Layout from "./../components/Layout"
import styles from "./../components/products.module.css"
import {graphql} from "gatsby"
import Image from 'gatsby-image'
import { Link } from 'gatsby'


// allContentfulProduct {
//   nodes {
//     price
//     title
//     slug
//     image {
//       fluid {
//         src
//       }
//     }
//   }
// }
const products = ({data}) => { 
  const {
    allContentfulProduct: {nodes: products},} =data
 
  return (
    <Layout>
      <section className={styles.page}>
       
       {products.map((product)=>{
         return <article key={product.id}>
           <Image fluid={product.image.fluid} alt={product.title}></Image>
           <h3>{product.title} <span>${product.price}</span></h3>
           <Link to={`/products/${product.slug}`}>more details</Link>
         </article>
       })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default products
