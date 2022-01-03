import React from 'react'

function Carousel({children}) {
    if(children){
        console.log(children.length);
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default Carousel
