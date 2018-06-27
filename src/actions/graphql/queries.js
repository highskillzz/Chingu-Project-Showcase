import { gql } from "graphql-tag";

const projectsQuery=gql`
  query {
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

export {projectsQuery};