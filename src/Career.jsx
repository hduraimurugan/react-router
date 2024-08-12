import React from 'react'
import Card from './Card'

const Career = ({career}) => {
    return (
        <>
             <div className='container d-flex flex-wrap text-center'>
                {career.map((course, index) => (

                    <Card course={course} index={index} />
                ))}
            </div>
        </>
    )
}

export default Career