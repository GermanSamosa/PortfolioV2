import React from 'react'
import './WorkCard.css'

function WorkCard({ company, jobDescription, industry, date, jobTitle, secondJobTitle, secondJobDescription, secondDate }) {
    return (
        <>
            <div className="job">
                <div className="card-body text-high-contrast">
                    <h5 className="h3"><strong>{company}</strong></h5>
                    <h6 className="card-subtitle mb-2 text-muted">{industry}</h6>
                    <p className="card-text"><big>{jobTitle}</big></p>
                    <p className="card-text"><small>{jobDescription}</small></p>
                    <p className="card-text"><small>{date}</small></p>
                    <p className="card-text"><big>{secondJobTitle}</big></p>
                    <p className="card-text"><small>{secondJobDescription}</small></p>
                    <p className="card-text"><small>{secondDate}</small></p>
                </div>
            </div>
        </>
    )
}

export default WorkCard