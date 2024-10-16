import { Stack, Typography, TextField, Button } from "@mui/material";

export default function CreateRoom() {
    return (
        <div className="App">
            <Stack sx={{marginTop: 5 }} spacing={2}>
                <Typography variant="h2">Create New Room</Typography>
                <TextField required label="Room Name" />
                <TextField required type="number" label="Max Players" slotProps={{ inputLabel: { shrink: true }}} defaultValue={4} />
                <TextField required label="Room Password" />
                <Button variant="contained" color="success">Create</Button>
            </Stack>
        </div>
    );
}