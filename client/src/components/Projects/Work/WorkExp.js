import React from 'react'
import './WorkExp.css'
import WorkCard from './WorkCard/WorkCard'

function WorkExp() {
    return (
        <>
            <div className='page'>
                <div className='container-md p-4'>
                    <div className='content'>
                        <h1><strong><small>Unlocking New Horizons:</small><br /> My Transition from Sales to Passion</strong></h1>
                    </div>
                    <div className='container-fluid text-center'>

                        <WorkCard
                            company="Delcom"
                            jobTitle="Technology and Solutions Consultant"
                            jobDescription="Collaborated with cross-functional teams, including business owners and project managers, to deliver high-quality solutions and customized configurations tailored to meet clients' specific needs."
                            industry="Business Printing Solutions"
                            date="May 2023 - Present"
                        />


                        <WorkCard
                            company="CERASP"
                            jobTitle="XR Intern"
                            industry="Pharmaceuticals"
                            jobDescription="Worked collaboratively as a team member using
                        Agile methodology
                        to enhance the functionality of a
                        VR
                        bio-safety cabinet."
                            date="January 2023 - March 2023"
                        />

                        <WorkCard
                            company="Telus"
                            jobTitle="Accound Manager"
                            industry="Mobility & Security"
                            jobDescription="Generated leads and built relationships with potential customers through cold calling and email campaigns."
                            date="March 2021 - Oct 2021"
                            secondJobTitle="Sales Consultant"
                            secondJobDescription="Built and maintained strong relationships with clients, providing exceptional customer service and support."
                            secondDate="May 2016 - March 2021"
                        />



                    </div>
                </div>
            </div>

        </>
    )
}

export default WorkExp