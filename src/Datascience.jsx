import React from 'react'
import Card from './Card'

const Datascience = ({dataScience}) => {
    return (
        <>
            <div className='container d-flex flex-wrap text-center'>
                {dataScience.map((course, index) => (

                    <Card course={course} index={index} />
                ))}
            </div>
        </>
    )
}

export default Datascience