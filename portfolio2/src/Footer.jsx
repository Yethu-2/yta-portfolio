import React from 'react';
import { Box, Typography, Container, Stack, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', padding: 3 }}>
      <Container>
        <Stack spacing={2} alignItems="center">
          <Typography variant="body2" textAlign="center">
            &copy; {new Date().getFullYear()} Ye Thu. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton color="inherit" href="https://www.linkedin.com/">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" href="https://github.com/">
              <GitHub />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com/">
              <Twitter />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;