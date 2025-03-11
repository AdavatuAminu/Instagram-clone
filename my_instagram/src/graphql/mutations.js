/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const followUser = /* GraphQL */ `
  mutation FollowUser($followedId: ID!) {
    followUser(followedId: $followedId) {
      id
      followerId
      followedId
      follower {
        id
        username
        bio
        profilePicture
        likedBy
        likes
        createdAt
        updatedAt
        __typename
      }
      followed {
        id
        username
        bio
        profilePicture
        likedBy
        likes
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      text
      imageKey
      userId
      likes
      likedBy
      tags
      comments {
        nextToken
        __typename
      }
      timestamp
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      text
      imageKey
      userId
      likes
      likedBy
      tags
      comments {
        nextToken
        __typename
      }
      timestamp
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      text
      imageKey
      userId
      likes
      likedBy
      tags
      comments {
        nextToken
        __typename
      }
      timestamp
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      bio
      profilePicture
      posts {
        nextToken
        __typename
      }
      following {
        nextToken
        __typename
      }
      followers {
        nextToken
        __typename
      }
      likedBy
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      bio
      profilePicture
      posts {
        nextToken
        __typename
      }
      following {
        nextToken
        __typename
      }
      followers {
        nextToken
        __typename
      }
      likedBy
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      bio
      profilePicture
      posts {
        nextToken
        __typename
      }
      following {
        nextToken
        __typename
      }
      followers {
        nextToken
        __typename
      }
      likedBy
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createFollow = /* GraphQL */ `
  mutation CreateFollow(
    $input: CreateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    createFollow(input: $input, condition: $condition) {
      id
      followerId
      followedId
      follower {
        id
        username
        bio
        profilePicture
        likedBy
        likes
        createdAt
        updatedAt
        __typename
      }
      followed {
        id
        username
        bio
        profilePicture
        likedBy
        likes
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateFollow = /* GraphQL */ `
  mutation UpdateFollow(
    $input: UpdateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    updateFollow(input: $input, condition: $condition) {
      id
      followerId
      followedId
      follower {
        id
        username
        bio
        profilePicture
        likedBy
        likes
        createdAt
        updatedAt
        __typename
      }
      followed {
        id
        username
        bio
        profilePicture
        likedBy
        likes
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteFollow = /* GraphQL */ `
  mutation DeleteFollow(
    $input: DeleteFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    deleteFollow(input: $input, condition: $condition) {
      id
      followerId
      followedId
      follower {
        id
        username
        bio
        profilePicture
        likedBy
        likes
        createdAt
        updatedAt
        __typename
      }
      followed {
        id
        username
        bio
        profilePicture
        likedBy
        likes
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      text
      userId
      postId
      post {
        id
        text
        imageKey
        userId
        likes
        likedBy
        tags
        timestamp
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      text
      userId
      postId
      post {
        id
        text
        imageKey
        userId
        likes
        likedBy
        tags
        timestamp
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      text
      userId
      postId
      post {
        id
        text
        imageKey
        userId
        likes
        likedBy
        tags
        timestamp
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
