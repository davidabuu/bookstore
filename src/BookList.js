import React, { useEffect, useState } from "react";
import { List } from "antd";

import BookCard from "./BookCard";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  const fetchBooks = async (pageNum) => {
    const fakeData = [
      {
        id: 1,
        title: "The Great Gatsby",
        writer: "F. Scott Fitzgerald",
        coverImage:
          "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 10,
        tags: ["fiction"],
      },
      {
        id: 2,
        title: "A Brief History of Time",
        writer: "Stephen Hawking",
        coverImage:
          "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 15,
        tags: ["science", "non-fiction"],
      },
    ];

    setBooks((prevBooks) => [...prevBooks, ...fakeData]);
  };

  useEffect(() => {
    fetchBooks(page);
  }, [page]);

 
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={books}
      renderItem={(book) => (
        <List.Item>
          <BookCard book={book} />
        </List.Item>
      )}
    />
  );
};

export default BookList;
