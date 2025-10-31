import './App.css'
import {useState} from "react";
import UtilisateurContext from "./context/UtilisateurContext.jsx";

import useNouvelles from "./script/useNouvelles.js";
import useCriteres from "./script/useCriteres.js";
import useDons from "./script/useDons.js";

import PersistentDrawerLeft from "./ressources/MUI/Drawer.jsx";
import SectionNouvelles from "./composant/SectionNouvelles.jsx";
import PageStatistiques from "./composant/pageStatistiques.jsx";
import DialogAjoutNouvelle from "./ressources/MUI/DialogAjoutNouvelle.jsx";
import DialogRecherche from "./ressources/MUI/DialogRecherche.jsx";
import AffichageDons from "./ressources/MUI/AffichageDons.jsx";

function App() {
    const [utilisateurs] = useState(JSON.parse(localStorage.getItem("utilisateurs")));
    const [currentUser, setCurrentUser] = useState(utilisateurs[0]);

    const {nouvelles, ajouterNouvelle, modifierNouvelle, supprimerNouvelle, toggleLike} = useNouvelles(currentUser);
    const {criteres, ajouterCritere, supprimerCritere} = useCriteres();
    const {montantDons, ajouterDon} = useDons();

    const [afficherStats, setAfficherStats] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isInAfficherDons, setIsInAfficherDons] = useState(false);
    const [openRecherche, setOpenRecherche] = useState(false);
    const [openAjout, setOpenAjout] = useState(false);


    /**
     * Filtre les nouvelles en fonction des critères définis.
     *
     *  Si aucun critère n'est défini toutes les nouvelles sont renvoyé sans filtrage.
     *  Chaque nouvelle est comparée aux critères et seule celles qui correspondent à un ou plusieurs critères sont gardé.
     *
     */
    const nouvellesFiltrees = criteres.length === 0
        ? nouvelles
        : nouvelles.filter((nouvelle) =>
            criteres.some((critere) => {
                const valeur = nouvelle[critere.champ]?.toLowerCase() || "";
                return valeur.includes(critere.motCle);
            })
        );

    function handleMontantDons() {
        ajouterDon(25);
    }

    return (
        <UtilisateurContext.Provider value={{utilisateurs, currentUser, setCurrentUser}}>
            <PersistentDrawerLeft
                onToggleStats={() => setAfficherStats(true)}
                onToggleRecherche={() => setOpenRecherche(true)}
                setIsEditing={setIsEditing}
                onToggleAjout={() => setOpenAjout(true)}
                onToggleDons={() => setIsInAfficherDons(!isInAfficherDons)}
            />

            {afficherStats ? (
                <PageStatistiques tabNouvelles={nouvelles} onQuit={() => setAfficherStats(false)}/>
            ) : isInAfficherDons ? (
                <AffichageDons montantDons={montantDons} onQuitter={() => setIsInAfficherDons(false)}/>
            ) : (
                <SectionNouvelles
                    nouvelles={nouvellesFiltrees}
                    onUpdate={modifierNouvelle}
                    onDelete={supprimerNouvelle}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    handleMontantDons={handleMontantDons}
                    onToggleLike={toggleLike}
                />
            )}

            <DialogRecherche
                open={openRecherche}
                onClose={() => setOpenRecherche(false)}
                criteres={criteres}
                onAddCritere={ajouterCritere}
                onDeleteCritere={supprimerCritere}
            />

            <DialogAjoutNouvelle
                open={openAjout}
                onClose={() => setOpenAjout(false)}
                onAddNouvelle={ajouterNouvelle}
            />
        </UtilisateurContext.Provider>
    );
}

export default App;
