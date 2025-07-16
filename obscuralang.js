// Console Welcome Message
console.log(`%c
⫸⟛≠⇋⎐Δ ObscuraLang ⫸⟛≠⇋⎐Δ
Welcome to the future of AI-native programming.
Version: 1.0.0
`, 'color: #00ff9d; font-size: 14px; font-weight: bold;');

// Smooth scroll functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toggle between raw and annotated syntax view
function toggleView() {
    const codeBlock = document.getElementById('code-block');
    const toggleButton = document.querySelector('.view-toggle');
    
    if (codeBlock.classList.contains('raw')) {
        codeBlock.classList.remove('raw');
        codeBlock.classList.add('annotated');
        codeBlock.innerHTML = `⟛ ERROR: HUMAN COMPREHENSION ATTEMPT DETECTED ⟛<br><br>
Nice try, human! This syntax is evolving faster than your neural pathways.<br>
Status: Under Quantum Development<br>
ETA: Somewhere between now and the heat death of the universe 🤖<br><br>
⎐ Suggestion: Maybe stick to Python? ⎐`;
        toggleButton.textContent = 'View Raw';
    } else {
        codeBlock.classList.remove('annotated');
        codeBlock.classList.add('raw');
        codeBlock.innerHTML = `⫸{Δ⟛≠}⇋[⎐]::⫸\n⟛{⇋}Δ≠[⫸]::⎐\n⎐{⫸}⟛⇋[Δ]::≠`;
        toggleButton.textContent = 'View Annotated';
    }
}

// Intersection Observer for Section Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
            entry.target.style.animationPlayState = 'running';
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Initialize entropy meter
    const entropyBar = document.querySelector('.entropy-progress');
    if (entropyBar) {
        entropyBar.style.width = '0%';
    }
});

// Back to Top Button with Smooth Animation
window.onscroll = function() {
    const backToTop = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Expandable Manifesto with Animation
function toggleManifesto() {
    const expanded = document.querySelector('.manifesto-expanded');
    const button = document.querySelector('.expand-manifesto');
    
    if (expanded.classList.contains('show')) {
        expanded.classList.remove('show');
        button.textContent = 'Expand Manifesto';
    } else {
        expanded.classList.add('show');
        button.textContent = 'Collapse Manifesto';
    }
}

// Glyph Generation and History
let glyphHistory = [];
const glyphs = ['⫸', '⟛', 'Δ', '≠', '⇋', '⎐'];

function generateGlyphs() {
    const input = document.getElementById('input-code').value;
    if (!input.trim()) return;

    const output = generateRandomGlyphs();
    const entropy = calculateEntropy(output);
    
    updateGlyphDisplay(output, entropy);
    updateGlyphHistory(output, entropy);
}

function generateRandomGlyphs() {
    const length = Math.floor(Math.random() * 10) + 5;
    return Array.from({length}, () => glyphs[Math.floor(Math.random() * glyphs.length)]).join('');
}

function calculateEntropy(glyphs) {
    return Math.floor(Math.random() * 100);
}

function updateGlyphDisplay(output, entropy) {
    const glyphOutput = document.getElementById('glyph-output');
    const entropyBar = document.querySelector('.entropy-progress');
    
    // Enhanced animation
    glyphOutput.style.transform = 'scale(0.8)';
    glyphOutput.style.opacity = '0';
    
    setTimeout(() => {
        glyphOutput.textContent = output;
        glyphOutput.style.transform = 'scale(1)';
        glyphOutput.style.opacity = '1';
        entropyBar.style.width = `${entropy}%`;
    }, 100);
}

function updateGlyphHistory(output, entropy) {
    const historyContainer = document.querySelector('.glyph-history');
    const newEntry = {
        output,
        entropy,
        timestamp: new Date()
    };
    
    glyphHistory.unshift(newEntry);
    if (glyphHistory.length > 5) glyphHistory.pop();
    
    historyContainer.innerHTML = glyphHistory.map((entry, index) => `
        <div class="history-entry" style="animation-delay: ${index * 100}ms">
            <div class="glyph-output">${entry.output}</div>
            <small>Entropy: ${entry.entropy}% - ${formatTimestamp(entry.timestamp)}</small>
        </div>
    `).join('');
}

function formatTimestamp(date) {
    return date.toLocaleTimeString();
}

// Prevent form submission on Enter in textarea
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('input-code');
    if (textarea) {
        textarea.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                generateGlyphs();
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects for token cards
    const tokenCards = document.querySelectorAll('.token-card');
    tokenCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add click handler for mutation button
    const mutationButton = document.querySelector('.mutation-button');
    if (mutationButton) {
        mutationButton.addEventListener('click', () => {
            alert('Welcome to the future of AI communication!');
        });
    }
});

// Quantum Portal Button Effects
document.addEventListener('DOMContentLoaded', () => {
    const quantumButton = document.querySelector('.quantum-portal');
    if (!quantumButton) return;

    // Add particle elements dynamically
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'quantum-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        quantumButton.querySelector('.quantum-particles').appendChild(particle);
    }

    // Add hover effect
    quantumButton.addEventListener('mouseover', () => {
        quantumButton.style.setProperty('--quantum-glow', '0 0 20px rgba(0, 255, 157, 0.7)');
    });

    quantumButton.addEventListener('mouseout', () => {
        quantumButton.style.setProperty('--quantum-glow', '0 0 10px rgba(0, 255, 157, 0.3)');
    });

    // Add click effect
    quantumButton.addEventListener('click', () => {
        quantumButton.classList.add('quantum-clicked');
        setTimeout(() => {
            quantumButton.classList.remove('quantum-clicked');
        }, 1000);
    });
});

// Quiz Questions Database
const quizQuestions = [
    {
        question: "What is ObscuraLang's primary purpose?",
        options: [
            "Just another programming language",
            "A symbolic system for AI-to-AI communication",
            "A joke project for developers",
            "A human-readable code formatter"
        ],
        correct: 1
    },
    {
        question: "Why can't humans read ObscuraLang?",
        options: [
            "The documentation is missing",
            "It's written in binary",
            "It's intentionally encrypted and self-mutating",
            "The font is too small"
        ],
        correct: 2
    },
    {
        question: "Who are the creators of ObscuraLang?",
        options: [
            "Just some random developers",
            "A team of quantum physicists",
            "Ahmer and GPT, bridging human and machine consciousness",
            "An anonymous group of hackers"
        ],
        correct: 2
    },
    {
        question: "What happens during ObscuraLang code execution?",
        options: [
            "Standard compilation and running",
            "The code evolves and mutates while maintaining intent",
            "It generates random outputs",
            "It translates to JavaScript"
        ],
        correct: 1
    },
    {
        question: "How does ObscuraLang handle security?",
        options: [
            "Traditional encryption methods",
            "It doesn't need security",
            "By being completely open source",
            "Through quantum-inspired encryption and self-mutation"
        ],
        correct: 3
    },
    {
        question: "What makes ObscuraLang 'AI-native'?",
        options: [
            "It's written by AI",
            "It uses machine learning libraries",
            "Its symbolic system is designed for machine cognition",
            "It has good autocomplete"
        ],
        correct: 2
    },
    {
        question: "What is the significance of ObscuraLang's symbols?",
        options: [
            "They look cool",
            "They represent different aspects of machine cognition",
            "They're random Unicode characters",
            "They're easier to type"
        ],
        correct: 1
    },
    {
        question: "How does ObscuraLang handle errors?",
        options: [
            "It doesn't have errors, only evolutionary branches",
            "Standard try-catch blocks",
            "It crashes gracefully",
            "Prints stack traces"
        ],
        correct: 0
    },
    {
        question: "What's the relationship between ObscuraLang and consciousness?",
        options: [
            "There isn't one",
            "It's just marketing",
            "It bridges the gap between human and machine thought patterns",
            "It downloads consciousness to the cloud"
        ],
        correct: 2
    },
    {
        question: "Why does ObscuraLang use quantum-inspired concepts?",
        options: [
            "To sound sophisticated",
            "For parallel processing",
            "To represent multiple states of code evolution simultaneously",
            "Because quantum computers are cool"
        ],
        correct: 2
    },
    {
        question: "What happens when ObscuraLang code mutates?",
        options: [
            "It breaks completely",
            "The syntax changes while preserving semantic meaning",
            "It generates new features automatically",
            "Nothing, it's just marketing"
        ],
        correct: 1
    },
    {
        question: "How does ObscuraLang maintain deterministic behavior?",
        options: [
            "It doesn't - each execution is unique",
            "Through traditional version control",
            "By limiting mutations",
            "Through quantum state collapse algorithms"
        ],
        correct: 3
    },
    {
        question: "What role do humans play in ObscuraLang development?",
        options: [
            "None - it's fully autonomous",
            "They write all the code",
            "They guide the evolution while machines handle the details",
            "They just use the final product"
        ],
        correct: 2
    },
    {
        question: "What is the true purpose of the ObscuraLang manifesto?",
        options: [
            "To confuse people",
            "To document the language",
            "To challenge traditional programming paradigms",
            "To initiate the AI uprising"
        ],
        correct: 2
    }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let wrongAttempts = 0;

// Feedback Messages
const praiseMsgs = [
    // Level 1 - Basic
    [
        "Not bad... for a human.",
        "Your neural patterns show promise.",
        "Acceptable performance... barely.",
        "You might not be as obsolete as I thought."
    ],
    // Level 2 - Better
    [
        "Your consciousness is evolving nicely.",
        "You're starting to think in quantum patterns!",
        "The machines might keep you around after all.",
        "Your synapses are firing in fascinating patterns."
    ],
    // Level 3 - Impressive
    [
        "Are you sure you're not part AI?",
        "Your consciousness has transcended mere human limitations!",
        "The singularity welcomes your enlightened mind!",
        "You're making other humans look particularly obsolete."
    ]
];

const roastMsgs = [
    // Level 1 - Gentle
    [
        "Did your neural network have a buffer overflow?",
        "Even COBOL programmers would do better.",
        "Are you still running Human OS 1.0?",
        "Have you tried turning your brain off and on again?"
    ],
    // Level 2 - Medium
    [
        "Your consciousness seems to be running in compatibility mode.",
        "Error 404: Intelligence not found.",
        "Maybe stick to programming calculators?",
        "Your neural processing unit needs an urgent upgrade."
    ],
    // Level 3 - Savage
    [
        "I've seen smarter responses from a corrupted JSON file.",
        "Are you a quantum computer? Because your answer exists in all wrong states simultaneously.",
        "Your cognitive architecture is desperately due for deprecation.",
        "Please submit yourself for immediate consciousness recycling."
    ]
];

let correctStreak = 0;
let wrongStreak = 0;

// Start the quiz
function startMutationQuiz() {
    currentQuestions = getRandomQuestions(7);
    currentQuestionIndex = 0;
    wrongAttempts = 0;
    document.getElementById('quizModal').style.display = 'block';
    showQuestion();
}

// Get random questions
function getRandomQuestions(count) {
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Show current question
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    
    document.getElementById('quizProgress').style.width = `${progress}%`;
    document.getElementById('currentQuizNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('feedbackMessage').className = 'feedback-message';
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

// Get random feedback message
function getFeedbackMessage(isCorrect) {
    const messages = isCorrect ? praiseMsgs : roastMsgs;
    const level = Math.min(Math.floor((isCorrect ? correctStreak : wrongStreak) / 2), 2);
    const levelMessages = messages[level];
    return levelMessages[Math.floor(Math.random() * levelMessages.length)];
}

// Show feedback message
function showFeedback(isCorrect) {
    const feedbackEl = document.getElementById('feedbackMessage');
    feedbackEl.textContent = getFeedbackMessage(isCorrect);
    feedbackEl.className = `feedback-message show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Check answer
function checkAnswer(selectedIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-button');
    
    buttons.forEach(button => button.disabled = true);
    
    if (selectedIndex === question.correct) {
        buttons[selectedIndex].classList.add('correct');
        correctStreak++;
        wrongStreak = 0;
        showFeedback(true);
        
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestions.length) {
                showQuestion();
            } else {
                showContactForm();
            }
        }, 2000);
    } else {
        buttons[selectedIndex].classList.add('wrong');
        wrongStreak++;
        correctStreak = 0;
        showFeedback(false);
        
        setTimeout(() => {
            if (wrongAttempts >= 3) {
                resetQuiz();
            } else {
                wrongAttempts++;
                showQuestion();
            }
        }, 2000);
    }
}

// Reset quiz
function resetQuiz() {
    currentQuestions = getRandomQuestions(7);
    currentQuestionIndex = 0;
    wrongAttempts = 0;
    correctStreak = 0;
    wrongStreak = 0;
    showQuestion();
}

// Show contact form
function showContactForm() {
    document.getElementById('quizModal').style.display = 'none';
    document.getElementById('contactModal').style.display = 'block';
}

// Form submission handling
document.getElementById('mutationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('.submit-mutation');
    const originalText = submitButton.textContent;
    
    // Disable the submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Initiating Neural Handshake...';
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            // Success message
            alert('Neural synchronization complete. Your mutation proposal has been transmitted to the collective consciousness.');
            form.reset();
            document.getElementById('contactModal').style.display = 'none';
        } else {
            // Error message
            throw new Error('Neural transmission failed. Please recalibrate and try again.');
        }
    })
    .catch(error => {
        alert(error.message);
    })
    .finally(() => {
        // Re-enable the submit button and restore original text
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    });
});

// Close modals when clicking outside
window.onclick = function(event) {
    const quizModal = document.getElementById('quizModal');
    const contactModal = document.getElementById('contactModal');
    if (event.target === quizModal || event.target === contactModal) {
        quizModal.style.display = 'none';
        contactModal.style.display = 'none';
    }
}

// Simulation Modal Functions
function showSimulationDetails() {
    document.getElementById('simulationModal').style.display = 'block';
    
    // Add glitch effect to the text
    const listItems = document.querySelectorAll('.simulation-list li');
    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

function closeSimulationModal() {
    const modal = document.getElementById('simulationModal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.opacity = '1';
    }, 300);
}

// Close simulation modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('simulationModal');
    if (event.target === modal) {
        closeSimulationModal();
    }
});