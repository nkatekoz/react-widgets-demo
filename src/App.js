import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const App = () => {

    const items = [
        {
            title: 'What is React',
            content: 'React is a front end javascript framework'

        },
        {
            title: 'Why use react',
            content: 'React is a favourite js library among enginners'

        },
        {
            title: 'How do you use react',
            content: 'Use react by creating components'

        }

    ];

    const options = [
        {
            label: 'Red',
            value: 'red'

        },
        {
            label: 'Green',
            value: 'green'

        },
        {
            label: 'Blue',
            content: 'blue'

        }

    ];

    const [selected, setSelected] = useState(options[0]);

    return (

        <div>

            <Header />

            <Route path="/" >
                <Accordion items={items} />
            </Route>

            <Route path="/list" >
                <Search />
            </Route>

            <Route path="/translate" >
                <Translate />
            </Route>

            <Route path="/dropdown" >
                <Dropdown
                    label="Select a language"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>

        </div>

    );

};

export default App;