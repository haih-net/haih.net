import { builder } from '../../builder'

builder.prismaObject('Tag', {
  fields: (t) => ({
    id: t.exposeID('id'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    name: t.exposeString('name'),
    createdById: t.exposeString('createdById'),
    CreatedBy: t.relation('CreatedBy'),
    Posts: t.relation('Posts'),
  }),
})

import './resolvers/tag'
import './resolvers/tags'
import './resolvers/createTag'
import './resolvers/updateTag'
import './resolvers/deleteTag'
import './resolvers/addTagsToPost'
import './resolvers/removeTagsFromPost'
