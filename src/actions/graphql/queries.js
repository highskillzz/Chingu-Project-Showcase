import gql from "graphql-tag";
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
console.log("Query is");
console.log(getProjectQuery);

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
    }
  }
`;

export { getProjectQuery, allProjectsQuery };
