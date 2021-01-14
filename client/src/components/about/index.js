import React from 'react'
import styled from 'styled-components'

import Menu from '../menu'


const About = () => (
  <>
    <Menu/>
    <Wrapper>
      <h3>Introduction</h3>
      <p>Long story in short: this is a course work on topic 2D transformations. The task was to implement things such as: <br/>- Object scaling by x and y <br/>- Object moving along with x and y axes <br/>- Object rotating<br/>Moreover the program was required to have a user interface. So I decided to create a web application, that will be available for everyone. The application consists of 2 parts: backend (server) and frontend(user interface). Frontend sends JSON-formated configuration of plot-image to the backend, backend draws a plot accordingly and sends back to frontend image of object on axes, frontend displays that picture to user. P.S backend also serves statically the frontend. As a sidenote I decided to extend functionality of my program by adding: <br/>An option to choose whether to send 2 plots (first is original plot with no transformations, second is plot with transformations)<br/> An option to connect starting point of object with end point.</p>
      <h3>Stack and technologies</h3>
      <p><span id="important">Backend</span> is written completely on python 3.9 using framework - <span id="important">Flask</span> for receiving and handling incoming requests. But plots are created by <span id="important">matplotlib</span> library<br/><span id="important">Frontend</span> is written on javascript using <span id="important">react.js</span> framework, it is kind of minimalistic, but completely <span id="important">adaptive</span>.</p>
      <h3>Open-source</h3>
      <p>This project is hosted on github, <a href="https://github.com/IlyaNesterow/2d_transformer">click here to visit</a></p>
    </Wrapper>
  </>
)

const Wrapper = styled.div`
  margin-left: 10%;
  margin-top: 1rem;
  margin-bottom: 5rem;
  width: 80%;
  h3{
    margin: .5rem auto;
  }
  p{
    line-height: 1.5rem;
  }
  span#important{
    color: #393;
    font-weight: 700;
  }
  a{
    text-decoration: none;
    color: #778;
  }
  @media only screen and (max-width: 800px){
    margin-left: 5%;
    width: 90%;
  }
`

export default About