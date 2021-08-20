import { VercelRequest, VercelResponse } from "@vercel/node";
import { respond } from 'shared/respond'

export default (request: VercelRequest, response: VercelResponse) => {
  respond(response)
}
