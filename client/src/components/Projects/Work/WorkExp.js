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
                    <div className='container text-center'>
                        <div className='row'>
                            <div className='first'>
                        <WorkCard/>
                    </div>
                        </div>
                        <div className='row'>
                            <div className='second'>
                        <WorkCard/>
                    </div>
                        </div>
                        <div className='row'>
                            <div className='first'>
                        <WorkCard/>
                    </div>
                        </div>
                    
                    
                    </div>
                </div>
            </div>

        </>
    )
}

export default WorkExp