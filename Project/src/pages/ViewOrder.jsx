import React, { useEffect, useState } from "react";
import BookCard from "../components/Card";
import { useFirebase } from "../context/Firebase";

function ViewOrder() {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (firebase.isLoggedIn) {
      firebase
        .fetchMyBooks(firebase.user.uid)
        .then((books) => setBooks(books.docs));
    }
  }, [firebase]);

  if (!firebase.isLoggedIn) return <h1>Please Login</h1>;
  console.log(books);

  return (
    <div>
      {books.map((book) => (
        <BookCard
          link={`/books/orders/${book.id}`}
          key={book.id}
          id={book.id}
          {...book.data()}
        />
      ))}
    </div>
  );
}
 
export default ViewOrder;
