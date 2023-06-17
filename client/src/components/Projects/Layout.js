import React, { useState } from 'react';
import './Layout.css';
import WebProject from './Web/WebProject';
import WorkExp from './Work/WorkExp';

function Layout() {

    const [activeButton, setActiveButton] = useState('web');

    const handleToggle = (buttonId) => {
        setActiveButton(buttonId === activeButton ? null : buttonId);
    };

    const renderContent = () => {

        if (activeButton === 'web') {
            return <WebProject/>;
        } else if (activeButton === 'work') {
            return <WorkExp/>;
        }
        return null;
    }

    return (
        <>
            <div className="container-fluid text-center">
                <div className="btn-group rounded-0">
                    <div
                        id="web"
                        className={`btn-project${activeButton === 'web' ? '-active' : ''}`}
                        onClick={() => handleToggle('web')}
                        role='button'
                    >
                        <strong>Web Development</strong>
                    </div>
                    <div
                        id="work"
                        className={`btn-project${activeButton === 'work' ? '-active' : ''}`}
                        onClick={() => handleToggle('work')}
                        role='button'
                    >
                        <strong>Work Experience</strong>
                    </div>
                </div>
                <div className='container'>{renderContent()}</div>

            </div>
        </>
    );
}

export default Layout;
