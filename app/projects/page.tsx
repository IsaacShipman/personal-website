'use client';
import { Grid, Typography, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    // Start path from public folder
    image: '/images/project-images/placeholder-image.jpg',
    github: 'https://github.com/yourusername/project1',
    demo: 'https://demo1.com'
  },

  {
    title: 'Project 2',
    description: 'Description of project 1',
    // Start path from public folder
    image: '/images/project-images/placeholder-image.jpg',
    github: 'https://github.com/yourusername/project1',
    demo: 'https://demo1.com'
  },
  // ... other projects
];

export default function Projects() {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.github} target="_blank">
                  GitHub
                </Button>
                <Button size="small" href={project.demo} target="_blank">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}