export const projectData = [
    {
        name: 'Virtuaaliluonto',
        type: 'Kouluprojekti',
        tags: ['jQuery', 'Google Maps API', 'Google Street View', 'Bootstrap'],
        text: 'Kouluprojektina ryhmässä toteuttamamme "seikkailupeli", jossa seikkaillaan Kolin kansallismaisemissa. Tavoitteena projektissa oli pyrkiä pelillistämään matkailua jollain tapaa. Opin projektissa paljon etenkin Google Maps API:n käyttöä.',
        published: new Date(2016, 10, 1, 0, 0, 0, 0),
        image: '',
        github: 'https://github.com/roopertti/Virtuaaliluonto',
        site: null
    },
    {
        name: 'Partypeli',
        type: 'Oma projekti',
        tags: ['Node.js', 'Express.js','Angular 1.x (vanha)', 'Bootstrap'],
        text: 'Tyypillinen korttipakalla pelattava bilepeli luotuna digitaaliseen formaattiin. Projekti ei koskaan ihan valmistunut, mutta opetti paljon front-end puolen kehittämistä. Nykyään tosin Angular 1.x on hyvin pitkälti käytöstä jo poistunut, mutta ajoi asiansa tuolloin.',
        published: new Date(2017, 1, 1, 0, 0, 0, 0),
        image: '',
        github: null,
        site: null
    },
    {
        name: 'Chat-sovellus',
        type: 'Oma projekti',
        tags: ['Node.js', 'Express.js', 'Socket.io', 'jQuery', 'Bootstrap'],
        text: 'Ensimmäinen kokeiluni Socket.io kirjaston kanssa. Toteutin verkon yli toimivan chatin, jossa keskustelu tallentui palvelimen sen hetkiseen välimuistiin. Opettavainen kokemus sen suhteen, miten erilaisia tapahtumia tulee käsitellä palvelimen puolella.',
        published: new Date(2016, 8, 1, 0, 0, 0, 0),
        image: '',
        github: 'https://github.com/roopertti/ChatApp',
        site: null
    },
    {
        name: 'Kiinteistöhuolto-sovellus',
        type: 'Kouluprojekti',
        tags: ['Node.js', 'Express.js', 'Angular', 'Google Firebase', 'MaterialUI'],
        text: 'Suhteellisen tuore projekti, joka toteutettiin osana koulukurssia. Työskentelin pääosin projektissamme itsenäisesti front-endin parissa. Minulle tuli hyvin tutuksi uudistuneen Angularin toiminnot, sekä TypeScript-laajennus. Myös Googlen suosittu MaterialUI-kirjasto tuli tutuksi.',
        published: new Date(2018, 5, 1, 0, 0, 0, 0),
        image: '',
        github: null,
        site: null
    },
    {
        name: 'Kuraattorin ajanvaraus',
        type: 'Projekti kesätyönä',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'Angular 1.x (vanha)', 'Bootstrap'],
        text: 'Kesätöikseni toisen opiskelijan kanssa kehittelemäni ajanvarausjärjestelmä, jonka avulla pystyttiin helpottamaan ajanvarausprosessia opintokuraattorille.',
        published: new Date(2017, 5, 1, 0, 0, 0, 0),
        image: '',
        github: null,
        site: 'https://web.karelia.fi/opintokuraattorin-ajanvaraus/'
    },
    {
        name: 'Opiskelijakalenteri',
        type: 'Opinnäytetyön toimeksianto',
        tags: ['React', 'Redux', 'Google Firebase', 'Google Cloud Functions','Jest', 'Enzyme', 'Styled Components'],
        text: 'Opinnäytetyötäni varten toteutuksen alla olevan opiskelijatapahtumakalenteri. Kalenteri tehdään yhden sivun sovelluksena (SPA) käyttämällä nykyään hyvin suosittuja React- ja Redux-kirjastoja. Ominaisuudet pyrtään myös yksikkötestaamaan huolellisesti Jest- ja Enzyme-työkalujen avulla.',
        published: new Date(2018, 10, 1, 0, 0, 0, 0),
        image: '',
        github: null,
        site: 'https://student-events.firebaseapp.com/'
    },
    {
        name: 'Tämä portfolio sivu!',
        type: 'Oma projekti',
        tags: ['React', 'Gatsby', 'Styled Components'],
        text: 'Tässä yhteen viikonloppuun kiireellä kasaan paiskittu perus staattisesta sisällöstä koostuva sivusto, tavoitteena kokeilla Gatsby-työkalun ominaisuuksia yhdessä React:in kanssa. Toivottavasti portfolio on asiansa ajanut tähän asti!',
        published: new Date(2018, 10, 1, 0, 0, 0, 0),
        image: '',
        github: '',
        site: ''
    }
];

export const returnProjectsSorted = () => (projectData.sort((a, b) => {
    return a.published.getTime() - b.published.getTime();
}));