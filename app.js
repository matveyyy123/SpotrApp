// ============================================================
// ДАННЫЕ УПРАЖНЕНИЙ (ГОТОВЫЕ ТРЕНИРОВКИ)
// ============================================================
const exercisesData = {
    'Руки': [
        { name: 'Жим гантелей над плечами вверх', reps: '12', sets: '3' },
        { name: 'Махи в стороны с гантелями', reps: '12', sets: '3' },
        { name: 'Французский жим с гантелью', reps: '12', sets: '3' },
        { name: 'Подъем гантелей на бицепс', reps: '12', sets: '3' },
        { name: 'Обратные отжимания от стула', reps: '12', sets: '3' },
        { name: 'Жим гантелей от плеч лежа', reps: '12', sets: '3' },
        { name: 'Жим гантелей от груди лежа', reps: '12', sets: '3' }
    ],
    'Пресс': [
        { name: 'Скручивания', reps: '12', sets: '1' },
        { name: 'Скручивания с вытянутыми руками', reps: '12', sets: '2' },
        { name: 'Ножницы ногами лежа', reps: '24', sets: '1' },
        { name: 'Скручивания с вытянутыми руками и поднятыми ногами', reps: '12', sets: '2' },
        { name: 'Сгибания поднятых ног к прессу', reps: '12', sets: '2' },
        { name: 'Планка', reps: '60 сек', sets: '1' },
        { name: 'Подъем прямых ног лежа', reps: '12', sets: '2' },
        { name: 'Широкая планка', reps: '60 сек', sets: '1' },
        { name: 'Лодочка', reps: '12', sets: '2' },
        { name: 'Твист сидя', reps: '24', sets: '1' },
        { name: 'Боковая планка на левую сторону', reps: '60 сек', sets: '1' },
        { name: 'Боковая планка на правую сторону', reps: '60 сек', sets: '1' },
        { name: 'Разносторонний подъем рук и ног лежа', reps: '12', sets: '2' },
        { name: 'Планка альпинист', reps: '24', sets: '1' }
    ],
    'Грудь': [
        { name: 'Отжимания от коленей', reps: '12', sets: '1' },
        { name: 'Отжимания с упором спереди', reps: '10', sets: '3' },
        { name: 'Отжимания от пола', reps: '8', sets: '3' },
        { name: 'Обратные отжимания от стула', reps: '12', sets: '3' },
        { name: 'Широкие отжимания', reps: '6', sets: '3' },
        { name: 'Лежа поднятие гантелей от груди наверх', reps: '12', sets: '3' },
        { name: 'Отжимания с упором сзади', reps: '4', sets: '3' },
        { name: 'Лежа поднятие гантелей от сторон наверх', reps: '12', sets: '3' },
        { name: 'Отжимания со сведенными ладонями', reps: '2', sets: '3' },
        { name: 'Отжимания от коленей', reps: '12', sets: '1' }
    ],
    'Спина': [
        { name: 'Подтягивания', reps: '8', sets: '4' },
        { name: 'Тяга штанги в наклоне', reps: '10', sets: '4' },
        { name: 'Тяга вертикального блока', reps: '12', sets: '3' },
        { name: 'Тяга горизонтального блока', reps: '12', sets: '3' },
        { name: 'Гиперэкстензия', reps: '15', sets: '3' },
        { name: 'Тяга гантели одной рукой', reps: '12', sets: '3' }
    ],
    'Ноги': [
        { name: 'Приседания с гантелями', reps: '12', sets: '3' },
        { name: 'Выпады вперед с гантелями', reps: '12', sets: '3' },
        { name: 'Ягодичный мостик с гантелью', reps: '12', sets: '3' },
        { name: 'Болгарские сплит-приседания', reps: '12', sets: '3' },
        { name: 'Подъем на носки с гантелями', reps: '12', sets: '3' },
        { name: 'Приседания с гантелью снизу', reps: '12', sets: '3' },
        { name: 'Выпады вправо с гантелями', reps: '12', sets: '2' },
        { name: 'Выпады влево с гантелями', reps: '12', sets: '2' },
        { name: 'Приседания с паузой снизу', reps: '12', sets: '1' }
    ]
};

// ============================================================
// НОВЫЕ УРОВНИ (8 уровней, без округления)
// ============================================================
const levels = [
    { id: 1, name: 'НАЧИНАЮЩИЙ', minXp: 0, maxXp: 99.9 },
    { id: 2, name: 'ЛЮБИТЕЛЬ', minXp: 100, maxXp: 199.9 },
    { id: 3, name: 'ПРОДВИНУТЫЙ', minXp: 200, maxXp: 299.9 },
    { id: 4, name: 'ЭКСПЕРТ', minXp: 300, maxXp: 499.9 },
    { id: 5, name: 'ПРОФЕССИОНАЛ', minXp: 500, maxXp: 699.9 },
    { id: 6, name: 'МАСТЕР', minXp: 700, maxXp: 999.9 },
    { id: 7, name: 'ГРАНДМАСТЕР', minXp: 1000, maxXp: 1499.9 },
    { id: 8, name: 'ЛЕГЕНДА', minXp: 1500, maxXp: Infinity }
];

// ============================================================
// РАБОТА С XP (НОВАЯ ФОРМУЛА)
// ============================================================

// Получить текущий уровень
function getCurrentLevel(xp) {
    let currentLevel = levels[0];
    for (let i = levels.length - 1; i >= 0; i--) {
        if (xp >= levels[i].minXp) {
            currentLevel = levels[i];
            break;
        }
    }
    return currentLevel;
}

// Получить следующий уровень
function getNextLevel(xp) {
    for (let i = 0; i < levels.length; i++) {
        if (xp < levels[i].minXp) {
            return levels[i];
        }
    }
    return null;
}

// Прогресс до следующего уровня (%)
function getXpProgress(xp) {
    const current = getCurrentLevel(xp);
    const next = getNextLevel(xp);
    if (!next) return 100;
    const total = next.minXp - current.minXp;
    const earned = xp - current.minXp;
    return Math.min(100, Math.round((earned / total) * 100));
}

// ============================================================
// РАСЧЁТ XP ЗА ТРЕНИРОВКУ (НОВАЯ ФОРМУЛА)
// ============================================================
function calculateWorkoutXp(exercises) {
    let totalXp = 0;
    exercises.forEach(ex => {
        const sets = parseInt(ex.sets) || 0;
        const reps = parseInt(ex.reps) || 0;
        totalXp += (sets * reps) / 10;
    });
    return totalXp;
}

// ============================================================
// FIREBASE - РАБОТА С БАЗОЙ ДАННЫХ
// ============================================================

// Получить текущего пользователя Firebase
function getFirebaseUser() {
    return new Promise((resolve) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        });
    });
}

// ============================================================
// ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ
// ============================================================

async function saveUserProfile(userId, data) {
    try {
        await firebase.firestore().collection('users').doc(userId).set(data, { merge: true });
        return { success: true };
    } catch (error) {
        console.error('Ошибка сохранения профиля:', error);
        alert('Не удалось сохранить профиль. Попробуйте позже.');
        return { success: false, error: error.message };
    }
}

async function getUserProfile(userId) {
    try {
        const doc = await firebase.firestore().collection('users').doc(userId).get();
        if (doc.exists) {
            return { success: true, data: doc.data() };
        } else {
            return { success: false, error: 'Профиль не найден' };
        }
    } catch (error) {
        console.error('Ошибка получения профиля:', error);
        alert('Не удалось загрузить профиль. Проверьте интернет.');
        return { success: false, error: error.message };
    }
}

async function updateUserProfile(userId, updates) {
    try {
        await firebase.firestore().collection('users').doc(userId).update(updates);
        return { success: true };
    } catch (error) {
        console.error('Ошибка обновления профиля:', error);
        alert('Не удалось обновить профиль. Попробуйте позже.');
        return { success: false, error: error.message };
    }
}

async function syncUserProfile() {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Пользователь не авторизован' };
    
    const profileResult = await getUserProfile(user.uid);
    
    if (!profileResult.success) {
        const newProfile = {
            displayName: user.displayName || user.email?.split('@')[0] || 'Пользователь',
            avatar: 'bodybuilding',
            level: 1,
            totalXp: 0,
            createdAt: new Date().toISOString()
        };
        await saveUserProfile(user.uid, newProfile);
        return { success: true, data: newProfile, isNew: true };
    }
    
    return { success: true, data: profileResult.data, isNew: false };
}

// ============================================================
// ТРЕНИРОВКИ
// ============================================================

async function saveWorkoutToFirestore(userId, workoutData) {
    try {
        const docRef = await firebase.firestore().collection('workouts').add({
            userId: userId,
            title: workoutData.title,
            date: workoutData.date || new Date().toISOString(),
            durationSeconds: workoutData.durationSeconds || 0,
            exercises: workoutData.exercises || [],
            xpEarned: workoutData.xpEarned || 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Ошибка сохранения тренировки:', error);
        alert('Не удалось сохранить тренировку. Проверьте интернет.');
        return { success: false, error: error.message };
    }
}

async function getUserWorkoutsFromFirestore(userId) {
    try {
        const snapshot = await firebase.firestore()
            .collection('workouts')
            .where('userId', '==', userId)
            .orderBy('date', 'desc')
            .get();
        
        const workouts = [];
        snapshot.forEach(doc => {
            workouts.push({ id: doc.id, ...doc.data() });
        });
        return { success: true, data: workouts };
    } catch (error) {
        console.error('Ошибка получения тренировок:', error);
        alert('Не удалось загрузить тренировки. Проверьте интернет.');
        return { success: false, error: error.message };
    }
}

async function deleteWorkoutFromFirestore(workoutId) {
    try {
        await firebase.firestore().collection('workouts').doc(workoutId).delete();
        return { success: true };
    } catch (error) {
        console.error('Ошибка удаления тренировки:', error);
        alert('Не удалось удалить тренировку. Попробуйте позже.');
        return { success: false, error: error.message };
    }
}

// ============================================================
// УПРАВЛЕНИЕ ЦВЕТОМ
// ============================================================
function setTheme(color) {
    document.body.className = 'theme-' + color;
    localStorage.setItem('themeColor', color);
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.color === color);
    });
}

const savedColor = localStorage.getItem('themeColor') || 'red';
setTheme(savedColor);

document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        setTheme(this.dataset.color);
    });
});

// ============================================================
// НАВИГАЦИЯ
// ============================================================
window.navigateTo = function(page, params) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById('page-' + page);
    if (target) {
        target.classList.add('active');
    } else {
        console.error('Страница не найдена:', page);
        return;
    }
    
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === page);
    });
    
    if (page === 'stats') {
        loadStats();
    }
    if (page === 'profile') {
        loadProfile();
    }
    if (page === 'workout-detail' && params) {
        loadWorkoutDetail(params.category, params.isCustom, params.id);
    }
    if (page === 'workout-edit' && params) {
        loadEditPage(params.category, params.isCustom, params.id);
    }
    if (page === 'workouts') {
        renderMyWorkouts();
    }
};

document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', function() {
        const page = this.dataset.page;
        if (page) {
            window.navigateTo(page);
        }
    });
});

// ============================================================
// ВКЛАДКИ
// ============================================================
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById('tab-' + this.dataset.tab).classList.add('active');
        if (this.dataset.tab === 'my') {
            renderMyWorkouts();
        }
    });
});

// ============================================================
// КАТЕГОРИИ ТРЕНИРОВОК (Готовые)
// ============================================================
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const name = this.querySelector('.category-info h3')?.textContent;
        if (name) {
            window.navigateTo('workout-detail', { category: name, isCustom: false });
        }
    });
});

// ============================================================
// ОБНОВЛЕНИЕ КОЛИЧЕСТВА УПРАЖНЕНИЙ НА ГЛАВНОЙ СТРАНИЦЕ
// ============================================================
function updateCategoryCount(category, count) {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => {
        const nameEl = card.querySelector('.category-info h3');
        if (nameEl && nameEl.textContent === category) {
            const pEl = card.querySelector('.category-info p');
            if (pEl) {
                pEl.textContent = count + ' упражнений';
            }
        }
    });
}

// ============================================================
// МОИ ТРЕНИРОВКИ (localStorage)
// ============================================================
function getMyWorkouts() {
    return JSON.parse(localStorage.getItem('myCustomWorkouts')) || [];
}

function saveMyWorkouts(workouts) {
    localStorage.setItem('myCustomWorkouts', JSON.stringify(workouts));
}

function getWorkoutById(id) {
    const all = getMyWorkouts();
    return all.find(w => w._id === id);
}

function updateWorkout(id, data) {
    const all = getMyWorkouts();
    const index = all.findIndex(w => w._id === id);
    if (index !== -1) {
        all[index] = { ...all[index], ...data };
        saveMyWorkouts(all);
        return true;
    }
    return false;
}

function deleteWorkout(id) {
    const all = getMyWorkouts();
    const filtered = all.filter(w => w._id !== id);
    saveMyWorkouts(filtered);
}

function renderMyWorkouts() {
    const container = document.getElementById('myWorkoutsList');
    const workouts = getMyWorkouts();
    
    if (workouts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span>📋</span>
                <h3>Нет своих тренировок</h3>
                <p>Создайте свою первую тренировку!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = workouts.map(w => `
        <div class="category-card" onclick="window.navigateTo('workout-detail', { category: w.title, isCustom: true, id: w._id })">
            <div class="category-icon">
                <img src="images/${w.icon || 'bodybuilding'}.png">
            </div>
            <div class="category-info">
                <h3>${w.title}</h3>
                <p>${w.exercises?.length || 0} упражнений</p>
            </div>
            <button class="workout-delete" onclick="event.stopPropagation(); deleteCustomWorkout('${w._id}')">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    `).join('');
}

window.deleteCustomWorkout = function(id) {
    if (confirm('Удалить эту тренировку?')) {
        deleteWorkout(id);
        renderMyWorkouts();
    }
};

window.createNewWorkout = function() {
    window.navigateTo('workout-edit', { 
        category: 'Новая тренировка', 
        isCustom: true, 
        id: 'new' 
    });
};

// ============================================================
// СТРАНИЦА ДЕТАЛЕЙ ТРЕНИРОВКИ
// ============================================================
let currentCategory = '';
let currentIsCustom = false;
let currentWorkoutId = null;
let timerInterval = null;
let seconds = 0;
let isWorkoutActive = false;
let completedExercises = new Set();

const timerDisplay = document.getElementById('timerDisplay');
const actionButton = document.getElementById('actionButton');
const editWorkoutBtn = document.getElementById('editWorkoutBtn');

function loadWorkoutDetail(category, isCustom, id) {
    currentCategory = category;
    currentIsCustom = isCustom;
    currentWorkoutId = id;
    completedExercises = new Set();
    
    let exercises = [];
    if (isCustom && id) {
        const workout = getWorkoutById(id);
        if (workout) {
            exercises = workout.exercises || [];
            currentCategory = workout.title;
        }
    } else {
        exercises = exercisesData[category] || exercisesData['Руки'];
    }
    
    const titleEl = document.getElementById('workoutDetailTitle');
    if (titleEl) {
        titleEl.textContent = 'ТРЕНИРОВКА - ' + currentCategory.toUpperCase();
    }
    
    const container = document.getElementById('exercisesContainer');
    if (container) {
        container.innerHTML = exercises.map((ex, index) => `
            <div class="level-card" id="exercise-${index}">
                <div class="exercise-status" id="status-${index}">
                    <span class="exercise-number" id="number-${index}">${index + 1}</span>
                    <div class="check-box" id="check-${index}" style="display:none;"></div>
                </div>
                <div class="level-info">
                    <h3>${ex.name}</h3>
                    <p>${ex.sets} подходов × ${ex.reps} повторений</p>
                </div>
            </div>
        `).join('');
        
        document.querySelectorAll('.level-card').forEach((card, index) => {
            card.addEventListener('click', function() {
                toggleExercise(index);
            });
        });
    }
    
    if (editWorkoutBtn) {
        editWorkoutBtn.style.display = 'block';
        editWorkoutBtn.onclick = function() {
            window.navigateTo('workout-edit', { category: currentCategory, isCustom: currentIsCustom, id: currentWorkoutId });
        };
    }
    
    if (timerDisplay) {
        timerDisplay.textContent = '00:00';
    }
    if (actionButton) {
        actionButton.textContent = 'Начать тренировку';
    }
    seconds = 0;
    isWorkoutActive = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// ============================================================
// ПЕРЕКЛЮЧЕНИЕ УПРАЖНЕНИЙ
// ============================================================
function toggleExercise(index) {
    if (!isWorkoutActive) return;
    
    const statusEl = document.getElementById('status-' + index);
    if (!statusEl) return;
    
    const checkBox = statusEl.querySelector('.check-box');
    if (!checkBox) return;
    
    if (completedExercises.has(index)) {
        completedExercises.delete(index);
        checkBox.textContent = '';
        checkBox.classList.remove('completed');
    } else {
        completedExercises.add(index);
        checkBox.textContent = '✓';
        checkBox.classList.add('completed');
    }
}

// ============================================================
// ТАЙМЕР
// ============================================================
function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
}

function startTimer() {
    if (timerInterval) return;
    isWorkoutActive = true;
    
    if (editWorkoutBtn) {
        editWorkoutBtn.style.display = 'none';
    }
    
    document.querySelectorAll('.exercise-status').forEach(el => {
        const number = el.querySelector('.exercise-number');
        const checkBox = el.querySelector('.check-box');
        if (number) number.style.display = 'none';
        if (checkBox) {
            checkBox.style.display = 'flex';
            checkBox.textContent = '';
            checkBox.classList.remove('completed');
        }
        el.classList.remove('completed');
    });
    completedExercises.clear();
    
    timerInterval = setInterval(() => {
        seconds++;
        if (timerDisplay) {
            timerDisplay.textContent = formatTime(seconds);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isWorkoutActive = false;
    return seconds;
}

// ============================================================
// МОДАЛЬНОЕ ОКНО РЕЗУЛЬТАТОВ
// ============================================================
function showModal(category, time, completed, total, xpEarned) {
    const oldModal = document.getElementById('modal-overlay');
    if (oldModal) oldModal.remove();
    
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.className = 'modal-overlay';
    
    overlay.innerHTML = `
        <div class="modal-content">
            <div class="modal-title">ТРЕНИРОВКА ${category.toUpperCase()}</div>
            <div class="modal-stats">
                <div class="modal-stat">
                    <div class="modal-stat-label">Время</div>
                    <div class="modal-stat-value">${formatTime(time)}</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-label">Упражнения</div>
                    <div class="modal-stat-value">${completed}/${total}</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-label">Прогресс</div>
                    <div class="modal-stat-value">+${xpEarned.toFixed(1)} XP</div>
                </div>
            </div>
            <button class="modal-btn" onclick="closeModal()">ПРОДОЛЖИТЬ</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
}

window.closeModal = function() {
    const modal = document.getElementById('modal-overlay');
    if (modal) modal.remove();
    window.navigateTo('profile');
};

// ============================================================
// ЗАВЕРШЕНИЕ ТРЕНИРОВКИ (С НОВОЙ ФОРМУЛОЙ XP)
// ============================================================
async function finishWorkout() {
    const totalTime = stopTimer();
    let exercises = [];
    if (currentIsCustom && currentWorkoutId) {
        const workout = getWorkoutById(currentWorkoutId);
        if (workout) {
            exercises = workout.exercises || [];
        }
    } else {
        exercises = exercisesData[currentCategory] || exercisesData['Руки'];
    }
    
    const total = exercises.length;
    if (total === 0) {
        alert('Тренировка не содержит упражнений');
        if (actionButton) actionButton.textContent = 'Начать тренировку';
        if (timerDisplay) timerDisplay.textContent = '00:00';
        seconds = 0;
        return;
    }
    
    const completed = completedExercises.size;
    
    // Новая формула XP: сумма (подходы × повторения) / 10
    const fullXp = calculateWorkoutXp(exercises);
    const xpEarned = (fullXp / total) * completed;
    
    const date = new Date().toISOString();
    const user = await getFirebaseUser();
    
    if (user) {
        const result = await saveWorkoutToFirestore(user.uid, {
            title: currentCategory,
            date: date,
            durationSeconds: totalTime,
            exercises: exercises.map((ex, i) => ({
                name: ex.name,
                sets: parseInt(ex.sets) || 0,
                reps: parseInt(ex.reps) || 0,
                weight: 0,
                order: i,
                completed: completedExercises.has(i)
            })),
            xpEarned: xpEarned
        });
        
        if (result.success) {
            console.log('✅ Тренировка сохранена в Firestore');
        }
        
        const profileResult = await getUserProfile(user.uid);
        if (profileResult.success) {
            const currentXp = profileResult.data.totalXp || 0;
            await updateUserProfile(user.uid, { totalXp: currentXp + xpEarned });
        }
    }
    
    showModal(currentCategory, totalTime, completed, total, xpEarned);
    
    if (editWorkoutBtn) {
        editWorkoutBtn.style.display = 'block';
    }
    if (actionButton) {
        actionButton.textContent = 'Начать тренировку';
    }
    if (timerDisplay) {
        timerDisplay.textContent = '00:00';
    }
    seconds = 0;
}

if (actionButton) {
    actionButton.addEventListener('click', function() {
        if (!isWorkoutActive) {
            startTimer();
            this.textContent = 'Завершить тренировку';
        } else {
            finishWorkout();
        }
    });
}

// ============================================================
// СТРАНИЦА РЕДАКТИРОВАНИЯ ТРЕНИРОВКИ
// ============================================================
let editExercises = [];
let editWorkoutId = null;
let editIsCustom = false;
let editCategory = '';
let editingExerciseIndex = null;

function loadEditPage(category, isCustom, id) {
    editCategory = category;
    editIsCustom = isCustom;
    editWorkoutId = id;
    
    const titleEl = document.getElementById('editTitle');
    if (titleEl) {
        if (id === 'new') {
            titleEl.textContent = 'СОЗДАНИЕ ТРЕНИРОВКИ';
        } else {
            titleEl.textContent = 'РЕДАКТИРОВАТЬ - ' + category.toUpperCase();
        }
    }
    
    const nameInput = document.getElementById('editWorkoutName');
    if (nameInput) {
        if (isCustom && id && id !== 'new') {
            const workout = getWorkoutById(id);
            if (workout) {
                nameInput.value = workout.title || category;
            }
        } else if (!isCustom) {
            nameInput.value = category;
        } else {
            const workouts = getMyWorkouts();
            const count = workouts.length + 1;
            nameInput.value = 'Тренировка №' + count;
        }
    }
    
    if (isCustom && id && id !== 'new') {
        const workout = getWorkoutById(id);
        if (workout) {
            editExercises = workout.exercises ? JSON.parse(JSON.stringify(workout.exercises)) : [];
            const icon = workout.icon || 'bodybuilding';
            document.querySelectorAll('.icon-option').forEach(el => {
                el.classList.toggle('active', el.dataset.icon === icon);
            });
        } else {
            editExercises = [];
        }
    } else if (!isCustom) {
        editExercises = exercisesData[category] ? JSON.parse(JSON.stringify(exercisesData[category])) : [];
        const defaultIcon = category === 'Руки' ? 'bodybuilding' :
                           category === 'Пресс' ? 'press' :
                           category === 'Грудь' ? 'breast' :
                           category === 'Спина' ? 'back' :
                           category === 'Ноги' ? 'legs' : 'bodybuilding';
        document.querySelectorAll('.icon-option').forEach(el => {
            el.classList.toggle('active', el.dataset.icon === defaultIcon);
        });
    } else {
        editExercises = [];
        document.querySelectorAll('.icon-option').forEach((el, index) => {
            el.classList.toggle('active', index === 0);
        });
    }
    
    renderEditExercises();
}

// ============================================================
// ВЫБОР ЗНАЧКА
// ============================================================
document.querySelectorAll('.icon-option').forEach(el => {
    el.addEventListener('click', function() {
        document.querySelectorAll('.icon-option').forEach(e => e.classList.remove('active'));
        this.classList.add('active');
    });
});

// ============================================================
// РЕНДЕР УПРАЖНЕНИЙ В РЕДАКТИРОВАНИИ
// ============================================================
function renderEditExercises() {
    const container = document.getElementById('editExercisesContainer');
    if (!container) return;
    
    if (editExercises.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="padding:1.5rem;">
                <p style="color:var(--slate);">Нет упражнений</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = editExercises.map((ex, index) => `
        <div class="edit-exercise-item" data-index="${index}" draggable="true">
            <div class="drag-handle">
                <span>☰</span>
            </div>
            <div class="edit-exercise-info">
                <h4>${ex.name}</h4>
                <p>${ex.sets} подходов × ${ex.reps} повторений</p>
            </div>
            <div class="edit-actions">
                <button class="edit-btn" onclick="openExerciseModal(${index})">
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button class="delete-btn" onclick="removeEditExercise(${index})">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    setupDragDrop();
}

// ============================================================
// DRAG & DROP
// ============================================================
let dragStartIndex = null;

function setupDragDrop() {
    const items = document.querySelectorAll('.edit-exercise-item');
    items.forEach((item, index) => {
        item.draggable = true;
        item.dataset.index = index;
        
        item.addEventListener('dragstart', function(e) {
            dragStartIndex = parseInt(this.dataset.index);
            this.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        });
        
        item.addEventListener('dragend', function(e) {
            this.classList.remove('dragging');
            document.querySelectorAll('.edit-exercise-item').forEach(el => {
                el.classList.remove('drag-over');
            });
        });
        
        item.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('drag-over');
        });
        
        item.addEventListener('dragleave', function(e) {
            this.classList.remove('drag-over');
        });
        
        item.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
            const dropIndex = parseInt(this.dataset.index);
            if (dragStartIndex !== null && dragStartIndex !== dropIndex) {
                const [removed] = editExercises.splice(dragStartIndex, 1);
                editExercises.splice(dropIndex, 0, removed);
                renderEditExercises();
                setupDragDrop();
            }
            dragStartIndex = null;
        });
    });
}

// ============================================================
// УПРАВЛЕНИЕ УПРАЖНЕНИЯМИ В РЕДАКТИРОВАНИИ
// ============================================================
window.addEditExercise = function() {
    editExercises.push({ name: 'Новое упражнение', sets: 3, reps: 12 });
    renderEditExercises();
    openExerciseModal(editExercises.length - 1);
};

window.removeEditExercise = function(index) {
    if (confirm('Удалить это упражнение?')) {
        editExercises.splice(index, 1);
        renderEditExercises();
    }
};

window.openExerciseModal = function(index) {
    editingExerciseIndex = index;
    const ex = editExercises[index];
    if (!ex) return;
    
    // Очищаем поля перед заполнением
    document.getElementById('modalExerciseName').value = '';
    document.getElementById('modalExerciseSets').value = '';
    document.getElementById('modalExerciseReps').value = '';
    
    // Заполняем
    document.getElementById('modalExerciseName').value = ex.name || '';
    document.getElementById('modalExerciseSets').value = ex.sets || 3;
    document.getElementById('modalExerciseReps').value = ex.reps || 12;
    document.getElementById('exerciseModal').style.display = 'flex';
};

// ============================================================
// ОГРАНИЧЕНИЕ ВВОДА ТОЛЬКО ЦИФР (уже не нужно, т.к. type=number)
// ============================================================
// Оставляем для совместимости, но теперь поля type="number"

// ============================================================
// МОДАЛЬНОЕ ОКНО РЕДАКТИРОВАНИЯ УПРАЖНЕНИЯ
// ============================================================
document.getElementById('modalSaveBtn')?.addEventListener('click', function() {
    if (editingExerciseIndex === null) return;
    
    const name = document.getElementById('modalExerciseName').value.trim();
    let sets = parseInt(document.getElementById('modalExerciseSets').value);
    let reps = parseInt(document.getElementById('modalExerciseReps').value);
    
    if (!name) {
        alert('Введите название упражнения');
        return;
    }
    if (isNaN(sets) || sets < 1) sets = 3;
    if (isNaN(reps) || reps < 1) reps = 12;
    
    editExercises[editingExerciseIndex] = { name, sets, reps };
    document.getElementById('exerciseModal').style.display = 'none';
    editingExerciseIndex = null;
    renderEditExercises();
});

document.getElementById('modalCancelBtn')?.addEventListener('click', function() {
    document.getElementById('exerciseModal').style.display = 'none';
    editingExerciseIndex = null;
});

document.getElementById('exerciseModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
        editingExerciseIndex = null;
    }
});

// ============================================================
// СОХРАНЕНИЕ И ОТМЕНА В РЕДАКТИРОВАНИИ
// ============================================================
document.getElementById('saveEditBtn')?.addEventListener('click', function() {
    if (editExercises.length === 0) {
        alert('Добавьте хотя бы одно упражнение');
        return;
    }
    
    const nameInput = document.getElementById('editWorkoutName');
    const title = nameInput ? nameInput.value.trim() : (editCategory || 'Моя тренировка');
    
    const selectedIcon = document.querySelector('.icon-option.active');
    const icon = selectedIcon ? selectedIcon.dataset.icon : 'bodybuilding';
    
    if (!title) {
        alert('Введите название тренировки');
        return;
    }
    
    if (editWorkoutId === 'new') {
        const newWorkout = {
            _id: Date.now().toString(),
            title: title,
            icon: icon,
            exercises: editExercises
        };
        const workouts = getMyWorkouts();
        workouts.push(newWorkout);
        saveMyWorkouts(workouts);
        alert('Тренировка создана!');
    } else if (editIsCustom) {
        updateWorkout(editWorkoutId, { 
            title: title, 
            icon: icon,
            exercises: editExercises 
        });
        alert('Тренировка обновлена!');
    } else {
        const category = editCategory;
        if (exercisesData[category]) {
            exercisesData[category] = JSON.parse(JSON.stringify(editExercises));
            updateCategoryCount(category, editExercises.length);
            alert('Тренировка обновлена!');
        }
    }
    
    window.navigateTo('workouts');
});

document.getElementById('cancelEditBtn')?.addEventListener('click', function() {
    window.navigateTo('workouts');
});

// ============================================================
// СТАТИСТИКА (БЕЗ ИСТОРИИ ПРОГРЕССА)
// ============================================================
async function loadStats() {
    const user = await getFirebaseUser();
    if (!user) {
        console.log('❌ Пользователь не авторизован');
        return;
    }
    
    const result = await getUserWorkoutsFromFirestore(user.uid);
    if (!result.success) {
        console.error('Ошибка загрузки тренировок:', result.error);
        return;
    }
    
    const workouts = result.data;
    const total = workouts.length;
    const totalSeconds = workouts.reduce((sum, w) => sum + (w.durationSeconds || 0), 0);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalExercises = workouts.reduce((sum, w) => {
        const completed = w.exercises?.filter(e => e.completed === true).length || 0;
        return sum + completed;
    }, 0);

    const totalWorkoutsEl = document.getElementById('totalWorkouts');
    const totalMinutesEl = document.getElementById('totalMinutes');
    const totalExercisesEl = document.getElementById('totalExercises');
    
    if (totalWorkoutsEl) totalWorkoutsEl.textContent = total;
    if (totalMinutesEl) totalMinutesEl.textContent = totalMinutes;
    if (totalExercisesEl) totalExercisesEl.textContent = totalExercises;

    const muscleGroups = ['Руки', 'Пресс', 'Грудь', 'Спина', 'Ноги'];
    const container = document.getElementById('musclesStats');
    if (!container) return;
    
    const muscleCounts = muscleGroups.map(m => {
        return workouts.filter(w => w.title === m).length;
    });
    
    const maxCount = Math.max(1, ...muscleCounts);
    
    container.innerHTML = muscleGroups.map((m, i) => {
        const count = muscleCounts[i];
        const percent = Math.round((count / maxCount) * 100);
        return `
            <div class="stat-muscle-item">
                <span class="muscle-name">${m}</span>
                <div class="muscle-bar"><div class="muscle-fill" style="width:${percent}%;"></div></div>
                <span class="muscle-count">${count}</span>
            </div>
        `;
    }).join('');

    const historyContainer = document.getElementById('workoutHistory');
    if (historyContainer) {
        if (workouts.length === 0) {
            historyContainer.innerHTML = '<p style="color:var(--slate);text-align:center;">Нет выполненных тренировок</p>';
        } else {
            historyContainer.innerHTML = workouts.slice().reverse().map(w => {
                const totalEx = w.exercises?.length || 0;
                const completedEx = w.exercises?.filter(e => e.completed === true).length || 0;
                const xpEarned = w.xpEarned || 0;
                const minutes = Math.floor((w.durationSeconds || 0) / 60);
                
                return `
                    <div>
                        <div style="display:flex;justify-content:space-between;align-items:center;">
                            <strong>${w.title}</strong>
                            <span style="color:var(--slate);font-size:0.9rem;">${new Date(w.date).toLocaleDateString('ru-RU')}</span>
                        </div>
                        <div style="color:var(--slate);font-size:0.9rem;margin-top:0.3rem;">
                            ${minutes} мин · ${completedEx}/${totalEx} упражнений · ${xpEarned.toFixed(1)} XP
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
}

// ============================================================
// КАЛЕНДАРЬ (из localStorage)
// ============================================================
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
    const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь',
                       'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    const monthYearEl = document.getElementById('currentMonthYear');
    if (monthYearEl) {
        monthYearEl.textContent = `${monthNames[month]} ${year}`;
    }

    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDayOfWeek = firstDay.getDay() || 7;
    const container = document.getElementById('calendarDays');
    if (!container) return;
    
    container.innerHTML = '';

    for (let i = 1; i < startDayOfWeek; i++) {
        const empty = document.createElement('div');
        empty.classList.add('calendar-empty');
        container.appendChild(empty);
    }

    const today = new Date();
    const workoutDays = JSON.parse(localStorage.getItem('myWorkouts') || '[]').map(w => new Date(w.date));

    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        dayEl.classList.add('calendar-day');
        dayEl.textContent = day;

        const hasWorkout = workoutDays.some(d =>
            d.getDate() === day && d.getMonth() === month && d.getFullYear() === year
        );
        if (hasWorkout) dayEl.classList.add('has-workout');
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayEl.classList.add('today');
        }
        container.appendChild(dayEl);
    }
}

const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) { currentMonth = 11; currentYear--; }
        renderCalendar(currentMonth, currentYear);
    });
}

if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) { currentMonth = 0; currentYear++; }
        renderCalendar(currentMonth, currentYear);
    });
}

// ============================================================
// ПРОФИЛЬ (С НОВЫМИ УРОВНЯМИ И ТОЧНЫМ XP)
// ============================================================
async function loadProfile() {
    const user = await getFirebaseUser();
    if (!user) {
        console.log('❌ Пользователь не авторизован');
        return;
    }
    
    const syncResult = await syncUserProfile();
    if (!syncResult.success) {
        console.error('Ошибка синхронизации профиля:', syncResult.error);
        return;
    }
    
    const profile = syncResult.data;
    const xp = profile.totalXp || 0;
    const currentLevel = getCurrentLevel(xp);
    const progress = getXpProgress(xp);
    const nextLevel = getNextLevel(xp);
    
    let progressText = '';
    if (nextLevel) {
        progressText = `${xp.toFixed(1)} / ${nextLevel.minXp} XP`;
    } else {
        progressText = `${xp.toFixed(1)}+ XP`;
    }
    
    document.getElementById('profileName').textContent = profile.displayName || 'Пользователь';
    document.getElementById('profileInitials').textContent = (profile.displayName || 'П')[0].toUpperCase();
    document.getElementById('profileEmailDisplay').textContent = profile.email || user.email || '';
    
    const dateEl = document.getElementById('profileDate');
    if (dateEl && profile.createdAt) {
        const date = new Date(profile.createdAt);
        dateEl.textContent = date.toLocaleDateString('ru-RU', {
            day: '2-digit', month: 'long', year: 'numeric'
        });
    }
    
    document.getElementById('editName').value = profile.displayName || '';
    document.getElementById('editNameError').textContent = ''; // очищаем ошибку
    
    document.getElementById('levelLvl').textContent = currentLevel.id + ' LVL';
    document.getElementById('levelTitle').textContent = currentLevel.name;
    document.getElementById('levelProgressText').textContent = progressText;
    document.getElementById('levelFill').style.width = progress + '%';
    
    // Рендерим друзей
    await renderFriendsInProfile();
}

// ============================================================
// ПРОФИЛЬ - РЕДАКТИРОВАНИЕ
// ============================================================
const editProfileBtn = document.getElementById('editProfileBtn');
const profileView = document.getElementById('profileView');
const profileEdit = document.getElementById('profileEdit');
const cancelProfileBtn = document.getElementById('cancelProfileEditBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');

if (editProfileBtn) {
    editProfileBtn.addEventListener('click', () => {
        if (profileView) profileView.style.display = 'none';
        if (profileEdit) profileEdit.style.display = 'block';
        const nameEl = document.getElementById('editName');
        const currentName = document.getElementById('profileName').textContent;
        if (nameEl) nameEl.value = currentName;
        document.getElementById('editNameError').textContent = ''; // сброс ошибки
    });
}

if (cancelProfileBtn) {
    cancelProfileBtn.addEventListener('click', () => {
        if (profileView) profileView.style.display = 'block';
        if (profileEdit) profileEdit.style.display = 'none';
        loadProfile();
    });
}

if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', async () => {
        const nameEl = document.getElementById('editName');
        const nameError = document.getElementById('editNameError');
        const name = nameEl ? nameEl.value.trim() : '';
        
        if (!name) {
            nameError.textContent = 'Введите имя и фамилию';
            nameEl.classList.add('error');
            return;
        } else {
            nameError.textContent = '';
            nameEl.classList.remove('error');
        }
        
        const user = await getFirebaseUser();
        if (user) {
            await updateUserProfile(user.uid, { displayName: name });
            loadProfile();
        }
        
        if (profileView) profileView.style.display = 'block';
        if (profileEdit) profileEdit.style.display = 'none';
    });
}

// ============================================================
// СЛУШАТЕЛЬ АВТОРИЗАЦИИ
// ============================================================
firebase.auth().onAuthStateChanged(async (user) => {
    const bottomNav = document.getElementById('bottomNav');
    
    if (user) {
        console.log('✅ Пользователь авторизован:', user.phoneNumber || user.email);
        bottomNav.style.display = 'block';
        
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('page-workouts').classList.add('active');
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.page === 'workouts');
        });
        await loadProfile();
        await loadStats();
        renderMyWorkouts();
        renderCalendar(currentMonth, currentYear);
    } else {
        console.log('❌ Пользователь не авторизован');
        bottomNav.style.display = 'none';
        showHero();
    }
});

// ============================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('SportApp загружен!');
});

// ============================================================
// ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
// ============================================================
function showLogin() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-login').classList.add('active');
}

function showRegister() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-register').classList.add('active');
}

function showHero() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-hero').classList.add('active');
}

// ============================================================
// РЕГИСТРАЦИЯ (Email + пароль)
// ============================================================
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    const nameInput = document.getElementById('regName');
    const emailInput = document.getElementById('regEmail');
    const passwordInput = document.getElementById('regPassword');
    const nameError = document.getElementById('regNameError');
    const emailError = document.getElementById('regEmailError');
    const passwordError = document.getElementById('regPasswordError');

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const btn = registerForm.querySelector('.btn-primary');
        
        let hasError = false;
        if (!name) {
            nameInput.classList.add('error');
            nameError.textContent = 'Введите имя';
            hasError = true;
        }
        if (!email) {
            emailInput.classList.add('error');
            emailError.textContent = 'Введите почту';
            hasError = true;
        }
        if (!password) {
            passwordInput.classList.add('error');
            passwordError.textContent = 'Введите пароль';
            hasError = true;
        } else if (password.length < 6) {
            passwordInput.classList.add('error');
            passwordError.textContent = 'Пароль минимум 6 символов';
            hasError = true;
        }
        if (hasError) return;
        
        btn.textContent = 'Регистрация...';
        btn.disabled = true;
        
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
            
            await result.user.updateProfile({
                displayName: name
            });
            
            await saveUserProfile(result.user.uid, {
                displayName: name,
                email: email,
                avatar: 'bodybuilding',
                level: 1,
                totalXp: 0,
                createdAt: new Date().toISOString()
            });
            
            console.log('✅ Регистрация успешна:', result.user.email);
            window.navigateTo('workouts');
        } catch (error) {
            passwordInput.classList.add('error');
            let message = 'Ошибка регистрации';
            if (error.code === 'auth/email-already-in-use') message = 'Почта уже используется';
            else if (error.code === 'auth/weak-password') message = 'Пароль минимум 6 символов';
            else if (error.code === 'auth/invalid-email') message = 'Неверный формат почты';
            else if (error.code === 'auth/network-request-failed') message = 'Проверьте интернет';
            passwordError.textContent = message;
        } finally {
            btn.textContent = 'Зарегистрироваться';
            btn.disabled = false;
        }
    });

    nameInput.addEventListener('input', () => {
        nameInput.classList.remove('error');
        nameError.textContent = '';
    });
    emailInput.addEventListener('input', () => {
        emailInput.classList.remove('error');
        emailError.textContent = '';
    });
    passwordInput.addEventListener('input', () => {
        passwordInput.classList.remove('error');
        passwordError.textContent = '';
    });
}

// ============================================================
// ВХОД (Email + пароль)
// ============================================================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    const emailError = document.getElementById('loginEmailError');
    const passwordError = document.getElementById('loginPasswordError');

    emailInput.addEventListener('input', () => {
        emailInput.classList.remove('error');
        emailError.textContent = '';
    });
    passwordInput.addEventListener('input', () => {
        passwordInput.classList.remove('error');
        passwordError.textContent = '';
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const btn = loginForm.querySelector('.btn-primary');
        
        let hasError = false;
        if (!email) {
            emailInput.classList.add('error');
            emailError.textContent = 'Введите почту';
            hasError = true;
        }
        if (!password) {
            passwordInput.classList.add('error');
            passwordError.textContent = 'Введите пароль';
            hasError = true;
        }
        if (hasError) return;
        
        btn.textContent = 'Вход...';
        btn.disabled = true;
        
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log('✅ Вход выполнен:', result.user.email);
            window.navigateTo('workouts');
        } catch (error) {
            passwordInput.classList.add('error');
            let message = 'Неверный email или пароль';
            if (error.code === 'auth/user-not-found') message = 'Пользователь не найден';
            else if (error.code === 'auth/wrong-password') message = 'Неверный пароль';
            else if (error.code === 'auth/invalid-email') message = 'Неверный формат email';
            else if (error.code === 'auth/too-many-requests') message = 'Слишком много попыток';
            passwordError.textContent = message;
        } finally {
            btn.textContent = 'Войти в аккаунт';
            btn.disabled = false;
        }
    });
}

// ============================================================
// КНОПКА "ВЫЙТИ"
// ============================================================
async function logout() {
    if (confirm('Выйти из аккаунта?')) {
        await firebase.auth().signOut();
        showHero();
    }
}

// ============================================================
// ДРУЗЬЯ - ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================================

async function getFriendshipStatus(targetUserId) {
    const user = await getFirebaseUser();
    if (!user) return 'none';
    
    const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
    const friends = userDoc.data()?.friends || [];
    if (friends.includes(targetUserId)) return 'friends';
    
    const sentSnapshot = await firebase.firestore()
        .collection('friendRequests')
        .where('from', '==', user.uid)
        .where('to', '==', targetUserId)
        .where('status', '==', 'pending')
        .get();
    if (!sentSnapshot.empty) return 'pending_sent';
    
    const receivedSnapshot = await firebase.firestore()
        .collection('friendRequests')
        .where('from', '==', targetUserId)
        .where('to', '==', user.uid)
        .where('status', '==', 'pending')
        .get();
    if (!receivedSnapshot.empty) return 'pending_received';
    
    return 'none';
}

// ============================================================
// ДРУЗЬЯ - ОСНОВНЫЕ ФУНКЦИИ
// ============================================================

async function searchUsers(query) {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    
    // Не искать по пустой строке
    if (!query || query.trim().length === 0) {
        return { success: true, data: [] };
    }
    
    try {
        const snapshot = await firebase.firestore()
            .collection('users')
            .where('displayName', '>=', query)
            .where('displayName', '<=', query + '\uf8ff')
            .limit(20)
            .get();
        
        const results = [];
        for (const doc of snapshot.docs) {
            if (doc.id !== user.uid) {
                const data = doc.data();
                const status = await getFriendshipStatus(doc.id);
                results.push({ id: doc.id, ...data, friendshipStatus: status });
            }
        }
        return { success: true, data: results };
    } catch (error) {
        console.error('Ошибка поиска:', error);
        return { success: false, error: error.message };
    }
}

async function sendFriendRequest(toUserId) {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    
    const status = await getFriendshipStatus(toUserId);
    if (status !== 'none') {
        return { success: false, error: 'Заявка уже отправлена или вы уже друзья' };
    }
    
    try {
        await firebase.firestore().collection('friendRequests').add({
            from: user.uid,
            to: toUserId,
            status: 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return { success: true };
    } catch (error) {
        console.error('Ошибка отправки заявки:', error);
        return { success: false, error: error.message };
    }
}

async function getFriendRequests() {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    
    try {
        const snapshot = await firebase.firestore()
            .collection('friendRequests')
            .where('to', '==', user.uid)
            .where('status', '==', 'pending')
            .get();
        
        const requests = [];
        for (const doc of snapshot.docs) {
            const data = doc.data();
            const fromUser = await getUserProfile(data.from);
            requests.push({ 
                id: doc.id, 
                from: data.from,
                fromUser: fromUser.success ? fromUser.data : null, 
                ...data 
            });
        }
        return { success: true, data: requests };
    } catch (error) {
        console.error('Ошибка получения заявок:', error);
        return { success: false, error: error.message };
    }
}

async function acceptFriendRequest(requestId, fromUserId) {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    
    try {
        await firebase.firestore().collection('friendRequests').doc(requestId).update({
            status: 'accepted'
        });
        
        await firebase.firestore().collection('users').doc(user.uid).update({
            friends: firebase.firestore.FieldValue.arrayUnion(fromUserId)
        });
        await firebase.firestore().collection('users').doc(fromUserId).update({
            friends: firebase.firestore.FieldValue.arrayUnion(user.uid)
        });
        
        return { success: true };
    } catch (error) {
        console.error('Ошибка принятия заявки:', error);
        return { success: false, error: error.message };
    }
}

async function rejectFriendRequest(requestId) {
    try {
        await firebase.firestore().collection('friendRequests').doc(requestId).delete();
        return { success: true };
    } catch (error) {
        console.error('Ошибка отклонения заявки:', error);
        return { success: false, error: error.message };
    }
}

async function getFriendsList() {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    
    try {
        const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
        const friendIds = userDoc.data()?.friends || [];
        
        if (friendIds.length === 0) {
            return { success: true, data: [] };
        }
        
        const friends = [];
        for (const id of friendIds) {
            const result = await getUserProfile(id);
            if (result.success) {
                friends.push({ id, ...result.data });
            }
        }
        return { success: true, data: friends };
    } catch (error) {
        console.error('Ошибка получения друзей:', error);
        return { success: false, error: error.message };
    }
}

// ============================================================
// ДРУЗЬЯ - РЕНДЕР
// ============================================================

async function renderFriendsInProfile() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('searchResults');
    const requestsDiv = document.getElementById('friendRequests');
    const friendsDiv = document.getElementById('friendsList');
    
    // --- ПОИСК ---
    if (searchBtn) {
        searchBtn.onclick = async () => {
            const query = searchInput.value.trim();
            // Очищаем старые результаты
            resultsDiv.innerHTML = '';
            
            if (!query) {
                return; // ничего не показываем
            }
            
            const result = await searchUsers(query);
            if (!result.success) {
                resultsDiv.innerHTML = '<p style="color:var(--slate);font-size:0.9rem;">Ошибка поиска</p>';
                return;
            }
            
            if (result.data.length === 0) {
                resultsDiv.innerHTML = '<p style="color:var(--slate);font-size:0.9rem;">Пользователи не найдены</p>';
                return;
            }
            
            resultsDiv.innerHTML = result.data.map(u => {
                const initial = (u.displayName || 'П')[0].toUpperCase();
                let buttonHtml = '';
                if (u.friendshipStatus === 'none') {
                    buttonHtml = `<button class="btn-secondary btn-sm" onclick="addFriend('${u.id}', this)">Добавить</button>`;
                } else if (u.friendshipStatus === 'pending_sent') {
                    buttonHtml = `<button class="btn-secondary btn-sm" disabled style="opacity:0.6;">Ждем ответа</button>`;
                } else if (u.friendshipStatus === 'pending_received') {
                    buttonHtml = `<button class="btn-secondary btn-sm" disabled style="opacity:0.6;">Входящая заявка</button>`;
                } else if (u.friendshipStatus === 'friends') {
                    buttonHtml = `<button class="btn-secondary btn-sm" disabled style="opacity:0.6;">В друзьях</button>`;
                }
                return `
                    <div class="friend-result-item">
                        <div class="friend-avatar">${initial}</div>
                        <div class="friend-result-info">
                            <strong>${u.displayName || 'Пользователь'}</strong>
                            <span>${u.email || ''}</span>
                        </div>
                        ${buttonHtml}
                    </div>
                `;
            }).join('');
        };
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
    
    // --- ЗАЯВКИ ---
    const requests = await getFriendRequests();
    let requestsHtml = `<p class="friends-subtitle">Заявки</p>`;
    if (requests.success && requests.data.length > 0) {
        requestsHtml += requests.data.map(r => {
            const fromUser = r.fromUser || {};
            const initial = (fromUser.displayName || 'П')[0].toUpperCase();
            return `
                <div class="friend-request-item">
                    <div class="friend-avatar">${initial}</div>
                    <div class="friend-result-info">
                        <strong>${fromUser.displayName || 'Пользователь'}</strong>
                        <span>${fromUser.email || ''}</span>
                    </div>
                    <div>
                        <button class="btn-primary btn-sm" onclick="acceptFriend('${r.id}','${r.from}')">Принять</button>
                        <button class="btn-secondary btn-sm" onclick="rejectFriend('${r.id}')">Отклонить</button>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        requestsHtml += '<p style="color:var(--slate);font-size:0.9rem;">Нет заявок</p>';
    }
    requestsDiv.innerHTML = requestsHtml;
    
    // --- ДРУЗЬЯ ---
    const friends = await getFriendsList();
    let friendsHtml = `<p class="friends-subtitle">Друзья</p>`;
    if (friends.success && friends.data.length > 0) {
        friendsHtml += friends.data.map(f => {
            const initial = (f.displayName || 'П')[0].toUpperCase();
            return `
                <div class="friend-item">
                    <div class="friend-avatar">${initial}</div>
                    <div class="friend-info">
                        <strong>${f.displayName || 'Пользователь'}</strong>
                        <span>Уровень ${f.level || 1} · ${(f.totalXp || 0).toFixed(1)} XP</span>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        friendsHtml += '<p style="color:var(--slate);font-size:0.9rem;">У вас пока нет друзей</p>';
    }
    friendsDiv.innerHTML = friendsHtml;
}

// ============================================================
// ДРУЗЬЯ - КНОПКИ (ГЛОБАЛЬНЫЕ)
// ============================================================

window.addFriend = async function(userId, btnElement) {
    if (btnElement) {
        btnElement.textContent = 'Отправка...';
        btnElement.disabled = true;
        btnElement.style.opacity = '0.6';
    }
    
    const result = await sendFriendRequest(userId);
    
    if (!result.success) {
        if (btnElement) {
            btnElement.textContent = 'Добавить';
            btnElement.disabled = false;
            btnElement.style.opacity = '1';
        }
        console.error('Ошибка:', result.error);
        const resultsDiv = document.getElementById('searchResults');
        resultsDiv.innerHTML += `<p style="color:#EF4444;font-size:0.8rem;">${result.error}</p>`;
        return;
    }
    
    if (btnElement) {
        btnElement.textContent = 'Ждем ответа';
        btnElement.disabled = true;
        btnElement.style.opacity = '0.6';
    }
    
    await renderFriendsInProfile();
};

window.acceptFriend = async function(requestId, fromUserId) {
    const result = await acceptFriendRequest(requestId, fromUserId);
    if (result.success) {
        await renderFriendsInProfile();
    } else {
        console.error('Ошибка принятия:', result.error);
    }
};

window.rejectFriend = async function(requestId) {
    const result = await rejectFriendRequest(requestId);
    if (result.success) {
        await renderFriendsInProfile();
    } else {
        console.error('Ошибка отклонения:', result.error);
    }
};