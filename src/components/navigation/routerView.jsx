"use client"

import { Routes } from "react-router-dom"
import{Home} from "@/app/todo-list/page"

export default function RouterView() {
    return(
        <Routes>
            <Routes path='/'/>
            <Routes path='todo-list' element={<Home/>}/>
             <Routes path='hello'/>
             
        </Routes>
    )
}