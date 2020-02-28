import React , { memo } from 'react';

const Header = ({firstname, lastname, picture}) => {
    return (
        <div className='card--header card--panel inset-shadow'>
            {
                picture && <div className='card__header--picture shadow'>
                    <img src={picture} alt={`${firstname} ${lastname}`}/>
                 </div>
            }
            <span>{firstname} {lastname}</span>
        </div>
    )
}
export default memo(Header);