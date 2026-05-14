import { Col, Row, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../redux/actions'

const BookDetail = ({ bookSelected }) => {
  const dispatch = useDispatch()

  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{bookSelected.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="book-cover"
                  src={bookSelected.imageUrl}
                  alt="book selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="fw-bold">Description:</span>&nbsp;
                {bookSelected.description}
              </p>
              <p>
                <span className="fw-bold">Price:</span>&nbsp;
                {bookSelected.price}$
              </p>
              <Button
                className="d-flex align-items-center"
                onClick={() => {
                  dispatch(addToCartAction(bookSelected))
                  // dispatcho sempre un oggetto action, questa volta però invocando una funzione
                  // un cosiddetto "action creator" che ritorna l'azione con type "ADD_TO_CART"
                }}
              >
                <span className="me-2">AGGIUNGI AL</span>
                <FaShoppingCart />
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Clicca su un libro per i dettagli</h3>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default BookDetail
