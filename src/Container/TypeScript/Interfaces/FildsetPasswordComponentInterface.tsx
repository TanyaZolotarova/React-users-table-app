import React from "react";


export interface FildsetPasswordComponentInterface {
    name: string,
    type: 'button' | 'submit' | 'password' | undefined,
    value: string,
    onChange: (target: React.ChangeEvent<HTMLInputElement>) => void,
    name2: string,

}
