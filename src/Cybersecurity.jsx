import React from 'react'
import Card from './Card'

const Cybersecurity = ({ cyberSecurity }) => {
    return (
        <>
             <div className='container d-flex flex-wrap text-center'>
                {cyberSecurity.map((course, index) => (

                    <Card course={course} index={index} />
                ))}
            </div>
        </>
    )
}

export default Cybersecurity