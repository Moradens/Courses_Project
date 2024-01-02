import '../index.css';

const dataKurzy = [
    {
        "nazev": "Kurz 1",
        "prednasejici": "Dr. Smith",
        "misto": "Los Angeles",
        "datum": "2023-03-21",
        "jeNove": true
    },
    {
        "nazev": "Kurz 2",
        "prednasejici": "Prof. Johnson",
        "misto": "Los Angeles",
        "datum": "2023-08-26",
        "jeNove": true
    },
    {
        "nazev": "Kurz 3",
        "prednasejici": "Dr. Brown",
        "misto": "Chicago",
        "datum": "2023-08-23",
        "jeNove": true
    },
    {
        "nazev": "Kurz 4",
        "prednasejici": "Dr. Williams",
        "misto": "New York",
        "datum": "2023-11-03",
        "jeNove": true
    },
    {
        "nazev": "Kurz 5",
        "prednasejici": "Prof. Davis",
        "misto": "Houston",
        "datum": "2023-11-05",
        "jeNove": false
    },
    {
        "nazev": "Kurz 6",
        "prednasejici": "Prof. Davis",
        "misto": "New York",
        "datum": "2023-11-10",
        "jeNove": true
    },
    {
        "nazev": "Kurz 7",
        "prednasejici": "Dr. Williams",
        "misto": "New York",
        "datum": "2023-09-22",
        "jeNove": true
    },
];

const Kurz = ({ kurz }) => {
    const { nazev, prednasejici, misto, datum, jeNove } = kurz;

    return (
        <div className="kurzy-karta">
            <div className="nove">
                <h2>{nazev}</h2>
                {jeNove && <p className="novy-kurz"><b>New</b></p>}
            </div>
            <p className="misto">Location: {misto}</p>
            <p className="datum">Date: {new Date(datum).toLocaleDateString()}</p>
            <button onClick={() => alert(`Přihlásit se do ${nazev}`)}>
                Enroll
            </button>
            <p>🧍Speaker Name: {prednasejici}</p>
        </div>
    );
};

export const SeznamKurzu = () => {
    return (
        <div className="kurzy-kontejner">
            {dataKurzy.map((kurz, index) => (
                <Kurz key={index} kurz={kurz} />
            ))}
        </div>
    );
};
