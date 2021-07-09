import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false);
    //const ref = useRef(false);
    const ref = useRef();

    useEffect(() => {
        
        const onBodyClick = (event) => {

            //console.log(event.target);

            // check to see if the element that was clicked on is inside of our component
            // one dom element is contained inside another
            if (ref.current &&  ref.current.contains(event.target)) {

                return;
                
            }

            // close the dropdown
            setOpen(false);

        }

        document.body.addEventListener('click', onBodyClick);

        return () => {

            document.body.removeEventListener('click', onBodyClick);

        };

    }, []);

    const renderedOptions = options.map((option) => {

        if (option.value === selected.value) {
            return null;
        }

        return (

            <div
                onClick={() => {
                    //console.log('Item Click');
                    onSelectedChange(option)
                }}
                key={option.value}
                className="item">

                {option.label}

            </div>

        );

    });

    //console.log('ref.current: ' + ref.current);

    return (

        <div ref={ref} className="ui form">

            <div className="field">

                <label className="label"> {label}</label>

                <div
                    onClick={() => {
                        //console.log('Dropdown Click');
                        setOpen(!open)
                    }}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>

                <i className="dropdown icon"></i>

                <div className="text">Selected: {selected.label}</div>

                <div className={`menu ${open ? 'visible transition' : ''}`}>

                    {renderedOptions}

                </div>

            </div>

        </div>

        </div >

    )

};

export default Dropdown;