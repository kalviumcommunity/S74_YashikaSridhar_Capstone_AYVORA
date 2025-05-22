import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.add_icon} alt="Add" />
          <p>Add Items</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="List" />
          <p>List Item</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="Orders" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
