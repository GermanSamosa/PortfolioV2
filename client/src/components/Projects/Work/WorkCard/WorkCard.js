import React from 'react'
import './WorkCard.css'

function WorkCard({ position, company, desc, date }) {
    return (
        <>
            <div className='job'>
                <div className='row'>
                    <div className='col align-self-center'>
                        <h4><strong>Full Stack Developer<br />& Solutions Consultant</strong></h4>
                    </div>
                </div>

                <div className='row'>
                    <div className='col align-self-center'>Delcom</div>
                    <div className='col align-self-center'><small>Website for Printing Business Solutions</small></div>
                    <div className='row justify-content-center sm pt-2'><small>May 1st, 2023</small></div>
                </div>

            </div>
        </>
    )
}

export default WorkCard