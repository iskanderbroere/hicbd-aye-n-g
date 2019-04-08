/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: homePage
// ====================================================

export interface homePage_brandBars_image {
  __typename: "Image";
  altText: string;
  url: string;
}

export interface homePage_brandBars {
  __typename: "BrandBar";
  heading: string;
  image: homePage_brandBars_image;
}

export interface homePage_callToAction {
  __typename: "CallToAction";
  heading: string;
  description: string;
}

export interface homePage {
  brandBars: (homePage_brandBars | null)[] | null;
  /**
   * A simple type for getting started!
   */
  heading: string | null;
  callToAction: homePage_callToAction | null;
}
