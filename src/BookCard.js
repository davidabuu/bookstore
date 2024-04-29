import React from 'react';
import { Card, Tag } from 'antd';

const BookCard = ({ book }) => {
    return (
        <Card
            hoverable
            style={{ width: 240, margin: '16px' }}
            cover={<img alt={book.title} src={book.coverImage} />}
        >
            <Card.Meta title={book.title} description={`Writer: ${book.writer}`} />
            <p>Price: {book.price} points</p>
            <div>
                {book.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </div>
        </Card>
    );
};

export default BookCard;
