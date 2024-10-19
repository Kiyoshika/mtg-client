import { Accordion, AccordionSummary, AccordionDetails, ListItemText, Divider, Button, Stack } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CardListAccordion({name, numItems, selectedCards, incrementCardCallback, decrementCardCallback}) {
    return (
        <Accordion sx={{ width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {name} ({numItems})
            </AccordionSummary>
            <AccordionDetails>
                <Divider sx={{ marginBottom: 2 }} />
                {selectedCards.map((card) => (
                    <Stack direction="row" sx={{ alignItems: 'center', marginBottom: 1 }} spacing={2}>
                        <ListItemText sx={{ marginLeft: 5 }} primary={card.name + " [" + card.qty + "]"} />
                        <Button onClick={() => incrementCardCallback(card) } sx={{ height: '25px', width: '10px' }} variant="outlined" color="success">+</Button>
                        <Button onClick={() => decrementCardCallback(card) } sx={{ height: '25px', width: '10px' }} variant="outlined" color="error">-</Button>
                    </Stack>
                ))}
            </AccordionDetails>
        </Accordion>
    );
}