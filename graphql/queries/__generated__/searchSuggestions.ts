/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchSuggestions
// ====================================================

export interface searchSuggestions_searchSuggestions {
  __typename: "SearchResult";
  name: string | null;
  type: string | null;
}

export interface searchSuggestions {
  searchSuggestions: (searchSuggestions_searchSuggestions | null)[] | null;
}

export interface searchSuggestionsVariables {
  searchTerm?: string | null;
}
