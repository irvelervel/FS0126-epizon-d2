import { Button, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
// importo l'hook useSelector al fine di poter recuperare un valore dal Redux Store
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setUsernameAction } from '../redux/actions'

// REGOLE DEGLI HOOKS
// 1) DENTRO I COMPONENTI A FUNZIONE
// 2) PRIMA DEL RETURN, FUORI DA CONDIZIONI, CICLI E MIE FUNZIONI

const CartIndicator = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const carrelloLength = useSelector((storeRedux) => {
    return storeRedux.cart.content.length
  })
  // devo da questo componente prendere anche un'ALTRA proprietà dal Redux Store, user.name
  const username = useSelector((storeRedux) => {
    return storeRedux.user.name // stringa vuota all'inizio, stringa piena una volta loggato
  })
  const [nameValue, setNameValue] = useState('') // si riempie al riempimento dell'input di login

  return (
    <div className="d-flex justify-content-end my-4">
      {username ? (
        <div className="d-flex align-items-center">
          <span className="me-2 fw-bold">Benvenuto, {username}!</span>
          <Button
            onClick={() => navigate('/cart')}
            className="d-flex align-items-center"
          >
            <FaShoppingCart />
            <span className="ms-2">{carrelloLength}</span>
            {/* invece che uno 0 fisso, io vorrei inserire la lunghezza dell'array content
        all'interno della "slice" chiamata cart nel Redux Store */}
          </Button>
        </div>
      ) : (
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            // dispatcho un'azione che invia al reducer come payload il contenuto di "nameValue"
            dispatch(setUsernameAction(nameValue))
          }}
        >
          <InputGroup>
            <Form.Control
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder="Fai qui il login"
            />
            <Button type="submit">LOGIN</Button>
          </InputGroup>
        </Form>
      )}
    </div>
  )
}

export default CartIndicator
