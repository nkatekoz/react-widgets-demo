import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const Translate = () => {

    const options = [
        {
            label: 'Afrikaans',
            value: 'af'

        },
        {
            label: 'Arabic',
            value: 'ar'

        },
        {
            label: 'Hindi',
            value: 'hi'

        },
        {
            label: 'Dutch',
            value: 'nl'

        }

    ];

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (

        <div>

            <div className="ui form">

            <div className="field">

                <label>Enter Text to translate</label>

                <input
                    type="text"
                    value={text}
                    placeholder="Search"
                    onChange={(e) => setText(e.target.value)}
                />

                </div>

            </div>


            <Dropdown
                label="Select a language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />

            <hr/>

            <h3 className="ui header">Output</h3>

            <Convert
                language={language}
                text={text}
            />

        </div>


    )

};

export default Translate;