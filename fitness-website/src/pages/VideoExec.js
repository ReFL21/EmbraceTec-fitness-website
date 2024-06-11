import React from 'react';
import { Grid } from "@mui/material";
import { Typography, Container, Box, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

export default function VideoExec(){

    return(
        <Grid container spacing={1}> 
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Card sx={{ maxWidth: 560 }}>
                    <CardActionArea>
                        <CardMedia
                            component="iframe"
                            height="315"
                            src="https://www.youtube.com/embed/LwJfjPCY6Ps?si=WDDyR4o1IPpiiSba" 
                            title="Nova godina 2020" 
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Tips and Tricks from a fitness trainer with 4 years of experience
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Description for the first video.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={6} lg={6}>
                <Card sx={{ maxWidth: 560 }}>
                    <CardActionArea>
                        <CardMedia
                            component="iframe"
                            height="315"
                            src="https://www.youtube.com/embed/DwhRE64j6A4?si=Lu4YKJpPwejnRDXB"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Motivational words from another trainer
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Description for the second video.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid> */}
            {/* <Grid>
                <Card sx={{ maxWidth: 560 }}>
                    <CardActionArea>
                        <CardMedia
                            component="iframe"
                            height="315"
                            src="https://www.youtube.com/embed/MF-Dy9E1mWE?si=kXx8pgmca4ff0btp"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Tips and tricks and motivational words from one gym guy- Stanislav
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Description for the second video.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid> */}
        </Grid>
    );
}


{/* <iframe 
width="560" height="315" 
src="https://www.youtube.com/embed/LwJfjPCY6Ps?si=WDDyR4o1IPpiiSba" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen></iframe> */}

