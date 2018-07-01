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
export {projectsQuery};