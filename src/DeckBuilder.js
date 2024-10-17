import { Button, Divider, Drawer, List, ListItem, Stack, TextField, Toolbar, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import CardListAccordion from "./CardListAccordion";
import DeckBuilderTable from "./DeckBuilderTable";

export default function DeckBuilder() {
    const [ numArtifacts, setNumArtifacts ] = useState(0);
    const [ numCreatures, setNumCreatures ] = useState(0);
    const [ numEnchantments, setNumEnchantments ] = useState(0);
    const [ numInstants, setNumInstants ] = useState(0);
    const [ numLands, setNumLands ] = useState(0);
    const [ numSorceries, setNumSorceries ] = useState(0);
    const [ totalCards, setTotalCards ] = useState(0);


    const [ selectedArtifacts, setSelectedArtifacts ] = useState([]);
    const [ selectedCreatures, setSelectedCreatures ] = useState([]);
    const [ selectedEnchantments, setSelectedEnchantments ] = useState([]);
    const [ selectedInstants, setSelectedInstants ] = useState([]);
    const [ selectedLands, setSelectedLands ] = useState([]);
    const [ selectedSorceries, setSelectedSorceries ] = useState([]);

    const [ searchText, setSearchText ] = useState("");
    const [ filteredCards, setFilteredCards ] = useState([]);

    /**
     * Card object prototype:
     * - type (e.g., Instant)
     * - name
     * - description (card body)
     * - mana (e.g., 3BB)
     * - power
     * - toughness
     * - qty (amount of this card, e.g., for selected cards)
     */

    /* pseudo cardDatabase for testing */
    const cardDatabase = [
        { type: 'Instant', name: 'Blueberry Shake', description: 'Some fake card', mana: '3B', qty: 0},
        { type: 'Creature', name: 'Green Goblin', description: 'ooga booga', mana: '1G', power: 1, toughness: 1, qty: 0},
        { type: 'Creature', name: 'Batman', description: "I'm batman", mana: '5BB', power: 5, toughness: 4, qty: 0},
    ]

    const searchCard = () => {
        const filteredCards = cardDatabase.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.description.toLowerCase().includes(searchText.toLowerCase));
        setFilteredCards(filteredCards);
    }

    function addSelectedCard(card, selectedCardArray) {
        let cardExists = false;

        for (let _findCard of selectedCardArray) {
            if (_findCard.name === card.name) {
                _findCard.qty += 1;
                cardExists = true;
                break;
            }
        }

        if (!cardExists) {
            card.qty = 1;
            selectedCardArray.push(card);
        }
    }

    function addCardCallback(card) {
        const cardCopy = {...card};

        switch (card.type) {
            case "Artifact": {
                addSelectedCard(cardCopy, selectedArtifacts);
                setSelectedArtifacts.apply([...selectedArtifacts]);
                setNumArtifacts(numArtifacts + 1);
                break;
            }
            case "Creature": {
                addSelectedCard(cardCopy, selectedCreatures);
                setSelectedCreatures([...selectedCreatures]);
                setNumCreatures(numCreatures + 1);
                break;
            }
            case "Enchantment": {
                addSelectedCard(cardCopy, selectedEnchantments);
                setSelectedEnchantments([...selectedEnchantments]);
                setNumEnchantments(numEnchantments + 1);
                break;
            }
            case "Instant": {
                addSelectedCard(cardCopy, selectedInstants);
                setSelectedInstants([...selectedInstants]);
                setNumInstants(numInstants + 1);
                break;
            }
            case "Land": {
                addSelectedCard(cardCopy, selectedLands);
                setSelectedLands([...selectedLands]);
                setNumLands(numLands + 1);
                break;
            }
            case "Sorcery": {
                addSelectedCard(cardCopy, selectedSorceries);
                setSelectedSorceries([...selectedSorceries]);
                setNumSorceries(numSorceries + 1);
                break;
            }
        }
    }

    useEffect(() => {
        setTotalCards(numCreatures + numInstants + numArtifacts + numEnchantments + numLands + numSorceries);
    }, [numCreatures, numInstants, numArtifacts, numEnchantments, numLands, numSorceries]);

    return (
        <div className="App">

            {/* DECK BUILDER SEARCH BAR AND TABLE */}
            <Stack sx={{ width: '70%', marginTop: 5 }} spacing={2}>
                <Typography variant="h2">Deck Builder</Typography>
                <Stack direction="row" spacing={2}>
                    <TextField
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        sx={{ width: '100%' }}
                        label="Search for a card..."
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => searchCard()}>
                        Search
                    </Button>
                </Stack>
                <DeckBuilderTable filteredCards={filteredCards} addCardCallback={addCardCallback} />
            </Stack>


            {/* SIDE BAR FOR CARD LIST */}
            <Drawer sx={{
                width: '20%',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '20%',
                    boxSizing: 'border-box',
                }}}
                variant="permanent"
                anchor="right">

                <Toolbar>
                    <Stack spacing={1} sx={{ width: '100%', textAlign: 'center', marginTop: 1, marginBottom: 1 }}>
                        <Typography variant="h5">Card List</Typography>
                        <Typography variant="body1">Total Cards: {totalCards}</Typography>
                    </Stack>
                </Toolbar>
                <Divider />
                <List sx={{ marginLeft: 3, marginRight: 3 }}>
                    <ListItem key={0} disablePadding>
                        <CardListAccordion
                            name="Artifacts"
                            numItems={numArtifacts}
                            selectedCards={selectedSorceries} />
                    </ListItem>
                    <ListItem key={1} disablePadding>
                        <CardListAccordion
                            name="Creatures"
                            numItems={numCreatures}
                            selectedCards={selectedCreatures} />
                    </ListItem>
                    <ListItem key={2} disablePadding>
                        <CardListAccordion
                            name="Enchantments"
                            numItems={numEnchantments}
                            selectedCards={selectedEnchantments} />
                    </ListItem>
                    <ListItem key={3} disablePadding>
                        <CardListAccordion
                            name="Instants"
                            numItems={numInstants}
                            selectedCards={selectedInstants} />
                    </ListItem>
                    <ListItem key={4} disablePadding>
                        <CardListAccordion
                            name="Lands"
                            numItems={numLands}
                            selectedCards={selectedLands} />
                    </ListItem>
                    <ListItem key={5} disablePadding>
                        <CardListAccordion
                            name="Sorceries"
                            numItems={numSorceries}
                            selectedCards={selectedSorceries} />
                    </ListItem>
                </List>
            </Drawer>
            
        </div>
    );
}