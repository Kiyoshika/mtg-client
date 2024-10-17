import { Accordion, AccordionSummary, AccordionDetails, ListItemText, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CardListAccordion({name, numItems, selectedCards}) {
    return (
        <Accordion sx={{ width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {name} ({numItems})
            </AccordionSummary>
            <AccordionDetails>
                <Divider />
                {selectedCards.map((card) => (
                    <ListItemText sx={{ marginLeft: 5 }} primary={card.name + " (" + card.qty + ")"} />
                ))}
            </AccordionDetails>
        </Accordion>
    );
}