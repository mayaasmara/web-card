import React from 'react'
import styled from '@emotion/styled'

import SocialLinks from './social-links.js'

const Card = styled.div`
  @media (max-width: 650px) {
    border-radius: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  border-radius: 5px;
  background-color: #ffffff;
  margin: 50px;
  max-width: 600px;
`

const Photo = styled.div`
  border-radius: 5px 5px 0 0;
  background: hsla(270, 40%, 40%, 30%);
  background-image: url(${props => props.image});
  background: linear-gradient(hsla(0, 0%, 0%, 0%), hsla(270, 40%, 40%, 30%)),
    url(${props => props.image});
  background-size: cover;
  background-position: center;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 650px) {
    border-radius: 0;
  }
`

const Content = styled.div`
  text-align: center;
  padding: 30px 60px;

  @media (max-width: 650px) {
    padding: 15px 30px;
  }
`

const Name = styled.h1`
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 5px;

  @media (max-width: 650px) {
    font-size: 1.5em;
  }
`

const Description = styled.p`
  color: #333333;
  line-height: 1.5em;
`

const Profile = props => (
  <Card>
    <Photo image='/static/photos/mayaasmara.jpg'>
      <Name>Maya Asmara</Name>
    </Photo>
    <Content>
      <Description>
        Hello there, beautiful soul! I am on mission to help raising people’s consciousness of their true happiness. I founded Depression Warriors Indonesia, a community-based organization that provides a sanctuary and peer-to-peer support for depression survivors. Now I actively work as writer, activist, and mindfulness coach.
      </Description>
      <SocialLinks />
    </Content>
  </Card>
)

export default Profile
