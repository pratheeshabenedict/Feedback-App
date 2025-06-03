import React from "react";
import { NEUTRAL_STATS,GOOD_STATS,BAD_STATS,AVERAGE,TOTAL,NO_FEEDBACK_YET } from "../constants/constant";

export function Stats({good,neutral,bad}){
    const total = good+bad+neutral;
    const average = total===0 ? 0 : ((good-bad)/total).toFixed(2);

    if(total===0){
        return <p className="text-center text-gray-500">{NO_FEEDBACK_YET}</p>
    }
    return(
        <div className="bg-white p-4 rounded shadow text-center">
            <p>{GOOD_STATS}{good}</p>
            <p>{NEUTRAL_STATS}{neutral}</p>
            <p>{BAD_STATS}{bad}</p>
            <p>{TOTAL}{total}</p>
            <p>{AVERAGE}{average}</p>
        </div>
    )
}