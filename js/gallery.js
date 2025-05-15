document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.querySelector(".gallery-grid")
    const filterBtns = document.querySelectorAll(".filter-btn")
    const modal = document.getElementById("gallery-modal")
    const modalImage = document.getElementById("modal-image")
    const modalTitle = document.getElementById("modal-title")
    const modalRegion = document.getElementById("modal-region")
    const modalDescription = document.getElementById("modal-description")
    const closeModal = document.querySelector(".close-modal")

    // Sample gallery items (replace with your actual data)
    const galleryItems = [
        {
            id: 1,
            title: "Kente Cloth",
            region: "Ghana, West Africa",
            category: "clothing",
            image: "images/gallery/kente.jpg",
            description:
                "Kente is a type of silk and cotton fabric made of interwoven cloth strips and is native to the Akan ethnic group of Ghana. Kente cloth has its roots in the Ashanti Kingdom and is deeply intertwined with the history of the Ashanti people. Each pattern and color in Kente has a distinct meaning and is worn for specific occasions and ceremonies.",
        },
        {
            id: 2,
            title: "Maasai Shuka",
            region: "Kenya & Tanzania, East Africa",
            category: "clothing",
            image: "images/gallery/maasai.jpg",
            description:
                "The Maasai Shuka is a traditional African blanket worn by the Maasai people of East Africa. These vibrant, checkered cloths in red, blue, and sometimes green and yellow have become an iconic symbol of Maasai culture. Originally made from animal skins, modern Shukas are made from cotton. They serve both practical purposes, protecting against harsh weather, and cultural significance in ceremonies and as a marker of identity.",
        },
        {
            id: 3,
            title: "Boubou (Grand Boubou)",
            region: "West Africa",
            category: "clothing",
            image: "images/gallery/boubou.jpg",
            description:
                "The Grand Boubou is a flowing wide-sleeved robe worn by men and women in much of West Africa, particularly in countries like Senegal, Mali, and Niger. Made from a single piece of fabric, it's known for its elegant draping and often features intricate embroidery around the neckline. The Boubou is worn for both everyday occasions and special ceremonies, with more elaborate versions made from materials like bazin (damask) for formal events.",
        },
        {
            id: 4,
            title: "Dashiki",
            region: "West Africa",
            category: "clothing",
            image: "images/gallery/dashiki.jpg",
            description:
                "The Dashiki is a colorful garment that covers the top half of the body, worn by both men and women. It originated in West Africa but became popular throughout Africa and among African diaspora communities, particularly during the civil rights and Black pride movements of the 1960s and 1970s. Traditional Dashikis feature embroidery around the neckline and sleeves and often incorporate vibrant patterns and colors.",
        },
        {
            id: 5,
            title: "Djellaba",
            region: "North Africa",
            category: "clothing",
            image: "images/gallery/djellaba.jpg",
            description:
                "The Djellaba is a long, loose-fitting unisex outer robe with full sleeves that is worn in the Maghreb region of North Africa, particularly in Morocco, Algeria, and Tunisia. It typically has a hood called a qob and is made from wool for winter wear or lightweight cotton for summer. Traditional Djellabas often feature intricate embroidery and are worn for both daily activities and special occasions.",
        },
        {
            id: 6,
            title: "Timket Festival",
            region: "Ethiopia, East Africa",
            category: "festivals",
            image: "images/gallery/timket.jpg",
            description:
                "Timket is an Ethiopian Orthodox celebration of Epiphany that commemorates the baptism of Jesus in the Jordan River. This three-day festival is one of Ethiopia's most colorful celebrations, featuring processions of priests carrying sacred church replicas called tabots, wrapped in rich cloth. The celebration includes all-night vigils, ritual blessings of water, and joyous singing and dancing. Participants often wear traditional white cotton garments with colorful stripes.",
        },
        {
            id: 7,
            title: "Gerewol Festival",
            region: "Niger, West Africa",
            category: "festivals",
            image: "images/gallery/gerewol.jpg",
            description:
                "The Gerewol is a courtship ritual competition and festival of the Wodaabe people of Niger. During this week-long celebration, young men dress in elaborate ornamentation and traditional face paint, then perform dances and songs to impress the young women. The Wodaabe value beauty highly, and during Gerewol, men wear makeup, feathers, and their best clothes, emphasizing their white teeth and eyes by opening them wide and smiling broadly during their performances.",
        },
        {
            id: 8,
            title: "Reed Dance (Umhlanga)",
            region: "Eswatini & South Africa, Southern Africa",
            category: "festivals",
            image: "images/gallery/reed-dance.jpg",
            description:
                "The Reed Dance (Umhlanga) is an annual traditional ceremony where thousands of unmarried girls and young women gather reeds to deliver to the Queen Mother. The ceremony lasts for eight days and is performed in honor of the Queen Mother and to preserve the women's chastity. Participants wear colorful attire, beaded jewelry, and traditional anklets. The highlight is a dancing procession where the young women carry the tall reeds, showcasing unity and celebrating their culture.",
        },
        {
            id: 9,
            title: "Festival of Masks (Festival des Masques)",
            region: "Ivory Coast, West Africa",
            category: "festivals",
            image: "images/gallery/mask-festival.jpg",
            description:
                "The Festival of Masks in Ivory Coast is a vibrant celebration where different communities showcase their traditional masks, which are believed to embody spirits. During the festival, mask wearers perform dances that are thought to channel the spirits they represent. Each mask has specific powers and purposes, from ensuring good harvests to settling disputes. The festival features elaborate costumes, energetic dancing, and traditional music, serving as both entertainment and a way to preserve cultural heritage.",
        },
        {
            id: 10,
            title: "Moulid (Mawlid)",
            region: "Egypt, North Africa",
            category: "festivals",
            image: "images/gallery/moulid.jpg",
            description:
                "Moulid celebrations in Egypt commemorate the birthdays of Islamic saints or the Prophet Muhammad. These festivals combine religious devotion with carnival-like festivities. During Moulids, streets are decorated with colorful lights and banners, and special tents are set up for Sufi chanting and whirling dervish performances. Vendors sell traditional sweets, toys, and food. While primarily religious in nature, Moulids have evolved to include cultural performances and are important social gatherings for communities.",
        },
        {
            id: 11,
            title: "Djembe",
            region: "West Africa",
            category: "instruments",
            image: "images/gallery/djembe.jpg",
            description:
                "The Djembe is a rope-tuned, skin-covered goblet drum played with bare hands, originating from West Africa. It has a body carved from a single piece of hardwood and a drumhead made from goatskin. The Djembe produces three distinct sounds: bass, tone, and slap, allowing for complex rhythmic patterns. Traditionally used in healing ceremonies, rites of passage, and social celebrations, it has gained worldwide popularity and is now featured in various music genres beyond traditional African music.",
        },
        {
            id: 12,
            title: "Kora",
            region: "West Africa",
            category: "instruments",
            image: "images/gallery/kora.jpg",
            description:
                "The Kora is a 21-string bridge-harp used extensively in West Africa, particularly by griot musicians who use it to accompany oral histories, genealogies, and storytelling. It consists of a large calabash cut in half and covered with cow skin to create a resonator, with a long hardwood neck. The strings run in two parallel rows, and players use only the thumb and index finger of each hand to pluck the strings. The Kora produces a complex, melodious sound that has influenced many contemporary world music artists.",
        },
        {
            id: 13,
            title: "Mbira (Thumb Piano)",
            region: "Zimbabwe, Southern Africa",
            category: "instruments",
            image: "images/gallery/mbira.jpg",
            description:
                "The Mbira, also known as the thumb piano, is a traditional musical instrument from Zimbabwe consisting of metal tines attached to a wooden board or resonator. Players pluck the tines with their thumbs and fingers to produce melodic sounds. The Mbira holds deep spiritual significance in Shona culture and is often played during religious ceremonies to communicate with ancestral spirits. Different variations of this instrument exist throughout Africa, known by names such as kalimba, likembe, or sanza in different regions.",
        },
        {
            id: 14,
            title: "Talking Drum",
            region: "West Africa",
            category: "instruments",
            image: "images/gallery/talking-drum.jpg",
            description:
                "The Talking Drum is an hourglass-shaped drum whose pitch can be regulated to mimic the tone and prosody of human speech. It's played by squeezing the drum between the arm and body while striking it with a curved beater, changing the tension of the drumhead to produce different tones. Historically, talking drums were used to communicate messages over long distances, with skilled drummers able to replicate the tonal patterns of languages. Today, they remain important in traditional ceremonies and have been incorporated into modern African music.",
        },
        {
            id: 15,
            title: "Algaita",
            region: "Northern Nigeria & Niger, West Africa",
            category: "instruments",
            image: "images/gallery/algaita.jpg",
            description:
                "The Algaita is a double-reed wind instrument similar to an oboe, commonly used in traditional Hausa music in Northern Nigeria and Niger. It has a wooden body with finger holes and a metal bell, and produces a distinctive, powerful sound that can be heard over long distances. The Algaita is typically played during important ceremonies such as weddings, naming ceremonies, and the installation of chiefs. It's often accompanied by drums and is essential to the traditional music of the Hausa and Fulani peoples.",
        },
        {
            id: 16,
            title: "Tingatinga Painting",
            region: "Tanzania, East Africa",
            category: "art",
            image: "images/gallery/tingatinga.jpg",
            description:
                "Tingatinga painting is a distinctive African art style that originated in Tanzania in the second half of the 20th century, named after its creator, Edward Saidi Tingatinga. These paintings are characterized by vibrant colors, whimsical designs, and the use of bicycle or car enamel paint on canvas. Common subjects include stylized animals, village scenes, and abstract patterns. The style has evolved into a significant art movement, with many artists continuing the tradition while developing their own unique interpretations within the Tingatinga framework.",
        },
        {
            id: 17,
            title: "Ndebele House Painting",
            region: "South Africa & Zimbabwe, Southern Africa",
            category: "art",
            image: "images/gallery/ndebele.jpg",
            description:
                "Ndebele house painting is a form of artistic expression practiced by the Ndebele women of South Africa and Zimbabwe. They decorate the exterior walls of houses with bold, colorful geometric patterns using fingers and chicken feathers as brushes. Traditionally, these designs were created using natural pigments, though modern paintings often use commercial paints. The patterns have symbolic meanings and were historically a form of cultural resistance and communication during apartheid. This art form is passed down from mother to daughter, preserving cultural identity through generations.",
        },
        {
            id: 18,
            title: "Benin Bronze Sculptures",
            region: "Nigeria, West Africa",
            category: "art",
            image: "images/gallery/benin-bronze.jpg",
            description:
                "The Benin Bronzes are a collection of more than a thousand metal plaques and sculptures that decorated the royal palace of the Kingdom of Benin (now in Nigeria). Created from the 13th century onwards, these works were cast in bronze using the lost-wax method and depict historical events, religious ceremonies, and royal figures. Known for their highly detailed craftsmanship, the bronzes showcase the sophisticated artistic traditions of the Edo people. Many of these artifacts were looted during the British punitive expedition of 1897 and are now housed in museums worldwide, with ongoing discussions about their repatriation.",
        },
        {
            id: 19,
            title: "Kuba Cloth",
            region: "Democratic Republic of Congo, Central Africa",
            category: "art",
            image: "images/gallery/kuba-cloth.jpg",
            description:
                "Kuba cloth is a unique textile art form created by the Kuba people of the Democratic Republic of Congo. These textiles are made from raffia palm fibers that are woven, embroidered, cut-pile, and appliquéd to create complex geometric patterns. The intricate designs are created through a labor-intensive process where raffia threads are dyed using natural pigments and then embroidered onto a plain woven background. Kuba cloths serve various purposes, from ceremonial skirts and wall hangings to currency and status symbols, and are considered among Africa's most sophisticated textile traditions.",
        },
        {
            id: 20,
            title: "Ethiopian Orthodox Icons",
            region: "Ethiopia, East Africa",
            category: "art",
            image: "images/gallery/ethiopian-icons.jpg",
            description:
                "Ethiopian Orthodox icons represent one of Africa's oldest Christian artistic traditions, dating back to the 4th century when Christianity became the state religion of the Aksumite Empire. These religious paintings typically depict biblical scenes, saints, and angels using distinctive styles characterized by large, almond-shaped eyes, elongated figures, and vibrant colors on wooden panels, parchment, or church walls. The art combines Byzantine influences with indigenous African elements, creating a unique aesthetic. These icons are not merely decorative but serve important liturgical functions in Ethiopian Orthodox worship and are created following strict religious canons.",
        },
    ]

    // Function to create gallery items
    function createGalleryItems() {
        galleryItems.forEach((item) => {
            const galleryItem = document.createElement("div")
            galleryItem.className = `gallery-item ${item.category}`
            galleryItem.setAttribute("data-category", item.category)
            galleryItem.setAttribute("data-id", item.id)

            galleryItem.innerHTML = `
                <div class="gallery-image-container">
                    <img src="${item.image}" alt="${item.title}" class="gallery-image">
                </div>
                <div class="gallery-info">
                    <h3 class="gallery-title">${item.title}</h3>
                    <p class="gallery-region">${item.region}</p>
                </div>
            `

            galleryItem.addEventListener("click", () => {
                openModal(item)
            })

            galleryGrid.appendChild(galleryItem)
        })
    }

    // Function to filter gallery items
    function filterItems(category) {
        const items = document.querySelectorAll(".gallery-item")

        items.forEach((item) => {
            if (category === "all" || item.getAttribute("data-category") === category) {
                item.classList.remove("hidden")
            } else {
                item.classList.add("hidden")
            }
        })
    }

    // Function to open modal
    function openModal(item) {
        modalImage.src = item.image
        modalImage.alt = item.title
        modalTitle.textContent = item.title
        modalRegion.textContent = item.region
        modalDescription.textContent = item.description

        modal.style.display = "block"
        document.body.style.overflow = "hidden" // Prevent scrolling

        // Add fade-in animation
        modal.classList.remove("fade-in")
        void modal.offsetWidth // Trigger reflow
        modal.classList.add("fade-in")
    }

    // Function to close modal
    function closeModalFunc() {
        modal.style.display = "none"
        document.body.style.overflow = "" // Restore scrolling
    }

    // Add event listeners to filter buttons
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            // Remove active class from all buttons
            filterBtns.forEach((b) => b.classList.remove("active"))

            // Add active class to clicked button
            this.classList.add("active")

            // Filter items
            const category = this.getAttribute("data-filter")
            filterItems(category)
        })
    })

    // Add event listener to close modal
    closeModal.addEventListener("click", closeModalFunc)

    // Close modal when clicking outside of modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModalFunc()
        }
    })

    // Close modal with Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModalFunc()
        }
    })

    // Create gallery items
    createGalleryItems()
})
