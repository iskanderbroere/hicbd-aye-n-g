import gql from 'graphql-tag'

export default gql`
  query homePage {
    brandBars {
      heading
      image {
        altText
        url
      }
    }
    heading
    callToAction {
      heading
      description
    }
  }
`