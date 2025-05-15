document.addEventListener("DOMContentLoaded", () => {
    const timelineContainer = document.querySelector(".timeline-container")
    const filterBtns = document.querySelectorAll(".filter-btn")

    // Timeline events data (replace with your actual data or import)
    const timelineEvents = [
        {
            date: "3100 BCE",
            title: "Unification of Upper and Lower Egypt",
            description:
                "King Narmer (Menes) unifies Upper and Lower Egypt, establishing the First Dynasty and beginning the Early Dynastic Period of Ancient Egypt.",
            category: "ancient",
        },
        {
            date: "1000 BCE - 300 CE",
            title: "Kingdom of Kush",
            description:
                "The Kingdom of Kush in present-day Sudan becomes a major power in the region, eventually conquering and ruling Egypt as the 25th Dynasty.",
            category: "ancient",
        },
        {
            date: "300 BCE - 300 CE",
            title: "Kingdom of Aksum",
            description:
                "The Kingdom of Aksum (in present-day Ethiopia and Eritrea) emerges as a major trading power with connections to the Mediterranean world, Arabia, and India.",
            category: "ancient",
        },
        {
            date: "700 - 1600 CE",
            title: "Great Zimbabwe Civilization",
            description:
                "The Great Zimbabwe civilization flourishes, building impressive stone structures and establishing extensive trade networks across southeastern Africa.",
            category: "ancient",
        },
        {
            date: "1235 - 1600 CE",
            title: "Mali Empire",
            description:
                "The Mali Empire becomes one of the largest and wealthiest empires in West Africa, with Mansa Musa's famous pilgrimage to Mecca in 1324 showcasing its immense wealth.",
            category: "ancient",
        },
        {
            date: "1400s - 1500s",
            title: "Beginning of European Exploration",
            description:
                "Portuguese explorers begin navigating the African coast, establishing trading posts and initiating European contact with various African kingdoms.",
            category: "colonial",
        },
        {
            date: "1500s - 1800s",
            title: "Transatlantic Slave Trade",
            description:
                "The transatlantic slave trade forcibly removes millions of Africans to the Americas, devastating communities and altering the demographic landscape of the continent.",
            category: "colonial",
        },
        {
            date: "1652",
            title: "Dutch Settlement at Cape Town",
            description:
                "The Dutch East India Company establishes a settlement at the Cape of Good Hope, beginning European colonization in southern Africa.",
            category: "colonial",
        },
        {
            date: "1884 - 1885",
            title: "Berlin Conference",
            description:
                "European powers meet at the Berlin Conference to formalize the 'Scramble for Africa,' dividing the continent among themselves without African representation.",
            category: "colonial",
        },
        {
            date: "1896",
            title: "Battle of Adwa",
            description:
                "Ethiopian forces under Emperor Menelik II defeat Italian troops at the Battle of Adwa, preserving Ethiopia's independence and becoming a symbol of African resistance to colonialism.",
            category: "colonial",
        },
        {
            date: "1900 - 1960s",
            title: "Colonial Rule",
            description:
                "Most of Africa falls under European colonial rule, with various systems of administration, economic exploitation, and cultural suppression implemented across the continent.",
            category: "colonial",
        },
        {
            date: "1912",
            title: "Founding of the African National Congress",
            description:
                "The South African Native National Congress (later renamed the African National Congress) is founded to defend the rights and freedoms of African people in South Africa.",
            category: "independence",
        },
        {
            date: "1919",
            title: "First Pan-African Congress",
            description:
                "W.E.B. Du Bois organizes the First Pan-African Congress in Paris, bringing together delegates from Africa, the West Indies, and the United States to discuss colonial issues.",
            category: "independence",
        },
        {
            date: "1957",
            title: "Ghana's Independence",
            description:
                "Ghana becomes the first sub-Saharan African country to gain independence from colonial rule, with Kwame Nkrumah as its first prime minister and later president.",
            category: "independence",
        },
        {
            date: "1958",
            title: "All-African People's Conference",
            description:
                "The All-African People's Conference is held in Accra, Ghana, bringing together independence leaders from across Africa to coordinate anti-colonial efforts.",
            category: "independence",
        },
        {
            date: "1960",
            title: "Year of Africa",
            description:
                "Seventeen African nations gain independence in what becomes known as the 'Year of Africa,' marking a significant shift in the continent's political landscape.",
            category: "independence",
        },
        {
            date: "1963",
            title: "Formation of the Organization of African Unity",
            description:
                "The Organization of African Unity (OAU) is established to promote unity and solidarity among African states and to eradicate all forms of colonialism.",
            category: "independence",
        },
        {
            date: "1976",
            title: "Soweto Uprising",
            description:
                "Students in Soweto, South Africa, protest against the enforcement of Afrikaans as a medium of instruction, sparking widespread resistance to the apartheid regime.",
            category: "independence",
        },
        {
            date: "1990",
            title: "Release of Nelson Mandela",
            description:
                "After 27 years of imprisonment, Nelson Mandela is released, marking a crucial step toward the end of apartheid in South Africa.",
            category: "modern",
        },
        {
            date: "1994",
            title: "End of Apartheid in South Africa",
            description:
                "South Africa holds its first democratic elections, ending apartheid and resulting in Nelson Mandela becoming the country's first Black president.",
            category: "modern",
        },
        {
            date: "1994",
            title: "Rwandan Genocide",
            description:
                "Approximately 800,000 Tutsis and moderate Hutus are killed in the Rwandan genocide, one of the most devastating humanitarian crises in African history.",
            category: "modern",
        },
        {
            date: "2001",
            title: "Formation of the African Union",
            description:
                "The African Union (AU) replaces the Organization of African Unity, with a stronger focus on promoting democracy, human rights, and sustainable development.",
            category: "modern",
        },
        {
            date: "2002",
            title: "End of the Sierra Leone Civil War",
            description:
                "The Sierra Leone Civil War officially ends after 11 years of conflict, with efforts toward reconciliation and rebuilding beginning across the country.",
            category: "modern",
        },
        {
            date: "2011",
            title: "South Sudan Independence",
            description:
                "South Sudan becomes Africa's newest nation after a referendum on independence from Sudan, following decades of civil war.",
            category: "modern",
        },
        {
            date: "2015",
            title: "Agenda 2063 Adoption",
            description:
                "The African Union adopts Agenda 2063, a strategic framework for the socio-economic transformation of the continent over the next 50 years.",
            category: "modern",
        },
        {
            date: "2018",
            title: "African Continental Free Trade Area",
            description:
                "The African Continental Free Trade Area (AfCFTA) agreement is signed, creating one of the world's largest free trade areas and aiming to boost intra-African trade.",
            category: "modern",
        },
    ]


    // Function to create timeline events
    function createTimelineEvents() {
        timelineEvents.forEach((event) => {
            const timelineEvent = document.createElement("div")
            timelineEvent.className = `timeline-event ${event.category}`
            timelineEvent.setAttribute("data-category", event.category)

            timelineEvent.innerHTML = `
                <div class="timeline-content">
                    <span class="timeline-date">${event.date}</span>
                    <h3 class="timeline-title">${event.title}</h3>
                    <p class="timeline-description">${event.description}</p>
                </div>
            `

            timelineContainer.appendChild(timelineEvent)
        })
    }

    // Function to filter timeline events
    function filterEvents(category) {
        const events = document.querySelectorAll(".timeline-event")

        events.forEach((event) => {
            if (category === "all" || event.getAttribute("data-category") === category) {
                event.classList.remove("hidden")
            } else {
                event.classList.add("hidden")
            }
        })
    }

    // Add event listeners to filter buttons
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            // Remove active class from all buttons
            filterBtns.forEach((b) => b.classList.remove("active"))

            // Add active class to clicked button
            this.classList.add("active")

            // Filter events
            const category = this.getAttribute("data-filter")
            filterEvents(category)
        })
    })

    // Create timeline events
    createTimelineEvents()

    // Add scroll animation
    function checkScroll() {
        const events = document.querySelectorAll(".timeline-event:not(.hidden)")

        events.forEach((event) => {
            const eventTop = event.getBoundingClientRect().top
            const windowHeight = window.innerHeight

            if (eventTop < windowHeight * 0.8) {
                event.classList.add("fade-in-up")
            }
        })
    }

    // Check for visible events on load
    checkScroll()

    // Check for visible events on scroll
    window.addEventListener("scroll", checkScroll)
})
