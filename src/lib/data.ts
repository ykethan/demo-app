import * as API from "aws-amplify/api";
import type { Schema } from "../../amplify/data/resource";

export const data = API.generateClient<Schema>();
export type Client = typeof data;
