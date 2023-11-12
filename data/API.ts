/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Comment = {
  __typename: "Comment",
  author?: string | null,
  content?: string | null,
  createdAt: string,
  id: string,
  post?: Post | null,
  postCommentsId?: string | null,
  replies?: ModelReplyConnection | null,
  updatedAt: string,
};

export type Post = {
  __typename: "Post",
  author?: string | null,
  comments?: ModelCommentConnection | null,
  content?: string | null,
  createdAt: string,
  id: string,
  title: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelReplyConnection = {
  __typename: "ModelReplyConnection",
  items:  Array<Reply | null >,
  nextToken?: string | null,
};

export type Reply = {
  __typename: "Reply",
  author?: string | null,
  commentRepliesId?: string | null,
  content?: string | null,
  createdAt: string,
  id: string,
  updatedAt: string,
};

export type ModelCommentFilterInput = {
  and?: Array< ModelCommentFilterInput | null > | null,
  author?: ModelStringInput | null,
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
  content?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPostFilterInput | null,
  or?: Array< ModelPostFilterInput | null > | null,
  title?: ModelStringInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelReplyFilterInput = {
  and?: Array< ModelReplyFilterInput | null > | null,
  author?: ModelStringInput | null,
  commentRepliesId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelReplyFilterInput | null,
  or?: Array< ModelReplyFilterInput | null > | null,
};

export type ModelCommentConditionInput = {
  and?: Array< ModelCommentConditionInput | null > | null,
  author?: ModelStringInput | null,
  content?: ModelStringInput | null,
  not?: ModelCommentConditionInput | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  postCommentsId?: ModelIDInput | null,
};

export type CreateCommentInput = {
  author?: string | null,
  content?: string | null,
  id?: string | null,
  postCommentsId?: string | null,
};

export type ModelPostConditionInput = {
  and?: Array< ModelPostConditionInput | null > | null,
  author?: ModelStringInput | null,
  content?: ModelStringInput | null,
  not?: ModelPostConditionInput | null,
  or?: Array< ModelPostConditionInput | null > | null,
  title?: ModelStringInput | null,
};

export type CreatePostInput = {
  author?: string | null,
  content?: string | null,
  id?: string | null,
  title: string,
};

export type ModelReplyConditionInput = {
  and?: Array< ModelReplyConditionInput | null > | null,
  author?: ModelStringInput | null,
  commentRepliesId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  not?: ModelReplyConditionInput | null,
  or?: Array< ModelReplyConditionInput | null > | null,
};

export type CreateReplyInput = {
  author?: string | null,
  commentRepliesId?: string | null,
  content?: string | null,
  id?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type DeletePostInput = {
  id: string,
};

export type DeleteReplyInput = {
  id: string,
};

export type UpdateCommentInput = {
  author?: string | null,
  content?: string | null,
  id: string,
  postCommentsId?: string | null,
};

export type UpdatePostInput = {
  author?: string | null,
  content?: string | null,
  id: string,
  title?: string | null,
};

export type UpdateReplyInput = {
  author?: string | null,
  commentRepliesId?: string | null,
  content?: string | null,
  id: string,
};

export type ModelSubscriptionCommentFilterInput = {
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  author?: ModelSubscriptionStringInput | null,
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
  author?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionReplyFilterInput = {
  and?: Array< ModelSubscriptionReplyFilterInput | null > | null,
  author?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionReplyFilterInput | null > | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    author?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      author?: string | null,
      content?: string | null,
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
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
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content?: string | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type GetReplyQueryVariables = {
  id: string,
};

export type GetReplyQuery = {
  getReply?:  {
    __typename: "Reply",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
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
      content?: string | null,
      createdAt: string,
      id: string,
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
      content?: string | null,
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRepliesQueryVariables = {
  filter?: ModelReplyFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRepliesQuery = {
  listReplies?:  {
    __typename: "ModelReplyConnection",
    items:  Array< {
      __typename: "Reply",
      author?: string | null,
      commentRepliesId?: string | null,
      content?: string | null,
      createdAt: string,
      id: string,
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
    content?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      author?: string | null,
      content?: string | null,
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
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
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content?: string | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type CreateReplyMutationVariables = {
  condition?: ModelReplyConditionInput | null,
  input: CreateReplyInput,
};

export type CreateReplyMutation = {
  createReply?:  {
    __typename: "Reply",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
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
    content?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      author?: string | null,
      content?: string | null,
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
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
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content?: string | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type DeleteReplyMutationVariables = {
  condition?: ModelReplyConditionInput | null,
  input: DeleteReplyInput,
};

export type DeleteReplyMutation = {
  deleteReply?:  {
    __typename: "Reply",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
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
    content?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      author?: string | null,
      content?: string | null,
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
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
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content?: string | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type UpdateReplyMutationVariables = {
  condition?: ModelReplyConditionInput | null,
  input: UpdateReplyInput,
};

export type UpdateReplyMutation = {
  updateReply?:  {
    __typename: "Reply",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    author?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      author?: string | null,
      content?: string | null,
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    author?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content?: string | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReplySubscriptionVariables = {
  filter?: ModelSubscriptionReplyFilterInput | null,
};

export type OnCreateReplySubscription = {
  onCreateReply?:  {
    __typename: "Reply",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    author?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      author?: string | null,
      content?: string | null,
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    author?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content?: string | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReplySubscriptionVariables = {
  filter?: ModelSubscriptionReplyFilterInput | null,
};

export type OnDeleteReplySubscription = {
  onDeleteReply?:  {
    __typename: "Reply",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    author?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      author?: string | null,
      content?: string | null,
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    author?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content?: string | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReplySubscriptionVariables = {
  filter?: ModelSubscriptionReplyFilterInput | null,
};

export type OnUpdateReplySubscription = {
  onUpdateReply?:  {
    __typename: "Reply",
    author?: string | null,
    commentRepliesId?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};
