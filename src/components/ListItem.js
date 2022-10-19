import React from 'react'
import '../App.css'

// class ListItem extends Component {
//   render() {
//     return(
//         <div>
//             <li>{this.props.task}</li>
//         </div>
//     )
//   }
// }

const ListItem = ({task}) => {

      return(
          <div>
              <li>{task}</li>
          </div>
      )
    }
  

export default ListItem