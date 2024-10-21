import { Stack, Card } from "@mui/material";
import { useDrag } from "react-dnd";
import './ImageCard.css';

export default function HandCard({ card, handIdx, }) {
    const [collected, drag, dragPreview] = useDrag(() => ({
        type: 'handCard',
        item: {card: card, handIdx: handIdx}
    }));

    return (
        <Stack direction="row">
            <Card ref={drag} {...collected} className="imageCard" sx={{ zIndex: 2, width: '100px', height: '140px', backgroundColor: 'white', backgroundImage: 'url("' + card.imageURL + '")', backgroundSize: 'cover' }} />
            <img className="hide" style={{ width: '240px', height: '360px' }} src={card.imageURL} />
        </Stack>
    );
}