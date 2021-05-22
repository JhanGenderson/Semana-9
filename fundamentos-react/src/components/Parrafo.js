import React from 'react'

export default function parrafo({texto, banda}) {
    // console.log(props)
    return (
        <div>
            <p>
                {texto}
                <br />
                <small>{banda}</small>
            </p>
        </div>
    )
}
