import { useContext } from "react";
import UserContext from "../context/UtilisateurContext.jsx";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

/**
 * permet de choisir un utilisateur actif
 * permet de changer d'utilisateur
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function SelecteurUtilisateur() {
    const { utilisateurs, currentUser, setCurrentUser } = useContext(UserContext);

    function handleChange(event) {
        const selectedId = Number(event.target.value);
        const selectedUser = utilisateurs.find(utilisateur => utilisateur.id === selectedId);
        setCurrentUser(selectedUser);
    }

    return (
        <FormControl size="small" sx={{ minWidth: 200, color: "white" }}>
            <InputLabel sx={{ color: "white" }}>Utilisateur</InputLabel>
            <Select
                value={currentUser.id}
                onChange={handleChange}
                label="Utilisateur"
                sx={{
                    color: "white",
                    ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                    "& .MuiSvgIcon-root": { color: "white" }
                }}
            >
                {utilisateurs.map(user => (
                    <MenuItem key={user.id} value={user.id}>
                        {user.name} ({user.role})
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    );
}
