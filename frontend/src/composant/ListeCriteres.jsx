import { Button } from "@mui/material";

/**
 *
 *  Composant React affichant la liste des critères de recherche enregistrés par l'utilisateur.
 *  Permet également de supprimer un critère via un bouton de suppression.
 *
 * @param criteres
 * @param onDeleteCritere
 * @returns {JSX.Element}
 * @constructor
 */

export default function ListeCriteres({ criteres, onDeleteCritere }) {
    return (
        <div>
            <h2>Critères enregistrés</h2>
            <ul>
                {criteres.map(critere => (
                    <li key={critere.idCritere}>
                        <strong>{critere.champ}</strong> : "{critere.motCle}"
                        --- (par {critere.refPersonne}) --- {critere.dateCreation}
                        <Button
                            onClick={() => onDeleteCritere(critere.idCritere)}
                            variant="outlined"
                            size="small"
                            color="error"
                            sx={{ ml: 1 }}
                        >
                            Supprimer
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
