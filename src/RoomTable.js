import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const columns = [
    { id: 'roomName', label: 'Room Name' },
    { id: 'numPlayers', label: 'Players' },
    { id: 'maxPlayers', label: 'Max Players' }
];

const rows = [
    { id: 0, roomName: 'My Room', numPlayers: 2, maxPlayers: 4 },
    { id: 1, roomName: "Cody's Basement", numPlayers: 3, maxPlayers: 3 }
];

export default function RoomTable() {
    return (
    <Paper sx={{ marginTop: 10, width: '30vw', overflow: 'hidden' }}>
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
                    {rows.map((row) => {
                        return (
                            <TableRow key={row.id}>
                                {columns.map((column) => {
                                    const value = row[column.id];
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
                                <Button variant="contained" color="success">Join</Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                <TableRow key={rows.length + 1}>
                    <TableCell key={0} align='center' colSpan={4}>
                        <Button sx={{ width: '80%' }} variant="outlined">Create New Room</Button>
                    </TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
    );
}