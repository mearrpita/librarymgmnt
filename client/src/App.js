//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateBook from './components/CreateBook';
import HomePage from './components/HomePage';
import UpdateBookInfo from './components/UpdateBookInfo';
import ShowBookDetails from './components/ShowBookDetails';
import ShowBookList from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
         <Route exact path="/" element={ <HomePage />} />
         <Route exact path="/ShowBookList" element={ <ShowBookList />} />
         <Route path="/create-book" element={<CreateBook />} />
         <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
         <Route path="/show-book/:id" element={<ShowBookDetails />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
