import React from 'react'
import ava from '../../Messages/images/ava.jpg'

function StatusPersonPhoto({size}) {
    return (
        <div className={size == 62 ? 'status__person__wrapper big_wrapper' : 'status__person__wrapper small_wrapper'} >
            <div className={size == 62 ? 'status__person__body big_photo' : 'status__person__body small_photo'}><img className='status__person__ava' src={ava} alt="" width={size} height={size} /></div>       
        </div>
    )
}

export default StatusPersonPhoto
