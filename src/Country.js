import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Country = props => {
    const [countryFromUrl, setCountryFromUrl] = useState("");
    const [topLevelDomain, setTopLevelDomain] = useState("");
    const [capital, setCapital] = useState("");
    const [flag, setFlag] = useState("");
    const [population, setPopulation] = useState(0);
    const [native, setNative] = useState(0);
    let {name} = useParams();
    useEffect(() => {
        setCountryFromUrl(name)
        // console.log(name)
        }, [name]);
    useEffect(() => {
        // axios.get(`http://api.countrylayer.com/v2/name/`+countryFromUrl+`?access_key=f95dc4c9995eaf0e3bdffe08843527b0`)
        axios.get(`https://restcountries.com/v2/name/`+countryFromUrl)
        .then(res => {
            const mydata = res.data[0]
            console.log(mydata)

            setTopLevelDomain(mydata['topLevelDomain'][0])
            setCapital(mydata['capital'])
            setPopulation(mydata['population'])
            setFlag(mydata['flag'])
            setNative(mydata['nativeName'])
        })
    }, [countryFromUrl]);

    return (
        <div>
            <h1>{countryFromUrl} ({native})</h1>
            <img src={flag} width="250" height="150"/>
            <br />
            <br />
            Domaine web : <b>{topLevelDomain}</b>
            <br />
            Capitale : <b>{capital}</b>
            <br />
            Population : <b>{parseInt(population).toLocaleString()}</b>
            <br />
        </div>
    );
};
export default Country;