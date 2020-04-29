import React , { useState } from 'react';
import InputTitle from './components/InputTitle'
import List from './components/List'
import 'bootstrap/dist/css/bootstrap.min.css'
import {v1 as uuid} from 'uuid'

function App() {

  const [item, setItem] = useState("")
  const [items, setItems] = useState([])
  const [id , setId] = useState(uuid())
  const [editItem , setEditItem] = useState(false)

  const handleInputChange = (e) => {
    setItem(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault()
    setEditItem(false)
    const newItem = {
      title : item,
      id : uuid(),
    }
    const newItems = [...items , newItem]
    setItems(newItems)
    setItem('')
  }

  const clearList = () => {
    setItems([])
  }

  const clearItem = (id) => {
    const newitems = items.filter(item => item.id !== id )
    setItems(newitems)
  }

  const editNewItem = (id) => {
    const oldItem = items.find(item => item.id === id)
    setEditItem(true)
    setItem(oldItem.title)
    clearItem(id)
  }

  return (
    <div className = "container">
      <div className = "row">
        <div className = "col-10 col-md-10 mt-4 mx-auto">
          <h3 className = "text-capitalize text-center" style = {{fontFamily: 'Lobster', fontStyle: 'cursive' , fontSize : '4rem'}}>
            todo input
          </h3>
          <InputTitle 
            item = {item} 
            handleInputChange = {handleInputChange}
            submitHandle = {submitHandle}
            editItem = {editItem}
            />
          <List 
            items = {items} 
            clearList = {clearList}
            clearItem = {clearItem}
            editNewItem = {editNewItem}
            />
        </div>
      </div>
    </div>  
  );
}

export default App;
