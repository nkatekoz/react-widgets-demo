import React, { useState } from 'react';

const Accordion = ({ items }) => {

    /* Array destructuring, value and function with default value for in useState
    calling facuntion will cause the vaue to change and component to re-render*/
    const [activeIndex, setActiveIndex] = useState(-1);

    const onTitleClick = (index) => {

        //console.log('Title Clicked: ', index);
        
        setActiveIndex(index === activeIndex ? -1 : index);

    };

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return (

            <React.Fragment key={item.title}>

                <div

                    onClick={() => onTitleClick(index)}

                    className={`title ${active}`}>

                    <i className="dropdown icon"></i>

                    {item.title}

                </div>

                <div className={`content ${active}`}>

                    <p>{item.content}</p>

                </div>

            </React.Fragment>

        );

    });

    return (

        <div className="ui styled accordion">

            {renderedItems}

        </div>

    )

};

export default Accordion;