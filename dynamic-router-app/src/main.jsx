import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import 
{
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Book from './book';
import Bookshop from './bookshop';
import Publisher from './publisher';
import FavBooks from './FavBooks';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path='/' element={<Book />} >
   👉  <Route path='newbooks/:bookId' element={<FavBooks />} />
      </Route>

      <Route path='bookshop' element={<Bookshop />} />
      <Route path='publisher/:itemId' element={<Publisher />}>
    </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)