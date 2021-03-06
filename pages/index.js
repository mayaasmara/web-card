import React from 'react'
import Link from 'next/link'

import Page from '../components/page'
import Head from '../components/head'
import Profile from '../components/profile'
import Center from '../components/center'

const Home = () => (
  <Page>
    <Head
      title='Maya Asmara'
      description='A happy warrior'
      url='https://mayaasmara.com'
      ogImage='/static/photos/mayaasmara.jpg'
    />

    <Center>
      <Profile />
    </Center>

    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap');
      @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        background-color: hsla(270, 40%, 40%, 30%);
      }

      @media (max-width: 650px) {
        :global(body) {
          background-color: #ffffff;
        }
      }

      :global(h1) {
        font-family: Rubik, sans-serif;
        font-weight: 700;
      }

      :global(p) {
        font-family: Lato, sans-serif;
      }

      :global(a) {
        color: #067df7;
        text-decoration: none;
        font-family: Rubik, sans-serif;
        font-weight: 700;
      }
    `}</style>
  </Page>
)

export default Home
