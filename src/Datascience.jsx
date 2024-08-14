import React from 'react'
import Card from './Card'

const Datascience = ({dataScience}) => {
    return (
        <>
            <div className='container d-flex flex-wrap justify-content-center text-center'>
                {dataScience.map((course) => (

                    <Card course={course} key={course.id} />
                ))}
            </div>
        </>
    )
}

export default Datascience