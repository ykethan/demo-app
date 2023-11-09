/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $author: String
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(author: $author, filter: $filter, owner: $owner) {
      author
      commentRepliesId
      content
      createdAt
      id
      owner
      post {
        author
        body
        createdAt
        id
        link
        linkHostname
        owner
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
  subscription OnCreatePost(
    $author: String
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(author: $author, filter: $filter, owner: $owner) {
      author
      body
      comments {
        nextToken
        __typename
      }
      createdAt
      id
      link
      linkHostname
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $author: String
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(author: $author, filter: $filter, owner: $owner) {
      author
      commentRepliesId
      content
      createdAt
      id
      owner
      post {
        author
        body
        createdAt
        id
        link
        linkHostname
        owner
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
  subscription OnDeletePost(
    $author: String
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(author: $author, filter: $filter, owner: $owner) {
      author
      body
      comments {
        nextToken
        __typename
      }
      createdAt
      id
      link
      linkHostname
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $author: String
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(author: $author, filter: $filter, owner: $owner) {
      author
      commentRepliesId
      content
      createdAt
      id
      owner
      post {
        author
        body
        createdAt
        id
        link
        linkHostname
        owner
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
  subscription OnUpdatePost(
    $author: String
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(author: $author, filter: $filter, owner: $owner) {
      author
      body
      comments {
        nextToken
        __typename
      }
      createdAt
      id
      link
      linkHostname
      owner
      title
      updatedAt
      __typename
    }
  }
`;
