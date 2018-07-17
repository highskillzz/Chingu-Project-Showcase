//contains the queries for graphql interactions

import gql from "graphql-tag";

//query for getting project with specific id
const getProjectQuery = gql`
  query($id: ID!) {
    project(id: $id) {
      id
      name
      description
      image
      contributors {
        name
        username
      }
      resources {
        title
        url
      }
      build
      version
      features
      keywords
      browserSupport
    }
  }
`;

//query for getting all projects
const allProjectsQuery = gql`
  {
    projects {
      id
      name
      description
      image
      contributors {
        name
        username
      }
      resources {
        title
        url
      }
      build
      version
      features
      keywords
      browserSupport
      category
    }
  }
`;

export { getProjectQuery, allProjectsQuery };
