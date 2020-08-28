import {generateEmail, generateId, generateName} from "/home/tanya/PhpstormProjects/untitled8/src/Functions/RandomFunctions.tsx";

export const generateData = (amountOfRows: number = 100) => {

    const result: Array <any> = [];

    for (let i = 0; i < amountOfRows; i++) {
        result.push({
            id: generateId(),
            login: generateName(),
            username: generateName(),
            surname: generateName(),
            email: generateEmail(),
        })
    }
    return result;
}