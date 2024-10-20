import { Button, Divider, Drawer, List, ListItem, Stack, TextField, Toolbar, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import CardListAccordion from "./CardListAccordion";
import DeckBuilderTable from "./DeckBuilderTable";
import CardArray from "./objects/cards/CardArray";
import { CardArena } from "./objects/cards/CardArena";

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

    const artifactCards = new CardArray(numArtifacts, setNumArtifacts, selectedArtifacts, setSelectedArtifacts);
    const creatureCards = new CardArray(numCreatures, setNumCreatures, selectedCreatures, setSelectedCreatures);
    const enchantmentCards = new CardArray(numEnchantments, setNumEnchantments, selectedEnchantments, setSelectedEnchantments);
    const instantCards = new CardArray(numInstants, setNumInstants, selectedInstants, setSelectedInstants);
    const landCards = new CardArray(numLands, setNumLands, selectedLands, setSelectedLands);
    const sorceryCards = new CardArray(numSorceries, setNumSorceries, selectedSorceries, setSelectedSorceries);

    const cardArena = new CardArena(totalCards, setTotalCards);
    cardArena.addCardArray('Artifact', artifactCards);
    cardArena.addCardArray('Creature', creatureCards);
    cardArena.addCardArray('Enchantment', enchantmentCards);
    cardArena.addCardArray('Instant', instantCards);
    cardArena.addCardArray('Land', landCards);
    cardArena.addCardArray('Sorcery', sorceryCards);

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
    /* TODO: replace this with the new CardInfo.js object */
    const cardDatabase = [
        { type: 'Instant', name: 'Blueberry Shake', description: 'Some fake card', mana: '3B', qty: 0, imageURL: 'https://cards.scryfall.io/normal/front/6/d/6da045f8-6278-4c84-9d39-025adf0789c1.jpg?1562404626'},
        { type: 'Creature', name: 'Green Goblin', description: 'ooga booga', mana: '1G', power: 1, toughness: 1, qty: 0, imageURL: 'https://cards.scryfall.io/normal/front/6/d/6da045f8-6278-4c84-9d39-025adf0789c1.jpg?1562404626'},
        { type: 'Creature', name: 'Batman', description: "I'm batman", mana: '5BB', power: 5, toughness: 4, qty: 0, imageURL: 'https://cards.scryfall.io/normal/front/6/d/6da045f8-6278-4c84-9d39-025adf0789c1.jpg?1562404626'}
    ]

    const searchCard = () => {
        const filteredCards = cardDatabase.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.description.toLowerCase().includes(searchText.toLowerCase));
        setFilteredCards(filteredCards);
    }

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
                <DeckBuilderTable
                    filteredCards={filteredCards}
                    cardArena={cardArena} />
            </Stack>

            {/* SIDE BAR FOR CARD LIST */}
            <Drawer sx={{
                width: '25%',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '25%',
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
                            type="Artifact"
                            cardArena={cardArena} />
                    </ListItem>
                    <ListItem key={1} disablePadding>
                        <CardListAccordion
                            name="Creatures"
                            type="Creature"
                            cardArena={cardArena} />
                    </ListItem>
                    <ListItem key={2} disablePadding>
                        <CardListAccordion
                            name="Enchantments"
                            type="Enchantment"
                            cardArena={cardArena} />
                    </ListItem>
                    <ListItem key={3} disablePadding>
                        <CardListAccordion
                            name="Instants"
                            type="Instant"
                            cardArena={cardArena} />
                    </ListItem>
                    <ListItem key={4} disablePadding>
                        <CardListAccordion
                            name="Lands"
                            type="Land"
                            cardArena={cardArena} />
                    </ListItem>
                    <ListItem key={5} disablePadding>
                        <CardListAccordion
                            name="Sorceries"
                            type="Sorcery"
                            cardArena={cardArena} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}