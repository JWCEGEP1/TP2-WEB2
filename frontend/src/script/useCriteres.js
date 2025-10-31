import { useState, useEffect } from "react";

/**
 * Gere les critères de recherche .
 * Permet d'ajouter et de supprimer des critères tout en synchronisant l'état local avec le stockage local.
 * Les critères sont stockés dans le localStorage.
 *
 * @returns {{criteres: unknown, ajouterCritere: ajouterCritere, supprimerCritere: supprimerCritere}}
 */


export default function useCriteres() {
    const [criteres, setCriteres] = useState(
        JSON.parse(localStorage.getItem("tabCriteres")) || []
    );

    useEffect(() => {
        localStorage.setItem("tabCriteres", JSON.stringify(criteres));
    }, [criteres]);

    function ajouterCritere(critere) {
        setCriteres([...criteres, critere]);
    }

    function supprimerCritere(id) {
        setCriteres(criteres.filter((critere) => critere.idCritere !== id));
    }

    return { criteres, ajouterCritere, supprimerCritere };
}
