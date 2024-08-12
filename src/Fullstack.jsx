import React from 'react'
import Card from './Card'

const Fullstack = ({ fullStacks }) => {
  return (
    <>
      <div className='container d-flex flex-wrap text-center'>
        {fullStacks.map((course, index) => (

          <Card course={course} index={index} />

        ))}</div>
    </>
  )
}

export default Fullstack