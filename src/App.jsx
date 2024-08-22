import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Newpost from './components/Newpost';
import PostContextProvider from './store/list-context';

function App() {
let [state,setState]=useState("Home");

  return (
    <PostContextProvider>
    <div className='container1'>
      <Sidebar setState={setState} state={state}></Sidebar>
      <div className='content'>
      <Header></Header>
     {state=="Home" &&(<Feed></Feed>)}
     {state=="Createpost" &&(<Newpost></Newpost>)}
      <Footer></Footer>
      </div>
    </div>
    </PostContextProvider>
  )
}

export default App
