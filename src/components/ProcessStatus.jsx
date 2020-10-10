import React from 'react'
import OpenProcess from '../assets/svgs/open.svg';

export default function ProcessStatus() {
    return (
        <div className="process-status-container container flex justify-center align-center">
            <img alt="open-process-icon" src={OpenProcess}></img>
            <div>התהליך עדיין פתוח לתשובות, המשתתפים יוכלו לראות את התובנות הסופיות רק לאחר שיאושרו על ידי אחד ממנהלי התהליך.</div>
        </div>
    )
}
