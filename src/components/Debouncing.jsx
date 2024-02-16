import React, { useEffect, useState } from "react";
import "../styles/Debouncing.css";

const Debouncing = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const url = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

    useEffect(() => {
        const timer = setTimeout(() => {
            getSearchResults();
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchResults = async () => {
        try {
            const data  = await fetch(url + searchQuery)
            const json = await data.json();
            setSuggestions(json[1])
        }
        catch (error) {
            console.log("Error Fetching data", error);
        }
    }

    const handleSearch = async (e) => {
        let value = await e.target.value
        setSearchQuery(value)
    }

    return (
        <div>
            <input placeholder="Search..." className="search-input" type="text" value={searchQuery} onChange={handleSearch}/>
           {suggestions?.length > 0 && (<div className="suggestions">
                {suggestions?.map((suggestion) => <p key={suggestion}>{suggestion}</p>)}
            </div>)}
        </div>
    );
}

export default Debouncing;