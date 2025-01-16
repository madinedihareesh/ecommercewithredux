import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className='d-flex justify-content-between p-3 bg-light mb-2'>
        <div className='d-flex gap-2'> 
        <FontAwesomeIcon icon={faBagShopping} size='2x' />
        <h2>Mart</h2>
        </div>
        <div>
          <ul type='none' className='d-flex gap-4 mt-2'>
            <li>Home</li>
            <li>shop</li>
            <li>Cart</li>
            <li><FontAwesomeIcon icon={faUser} /></li>
            <li><FontAwesomeIcon icon={faShoppingCart} /><span className='position-relative bg-dark text-light p-1 rounded-circle bottom-50 text-xsm'>0</span></li>
          </ul>
        </div>
    </div>
  )
}
