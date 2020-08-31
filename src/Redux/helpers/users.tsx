import {generateEmail, generateId, generateName} from "/home/tanya/PhpstormProjects/untitled8/src/Functions/RandomFunctions";
import IInputs from "/home/tanya/PhpstormProjects/untitled8/src/Container/TypeScript/Interfaces/IInputs_interface";

export const generateData = (amountOfRows: number = 100) => {

    const result: Array <IInputs> = [];

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
