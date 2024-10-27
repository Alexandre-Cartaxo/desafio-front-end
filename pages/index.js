import Box from "@/components/Box";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Home() {
  return (
    <>

    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Front-End</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicial</Nav.Link>
            <Nav.Link href="#features">Alertas</Nav.Link>
            <Nav.Link href="#pricing">Botões</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <div className="container mt-3">

      <Box titulo = "Hello World">
        <p>Primeiro parágrafo</p>
        <p>Segundo parágrafo</p>
      </Box>
      <Box titulo = "Alexandre Cartaxo">
        <p>Primeiro parágrafo</p>
        <p>Segundo parágrafo</p>
        <button>Detalhes</button>
      </Box>
      <Box titulo = "História">
        <p>Primeiro parágrafo</p>
        <p>Segundo parágrafo</p>
        <button>Prosseguir</button>
      </Box>
      
    </div>

      
    </>
  );
}
