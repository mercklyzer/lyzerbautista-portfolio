import { useEffect, useState } from "react"

const getWindowDimensions = () => {
    const {innerWidth:width, innerHight:height} = window
    return {width, height}
}

const useWindowDimensions = props => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions)
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}

export default useWindowDimensions

