import {generateEmail, generateId, generateName} from "/home/tanya/PhpstormProjects/untitled8/src/SitePageComponents/RandomFunctions.js";

export const generateData = (amountOfRows = 100) => {
    // const amountOfRows = 100;
    const result = [];

    for (let i = 0; i < amountOfRows; i++) {
        result.push({
            id: generateId(),
            name1: generateName(),
            name2: generateName(),
            name3: generateName(),
            email: generateEmail(),
        })
    }

    return result;
}