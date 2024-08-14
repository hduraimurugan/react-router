import React from 'react'
import Card from './Card'

const Career = ({career}) => {
    return (
        <>
             <div className='container d-flex flex-wrap justify-content-center text-center'>
                {career.map((course) => (

                    <Card course={course} key={course.id} />
                ))}
            </div>
        </>
    )
}

export default Career