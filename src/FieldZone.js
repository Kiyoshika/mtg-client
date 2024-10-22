import { Stack } from "@mui/material";
import CardSlot from "./CardSlot";

export default function FieldZone({ zoneCards, zoneIdx, addCardToSlotCallback }) {
    return (
        <Stack sx={{ marginLeft: 5, height: '100%', alignItems: 'center' }} direction="row" spacing={3}>
            {zoneCards.map((card, idx) => {
                return <CardSlot card={card} zoneIdx={zoneIdx} slotIdx={idx} addCardToSlotCallback={addCardToSlotCallback} />
            })}
        </Stack>
    );
}