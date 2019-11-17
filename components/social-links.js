import React from 'react'
import styled from '@emotion/styled'

const Lists = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const List = styled.li`
  letter-spacing: 1px;
  line-height: 1.5em;
  margin: 0 5px;
`

const ExternalLink = styled.a`
  color: ${props => props.color};
`

const links = [
  {
    url: 'https://www.facebook.com/mayaasmara.pane',
    name: 'Facebook',
    color: '#4267B2'
  },
  {
    url: 'https://instagram.com/mayaasmara_',
    name: 'Instagram',
    color: '#b900b4'
  },
  
  {
    url: 'https://linkedin.com/in/maya-asmara',
    name: 'LinkedIn',
    color: '#2867B2'
  }
]

const SocialLinks = props => (
  <Lists>
    {links.map(({ url, name, color }, index) => {
      return (
        <List key={index}>
          <ExternalLink target='_blank' href={url} color={color}>
            {name}
          </ExternalLink>
        </List>
      )
    })}
  </Lists>
)

export default SocialLinks
