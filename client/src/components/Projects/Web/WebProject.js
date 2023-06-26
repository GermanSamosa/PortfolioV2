import React from 'react'
import WebCard from './WebCard/WebCard'

function WebProject() {
    return (
        <>
            <div className='content'>
                <div className='container-md p-4'>
                    <div className='title'>
                    <h1><strong> <small>Stepping Up the Game:<br /></small>Spotlighting my Projects</strong></h1>
                    </div>
                    <div className='container-fluid text-center'>
                        <WebCard/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebProject