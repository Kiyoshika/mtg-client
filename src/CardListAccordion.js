import { Accordion, AccordionSummary, AccordionDetails, ListItemText, Divider, Button, Stack } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CardListAccordion({ name, type, cardArena }) {
    return (
        <Accordion sx={{ width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {name} ({cardArena.getCardQty(type)})
            </AccordionSummary>
            <AccordionDetails>
                <Divider sx={{ marginBottom: 2 }} />
                {cardArena.getCardArray(type).getCards().map((card) => (
                    <Stack direction="row" sx={{ alignItems: 'center', marginBottom: 1 }} spacing={2}>
                        <ListItemText sx={{ marginLeft: 5 }} primary={card.name + " [" + card.qty + "]"} />
                        <Button onClick={() => cardArena.addCard(card) } sx={{ height: '25px', width: '10px' }} variant="outlined" color="success">+</Button>
                        <Button onClick={() => cardArena.removeCard(card) } sx={{ height: '25px', width: '10px' }} variant="outlined" color="error">-</Button>
                    </Stack>
                ))}
            </AccordionDetails>
        </Accordion>
    );
}