import React from "react";
import { useNavigate } from "react-router-dom";
//import content from './content.js';

export default function Detail()
{
    const navigate = useNavigate();

    const goBack = () => {
       
        navigate(-1);
      };

    return(
        <>
        <button onClick={goBack}> Back </button>

        <h2> Details Page </h2>

        <p>
        "glossary": <br/>
            &nbsp;&nbsp;&nbsp; "title": "glossary"<br/><br/>
            
        "GlossDiv": <br/>
            &nbsp;&nbsp;&nbsp;"title": "S"<br/><br/>
    

        "GlossList": <br/>
            &nbsp;&nbsp;&nbsp;"GlossEntry": <br/>
                &nbsp;&nbsp;&nbsp;"ID": "SGML", <br/>
                &nbsp;&nbsp;&nbsp;"SortAs": "SGML", <br/>
                &nbsp;&nbsp;&nbsp;"GlossTerm": "Standard Generalized Markup Language", <br/>
                &nbsp;&nbsp;&nbsp;"Acronym": "SGML",<br/>
                &nbsp;&nbsp;&nbsp;"Abbrev": "ISO 8879:1986",<br/><br/>

        "GlossDef": <br/>
            &nbsp;&nbsp;&nbsp;"para": "A meta-markup language, used to create markup languages such as DocBook.",
        </p>
        
        </>
    );
}