import { Stack, Typography, Paper, MenuList, MenuItem, ListItemText, Divider } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState, useRef, useEffect } from "react";

export default function PlayerTable() {

    const [ deckCount, setDeckCount ] = useState(100);
    const deckRef = useRef();
    const [ showDeckContextMenu, setShowDeckContextMenu ] = useState(false);
    const [ contextMenuX, setContextMenuX ] = useState(0);
    const [ contextMenuY, setContextMenuY ] = useState(0);

    useEffect(() => {
        document.getElementById('root').addEventListener('click', (e) => {
            setContextMenuX(0);
            setContextMenuY(0);
            setShowDeckContextMenu(false);
            e.stopPropagation();
        }, false);

        deckRef.current.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            setContextMenuX(e.x);
            setContextMenuY(e.y);
            setShowDeckContextMenu(true);
        }, false);
    }, [])

    return (
        <Grid container spacing={1} sx={{ width: '98%', height: '97%', margin: 3 }}>
            <Grid size={1}>
                <div style={{ width: '100%', height: '100%', outline: '1px solid white' }}>
                    <Stack sx={{ textAlign: 'center', float: 'right', top: '50%', marginRight: 2, position: 'relative' }} spacing={1}>
                        <div id="deck" ref={deckRef} style={{
                                width: '100px', 
                                height: '140px', 
                                backgroundColor: 'black', 
                                position: 'relative', 
                                display: 'inline-block', 
                                backgroundImage: 'url("https://i.imgur.com/LdOBU1I.jpeg")', 
                                backgroundSize: 'cover' }}>
                        </div>
                        <Typography variant="body1">{deckCount}</Typography>
                    </Stack>
                    { showDeckContextMenu ? 
                    <Paper sx={{ position: 'absolute', top: contextMenuY, left: contextMenuX, width: '200px', height: '200px'}}>
                        <Typography sx={{ marginLeft: 2, marginBottom: 0.5, marginTop: 0.5 }} variant="body1">Deck Menu</Typography>
                        <Divider />
                        <MenuList>
                            <MenuItem>
                                <ListItemText>
                                    Draw Card
                                </ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemText onClick={() => console.log("Draw X Cards")}>
                                    Draw X Cards
                                </ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemText>
                                    View Library
                                </ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Paper>
                    :
                    null
                }
                    
                </div>
            </Grid>
            <Grid size={1}>
                <div style={{ width: '100%', height: '100%', outline: '1px solid white' }}></div>
            </Grid>
            <Grid size={10}>
                <div style={{ width: '100%', height: '100%', outline: '1px solid white' }}>
                    <Stack sx={{ height: '100%' }} spacing={1}>
                        { /* CREATURE FIELD */}
                        <div style={{ width: '100%', height: '100%', outline: '1px solid red' }}></div>
                        { /* NON-CREATURE FIELD */ }
                        <div style={{ width: '100%', height: '100%', outline: '1px solid red' }}></div>
                        { /* LAND FIELD */ }
                        <div style={{ width: '100%', height: '100%', outline: '1px solid red' }}></div>
                        { /* HAND */ }
                        <div style={{ width: '100%', height: '100%', outline: '1px solid red' }}></div>
                    </Stack>
                </div>
            </Grid>
        </Grid>
    );
}