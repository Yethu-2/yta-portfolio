import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
//import Grid from '@mui/material/Grid';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built using React and Material UI.',
      image: '/img2.jpg',
      link: '#', 
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with a custom CMS and payment gateway integration.',
      image: '/favicon.svg',
      link: 'https://foodrealm.onrender.com/',
    },
    {
      title: 'Chatbot Application',
      description: 'An AI-powered chatbot built with Node.js, Express, and Dialogflow.',
      image: '/RMIT-Logo.png',
      link: '#',
    },
    {
      title: 'Blog Application',
      description: 'A simple blogging platform where users can write and share articles.',
      image: '/RMIT-Logo.png',
      link: '#',
    },
    {
      title: 'Task Manager',
      description: 'A task management tool to help users track their to-do lists.',
      image: '/RMIT-Logo.png',
      link: '#',
    },
    {
      title: 'Weather App',
      description: 'A weather application that shows current weather information using a public API.',
      image: '/RMIT-Logo.png',
      link: '#',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}> {/* Adjusted grid for responsiveness */}
            <Card sx={{ width: '100%', height: '100%' }}> {/* Full width card */}
              <CardMedia
                component="img"
                height="160"  // Adjusted height for better fit
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover' }}  // Ensures image covers the area
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
              <Button size="small" color="primary" href={project.link}>
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;