import React,{useState} from 'react';



const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");//ciudad por Default


    return(
        <div className={"search-params"}>
            <h1>{location}</h1>
            <form action="">
                <label htmlFor="location">
                    Location
                    <input id={"location"} value={location} placeholder={"Location"} onChange={event => setLocation(event.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default SearchParams;