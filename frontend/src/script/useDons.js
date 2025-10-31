import { useState, useEffect } from "react";

export default function useDons() {
    const [montantDons, setMontantDons] = useState(
        JSON.parse(localStorage.getItem("totalDesDons")) ?? 0
    );

    useEffect(() => {
        localStorage.setItem("totalDesDons", JSON.stringify(montantDons));
    }, [montantDons]);

    function ajouterDon(montant) {
        setMontantDons((dons) => dons + montant);
    }

    return { montantDons, ajouterDon };
}
