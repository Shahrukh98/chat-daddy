import React, { useState } from 'react';
import { Box, Paper, Grid, Typography, Card } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const StyledCard = styled(Card)((props)=>({
    backgroundColor: props.key%2===0 ? 'red' : '#f3f5f9',
}))
  

export default function ChatDaddy() {
    const [first, setfirst] = useState(100);
    const [includeTags, setIncludeTags] = useState([
        "Greetings",
        "Greetings",
        "Greetings",
        "Greetings",
        "Greetings",
    ]);
    const [excludeTags, setExcludeTags] = useState([
        "Greetings",
        "Greetings",
        "Greetings",
        "Greetings",
        "Greetings",
    ]);

    return (
        <Box>
            <Grid container >
                <Grid container xs={3} style={{ height: "100vh", backgroundColor: "red", flexDirection: "column" }}>

                    <Item style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginBottom:20 }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Menu style={{ marginRight: 10 }} />
                            <Typography style={{ color: "#000" }}>Audience</Typography>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", color: "grey" }}>
                            {first} Contacts
                        </div>
                    </Item>

                    <Paper style={{ justifyContent: "space-between",marginBottom:20 }}>
                        <Typography>Include Tags:</Typography>
                        {
                            includeTags.map((iTag,index)=>(
                                <StyledCard key={index}>
                                    <Typography>{iTag}{index}</Typography>
                                </StyledCard>
                            ))
                        }                
                    </Paper>

                    <Paper style={{ justifyContent: "space-between",marginBottom:20 }}>
                        <Typography>Exclude Tags:</Typography>
                        {
                            excludeTags.map((eTag,index)=>(
                                <Card key={index}>
                                    <Typography>{eTag}</Typography>
                                </Card>
                            ))
                        }                
                    </Paper>


                </Grid>
                <Grid item xs={9} style={{ height: "100vh", backgroundColor: "blue" }}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
}