import React from "react";


export interface FildsetLoginComponentInterface {
    name: string,
    type?: string,
    placeholder?: string,
    value: string,
    onChange: (target: React.ChangeEvent<HTMLInputElement>) => void,
    name2: string,
}


