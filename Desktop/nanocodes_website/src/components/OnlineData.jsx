import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 275,
  margin: '20px',
}));

const Course = ({ course, link, starts, ends }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Typography variant="h6" component="h2">
          Course has ended
        </Typography>
      );
    } else {
      return (
        <span>
          {zeroPad(days)} days {zeroPad(hours)}:{zeroPad(minutes)}:
          {zeroPad(seconds)}
        </span>
      );
    }
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="overline" display="block" gutterBottom>
          Course
        </Typography>
        <Typography variant="h6" component="h2">
          {course}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 1.5 }} color="text.secondary">
          Starts: {new Date(starts).toLocaleString()}
          <br />
          Ends: {new Date(ends).toLocaleString()}
        </Typography>
        <Typography variant="body2" style={{ color: 'red' }}>
          <Countdown date={new Date(ends)} renderer={renderer} />
        </Typography>
      </CardContent>

      <div className="flex items-center justify-center my-[1rem]">
        <Button variant="contained" color="primary" href={link}>
          Go to Course
        </Button>
      </div>
    </StyledCard>
  );
};

export default Course;
