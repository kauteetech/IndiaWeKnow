// ==========================================
// THE INDIA WE NEVER KNEW - PREMIUM EDITION
// Content Source: PDF Only (No External Content)
// ==========================================

// Application State
const state = {
    currentScreen: 'home',
    currentChapter: null,
    currentSlide: 0,
    totalSlides: 0
};

// ==========================================
// CONTENT DATABASE - EXTRACTED FROM PDF
// All content below is directly from the PDF
// ==========================================

const content = {
    // Chapter 1: Story of Satyakam (12 moments from PDF)
    story: [
        {
            title: "The Question of Lineage",
            text: `From an early age, Satyakam was possessed by an unwavering longing to study the Vedas, the sacred spiritual scriptures of India. In ancient times, the pursuit of knowledge followed the revered Guru–Shishya Parampara, a tradition in which a seeker humbly approached a Guru, surrendered himself to disciplined learning, and received wisdom through reverence and service.

Guided by this inner calling, Satyakam approached the sage Rishi Gautam and expressed his earnest desire to be instructed in the Vedas. However, in that era, the privilege of studying sacred texts was reserved exclusively for those born into the Brahmin lineage. As was customary, the sage questioned Satyakam about his ancestry to determine his eligibility.`
        },
        {
            title: "Mother's Truth",
            text: `Uncertain of his lineage, Satyakam returned to his mother seeking the truth. Jabali, steadfast in her integrity, confessed that in her youth she had served many men and could not say who Satyakam's father was.

This moment defined not just Satyakam's journey, but revealed the profound courage of Jabali—a woman who chose truth over convenience, knowing well the social consequences of her honesty.`
        },
        {
            title: "The Power of Honesty",
            text: `Armed with this truth, Satyakam returned to Rishi Gautam and spoke with complete honesty. He admitted that he did not know his father, nor his gotra (parental lineage), for his mother herself was unaware of his paternal lineage.

Moved by this unflinching truthfulness, Rishi Gautam recognized in the young seeker a rare and profound virtue. The sage declared that such honesty could belong only to one worthy of sacred knowledge.`
        },
        {
            title: "Named After Truth",
            text: `Though Satyakam's lineage was unknown, his integrity and deep yearning for wisdom revealed his true spiritual nature. Accepting him as his disciple, Rishi Gautam agreed to impart the Vedas to him.

The sage further proclaimed that henceforth, Satyakam would be known by his mother's name, honouring truth over convention. Thus, he became Satyakam Jabali, a name that would endure through generations as a testament to honesty, courage, and the timeless pursuit of knowledge.`
        },
        {
            title: "The Impossible Task",
            text: `When his education reached its completion, the time came for him to depart and offer Guru Dakshina, the sacred repayment of knowledge received.

With humility, Satyakam asked his Guru how he might serve him in return. Sage Gautam entrusted him with forty frail and emaciated cows and set forth a seemingly impossible task: within three years, Satyakam was to turn them into a herd of one hundred without acquiring a single additional cow.`
        },
        {
            title: "Journey to the Forest",
            text: `The animals were weak, barely able to stand, let alone multiply. Doubt momentarily stirred within Satyakam's mind, yet his reverence for his Guru dissolved all hesitation. Accepting the challenge as a sacred duty, he bowed in obedience.

Leading the cows into the depths of the forest, Satyakam chose a life of solitude and contemplation. Immersed in meditation, he recited the Vedas and communed silently with the rhythms of nature.`
        },
        {
            title: "Nature Responds",
            text: `In his calm presence and through the resonance of sacred knowledge, the forest itself seemed to respond. The land grew fertile, nourishment became abundant, and day by day the cows regained strength.

With time, vitality returned to them, and life multiplied naturally. Within the appointed years, the forty had indeed become one hundred.`
        },
        {
            title: "The Return",
            text: `When the appointed years had passed, Satyakam turned his steps back toward the hermitage of Sage Gautam. The forest, once a place of trial, now felt like a silent witness to his transformation.

Behind him moved a thriving herd—one hundred strong—where once there had been only forty weakened creatures entrusted to his care.`
        },
        {
            title: "Silent Recognition",
            text: `Sage Gautam watched in quiet contemplation as Satyakam approached. No words were needed to explain what had transpired. The answer stood before him, breathing, moving, alive.

In the strength of the herd, the sage saw not merely fulfilment of a task, but the quiet flowering of discipline, patience, and harmony born of true understanding.`
        },
        {
            title: "The True Offering",
            text: `Satyakam bowed and offered the cows as his Guru Dakshina, his eyes steady and unburdened. The journey had taught him that knowledge was not a possession granted by birth, nor a reward claimed through entitlement.

It was a living force—one that demanded honesty, devotion, and right action. When approached with reverence, it shaped not only the mind, but the world around it.`
        },
        {
            title: "Wisdom Through Conduct",
            text: `As Satyakam stood at the threshold of departure, he carried with him more than sacred verses or learned teachings. He carried an understanding that wisdom reveals itself through conduct, that care gives rise to abundance, and that nature responds to those who listen with humility.

With this realization, he stepped forward into the world not merely as a knower of the Vedas, but as one shaped by them.`
        },
        {
            title: "Moral of the Story",
            text: `<strong>Key Teachings:</strong>

• Knowledge does not arise from birth or lineage, but awakens in the presence of sincere inquiry

• True learning is born from a deep and honest longing to understand

• Integrity and truth are not merely virtues, but the very pathways through which wisdom reveals itself

• Parenthood is shaped not by origin or identity, but by devotion, nurture, and unwavering responsibility

• Knowledge, when practiced with humility, ripens into meaningful action and lasting transformation

• Nature, timeless and sentient, responds gently to those who listen with purity of heart and intent

• A society that fails to honour and respect women forfeits its moral claim to progress and true growth`
        }
    ],

    // Chapter 2: India We Never Knew (8 insights from PDF)
    india: [
        {
            title: "The India We Never Knew",
            text: `The India that often reaches us through fragments of history is one shaped by rigid structures, hierarchies, and exclusions. Yet beneath this familiar surface lies another India—quieter, deeper, and far more nuanced—an India that placed truth above tradition, character above birth, and wisdom above power.

This is the India that history rarely pauses to acknowledge.`
        },
        {
            title: "Knowledge Beyond Birth",
            text: `Ancient Indian thought repeatedly affirms that learning begins not with lineage, but with longing. The Chandogya Upanishad presents the story of Satyakam Jabali as a powerful illustration of this ideal, where sincerity and truthfulness outweighed inherited status.

Teachers sought seekers who were morally fit, capable of discipline, and fearless in honesty. Early Vedic and Upanishadic traditions reveal a more fluid and inclusive understanding of educational eligibility—one rooted in merit and ethical character.`
        },
        {
            title: "Women as Moral Anchors",
            text: `The figure of Jabali unsettles many assumptions about ancient Indian society. Her honesty is not incidental to the narrative but central to her son's spiritual legitimacy. Motherhood here transcends biology and becomes an ethical force defined by truth, nurture, and courage.

Historical and philosophical sources suggest that women in early India participated actively in intellectual life. Thinkers such as Gargi and Maitreyi stand as evidence of a tradition that once acknowledged women as custodians of wisdom.`
        },
        {
            title: "Learning as Lived Practice",
            text: `In this forgotten India, knowledge was never abstract. Education demanded application, restraint, and humility. Satyakam's years spent tending weak cattle in the forest were not a test of endurance alone, but an extension of learning itself.

This reflects a broader philosophical stance: wisdom proves its worth through conduct. Learning that does not translate into ethical action remains incomplete. True education was inseparable from responsibility, patience, and harmony with one's surroundings.`
        },
        {
            title: "Nature as Participant",
            text: `Ancient Indian philosophy consistently presents nature as a living presence rather than a passive backdrop. Forests functioned as classrooms, silence as instruction, and coexistence as a moral practice.

The transformation of the land around Satyakam reflects a worldview in which inner discipline resonates outward into the natural world. In contrast to modern extractive models of growth, this perspective offers an early framework for sustainability.`
        },
        {
            title: "What Was Lost",
            text: `Over time, many of these values receded behind rigid social structures and selective memory. Living philosophy hardened into exclusionary custom. Respect for women diminished, access to learning narrowed, and integrity yielded to conformity.

This transformation was not sudden, nor inevitable. Understanding it requires acknowledging how societies drift when power replaces principle and when tradition is preserved without its ethical core.`
        },
        {
            title: "Reflections for Modern India",
            text: `Modern India stands at a crossroads where economic and technological growth often outpaces moral reflection. Debates around education access, gender equality, environmental sustainability, and social mobility echo questions ancient thinkers confronted in different forms.

The India we never knew offers not a blueprint, but a compass—one that points toward inclusivity, respect for women, ethical learning, and harmony with nature.`
        },
        {
            title: "A Deeper Measure of Progress",
            text: `To rediscover this India is to reclaim a deeper measure of progress. A civilization grows not merely by what it builds, but by whom it honors; not by how much it knows, but by how truthfully it lives.

In holding up this forgotten mirror, the past does not ask to be restored—it asks to be understood.`
        }
    ],

    // Chapter 3: Women as Knowledge Bearers (6 voices from PDF)
    women: [
        {
            title: "Women as Bearers of Knowledge",
            text: `The story of Satyakam Jabali cannot be fully understood without pausing at the quiet yet powerful presence of Jabali herself. Her role invites a broader reflection on the place of women in the intellectual and spiritual life of ancient India.

Far from being marginal figures, women were often central to the transmission of knowledge, values, and ethical clarity.`
        },
        {
            title: "Women in Sacred Texts",
            text: `Early Indian scriptures preserve the voices of women who engaged deeply with philosophical inquiry. Figures such as Gargi Vachaknavi and Maitreyi appear in the Brihadaranyaka Upanishad as thinkers who questioned the nature of reality, self, and immortality.

Their presence challenges the assumption that spiritual and metaphysical discourse was an exclusively male domain. These narratives suggest that access to knowledge was not inherently denied to women in early periods.`
        },
        {
            title: "Jabali and the Ethics of Truth",
            text: `Jabali's significance lies not in social status but in ethical clarity. When questioned by her son about his lineage, she chose truth over convenience, knowing well the social consequences of her honesty.

In doing so, she became the unseen architect of Satyakam's spiritual destiny. Her role illustrates a deeper principle within Indian thought: truth (Satya) is not gendered. Moral authority arises from integrity.`
        },
        {
            title: "Motherhood as Moral Formation",
            text: `In many ancient narratives, motherhood is portrayed not merely as biological function but as moral formation. Jabali's nurturing of Satyakam endowed him with fearlessness, humility, and reverence for truth—qualities that later qualified him for sacred knowledge.

This understanding reframes parenthood as an ethical responsibility rather than a social identity. The values imparted within the household are as formative as any formal education.`
        },
        {
            title: "The Gradual Silencing",
            text: `Despite these early examples, women's access to education and public discourse gradually diminished over time. As social structures hardened, interpretive authority narrowed, and lived philosophy gave way to rigid codification.

This silencing was not rooted in the foundational texts themselves, but in later social arrangements that privileged control over inquiry. Recognizing this distinction is essential to understanding what was lost.`
        },
        {
            title: "Resonance in Contemporary India",
            text: `The questions raised by these ancient narratives remain urgent today. Debates around women's education, autonomy, and representation echo the same tensions between truth and tradition, inclusion and control.

Revisiting figures like Jabali, Gargi, and Maitreyi allows modern India to reclaim a legacy that affirms women not only as beneficiaries of knowledge, but as its custodians and transmitters.`
        }
    ],

    // Chapter 4: Education as Character (7 principles from PDF)
    education: [
        {
            title: "Education as Character Formation",
            text: `In the ancient Indian worldview, education was never confined to the accumulation of information or mastery of texts. It was understood as a process of inner formation, where knowledge shaped character, discipline refined conduct, and learning found its highest expression in ethical living.

This stands in sharp contrast to modern credential-driven models.`
        },
        {
            title: "The Purpose of Learning",
            text: `Classical Indian thought viewed education as a means toward dharma—right living aligned with truth and social harmony. The student was not trained merely to succeed, but to become.

Intellectual growth was expected to cultivate virtues such as restraint, compassion, honesty, and service. Learning was validated not by examination or certification, but by conduct and clarity of judgment.`
        },
        {
            title: "The Guru-Shishya Relationship",
            text: `Central to this model was the Guru–Shishya Parampara, a relationship grounded in trust, reverence, and lived example. The Guru was not simply an instructor but a moral guide, observing the student's growth not only in intellect but in temperament and action.

Satyakam's journey illustrates this principle vividly. His education extended beyond recitation of sacred verses into years of responsibility, solitude, and care for life.`
        },
        {
            title: "Discipline, Service, and Humility",
            text: `Education often required students to engage in service—tending cattle, gathering firewood, or maintaining the hermitage. These tasks were not menial; they were pedagogical tools designed to dissolve ego and instill humility.

Such discipline cultivated patience and attentiveness, qualities essential for deeper understanding. Knowledge earned without effort was considered fragile; wisdom forged through responsibility endured.`
        },
        {
            title: "Knowledge Tested Through Action",
            text: `In ancient India, learning was repeatedly tested through action. The student was expected to apply wisdom in real-life contexts, demonstrating balance, ethical judgment, and restraint.

Satyakam's task of nurturing weak cattle into a thriving herd exemplifies this testing of knowledge through lived experience. This approach ensured that education remained connected to reality, nature, and society.`
        },
        {
            title: "The Shift Toward Credentialism",
            text: `Over time, this holistic model gradually gave way to systems that prioritized memorization, status, and formal authority. Education became increasingly associated with social power rather than ethical growth. Credentials replaced character as markers of worth.

This shift narrowed the purpose of learning and weakened its transformative potential. The erosion of ethical education contributed to social rigidity and moral fragmentation.`
        },
        {
            title: "Lessons for Contemporary Education",
            text: `Modern education systems, driven by competition and economic outcomes, often struggle to integrate ethical formation into curricula. While technical knowledge has expanded, questions of integrity, responsibility, and social purpose remain inadequately addressed.

Revisiting ancient educational philosophies does not imply rejecting modern progress, but rather reintegrating character, empathy, and accountability into learning frameworks. Education that ignores these dimensions risks producing competence without conscience.`
        }
    ],

    // Chapter 5: Truth & Social Order (5 teachings from PDF)
    truth: [
        {
            title: "Truth, Integrity, and Social Order",
            text: `Civilizations are sustained not merely by laws or institutions, but by the ethical principles that quietly govern everyday life. In ancient Indian thought, truth (satya) and integrity were not abstract virtues; they were the very foundations upon which social order rested.`
        },
        {
            title: "Satya as Foundational Principle",
            text: `The concept of satya occupies a central place in Indian philosophy. More than factual accuracy, it denotes alignment between thought, speech, and action.

The Upanishads repeatedly affirm that truth is the path to knowledge and liberation, suggesting that without satya, neither wisdom nor social harmony can endure. In narratives such as that of Satyakam Jabali, truth functions as a transformative force.`
        },
        {
            title: "Integrity Over Lineage",
            text: `Ancient Indian texts frequently place moral character above inherited position. While social roles existed, they were ideally meant to reflect qualities and responsibilities rather than fixed identities. Integrity served as the true marker of worth.

Satyakam's acceptance by Sage Gautam illustrates this ideal vividly. Despite uncertainty regarding his birth, his truthfulness affirmed his eligibility for sacred knowledge.`
        },
        {
            title: "Truth as Social Responsibility",
            text: `Truth in ancient India was not solely a personal virtue; it was a social obligation. Individuals were expected to uphold honesty because deception threatened communal trust and moral coherence.

The emphasis on truthful speech in rituals, education, and governance reflects an understanding that societies fragment when truth is compromised. This ethic extended to rulers and teachers alike.`
        },
        {
            title: "When Truth Declines",
            text: `Texts and later commentaries also acknowledge periods when truth recedes and social order weakens. The erosion of integrity leads to rigid hierarchies, misuse of authority, and the marginalization of vulnerable voices—particularly women and seekers without social privilege.

This decline is portrayed not as a failure of philosophy, but as a failure of practice. When satya is subordinated to power, social harmony gives way to control.`
        }
    ],

    // Chapter 6: Forgotten Wisdom (6 reflections from PDF)
    decline: [
        {
            title: "When Wisdom Was Forgotten",
            text: `Civilizations do not decline overnight. They erode gradually, often while preserving the appearance of continuity. Rituals remain, texts endure, and institutions persist—but the ethical spirit that once animated them weakens.

This chapter examines how the foundational wisdom of ancient India was gradually forgotten, distorted, or selectively remembered.`
        },
        {
            title: "From Living Philosophy to Rigid Convention",
            text: `Early Indian thought was dynamic and self-questioning. Philosophical inquiry, ethical debate, and spiritual experimentation were integral to social life. Over time, however, living philosophy hardened into fixed convention.

Practices once guided by context and conscience became codified as immutable rules. This shift did not arise from the original texts themselves, but from later interpretations that prioritized control over inquiry.`
        },
        {
            title: "The Distortion of Varna and Dharma",
            text: `The concept of varna was originally associated with qualities and responsibilities rather than birth. Similarly, dharma functioned as a situational ethic—responsive to context, duty, and moral judgment.

As these ideas were institutionalized, they increasingly became instruments of hierarchy. What had once been aspirational ideals transformed into inherited identities, restricting access to knowledge and undermining ethical foundations.`
        },
        {
            title: "Marginalization of Women and Seekers",
            text: `One of the clearest signs of decline was the gradual marginalization of women and non-elite seekers from intellectual and spiritual spaces. Figures like Gargi, Maitreyi, and Jabali faded from public memory.

This silencing was not an inevitable outcome of Indian philosophy, but a departure from it. When societies cease to honor those who nurture truth, wisdom contracts.`
        },
        {
            title: "Knowledge Without Integrity",
            text: `As access to learning narrowed, education itself changed in purpose. Knowledge became a marker of status rather than a means of transformation. Memorization replaced inquiry; authority eclipsed ethical accountability.

This separation of knowledge from integrity weakened social trust. When learning serves power rather than truth, wisdom becomes performative and society loses moral coherence.`
        },
        {
            title: "Paths to Recovery",
            text: `Recovery does not lie in romanticizing the past or rejecting modernity. It lies in reclaiming first principles: truth over convenience, character over status, inclusion over exclusion, harmony over domination.

This recovery begins with education that forms conscience, social systems that honor women, and development models that respect nature. It requires returning to the ethical core of tradition rather than its outer shell.`
        }
    ],

    // Chapter 7: Reimagining Future (4 principles from PDF)
    future: [
        {
            title: "Reimagining India's Future",
            text: `The journey through India's forgotten wisdom reveals not a civilization trapped in nostalgia, but one rich with ethical imagination. The past presented in these pages is not offered as an ideal to be replicated, but as a source of insight—one that can illuminate the path forward.

Reimagining India's future requires neither rejection of modernity nor blind reverence for tradition, but a thoughtful integration of timeless values with contemporary realities.`
        },
        {
            title: "Remembering First Principles",
            text: `Across the chapters of this book, certain principles recur with quiet insistence: truth over convenience, character over status, inclusion over exclusion, and harmony over domination.

These were not abstract ideals, but living practices that shaped education, social order, gender relations, and humanity's relationship with nature. India's future growth will remain incomplete if these ethical foundations are ignored.`
        },
        {
            title: "Knowledge, Equity, and Ethical Growth",
            text: `Ancient India understood knowledge as a moral force, inseparable from responsibility. Education was meant to cultivate judgment, humility, and service. Reclaiming this vision today means expanding access to learning while restoring its ethical purpose.

Similarly, a society that marginalizes women or reduces them to symbols cannot claim genuine advancement. Honoring women as thinkers, nurturers, and leaders is not a modern concession—it is a return to civilizational clarity.`
        },
        {
            title: "The Compass, Not the Destination",
            text: `Reimagining India's future is not about recovering a lost golden age. It is about recovering moral orientation. When truth guides governance, integrity shapes education, women are respected, and nature is honored, progress gains direction.

The forgotten past thus becomes a compass—not a destination, but a guide toward a future that integrates wisdom with innovation, tradition with transformation.`
        }
    ]
};

// ==========================================
// EBOOK CONTENT - FROM PDF
// ==========================================

const ebookContent = {
    intro: `<h2>Introduction</h2>
    <p>This book began with a sense of unease. In an age of unprecedented access to information, we seem increasingly disconnected from wisdom. We celebrate growth, yet struggle with meaning; we accumulate knowledge, yet often overlook character. Amid this tension, the question arose: Is the India we know today the only India that ever existed?</p>
    <p>The answer, found quietly within ancient texts and forgotten narratives, is no.</p>
    <p><em>The India We Never Knew</em> is an exploration of a civilizational ethos that once placed truth above lineage, inquiry above conformity, and ethical conduct above power. It is an attempt to revisit an India that understood knowledge not as entitlement, but as responsibility; not as accumulation, but as transformation.</p>
    <p>The story of Satyakam Jabali, drawn from the Chandogya Upanishad, serves as the heart of this exploration. His unwavering honesty—spoken without fear or calculation—reveals a moral clarity that reshaped his destiny. Yet Satyakam's journey is not an isolated episode. It opens a window into a deeper philosophical tradition where women such as Jabali, Gargi, and Maitreyi were bearers of wisdom; where education formed character; where social order rested on integrity; and where nature was approached with reverence rather than dominance.</p>
    <p>This book does not seek to romanticize ancient India, nor to deny its complexities and contradictions. Civilizations are never uniform, and the past is never perfect. But within that past existed ethical possibilities that were later forgotten, distorted, or abandoned—not because they failed, but because they demanded moral courage.</p>
    <p>The chapters that follow examine how these values shaped early Indian thought, how they gradually eroded, and why they remain profoundly relevant today. In doing so, the book invites readers to look beyond rigid narratives—both glorifying and dismissive—and engage instead with the deeper philosophical imagination of the civilization.</p>
    <p><em>The India We Never Knew</em> is ultimately a book about remembrance—not of rituals or hierarchies, but of first principles. It asks whether progress can endure without integrity, whether societies can grow while neglecting women and nature, and whether knowledge divorced from character can truly liberate.</p>
    <p>If this book encourages even a single moment of honest reflection about who we were, who we have become, and who we might yet be—then it has fulfilled its purpose.</p>`,

    story: generateEbookChapter("The Truth of Satyakam – Chandogya Upanishad", content.story),
    india: generateEbookChapter("India We Never Knew", content.india),
    women: generateEbookChapter("Women as Bearers of Knowledge", content.women),
    education: generateEbookChapter("Education as Character Formation", content.education),
    truth: generateEbookChapter("Truth, Integrity, and Social Order", content.truth),
    decline: generateEbookChapter("When Wisdom Was Forgotten", content.decline),
    future: generateEbookChapter("Reimagining India's Future", content.future)
};

function generateEbookChapter(title, slides) {
    let html = `<h2>${title}</h2>`;
    slides.forEach(slide => {
        if (slide.title) {
            html += `<h3>${slide.title}</h3>`;
        }
        html += `<p>${slide.text}</p>`;
    });
    return html;
}

// ==========================================
// DOM ELEMENTS
// ==========================================

const screens = {
    home: document.getElementById('screenHome'),
    hub: document.getElementById('screenHub'),
    content: document.getElementById('screenContent'),
    ebook: document.getElementById('screenEbook')
};

const btnStart = document.getElementById('btnStart');
const btnHome = document.getElementById('btnHome');
const progressBar = document.getElementById('progressBar');
const contentBody = document.getElementById('contentBody');
const progressDots = document.getElementById('progressDots');
const btnPrevious = document.getElementById('btnPrevious');
const btnNext = document.getElementById('btnNext');
const ebookText = document.getElementById('ebookText');
const ebookChapters = document.getElementById('ebookChapters');

// ==========================================
// EVENT LISTENERS
// ==========================================

btnStart.addEventListener('click', () => navigateToScreen('hub'));
btnHome.addEventListener('click', () => navigateToScreen('hub'));
btnPrevious.addEventListener('click', () => navigateSlide(-1));
btnNext.addEventListener('click', () => navigateSlide(1));

// Chapter cards
document.querySelectorAll('.knowledge-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const chapter = e.currentTarget.dataset.chapter;
        if (chapter === 'ebook') {
            loadEbook('intro');
            navigateToScreen('ebook');
        } else {
            loadChapter(chapter);
        }
    });
});

// eBook chapters
ebookChapters.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const chapter = e.target.dataset.ebookChapter;
        loadEbook(chapter);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (state.currentScreen === 'content') {
        if (e.key === 'ArrowLeft' && !btnPrevious.disabled) {
            navigateSlide(-1);
        } else if (e.key === 'ArrowRight') {
            navigateSlide(1);
        } else if (e.key === 'Escape') {
            navigateToScreen('hub');
        }
    }
});

// ==========================================
// NAVIGATION FUNCTIONS
// ==========================================

function navigateToScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
    state.currentScreen = screenName;

    btnHome.style.display = screenName === 'home' ? 'none' : 'block';

    const progressMap = { home: 0, hub: 10, content: 50, ebook: 50 };
    progressBar.style.width = (progressMap[screenName] || 0) + '%';
}

function loadChapter(chapterKey) {
    state.currentChapter = chapterKey;
    state.currentSlide = 0;
    state.totalSlides = content[chapterKey].length;

    // Generate progress dots
    progressDots.innerHTML = '';
    for (let i = 0; i < state.totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i === 0) dot.classList.add('active');
        progressDots.appendChild(dot);
    }

    renderSlide();
    navigateToScreen('content');
}

function renderSlide() {
    const slide = content[state.currentChapter][state.currentSlide];

    contentBody.innerHTML = `
        <h2>${slide.title}</h2>
        <p>${slide.text}</p>
    `;

    // Update dots
    progressDots.querySelectorAll('.progress-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === state.currentSlide);
    });

    // Update buttons
    btnPrevious.disabled = state.currentSlide === 0;

    // Progress bar
    const progress = 10 + (state.currentSlide / state.totalSlides * 80);
    progressBar.style.width = progress + '%';

    contentBody.scrollTop = 0;
}

function navigateSlide(direction) {
    const newSlide = state.currentSlide + direction;

    if (newSlide >= state.totalSlides) {
        navigateToScreen('hub');
        return;
    }

    if (newSlide >= 0 && newSlide < state.totalSlides) {
        state.currentSlide = newSlide;
        renderSlide();
    }
}

function loadEbook(chapter) {
    ebookText.innerHTML = ebookContent[chapter];
    ebookText.scrollTop = 0;

    ebookChapters.querySelectorAll('a').forEach(link => {
        link.classList.toggle('active', link.dataset.ebookChapter === chapter);
    });
}

// ==========================================
// INITIALIZE
// ==========================================

console.log('✨ The India We Never Knew - Premium Edition Loaded');
console.log('📖 All content sourced exclusively from PDF');
console.log('⌨️  Keyboard: ← → arrows to navigate, ESC to return');