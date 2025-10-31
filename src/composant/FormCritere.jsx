import { useContext, useState } from "react";
import UserContext from "../context/UtilisateurContext.jsx";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

/**
 *  Permet à un utilisateur de créer un critère de recherche.
 *  Utilise le UserContext pour avoir l'utilisateur courant.
 * @param onAddCritere
 * @returns {JSX.Element}
 * @constructor
 */
export default function FormCritere({ onAddCritere }) {
    const { currentUser } = useContext(UserContext);
    const [motCle, setMotCle] = useState("");
    const [champ, setChamp] = useState("titre");

    function handleSubmit(event) {
        event.preventDefault();

        const nouveauCritere = {
            idCritere: Date.now().toString(),
            refPersonne: currentUser.name,
            dateCreation: new Date().toISOString().split("T")[0],
            motCle: motCle.trim().toLowerCase(),
            champ
        };

        onAddCritere(nouveauCritere);
        setMotCle("");
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>Champ</InputLabel>
                <Select value={champ} onChange={(e) => setChamp(e.target.value)}>
                    <MenuItem value="titre">Titre</MenuItem>
                    <MenuItem value="resume">Résumé</MenuItem>
                    <MenuItem value="texte">Texte</MenuItem>
                    <MenuItem value="date">Date</MenuItem>
                </Select>
            </FormControl>

            <TextField
                label="Mot-clé"
                variant="outlined"
                value={motCle}
                onChange={(e) => setMotCle(e.target.value)}
                required
            />

            <Button type="submit" variant="contained">Ajouter</Button>
        </form>
    );
}
