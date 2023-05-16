import { defineStore } from 'pinia'
import { sendMail, type mailTypes } from '@/api/myweb.api'

export const useStateContainer = defineStore({
  id: 'stateContainer',
  state: () => ({
    homeTitle: 'I Enjoy building Things for the Web',
    homeDetail: `I'm a Software Engineer specializing in building 
exceptional digital experiences.
 Currently, I'm Focused on crafting solid and 
 scalable products with great user experiences.`,
    aboutSection1: `Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!`,
    aboutSection2: `Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.`,
    aboutSection3: `I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.`,
    stacks: [
      { id: 0, name: 'React' },
      { id: 1, name: 'Vue' },
      { id: 2, name: 'Node.js' },
      { id: 3, name: 'Nest.js' },
      { id: 4, name: 'Git' },
      { id: 5, name: 'TailwindCSS' },
    ],
   experience:[
    {excellerent:[{id:1,content:'  Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more'},
    {id:2,content:'  Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements'},
    {id:3,content:' Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders'},
    {id:4,content:' Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'}]},
    {haramaya:[{id:1,content:'  Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more'},
    {id:2,content:'  Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements'},
    {id:3,content:' Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders'},
    {id:4,content:' Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'}]},
    {ambo:[{id:1,content:'  Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more'},
    {id:2,content:'  Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements'},
    {id:3,content:' Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders'},
    {id:4,content:' Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'}]}
    
   ]
  }),

  actions: {
    async sendMail(mail: mailTypes) {
      const result = await sendMail(mail)
        .then((res) => {
          return res.data.message
        })
        .catch((err) => {
          return err
        })
      return result
    }
  },
  getters: {}
})
