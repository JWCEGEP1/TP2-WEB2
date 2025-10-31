
import FormCritere from "./FormCritere.jsx";
import ListeCriteres from "./ListeCriteres.jsx";


/**
 *
 * Responsable de l'affichage de la section de recherche. Il permet à l'utilisateur
 *  de rechercher des nouvelles par rapport a ses criteres.
 *  - FormCritere,  permet à l'utilisateur d'ajouter un nouveau critère.
 *  - ListeCriteres, affiche la liste des critères de recherche enregistrés et permet leur suppression.
 *
 *
 * @param criteres
 * @param onAddCritere
 * @param onDeleteCritere
 * @returns {JSX.Element}
 * @constructor
 */
export default function SectionRecherche({ criteres, onAddCritere, onDeleteCritere }) {
    return (
        <section>
            <h2>Recherche</h2>
            <FormCritere onAddCritere={onAddCritere} />
            <ListeCriteres criteres={criteres} onDeleteCritere={onDeleteCritere} />
        </section>
    );
}