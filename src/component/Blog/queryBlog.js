import { gql } from "@apollo/client"

// pake kolom konten ?
const withContent = (content)=>content ? "content_blog" : ""
// pake string blog{} ?
const withBlogObject = (blog,content)=>{
    let innerBlogObject =`
        id_blog
        date_blog
        title_blog
        desc_blog
        link_blog
        ${withContent(content)}
        blog_and_categories {
        category {
            name_categories
        }
        }`
    let blogObject = `blog {${innerBlogObject}}`;
    return blog ? blogObject : innerBlogObject
}

const queryGetBlog = ({table,content,blog})=>gql`query MyQuery($where: my_blog_${table}_bool_exp = {}) {
    my_blog_${table}(where: $where) {
      ${withBlogObject(blog,content)}
    }
  }
`

export default queryGetBlog;