import React, { useState, useEffect } from "react";
import styleF from "../pages/Homepage.module.css";
import backgroundImage from "../media/luis-reyes-mTorQ9gFfOg-unsplash.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Home(){

    return(
        <div>
            <Box
            sx={{
                position: 'relative', // Ensure the Box is relatively positioned
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                padding: "20px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column', // Arrange children in a column
                textAlign: 'center', // Center the text
                color: 'white', // Ensure the text is readable against the background
            }}
            >
            <Typography variant="h2" sx={{ mb: 4 }}> {/* Adjust the margin-bottom as needed */}
            NOTHING WILL WORK UNLESS YOU DO
            </Typography>
            
           
            <footer className={styleF.footer}>
                <Typography variant="h6">Contact us:</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a href="https://www.facebook.com/hristo.kolev.319" className={styleF.iconLink}>
                        <FacebookIcon fontSize="large" />
                    </a>
                    <a href="https://www.instagram.com/_hri100kolev_/" className={styleF.iconLink}>
                        <InstagramIcon fontSize="large" />
                    </a>
                </Box>
            </footer>
            </Box>
        </div>
    );
}

export default Home;