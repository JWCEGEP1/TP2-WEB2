import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export default function FormPropsTextFields({handleChangeTitre, handleChangeDate, handleChangeUrl, handleChangeResume, handleChangeTexte, handleSubmit}) {

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"

        >
            <div>
                <TextField
                    id="outlined-helperText"
                    label="Changer le titre"
                    placeholder={"Changer le titre"}
                    onChange={handleChangeTitre}
                    variant="filled"
                    sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
                <TextField
                    id="outlined-helperText"
                    label="Changer la date"
                    placeholder="Changer la date"
                    onChange={handleChangeDate}
                    variant="filled"
                    sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
                <TextField
                    id="outlined-helperText"
                    label="Changer l'image (URL)"
                    placeholder="Changer l'image (URL)"
                    onChange={handleChangeUrl}
                    variant="filled"
                    sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
                <TextField
                    id="outlined-helperText"
                    label="Changer le resumé"
                    placeholder="Changer le resumé"
                    onChange={handleChangeResume}
                    variant="filled"
                    sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
                <TextField
                    id="outlined-helperText"
                    label="Changer le texte"
                    placeholder="Changer le texte"
                    onChange={handleChangeTexte}
                    variant="filled"
                    sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
            </div>
                <Button variant="contained" color="primary" onClick={handleSubmit} type={"submit"}>Save</Button>
        </Box>
    );
}
