/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
    author
    content
    createdAt
    id
    post {
      author
      content
      createdAt
      id
      title
      updatedAt
      __typename
    }
    postCommentsId
    replies {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
    author
    comments {
      nextToken
      __typename
    }
    content
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onCreateReply = /* GraphQL */ `subscription OnCreateReply($filter: ModelSubscriptionReplyFilterInput) {
  onCreateReply(filter: $filter) {
    author
    commentRepliesId
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReplySubscriptionVariables,
  APITypes.OnCreateReplySubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
    author
    content
    createdAt
    id
    post {
      author
      content
      createdAt
      id
      title
      updatedAt
      __typename
    }
    postCommentsId
    replies {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
    author
    comments {
      nextToken
      __typename
    }
    content
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onDeleteReply = /* GraphQL */ `subscription OnDeleteReply($filter: ModelSubscriptionReplyFilterInput) {
  onDeleteReply(filter: $filter) {
    author
    commentRepliesId
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReplySubscriptionVariables,
  APITypes.OnDeleteReplySubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
    author
    content
    createdAt
    id
    post {
      author
      content
      createdAt
      id
      title
      updatedAt
      __typename
    }
    postCommentsId
    replies {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
    author
    comments {
      nextToken
      __typename
    }
    content
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onUpdateReply = /* GraphQL */ `subscription OnUpdateReply($filter: ModelSubscriptionReplyFilterInput) {
  onUpdateReply(filter: $filter) {
    author
    commentRepliesId
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReplySubscriptionVariables,
  APITypes.OnUpdateReplySubscription
>;
