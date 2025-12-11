import { shield } from 'graphql-shield'
import { isAuthenticated } from './rules/isAuthenticated'

const ruleTree = {
  Query: {},
  Mutation: {
    // Example: require authentication for specific mutations
    // someProtectedMutation: isAuthenticated,
  },
}

// Export isAuthenticated for use in other places
export { isAuthenticated }

export const permissions = shield(ruleTree, {
  /**
   * Allow use new Error() in resolvers
   */
  allowExternalErrors: true,
})
