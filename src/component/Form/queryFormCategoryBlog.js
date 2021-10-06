import {gql} from '@apollo/client';

export const mutationInsertCategory = gql`mutation MyMutation($name_categories: String!) {
    insert_my_blog_categories(objects: {name_categories: $name_categories}) {
      affected_rows
    }
  }
`

export const mutationUpdateCategory = gql`mutation MyMutation($name_categories: String!, $id_categories: Int!) {
    update_my_blog_categories(where: {id_categories: {_eq: $id_categories}}, _set: {name_categories: $name_categories}) {
      affected_rows
    }
  }
`

export const queryGetCategoryByID = gql`query MyQuery($id_categories: Int!) {
    my_blog_categories(where: {id_categories: {_eq: $id_categories}}) {
      name_categories
    }
  }  
`