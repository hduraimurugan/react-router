import React from 'react'

const Card = ({ course }) => {
    return (
        <>
            <li className='d-flex p-3 ' key={course.id} >
                <div className="card shadow-lg" style={{ width: '20rem' }}>

                    <img className="card-img-top img-fluid h-100 object-fit-cover" src={course.img} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-text">{course.courseName}</h4> <br />
                        <a href="#" className="btn btn-success w-100">Know More ⮞⮞ </a>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Card