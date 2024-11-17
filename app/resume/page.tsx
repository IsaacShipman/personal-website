'use client';
import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Button, 
  CircularProgress, 
  Alert,
  Typography 
} from '@mui/material';
import { Download } from '@mui/icons-material';

// Make sure there's only one default export
export default function ResumePage() {  // Changed function name to be more specific
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/isaac-shipman-resume.pdf';
    link.download = 'isaac-shipman-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        mb: 2 
      }}>
        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={handleDownload}
          sx={{ mb: 2 }}
        >
          Download Resume
        </Button>
      </Box>

      <Paper 
        elevation={3}
        sx={{ 
          width: '100%',
          height: 'calc(100vh - 200px)',
          overflow: 'hidden'
        }}
      >
        <iframe
          src="/resume/IsaacsCV.pdf#view=FitH"
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          title="Resume"
        />
      </Paper>
    </Box>
  );
}