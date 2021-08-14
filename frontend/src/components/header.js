import React from 'react'
import img from './injection-1712511_640.png'
class Header extends React.Component {
  render () {
    return (
      <div>
        <h1 className="text-center display-3">
          Vaccination-exercise
          <img src={img} width='100' alt='' />
        </h1>
      </div>
    )
  }
}

export default Header