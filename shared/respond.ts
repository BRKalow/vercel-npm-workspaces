import { VercelResponse } from '@vercel/node'
import { StatusCodes } from 'http-status-codes'

export const respond = (response: VercelResponse) => {
  response.status(StatusCodes.OK).send('OK')
}
