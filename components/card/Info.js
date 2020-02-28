import React , { memo } from 'react'

const Info = ({weight, age, height}) => {
    return (
        <div className='card--info card--panel inset-shadow'>
            <ul>
                {weight && <li id="weight">weight : {weight/1000} kg</li>}
                {height && <li id="height"> height : {height} cm</li>}
                {age && <li id="age">age : {age} yo</li>}
            </ul>
        </div>
    )
}

export default memo(Info);