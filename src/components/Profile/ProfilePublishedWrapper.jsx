import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POSTS } from "../../GraphQl/Queries";
import ProfilePublishedItem from './ProfilePublishedItem'
import DetailInfoPost from "./modal/DetailInfoPost";
import PostLoader from "./ProfileContentLoader";

function ProfilePublishedWrapper({id}) {
  let {error, loading, data, refetch} = useQuery(GET_POSTS, {variables: {id: id}})
  let [posts, setPosts] = React.useState()
  let [modal, setModal] = React.useState(false)
  let [postId, setPostId] = React.useState(false)

  React.useEffect(() => {
    if (data) setPosts(data.getPosts);
  }, [data])

  React.useEffect(() => {
    refetch()
  }, [])

  return (
    <div>
      {!loading ? 
      <>
        <div className="ProfilePublishedElem__grid">
            {posts && posts.map(item => {
              return <ProfilePublishedItem id={item.id} setModal={setModal} setPostId={setPostId} key={item.id} photo={item.photo_url} likes={item.likes} comments={item.comments.length}/>
            })}
        </div>
        {postId && <DetailInfoPost modal={modal} setModal={setModal} postId={postId}/>}
      </> :
      <div className="ProfilePublishedElem__grid">
        <div className='post__loader'>
          <PostLoader /> 
        </div>
        <div className='post__loader'>
          <PostLoader /> 
        </div>
        <div className='post__loader'>
          <PostLoader /> 
        </div>
        <div className='post__loader'>
          <PostLoader /> 
        </div>
        <div className='post__loader'>
          <PostLoader /> 
        </div>
        <div className='post__loader'>
          <PostLoader /> 
        </div> 
      </div>}
    </div>

  );
}

export default ProfilePublishedWrapper;
