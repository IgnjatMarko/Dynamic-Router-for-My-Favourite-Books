import { Link, Outlet } from 'react-router-dom';
import books from './books.js';

export default function Books() {

    return (
        <>
          <div className='m-4'>
            <p className="text-3xl">{`List of my favourite books`}</p>
          </div>
    
         <section className='flex'>
            <div className='m-4'> 
              {
                books && books.map((book)=> (
                  <>
                  <ul>
                    <li>
                      <Link to={`newbooks/${book.id}`} className='text-blue-600 underline'>{book.title}</Link>
                    </li>
                  </ul>
                </>
                )) 
              }
            </div>
            <div className='w-[70%]'>
             <Outlet />
            </div>
          </section>
        </>
      )
}