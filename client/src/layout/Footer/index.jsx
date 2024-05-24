import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <footer>
      <div className='grayBorder'></div>
      <div className='footerContent'>
      <div>
        <p>Navigations</p>
        <div style={{display:'flex', gap:'50px'}}>
        <ul>
          <li>Sell online</li>
          <li>Features</li>
          <li>Shopping Cart</li>
          <li>Hardware</li>
        </ul>
        <ul>
          <li>Mobile Commerce</li>
          <li>Dropshipping</li>
          <li>Website development</li>
        </ul>
        </div>
      </div>
      <div>
        <p>Contact Info</p>
        <ul>
          <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
          <li>+2 392 3929 210</li>
          <li>emailaddress@domain.com</li>
        </ul>
        <p>Subscribe</p>
        <div>
          <input  placeholder="Email" type="text" />
          <button>SEND</button>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
