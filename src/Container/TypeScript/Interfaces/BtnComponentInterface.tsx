import React from "react";

export interface BtnComponentInterface {
    btn: string;
    btnA: string,
    btnB: string,
    nameBtn: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined,

    link: string,
    type1: 'button' | 'submit' | undefined,
    type2: 'button' | 'reset' | undefined,
}
