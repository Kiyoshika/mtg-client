import { useDrop } from "react-dnd";
import SlotCard from "./SlotCard";

export default function CardSlot({ card, zoneIdx, slotIdx, addCardToSlotCallback }) {
    const [collectedProps, drop] = useDrop(() => ({
        accept: 'handCard',
        drop: (item, monitor) => {
            addCardToSlotCallback(zoneIdx, slotIdx, item.card, item.handIdx);
        }
    }));

    return (
        <div>
            { card === null ?
                <div ref={drop} style={{ border: '1px dashed white', width: '100px', height: '140px' }} />
            : <SlotCard card={card} />
        }
        </div>
    );
}