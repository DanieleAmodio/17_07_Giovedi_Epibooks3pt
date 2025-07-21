import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';

function SingleBook({book}){
  const [selected,setSelected]=useState(false)


    return (
     <>
      
     <Col  sm={6} md={6} lg={4} xl={3} xxl={3} className='my-4'>
             <Card className='h-100'>
             <Card.Img className={selected && 'border  border-3 border-danger'} onClick={()=> setSelected(!selected)} variant="top" src={book.img} style={{height:150}}/>
             <Card.Body>
             <Card.Title >{book.title}</Card.Title>
             <Card.Text>
             Price: {book.price}
             </Card.Text>
              {selected && <CommentArea asin={book.asin}/>}
             </Card.Body>
             </Card>
           </Col>
          
           </>
    )
  }
    
    
export default SingleBook