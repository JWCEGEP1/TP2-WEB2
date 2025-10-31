import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

/**
 * Ce composant est utilisé pour crée une nouvelle
 * @param handleAddNews est une référence vers la méthode ajout de nouvelles dans le parent
 * @returns {JSX.Element} Les champs de créations d'une nouvelle
 *
 */
export default function AjoutNouvelle({handleAddNews}) {

    function ajout(e) {
        e.preventDefault();
        const formData = new FormData(event.target)
        const valeurForm = Object.fromEntries(formData.entries())
        handleAddNews(valeurForm)
        alert("Nouvelle créée !");
    }

    return <>
        <div>
            <h1>Creation d'une nouvelle!</h1>
            <form onSubmit={ajout}>
                <TextField name="titre" label="Titre" variant="outlined" fullWidth margin="normal" required/>
                <TextField name="date" label="Date (YYYY-MM-JJ) " variant="outlined" fullWidth margin="normal" required/>
                <TextField name="url" label="Image (Url)" variant="outlined" fullWidth margin="normal" required/>
                <TextField name="resume" label="Résumé" variant="outlined" fullWidth margin="normal" required/>
                <TextField
                    name="texte"
                    label="Texte"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    required
                />
                <TextField name="nbRef" label="Référence" variant="outlined" fullWidth margin="normal" required/>

                <Button type="submit" variant="contained" color="primary">
                    Créer la nouvelle
                </Button>
            </form>
        </div>
    </>
}