import React from 'react';

const OnlyAvatar = ({imgSrc}) => {
    return (
        <div class="avatar mx-1">
            <img src={imgSrc} alt="" />
        </div>
    );
};

export default OnlyAvatar;