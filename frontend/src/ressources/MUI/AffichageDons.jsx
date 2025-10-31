export default function AffichageDons({ montantDons, onQuitter }) {
    return (
        <div>
            <h1>Nombre Total de dons : {montantDons}$</h1>
            <button onClick={onQuitter}>Retourner aux nouvelles</button>
        </div>
    );
}
