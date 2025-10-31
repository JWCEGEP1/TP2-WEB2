import { useState, useEffect } from "react";

export default function useNouvelles(currentUser) {
    const [nouvelles, setNouvelles] = useState(
        JSON.parse(localStorage.getItem("tabNouvelle")) || []
    );

    useEffect(() => {
        localStorage.setItem("tabNouvelle", JSON.stringify(nouvelles));
    }, [nouvelles]);

    function ajouterNouvelle(nouvelleAAjouter) {
        const tabNouvellesadd = [
            ...nouvelles,
            {
                titre: nouvelleAAjouter.titre,
                date: nouvelleAAjouter.date,
                imgURL: nouvelleAAjouter.url,
                resume: nouvelleAAjouter.resume,
                texte: nouvelleAAjouter.texte,
                nbref: nouvelleAAjouter.nbRef,
                key: nouvelleAAjouter.nbRef,
                likes: []
            },
        ];
        setNouvelles(tabNouvellesadd);
    }

    function modifierNouvelle(nbref, champs) {
        const tabAUpdate = nouvelles.map((nouvelle) =>
            nouvelle.nbref === nbref
                ? {
                    ...nouvelle,
                    titre: champs.titre ?? nouvelle.titre,
                    date: champs.date ?? nouvelle.date,
                    imgURL: champs.url ?? nouvelle.imgURL,
                    resume: champs.resume ?? nouvelle.resume,
                    texte: champs.texte ?? nouvelle.texte,
                }
                : nouvelle
        );
        setNouvelles(tabAUpdate);
    }

    function supprimerNouvelle(nbref) {
        const tabAUpdate = nouvelles.filter((nouvelle) => nouvelle.nbref !== nbref);
        setNouvelles(tabAUpdate);
    }

    function toggleLike(nbref) {
        if (!currentUser) return;
        const userId = currentUser.id;

        const tabAUpdate = nouvelles.map((nouvelle) => {
            if (nouvelle.nbref === nbref) {
                const likes = nouvelle.likes || [];
                const newLikes = likes.includes(userId)
                    ? likes.filter((id) => id !== userId)
                    : [...likes, userId];

                return { ...nouvelle, likes: newLikes };
            }
            return nouvelle;
        });

        setNouvelles(tabAUpdate);
    }

    return { nouvelles, ajouterNouvelle, modifierNouvelle, supprimerNouvelle, toggleLike };
}
