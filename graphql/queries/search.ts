import gql from 'graphql-tag'

export default gql`
  query searchSuggestions($searchTerm: String) {
    searchSuggestions(searchTerm: $searchTerm) {
      name
      type
    }
  }
`