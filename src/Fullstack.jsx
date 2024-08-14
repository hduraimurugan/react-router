import React from 'react'
import Card from './Card'

const Fullstack = ({ fullStacks }) => {
  return (
    <>
      <div className='container d-flex flex-wrap justify-content-center text-center'>
        {fullStacks.map((course) => (

          <Card course={course} key={course.id} />

        ))}</div>
    </>
  )
}

export default Fullstack