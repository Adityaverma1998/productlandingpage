import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import DnsIcon from '@mui/icons-material/Dns';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Stack } from '@mui/system';
import { Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Socialproof = () => {
  return (
    <>
    <Box variant='div'>
      <Box variant='div'>
        <Stack spacing={2}>
          <Typography variant='subtitle1'>Trusted Wroldwide</Typography>
          <Typography variant='h4'>Trusted by over 600 million users and 10,000 teams </Typography>
          <Typography variant='subtitle1'>Our rigorous security and compliance standards are at the heart of all we de. We work tirelessly to protect you and your customers  </Typography>
        <Divider/>
           {/* <Link href="#">Explore Legality Guide </Link> */}
           {/* <Link href="#"></Link> */}
        </Stack>
      </Box>
      <Box variant='div'>
       <Grid spacing={2}>
        
       </Grid>
        </Box>
    </Box>
    </>
  )
}

export default Socialproof