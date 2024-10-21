import { useDrop } from "react-dnd";
import SlotCard from "./SlotCard";

export default function CardSlot({ card, zoneIdx, slotIdx, addCardToSlotCallback }) {
    const [collectedProps, drop] = useDrop(() => ({
        accept: 'handCard',
        drop: (item, monitor) => {
            addCardToSlotCallback(zoneIdx, slotIdx, item.handIdx);
        }
    }));

    let handCard = <SlotCard card={card} zoneIdx={zoneIdx} slotIdx={slotIdx} />
    let emptySlot = <div ref={drop} style={{ border: '1px dashed white', width: '100px', height: '140px' }} />
    if (card !== null)
        emptySlot = handCard;

    return (
        emptySlot
    );
}