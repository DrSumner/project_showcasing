import React, { useState } from "react";
import Compression from "./infopages/compression";
import Eq from "./infopages/eq";


const Info = () => {

    const pages = [
        {
            id:0,
            name:"compression",
            img: null,
            description: ''
        },
        {
            id:1,
            name:"eq",
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
            {info.name === 'compression' && <Compression info={info} />}
            {info.name === 'eq' && <Eq info={info} />}
        </div>
    );
};

export default Info;