import './Botao.css'

import React from 'react'

interface BotaoProps{
    children:string
    aoEnviar?:()=>void
}

export function Botao ({children,aoEnviar}:BotaoProps, ){
    return(
        <div className='botao'>
            <button onClick={aoEnviar}>{children}</button>
        </div>
    )
}

