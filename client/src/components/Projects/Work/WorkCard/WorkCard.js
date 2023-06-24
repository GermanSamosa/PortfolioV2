import React from 'react'
import './WorkCard.css'

function WorkCard({ company, jobDescription, industry, date }) {
    return (
        <>
            <div className="job">
                <div className="card-body">
                    <h5 className="h3"><strong>{company}</strong></h5>
                    <h6 className="card-subtitle mb-2 text-muted">{industry}</h6>
                    <p className="card-text">{jobDescription}</p>
                    <p className="card-text"><small>{date}</small></p>
                </div>
            </div>
        </>
    )
}

export default WorkCard