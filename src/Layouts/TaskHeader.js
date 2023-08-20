import React from 'react';

const TaskHeader = ({task, colorClass, num}) => {
    return (
        <div className='d-flex justify-content-between'>
            <div className='d-flex'>
                <div class={colorClass}></div>
                <h4>{task}</h4>
            </div>
            <h4 className='totalCount'>
                {num}
            </h4>
        </div>
    );
};

export default TaskHeader;