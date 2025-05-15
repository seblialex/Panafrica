document.addEventListener("DOMContentLoaded", () => {
    const proverbs = [
        {
            text: "When the roots of a tree begin to decay, it spreads death to the branches.",
            origin: "Ethiopian Proverb",
        },
        {
            text: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested.",
            origin: "Guinean Proverb",
        },
        {
            text: "The child who is not embraced by the village will burn it down to feel its warmth.",
            origin: "African Proverb",
        },
        {
            text: "If you want to go fast, go alone. If you want to go far, go together.",
            origin: "African Proverb",
        },
        {
            text: "When an old man dies, a library burns to the ground.",
            origin: "African Proverb",
        },
        {
            text: "The fool speaks, the wise man listens.",
            origin: "Ethiopian Proverb",
        },
        {
            text: "A bird that flies off the earth and lands on an anthill is still on the ground.",
            origin: "Igbo Proverb (Nigeria)",
        },
        {
            text: "A single bracelet does not jingle.",
            origin: "Congolese Proverb",
        },
        {
            text: "The sun will shine on those who stand before it shines on those who kneel under them.",
            origin: "Ibo Proverb (Nigeria)",
        },
        {
            text: "By the time the fool has learned the game, the players have dispersed.",
            origin: "Ashanti Proverb (Ghana)",
        },
        {
            text: "He who learns, teaches.",
            origin: "Ethiopian Proverb",
        },
        {
            text: "Do not look where you fell, but where you slipped.",
            origin: "African Proverb",
        },
        {
            text: "The lion does not turn around when a small dog barks.",
            origin: "African Proverb",
        },
        {
            text: "A man who uses force is afraid of reasoning.",
            origin: "Kenyan Proverb",
        },
        {
            text: "The eye never forgets what the heart has seen.",
            origin: "African Proverb",
        },
        {
            text: "A flea can trouble a lion more than a lion can trouble a flea.",
            origin: "Kenyan Proverb",
        },
        {
            text: "A roaring lion kills no game.",
            origin: "African Proverb",
        },
        {
            text: "A wise person will always find a way.",
            origin: "Tanzanian Proverb",
        },
        {
            text: "Wisdom is like a baobab tree; no one individual can embrace it.",
            origin: "Akan Proverb (Ghana)",
        },
        {
            text: "The axe forgets; the tree remembers.",
            origin: "African Proverb",
        },
        {
            text: "Where water is the boss, the land must obey.",
            origin: "African Proverb",
        },
        {
            text: "When you follow in the path of your father, you learn to walk like him.",
            origin: "Ashanti Proverb (Ghana)",
        },
        {
            text: "If you close your eyes to facts, you will learn through accidents.",
            origin: "African Proverb",
        },
        {
            text: "The chameleon changes color to match the earth, the earth doesn't change colors to match the chameleon.",
            origin: "Senegalese Proverb",
        },
        {
            text: "A family is like a forest, when you are outside it is dense, when you are inside you see that each tree has its place.",
            origin: "African Proverb",
        },
        {
            text: "Cross the river in a crowd and the crocodile won't eat you.",
            origin: "African Proverb",
        },
        {
            text: "When the music changes, so does the dance.",
            origin: "Hausa Proverb (Nigeria)",
        },
        {
            text: "The one who asks questions doesn't lose his way.",
            origin: "African Proverb",
        },
        {
            text: "If you want to know the end, look at the beginning.",
            origin: "African Proverb",
        },
        {
            text: "The best way to eat an elephant in your path is to cut it up into little pieces.",
            origin: "African Proverb",
        },
        {
            text: "Until the lion tells his side of the story, the tale of the hunt will always glorify the hunter.",
            origin: "African Proverb",
        },
        {
            text: "However long the night, the dawn will break.",
            origin: "African Proverb",
        },
        {
            text: "Even the best cooking pot will not produce food.",
            origin: "African Proverb",
        },
        {
            text: "A tree is known by its fruit, not by its flowers.",
            origin: "African Proverb",
        },
        {
            text: "A child is a child of everyone.",
            origin: "Sudanese Proverb",
        },
        {
            text: "The teeth are smiling, but is the heart?",
            origin: "Congolese Proverb",
        },
        {
            text: "When a king has good counselors, his reign is peaceful.",
            origin: "Ashanti Proverb (Ghana)",
        },
        {
            text: "A single stick may smoke, but it will not burn.",
            origin: "African Proverb",
        },
        {
            text: "The death of an elderly man is like a burning library.",
            origin: "African Proverb",
        },
        {
            text: "Money is sharper than the sword.",
            origin: "Ashanti Proverb (Ghana)",
        },
    ]

    const proverb = document.getElementById("proverb-text")
    const origin = document.getElementById("proverb-origin")
    const generateBtn = document.getElementById("generate-btn")
    const shareBtn = document.getElementById("share-btn")

    // Function to generate a random proverb
    function generateProverb() {
        // Remove fade-in class
        proverb.classList.remove("fade-in")
        origin.classList.remove("fade-in")

        // Trigger reflow
        void proverb.offsetWidth

        // Get random proverb
        const randomIndex = Math.floor(Math.random() * proverbs.length)
        const randomProverb = proverbs[randomIndex]

        // Update content
        proverb.textContent = randomProverb.text
        origin.textContent = randomProverb.origin

        // Add fade-in class
        proverb.classList.add("fade-in")
        origin.classList.add("fade-in")

        // Enable share button
        shareBtn.disabled = false
    }

    // Function to copy proverb to clipboard
    function copyToClipboard() {
        const textToCopy = `"${proverb.textContent}" - ${origin.textContent}`

        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                showNotification("Proverb copied to clipboard!")
            })
            .catch((err) => {
                console.error("Could not copy text: ", err)
            })
    }

    // Function to show notification
    function showNotification(message) {
        // Create notification element if it doesn't exist
        let notification = document.querySelector(".notification")

        if (!notification) {
            notification = document.createElement("div")
            notification.className = "notification"
            document.body.appendChild(notification)
        }

        // Set message and show notification
        notification.textContent = message
        notification.classList.add("show")

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove("show")
        }, 3000)
    }

    // Event listeners
    generateBtn.addEventListener("click", generateProverb)
    shareBtn.addEventListener("click", copyToClipboard)

    // Generate a proverb on page load
    generateProverb()
})
