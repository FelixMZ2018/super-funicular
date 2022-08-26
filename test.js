const query=`query ($org: String!, $project_number: Int!) {
  organization(login: $org) {
    projectNext(number: $project_number) {
      id
      fields(first: 20) {
        nodes {
          id
          name
          settings
        }
      }
    }
  }
}`
const variables = {
    owner: context.repo.owner,
    name: context.repo.repo,
    project_number: parseInt(context.payload.inputs.PROJECT_NUMBER)
}
const result = await github.graphql(query, variables)
console.log(result)
