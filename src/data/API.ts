/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Comment = {
  __typename: "Comment",
  author?: string | null,
  commentRepliesId?: string | null,
  content?: string | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  post?: Post | null,
  postCommentsId?: string | null,
  replies?: ModelCommentConnection | null,
  updatedAt: string,
};

export type Post = {
  __typename: "Post",
  author?: string | null,
  body?: string | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  id: string,
  link?: string | null,
  linkHostname?: string | null,
  owner?: string | null,
  title: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  and?: Array< ModelCommentFilterInput | null > | null,
  author?: ModelStringInput | null,
  commentRepliesId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCommentFilterInput | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPostFilterInput = {
  and?: Array< ModelPostFilterInput | null > | null,
  author?: ModelStringInput | null,
  body?: ModelStringInput | null,
  id?: ModelIDInput | null,
  link?: ModelStringInput | null,
  linkHostname?: ModelStringInput | null,
  not?: ModelPostFilterInput | null,
  or?: Array< ModelPostFilterInput | null > | null,
  title?: ModelStringInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelCommentConditionInput = {
  and?: Array< ModelCommentConditionInput | null > | null,
  author?: ModelStringInput | null,
  commentRepliesId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  not?: ModelCommentConditionInput | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  postCommentsId?: ModelIDInput | null,
};

export type CreateCommentInput = {
  author?: string | null,
  commentRepliesId?: string | null,
  content?: string | null,
  id?: string | null,
  postCommentsId?: string | null,
};

export type ModelPostConditionInput = {
  and?: Array< ModelPostConditionInput | null > | null,
  author?: ModelStringInput | null,
  body?: ModelStringInput | null,
  link?: ModelStringInput | null,
  linkHostname?: ModelStringInput | null,
  not?: ModelPostConditionInput | null,
  or?: Array< ModelPostConditionInput | null > | null,
  title?: ModelStringInput | null,
};

export type CreatePostInput = {
  author?: string | null,
  body?: string | null,
  id?: string | null,
  link?: string | null,
  linkHostname?: string | null,
  title: string,
};

export type DeleteCommentInput = {
  id: string,
};

export type DeletePostInput = {
  id: string,
};

export type UpdateCommentInput = {
  author?: string | null,
  commentRepliesId?: string | null,
  content?: string | null,
  id: string,
  postCommentsId?: string | null,
};

export type UpdatePostInput = {
  author?: string | null,
  body?: string | null,
  id: string,
  link?: string | null,
  linkHostname?: string | null,
  title?: string | null,
};

export type ModelSubscriptionCommentFilterInput = {
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  body?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  link?: ModelSubscriptionStringInput | null,
  linkHostname?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      author?: string | null,
      body?: string | null,
      createdAt: string,
      id: string,
      link?: string | null,
      linkHostname?: string | null,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    author?: string | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    link?: string | null,
    linkHostname?: string | null,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      author?: string | null,
      commentRepliesId?: string | null,
      content?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      postCommentsId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      author?: string | null,
      body?: string | null,
      createdAt: string,
      id: string,
      link?: string | null,
      linkHostname?: string | null,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      author?: string | null,
      body?: string | null,
      createdAt: string,
      id: string,
      link?: string | null,
      linkHostname?: string | null,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    author?: string | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    link?: string | null,
    linkHostname?: string | null,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      author?: string | null,
      body?: string | null,
      createdAt: string,
      id: string,
      link?: string | null,
      linkHostname?: string | null,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    author?: string | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    link?: string | null,
    linkHostname?: string | null,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      author?: string | null,
      body?: string | null,
      createdAt: string,
      id: string,
      link?: string | null,
      linkHostname?: string | null,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    author?: string | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    link?: string | null,
    linkHostname?: string | null,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  author?: string | null,
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      author?: string | null,
      body?: string | null,
      createdAt: string,
      id: string,
      link?: string | null,
      linkHostname?: string | null,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  author?: string | null,
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    author?: string | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    link?: string | null,
    linkHostname?: string | null,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  author?: string | null,
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      author?: string | null,
      body?: string | null,
      createdAt: string,
      id: string,
      link?: string | null,
      linkHostname?: string | null,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  author?: string | null,
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    author?: string | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    link?: string | null,
    linkHostname?: string | null,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  author?: string | null,
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      author?: string | null,
      body?: string | null,
      createdAt: string,
      id: string,
      link?: string | null,
      linkHostname?: string | null,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  author?: string | null,
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    author?: string | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    link?: string | null,
    linkHostname?: string | null,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};
