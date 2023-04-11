import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowBookDetails(props) {
  const [book, setBook] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`https://5000-arrpiita-librarymgmnt-d69etp00jdv.ws-us93.gitpod.io/api/books/${id}`)
    .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`https://5000-arrpiita-librarymgmnt-d69etp00jdv.ws-us93.gitpod.io/api/books/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowBookDetails_deleteClick');
      });
  };

  const BookItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th className='text-primary' scope='row'>1</th>
            <td className='text-light'>Title</td>
            <td className='text-primary'>{book.title}</td>
          </tr>
          <tr>
            <th className='text-primary' scope='row'>2</th>
            <td className='text-light'>Author</td>
            <td className='text-primary'>{book.author}</td>
          </tr>
          <tr>
            <th className='text-primary'scope='row'>3</th>
            <td className='text-light'>ISBN</td>
            <td className='text-primary'>{book.isbn}</td>
          </tr>
          <tr>
            <th className='text-primary'scope='row'>4</th>
            <td className='text-light'>Publisher</td>
            <td className='text-primary'>{book.publisher}</td>
          </tr>
          <tr>
            <th className='text-primary' scope='row'>5</th>
            <td className='text-light'>Published Date</td>
            <td className='text-primary'>{book.published_date}</td>
          </tr>
          <tr>
            <th className='text-primary'scope='row'>6</th>
            <td className='text-light'>Description</td>
            <td className='text-primary'>{book.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBookDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Book List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 t1 text-center'>ALL BOOK'S RECORD</h1>
            <p className='lead text-center'><h3><b>View Book's Info</b></h3></p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{BookItem}</div>
          <div className='col-md-4 m-auto col-md-4'>
            <button
              type='button'
              className='btn btn-outline-success btn-lg btn-block'
              onClick={() => {
                onDeleteClick(book._id);
              }}
            >
              Delete Book
            </button>
          </div>
          <div className='col-md-4 m-auto'>
            <Link
              to={`/edit-book/${book._id}`}
              className='btn btn-outline-danger btn-lg btn-block'
            >
              Edit Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBookDetails;