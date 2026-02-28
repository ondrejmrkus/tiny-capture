// ==================== SVG ICONS ====================
const ICONS = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>',
    pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
    more: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2.5"/><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    evidence: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
};

// Ghost SVG fallback
const GHOST_SVG = `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg"><path d="M40 260L40 100Q40 20 100 20Q160 20 160 100L160 260L143 235L126 260L109 235L91 260L74 235Z" fill="#E8E0F0" stroke="#C8C0D8" stroke-width="2"/><circle cx="78" cy="95" r="10" fill="#2a2a4a"/><circle cx="122" cy="95" r="10" fill="#2a2a4a"/><circle cx="81" cy="98" r="3" fill="#fff"/><circle cx="125" cy="98" r="3" fill="#fff"/><ellipse cx="100" cy="128" rx="7" ry="5" fill="#2a2a4a"/><circle cx="62" cy="115" r="10" fill="#FFB6C1" opacity="0.4"/><circle cx="138" cy="115" r="10" fill="#FFB6C1" opacity="0.4"/></svg>')}`;

const LOGO_SVG = `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><text x="100" y="45" text-anchor="middle" font-family="Arial,sans-serif" font-size="48" font-weight="900" fill="#7C6D9A" letter-spacing="-2">tiny</text></svg>')}`;

// ==================== DATA ====================
const CLASSES = [
    { id: '6a', name: '6. A', studentCount: 6 },
    { id: '7a', name: '7. A', studentCount: 14 },
    { id: '7b', name: '7. B', studentCount: 22 },
    { id: '8a', name: '8. A', studentCount: 32 },
];

const STUDENTS = [
    // 6.A — 6 students
    { id: 1, firstName: 'Anna', lastName: 'Dvořáková', classId: '6a' },
    { id: 2, firstName: 'Filip', lastName: 'Horák', classId: '6a' },
    { id: 3, firstName: 'Karolína', lastName: 'Nováková', classId: '6a' },
    { id: 4, firstName: 'Martin', lastName: 'Svoboda', classId: '6a' },
    { id: 5, firstName: 'Petr', lastName: 'Veselý', classId: '6a' },
    { id: 6, firstName: 'Tereza', lastName: 'Černá', classId: '6a' },

    // 7.A — 14 students
    { id: 7, firstName: 'Adam', lastName: 'Jelínek', classId: '7a' },
    { id: 8, firstName: 'Adéla', lastName: 'Králová', classId: '7a' },
    { id: 9, firstName: 'Barbora', lastName: 'Pospíšilová', classId: '7a' },
    { id: 10, firstName: 'Daniel', lastName: 'Kučera', classId: '7a' },
    { id: 11, firstName: 'David', lastName: 'Němec', classId: '7a' },
    { id: 12, firstName: 'Eliška', lastName: 'Sedláčková', classId: '7a' },
    { id: 13, firstName: 'Eva', lastName: 'Marková', classId: '7a' },
    { id: 14, firstName: 'Jakub', lastName: 'Fiala', classId: '7a' },
    { id: 15, firstName: 'Jan', lastName: 'Procházka', classId: '7a' },
    { id: 16, firstName: 'Klára', lastName: 'Hájková', classId: '7a' },
    { id: 17, firstName: 'Kristýna', lastName: 'Benešová', classId: '7a' },
    { id: 18, firstName: 'Lucie', lastName: 'Růžičková', classId: '7a' },
    { id: 19, firstName: 'Natálie', lastName: 'Doležalová', classId: '7a' },
    { id: 20, firstName: 'Tomáš', lastName: 'Pokorný', classId: '7a' },

    // 7.B — 22 students
    { id: 21, firstName: 'Aleš', lastName: 'Beneš', classId: '7b' },
    { id: 22, firstName: 'Anna', lastName: 'Fialová', classId: '7b' },
    { id: 23, firstName: 'David', lastName: 'Horák', classId: '7b' },
    { id: 24, firstName: 'Denisa', lastName: 'Jelínková', classId: '7b' },
    { id: 25, firstName: 'Dominik', lastName: 'Král', classId: '7b' },
    { id: 26, firstName: 'Ema', lastName: 'Kučerová', classId: '7b' },
    { id: 27, firstName: 'Filip', lastName: 'Novák', classId: '7b' },
    { id: 28, firstName: 'Hana', lastName: 'Sedláčková', classId: '7b' },
    { id: 29, firstName: 'Jan', lastName: 'Veselý', classId: '7b' },
    { id: 30, firstName: 'Julie', lastName: 'Procházková', classId: '7b' },
    { id: 31, firstName: 'Karel', lastName: 'Dvořák', classId: '7b' },
    { id: 32, firstName: 'Kateřina', lastName: 'Němcová', classId: '7b' },
    { id: 33, firstName: 'Lukáš', lastName: 'Černý', classId: '7b' },
    { id: 34, firstName: 'Markéta', lastName: 'Pokorná', classId: '7b' },
    { id: 35, firstName: 'Martin', lastName: 'Růžička', classId: '7b' },
    { id: 36, firstName: 'Michaela', lastName: 'Svobodová', classId: '7b' },
    { id: 37, firstName: 'Monika', lastName: 'Hájková', classId: '7b' },
    { id: 38, firstName: 'Ondřej', lastName: 'Doležal', classId: '7b' },
    { id: 39, firstName: 'Patrik', lastName: 'Marek', classId: '7b' },
    { id: 40, firstName: 'Petra', lastName: 'Pospíšilová', classId: '7b' },
    { id: 41, firstName: 'Šimon', lastName: 'Fiala', classId: '7b' },
    { id: 42, firstName: 'Veronika', lastName: 'Králová', classId: '7b' },

    // 8.A — 32 students
    { id: 43, firstName: 'Adam', lastName: 'Novák', classId: '8a' },
    { id: 44, firstName: 'Adéla', lastName: 'Horáková', classId: '8a' },
    { id: 45, firstName: 'Anna', lastName: 'Benešová', classId: '8a' },
    { id: 46, firstName: 'Barbora', lastName: 'Růžičková', classId: '8a' },
    { id: 47, firstName: 'Daniel', lastName: 'Svoboda', classId: '8a' },
    { id: 48, firstName: 'David', lastName: 'Procházka', classId: '8a' },
    { id: 49, firstName: 'Dominik', lastName: 'Sedláček', classId: '8a' },
    { id: 50, firstName: 'Eliška', lastName: 'Dvořáková', classId: '8a' },
    { id: 51, firstName: 'Erik', lastName: 'Pokorný', classId: '8a' },
    { id: 52, firstName: 'Eva', lastName: 'Hájková', classId: '8a' },
    { id: 53, firstName: 'Filip', lastName: 'Jelínek', classId: '8a' },
    { id: 54, firstName: 'Hana', lastName: 'Němcová', classId: '8a' },
    { id: 55, firstName: 'Jakub', lastName: 'Doležal', classId: '8a' },
    { id: 56, firstName: 'Jan', lastName: 'Fiala', classId: '8a' },
    { id: 57, firstName: 'Josef', lastName: 'Černý', classId: '8a' },
    { id: 58, firstName: 'Julie', lastName: 'Kučerová', classId: '8a' },
    { id: 59, firstName: 'Karolína', lastName: 'Marková', classId: '8a' },
    { id: 60, firstName: 'Klára', lastName: 'Králová', classId: '8a' },
    { id: 61, firstName: 'Kryštof', lastName: 'Veselý', classId: '8a' },
    { id: 62, firstName: 'Lenka', lastName: 'Pospíšilová', classId: '8a' },
    { id: 63, firstName: 'Lucie', lastName: 'Svobodová', classId: '8a' },
    { id: 64, firstName: 'Marek', lastName: 'Horák', classId: '8a' },
    { id: 65, firstName: 'Marie', lastName: 'Sedláčková', classId: '8a' },
    { id: 66, firstName: 'Martin', lastName: 'Dvořák', classId: '8a' },
    { id: 67, firstName: 'Matěj', lastName: 'Růžička', classId: '8a' },
    { id: 68, firstName: 'Natálie', lastName: 'Fialová', classId: '8a' },
    { id: 69, firstName: 'Ondřej', lastName: 'Beneš', classId: '8a' },
    { id: 70, firstName: 'Pavel', lastName: 'Jelínek', classId: '8a' },
    { id: 71, firstName: 'Petra', lastName: 'Doležalová', classId: '8a' },
    { id: 72, firstName: 'Simona', lastName: 'Procházková', classId: '8a' },
    { id: 73, firstName: 'Tereza', lastName: 'Černá', classId: '8a' },
    { id: 74, firstName: 'Tomáš', lastName: 'Kučera', classId: '8a' },
];

// Loaded from sentences.txt at init, these are fallback values
let SENTENCES = ['Čau', 'Mám ráda tmu', 'Zhasni prosím', 'Klikni na tlačítko'];

const SUBJECTS = ['Matematika', 'Čeština', 'Angličtina', 'Přírodopis', 'Dějepis'];

// ==================== STATE ====================
const state = {
    currentScreen: null,
    currentClassId: null,
    selectedStudents: new Set(),
    evidence: [],
    currentSessionId: null,
    ghostTimer: null,
    ghostStep: 0,
    lastGhostSentence: null,
    // Screen 5 filters
    searchQuery: '',
    classFilters: new Set(),
    sortBy: 'name', // 'name' or 'count'
    // Screen 6 filters
    profileSearch: '',
    profileTypeFilter: 'all', // 'all', 'note', 'file'
    profileStudentId: null,
};

let nextEvidenceId = 1;

// ==================== DOM REFS ====================
const app = document.getElementById('app');
const overlay = document.getElementById('overlay');

// ==================== NAVIGATION ====================
function navigateTo(screen, params = {}) {
    stopGhostText();
    state.currentScreen = screen;

    switch (screen) {
        case 'home':
            renderHome();
            break;
        case 'classes':
            renderClasses();
            break;
        case 'capture':
            if (params.classId) state.currentClassId = params.classId;
            if (!state.currentSessionId) state.currentSessionId = Date.now();
            state.selectedStudents.clear();
            renderCapture();
            break;
        case 'students':
            state.searchQuery = '';
            state.classFilters.clear();
            state.sortBy = 'name';
            renderStudents();
            break;
        case 'profile':
            if (params.studentId) state.profileStudentId = params.studentId;
            state.profileSearch = '';
            state.profileTypeFilter = 'all';
            renderProfile();
            break;
    }
}

function endSession() {
    state.currentSessionId = null;
    state.selectedStudents.clear();
    state.currentClassId = null;
    hideOverlay();
    navigateTo('home');
}

// ==================== SCREEN 1: HOME ====================
function renderHome() {
    app.innerHTML = `
        <div class="screen screen-home">
            <img src="assets/logo.png" alt="Tiny" class="home-logo" onerror="this.src='${LOGO_SVG}'">
            <img src="assets/duch.png" alt="" class="home-ghost" onerror="this.src='${GHOST_SVG}'">
            <div class="ghost-text-container">
                <div class="ghost-text" id="ghost-text"></div>
            </div>
            <div class="home-buttons">
                <button class="btn btn-outline" id="btn-students">Moji žáci</button>
                <button class="btn btn-primary" id="btn-capture">Sbírat důkazy</button>
            </div>
        </div>
    `;

    document.getElementById('btn-students').addEventListener('click', () => navigateTo('students'));
    document.getElementById('btn-capture').addEventListener('click', () => navigateTo('classes'));

    startGhostText();
}

// ==================== GHOST TEXT ANIMATION ====================
function startGhostText() {
    state.ghostStep = 0;
    state.lastGhostSentence = null;
    showGhostSentence('Čau');

    state.ghostTimer = setInterval(() => {
        const el = document.getElementById('ghost-text');
        if (!el) return;

        state.ghostStep++;
        if (state.ghostStep % 2 === 0) {
            // Show new sentence
            const others = SENTENCES.filter(s => s !== 'Čau' && s !== state.lastGhostSentence);
            const sentence = others[Math.floor(Math.random() * others.length)];
            showGhostSentence(sentence);
        } else {
            // Hide
            el.classList.remove('visible');
        }
    }, 3000);
}

function showGhostSentence(text) {
    const el = document.getElementById('ghost-text');
    if (!el) return;

    el.classList.remove('visible');
    // Brief delay so transition resets if already visible
    setTimeout(() => {
        el.textContent = text;
        el.classList.add('visible');
        state.lastGhostSentence = text;
    }, 50);
}

function stopGhostText() {
    if (state.ghostTimer) {
        clearInterval(state.ghostTimer);
        state.ghostTimer = null;
    }
}

// ==================== SCREEN 2: CLASSES ====================
function renderClasses() {
    const classCards = CLASSES.map(c => `
        <button class="class-card" data-class-id="${c.id}">
            <div>
                <div class="class-card-name">${c.name}</div>
                <div class="class-card-count">${c.studentCount} žáků</div>
            </div>
            <span class="class-card-arrow">›</span>
        </button>
    `).join('');

    app.innerHTML = `
        <div class="screen screen-classes">
            <div class="screen-header">
                <button class="back-btn" id="classes-back">${ICONS.back}</button>
                <h1>Vyberte třídu</h1>
            </div>
            <div class="class-list">
                ${classCards}
                <button class="add-class-card">
                    ${ICONS.plus}
                    Přidat třídu
                </button>
            </div>
        </div>
    `;

    document.getElementById('classes-back').addEventListener('click', () => navigateTo('home'));

    document.querySelectorAll('.class-card').forEach(card => {
        card.addEventListener('click', () => {
            const classId = card.dataset.classId;
            navigateTo('capture', { classId });
        });
    });
}

// ==================== SCREEN 3: CAPTURE ====================
function renderCapture() {
    const cls = CLASSES.find(c => c.id === state.currentClassId);
    const students = getStudentsByClass(state.currentClassId);
    const cols = students.length <= 16 ? 2 : 3;
    const rows = Math.ceil(students.length / cols);

    // Size class based on student count
    let sizeClass = 'grid-normal';
    if (students.length <= 8) sizeClass = 'grid-spacious';
    else if (students.length >= 25) sizeClass = 'grid-dense';
    else if (students.length >= 17) sizeClass = 'grid-compact';

    const tiles = students.map(s => {
        const selected = state.selectedStudents.has(s.id);
        const badges = getSessionBadges(s.id);
        return `
            <button class="student-tile ${selected ? 'selected' : ''}" data-student-id="${s.id}">
                <span class="student-name">${s.firstName} ${s.lastName.charAt(0)}.</span>
                ${badges.length > 0 ? `<div class="student-badges">${badges}</div>` : ''}
            </button>
        `;
    }).join('');

    app.innerHTML = `
        <div class="screen screen-capture">
            <div class="capture-header">
                <h2>${cls ? cls.name : ''} — Sbírání důkazů</h2>
            </div>
            <div class="student-grid cols-${cols} ${sizeClass}" id="student-grid" style="grid-template-rows: repeat(${rows}, 1fr)">
                ${tiles}
            </div>
            <div class="capture-footer">
                <div class="capture-info">
                    <span class="class-label">${cls ? cls.name : ''}</span>
                    <button class="btn btn-small btn-secondary" disabled>Vybrat lekci</button>
                </div>
                <div class="toolbar">
                    <button class="toolbar-btn action-pencil" data-action="text" title="Poznámka">${ICONS.pencil}</button>
                    <button class="toolbar-btn action-mic" data-action="voice" title="Nahrávka">${ICONS.mic}</button>
                    <button class="toolbar-btn action-camera" data-action="photo" title="Fotka">${ICONS.camera}</button>
                    <button class="toolbar-btn action-star" data-action="star" title="Hvězdička">${ICONS.star}</button>
                    <button class="toolbar-btn action-heart" data-action="heart" title="Srdíčko">${ICONS.heart}</button>
                    <button class="toolbar-btn action-more" data-action="more" title="Více">${ICONS.more}</button>
                </div>
            </div>
        </div>
    `;

    // Student tile selection
    document.querySelectorAll('.student-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            const id = parseInt(tile.dataset.studentId);
            if (state.selectedStudents.has(id)) {
                state.selectedStudents.delete(id);
                tile.classList.remove('selected');
            } else {
                state.selectedStudents.add(id);
                tile.classList.add('selected');
            }
        });
    });

    // Toolbar actions
    document.querySelectorAll('.toolbar-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            handleToolbarAction(action);
        });
    });
}

function getSessionBadges(studentId) {
    if (!state.currentSessionId) return '';

    const sessionEvidence = state.evidence.filter(
        e => e.studentId === studentId && e.sessionId === state.currentSessionId
    );

    const counts = {
        purple: 0, // text + voice
        blue: 0,   // photo
        yellow: 0, // star
        red: 0,    // heart
    };

    sessionEvidence.forEach(e => {
        if (e.type === 'text' || e.type === 'voice') counts.purple++;
        else if (e.type === 'photo') counts.blue++;
        else if (e.type === 'star') counts.yellow++;
        else if (e.type === 'heart') counts.red++;
    });

    const badges = [];
    if (counts.purple > 0) badges.push(`<span class="badge badge-purple">${counts.purple}</span>`);
    if (counts.blue > 0) badges.push(`<span class="badge badge-blue">${counts.blue}</span>`);
    if (counts.yellow > 0) badges.push(`<span class="badge badge-yellow">${counts.yellow}</span>`);
    if (counts.red > 0) badges.push(`<span class="badge badge-red">${counts.red}</span>`);
    return badges.join('');
}

function handleToolbarAction(action) {
    if (action === 'more') {
        showMoreMenu();
        return;
    }

    if (state.selectedStudents.size === 0) {
        showToast('Nejdříve vyber žáky');
        return;
    }

    switch (action) {
        case 'text':
            showTextNoteSheet();
            break;
        case 'voice':
            simulateVoice();
            break;
        case 'photo':
            simulatePhoto();
            break;
        case 'star':
            addEvidenceToSelected('star');
            showToast('⭐ Hvězdička přidána');
            break;
        case 'heart':
            addEvidenceToSelected('heart');
            showToast('❤️ Srdíčko přidáno');
            break;
    }
}

function addEvidenceToSelected(type, content = '') {
    const timestamp = Date.now();
    state.selectedStudents.forEach(studentId => {
        state.evidence.push({
            id: nextEvidenceId++,
            studentId,
            type,
            content,
            timestamp,
            sessionId: state.currentSessionId,
        });
    });
    state.selectedStudents.clear();
    renderCapture();
}

// ==================== TEXT NOTE BOTTOM SHEET ====================
function showTextNoteSheet() {
    const count = state.selectedStudents.size;
    showOverlay(`
        <div class="overlay-bg" id="sheet-bg"></div>
        <div class="bottom-sheet">
            <div class="bottom-sheet-handle"></div>
            <h3>Poznámka (${count} ${count === 1 ? 'žák' : count < 5 ? 'žáci' : 'žáků'})</h3>
            <textarea id="note-input" placeholder="Napište poznámku..." autofocus></textarea>
            <button class="btn btn-primary" id="note-save">Uložit</button>
        </div>
    `);

    document.getElementById('sheet-bg').addEventListener('click', hideOverlay);
    document.getElementById('note-save').addEventListener('click', () => {
        const text = document.getElementById('note-input').value.trim();
        if (text) {
            addEvidenceToSelected('text', text);
            hideOverlay();
            showToast('📝 Poznámka uložena');
        }
    });

    // Focus textarea after animation
    setTimeout(() => {
        const input = document.getElementById('note-input');
        if (input) input.focus();
    }, 350);
}

// ==================== SIMULATED VOICE ====================
function simulateVoice() {
    const simEl = document.createElement('div');
    simEl.className = 'sim-overlay';
    simEl.innerHTML = `
        <div class="sim-content">
            <div class="sim-icon" style="color: #8b5cf6">${ICONS.mic}</div>
            <div class="sim-text">Nahrávání...</div>
        </div>
    `;
    document.body.appendChild(simEl);

    setTimeout(() => {
        simEl.remove();
        addEvidenceToSelected('voice', 'Hlasová poznámka');
        showToast('🎤 Nahrávka uložena');
    }, 1500);
}

// ==================== SIMULATED PHOTO ====================
function simulatePhoto() {
    const simEl = document.createElement('div');
    simEl.className = 'sim-overlay';
    simEl.innerHTML = `
        <div class="sim-content">
            <div class="sim-icon" style="color: #3b82f6">${ICONS.camera}</div>
            <div class="sim-text">Focení...</div>
        </div>
    `;
    document.body.appendChild(simEl);

    setTimeout(() => {
        simEl.remove();
        addEvidenceToSelected('photo', 'Fotografie');
        showToast('📷 Fotka uložena');
    }, 1500);
}

// ==================== MORE MENU (SCREEN 4) ====================
function showMoreMenu() {
    showOverlay(`
        <div class="overlay-bg" id="menu-bg"></div>
        <div class="bottom-sheet">
            <div class="bottom-sheet-handle"></div>
            <div class="bottom-sheet-actions">
                <button class="bottom-sheet-action destructive" id="end-session-btn">Ukončit setkání</button>
            </div>
        </div>
    `);

    document.getElementById('menu-bg').addEventListener('click', hideOverlay);
    document.getElementById('end-session-btn').addEventListener('click', endSession);
}

// ==================== SCREEN 5: MY STUDENTS ====================
function renderStudents() {
    app.innerHTML = `
        <div class="screen screen-students">
            <div class="screen-header">
                <button class="back-btn" id="students-back">${ICONS.back}</button>
                <h1>Moji žáci</h1>
            </div>
            <div class="search-bar">
                <div class="search-input-wrap">
                    ${ICONS.search}
                    <input type="text" id="student-search" placeholder="Hledat podle jména..." value="${state.searchQuery}">
                </div>
                <button class="add-student-btn" title="Přidat žáka">${ICONS.plus}</button>
            </div>
            <div class="filter-section">
                <div class="filter-label">Předmět</div>
                <div class="filter-chips">
                    ${SUBJECTS.map(s => `<button class="filter-chip disabled">${s}</button>`).join('')}
                </div>
            </div>
            <div class="filter-section">
                <div class="filter-label">Třída</div>
                <div class="filter-chips" id="class-filters">
                    ${CLASSES.map(c => `
                        <button class="filter-chip ${state.classFilters.has(c.id) ? 'active' : ''}" data-class-id="${c.id}">${c.name}</button>
                    `).join('')}
                </div>
            </div>
            <div class="sort-bar">
                <span id="student-count-label"></span>
                <button class="sort-btn" id="sort-toggle">
                    ${state.sortBy === 'name' ? 'Podle jména' : 'Podle důkazů'}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M7 15l5 5 5-5"/><path d="M7 9l5-5 5 5"/></svg>
                </button>
            </div>
            <div class="student-list" id="student-list"></div>
        </div>
    `;

    document.getElementById('students-back').addEventListener('click', () => navigateTo('home'));

    // Search
    document.getElementById('student-search').addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderStudentList();
    });

    // Class filters
    document.querySelectorAll('#class-filters .filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const classId = chip.dataset.classId;
            if (state.classFilters.has(classId)) {
                state.classFilters.delete(classId);
                chip.classList.remove('active');
            } else {
                state.classFilters.add(classId);
                chip.classList.add('active');
            }
            renderStudentList();
        });
    });

    // Sort toggle
    document.getElementById('sort-toggle').addEventListener('click', () => {
        state.sortBy = state.sortBy === 'name' ? 'count' : 'name';
        document.getElementById('sort-toggle').innerHTML = `
            ${state.sortBy === 'name' ? 'Podle jména' : 'Podle důkazů'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M7 15l5 5 5-5"/><path d="M7 9l5-5 5 5"/></svg>
        `;
        renderStudentList();
    });

    renderStudentList();
}

function renderStudentList() {
    let students = [...STUDENTS];

    // Filter by class
    if (state.classFilters.size > 0) {
        students = students.filter(s => state.classFilters.has(s.classId));
    }

    // Filter by search
    if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        students = students.filter(s =>
            `${s.firstName} ${s.lastName}`.toLowerCase().includes(q)
        );
    }

    // Sort
    if (state.sortBy === 'name') {
        students.sort((a, b) => {
            const nameA = `${a.lastName} ${a.firstName}`;
            const nameB = `${b.lastName} ${b.firstName}`;
            return nameA.localeCompare(nameB, 'cs');
        });
    } else {
        students.sort((a, b) => {
            const countA = getStudentEvidenceCount(a.id);
            const countB = getStudentEvidenceCount(b.id);
            return countB - countA; // descending
        });
    }

    // Update count
    const countLabel = document.getElementById('student-count-label');
    if (countLabel) countLabel.textContent = `${students.length} žáků`;

    const list = document.getElementById('student-list');
    if (!list) return;

    if (students.length === 0) {
        list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div>Žádní žáci nenalezeni</div>`;
        return;
    }

    list.innerHTML = students.map(s => {
        const cls = CLASSES.find(c => c.id === s.classId);
        const count = getStudentEvidenceCount(s.id);
        return `
            <button class="student-list-item" data-student-id="${s.id}">
                <div class="student-list-info">
                    <div class="student-list-name">${s.firstName} ${s.lastName}</div>
                    <div class="student-list-class">${cls ? cls.name : ''}</div>
                </div>
                <div class="student-list-count">
                    ${count}
                    ${ICONS.evidence}
                </div>
            </button>
        `;
    }).join('');

    list.querySelectorAll('.student-list-item').forEach(item => {
        item.addEventListener('click', () => {
            const studentId = parseInt(item.dataset.studentId);
            navigateTo('profile', { studentId });
        });
    });
}

// ==================== SCREEN 6: STUDENT PROFILE ====================
function renderProfile() {
    const student = STUDENTS.find(s => s.id === state.profileStudentId);
    if (!student) return;

    const cls = CLASSES.find(c => c.id === student.classId);

    app.innerHTML = `
        <div class="screen screen-profile">
            <div class="screen-header">
                <button class="back-btn" id="profile-back">${ICONS.back}</button>
                <h1>${student.firstName} ${student.lastName}</h1>
            </div>
            <div class="search-bar">
                <div class="search-input-wrap">
                    ${ICONS.search}
                    <input type="text" id="profile-search" placeholder="Hledat v důkazech..." value="${state.profileSearch}">
                </div>
                <button class="add-student-btn" title="Přidat důkaz">${ICONS.plus}</button>
            </div>
            <div class="filter-section">
                <div class="filter-label">Předmět</div>
                <div class="filter-chips">
                    ${SUBJECTS.map(s => `<button class="filter-chip disabled">${s}</button>`).join('')}
                </div>
            </div>
            <div class="filter-section evidence-type-filters">
                <div class="filter-label">Typ důkazu</div>
                <div class="filter-chips" id="type-filters">
                    <button class="filter-chip ${state.profileTypeFilter === 'all' ? 'active' : ''}" data-type="all">Vše</button>
                    <button class="filter-chip ${state.profileTypeFilter === 'note' ? 'active' : ''}" data-type="note">Poznámka</button>
                    <button class="filter-chip ${state.profileTypeFilter === 'file' ? 'active' : ''}" data-type="file">Soubor</button>
                </div>
            </div>
            <div class="evidence-list" id="evidence-list"></div>
        </div>
    `;

    document.getElementById('profile-back').addEventListener('click', () => navigateTo('students'));

    // Search
    document.getElementById('profile-search').addEventListener('input', (e) => {
        state.profileSearch = e.target.value;
        renderEvidenceList();
    });

    // Type filters
    document.querySelectorAll('#type-filters .filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            state.profileTypeFilter = chip.dataset.type;
            document.querySelectorAll('#type-filters .filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderEvidenceList();
        });
    });

    renderEvidenceList();
}

function renderEvidenceList() {
    let evidence = state.evidence
        .filter(e => e.studentId === state.profileStudentId)
        .sort((a, b) => b.timestamp - a.timestamp);

    // Type filter
    if (state.profileTypeFilter === 'note') {
        evidence = evidence.filter(e => e.type !== 'photo');
    } else if (state.profileTypeFilter === 'file') {
        evidence = evidence.filter(e => e.type === 'photo');
    }

    // Search
    if (state.profileSearch) {
        const q = state.profileSearch.toLowerCase();
        evidence = evidence.filter(e =>
            (e.content || '').toLowerCase().includes(q) ||
            getTypeName(e.type).toLowerCase().includes(q)
        );
    }

    const list = document.getElementById('evidence-list');
    if (!list) return;

    if (evidence.length === 0) {
        list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📋</div>Zatím žádné důkazy</div>`;
        return;
    }

    list.innerHTML = evidence.map(e => {
        const typeClass = `type-${e.type}`;
        const typeName = getTypeName(e.type);
        const time = formatTime(e.timestamp);
        const content = getEvidenceContent(e);
        return `
            <div class="evidence-item">
                <div class="evidence-item-header">
                    <span class="evidence-type-badge ${typeClass}">${typeName}</span>
                    <span class="evidence-time">${time}</span>
                </div>
                <div class="evidence-content ${!e.content ? 'placeholder' : ''}">${content}</div>
            </div>
        `;
    }).join('');
}

// ==================== OVERLAY ====================
function showOverlay(html) {
    overlay.innerHTML = html;
    // Force reflow for animation
    overlay.offsetHeight;
    overlay.classList.add('active');
}

function hideOverlay() {
    overlay.classList.remove('active');
    setTimeout(() => { overlay.innerHTML = ''; }, 300);
}

// ==================== TOAST ====================
function showToast(message) {
    // Remove existing toast
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('visible');
    });

    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// ==================== HELPERS ====================
function getStudentsByClass(classId) {
    return STUDENTS
        .filter(s => s.classId === classId)
        .sort((a, b) => {
            const nameA = `${a.firstName} ${a.lastName}`;
            const nameB = `${b.firstName} ${b.lastName}`;
            return nameA.localeCompare(nameB, 'cs');
        });
}

function getStudentEvidenceCount(studentId) {
    return state.evidence.filter(e => e.studentId === studentId).length;
}

function getTypeName(type) {
    switch (type) {
        case 'text': return '📝 Poznámka';
        case 'voice': return '🎤 Nahrávka';
        case 'photo': return '📷 Fotka';
        case 'star': return '⭐ Hvězdička';
        case 'heart': return '❤️ Srdíčko';
        default: return type;
    }
}

function getEvidenceContent(e) {
    switch (e.type) {
        case 'text': return e.content || 'Prázdná poznámka';
        case 'voice': return 'Hlasová poznámka (simulace)';
        case 'photo': return 'Fotografie (simulace)';
        case 'star': return 'Hvězdička udělena';
        case 'heart': return 'Srdíčko uděleno';
        default: return e.content || '';
    }
}

function formatTime(timestamp) {
    const d = new Date(timestamp);
    const h = d.getHours().toString().padStart(2, '0');
    const m = d.getMinutes().toString().padStart(2, '0');
    return `${h}:${m}`;
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', async () => {
    // Load sentences from file (fall back to hardcoded)
    try {
        const res = await fetch('sentences.txt');
        if (res.ok) {
            const text = await res.text();
            const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
            if (lines.length > 0) SENTENCES = lines;
        }
    } catch (e) { /* use fallback */ }
    navigateTo('home');
});
