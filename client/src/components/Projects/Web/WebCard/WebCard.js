import React from 'react'
import './WebCard.css'

function WebCard({ title, features, desc, imageUrls, webUrls }) {
    return (
        <>
            <div className='row'>
                <div className='container'>
                    <div className='background'>
                        <div className='row mt-4'>
                            <h4><strong>{title}</strong></h4>
                        </div>
                        <div className='gallery'>

                            {imageUrls.map((image, index) => (
                                <article className='webCard'>
                                    <figure>
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${title} - Image ${index}`}
                                            title='Preview of Project'
                                        />

                                    </figure>
                                </article>
                            ))}
                        </div>
                        <div className='row pt-3 w-75'>
                            <div className='col'>
                                <p><strong>Features</strong></p>
                                <ul className="list-group list-group-flush">
                                    {features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="list-group-item">{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='col w-100'>
                                <p><strong>Technologies</strong></p>
                                <p className='p-2'>{desc}</p>
                            </div>
                        </div>
                        <div className='row pb-4'>

                            {webUrls.map((url, urlIndex) => (
                                <div key={urlIndex}>
                                    {url.map((button, linkIndex) => (
                                        <a
                                            key={linkIndex}
                                            href={button.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <button className='visit-button'><strong>{button.text}</strong></button>
                                        </a>
                                    ))}
                                </div>
                            ))}

                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default WebCard