import React from 'react';
import { Card, CardImg} from "react-bootstrap";
import ReactReadMoreReadLess from "react-read-more-read-less";


const Product=({product})=>{
  return(
    <Card className="my-3 p-3 rounded">
        <CardImg src={product.image} variant='top' />
      <Card.Body>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        <Card.Text>
          Price: {product.price}
        </Card.Text>
        <Card.Text>
          Category: {product.category}
        </Card.Text>
        <Card.Text>
          Stock: {product.stock}
        </Card.Text>
        <Card.Text>
          <ReactReadMoreReadLess
            charLimit={15}
            readMoreText={" ▼"}
            readLessText={" ▲"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {product.description}
          </ReactReadMoreReadLess>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product;
