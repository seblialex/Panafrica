const quizData = {
    geography: [
        {
            question: "Which is the largest country in Africa by land area?",
            options: ["Nigeria", "Egypt", "Algeria", "South Africa"],
            answer: "Algeria",
        },
        {
            question: "Which African country is known as the 'Pearl of Africa'?",
            options: ["Kenya", "Uganda", "Tanzania", "Rwanda"],
            answer: "Uganda",
        },
        {
            question: "Which desert covers much of Northern Africa?",
            options: ["Kalahari", "Sahara", "Namib", "Arabian"],
            answer: "Sahara",
        },
        {
            question: "Which is the longest river in Africa?",
            options: ["Congo River", "Niger River", "Zambezi River", "Nile River"],
            answer: "Nile River",
        },
        {
            question: "Which African country has the most pyramids?",
            options: ["Egypt", "Sudan", "Libya", "Algeria"],
            answer: "Sudan",
        },
        {
            question: "Which is the smallest country in mainland Africa?",
            options: ["Gambia", "Eswatini", "Rwanda", "Djibouti"],
            answer: "Gambia",
        },
        {
            question: "Which African country was formerly known as Abyssinia?",
            options: ["Somalia", "Ethiopia", "Eritrea", "Sudan"],
            answer: "Ethiopia",
        },
        {
            question: "Which African country is completely surrounded by South Africa?",
            options: ["Eswatini", "Lesotho", "Botswana", "Zimbabwe"],
            answer: "Lesotho",
        },
        {
            question: "Which is the highest mountain in Africa?",
            options: ["Mount Kenya", "Mount Kilimanjaro", "Atlas Mountains", "Mount Meru"],
            answer: "Mount Kilimanjaro",
        },
        {
            question: "Which African country is known as the 'Land of a Thousand Hills'?",
            options: ["Rwanda", "Burundi", "Uganda", "Ethiopia"],
            answer: "Rwanda",
        },
    ],
    history: [
        {
            question: "Which African leader was known as 'Madiba'?",
            options: ["Kwame Nkrumah", "Nelson Mandela", "Jomo Kenyatta", "Patrice Lumumba"],
            answer: "Nelson Mandela",
        },
        {
            question: "Which ancient African civilization built the Great Zimbabwe?",
            options: ["Shona", "Zulu", "Ashanti", "Songhai"],
            answer: "Shona",
        },
        {
            question: "Which country was the first in sub-Saharan Africa to gain independence?",
            options: ["Ghana", "Nigeria", "Kenya", "Senegal"],
            answer: "Ghana",
        },
        {
            question: "The Berlin Conference of 1884-1885 resulted in what major event in African history?",
            options: [
                "End of slavery",
                "Beginning of colonization",
                "Formation of the African Union",
                "Independence of Egypt",
            ],
            answer: "Beginning of colonization",
        },
        {
            question: "Which African empire was led by Mansa Musa, one of the wealthiest individuals in history?",
            options: ["Songhai Empire", "Mali Empire", "Ghana Empire", "Benin Empire"],
            answer: "Mali Empire",
        },
        {
            question: "The Apartheid system was practiced in which African country?",
            options: ["Zimbabwe", "South Africa", "Namibia", "Angola"],
            answer: "South Africa",
        },
        {
            question: "Which North African country was colonized by Italy in 1911?",
            options: ["Morocco", "Tunisia", "Libya", "Algeria"],
            answer: "Libya",
        },
        {
            question: "Who was the first woman to win a Nobel Peace Prize for her environmental conservation work in Africa?",
            options: ["Ellen Johnson Sirleaf", "Wangari Maathai", "Graça Machel", "Winnie Mandela"],
            answer: "Wangari Maathai",
        },
        {
            question: "The 1994 genocide occurred in which African country?",
            options: ["Burundi", "Rwanda", "Democratic Republic of Congo", "Uganda"],
            answer: "Rwanda",
        },
        {
            question: "Which ancient kingdom was located in present-day Ethiopia and known for the Queen of Sheba?",
            options: ["Kush", "Axum", "Nubia", "Carthage"],
            answer: "Axum",
        },
    ],
    culture: [
        {
            question: "Which African musical style originated in Nigeria and was popularized by Fela Kuti?",
            options: ["Highlife", "Afrobeat", "Soukous", "Mbalax"],
            answer: "Afrobeat",
        },
        {
            question: "Which colorful cloth from Ghana is known for its intricate patterns and cultural significance?",
            options: ["Kente", "Ankara", "Kitenge", "Shweshwe"],
            answer: "Kente",
        },
        {
            question: "Which African language is the most widely spoken as a first language?",
            options: ["Swahili", "Hausa", "Arabic", "Amharic"],
            answer: "Arabic",
        },
        {
            question: "The Maasai people are primarily found in which two East African countries?",
            options: ["Kenya and Tanzania", "Uganda and Rwanda", "Ethiopia and Somalia", "Tanzania and Mozambique"],
            answer: "Kenya and Tanzania",
        },
        {
            question: "Which traditional African instrument is made from a hollowed-out gourd covered with beads?",
            options: ["Kora", "Djembe", "Shekere", "Mbira"],
            answer: "Shekere",
        },
        {
            question: "Which North African dish consists of couscous topped with vegetables and meat?",
            options: ["Tagine", "Couscous Royale", "Shakshuka", "Harira"],
            answer: "Couscous Royale",
        },
        {
            question: "Which traditional African storyteller is known as a 'griot'?",
            options: ["West African", "East African", "Southern African", "North African"],
            answer: "West African",
        },
        {
            question: "Which African country is known for its distinctive 'Timbuktu manuscripts'?",
            options: ["Niger", "Mali", "Mauritania", "Chad"],
            answer: "Mali",
        },
        {
            question: "The Vodun religion, which influenced Voodoo practices in the Americas, originated in which region?",
            options: ["West Africa", "Central Africa", "East Africa", "Southern Africa"],
            answer: "West Africa",
        },
        {
            question: "Which traditional African hairstyle involves threading the hair with cotton or wool?",
            options: ["Bantu Knots", "Threading", "Cornrows", "Dreadlocks"],
            answer: "Threading",
        },
    ],
    flags: [
        {
            question: "Which country's flag has a green field with a yellow star in the center?",
            options: ["Senegal", "Mauritania", "Morocco", "Cameroon"],
            answer: "Senegal",
            flagImage: "images/flags/senegal.png",
        },
        {
            question:
                "Which country's flag has horizontal stripes of red, white, and black with a golden eagle in the center?",
            options: ["Kenya", "Egypt", "Zimbabwe", "South Sudan"],
            answer: "Egypt",
            flagImage: "images/flags/egypt.png",
        },
        {
            question:
                "Which country's flag features a black star on a background of red, gold, and green horizontal stripes?",
            options: ["Ghana", "Ethiopia", "Cameroon", "Guinea"],
            answer: "Ghana",
            flagImage: "images/flags/ghana.png",
        },
        {
            question: "Which country's flag has a blue disk on a green and yellow background?",
            options: ["Gabon", "Rwanda", "Tanzania", "Brazil"],
            answer: "Brazil",
            flagImage: "images/flags/brazil.png",
        },
        {
            question: "Which country's flag has a single white star on a blue background?",
            options: ["Somalia", "Djibouti", "Liberia", "Morocco"],
            answer: "Somalia",
            flagImage: "images/flags/somalia.png",
        },
        {
            question: "Which country's flag features a yellow crescent and star on a green background?",
            options: ["Algeria", "Mauritania", "Tunisia", "Libya"],
            answer: "Mauritania",
            flagImage: "images/flags/mauritania.png",
        },
        {
            question: "Which country's flag has three vertical stripes of green, white, and orange?",
            options: ["Niger", "Ivory Coast", "Ireland", "Mali"],
            answer: "Ivory Coast",
            flagImage: "images/flags/ivory-coast.png",
        },
        {
            question: "Which country's flag features a yellow sun with 24 rays on a red background?",
            options: ["Macedonia", "Malawi", "Mozambique", "Macedonia"],
            answer: "Macedonia",
            flagImage: "images/flags/macedonia.png",
        },
        {
            question: "Which country's flag has a white diagonal cross on a blue background?",
            options: ["Jamaica", "Scotland", "Nigeria", "Botswana"],
            answer: "Scotland",
            flagImage: "images/flags/scotland.png",
        },
        {
            question: "Which country's flag has horizontal stripes of green, yellow, and red with a blue triangle and star?",
            options: ["Ethiopia", "South Sudan", "Eritrea", "Mozambique"],
            answer: "Ethiopia",
            flagImage: "images/flags/ethiopia.png",
        },
    ],
}
