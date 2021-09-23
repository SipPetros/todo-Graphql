import { gql } from 'apollo-boost'

export const TOGGLE_TODO = gql`
mutation toggleTodo($id: uuid, $done: Boolean!) {
        update_todos(where: {id: {_eq: $id}}, _set: {done: $done}) {
            returning {
            done
            id
            text
            }
  }
}
`
export const ADD_TODO = gql`
mutation addTodo ($text: String!){
  insert_todos(objects: {text: $text}) {
            returning {
            done
            id
            text
            }
        }
    }
`

export const DELETE_TODO = gql `
mutation MyMutation($id: uuid!) {
  delete_todos(where: {id: {_eq: $id}}) {
    returning {
      done
      id
      text
    }
  }
}

`