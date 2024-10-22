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
                <div ref={drop} style={{ boxShadow: '0 0 3px 3px #f2ff00', width: '100px', height: '140px' }} />
            : <SlotCard card={card} />
        }
        </div>
    );
}