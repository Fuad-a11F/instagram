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
  query GetPosts($id: Int!, $limit: Int!, $offset: Int!) {
    getPosts(id: $id, limit: $limit, offset: $offset) {
      photo_url
      likes
      id
      comments
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
  query GetPost($token: String!, $id: Int!, $user_id: Int!) {
    getPost(token: $token, id: $id, user_id: $user_id) {
      photo_url
      likes
      title
      id
      liked
      favourite
    
      user_main {
        image_url
        name
        nickname
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
  mutation AddComment($token: String!, $text: String!, $user_id:Int! $post_id: Int!) {
    addComment(token: $token, text: $text, post_id: $post_id, user_id: $user_id)
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

export const GET_MAIN_USER  = gql`
  query GetMainUser($token: String!) {
    getMainUser(token: $token) {
      name
      nickname
      image_url
    }
  }
`
export const REMOVE_HINT  = gql`
  mutation RemoveHint($token: String!) {
    removeHint(token: $token) 
  }
`

export const GET_HINT  = gql`
  query GetHint($token: String!) {
    getHint(token: $token) 
  }
`

export const GET_USER_PHOTO  = gql`
  query GetUserPhoto($token: String!) {
    getUserPhoto(token: $token) {
      id
      image_url
    }
  }
`

export const GET_ACTION  = gql`
  query GetAction($token: String!) {
    getAction(token: $token) {
      action
      id
      post_id {
        photo_url
      }
      is_looked
      user_id  {
        image_url
        name
      }
    }
  }
`
export const ADD_ACTION  = gql`
  mutation AddAction($token: String!, $user_id:Int!, $post_id: Int, $action:String!) {
    addAction(token: $token, user_id: $user_id, post_id: $post_id, action: $action ) 
  }
`

export const ADD_LIKE_POST  = gql`
  mutation AddLikePost($token: String!, $post_id: Int!,  $user_id:Int!) {
    addLikePost(post_id: $post_id, token: $token, user_id: $user_id) 
  }
`
export const READ_ACTION  = gql`
  mutation ReadAction($token: String!) {
    readAction(token: $token) 
  }
`
export const ADD_CHAT  = gql`
  mutation AddChat($token: String!, $id:Int!) {
    addChat(token: $token, id: $id ) 
  }
`

export const GET_CHAT  = gql`
  query GetChat($token: String!) {
    getChat(token: $token) {
      id
      image_url
      name
    }
  }
`

export const ADD_MESSAGE  = gql`
  mutation AddMessage($token: String!, $send_user_id:Int!, $text: String!, $is_image: Boolean!) {
    addMessage(token: $token, send_user_id: $send_user_id, text: $text, is_image: $is_image) 
  }
`

export const GET_MESSAGES  = gql`
  query GetMessages($token: String!, $id: Int) {
    getMessages(token: $token, id: $id) {
      id
      text
      time
      user_id
      is_image
    }
  }
`
export const DELETE_MESSAGE  = gql`
  mutation DeleteMessage($id:Int!) {
    deleteMessage(id: $id) 
  }
`
export const MAKE_READ  = gql`
  mutation MakeRead($token: String!, $send_id:Int!) {
    makeRead(token: $token, send_id: $send_id) 
  }
`

export const GET_MESSAGE_HAVE  = gql`
  query GetMessageHave($token: String!) {
    getMessageHave(token: $token) 
  }
`

export const DELETE_CHAT  = gql`
  mutation DeleteChat($id: Int!) {
    deleteChat(id: $id) 
  }
`

export const GET_USER_CHAT  = gql`
  query GetUserChat($id: Int!) {
    getUserChat(id: $id) {
      id
      name
      image_url
    }
  }
`

export const ADD_BLOCK  = gql`
  mutation AddBlock($token: String!, $id: Int!) {
    addBlock(token: $token, id: $id) 
  }
`

export const DELETE_BLOCK  = gql`
  mutation DeleteBlock($token: String!, $id: Int!) {
    deleteBlock(token: $token, id: $id) 
  }
`

export const GET_USER_BLOCK  = gql`
  query GetUserBlock($token: String!, $id: Int!) {
    getUserBlock(token: $token, id: $id)
  }
`

export const ADD_FAVOURITE  = gql`
  mutation AddFavourite($token: String!, $post_id: Int!) {
    addFavourite(token: $token, post_id: $post_id) 
  }
`

export const GET_FAVOURITES  = gql`
  query GetFavourites($token: String!, $limit: Int!, $offset: Int!) {
    getFavourites(token: $token, limit: $limit, offset: $offset) {
      photo_url
      likes
      title
      id
      liked
      # favourite
      comments 
      
      user_main {
        image_url
        name
        nickname
      }
    }
  }
`

export const GET_POST_COMMENT  = gql`
  query GetPostComment($post_id: Int!, $limit: Int!, $offset: Int!) {
    getPostComment(post_id: $post_id, limit: $limit, offset: $offset) {
      text
      likes
      id
      time
      send_user_id
      user_id {
        image_url
        name
        id
      }
    }
  }
`

export const GET_USER_NAME  = gql`
  query GetUserName($id: Int) {
    getUserName(id: $id)
  }
`

export const GET_RECOMMEND  = gql`
  query GetRecommend($token: String!) {
    getRecommend(token: $token) {
      name
    }
  }
`

export const DELETE_POST  = gql`
  mutation DeletePost($id: Int!) {
    deletePost(id: $id)
  }
`