import React from "react"
import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"

function App() {
    return (
        <>
            <Sidebar />
            <Header />
            <Content />
        </>
    )
}

export default App
