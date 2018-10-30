export const projectData = [
    {
        name: 'Virtuaaliluonto',
        type: 'Kouluprojekti',
        tags: ['jQuery', 'Google Maps API', 'Google Street View', 'Bootstrap'],
        text: 'Kouluprojektina ryhmässä toteuttamamme "seikkailupeli", jossa seikkaillaan Kolin kansallismaisemissa. Tavoitteena projektissa oli pyrkiä pelillistämään matkailua jollain tapaa. Opin projektissa paljon etenkin Google Maps API:n käyttöä.',
        published: new Date(2016, 9, 1, 0, 0, 0, 0),
        image: ['virtualnature.png', 'virtualnature2.png'],
        github: 'https://github.com/roopertti/Virtuaaliluonto',
        site: null
    },
    {
        name: 'Partypeli',
        type: 'Oma projekti',
        tags: ['Node.js', 'Express.js','Angular 1.x (vanha)', 'Bootstrap'],
        text: 'Tyypillinen korttipakalla pelattava bilepeli luotuna digitaaliseen formaattiin. Projekti ei koskaan ihan valmistunut, mutta opetti paljon front-end puolen kehittämistä. Nykyään tosin Angular 1.x on hyvin pitkälti käytöstä jo poistunut, mutta ajoi asiansa tuolloin.',
        published: new Date(2017, 1, 1, 0, 0, 0, 0),
        image: 'partypeli.png',
        github: null,
        site: null
    },
    {
        name: 'Chat-sovellus',
        type: 'Oma projekti',
        tags: ['Node.js', 'Express.js', 'Socket.io', 'jQuery', 'Bootstrap'],
        text: 'Ensimmäinen kokeiluni Socket.io kirjaston kanssa. Toteutin verkon yli toimivan chatin, jossa keskustelu tallentui palvelimen sen hetkiseen välimuistiin. Opettavainen kokemus sen suhteen, miten erilaisia tapahtumia tulee käsitellä palvelimen puolella.',
        published: new Date(2016, 10, 1, 0, 0, 0, 0),
        image: 'chatapp.png',
        github: 'https://github.com/roopertti/ChatApp',
        site: null
    },
    {
        name: 'Kiinteistöhuolto-sovellus',
        type: 'Kouluprojekti',
        tags: ['Node.js', 'Express.js', 'Angular', 'Google Firebase', 'MaterialUI'],
        text: 'Suhteellisen tuore projekti, joka toteutettiin osana koulukurssia. Työskentelin pääosin projektissamme itsenäisesti front-endin parissa. Minulle tuli hyvin tutuksi uudistuneen Angularin toiminnot, sekä TypeScript-laajennus. Myös Googlen suosittu MaterialUI-kirjasto tuli tutuksi.',
        published: new Date(2018, 5, 1, 0, 0, 0, 0),
        image: ['kiinteisto1.png', 'kiinteisto2.png'],
        github: null,
        site: null
    },
    {
        name: 'Kuraattorin ajanvaraus',
        type: 'Projekti kesätyönä',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'Angular 1.x (vanha)', 'Bootstrap'],
        text: 'Kesätöikseni toisen opiskelijan kanssa kehittelemäni ajanvarausjärjestelmä, jonka avulla pystyttiin helpottamaan ajanvarausprosessia opintokuraattorille.',
        published: new Date(2017, 5, 1, 0, 0, 0, 0),
        image: ['kuraattori.png', 'kuraattori2.png'],
        github: null,
        site: 'https://web.karelia.fi/opintokuraattorin-ajanvaraus/'
    },
    {
        name: 'Opiskelijakalenteri',
        type: 'Opinnäytetyön toimeksianto',
        tags: ['React', 'Redux', 'Google Firebase', 'Google Cloud Functions','Jest', 'Enzyme', 'Styled Components'],
        text: 'Opinnäytetyötäni varten toteutuksen alla olevan opiskelijatapahtumakalenteri. Kalenteri tehdään yhden sivun sovelluksena (SPA) käyttämällä nykyään hyvin suosittuja React- ja Redux-kirjastoja. Ominaisuudet pyrtään myös yksikkötestaamaan huolellisesti Jest- ja Enzyme-työkalujen avulla.',
        published: new Date(2018, 10, 1, 0, 0, 0, 0),
        image: ['oppari1.png', 'oppari2.png'],
        github: null,
        site: 'https://student-events.firebaseapp.com/'
    },
    {
        name: 'Tämä portfolio sivu!',
        type: 'Oma projekti',
        tags: ['React', 'Gatsby', 'Styled Components'],
        text: 'Tässä yhteen viikonloppuun nopeasti kasaan paiskittu perus staattisesta sisällöstä koostuva sivusto, tavoitteena kokeilla Gatsby-työkalun ominaisuuksia yhdessä React:in kanssa. Toivottavasti portfolio on asiansa ajanut tähän asti!',
        published: new Date(2018, 10, 1, 0, 0, 0, 0),
        image: 'portfolio.png',
        github: 'https://github.com/roopertti/portfolio',
        site: null
    }
];

export const returnProjectsSorted = () => (projectData.sort((a, b) => {
    return b.published.getTime() - a.published.getTime();
}));

export const getImageLinks = () => {
    const imageFiles = require.context('./images/projektikuvat', false, /\.(png|jpe?g|svg)$/);
    const keys = imageFiles.keys();
    const imageSources = keys.map(imageFiles);
    let images = {};
    for(const index of keys.keys()) {
        const key = keys[index].substring(2);

        images = { ...images, [key]: imageSources[index] };
    }

    return images;
}