import React from 'react';
import { Box, Typography, Container, Stack, Paper, Avatar, Chip } from '@mui/material';
import Grid from '@mui/material/Grid2';

function About() {
  return (
    <Box sx={{ minHeight: '100vh', paddingY: 8 }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          About Me
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Profile Image */}
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              alt="Ye Thu"
              src='/member2.jpg'
              sx={{ width: 150, height: 150, margin: '0 auto', boxShadow: 3 }}
            />
          </Grid>
          {/* Introduction Section */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
              <Typography variant="body1"  textAlign="center">
                I'm Ye Thu, a passionate Full Stack Developer with expertise in modern web technologies. 
                I have a strong focus on creating seamless user experiences, scalable applications, and efficient, clean code.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Skills & Expertise
            </Typography>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
              <Typography variant="body1" color="textSecondary" >
                My skillset spans across front-end and back-end development, and I’m well-versed in frameworks and tools like React, Node.js, MongoDB, and more. I enjoy working with both startups and established companies to build innovative solutions.
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Chip label={<img src='/javascript-logo.png' alt="JavaScript" style={{ width: '20px', marginRight: '8px' }} />} color="primary" />
                <Chip label={<img src='/javascript-logo.png' alt="React" style={{ width: '20px', marginRight: '8px' }} />} color="secondary" />
                <Chip label={<img src='/javascript-logo.png' alt="Node.js" style={{ width: '20px', marginRight: '8px' }} />} color="primary" />
                <Chip label={<img src='/javascript-logo.png' alt="MongoDB" style={{ width: '20px', marginRight: '8px' }} />} color="secondary" />
                <Chip label={<img src='/javascript-logo.png' alt="GraphQL" style={{ width: '20px', marginRight: '8px' }} />} color="primary" />
                <Chip label={<img src='/javascript-logo.png' alt="TypeScript" style={{ width: '20px', marginRight: '8px' }} />} color="secondary" />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Professional Experience
            </Typography>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
              <Typography variant="body1" color="textSecondary" >
                Over the last few years, I have worked with various clients to deliver high-quality projects. From designing responsive front-end interfaces to developing robust back-end services, my experience covers the full stack of web development.
              </Typography>
              <Typography variant="body2" color="textSecondary" >
                Current Role: Full Stack Developer at XYZ Company
              </Typography>
              <Typography variant="body2" color="textSecondary" >
                Past Role: Freelance Developer for multiple startups
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
  }

export default About;