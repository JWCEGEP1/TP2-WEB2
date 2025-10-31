import Button from "@mui/material/Button";
import OutlinedCard from "../ressources/MUI/OutlinedCard.jsx";
import "../ressources/statistiques.css"

/**
 * Composant qui affiche la page statistique
 * @param onQuit Une référence vers une méthode qui change l'état de l'affichage de la page
 * @param tabNouvelles le tableau de nouvelle courrant que la page statistique est afficher
 * @returns {JSX.Element} Le composant de la page statistique
 */
export default function PageStatistiques({onQuit, tabNouvelles}) {
    /**
     * Cette methode sert a retourner la taille de la nouvelle la plus courte
     * @returns {number} La taille de la nouvelle la plus courte en terme de characteres
     */
    function getTailleNouvelleCourte() {
        let tailleLaPlusPetite = tabNouvelles.filter(nouvelle => typeof nouvelle.texte === "string").sort((a, b) => a.texte.length - b.texte.length);
        return tailleLaPlusPetite[0].texte.length;
    }

    /**
     * Cette méthode sert a retourner la taille de la nouvelle la plus grande
     * @returns {number} La taille de la nouvelle la plus grande en terme de characteres
     */
    function getTailleNouvelleLongue() {
        let tailleLaPlusGrande = tabNouvelles.filter(nouvelle => typeof nouvelle.texte === "string").sort((a, b) => b.texte.length - a.texte.length);
        return tailleLaPlusGrande[0].texte.length;
    }

    /**
     * Cette méthode sert a retourner la moyenne de characters par nouvelles
     * @returns {number} La taille moyenne de tous les nouvelles
     */
    function getTaillesMoyenne() {
        let longueurTotal = 0;
        tabNouvelles.forEach(nouvelle => {
            longueurTotal += nouvelle.texte.length;
        })
        return longueurTotal / tabNouvelles.length
    }

    /**
     * Cette méthode retourne la date la plus ancienne dans tous les nouvelles
     * @returns {Date} retourne la date la plus ancienne de tous les nouvelles
     */
    function getDateLaPlusAncienne() {
        let dateArray = [];
        tabNouvelles.forEach(nouvelle => {
            if (!isNaN(new Date(nouvelle.date).valueOf()))
                dateArray.push(new Date(nouvelle.date));
        })

        return new Date(Math.min.apply(null, dateArray));
    }

    /**
     * Cette méthode retourne la date la plus récente dans tous les nouvelles
     * @returns {Date} Retourne la date la plus récente dans tous les nouvelles
     */
    function getDateLaPlusRecente() {
        let dateArray = [];
        tabNouvelles.forEach(nouvelle => {
            if (!isNaN(new Date(nouvelle.date).valueOf()))
                dateArray.push(new Date(nouvelle.date));
        })
        return new Date(Math.max.apply(null, dateArray));
    }

    const criteres = JSON.parse(localStorage.getItem("tabCriteres")) || []

    /**
     * Cette méthode retourne le nombre de nouvelles correspondantes au mot clé
     * @param motCle le mot clé correspondant
     * @returns {*} Le nombres de nouvelles correspondent à x critère
     */

    function getNouvellesCorrespondantebyMotCle() {
        const nouvellesFiltrees = criteres.length === 0
            ? tabNouvelles
            : tabNouvelles.filter(nouvelle =>
                criteres.some(critere => {
                    const valeur = nouvelle[critere.champ]?.toLowerCase() || "";
                    return valeur.includes(critere.motCle);
                })
            );
        return nouvellesFiltrees.length;
    }


    let pageStatistique = <>

        <h1 className={"statistiqueTitre"}>Page Statistique</h1>
        <div className={"statistiqueBox"}>

            <OutlinedCard title={"Nombre de nouvelles :"} answer={tabNouvelles.length}></OutlinedCard>
            <OutlinedCard title={"La taille de la nouvelle la plus longue et la plus courte :"}
                          answer={getTailleNouvelleLongue() + " et " + getTailleNouvelleCourte()}></OutlinedCard>
            <OutlinedCard title={"La taille moyenne des nouvelles (en nombre de caractères) :"}
                          answer={getTaillesMoyenne()}></OutlinedCard>
            <OutlinedCard title={"La date de la plus ancienne nouvelle et celle de la plus récente : "}
                          answer={getDateLaPlusAncienne().toString() + "et" + getDateLaPlusRecente().toString()}></OutlinedCard>
            <h2 className={"statistiqueTitre"}>Le nombre de nouvelles correspondant à chaque critère de recherche :</h2>
            {criteres.map((item) => {
                return <OutlinedCard title={"Critère :" + item.motCle}
                                     answer={"NB Nouvelles Correspondant : " + getNouvellesCorrespondantebyMotCle()}> </OutlinedCard>
            })}
        </div>
        <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
            <Button variant="contained" color="primary" onClick={onQuit}>
                Page Nouvelles
            </Button>
        </div>
    </>


    return <>{pageStatistique}</>
}