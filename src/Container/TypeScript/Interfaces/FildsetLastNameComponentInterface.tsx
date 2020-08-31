import React from 'react';


export interface FildsetLastNameComponentInterface {
    name: string,
    type: 'button' | 'submit' | 'text' | undefined,
    placeholder: string,
    value: string,
    onChange: (target: React.ChangeEvent<HTMLInputElement>) => void,
    name2: string,
}
