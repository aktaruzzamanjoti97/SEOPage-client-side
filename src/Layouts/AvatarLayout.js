import React from 'react';

const AvatarLayout = ({ imgSrc, name }) => {
    return (
        <div className='d-flex'>
            <div class="avatar">
                <img src={imgSrc} alt="" />
            </div>
            <h6 className='my-1 mx-1'>{name}</h6>
        </div>
    );
};

export default AvatarLayout;