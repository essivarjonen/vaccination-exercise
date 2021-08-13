/* eslint-disable camelcase */
import React from 'react'
//import axios from 'axios';


class Order extends React.Component {

    state = {
        order: [],
    }

 async componentDidMount() {
     const orderUrl = 'http://localhost:5000/orders'
     const res = await fetch(orderUrl)
     const data = await res.json()
     this.setState({order: data})
     console.log('Data from the database:', data)
    
  }


    render () {
        const allOrders = this.state.order
        return (
            <div>
                
              {
                  allOrders.map((order) => (
                      <tr key={order.id}>
                          <td>{order.responsiblePerson}</td>
                      </tr>
                  ))
              }
                </div>
          
        )
      }
}

export default Order
