import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $name: String!
    $nickname: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      name: $name
      nickname: $nickname
      email: $email
      password: $password
    ) {
      name
    }
  }
`;

export const LOGIN_USER = gql`
  query LoginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password)
  }
`

export const GET_POSTS = gql`
  query GetPosts($id: Int!) {
    getPosts(id: $id) {
      photo_url
      likes
      id
      comments {
        text
      }
    }
  }
`

export const GET_USERS = gql`
  query GetUsers($name: String!) {
    getUsers(name: $name) {
      name
      image_url
      nickname
      id
    }
  }
`

export const GET_POST = gql`
  query GetPost($token: String!, $id: Int!) {
    getPost(token: $token, id: $id) {
      photo_url
      likes
      title
      id
      comments {
        text
        likes
        time
      }
      user_main {
        image_url
        name
      }
    }
  }
`

export const GET_USER = gql`
  query GetUser($token: String!) {
    getUser(token: $token) {
      name
      email
      nickname
      site
      about_me
      number
      gender
      image_url
    }
  }
`;

export const GET_USER_TOP = gql`
  query GetUserTop($id: Int!) {
    getUserTop(id: $id) {
      name
      image_url
      nickname
      post_length
      subscribers_length
      subscriptions_length
    }
  }
`;

export const GET_PASSWORD = gql`
  query GetPassword($token: String!) {
    getPassword(token: $token) {
      nickname
      image_url
    }
  }
`;

export const CHANGE_MAIN_DATA = gql`
  mutation ChangeMainData(
    $token: String!
    $name: String!
    $nickname: String!
    $email: String!
    $number: String
    $site: String
    $about_me: String
    $gender: String
    $image_url: String
  ) {
    changeMainData(token: $token,name: $name, image_url: $image_url, nickname: $nickname,email: $email,number: $number,site: $site,gender: $gender,about_me: $about_me) 
  }
`;


export const CHANGE_PASSWORD  = gql`
  mutation ChangePassword($token: String!, $old_password: String!, $new_password: String!) {
    changePassword(token: $token, old_password: $old_password, new_password: $new_password)
  }
`

export const ADD_POST  = gql`
  mutation AddPost($token: String!, $image_path: String, $comment_title: String) {
    addPost(token: $token, image_path: $image_path, comment_title: $comment_title)
  }
`

export const ADD_COMMENT  = gql`
  mutation AddComment($token: String!, $time: String!, $text: String!  $post_id: Int!) {
    addComment(token: $token, text: $text, time: $time, post_id: $post_id)
  }
`

export const GET_SEARCH  = gql`
  query GetSearch($token: String!) {
    getSearch(token: $token) {
      name
      nickname
      id
      image_url
    }
  }
`

export const ADD_SEARCH  = gql`
  mutation AddSearch($token: String!, $search_id: Int!) {
    addSearch(token: $token, search_id: $search_id)
  }
`
export const ADD_SUBSCRIBE  = gql`
  mutation AddSubscribe($token: String!, $subscriber_id: Int!) {
    addSubscribe(token: $token, subscriber_id: $subscriber_id)
  }
`

export const GET_SUBSCRIBER  = gql`
  query GetSubscriber($token: String!, $subscriber_id: Int!) {
    getSubscriber(token: $token, subscriber_id: $subscriber_id) 
  }
`
export const REMOVE_SUBSCRIBE  = gql`
  mutation RemoveSubscribe($token: String!, $subscriber_id: Int!) {
    removeSubscribe(token: $token, subscriber_id: $subscriber_id) 
  }
`
export const GET_SUBSCRIBERS  = gql`
  query GetSubscribers($id: Int!) {
    getSubscribers(id: $id) {
      image_url
      id
      name
    }
  }
`
export const GET_SUBSCRIBTION  = gql`
  query GetSubscribtion($id: Int!) {
    getSubscribtion(id: $id) {
      image_url
      id
      name
    }
  }
`

export const GET_HINT_COMPONENT_FRIEND  = gql`
  query GetHintComponentFriend($token: String!) {
    getHintComponentFriend(token: $token)
  }
`
export const GET_HINT_COMPONENT_NUMBER  = gql`
  query GetHintComponentNumber($token: String!) {
    getHintComponentNumber(token: $token)
  }
`
export const GET_HINT_COMPONENT_PHOTO  = gql`
  query GetHintComponentPhoto($token: String!) {
    getHintComponentPhoto(token: $token)
  }
`


