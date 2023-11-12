/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const getReply = /* GraphQL */ `
  query GetReply($id: ID!) {
    getReply(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        author
        content
        createdAt
        id
        postCommentsId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        author
        content
        createdAt
        id
        title
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listReplies = /* GraphQL */ `
  query ListReplies(
    $filter: ModelReplyFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReplies(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        author
        commentRepliesId
        content
        createdAt
        id
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
