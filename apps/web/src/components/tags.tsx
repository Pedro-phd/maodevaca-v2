import { Tag } from '@/domain/tag/model'

import { Badge } from './ui/badge'

interface Props {
  tagId: number
  tags: Tag[]
}

function Tags({ tagId, tags }: Props) {
  const filtered = tags.find((t) => t.id === tagId)
  if (filtered) {
    return <Badge variant="outline">{filtered?.name}</Badge>
  }
  return <></>
}

export default Tags
