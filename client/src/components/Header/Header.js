import React from 'react'
import profilepic from '../../Content/profile.jpg'
import './Header.css'

var title = "Matthew Rao"
var lead = "Embarking on a Journey of Digital Proficiency: Showcasing my Growth as a Full Stack Developer"
var lead1 = "Bridging the gap between technology and creativity: Full Stack Developer | PaperCut Consultant | VR Enthusiast"


function Header() {
    return (
        <>
            <div className='container-md'>
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={profilepic} class="d-block img-fluid" alt="Profile Picture" loading="lazy" width="300" height="300 " />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold text-center text-body-emphasis lh-1 mb-3 p-2" style={{backgroundColor: 'var(--green)'}}>{title}</h1>
                        <p class="">{lead1}</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Contact</button>
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header