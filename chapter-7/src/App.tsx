import './App.css'
import Header from './components/Header/Header'
import Archive from './components/Archive/Archive';
import Post from './components/PostDetail/Post'
import ContactForm from './components/Contact/ContactForm';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Archive />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </>
  )
}

export default App
