import gql from "graphql-tag";
const projectsQuery=gql`
  {
  project(id:"5b38d1e1f73d096756549550") {
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
console.log(projectsQuery);

const allProjectsQuery=gql`
  {
  projects{
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

export {projectsQuery,allProjectsQuery};