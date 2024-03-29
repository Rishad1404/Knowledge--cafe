import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {

const [bookmarks,setBookmarks]=useState([]);
const [readingTime,setReadingTime]=useState(0)

const handleAddToBookmark=blog=>{
  const newBookMarks=[...bookmarks,blog];
  setBookmarks(newBookMarks)
}

const handleMarkAsRead=(id,time)=>{
  const newReadingTime=readingTime+time;
  setReadingTime(newReadingTime)

  // Remove the read blog from Bookmark
  const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id!==id)
  setBookmarks(remainingBookmarks);
}

  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
