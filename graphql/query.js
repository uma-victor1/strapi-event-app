import gql from 'graphql-tag';

export const allEventQuery = gql`
query Events {
    events {
      id
      title
      date
      image {
        name
      }
      categories {
        name
      }
    }
  }  
`
export const eventQuery = gql`
query event($id: ID!) {
  event(id: $id) {
    id
    title
    date
    description
    image {
      name
    }
  }
}
`
