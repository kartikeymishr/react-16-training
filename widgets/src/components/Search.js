import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("Programming")
    const [results, setResults] = useState([])

    console.log(results);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            })

            setResults(data.query.search)
        }

        search()
    }, [term])

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html:result.snippet}}/> {/*liable to XSS attacks (cross site scripting attacks)*/}
                </div>
            </div>
        )
    })

    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )

}

export default Search