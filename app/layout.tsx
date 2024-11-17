'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/app/theme';
import Navbar from '@/components/navigation/Navbar';
import { Container } from '@mui/material';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Container maxWidth="lg" sx={{ mt: 8 }}>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}