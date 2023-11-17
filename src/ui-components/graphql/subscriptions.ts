/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
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
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
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
`;
export const onCreateReply = /* GraphQL */ `
  subscription OnCreateReply($filter: ModelSubscriptionReplyFilterInput) {
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
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
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
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
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
`;
export const onDeleteReply = /* GraphQL */ `
  subscription OnDeleteReply($filter: ModelSubscriptionReplyFilterInput) {
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
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
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
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
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
`;
export const onUpdateReply = /* GraphQL */ `
  subscription OnUpdateReply($filter: ModelSubscriptionReplyFilterInput) {
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
`;
