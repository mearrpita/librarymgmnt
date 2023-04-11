import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const BookCard = (props) => {
  const book = props.book



  return (
    <div className='card-container'>
      <img
        src='https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/220/922/datas/original.jpeg'
        height={200} alt=''
      />
      <div className='desc'>
        <h2>
          <Link className='text' to={ `/show-book/${book._id}` }>
            {book.title}  
          </Link> 
        </h2>
        <h3 className="text">{book.author}</h3>
        <p className="text">{book.description}</p>
      </div>
    </div>  
  )
}

export default BookCard