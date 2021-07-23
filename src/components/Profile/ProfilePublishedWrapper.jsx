import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POSTS } from "../../GraphQl/Queries";
import ProfilePublishedItem from './ProfilePublishedItem'
import DetailInfoPost from "./modal/DetailInfoPost";
import PostLoaderWrapper from "./PostLoaderWrapper";
import { useLocation } from "react-router-dom";


function compare_to_array(one, two) {
  let flag = true
  for (let i = 0; i < one.length; i++) {
    if (flag) {
      if (one[i].id != two[i].id) {
        flag = false
      }
    }
  }
  return flag
}

export let context;
function ProfilePublishedWrapper({id}) {
  let [page11, setPage11] = React.useState(0)
  let {error, loading, data,refetch} = useQuery(GET_POSTS, {variables: {id: id, limit: 10, offset: page11 * 10}})
  let [posts, setPosts] = React.useState([])
  let [modal, setModal] = React.useState(false)
  let [postId, setPostId] = React.useState(false)
  let btnRef1 = React.useRef()
  context = React.createContext(refetch)
  let location = useLocation()

  React.useEffect(async() => {
    await setPosts([])
    await setPage11(0)
    refetch()
  }, [location])

  React.useEffect(() => {
    if (data) {
      btnRef1.current.style.display = 'block'
      if (data.getPosts.length === 0) {
        btnRef1.current.style.display = 'none'
      }
      setPosts(prev => {
        if (data.getPosts.length === 0) {
          return prev
        }
        return [...prev, ...data.getPosts]
      })
    }
  }, [data])

  React.useEffect(async () => {
    await setPosts([])
    await setPage11(0)
    console.log('1');
    refetch()
  }, [])

  return (
      <context.Provider value={refetch}>
        <div>
          {!loading ? 
          <>
            <div  className="ProfilePublishedElem__grid">
                {posts && posts.map(item => {
                  return <ProfilePublishedItem id={item.id} setModal={setModal} setPostId={setPostId} key={item.id} photo={item.photo_url} likes={item.likes} comments={item.comments}/>
                })}
            </div>
            <button ref={btnRef1} className='more__show' onClick={() => setPage11(page11+1)}>Показать еще</button>
            {postId && <DetailInfoPost refetch={refetch} modal={modal} id={id} setModal={setModal} postId={postId}/>}
          </> :
          <div className="ProfilePublishedElem__grid">
            <PostLoaderWrapper />
          </div>}
        </div>
      </context.Provider>
  );
}

export default React.memo(ProfilePublishedWrapper)
