import {gql} from "@apollo/client";

export const queryGetBlog = gql`query MyQuery {
    my_blog_blog {
      id_blog
      title_blog
      link_blog
    }
  }
`  
export const mutationDeleteBlog = gql`mutation MyMutation($id: Int!) {
  delete_my_blog_blog(where: {id_blog: {_eq: $id}}) {
    affected_rows
  }
}
`