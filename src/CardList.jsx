import React from 'react'
import Card from './Card'


const CardList = ({ fullStacks, dataScience, cyberSecurity, career }) => {


  return (
    <>
      <div className='container d-flex flex-wrap text-center'>
        {fullStacks.map((course, index) => (
          <Card course={course} index={index} />
        ))}

        {dataScience.map((course, index) => (

          <Card course={course} index={index} />
        ))}

        {cyberSecurity.map((course, index) => (

          <Card course={course} index={index} />
        ))}

        {career.map((course, index) => (

          <Card course={course} index={index} />
        ))}

      </div>

    </>
  )
}

export default CardList