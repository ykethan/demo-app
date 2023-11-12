import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const MODELS = {
  Post: "Post",
  Comment: "Comment",
  Upvote: "Upvote",
  UserProfile: "UserProfile",
  Reply: "Reply",
} as const;

const GROUPS = {
  admins: "admins",
} as const;

const schema = a.schema({
  [MODELS.Post]: a
    .model({
      id: a.id(),
      author: a.string(),
      title: a.string().required(),
      content: a.string(),
      comments: a.hasMany(MODELS.Comment),
    })
    .authorization([
      a.allow.public(),
      // a.allow.owner().inField("author"),
      // a.allow.owner(),
      // a.allow.specificGroup(GROUPS.admins).to(["read", "update", "delete"]),
      // a.allow.private("userPools").to(["list", "get"]),
      // a.allow.public("iam").to(["list", "get"]),
    ]),
  [MODELS.Comment]: a
    .model({
      id: a.id(),
      author: a.string(),
      content: a.string(),
      post: a.belongsTo(MODELS.Post),
      replies: a.hasMany(MODELS.Reply),
    })
    .authorization([
      // a.allow.owner().inField("author"),
      // a.allow.owner(),
      // a.allow.specificGroup(GROUPS.admins).to(["read", "update", "delete"]),
      // a.allow.private("userPools").to(["list", "get"]),
      // a.allow.public("iam").to(["list", "get"]),
      // a.allow.public().to(["list", "get", "create"]),
      a.allow.public(),
    ]),
  [MODELS.Reply]: a
    .model({
      id: a.id(),
      author: a.string(),
      content: a.string(),
    })
    .authorization([a.allow.public()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "myAPI",
  authorizationModes: {
    defaultAuthorizationMode: "API_KEY",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
      description: "API Key authorization",
    },
  },
});
