import { Alert, Container } from 'react-bootstrap'

function Welcome() {
  return (
    <Container>
      <h1 className="text-center">📚 Benvenuto su EpiBOOKS</h1>
      
      <Alert variant="info" className="text-center mt-3">
        Questa è una libreria virtuale per appassionati di lettura!
      </Alert>
    </Container>
  )
}

export default Welcome;