import React from 'react'
import Item from './Item'

function List(props) {

	const {items , clearList , clearItem , editNewItem } = props

	return (
		<ul className = "list-group my-5" >
			<h3 className = "text-capitalize text-center" style = {{fontFamily: 'Lobster', fontStyle: 'cursive' , fontSize : '4rem'}}>
			Todo List
			</h3>
			{
				items.map(item => {
					return <Item 
						key = {item.id} 
						itemId = {item.id} 
						title = {item.title}
						clearItem = {clearItem}
						editNewItem = {editNewItem}
						/>
				})
			}
			<button 
				type = "button"
				className = "btn btn-danger btn-block text-capitalize mt-5"
				onClick = {clearList} 
				style = {{borderRadius : '10em' , fontWieght : 'bolder' , fontSize : '1.2em' }}
				>
				clear list
			</button>
		</ul>
	)
}

export default List