import React from "react";
import "./App.css";
import { stockData } from "/home/tanya/PhpstormProjects/untitled8/src/Data.js";

export const Stocks = () => {
    return (
        <>

                {stockData.map((data, key) => {
                    return (
                        <tr key={key}>
                            <th scope="row"> {data.id} </th>
                            <td>  {data.login}</td>
                            <td>   {data.name}</td>
                            <td>   {data.lastName}</td>
                            <td>  {data.email}</td>
                        </tr>
                    );
                })}

        </>
    );
};