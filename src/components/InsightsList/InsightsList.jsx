import React from 'react'
import InsightPreview from './InsightPreview/InsightPreview';

export default function InsightsList(props) {
    return (
        <>
         {props.insights.map(insight=> <InsightPreview  key={insight.id} insight={insight}></InsightPreview>) }
        </>
    )
}
