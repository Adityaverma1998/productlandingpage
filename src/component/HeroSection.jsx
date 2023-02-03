import { Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
// import BrandImages from '/Assets/images1.png';

const HeroSection = () => {
  return (
   
    <Box compenent='div'>
         <Box component={'div'} sx={{display:'flex',alignItems:'center'}}>
          <Stack spacing={2} sx={{width:'40%'}}>
             <Typography variant='h3'>Building digital products & Brands</Typography>
             <Typography variant='subtitle2'>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</Typography>
          <Box compenent={'div'} sx={{display:'flex',gap:2,alignItems:'center'}}>
          <Button variant="contained">Start 30 day free trail</Button>
          <Button variant='outlined'>Pricing & FAQ</Button>
          </Box>
          
          </Stack>
          <Box component={'div'}>
             <img src='/Assets/image1.png' alt=''/>
          </Box>

         </Box>
    </Box>
  )
}

export default HeroSection