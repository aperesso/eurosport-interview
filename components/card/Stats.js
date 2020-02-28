import React,  { memo } from 'react';

const Stats = ({rank, wins, loss}) => {
    return (
        <div className='card--stats card--panel inset-shadow'>
            <ul>
                {rank && <li>rank : {rank} </li>}
                {wins && <li>wins : {wins} </li>}
                {loss && <li>loss : {loss} </li>}
            </ul>
        </div>
    )
}

export default memo(Stats);