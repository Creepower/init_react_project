import { useState } from "react"

export const ScreenListener = () => {
    const [size, setSize] = useState(window.innerWidth);


    const handleResize = () => setSize(window.innerWidth)

    window.addEventListener('resize', handleResize);

    return size;

}