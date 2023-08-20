import React from 'react';
import AvatarLayout from '../../Layouts/AvatarLayout';
import OnlyAvatar from '../../Layouts/OnlyAvatar';
import UtilComp from '../../Layouts/UtilComp';

const TaskRender = ({ fileList, fileCount, setModalShow }) => {
    return (
        <div className="card">
            <div className=" d-flex justify-content-between">
                <AvatarLayout imgSrc='https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg' name='Client name' />
                <AvatarLayout imgSrc='https://hips.hearstapps.com/hmg-prod/images/james-cameron-1670598730.jpg?crop=0.654xw:0.436xh;0.205xw,0.0164xh&resize=1200:*' name='Sadikul Islam' />
            </div>

            <div>

                {fileList.map((file, index) => (
                    <div key={index} className='d-flex my-2'>
                        <i class="fa-solid fa-book mx-2"></i>

                        {file.name} ({file.extension})
                    </div>
                ))}
            </div>

            <div>
                <div className="d-flex justify-content-around">
                    <OnlyAvatar imgSrc='https://www.cheatsheet.com/wp-content/uploads/2021/07/matt-damon.jpg?w=1200' />
                    <OnlyAvatar imgSrc='https://www.cheatsheet.com/wp-content/uploads/2021/07/matt-damon.jpg?w=1200' />
                    <div className='mx-1' style={{ backgroundColor: 'lightgray', borderRadius: '50%', width: '30px', height: '30px' }}>
                        <div className=''><span className='shortFont'>12+</span></div>
                    </div>
                    <UtilComp icon='fa-regular fa-comments mt-2' num='15' />
                    <UtilComp icon='fa-solid fa-link mt-2' num={fileCount} condition='fileCount' setModalShow={setModalShow} />
                    <UtilComp icon='fa-solid fa-calendar mt-2' num='30-10-2023' />
                </div>
            </div>
        </div>
    );
};

export default TaskRender;