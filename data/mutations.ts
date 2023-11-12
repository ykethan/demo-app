/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createComment = /* GraphQL */ `mutation CreateComment(
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const createReply = /* GraphQL */ `mutation CreateReply(
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
` as GeneratedMutation<
  APITypes.CreateReplyMutationVariables,
  APITypes.CreateReplyMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const deleteReply = /* GraphQL */ `mutation DeleteReply(
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
` as GeneratedMutation<
  APITypes.DeleteReplyMutationVariables,
  APITypes.DeleteReplyMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const updateReply = /* GraphQL */ `mutation UpdateReply(
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
` as GeneratedMutation<
  APITypes.UpdateReplyMutationVariables,
  APITypes.UpdateReplyMutation
>;
