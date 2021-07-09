import React, { useState, useEffect } from 'react';
import axios from "axios";

const Search = () => {

    console.log("...........Running this component..........");

    const [term, setTerm] = useState("programming");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, SetResults] = useState([]);

    useEffect(() => {

        console.log("useEffect(() ==> term");

        const timeOutId = setTimeout( () => {

            console.log("Calling: setDebouncedTerm");
            setDebouncedTerm(term);

        }, 1000);

        return () => {
    
            clearTimeout(timeOutId);

        }

    }, [term]);

    useEffect(() => {

        console.log("useEffect(() ==> debouncedTerm");

        const search = async () => {

            console.log("search()");

            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {

                    action: 'query',
                    format: 'json',
                    list: 'search',
                    origin: '*',
                    srsearch: debouncedTerm
                }
            });

            console.log("SetResults()");
            SetResults(data.query.search);

        };

        search();

    }, [debouncedTerm]);

    const onTermChange = (value) => {

        //console.log('onSearchChange: ', value);
        setTerm(value);

    };

    const renderedResults = results.map((result) => {

        return (

            <div key={result.pageid} className="item">

                <div className="right floated content">

                    <a className="ui button" rel="noreferrer" target="_blank" href={`http://en.wikipedia.org/?curid=${result.pageid}`}>Go to Wikipedia Page</a>
                </div>

                <div className={`content`}>

                    <div className="header">

                        {result.title}

                    </div>

                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}>

                    </span>

                </div>

            </div>

        );

    });

    return (

        <div className="ui segment">

            <div className="ui form">

                <div className="field">

                    <input
                        type="text"
                        value={term}
                        placeholder="Search"
                        onChange={(e) => onTermChange(e.target.value)}
                    />

                </div>

            </div>

            <div className="ui celled list">
                {renderedResults}
            </div>

        </div>

    )

};

export default Search;