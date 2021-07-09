import React from 'react';

const Link = ({ className, href, children }) => {

    const onClick = (event) => {

        //if a click event happendes when these keys are being held down
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        
        event.preventDefault();

        window.history.pushState({},'', href);

        // will communitcate to route components that the url has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

    }

    return (

        <a
            onClick={onClick}
            className={className}
            href={href} >
            {children}
        </a>

    );

};

export default Link;