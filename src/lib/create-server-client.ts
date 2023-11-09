import * as API from "aws-amplify/api";
import type { Schema } from "../../amplify/data/resource";
import type { NextApiRequest } from "next";

/**
 * Create server client
 * @param req API module from withServerSideContext({ req })
 * @returns
 */
export function createServerClient(req: NextApiRequest) {
  // return API.generateClient<Schema>()
  return API.generateClient();
}
