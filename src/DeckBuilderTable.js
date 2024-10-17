import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

const columns = [
    { id: 'image', label: 'Image' },
    { id: 'type', label: 'Type' },
    { id: 'name', label: 'Name' },
    { id: 'description', label: 'Description' },
    { id: 'mana', label: 'Mana' },
    { id: 'power', label: 'Power' },
    { id: 'toughness', label: 'Toughness' }
];

export default function DeckBuilderTable({ filteredCards, addCardCallback }) {
    return (
        <Paper sx={{ marginTop: 1, width: 'auto', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="Room Table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                sx={{ backgroundColor: 'black' }}
                                key={column.id}
                                align='center'
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        <TableCell
                            sx={{ backgroundColor: 'black' }}
                            key={99}
                            align='center'
                        >
                        Action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredCards.map((card) => {
                        return (
                            <TableRow key={card.id}>
                                {columns.map((column) => {
                                    const value = card[column.id];
                                    return (
                                        <TableCell
                                            key={column.id}
                                            align='center'
                                        >
                                        {value}
                                        </TableCell>
                                    );
                                })}
                                <TableCell
                                    key={99}
                                    align='center'
                                >
                                <Button variant="contained" color="success" onClick={() => addCardCallback(card) }>Add Card</Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
    );
}