import React from 'react';


export interface FildsetEmailComponentInterface {
    name2: string,
    type: 'button' | 'submit' | 'text' | undefined,
    placeholder: string,
    value: string,
    onChange: (target: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,

}
