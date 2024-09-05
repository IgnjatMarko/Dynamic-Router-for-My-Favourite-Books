import { useParams } from 'react-router-dom';
import book from './books';

export default function FavBooks() {
  const {bookId} =  useParams() 

 const newFavBook = book.find((book) => book.id === bookId)

  if(!newFavBook){
    return <p>{`This page doesn't contain fav Books`}</p>
  }
  return (
    <>
      <main>
          {newFavBook && (
            <>
              <main>
                <p>{`Title: ${newFavBook.title}`}</p>
                <p>{`By: ${newFavBook.author}`}</p>
                <p>{`Year: ${newFavBook.year}`}</p>
                <p>{`Description: ${newFavBook.description}`}</p>
              </main>
            </>
          )}
      </main>
    </>
  )
}