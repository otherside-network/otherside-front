import { IDefaultResponse } from '@api/default'

//
export type GetBoardResponse = Omit<IDefaultResponse, 'result'> & {
  result: Board[]
}

export interface Board {
  boardId: number
  name: string
  slug: string
  description?: any
  parentId?: any
  createdAt?: string
  updatedAt?: string
}
