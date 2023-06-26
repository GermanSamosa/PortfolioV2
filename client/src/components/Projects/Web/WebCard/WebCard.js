import React from 'react'
import './WebCard.css'
import pic1 from '../../../../Content/pic01.jpg';
import pic2 from '../../../../Content/pic02.jpg';
import pic3 from '../../../../Content/pic03.jpg';

function WebCard() {
    return (
        <>
            <div className='container-fluid p-4'>
                <div className='background'>
                    <div className='row mt-4'>
                        <h4><strong>Carte Blanche</strong></h4>
                    </div>
                    <div className='gallery'>
                        <article className='webCard'>
                            <figure>
                                <img
                                    src={pic1}
                                    alt='preview'
                                    title='preview'
                                />

                            </figure>
                        </article>
                        <article className='webCard'>
                            <figure>
                                <img
                                    src={pic2}
                                    alt='preview'
                                    title='preview'
                                />

                            </figure>
                        </article>

                        <article className='webCard'>
                            <figure>
                                <img
                                    src={pic3}
                                    alt='preview'
                                    title='preview'
                                />

                            </figure>
                        </article>
                        <article className='webCard'>
                            <figure>
                                <img
                                    src={pic3}
                                    alt='preview'
                                    title='preview'
                                />

                            </figure>
                        </article>
                        <article className='webCard'>
                            <figure>
                                <img
                                    src={pic3}
                                    alt='preview'
                                    title='preview'
                                />

                            </figure>
                        </article>
                    </div>
                    <div className='row pt-3 w-75'>
                        <div className='col'>
                            <p><strong>Features</strong></p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Login Portal</strong> for Users and Admin</li>
                                <li className="list-group-item"><strong>Admin dashboard</strong> for managing users and events</li>
                                <li className="list-group-item"><strong>REST</strong>ful API</li>
                            </ul>
                        </div>
                        <div className='col w-100'>
                            <p><strong>Technologies</strong></p>
                            <p>The Project was developed in a team of 6 using C#. We designed our database with PostGreSQL and used ASP.NetCore to develope a MVC RESTful API. For our front-end we used Blazor WebAssembly Framework. Authentication was done using JWT tokens. We originally deployed the project using Azure. Many other dependencies and technologies were used, I highly recommend checking out the github page for this project.</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default WebCard