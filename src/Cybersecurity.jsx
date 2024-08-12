import React from 'react'
import Card from './Card'

const Cybersecurity = ({ cyberSecurity }) => {
    return (
        <>
             <div className='container d-flex flex-wrap text-center'>
                {cyberSecurity.map((course) => (

                    <Card course={course} key={course.id} />
                ))}
            </div>
        </>
    )
}

export default Cybersecurity