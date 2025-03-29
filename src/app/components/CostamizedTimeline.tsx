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
import details from '../details.json';

export default function CustomizedTimeline() {
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
          March 2025 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            {/* <FastfoodIcon /> */}
            <Avatar
            alt="Remy Sharp"
            src={details.cvs1}
            sx={{ width: 56, height: 56 }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'white' }} className='bg-white' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-white'>
            Software Developer - CVS Health
          </Typography>
          <Typography className='text-white'>Java | Spring Boot | GCP</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color=""
          className='text-white'
        >
          June 2024 - March 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            {/* <LaptopMacIcon /> */}
            <Avatar
            alt="Remy Sharp"
            src={details.gdg}
            sx={{ width: 56, height: 56 }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'white' }} className="bg-white" />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-white'>
            Open Source Developer - Google Dev Group
          </Typography>
          <Typography className='text-white'>OSS | Rocket.Chat | FitCheck app</Typography>
        </TimelineContent>
      </TimelineItem>

      

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color=""
          className='text-white'
        >
           Oct 2022 - Dec 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {/* <HotelIcon /> */}
            <Avatar
            alt="Remy Sharp"
            src={details.verizon}
            sx={{ width: 56, height: 56 }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'white' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-white'>
            Software Engineer - Verizon(Client)
          </Typography>
          <Typography className='text-white'>Spring Boot | Microservices | Rest API | ReactJS | AWS</Typography>
          {/* <Typography className='text-white'>Because you need rest</Typography> */}

        </TimelineContent>
        </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color=""
          className='text-white'
        >
           May 2021 – Oct 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            {/* <RepeatIcon /> */}
            <Avatar
            alt="Remy Sharp"
            src={details.cvs1}
            sx={{ width: 56, height: 56 }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-white'>
            Software Engineer - CVS Health(Client)
          </Typography>
          <Typography className='text-white'>Big Data | Hadoop | GCP | Python | ETL | SQL | Java</Typography>
          {/* <Typography className='text-white'>Because you need rest</Typography> */}

        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color=""
            className='text-white'
            >
          Jan 2021 - May 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            {/* <RepeatIcon /> */}
            <Avatar
            alt="Remy Sharp"
            src={details.infosys}
            sx={{ width: 56, height: 56 }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-white'>
            System Engineer - Infosys
          </Typography>
          <Typography className='text-white'>Java | Python | SQL</Typography>
          
        </TimelineContent>
      </TimelineItem>



      

    </Timeline>
  );
}