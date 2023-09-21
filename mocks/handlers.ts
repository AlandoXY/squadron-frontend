import { rest } from 'msw'

export const handlers = [
  rest.get('https://my.backend/skills', (_req, res, ctx) => {
    return res(
      ctx.json(['Test Skills1', 'Test Skills2', 'Test Skills3'])
    )
  }),
]
