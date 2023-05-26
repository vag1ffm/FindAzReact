import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Dashboard from '../pages/Dashboard/Dashboard'

const Url = () => {
  return (
    <div>
        <Routes>
            <Route path='/dashboard/*' element={<Dashboard/>}/>
            <Route path='/*' element={<App/>}/>

        </Routes>

    </div>
  )
}

export default Url