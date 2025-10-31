import {useState} from "react";
import "../ressources/nouvelles.css"
import ActionAreaCard from "../ressources/MUI/ActionAreaCard.jsx";
import FormPropsTextFields from "../ressources/MUI/FormPropsTextFields.jsx";
import Button from "@mui/material/Button";


export default function Nouvelle({titre, date, nbref, imgURL, texte, resume, isEditing, onUpdate, onDelete}){
    const [title, setTitre] = useState(titre);
    const [datee, setDate] = useState(date);
    const [imgURI, setImgUrl] = useState(imgURL);
    const [resumer, setResume] = useState(resume);
    const [text, setTexte] = useState(texte);

    let inputs = <></>;

    function handleChangeTitre() {
        setTitre(event.target.value)
    }


    function handleChangeDate() {
    setDate(event.target.value)
    }


    function handleChangeUrl() {
        setImgUrl(event.target.value)
    }

    function handleChangeResume() {
        setResume(event.target.value)
    }

    function handleChangeTexte() {
        setTexte(event.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault();
        onUpdate(nbref, {titre: title, date: datee, imgURL : imgURI, resume:resumer, texte: text})
        alert("Enregistrer")
    }

    function handleDelete(nbref) {
        onDelete(nbref)
    }

    if (isEditing) {
        inputs = (
            <div className="editNouvelleBox">
                <FormPropsTextFields
                    handleSubmit={handleSubmit}
                    handleChangeTitre={handleChangeTitre}
                    handleChangeDate={handleChangeDate}
                    handleChangeUrl={handleChangeUrl}
                    handleChangeResume={handleChangeResume}
                    handleChangeTexte={handleChangeTexte}
                />
                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                    <Button variant="contained" color="error" onClick={() => handleDelete(nbref)}>Supprimer</Button>
                </div>
            </div>
        );
    }


    return <>
        <ActionAreaCard Titre={title} Date={datee} NbRef={nbref} ImgUrl={imgURI} Resume={resumer} Text={text} handleMontantDons ></ActionAreaCard>
        {inputs}
    </>
}