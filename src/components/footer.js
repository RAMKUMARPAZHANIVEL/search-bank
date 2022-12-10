import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const Footer = () => {
    return(
        <Stack className='footer' pt={2} pb={2} backgroundColor="black" color="white">
            <Typography variant="h6" align="center" >
              Devloped By Ramkumar & team.
            </Typography >
            <Typography variant="h6" align="center" >
              © | Privacy Policy
            </Typography>
            <Typography variant="h6" align="center" >
              <a href="https://github.com/RAMKUMARPAZHANIVEL/" target="_blank" rel="noreferrer">
                Source Code
              </a>
            </Typography>
          
            </Stack>   
        
    );
}

export default Footer;