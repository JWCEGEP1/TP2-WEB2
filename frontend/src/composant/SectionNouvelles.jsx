import {useEffect, useState} from "react";
import { useContext } from "react";
import UtilisateurContext from "../context/UtilisateurContext.jsx";
import Nouvelle from "./Nouvelle.jsx";
import Button from "@mui/material/Button";
import { Alert, Dialog, DialogContent, DialogTitle, DialogActions } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ActionAreaCard from "../ressources/MUI/ActionAreaCard.jsx";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function SectionNouvelles({
                                             nouvelles,
                                             onUpdate,
                                             onDelete,
                                             isEditing,
                                             setIsEditing,
                                             handleMontantDons,
                                             onToggleLike
                                         }) {
    const [open, setOpen] = useState(false);
    const [nouvelleCourante, setNouvelleCourante] = useState(null);

    const { currentUser } = useContext(UtilisateurContext);


/**
 *  Le composant qui contient la sections avec tous les nouvelles
 * @param nouvelles le tableau des nouvelles
 * @param onUpdate un référence vers une méthode dans le composant parent qui permet de mettre à jour la nouvelle mis à jour dans le tableau de nouvelles
 * @param onDelete un référence vers une méthode dans le composant parent qui permet de supprimer la nouvelle dans le tableau de nouvelles
 * @param isEditing la valeur de l'état si le composant doit être en mode édition
 * @param setIsEditing une référence vers la méthode dans le composant parent pour mettre à jours l'état isEditing
 * @param handleMontantDons une référence vers une méthode dans le composant parent pour mettre à jour les dons
 * @returns {JSX.Element} le composant jsx
 *
 */
    function handleOpenNouvelle(nouvelle) {
        setNouvelleCourante(nouvelle);
        setOpen(true);
    }

    useEffect(() => {
        if (nouvelleCourante) {
            const updated = nouvelles.find(nouvelle => nouvelle.nbref === nouvelleCourante.nbref);
            if (updated) setNouvelleCourante(updated);
        }
    }, [nouvelles]);

    return (
        <>
            {isEditing ? (
                // --- MODE EDITION ---
                <div className="nouvellesBox">
                    {nouvelles.map((nouvelle) => (
                        <Nouvelle
                            key={nouvelle.nbref}
                            date={nouvelle.date}
                            titre={nouvelle.titre}
                            nbref={nouvelle.nbref}
                            imgURL={nouvelle.imgURL}
                            resume={nouvelle.resume}
                            texte={nouvelle.texte}
                            isEditing={true}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                            setMontantDons={handleMontantDons}
                        />
                    ))}

                    <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setIsEditing(false)}
                        >
                            Page Nouvelles
                        </Button>
                    </div>

                </div>
            ) : (
                // --- MODE NORMAL ---
                <div className="nouvellesBox">
                    {nouvelles.length === 0 ? (
                        <Alert
                            severity="info"
                            sx={{ mt: 0.5, maxWidth: "600px", mx: "auto", textAlign: "center" }}
                        >
                            Aucune nouvelle ne correspond, veuillez essayer un autre filtre!
                        </Alert>
                    ) : (
                        <ImageList cols={3} gap={16}>
                            {nouvelles.map((nouvelle) => (
                                <ImageListItem
                                    key={nouvelle.nbref}
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => handleOpenNouvelle(nouvelle)}
                                >
                                    <img
                                        src={nouvelle.imgURL}
                                        alt={nouvelle.titre}
                                        loading="lazy"
                                        style={{
                                            objectFit: "cover",
                                            height: "200px",
                                            width: "100%",
                                        }}
                                    />
                                    <ImageListItemBar
                                        title={nouvelle.titre}
                                        subtitle={nouvelle.date}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    )}
                </div>
            )}

            {/* Dialog détail accessible en mode normal */}
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
                <DialogTitle>{nouvelleCourante?.titre}</DialogTitle>
                <DialogContent>
                    {nouvelleCourante && (
                        <>
                        <ActionAreaCard
                            Titre={nouvelleCourante.titre}
                            Date={nouvelleCourante.date}
                            NbRef={nouvelleCourante.nbref}
                            ImgUrl={nouvelleCourante.imgURL}
                            Resume={nouvelleCourante.resume}
                            Text={nouvelleCourante.texte}
                        />
                            <div style={{ marginTop: "20px", textAlign: "center" }}>
                                <Button
                                    variant={nouvelleCourante?.likes?.includes(currentUser.id) ? "contained" : "outlined"}
                                    color="secondary"
                                    onClick={() => onToggleLike(nouvelleCourante.nbref)}
                                >
                                    <ThumbUpIcon/>
                                    {nouvelleCourante?.likes?.length || 0}
                                </Button>
                            </div>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Fermer</Button>
                    <Button variant="contained" color="success" onClick={handleMontantDons}>
                        Ajouter don (+25 $)
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
