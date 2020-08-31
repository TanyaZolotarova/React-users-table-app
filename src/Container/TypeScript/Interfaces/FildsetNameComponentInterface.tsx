import React from "react";


export interface FildsetNameComponentInterface {
    name: string,
    name2: string,
    type: 'button' | 'text' | undefined,
    placeholder: string,
    value: string,
    onChange: (target: React.ChangeEvent<HTMLInputElement>) => void,

}
