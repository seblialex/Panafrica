document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const startScreen = document.getElementById("start-screen")
    const questionScreen = document.getElementById("question-screen")
    const resultsScreen = document.getElementById("results-screen")
    const categoryBtns = document.querySelectorAll(".category-btn")
    const questionText = document.getElementById("question-text")
    const optionsContainer = document.getElementById("options-container")
    const progressFill = document.getElementById("progress-fill")
    const questionCounter = document.getElementById("question-counter")
    const quizScore = document.getElementById("quiz-score")
    const feedbackContainer = document.getElementById("feedback-container")
    const feedbackMessage = document.getElementById("feedback-message")
    const nextBtn = document.getElementById("next-btn")
    const finalScore = document.getElementById("final-score")
    const resultsMessage = document.getElementById("results-message")
    const playAgainBtn = document.getElementById("play-again-btn")
    const changeCategoryBtn = document.getElementById("change-category-btn")
    const highScoresList = document.getElementById("high-scores-list")
    const flagImageContainer = document.getElementById("flag-image-container")
    const flagImage = document.getElementById("flag-image")

    // Quiz Data (Example - Replace with your actual quiz data)
    const quizData = {
        geography: [
            {
                question: "What is the capital of Nigeria?",
                options: ["Lagos", "Abuja", "Kano", "Ibadan"],
                answer: "Abuja",
            },
            {
                question: "Which river is the longest in Africa?",
                options: ["Nile", "Congo", "Niger", "Zambezi"],
                answer: "Nile",
            },
            {
                question: "What is the capital of Ethiopia?",
                options: ["Addis Ababa", "Nairobi", "Khartoum", "Kampala"],
                answer: "Addis Ababa",
            },
            {
                question: "Which is the largest country by area in Africa?",
                options: ["Nigeria","Algeria", "Sudan", "South Africa"],
                answer: "Algeria",
            },
            {
                question: "Mount Kilimanjaro is located in which African country?",
                options: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
                answer: "Tanzania",
            },
            {
                question: "Which African country is an island nation?",
                options: ["Somalia", "Seychelles", "Ghana","Malawi"],
                answer: "Seychelles",
            },
            {
                question: "Which African lake is the largest by area?",
                options: ["Lake Chad","Lake Tanganyika","Lake Victoria","Lake Malawi"],
                answer: "Lake Victoria",
            },
            {
                question: "What is the capital of South Africa's legislative branch?",
                options: ["Pretoria","Johannesburg","Cape Town","Durban"],
                answer: "Cape Town",
            },
            {
                question: "Which country is known for the pyramids of Giza?",
                options: ["Sudan","Ethiopia","Egypt","Libya"],
                answer: "Egypt",
            },
            {
                question: "What is the official language of Angola?",
                options: ["French","English","Portuguese","Swahili"],
                answer: "Portuguese",
            },
        ],
        history: [
                {
                    question: "Who was the first president of independent Ghana?",
                    options: ["Nelson Mandela", "Kwame Nkrumah", "Jomo Kenyatta", "Julius Nyerere"],
                    answer: "Kwame Nkrumah",
                },
                {
                    question: "In which year did South Africa hold its first democratic elections?",
                    options: ["1984", "1990", "1994", "1999"],
                    answer: "1994",
                },
                {
                    question: "Which ancient African city was famous for its university and libraries?",
                    options: ["Timbuktu", "Alexandria", "Carthage", "Great Zimbabwe"],
                    answer: "Timbuktu",
                },
                {
                    question: "Who led the resistance against Italian colonization in Ethiopia during the Battle of Adwa?",
                    options: ["Haile Selassie", "Menelik II", "Tewodros II", "Yohannes IV"],
                    answer: "Menelik II",
                },
                {
                    question: "Which African empire was known for its wealth and gold under Mansa Musa?",
                    options: ["Songhai Empire", "Mali Empire", "Ghana Empire", "Benin Empire"],
                    answer: "Mali Empire",
                },
                {
                    question: "What was the main purpose of the Berlin Conference of 1884–85?",
                    options: ["End slavery in Africa", "Divide Africa among European powers", "Unite African kingdoms", "Promote African trade"],
                    answer: "Divide Africa among European powers",
                },
                {
                    question: "Who was the leader of the African National Congress during the anti-apartheid struggle?",
                    options: ["Thabo Mbeki", "Desmond Tutu", "Steve Biko", "Nelson Mandela"],
                    answer: "Nelson Mandela",
                },
                {
                    question: "Which North African country experienced a major revolution during the Arab Spring in 2011?",
                    options: ["Algeria", "Tunisia", "Morocco", "Egypt"],
                    answer: "Tunisia",
                },
                {
                    question: "What kingdom built the Great Enclosure at Great Zimbabwe?",
                    options: ["Zulu", "Shona", "Bantu", "Ndebele"],
                    answer: "Shona",
                },
                {
                    question: "Which African country was never colonized by a European power?",
                    options: ["Liberia", "Ethiopia", "Morocco", "Egypt"],
                    answer: "Ethiopia",
                },
            ],
        culture: [
                {
                    question: "Which traditional Maasai clothing item is commonly worn in Kenya and Tanzania?",
                    options: ["Dashiki", "Kanzu", "Shúkà", "Boubou"],
                    answer: "Shúkà",
                },
                {
                    question: "Which West African country is famous for the Kente cloth?",
                    options: ["Ghana", "Nigeria", "Senegal", "Ivory Coast"],
                    answer: "Ghana",
                },
                {
                    question: "Which African festival celebrates the Yoruba deity Osun?",
                    options: ["Timkat", "Osun-Osogbo", "Durbar", "Eyo Festival"],
                    answer: "Osun-Osogbo",
                },
                {
                    question: "What is the name of the traditional Ethiopian coffee ceremony?",
                    options: ["Injera", "Bunna", "Doro Wat", "Shiro"],
                    answer: "Bunna",
                },
                {
                    question: "Which genre of music originated from Nigeria and was popularized by Fela Kuti?",
                    options: ["Highlife", "Soukous", "Afrobeat", "Makossa"],
                    answer: "Afrobeat",
                },
                {
                    question: "In which country is the traditional dance called Indlamu performed by the Zulu people?",
                    options: ["South Africa", "Botswana", "Zimbabwe", "Mozambique"],
                    answer: "South Africa",
                },
                {
                    question: "What is the staple food made from cassava or yam commonly eaten in West Africa?",
                    options: ["Couscous", "Fufu", "Injera", "Ugali"],
                    answer: "Fufu",
                },
                {
                    question: "Which traditional North African instrument is often used in Gnawa music?",
                    options: ["Kora", "Balafon", "Guembri", "Talking drum"],
                    answer: "Guembri",
                },
                {
                    question: "Which festival in Mali celebrates the culture of the Dogon people?",
                    options: ["FESPACO", "Gerewol", "Sigui", "Fantasia"],
                    answer: "Sigui",
                },
                {
                    question: "Which traditional cloth from Nigeria features indigo-dyed patterns?",
                    options: ["Adire", "Kente", "Bogolanfini", "Shúkà"],
                    answer: "Adire",
                },
            ],
        flags: [
                {
                    question: "Which country's flag is this?",
                    flagImage: "images/flags/senegal.png",
                    options: ["Senegal", "Mali", "Guinea", "Gambia"],
                    answer: "Senegal",
                },
                {
                    question: "Which country's flag is this?",
                    flagImage: "images/flags/libya.png",
                    options: ["Libya", "Tunisia", "Algeria", "Egypt"],
                    answer: "Libya",
                },
                {
                    question: "Which country's flag is this?",
                    flagImage: "images/flags/kenya.png",
                    options: ["Kenya", "Uganda", "Tanzania", "Ethiopia"],
                    answer: "Kenya",
                },
                {
                    question: "Which country's flag is this?",
                    flagImage: "images/flags/south-africa.png",
                    options: ["South Africa", "Namibia", "Zimbabwe", "Lesotho"],
                    answer: "South Africa",
                },
                {
                    question: "Which country's flag is this?",
                    flagImage: "images/flags/nigeria.png",
                    options: ["Nigeria", "Ghana", "Sierra Leone", "Cameroon"],
                    answer: "Nigeria",
                },
                {
                    question: "Which country's flag is this?",
                    flagImage: "images/flags/ethiopia.png",
                    options: ["Ethiopia", "Eritrea", "Sudan", "Djibouti"],
                    answer: "Ethiopia",
                },
                {
                    question: "Which country's flag is this?",
                    flagImage: "images/flags/morocco.png",
                    options: ["Morocco", "Algeria", "Tunisia", "Mauritania"],
                    answer: "Morocco",
                },
                {
                    question: "Which country's flag is this?",
                    flagImage: "images/flags/ghana.png",
                    options: ["Ghana", "Benin", "Togo", "Ivory Coast"],
                    answer: "Ghana",
                },
                {
                    question: "Which country's flag is this?",
                    flagImage: "images/flags/uganda.png",
                    options: ["Uganda", "Kenya", "Rwanda", "Burundi"],
                    answer: "Uganda",
                },
                {
                    question: "Which country's flag is this?",
                    flagImage: "images/flags/zimbabwe.png",
                    options: ["Zimbabwe", "Zambia", "Botswana", "Malawi"],
                    answer: "Zimbabwe",
                },
            ],
    };

    // Quiz State
    let currentCategory = "";
    let currentQuestions = [];
    let currentQuestionIndex = 0
    let score = 0
    const highScores = JSON.parse(localStorage.getItem("panAfricanQuizHighScores")) || {}

    // Initialize high scores if not exist
    if (!highScores.geography) highScores.geography = 0
    if (!highScores.history) highScores.history = 0
    if (!highScores.culture) highScores.culture = 0
    if (!highScores.flags) highScores.flags = 0

    // Event Listeners
    categoryBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            currentCategory = this.getAttribute("data-category")
            startQuiz(currentCategory)
        })
    })

    nextBtn.addEventListener("click", showNextQuestion)
    playAgainBtn.addEventListener("click", () => {
        startQuiz(currentCategory)
    })

    changeCategoryBtn.addEventListener("click", () => {
        showScreen(startScreen)
    })

    // Functions
    function startQuiz(category) {
        // Reset quiz state
        currentQuestionIndex = 0
        score = 0

        // Get questions for selected category
        currentQuestions = [...quizData[category]]

        // Shuffle questions
        shuffleArray(currentQuestions)

        // Take only 10 questions
        currentQuestions = currentQuestions.slice(0, 10)

        // Update UI
        updateQuestionCounter()
        updateScore()
        showScreen(questionScreen)
        showQuestion()
    }

    function showQuestion() {
        const question = currentQuestions[currentQuestionIndex]

        // Update progress bar
        const progressPercentage = (currentQuestionIndex / currentQuestions.length) * 100
        progressFill.style.width = `${progressPercentage}%`

        // Update question text
        questionText.textContent = question.question

        // Clear options
        optionsContainer.innerHTML = ""

        // Show flag image if available
        if (question.flagImage) {
            flagImage.src = question.flagImage
            flagImageContainer.style.display = "block"
        } else {
            flagImageContainer.style.display = "none"
        }

        // Add options
        const options = [...question.options]
        shuffleArray(options)

        options.forEach((option) => {
            const optionBtn = document.createElement("button")
            optionBtn.className = "option-btn"
            optionBtn.textContent = option
            optionBtn.addEventListener("click", () => {
                checkAnswer(option)
            })

            optionsContainer.appendChild(optionBtn)
        })

        // Hide feedback
        feedbackContainer.style.display = "none"
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = currentQuestions[currentQuestionIndex].answer
        const isCorrect = selectedOption === correctAnswer

        // Disable all option buttons
        const optionBtns = document.querySelectorAll(".option-btn")
        optionBtns.forEach((btn) => {
            btn.classList.add("disabled")
            btn.disabled = true

            // Highlight correct and incorrect answers
            if (btn.textContent === correctAnswer) {
                btn.classList.add("correct")
            } else if (btn.textContent === selectedOption && !isCorrect) {
                btn.classList.add("incorrect")
            }
        })

        // Update score if correct
        if (isCorrect) {
            score++
            updateScore()
        }

        // Show feedback
        feedbackMessage.textContent = isCorrect
            ? "Correct! Well done!"
            : `Incorrect. The correct answer is: ${correctAnswer}`

        feedbackMessage.className = "feedback-message " + (isCorrect ? "correct" : "incorrect")
        feedbackContainer.style.display = "block"
    }

    function showNextQuestion() {
        currentQuestionIndex++

        if (currentQuestionIndex < currentQuestions.length) {
            updateQuestionCounter()
            showQuestion()
        } else {
            showResults()
        }
    }

    function showResults() {
        // Update final score
        finalScore.textContent = score

        // Update results message
        let message = ""
        const percentage = (score / currentQuestions.length) * 100

        if (percentage >= 90) {
            message = "Outstanding! You are a true Pan-African scholar!"
        } else if (percentage >= 70) {
            message = "Great job! You have excellent knowledge of Africa!"
        } else if (percentage >= 50) {
            message = "Good effort! You know quite a bit about Africa."
        } else {
            message = "Keep learning! There's so much more to discover about Africa."
        }

        resultsMessage.textContent = message

        // Update high score if needed
        if (score > highScores[currentCategory]) {
            highScores[currentCategory] = score
            localStorage.setItem("panAfricanQuizHighScores", JSON.stringify(highScores))
        }

        // Display high scores
        displayHighScores()

        // Show results screen
        showScreen(resultsScreen)
    }

    function displayHighScores() {
        highScoresList.innerHTML = ""

        for (const category in highScores) {
            const highScoreItem = document.createElement("div")
            highScoreItem.className = "high-score-item"

            const categoryName = category.charAt(0).toUpperCase() + category.slice(1)

            highScoreItem.innerHTML = `
                <span class="high-score-category">${categoryName}</span>
                <span class="high-score-value">${highScores[category]}/10</span>
            `

            highScoresList.appendChild(highScoreItem)
        }
    }

    function updateQuestionCounter() {
        questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`
    }

    function updateScore() {
        quizScore.textContent = `Score: ${score}`
    }

    function showScreen(screen) {
        startScreen.style.display = "none"
        questionScreen.style.display = "none"
        resultsScreen.style.display = "none"

        screen.style.display = "block"
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
    }

    // Initialize high scores display
    displayHighScores()
})
