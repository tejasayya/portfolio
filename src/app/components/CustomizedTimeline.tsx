import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

export default function CustomizedTimeline1({date , title , desc , img} : any) {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color=""
          className='text-white'
        >
          {date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            {/* <FastfoodIcon /> */}
            <Avatar
            alt="Remy Sharp"
            src={img}
            sx={{ width: 56, height: 56 }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'white' }} className='bg-white' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-white'>
            {title}
          </Typography>
          <Typography className='text-white'>{desc}</Typography>
        </TimelineContent>
      </TimelineItem>

      

    </Timeline>
  );
}