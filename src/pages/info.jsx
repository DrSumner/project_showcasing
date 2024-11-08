import React, { useState } from "react";
import Contact from "./infopages/contact";
import More from "./infopages/more";


const Info = () => {

    const pages = [
        {
            id:0,
            name:"contact",
            img: null,
            description: ''
        },
        {
            id:1,
            name:"more music",
            img: null,
            description: ''
        }
    ]

    const [info, setInfo] = useState(pages[0])


    const selectPage = (e) =>{
        const currentPage = e.target.value
        pages.forEach((page) => page.name === currentPage ? setInfo(page) : null )
    }

    return (
        <div>
            <h1>
                select a page:
            </h1>
            <label for="infopages">Choose a page:</label>
            <select name="infopages" id="infopages" onChange={selectPage} >
                {pages.map((page) => (
                    <option key={page.id} value={page.name} >
                        {page.name}
                    </option>
                ))}
            </select>
            {info.name === 'contact' && <Contact info={info} />}
            {info.name === 'more music' && <More info={info} />}
        </div>
    );
};

export default Info;