document.addEventListener("DOMContentLoaded", () => {
    const countryListContainer = document.getElementById("country-list");
    const countryInfoDefault = document.querySelector(".country-info-default");
    const countryInfoContent = document.getElementById("country-info-content");

    const countryNameElement = document.getElementById("country-name");
    const countryCapitalElement = document.getElementById("country-capital");
    const countryLanguagesElement = document.getElementById("country-languages");
    const countryDressElement = document.getElementById("country-dress");
    const countryCuisineElement = document.getElementById("country-cuisine");
    const countryFlagElement = document.getElementById("country-flag");
    const figureNameElement = document.getElementById("figure-name");
    const figureDescriptionElement = document.getElementById("figure-description");
    const figureImgElement = document.getElementById("figure-img");

    const countryData = [
        {
            name: "Algeria",
            capital: "Algiers",
            languages: "Arabic, Berber",
            dress: "Hayek, Gandoura",
            cuisine: "Couscous, Tajine",
            flag: "images/flags/algeria.png",
            notableFigure: {
                name: "Albert Camus",
                description: "A Nobel Prize-winning author.",
                image: "images/figures/albert_camus.jpg",
            },
        },
        {
            name: "Angola",
            capital: "Luanda",
            languages: "Portuguese",
            dress: "Vitenge",
            cuisine: "Moamba de Galinha",
            flag: "images/flags/angola.png",
            notableFigure: {
                name: "José Eduardo Agualusa",
                description: "A prominent Angolan writer.",
                image: "images/figures/jose_eduardo_agualusa.jpg",
            },
        },
        {
            name: "Benin",
            capital: "Porto-Novo",
            languages: "French",
            dress: "African Print",
            cuisine: "Akassa",
            flag: "images/flags/benin.png",
            notableFigure: {
                name: "Hubert Maga",
                description: "First President of Benin.",
                image: "images/figures/hubert_maga.jpg",
            },
        },
        {
            name: "Botswana",
            capital: "Gaborone",
            languages: "English, Setswana",
            dress: "German Print",
            cuisine: "Seswaa",
            flag: "images/flags/botswana.png",
            notableFigure: {
                name: "Seretse Khama",
                description: "First President of Botswana.",
                image: "images/figures/seretse_khama.jpg",
            },
        },
        {
            name: "Burkina Faso",
            capital: "Ouagadougou",
            languages: "French",
            dress: "Faso Dan Fani",
            cuisine: "Ragout d'Igname",
            flag: "images/flags/burkina-faso.png",
            notableFigure: {
                name: "Thomas Sankara",
                description: "Revolutionary President of Burkina Faso.",
                image: "images/figures/thomas_sankara.jpg",
            },
        },
        {
            name: "Burundi",
            capital: "Gitega",
            languages: "Kirundi, French",
            dress: "Imvutano",
            cuisine: "Ubugali",
            flag: "images/flags/burundi.png",
            notableFigure: {
                name: "Melchior Ndadaye",
                description: "First democratically elected President of Burundi.",
                image: "images/figures/melchior_ndadaye.jpg",
            },
        },
        {
            name: "Cabo Verde",
            capital: "Praia",
            languages: "Portuguese",
            dress: "Pano di Terra",
            cuisine: "Cachupa",
            flag: "images/flags/cabo-verde.png",
            notableFigure: {
                name: "Cesária Évora",
                description: "Famous Cabo Verdean singer.",
                image: "images/figures/cesaria_evora.jpg",
            },
        },
        {
            name: "Cameroon",
            capital: "Yaoundé",
            languages: "French, English",
            dress: "Toghu",
            cuisine: "Ndolé",
            flag: "images/flags/cameroon.png",
            notableFigure: {
                name: "Samuel Eto'o",
                description: "Famous Cameroonian footballer.",
                image: "images/figures/samuel_etoo.jpg",
            },
        },
        {
            name: "Central African Republic",
            capital: "Bangui",
            languages: "Sango, French",
            dress: "Colorful Wraps",
            cuisine: "Gozo",
            flag: "images/flags/central-african-republic.png",
            notableFigure: {
                name: "Barthélémy Boganda",
                description: "First Prime Minister of the Central African Republic.",
                image: "images/figures/barthelemy_boganda.jpg",
            },
        },
        {
            name: "Chad",
            capital: "N'Djamena",
            languages: "French, Arabic",
            dress: "Lappa",
            cuisine: "Boule",
            flag: "images/flags/chad.png",
            notableFigure: {
                name: "Hissène Habré",
                description: "Former President of Chad.",
                image: "images/figures/hissene_habre.jpg",
            },
        },
        {
            name: "Comoros",
            capital: "Moroni",
            languages: "Comorian, French, Arabic",
            dress: "Shiromani",
            cuisine: "Langouste à la Vanille",
            flag: "images/flags/comoros.png",
            notableFigure: {
                name: "Ahmed Abdallah",
                description: "First President of Comoros.",
                image: "images/figures/ahmed_abdallah.jpg",
            },
        },
        {
            name: "Democratic Republic of the Congo",
            capital: "Kinshasa",
            languages: "French",
            dress: "Liputa",
            cuisine: "Moambe",
            flag: "images/flags/democratic-republic-of-the-congo.png",
            notableFigure: {
                name: "Patrice Lumumba",
                description: "First Prime Minister of the Democratic Republic of the Congo.",
                image: "images/figures/patrice_lumumba.jpg",
            },
        },
        {
            name: "Republic of the Congo",
            capital: "Brazzaville",
            languages: "French",
            dress: "Kitenge",
            cuisine: "Poulet Moambe",
            flag: "images/flags/republic-of-the-congo.png",
            notableFigure: {
                name: "Marien Ngouabi",
                description: "Former President of the Republic of the Congo.",
                image: "images/figures/marien_ngouabi.jpg",
            },
        },
        {
            name: "Côte d'Ivoire",
            capital: "Yamoussoukro",
            languages: "French",
            dress: "Kente Cloth",
            cuisine: "Foutou",
            flag: "images/flags/cote-d-ivoire.png",
            notableFigure: {
                name: "Félix Houphouët-Boigny",
                description: "First President of Côte d'Ivoire.",
                image: "images/figures/felix_houphouet_boigny.jpg",
            },
        },
        {
            name: "Djibouti",
            capital: "Djibouti City",
            languages: "French, Arabic",
            dress: "Macawiis",
            cuisine: "Skudahkharis",
            flag: "images/flags/djibouti.png",
            notableFigure: {
                name: "Hassan Gouled Aptidon",
                description: "First President of Djibouti.",
                image: "images/figures/hassan_gouled_aptidon.jpg",
            },
        },
        {
            name: "Egypt",
            capital: "Cairo",
            languages: "Arabic",
            dress: "Galabeya",
            cuisine: "Kushari",
            flag: "images/flags/egypt.png",
            notableFigure: {
                name: "Cleopatra",
                description: "Last active ruler of the Ptolemaic Kingdom of Egypt.",
                image: "images/figures/cleopatra.jpg",
            },
        },
        {
            name: "Equatorial Guinea",
            capital: "Malabo",
            languages: "Spanish, French, Portuguese",
            dress: "Traditional Wraps",
            cuisine: "Succotash",
            flag: "images/flags/equatorial-guinea.png",
            notableFigure: {
                name: "Francisco Macías Nguema",
                description: "First President of Equatorial Guinea.",
                image: "images/figures/francisco_macias_nguema.jpg",
            },
        },
        {
            name: "Eritrea",
            capital: "Asmara",
            languages: "Tigrinya, Arabic, English",
            dress: "Zuria",
            cuisine: "Tsebhi",
            flag: "images/flags/eritrea.png",
            notableFigure: {
                name: "Isaias Afwerki",
                description: "President of Eritrea.",
                image: "images/figures/isaias_afwerki.jpg",
            },
        },
        {
            name: "Eswatini",
            capital: "Mbabane",
            languages: "Swazi, English",
            dress: "Emahiya",
            cuisine: "Sishwala",
            flag: "images/flags/eswatini.png",
            notableFigure: {
                name: "Sobhuza II",
                description: "King of Swaziland for over 82 years.",
                image: "images/figures/sobhuza_ii.jpg",
            },
        },
        {
            name: "Ethiopia",
            capital: "Addis Ababa",
            languages: "Amharic",
            dress: "Habesha Kemis",
            cuisine: "Injera",
            flag: "images/flags/ethiopia.png",
            notableFigure: {
                name: "Haile Selassie",
                description: "Emperor of Ethiopia.",
                image: "images/figures/haile_selassie.jpg",
            },
        },
        {
            name: "Gabon",
            capital: "Libreville",
            languages: "French",
            dress: "Traditional Wraps",
            cuisine: "Poulet Nyembwe",
            flag: "images/flags/gabon.png",
            notableFigure: {
                name: "Omar Bongo",
                description: "Former President of Gabon.",
                image: "images/figures/omar_bongo.jpg",
            },
        },
        {
            name: "Gambia",
            capital: "Banjul",
            languages: "English",
            dress: "Agbada",
            cuisine: "Domoda",
            flag: "images/flags/gambia.png",
            notableFigure: {
                name: "Dawda Jawara",
                description: "First President of the Gambia.",
                image: "images/figures/dawda_jawara.jpg",
            },
        },
        {
            name: "Ghana",
            capital: "Accra",
            languages: "English, Akan",
            dress: "Kente",
            cuisine: "Fufu",
            flag: "images/flags/ghana.png",
            notableFigure: {
                name: "Kwame Nkrumah",
                description: "First President of Ghana.",
                image: "images/figures/kwame_nkrumah.jpg",
            },
        },
        {
            name: "Guinea",
            capital: "Conakry",
            languages: "French",
            dress: "Bazin Riche",
            cuisine: "Poulet Yassa",
            flag: "images/flags/guinea.png",
            notableFigure: {
                name: "Ahmed Sékou Touré",
                description: "First President of Guinea.",
                image: "images/figures/ahmed_sekou_toure.jpg",
            },
        },
        {
            name: "Guinea-Bissau",
            capital: "Bissau",
            languages: "Portuguese",
            dress: "Pano de Pinti",
            cuisine: "Yassa",
            flag: "images/flags/guinea-bissau.png",
            notableFigure: {
                name: "Luís Cabral",
                description: "First President of Guinea-Bissau.",
                image: "images/figures/luis_cabral.jpg",
            },
        },
        {
            name: "Kenya",
            capital: "Nairobi",
            languages: "Swahili, English",
            dress: "Kanga",
            cuisine: "Ugali",
            flag: "images/flags/kenya.png",
            notableFigure: {
                name: "Wangari Maathai",
                description: "Environmental political activist and Nobel laureate.",
                image: "images/figures/wangari_maathai.jpg",
            },
        },
        {
            name: "Lesotho",
            capital: "Maseru",
            languages: "Sesotho, English",
            dress: "Basotho Blanket",
            cuisine: "Motoho",
            flag: "images/flags/lesotho.png",
            notableFigure: {
                name: "Moshoeshoe I",
                description: "Founder of Lesotho.",
                image: "images/figures/moshoeshoe_i.jpg",
            },
        },
        {
            name: "Liberia",
            capital: "Monrovia",
            languages: "English",
            dress: "Lappa Suit",
            cuisine: "Pepper Soup",
            flag: "images/flags/liberia.png",
            notableFigure: {
                name: "Ellen Johnson Sirleaf",
                description: "First female President in Africa.",
                image: "images/figures/ellen_johnson_sirleaf.jpg",
            },
        },
        {
            name: "Libya",
            capital: "Tripoli",
            languages: "Arabic",
            dress: "Jellabiya",
            cuisine: "Couscous",
            flag: "images/flags/libya.png",
            notableFigure: {
                name: "Muammar Gaddafi",
                description: "Former leader of Libya.",
                image: "images/figures/muammar_gaddafi.jpg",
            },
        },
        {
            name: "Madagascar",
            capital: "Antananarivo",
            languages: "Malagasy, French",
            dress: "Lamba",
            cuisine: "Romazava",
            flag: "images/flags/madagascar.png",
            notableFigure: {
                name: "Andrianampoinimerina",
                description: "King of Madagascar.",
                image: "images/figures/andrianampoinimerina.jpg",
            },
        },
        {
            name: "Malawi",
            capital: "Lilongwe",
            languages: "Chichewa, English",
            dress: "Chitenje",
            cuisine: "Nsima",
            flag: "images/flags/malawi.png",
            notableFigure: {
                name: "Hastings Banda",
                description: "First President of Malawi.",
                image: "images/figures/hastings_banda.jpg",
            },
        },
        {
            name: "Mali",
            capital: "Bamako",
            languages: "French",
            dress: "Boubou",
            cuisine: "Tô",
            flag: "images/flags/mali.png",
            notableFigure: {
                name: "Modibo Keita",
                description: "First President of Mali.",
                image: "images/figures/modibo_keita.jpg",
            },
        },
        {
            name: "Mauritania",
            capital: "Nouakchott",
            languages: "Arabic",
            dress: "Boubou",
            cuisine: "Thieboudienne",
            flag: "images/flags/mauritania.png",
            notableFigure: {
                name: "Moktar Ould Daddah",
                description: "First President of Mauritania.",
                image: "images/figures/moktar_ould_daddah.jpg",
            },
        },
        {
            name: "Mauritius",
            capital: "Port Louis",
            languages: "English, French, Creole",
            dress: "Sari",
            cuisine: "Dholl Puri",
            flag: "images/flags/mauritius.png",
            notableFigure: {
                name: "Seewoosagur Ramgoolam",
                description: "First Prime Minister of Mauritius.",
                image: "images/figures/seewoosagur_ramgoolam.jpg",
            },
        },
        {
            name: "Morocco",
            capital: "Rabat",
            languages: "Arabic, Berber",
            dress: "Djellaba",
            cuisine: "Tagine",
            flag: "images/flags/morocco.png",
            notableFigure: {
                name: "Ibn Battuta",
                description: "Medieval Moroccan scholar and explorer.",
                image: "images/figures/ibn_battuta.jpg",
            },
        },
        {
            name: "Mozambique",
            capital: "Maputo",
            languages: "Portuguese",
            dress: "Capulana",
            cuisine: "Piri-Piri Chicken",
            flag: "images/flags/mozambique.png",
            notableFigure: {
                name: "Samora Machel",
                description: "First President of Mozambique.",
                image: "images/figures/samora_machel.jpg",
            },
        },
        {
            name: "Namibia",
            capital: "Windhoek",
            languages: "English",
            dress: "Herero Dress",
            cuisine: "Braaivleis",
            flag: "images/flags/namibia.png",
            notableFigure: {
                name: "Sam Nujoma",
                description: "First President of Namibia.",
                image: "images/figures/sam_nujoma.jpg",
            },
        },
        {
            name: "Niger",
            capital: "Niamey",
            languages: "French",
            dress: "Babban Riga",
            cuisine: "Djerma Stew",
            flag: "images/flags/niger.png",
            notableFigure: {
                name: "Hamani Diori",
                description: "First President of Niger.",
                image: "images/figures/hamani_diori.jpg",
            },
        },
        {
            name: "Nigeria",
            capital: "Abuja",
            languages: "English, Hausa, Igbo, Yoruba",
            dress: "Agbada",
            cuisine: "Jollof Rice",
            flag: "images/flags/nigeria.png",
            notableFigure: {
                name: "Chinua Achebe",
                description: "Nigerian novelist and poet.",
                image: "images/figures/chinua_achebe.jpg",
            },
        },
        {
            name: "Rwanda",
            capital: "Kigali",
            languages: "Kinyarwanda, English, French",
            dress: "Umushanana",
            cuisine: "Isombe",
            flag: "images/flags/rwanda.png",
            notableFigure: {
                name: "Paul Kagame",
                description: "President of Rwanda.",
                image: "images/figures/paul_kagame.jpg",
            },
        },
        {
            name: "São Tomé and Príncipe",
            capital: "São Tomé",
            languages: "Portuguese",
            dress: "Pagnes",
            cuisine: "Calulu",
            flag: "images/flags/sao-tome-and-principe.png",
            notableFigure: {
                name: "Manuel Pinto da Costa",
                description: "First President of São Tomé and Príncipe.",
                image: "images/figures/manuel_pinto_da_costa.jpg",
            },
        },
        {
            name: "Senegal",
            capital: "Dakar",
            languages: "French",
            dress: "Boubou",
            cuisine: "Thieboudienne",
            flag: "images/flags/senegal.png",
            notableFigure: {
                name: "Léopold Sédar Senghor",
                description: "First President of Senegal.",
                image: "images/figures/leopold_sedar_senghor.jpg",
            },
        },
        {
            name: "Seychelles",
            capital: "Victoria",
            languages: "Seychellois Creole, English, French",
            dress: "Light Dresses",
            cuisine: "Grilled Fish",
            flag: "images/flags/seychelles.png",
            notableFigure: {
                name: "James Mancham",
                description: "First President of Seychelles.",
                image: "images/figures/james_mancham.jpg",
            },
        },
        {
            name: "Sierra Leone",
            capital: "Freetown",
            languages: "English",
            dress: "Lappa",
            cuisine: "Groundnut Stew",
            flag: "images/flags/sierra-leone.png",
            notableFigure: {
                name: "Siaka Stevens",
                description: "Former President of Sierra Leone.",
                image: "images/figures/siaka_stevens.jpg",
            },
        },
        {
            name: "Somalia",
            capital: "Mogadishu",
            languages: "Somali, Arabic",
            dress: "Macawiis",
            cuisine: "Bariis Iskukaris",
            flag: "images/flags/somalia.png",
            notableFigure: {
                name: "Siad Barre",
                description: "Former President of Somalia.",
                image: "images/figures/siad_barre.jpg",
            },
        },
        {
            name: "South Africa",
            capital: "Pretoria",
            languages: "Afrikaans, English, Xhosa, Zulu",
            dress: "Zulu Attire",
            cuisine: "Biltong",
            flag: "images/flags/south-africa.png",
            notableFigure: {
                name: "Nelson Mandela",
                description: "Anti-apartheid revolutionary and former President of South Africa.",
                image: "images/figures/nelson_mandela.jpg",
            },
        },
        {
            name: "South Sudan",
            capital: "Juba",
            languages: "English",
            dress: "Traditional Attire",
            cuisine: "Kisra",
            flag: "images/flags/south-sudan.png",
            notableFigure: {
                name: "John Garang",
                description: "Leader of the Sudan People's Liberation Army.",
                image: "images/figures/john_garang.jpg",
            },
        },
        {
            name: "Sudan",
            capital: "Khartoum",
            languages: "Arabic, English",
            dress: "Jellabiya",
            cuisine: "Ful Medames",
            flag: "images/flags/sudan.png",
            notableFigure: {
                name: "Gaafar Nimeiry",
                description: "Former President of Sudan.",
                image: "images/figures/gaafar_nimeiry.jpg",
            },
        },
        {
            name: "Tanzania",
            capital: "Dodoma",
            languages: "Swahili, English",
            dress: "Kanga",
            cuisine: "Ugali",
            flag: "images/flags/tanzania.png",
            notableFigure: {
                name: "Julius Nyerere",
                description: "First President of Tanzania.",
                image: "images/figures/julius_nyerere.jpg",
            },
        },
        {
            name: "Togo",
            capital: "Lomé",
            languages: "French",
            dress: "Kente Cloth",
            cuisine: "Fufu",
            flag: "images/flags/togo.png",
            notableFigure: {
                name: "Gnassingbé Eyadéma",
                description: "Former President of Togo.",
                image: "images/figures/gnassingbe_eyadema.jpg",
            },
        },
        {
            name: "Tunisia",
            capital: "Tunis",
            languages: "Arabic",
            dress: "Jebba",
            cuisine: "Couscous",
            flag: "images/flags/tunisia.png",
            notableFigure: {
                name: "Habib Bourguiba",
                description: "First President of Tunisia.",
                image: "images/figures/habib_bourguiba.jpg",
            },
        },
        {
            name: "Uganda",
            capital: "Kampala",
            languages: "English, Swahili",
            dress: "Kanzu",
            cuisine: "Matooke",
            flag: "images/flags/uganda.png",
            notableFigure: {
                name: "Idi Amin",
                description: "Former President of Uganda.",
                image: "images/figures/idi_amin.jpg",
            },
        },
        {
            name: "Zambia",
            capital: "Lusaka",
            languages: "English",
            dress: "Zambian Attire",
            cuisine: "Nshima",
            flag: "images/flags/zambia.png",
            notableFigure: {
                name: "Kenneth Kaunda",
                description: "First President of Zambia.",
                image: "images/figures/kenneth_kaunda.jpg",
            },
        },
        {
            name: "Zimbabwe",
            capital: "Harare",
            languages: "English, Shona, Ndebele",
            dress: "Zimbabwean Attire",
            cuisine: "Sadza",
            flag: "images/flags/zimbabwe.png",
            notableFigure: {
                name: "Robert Mugabe",
                description: "Former President of Zimbabwe.",
                image: "images/figures/robert_mugabe.jpg",
            },
        },
    ];

    function renderCountryList() {
        countryListContainer.innerHTML = "";
        countryData.forEach((country, index) => {
            const div = document.createElement("div");
            div.classList.add("countryName");
            div.textContent = country.name;
            div.addEventListener("click", () => {
                document.querySelectorAll(".countryName").forEach(el => el.classList.remove("active"));
                div.classList.add("active");
                showCountryInfo(country);
            });
            countryListContainer.appendChild(div);
        });
    }

    function showCountryInfo(country) {
        countryInfoDefault.style.display = "none";
        countryInfoContent.style.display = "block";

        countryNameElement.textContent = country.name;
        countryCapitalElement.textContent = country.capital;
        countryLanguagesElement.textContent = country.languages;
        countryDressElement.textContent = country.dress;
        countryCuisineElement.textContent = country.cuisine;
        countryFlagElement.src = country.flag;
        figureNameElement.textContent = country.notableFigure.name;
        figureDescriptionElement.textContent = country.notableFigure.description;
        figureImgElement.src = country.notableFigure.image;
    }

    renderCountryList();
});
