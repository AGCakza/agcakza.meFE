import { createContext, useState } from "react"

export const MainContext = createContext()

const MainContextProvider = ({
    children
}) => {

    return (
        <MainContext.Provider
            value={{

            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider