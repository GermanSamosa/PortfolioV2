import React from 'react'
import WebCard from './WebCard/WebCard'
import pic1 from '../../../Content/carteblanche1.jpg';
import pic2 from '../../../Content/carteblanche2.jpg';
import pic3 from '../../../Content/carteblanche3.jpg';
import pic4 from '../../../Content/carteblanche4.jpg';
import pic5 from '../../../Content/carteblanche.jpg';
import pic6 from '../../../Content/moonrise.jpg'
import pic7 from '../../../Content/moonrise1.jpg'
import pic9 from '../../../Content/moonrise4.jpg'
import pic10 from '../../../Content/moonrise3.jpg'
//cart blanche



const carteBlancheTitle = 'Carte Blanche'

const carteBlanchePics = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5
]
const carteBlancheFeatures = [
    'Login Portal for Users and Admin',
    'JWT Authentification',
    'Admin Dashboard',
    'Create, Read, Update & Delete',
    'RESTful API'
]
const carteBlancheDesc = 'Developed in a team of 6 using C#. Front-end features Blazor WebAssembly Framework and the back-end was designed and developped with ASP.NetCore. We designed our PosteGreSQL database with many controllers in mind.'

const carteBlancheUrls = [

    [
        {text: 'Visit Website', link: 'https://fsd-04-carteblanche.azurewebsites.net/'}
    ],
    [
        {text: 'View Code', link: 'https://github.com/KylePiche/FSD04-Integration'}
    ]

]

//moonrise movies

const moonTitle = 'MoonRise Movies'

const moonPics = [
    pic6,
    pic7,
    pic9,
    pic10
]

const moonFeat = [
    'Login Portal for Users and Admin',
    'Stripe API',
    'Admin Dashboard',
    'Create, Read, Update & Delete',
    'RESTful API'
]

const moonDesc = 'Developed in a team of 3 using C#. We used Razor Pages for our front-end and ASP.Net for the back-end. Database was designed and implemented using Azure, we went the same route for deploying. Stripe was used for purchasing tickets.'

const moonUrls = [



    [
        {text: 'Visit Website', link: 'https://moonrisemovies.azurewebsites.net/'}
    ],
    [
        {text: 'View Code', link: 'https://github.com/mitchellfridman/MoonriseMovies'}
    ]

]

//react project

function WebProject() {
    return (
        <>
            <div className='content'>
                <div className='container-md p-4'>
                    <div className='title'>
                        <h1><strong> <small>Stepping Up the Game:<br /></small>Spotlighting my Projects</strong></h1>
                    </div>
                    <div className='container text-center'>
                        <div className='pt-4'>
                            <WebCard
                                title={carteBlancheTitle}
                                features={carteBlancheFeatures}
                                desc={carteBlancheDesc}
                                imageUrls={carteBlanchePics}
                                webUrls={carteBlancheUrls}
                            />
                            <WebCard
                                title={moonTitle}
                                features={moonFeat}
                                desc={moonDesc}
                                imageUrls={moonPics}
                                webUrls={moonUrls}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebProject