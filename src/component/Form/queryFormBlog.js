import {gql} from "@apollo/client";

export const queryGetCategories = gql`query MyQuery {
    my_blog_categories {
      id_categories
      name_categories
    }
  }
`

export const mutationInsertBlog = gql`mutation MyMutation($data: [my_blog_blog_and_categories_insert_input!] = {}, $desc_blog: String!, $link_blog: String !, $title_blog: String !, $content_blog: String !) {
    insert_my_blog_blog(objects: {blog_and_categories: {data: $data}, content_blog: $content_blog, desc_blog: $desc_blog, link_blog: $link_blog, title_blog: $title_blog}) {
      returning{
        link_blog
      }
    }
  }
`

export const mutationUpdateBlog = gql`mutation MyMutation($id: Int!, $content_blog: String!, $desc_blog: String!, $link_blog: String!, $title_blog: String!, $objects: [my_blog_blog_and_categories_insert_input!] = {}) {
    update_my_blog_blog(where: {id_blog: {_eq: $id}}, _set: {content_blog: $content_blog, desc_blog: $desc_blog, link_blog: $link_blog, title_blog: $title_blog}) {
      returning{
        link_blog
      }
    }
    delete_my_blog_blog_and_categories(where: {id_blog: {_eq: $id}}) {
      affected_rows
    }
    insert_my_blog_blog_and_categories(objects: $objects) {
      affected_rows
    }
  }  
`  