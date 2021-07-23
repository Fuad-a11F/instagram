import React from 'react'
import none_icon from '../../../none.jpg'

function PersonPhoto({size, image}) {
    return (
        <div className={size == 62 ? ' big_wrapper' : ' small_wrapper'} >
            <div className={size == 62 ? ' big_photo' : ' small_photo'}><img className='status__person__ava' src={image ? image : none_icon} alt="" width={size} height={size} /></div>       
        </div>
    )
}


export default PersonPhoto
