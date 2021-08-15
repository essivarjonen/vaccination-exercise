/* eslint-disable camelcase */
import React from 'react'
import './css/order_vaccination.css'
class Order extends React.Component {

    state = {
        order: [],
        vaccination: [],
    
    }

 async componentDidMount() {
    this.fetchOrders();
    this.fetchVaccinations();
   
  }

  async fetchOrders() {
    const orderUrl = 'http://localhost:5000/orders'
    const res = await fetch(orderUrl)
    const data = await res.json()
    this.setState({ order: data })
    //console.log('Data from the database:', data)
  }

  async fetchVaccinations() {
    const vacUrl = 'http://localhost:5000/vaccinations'
    const response = await fetch(vacUrl)
    const data = await response.json()
    this.setState({ vaccination: data  })
    //console.log('Vaccination data:', vacData)
  }

  // Count different vaccines
  countVaccine() {
    const countVaccines = this.state.order.filter(ord => ord.vaccine === 'Zerpfy')
    return countVaccines.length
  }

  countAntiquaVaccine() {
    const countVaccines = this.state.order.filter(ord => ord.vaccine === 'Antiqua')
    return countVaccines.length
  }
  countSolarVaccine() {
    const countVaccines = this.state.order.filter(ord => ord.vaccine === 'SolarBuddhica')
    return countVaccines.length
  }
// Count different genders
  countMale(){
    const countMales = this.state.vaccination.filter(vac => vac.gender === 'male')
    return countMales.length
  }

  countFemale(){
    const countMales = this.state.vaccination.filter(vac => vac.gender === 'female')
    return countMales.length
  }

  countNon(){
    const countMales = this.state.vaccination.filter(vac => vac.gender === 'nonbinary')
    return countMales.length
  }

  render () {
    //count orders and vaccinations total
    const allOrders = this.state.order.map(o => o.id)
    const totalOrders = allOrders.length

    const allVaccinations = this.state.vaccination.map(v => v.id)
    const totalVaccinations = allVaccinations.length

    return (
        /*All tables */
        <div>
            <div className="table">
        <table class="table table-bordered container">
            <thead>
            <tr>
                <th class="text-center font-weight-bold">Orders</th>
                <th class="text-center font-weight-bold">Vaccinations</th>
                <th class="text-center font-weight-bold">Total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="text-center">{totalOrders}</td>
                <td class="text-center">{totalVaccinations}</td>
                <td class="text-center"> {totalOrders + totalVaccinations}</td>
            </tr>
            </tbody>
        </table>    
        </div>   
        
        <div className="vaccine-table">
          <h1 class="display-6 text-lowercase text-center">Vaccine</h1>
          <br></br>
        
          <table class="table table table-dark container">
            <thead>
              <tr>
                <th class="text-center">Zerpfy</th>
                <th class="text-center">Antiqua</th>
                <th class="text-center">SolarBuddhica</th>
                <th class="text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">{this.countVaccine()}</td>
                <td class="text-center">{this.countAntiquaVaccine()}</td>
                <td class="text-center">{this.countSolarVaccine()}</td>
                <td class="text-center">{this.countVaccine() + this.countAntiquaVaccine() + this.countSolarVaccine()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="gender-table">
          <h1 class="display-6 text-lowercase text-center">Gender</h1>
          <br></br>
          <table class="table table-success container">
            <thead>
              <tr>
                <th class="text-center">Male</th>
                <th class="text-center">Female</th>
                <th class="text-center">Nonbinary</th>
                <th class="text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td class="text-center">{this.countMale()}</td>
                <td class="text-center">{this.countFemale()}</td>
                <td class="text-center">{this.countNon()}</td>
                <td class="text-center">{this.countMale() + this.countFemale() + this.countNon()}</td>
              </tr>
            </tbody>
          </table>
        </div>
          
            </div>
      
    )
  }
}

export default Order
