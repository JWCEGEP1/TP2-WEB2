import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@mui/material";
import AjoutNouvelle from "../../composant/AjoutNouvelle.jsx";


export default function DialogAjoutNouvelle({ open, onClose, onAddNouvelle }) {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Ajouter une nouvelle</DialogTitle>
            <DialogContent>
                <AjoutNouvelle handleAddNews={onAddNouvelle} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Fermer</Button>
            </DialogActions>
        </Dialog>
    );
}

