import gql from "graphql-tag";
const projectsQuery=gql`
  {
  project(id:"5b38a4eef73d09675654889f") {
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