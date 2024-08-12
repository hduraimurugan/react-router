import React from 'react'

const Card = ({ course, index }) => {
    return (
        <>
            <div className='d-flex flex-wrap m-3'>
           
            
                <div className="card shadow-lg" key={index} style={{ width: '24rem' }}>

                    <img className="card-img-top img-fluid h-100 object-fit-cover" src={course.img} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-text">{course.courseName}</h4> <br />
                        <a href="#" className="btn btn-success w-100">Know More ⮞⮞ </a>
                    </div>
                </div>

               
            </div>
           
          

        </>
    )
}

export default Card