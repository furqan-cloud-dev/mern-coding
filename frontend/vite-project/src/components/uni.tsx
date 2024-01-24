import React from 'react'

export interface UniversityModel {
    name: string;
    country: string;
    webSites: string[];
}

export default function Univeristy({ name, country, webSites }: UniversityModel) {

    function displayWebsites() {
        return webSites.toString()
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>{country}</p>
            <a href={webSites[0]} target='blank'>{displayWebsites()}</a>
            <p>-------------</p>
        </div>
    )
}
