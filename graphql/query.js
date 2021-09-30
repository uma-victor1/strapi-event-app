import gql from 'graphql-tag';

export const eventQuery = gql`
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