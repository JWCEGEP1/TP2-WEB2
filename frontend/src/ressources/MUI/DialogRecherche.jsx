import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@mui/material";
import SectionRecherche from "../../composant/SectionRecherche.jsx";


export default function DialogRecherche({ open, onClose, criteres, onAddCritere, onDeleteCritere }) {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Rechercher</DialogTitle>
            <DialogContent>
                <SectionRecherche criteres={criteres} onAddCritere={onAddCritere} onDeleteCritere={onDeleteCritere} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Fermer</Button>
            </DialogActions>
        </Dialog>
    );
}



