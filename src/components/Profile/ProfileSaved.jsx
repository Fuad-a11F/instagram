import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_FAVOURITES } from '../../GraphQl/Queries'
import ProfilePublishedItem from './ProfilePublishedItem'
import DetailInfoPost from "./modal/DetailInfoPost";

function ProfileSaved({id}) {
    let [page, setPage] = React.useState(0)
    let {error, loading, data, refetch} = useQuery(GET_FAVOURITES, {variables: {token: localStorage.getItem('token'), limit: 10, offset: page * 10}})
    let [savedPost, setSavedPost] = React.useState([])
    let btnRef = React.useRef()
    let [modal, setModal] = React.useState(false)
    let [postId, setPostId] = React.useState(false)

    React.useEffect(() => {
        if (data) {
            // if (data.getFavourites.length === 0) {
            //     btnRef.current.style.display = 'none'
            //     return 
            // }
            setSavedPost([...savedPost , ...data.getFavourites])
        }
        console.log(data);
    }, [data])
    
    React.useEffect(() => {
        refetch()
    }, [])
    return (
        <>
        <div className='ProfilePublishedElem__grid'>
                {savedPost.length != 0 && (
                    <>
                        {savedPost.map(item => {
                            return <ProfilePublishedItem id={item.id} key={item.id} photo={item.photo_url} setModal={setModal} setPostId={setPostId} likes={item.likes} comments={item.comments.length}/>
                        })}
                    </>
                )}            
        </div>
        {postId && <DetailInfoPost  modal={modal} id={id} setModal={setModal} postId={postId}/>}

        <button ref={btnRef} className='more__show' onClick={() => setPage(page+1)}>Показать еще</button>
        </>
    )
}

export default ProfileSaved
