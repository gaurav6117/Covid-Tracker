import React, { Suspense } from 'react'
import { Container, Navbar } from 'react-bootstrap'
const Home = React.lazy(() => import("./components/Home"))
export default function App() {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand style={{ fontSize: "25px", color: "BLACK", fontWeight: "bold", fontFamily: "Bodoni MT" }} href="#">COVID TRACKER</Navbar.Brand>
        </Container>
      </Navbar>
      <Suspense fallback={<div>...loading</div>}>
        <Home />
      </Suspense>
    </>
  )
}
