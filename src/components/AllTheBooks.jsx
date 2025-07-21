import { useState } from 'react'
import SingleBook from './SingleBook'
import fantasy from '../books/fantasy.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'
import history from '../books/history.json'
import Form from 'react-bootstrap/Form';
import { Alert, Container, Row } from 'react-bootstrap'

const booksData = {
  Fantasy: fantasy,
  Horror: horror,
  Romance: romance,
  SciFi:scifi,
  History: history
}

function AllTheBooks() {
  const [categoria, setCategoria] = useState('Fantasy')
  const [searchValue,setSearchValue]= useState('')
   const [filteredBook,setFilteredBook]= useState(booksData[categoria])
  const handleSearch= (e)=> {
  setSearchValue(e.target.value)
  const books=booksData[categoria].filter((book)=> book.title.toLowerCase().includes(e.target.value.toLowerCase()) )
  setFilteredBook(books)
  }
  const handleCategoria =(e)=>{
    setSearchValue('')
   setCategoria(e.target.value) 
   setFilteredBook(booksData[e.target.value])
   
  }
  
  return (
    <Container>
        <select className="form-select mb-3" value={categoria} onChange={handleCategoria}>
          {Object.keys(booksData).map(cat => {
          console.log(cat)
          return <option key={cat}>{cat}</option>
        })}
        
       </select>

    


    {/* <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Ricerca</Form.Label> */}
        <Form.Control className='my-4' type="text" placeholder="Ricerca il libro " onChange={handleSearch} value={searchValue} />
      {/* </Form.Group>
    </Form> */}
    {searchValue.trim() !== "" && filteredBook.length === 0 && (
        <Alert variant="warning" className="text-center fw-bold">
          📚 Nessun libro trovato con il titolo: "<span className="text-danger">{searchValue}</span>"
        </Alert>
      )} 
    

    

      <Row>
         {filteredBook.map(book =>
          <SingleBook key={book.asin} book={book} />
          )}
      </Row>
      </Container>
  )
}



export default AllTheBooks