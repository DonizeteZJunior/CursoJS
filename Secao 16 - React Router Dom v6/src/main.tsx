import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/global.css'

import { Home } from './components/Home'
import { Sobre } from './components/Sobre'
import { Menu } from './components/Menu'
import { Posts } from './components/Posts'
import { Redirect } from './components/Redirect'
import { NaoEncontrado } from './components/NaoEncontrado'
import { Post } from './components/Post'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sobre' element={<Sobre/>} />
        {/* <Route path='/posts/:id' element={<Posts/>} /> */}
        <Route path='/posts' element={<Posts/>} >
          <Route path=':id' element={<Post />} />
        </Route>
        <Route path='/posts' element={<Posts/>} />
        <Route path='/redirect' element={<Redirect/>} />
        <Route path='*' element={<NaoEncontrado/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
