import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from "@mui/material/Button";

export default function ActionAreaCard({Titre, ImgUrl, Resume, Text, Date}) {

    return (
        <Card
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
                },
            }}
        >
            <CardActionArea sx={{ flexGrow: 1 }}>

                <CardMedia
                    component="img"
                    height="200"
                    image={ImgUrl}
                    alt={Titre}
                    sx={{ objectFit: "cover" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" >
                        {Titre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {Date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                        {Resume}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {Text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
