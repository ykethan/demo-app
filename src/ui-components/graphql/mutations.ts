/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $condition: ModelCommentConditionInput
    $input: CreateCommentInput!
  ) {
    createComment(condition: $condition, input: $input) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $condition: ModelPostConditionInput
    $input: CreatePostInput!
  ) {
    createPost(condition: $condition, input: $input) {
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
export const createReply = /* GraphQL */ `
  mutation CreateReply(
    $condition: ModelReplyConditionInput
    $input: CreateReplyInput!
  ) {
    createReply(condition: $condition, input: $input) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $condition: ModelCommentConditionInput
    $input: DeleteCommentInput!
  ) {
    deleteComment(condition: $condition, input: $input) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $condition: ModelPostConditionInput
    $input: DeletePostInput!
  ) {
    deletePost(condition: $condition, input: $input) {
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
export const deleteReply = /* GraphQL */ `
  mutation DeleteReply(
    $condition: ModelReplyConditionInput
    $input: DeleteReplyInput!
  ) {
    deleteReply(condition: $condition, input: $input) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $condition: ModelCommentConditionInput
    $input: UpdateCommentInput!
  ) {
    updateComment(condition: $condition, input: $input) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $condition: ModelPostConditionInput
    $input: UpdatePostInput!
  ) {
    updatePost(condition: $condition, input: $input) {
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
export const updateReply = /* GraphQL */ `
  mutation UpdateReply(
    $condition: ModelReplyConditionInput
    $input: UpdateReplyInput!
  ) {
    updateReply(condition: $condition, input: $input) {
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
