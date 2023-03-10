import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

const Pricing = (props) => {
  return (
    <>
    <Box component={'div'} sx={{maxWidth:'300px',padding:'1.5rem',border:'1px solid #E5E7EB',borderRadius:'5px',boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
      <Box component={'div'} sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:1,px:2}}>
             <Typography variant='h6'>Starter</Typography>
             <Typography variant='subtitle1' textAlign='center' sx={{color:'#9c9c9c'}}>Great for personal use and for your side projects</Typography>
      <Box component='div' sx={{display:'flex',alignItems:'end',gap:2}}>
      <Typography variant='h3'>$49</Typography>
      <Typography variant='subtitle2' sx={{color:'#9c9c9c'}}>/month</Typography>
      </Box>
      
      </Box>
      <Box component={'div'} sx={{display:'flex',flexDirection:'column',justifyContent:'center',gap:1,my:2}}>
       <Box component={'div'} sx={{display:'flex',alignItems:'center',gap:1}}>
        <DoneIcon sx={{color:'green'}}/>
        <Typography variant="subtitle2" color="initial">Individual configuration</Typography>
       </Box>
       <Box component={'div'} sx={{display:'flex',gap:1}}>
        <DoneIcon sx={{color:'green'}}/>
        <Typography variant="subtitle2" color="initial">No setup, monthly, or hidden fees</Typography>
       </Box>
       <Box component={'div'} sx={{display:'flex',alignItems:'center',gap:1}}>
        <DoneIcon sx={{color:'green'}}/>
        <Typography variant="subtitle2" color="initial">Team size :</Typography>
        <Typography variant="h6" color="initial">1 developer</Typography>

       </Box>
       <Box component={'div'} sx={{display:'flex',alignItems:'center',gap:1}}>
        <DoneIcon sx={{color:'green'}}/>
        <Typography variant="subtitle2" color="initial">Premium support: </Typography>
        <Typography variant="h6" color="initial">6 months</Typography>

       </Box>
       <Box component={'div'} sx={{display:'flex',alignItems:'center',gap:1}}>
        <DoneIcon sx={{color:'green'}}/>
        <Typography variant="subtitle2" color="initial">Free updates:</Typography>
        <Typography variant="h6" color="initial">6 months</Typography>

       </Box>
      </Box>
      <Button variant='contained' sx={{width:'100%',background:'#C780FA'}}>Get started</Button>
    </Box>
    </>
  )
}

export default Pricing