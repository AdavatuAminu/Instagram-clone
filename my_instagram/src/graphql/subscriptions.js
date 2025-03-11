/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $userId: String
  ) {
    onCreatePost(filter: $filter, userId: $userId) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $userId: String
  ) {
    onUpdatePost(filter: $filter, userId: $userId) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $userId: String
  ) {
    onDeletePost(filter: $filter, userId: $userId) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow(
    $filter: ModelSubscriptionFollowFilterInput
    $followerId: String
  ) {
    onCreateFollow(filter: $filter, followerId: $followerId) {
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
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow(
    $filter: ModelSubscriptionFollowFilterInput
    $followerId: String
  ) {
    onUpdateFollow(filter: $filter, followerId: $followerId) {
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
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow(
    $filter: ModelSubscriptionFollowFilterInput
    $followerId: String
  ) {
    onDeleteFollow(filter: $filter, followerId: $followerId) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $userId: String
  ) {
    onCreateComment(filter: $filter, userId: $userId) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $userId: String
  ) {
    onUpdateComment(filter: $filter, userId: $userId) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $userId: String
  ) {
    onDeleteComment(filter: $filter, userId: $userId) {
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
