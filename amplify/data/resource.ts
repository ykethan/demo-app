import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const MODELS = {
  Post: "Post",
  Comment: "Comment",
  Upvote: "Upvote",
  UserProfile: "UserProfile",
} as const;

const GROUPS = {
  admins: "admins",
} as const;

const schema = a.schema({
  [MODELS.Post]: a
    .model({
      id: a.id(),
      author: a.string(), // readable owner username
      title: a.string().required(),
      body: a.string(),
      link: a.url(),
      linkHostname: a.string(),
      comments: a.hasMany(MODELS.Comment),
    })
    .authorization([
      a.allow.public(),
      a.allow.owner().inField("author"),
      a.allow.owner(),
      a.allow.specificGroup(GROUPS.admins).to(["read", "update", "delete"]),
      a.allow.private("userPools").to(["list", "get"]),
      a.allow.public("iam").to(["list", "get"]),
    ]),
  [MODELS.Comment]: a
    .model({
      id: a.id(),
      author: a.string(), // readable owner username
      content: a.string(),
      post: a.belongsTo(MODELS.Post),
      replies: a.hasMany(MODELS.Comment),
    })
    .authorization([
      a.allow.owner().inField("author"),
      a.allow.owner(),
      a.allow.specificGroup(GROUPS.admins).to(["read", "update", "delete"]),
      a.allow.private("userPools").to(["list", "get"]),
      a.allow.public("iam").to(["list", "get"]),
      a.allow.public().to(["list", "get", "create"]),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "myAPI",
  authorizationModes: {
    defaultAuthorizationMode: "API_KEY",
    apiKeyAuthorizationMode: {
      expiresInDays: 7,
      description: "API Key authorization",
    },
  },
});
