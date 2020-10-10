import React from 'react'
import LinksList from './LinksList/LinksList';

export default function AppNav() {
    return (
        <>
            <LinksList links={[{name: 'רקע', isActive: false}, {name: 'תשובות', isActive: false}, {name:'תובנות',isActive: true}, {name: 'החלטות', isActive: false}]}></LinksList>
        </>
    )
}
