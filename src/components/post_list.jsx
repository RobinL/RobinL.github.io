import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"


function LinkHeader(props) {

  if (!(props.category_homepage == undefined)) {
    return (<h2><Link to={'/' + props.category_homepage + '/'}>{props.post_header}</Link></h2>)
  }
  else {
    return (<h2>{props.post_header}</h2>)
  }


}

function PostList(props) {
  const data = useStaticQuery(
    graphql`
      {
        allJavascriptFrontmatter(sort: { fields: [frontmatter___post_date], order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                post_date
                post_type
                post_category
                code_url
                error
              }
              node {
                relativePath {
                  name
                }
              }
            }
          }
        }
      }
    `
  )



  // Simplify data

  let simpledata = data.allJavascriptFrontmatter.edges.map(function (edge) {
    let robj = {
      relative_path: edge.node.node.relativePath.name,
      code_url: edge.node.frontmatter.code_url,
      post_date: edge.node.frontmatter.post_date,
      title: edge.node.frontmatter.title,
      post_type: edge.node.frontmatter.post_type,
      post_category: edge.node.frontmatter.post_category,
    }

    let file_ext = robj.code_url.split(".").pop()



    return robj
  })

  if (props.post_category) {
    simpledata = simpledata.filter(d => d.post_category == props.post_category)
  }

  if (props.post_type) {
    simpledata = simpledata.filter(d => d.post_type == props.post_type)
  }



  return (
    <div>
      <SEO title="Robin Linacre's blog: Post list" />
      <LinkHeader post_header={props.post_header} category_homepage={props.category_homepage}></LinkHeader>
      {simpledata.map(function (d) {
        return (
          <p>
            {d.post_date} <Link to={'/' + d.relative_path + '/'}>{d.title}</Link>
          </p>
        )
      })}
    </div>
  )
}

export default PostList
