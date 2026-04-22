'use client';

import * as React from 'react';
import { Button, Typography, Box, Card, CardContent, CardActions } from '@mui/material';

export default function Home() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>; // Or skeleton
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-800 dark:bg-gray-900 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-gray-800 dark:bg-gray-900 sm:items-start">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
            Welcome to Our Amazing App
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'gray.300', textAlign: 'center' }}>
            This is a customized Next.js application with MUI components
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ backgroundColor: '#6366f1', margin: '0 auto' }}>
            Get Started
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
          {/* Column 1: Not Started */}
          <Box sx={{ flex: 1, minWidth: 275 }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, textAlign: 'center' }}>
              Not Started
            </Typography>
            <Card sx={{ minWidth: 275, backgroundColor: '#374151', color: 'white', mb: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
                    Project Task
              </Typography>
                  <Button size="small" variant="outlined" sx={{ borderColor: '#9ca3af', color: '#d1d5db' }}>Edit</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'center' }}>
                  <Typography variant="body2" sx={{ bgcolor: 'error.light', color: 'error.contrastText', px: 1, borderRadius: 1 }}>
                    High Priority
                  </Typography>
                  <Typography variant="body2" sx={{ bgcolor: 'warning.light', color: 'warning.contrastText', px: 1, borderRadius: 1 }}>
                    Marketing
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 1, color: 'gray.300', textAlign: 'center' }}>
                  This is a productivity tracker card with due date and tags.
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: 'gray.300', textAlign: 'center' }}>
                  Lorem Ipsum
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray.400', textAlign: 'center' }}>
                  Due Date: June 15, 2023
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: '#6366f1', margin: '0 auto' }}>View Details</Button>
              </CardActions>
            </Card>
          </Box>

          {/* Column 2: In Progress */}
          <Box sx={{ flex: 1, minWidth: 275 }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, textAlign: 'center' }}>
              In Progress
            </Typography>
            <Card sx={{ minWidth: 275, backgroundColor: '#374151', color: 'white', mb: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
                    Project Task
              </Typography>
                  <Button size="small" variant="outlined" sx={{ borderColor: '#9ca3af', color: '#d1d5db' }}>Edit</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'center' }}>
                  <Typography variant="body2" sx={{ bgcolor: 'error.light', color: 'error.contrastText', px: 1, borderRadius: 1 }}>
                    High Priority
                  </Typography>
                  <Typography variant="body2" sx={{ bgcolor: 'warning.light', color: 'warning.contrastText', px: 1, borderRadius: 1 }}>
                    Marketing
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 1, color: 'gray.300', textAlign: 'center' }}>
                  This is a productivity tracker card with due date and tags.
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: 'gray.300', textAlign: 'center' }}>
                  Lorem Ipsum
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray.400', textAlign: 'center' }}>
                  Due Date: June 15, 2023
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: '#6366f1', margin: '0 auto' }}>View Details</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 275, backgroundColor: '#374151', color: 'white', mb: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
                    Project Task
              </Typography>
                  <Button size="small" variant="outlined" sx={{ borderColor: '#9ca3af', color: '#d1d5db' }}>Edit</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'center' }}>
                  <Typography variant="body2" sx={{ bgcolor: 'error.light', color: 'error.contrastText', px: 1, borderRadius: 1 }}>
                    High Priority
                  </Typography>
                  <Typography variant="body2" sx={{ bgcolor: 'warning.light', color: 'warning.contrastText', px: 1, borderRadius: 1 }}>
                    Marketing
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 1, color: 'gray.300', textAlign: 'center' }}>
                  This is a productivity tracker card with due date and tags.
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: 'gray.300', textAlign: 'center' }}>
                  Lorem Ipsum
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray.400', textAlign: 'center' }}>
                  Due Date: June 15, 2023
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: '#6366f1', margin: '0 auto' }}>View Details</Button>
              </CardActions>
            </Card>
          </Box>

          {/* Column 3: Done */}
          <Box sx={{ flex: 1, minWidth: 275 }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, textAlign: 'center' }}>
              Done
            </Typography>
            <Card sx={{ minWidth: 275, backgroundColor: '#374151', color: 'white', mb: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
                    Project Task
              </Typography>
                  <Button size="small" variant="outlined" sx={{ borderColor: '#9ca3af', color: '#d1d5db' }}>Edit</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'center' }}>
                  <Typography variant="body2" sx={{ bgcolor: 'error.light', color: 'error.contrastText', px: 1, borderRadius: 1 }}>
                    High Priority
                  </Typography>
                  <Typography variant="body2" sx={{ bgcolor: 'warning.light', color: 'warning.contrastText', px: 1, borderRadius: 1 }}>
                    Marketing
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 1, color: 'gray.300', textAlign: 'center' }}>
                  This is a productivity tracker card with due date and tags.
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: 'gray.300', textAlign: 'center' }}>
                  Lorem Ipsum
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray.400', textAlign: 'center' }}>
                  Due Date: June 15, 2023
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: '#6366f1', margin: '0 auto' }}>View Details</Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </main>
    </div>
  );
}

