import React from "react";
import { useEffect, useState } from "react";


const Contact = (props) => {
    const {info} = props
  
    return (
      <div>
        <h1>Where can you find me? Links down below</h1>
        <ul>
          <li> <a href="https://www.instagram.com/tre_productions/">Instagram</a></li>
          <li> <a href="https://x.com/TreproductionsG">Twitter</a></li>
          <li> <a href="https://www.linkedin.com/in/latrell-sumner-code/">LinkedIn</a></li>
          <li> <a href="https://www.youtube.com/@treproductions9522">Youtube</a></li>
        </ul>
      </div>
    );
};

export default Contact;