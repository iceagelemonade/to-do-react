import React from 'react'
import '../App.css'
import ListItem from './ListItem'



const MyList = ({toDos: toDos}) => {

    let todoItems = toDos.map((item, ind) => (
      <ListItem task = {item} key = {ind} />
    ))
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
    </div>      
    )
  }

export default MyList