import { Stack, Typography, Paper, MenuList, MenuItem, ListItemText, Divider, Card } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState, useRef, useEffect } from "react";
import CardInfo from "./objects/cards/CardInfo";
import './ImageCard.css';
import HandCard from "./HandCard";
import CardSlot from "./CardSlot";

export default function PlayerTable() {

    const [ deckCount, setDeckCount ] = useState(100);
    const deckRef = useRef();
    const cardRef = useRef();
    const cardSlotRef = useRef();

    const [ showDeckContextMenu, setShowDeckContextMenu ] = useState(false);
    const [ contextMenuX, setContextMenuX ] = useState(0);
    const [ contextMenuY, setContextMenuY ] = useState(0);

    /* TODO: add more card slots */
    const [ zoneOneCards, setZoneOneCards ] = useState([null, null, null]);
    const [ zoneTwoCards, setZoneTwoCards ] = useState([null]);
    const [ zoneThreeCards, setZoneThreeCards ] = useState([null]);

    const [ playerCards, setPlayerCards ] = useState([]);

    function addCardToSlotCallback(zoneIdx, slotIdx, handIdx) {
        console.log(playerCards);
        console.log(handIdx);
        switch (zoneIdx) {
            case 0: {
                let cardCopy = {...playerCards[handIdx]};
                playerCards.splice(handIdx, 1);
                setPlayerCards([...playerCards]);

                zoneOneCards[slotIdx] = cardCopy;
                setZoneOneCards([...zoneOneCards]);

                console.log(playerCards);
                console.log(zoneOneCards);
                break;
            }
            case 1: {
                break;
            }
            case 2: {
                break;
            }
        }
    }

    function createSampleCard() {
        return new CardInfo('type', 'name', 'description', 'mana', 5, 5, 'https://cards.scryfall.io/normal/front/6/d/6da045f8-6278-4c84-9d39-025adf0789c1.jpg?1562404626');
    }

    function allowDrop(e) {
        e.preventDefault();
    }

    function drag(e) {
        e.dataTransfer.setData("card", e.target.id);
        console.log(e.target.id);
    }

    function drop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("card");
        console.log(data);
        e.target.appendChild(document.getElementById(data));
    }

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
                                <ListItemText onClick={() => {
                                    if (deckCount > 0) {
                                        playerCards.push(createSampleCard());
                                        setPlayerCards([...playerCards]);
                                        setDeckCount(deckCount - 1);
                                    }
                                }}>
                                    Draw Card
                                </ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemText> 
                                    Draw X Cards
                                </ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemText>
                                    View Library
                                </ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemText>
                                    Shuffle
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
                        <div style={{ width: '100%', height: '100%', outline: '1px solid red' }}>
                            <Stack sx={{ marginLeft: 5, height: '100%', alignItems: 'center' }} direction="row" spacing={1}>
                                {zoneOneCards.map((card, idx) => {
                                    return <CardSlot card={card} zoneIdx={0} slotIdx={idx} addCardToSlotCallback={addCardToSlotCallback}/>
                                })}
                            </Stack>
                        </div>
                        { /* NON-CREATURE FIELD */ }
                        <div style={{ width: '100%', height: '100%', outline: '1px solid red' }}></div>
                        { /* LAND FIELD */ }
                        <div style={{ width: '100%', height: '100%', outline: '1px solid red' }}></div>
                        { /* HAND */ }
                        <div style={{ width: '100%', height: '100%', outline: '1px solid red' }}>
                            <Stack sx={{ marginTop: 1, justifyContent: 'center' }} direction="row" spacing={2}>
                                {playerCards.map((card, idx) => {
                                    return (
                                        <div>
                                           <HandCard handIdx={idx} card={card} /> 
                                        </div>
                                    )
                                })}
                            </Stack>
                        </div>
                    </Stack>
                </div>
            </Grid>
        </Grid>
    );
}