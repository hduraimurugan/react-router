import React from 'react'
import Card from './Card'


const CardList = ({ fullStacks, dataScience, cyberSecurity, career }) => {


  return (
    <>
      <div className='container d-flex flex-wrap justify-content-center text-center'>
        {fullStacks.map((course) => (
          <Card course={course} key={course.id} />
        ))}

        {dataScience.map((course) => (

          <Card course={course}  key={course.id} />
        ))}

        {cyberSecurity.map((course) => (

          <Card course={course}  key={course.id} />
        ))}

        {career.map((course) => (

          <Card course={course}  key={course.id} />
        ))}

      </div>

    </>
  )
}

export default CardList