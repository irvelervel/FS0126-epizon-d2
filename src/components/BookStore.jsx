import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import BookList from './BookList'
import BookDetail from './BookDetail'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksAction } from '../redux/actions'

const BookStore = () => {
  // const [books, setBooks] = useState([]) // i libri non vengono più salvati nello stato locale
  const [bookSelected, setBookSelected] = useState(null)
  // prelevo i libri che ora vivono in Redux Store
  const books = useSelector((reduxStore) => {
    return reduxStore.shop.books
  })

  const dispatch = useDispatch()

  useEffect(() => {
    // per recuperare i libri dispatchiamo l'action creator "speciale" getBooksAction()
    dispatch(getBooksAction())
  }, [])

  const changeBook = (book) => setBookSelected(book)

  return (
    <Row className="center-row">
      <Col lg={4}>
        <BookList
          bookSelected={bookSelected}
          changeBook={changeBook}
          books={books} // ora arrivano da Redux!
        />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookStore
