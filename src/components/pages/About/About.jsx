import React from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../../modules/Paragraph';
import styles from './About.module.scss'

export const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Heading level="1">
          About Me
        </Heading>
        <Paragraph style={{fontWeight: 600, fontStyle: 'italic'}}>
          My name is Amir. I am a Software Engineer at Catalyte. In my free time, I work on side projects
          that deal with data-science, artificial intelligence, automationm and robotics. My professional
          goals are to work with teams of highly driven developers who share my passion for building a
          great product
        </Paragraph>
        <Heading level="2">
          My Story
        </Heading>
        <Paragraph>
          I graduated back in 2018 from Naperville North High School. I had been accepted into University of
          Illinois at Chicago as a Marketing Major, but the cost of tuition left me with uncertainty.
        </Paragraph>
        <Paragraph>
          Ultimately, I decided to go out on my own and try freelance web design work.
        </Paragraph>
        <Paragraph>
          A couple years afterwards, I burned out and needed to pursue something more challenging. I remembered
          at the time, Elon Musk (an influence on my life) mentioned on an interview that he spends most of his
          time on engineering at Tesla. I was familiar with the term and ultimately decided to pursue software
          engineering. 
        </Paragraph>
        <Paragraph>
          After looking for jobs on Inded, I found Catalyte. I quickly applied, passed the screen testing,
          and enrolled in their January cycle on 2021. After graduating in June of 2021, I was brought onto
          the training team as a Trainer's Assistant, helping others learn programming.
        </Paragraph>
      </div>
    </div>
  )
}
