import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Menu = () => {
  const items = [{ 
      link: '/setup',
      text: 'Try transformations'
    }, {
      link: '/about',
      text: 'About'
    }
  ]
  
  const getLinks = () => {
    return items.map((e, i) => {
      return window.location.pathname !== e.link
        ?  <Link 
            to={e.link} 
            key={i}>
            {e.text}
          </Link>
        : null
    })
  }

  return(
    <NAV>
      { getLinks() }
    </NAV>
  )
}

const NAV = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    text-decoration: none;
    margin: 2rem;
    color: #333;
  }

  @media only screen and (max-width: 500px){
    display: block;
    a{
      display: block
    }
  }
`

export default Menu