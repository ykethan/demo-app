/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
        commentRepliesId
        content
        createdAt
        id
        owner
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
      nextToken
      __typename
    }
  }
`;
