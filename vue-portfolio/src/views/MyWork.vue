<template>
  <b-container gap-20>
    <SectionHeader sectionTitle="My Projects" />
<b-col class="projectsContainer" >
  <div class="projects" v-for="(tech, index) in projects" :key="index">
      <ProjectCard
        :image="tech.image"
        :project-url="tech.url"
        :-project-source-code="tech.gitHubUrl"
        :technologies="tech.stacks"
      />
    </div>
</b-col>

  
  </b-container>
</template>

<script lang="ts" setup>
import SectionHeader from './SectionHeader.vue'
import ProjectCard from '@/components/ProjectCard.vue'
const projects = [
  {
    id: 1,
    title: 'Music playlist',
    url: 'https://my-music-playlist.netlify.app/',
    image: './music-playlist.png',
    stacks:
      'React, Redux toolkit, Redux Saga, React Hook Form, Zod, Style-system, emotion, TypeScript, express.js, MongoDB,JWT',
    gitHubUrl: 'https://github.com/codefHome/react-express-app'
  },
  {
    id: 2,
    title: 'Course-manager-app',
    url: 'https://my-music-playlist.netlify.app/',
    image: './music-playlist.png',
    stacks:
      'React, Redux toolkit, RTK Query, MUI, TypeScript, Nest.js PostgreSQL, JWT, TailwindCSS',
    gitHubUrl: 'https://github.com/codefHome/react-express-app'
  },
  {
    id: 3,
    title: 'Bedada Bekele',
    url: 'https://my-music-playlist.netlify.app/',
    image: './portfolio.png',
    stacks: 'React, Redux toolkit, RTK Query, TypeScript, express.js mongoose, MongoDB',
    gitHubUrl: 'https://github.com/codefHome/react-express-app'
  },
  {
    id: 4,
    title: 'Vue-pet-project',
    url: 'https://my-music-playlist.netlify.app/',
    image: './music-playlist.png',
    stacks: 'Vue.js, Pinia, TypeScript, Express.js, bootstrap',
    gitHubUrl: 'https://github.com/codefHome/Vue.js-pet-project'
  }
]
</script>

<style scoped>
.projectsContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width:100%
}
.projects{
display: flex;
width:450px;
height: 250px;
}

@media (width <= 850px) {
  .projectsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 10px;
  }
  .projects{
display: flex;
width:fit-content;

}
}
</style>
