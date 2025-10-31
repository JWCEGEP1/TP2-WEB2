import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function card({title, answer}) {
    return <React.Fragment>
        <CardContent sx={{minHeight: 250}}>

            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography sx={{mb: 5}}>{answer}</Typography>
        </CardContent>
    </React.Fragment>
}

export default function OutlinedCard({title, answer}) {
    return (
        <Box sx={{ width: 275, backdropFilter: 122}}>
            <Card variant="outlined">{card({title, answer})}</Card>
        </Box>
    );
}
