import { gql } from "graphql-tag";

const projectsQuery=gql`
  {
  projects {
    id
    name
    description
    image
    contributors {
      name
    }
    resources {
      title
      url
    }
  }
}
`;
export {projectsQuery};