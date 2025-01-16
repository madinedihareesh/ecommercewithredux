import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar} from '@fortawesome/free-solid-svg-icons';
import { faCreditCard} from '@fortawesome/free-solid-svg-icons';
import {faShieldHalved} from '@fortawesome/free-solid-svg-icons';
import {faHeadphones} from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  return (
    <div>
        <div className='d-flex gap-2 justify-content-center'>
            <div style={{backgroundColor:'orange', width:280,height:200,alignContent:'center'}}>
                <FontAwesomeIcon icon={faCar} size='2x' className='bg-light p-2 rounded-circle'/>
                <h6>Free Shipping</h6>
                <p>Lorem ipsum dolor sit, amet</p>
            </div>
            <div style={{backgroundColor:'aqua', width:280,height:200,alignContent:'center'}}>
                <FontAwesomeIcon icon={faCreditCard} size='2x' className='bg-light p-2 rounded-circle'/>
                <h6>Safe Payments</h6>
                <p>Lorem ipsum dolor sit, amet</p>
            </div>
            <div style={{backgroundColor:'lightgreen', width:280,height:200,alignContent:'center'}}>
                <FontAwesomeIcon icon={faShieldHalved} size='2x'className='bg-light p-2 rounded-circle' />
                <h6>Secure Payments</h6>
                <p>Lorem ipsum dolor sit, amet</p>  
            </div>
            <div style={{backgroundColor:'skyblue', width:280,height:200,alignContent:'center'}}>
                <FontAwesomeIcon icon={faHeadphones} size='2x' className='bg-light p-2 rounded-circle'/>
                <h6>Back Guaranteee</h6>
                <p>Lorem ipsum dolor sit, amet</p> 
            </div>
        </div>
    </div>
  )
}
