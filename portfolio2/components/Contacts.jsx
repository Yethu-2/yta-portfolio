import React from 'react';
import { Box, Typography, Container, TextField, Button, Stack, Paper, InputLabel } from '@mui/material';
import Grid from '@mui/material/Grid2';

function Contacts({ darkMode }) { // Destructure darkMode from props
  return (
    <Box sx={{ minHeight: '100vh', paddingY: 10, }}>
      <Container>
        <Grid container spacing={4} justifyContent="center" alignItems="center">

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                padding: 4,
                borderRadius: 3,
                backgroundColor: darkMode ? '#333' : '#fff', // Adjust background for dark mode
                color: darkMode ? '#fff' : '#000', // Text color based on dark mode
                maxWidth: '400px', // Adjust width to make it larger
                margin: '0 auto', // Center the form horizontally
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, marginBottom: 3 }}>
                Contact Me
              </Typography>
              <Stack spacing={3} component="form">
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  slotProps:Input={{
                    sx: {
                      height: '60px',
                      borderRadius: 2,
                      backgroundColor: darkMode ? '#444' : '#fff',
                      color: darkMode ? '#fff' : '#000',
                    },
                  }}
                  slotProps:InputLabel={{
                    sx: { color: darkMode ? '#aaa' : '#000' },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  slotProps:Input={{
                    sx: {
                      height: '60px',
                      borderRadius: 2,
                      backgroundColor: darkMode ? '#444' : '#fff',
                      color: darkMode ? '#fff' : '#000',
                    },
                  }}
                  slotProps:InputLabel={{
                    sx: { color: darkMode ? '#aaa' : '#000' },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  slotProps:Input={{
                    sx: {
                      borderRadius: 2,
                      backgroundColor: darkMode ? '#444' : '#fff',
                      color: darkMode ? '#fff' : '#000',
                    },
                  }}
                  slotProps:InputLabel={{
                    sx: { color: darkMode ? '#aaa' : '#000' },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    height: '50px',
                    borderRadius: 2,
                    backgroundColor: darkMode ? '#1e88e5' : '#3f51b5',
                    '&:hover': {
                      backgroundColor: darkMode ? '#1565c0' : '#303f9f',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Paper>
          </Grid>

          {/* Contact Info / Visual Column */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'url(/img2.jpg)', // Replace with your image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 3,
                minHeight: '400px',
              }}
            >
              <Box sx={{ 
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)', 
                color: darkMode ? '#000' : '#fff',
                padding: 4, 
                borderRadius: 2 
              }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  Feel free to reach out for collaborations or just a friendly chat.
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500, marginBottom: 1 }}>
                  Email: ye.thu@example.com
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500, marginBottom: 1 }}>
                  Phone: +61 123 456 789
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500, marginBottom: 1 }}>
                  LinkedIn: <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#000' : '#fff' }}>linkedin.com/in/ye-thu</a>
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  GitHub: <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#000' : '#fff' }}>github.com/ye-thu</a>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contacts;