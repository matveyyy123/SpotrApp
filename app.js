// ============================================================
// ДАННЫЕ УПРАЖНЕНИЙ (ГОТОВЫЕ ТРЕНИРОВКИ С УРОВНЯМИ)
// ============================================================
const exercisesData = {
    'Руки': {
        '1 LVL': [
            { name: 'Отжимания от стены', reps: '12', sets: '2' },
            { name: 'Сгибание рук с резинкой', reps: '15', sets: '2' },
            { name: 'Разгибание рук с резинкой', reps: '15', sets: '2' },
            { name: 'Планка на вытянутых руках', reps: '20 сек', sets: '2' },
            { name: 'Отжимания от коленей', reps: '10', sets: '2' }
        ],
        '2 LVL': [
            { name: 'Отжимания от пола узким хватом', reps: '10', sets: '3' },
            { name: 'Отжимания от пола широким хватом', reps: '10', sets: '3' },
            { name: 'Алмазные отжимания', reps: '8', sets: '3' },
            { name: 'Сгибание рук с гантелями (бицепс)', reps: '12', sets: '3' },
            { name: 'Французский жим с гантелью стоя', reps: '12', sets: '3' },
            { name: 'Обратные отжимания от стула', reps: '10', sets: '3' },
            { name: 'Планка на локтях', reps: '30 сек', sets: '3' }
        ],
        '3 LVL': [
            { name: 'Отжимания на одной руке', reps: '5', sets: '3' },
            { name: 'Отжимания с хлопком', reps: '8', sets: '3' },
            { name: 'Отжимания с узкой постановкой рук', reps: '12', sets: '4' },
            { name: 'Сгибание рук с гантелями (бицепс)', reps: '15', sets: '4' },
            { name: 'Молотковые сгибания', reps: '12', sets: '4' },
            { name: 'Французский жим с гантелью стоя', reps: '12', sets: '4' },
            { name: 'Обратные отжимания от стула с весом', reps: '12', sets: '4' },
            { name: 'Планка на одной руке', reps: '30 сек', sets: '3' }
        ]
    },
    'Плечи': {
        '1 LVL': [
            { name: 'Разведение рук с резинкой в стороны', reps: '15', sets: '2' },
            { name: 'Подъем рук вперед с резинкой', reps: '15', sets: '2' },
            { name: 'Жим гантелей сидя', reps: '12', sets: '2' },
            { name: 'Разведение гантелей в стороны стоя', reps: '12', sets: '2' },
            { name: 'Тяга к подбородку с резинкой', reps: '15', sets: '2' }
        ],
        '2 LVL': [
            { name: 'Жим гантелей сидя', reps: '12', sets: '3' },
            { name: 'Разведение гантелей в стороны стоя', reps: '12', sets: '3' },
            { name: 'Тяга к подбородку с гантелью', reps: '12', sets: '3' },
            { name: 'Подъем рук вперед с гантелями', reps: '12', sets: '3' },
            { name: 'Разведение гантелей в наклоне', reps: '12', sets: '3' },
            { name: 'Жим Арнольда', reps: '10', sets: '3' }
        ],
        '3 LVL': [
            { name: 'Жим гантелей сидя', reps: '12', sets: '4' },
            { name: 'Разведение гантелей в стороны стоя', reps: '15', sets: '4' },
            { name: 'Тяга к подбородку с гантелью', reps: '12', sets: '4' },
            { name: 'Подъем рук вперед с гантелями', reps: '15', sets: '4' },
            { name: 'Разведение гантелей в наклоне', reps: '15', sets: '4' },
            { name: 'Жим Арнольда', reps: '12', sets: '4' },
            { name: 'Отжимания в стойке у стены', reps: '8', sets: '3' }
        ]
    },
    'Пресс': {
        '1 LVL': [
            { name: 'Скручивания лёжа', reps: '12', sets: '2' },
            { name: 'Подъем ног лёжа', reps: '10', sets: '2' },
            { name: 'Планка на коленях', reps: '20 сек', sets: '2' },
            { name: 'Боковая планка на коленях', reps: '15 сек', sets: '2' },
            { name: 'Лодочка', reps: '10', sets: '2' }
        ],
        '2 LVL': [
            { name: 'Скручивания с вытянутыми руками', reps: '15', sets: '3' },
            { name: 'Подъем ног в висе (на турнике)', reps: '10', sets: '3' },
            { name: 'Ножницы ногами лёжа', reps: '20', sets: '3' },
            { name: 'Планка на локтях', reps: '40 сек', sets: '3' },
            { name: 'Боковая планка', reps: '25 сек', sets: '3' },
            { name: 'Лодочка с задержкой', reps: '15', sets: '3' },
            { name: 'Твист сидя', reps: '20', sets: '3' }
        ],
        '3 LVL': [
            { name: 'Скручивания с весом', reps: '20', sets: '4' },
            { name: 'Подъем ног в висе (на турнике)', reps: '15', sets: '4' },
            { name: 'Ножницы ногами лёжа', reps: '30', sets: '4' },
            { name: 'Планка на локтях с подъемом ног', reps: '45 сек', sets: '4' },
            { name: 'Боковая планка с подъемом ног', reps: '30 сек', sets: '4' },
            { name: 'Лодочка с задержкой', reps: '20', sets: '4' },
            { name: 'Твист сидя с весом', reps: '25', sets: '4' },
            { name: 'Подъем ног лёжа под углом 45°', reps: '15', sets: '4' }
        ]
    },
    'Грудь': {
        '1 LVL': [
            { name: 'Отжимания от коленей', reps: '12', sets: '2' },
            { name: 'Отжимания от стены', reps: '15', sets: '2' },
            { name: 'Разводка рук с резинкой', reps: '15', sets: '2' },
            { name: 'Планка на вытянутых руках', reps: '20 сек', sets: '2' },
            { name: 'Отжимания с упором спереди', reps: '8', sets: '2' }
        ],
        '2 LVL': [
            { name: 'Отжимания от пола', reps: '12', sets: '3' },
            { name: 'Широкие отжимания', reps: '10', sets: '3' },
            { name: 'Отжимания с узкой постановкой рук', reps: '10', sets: '3' },
            { name: 'Отжимания с ногами на возвышении', reps: '10', sets: '3' },
            { name: 'Разводка рук с гантелями лёжа', reps: '12', sets: '3' },
            { name: 'Планка с переходом', reps: '30 сек', sets: '3' }
        ],
        '3 LVL': [
            { name: 'Отжимания с хлопком', reps: '10', sets: '4' },
            { name: 'Отжимания на одной руке', reps: '5', sets: '4' },
            { name: 'Отжимания с ногами на возвышении', reps: '15', sets: '4' },
            { name: 'Отжимания в алмаз', reps: '12', sets: '4' },
            { name: 'Жим гантелей лёжа', reps: '12', sets: '4' },
            { name: 'Разводка гантелей лёжа', reps: '15', sets: '4' },
            { name: 'Отжимания с паузой внизу', reps: '10', sets: '4' },
            { name: 'Планка на одной руке', reps: '30 сек', sets: '3' }
        ]
    },
    'Ноги': {
        '1 LVL': [
            { name: 'Приседания без веса', reps: '15', sets: '2' },
            { name: 'Выпады на месте', reps: '10', sets: '2' },
            { name: 'Подъем на носки стоя', reps: '15', sets: '2' },
            { name: 'Ягодичный мостик', reps: '15', sets: '2' },
            { name: 'Приседания у стены', reps: '20 сек', sets: '2' }
        ],
        '2 LVL': [
            { name: 'Приседания с гантелями', reps: '15', sets: '3' },
            { name: 'Выпады вперед с гантелями', reps: '12', sets: '3' },
            { name: 'Болгарские сплит-приседания', reps: '10', sets: '3' },
            { name: 'Подъем на носки с гантелями', reps: '15', sets: '3' },
            { name: 'Ягодичный мостик с гантелью', reps: '15', sets: '3' },
            { name: 'Приседания с паузой внизу', reps: '10', sets: '3' }
        ],
        '3 LVL': [
            { name: 'Приседания с гантелями (глубокие)', reps: '20', sets: '4' },
            { name: 'Выпады вперед с гантелями', reps: '15', sets: '4' },
            { name: 'Болгарские сплит-приседания', reps: '12', sets: '4' },
            { name: 'Румынская тяга с гантелями', reps: '15', sets: '4' },
            { name: 'Подъем на носки с гантелями', reps: '20', sets: '4' },
            { name: 'Ягодичный мостик с гантелью', reps: '20', sets: '4' },
            { name: 'Приседания с паузой внизу', reps: '15', sets: '4' },
            { name: 'Выпады в стороны', reps: '12', sets: '4' }
        ]
    },
    'Спина': {
        '1 LVL': [
            { name: 'Тяга резинки к груди', reps: '15', sets: '2' },
            { name: 'Гиперэкстензия лёжа', reps: '12', sets: '2' },
            { name: 'Лодочка', reps: '10', sets: '2' },
            { name: 'Тяга резинки к поясу', reps: '12', sets: '2' },
            { name: 'Планка на вытянутых руках', reps: '20 сек', sets: '2' }
        ],
        '2 LVL': [
            { name: 'Подтягивания (с резинкой)', reps: '8', sets: '3' },
            { name: 'Тяга гантели к поясу', reps: '12', sets: '3' },
            { name: 'Гиперэкстензия', reps: '15', sets: '3' },
            { name: 'Лодочка с задержкой', reps: '12', sets: '3' },
            { name: 'Тяга резинки к груди', reps: '15', sets: '3' },
            { name: 'Планка на локтях', reps: '30 сек', sets: '3' }
        ],
        '3 LVL': [
            { name: 'Подтягивания', reps: '10', sets: '4' },
            { name: 'Тяга гантели к поясу', reps: '15', sets: '4' },
            { name: 'Гиперэкстензия с весом', reps: '20', sets: '4' },
            { name: 'Лодочка с задержкой', reps: '15', sets: '4' },
            { name: 'Тяга резинки к груди', reps: '20', sets: '4' },
            { name: 'Планка на локтях с подъемом рук', reps: '40 сек', sets: '4' },
            { name: 'Подтягивания широким хватом', reps: '8', sets: '4' },
            { name: 'Тяга гантели к груди', reps: '12', sets: '4' }
        ]
    }
};

// Сохраняем исходные данные для сброса
const exercisesDataDefault = JSON.parse(JSON.stringify(exercisesData));

// Ключ для localStorage
const STORAGE_KEY = 'sportapp_exercisesData';

function loadExercisesData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            for (const category in parsed) {
                if (exercisesData[category]) {
                    for (const level in parsed[category]) {
                        exercisesData[category][level] = parsed[category][level];
                    }
                } else {
                    exercisesData[category] = parsed[category];
                }
            }
        } catch (e) {
            console.warn('Ошибка загрузки данных тренировок:', e);
        }
    }
}

function saveExercisesData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(exercisesData));
}

loadExercisesData();

// ============================================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ДЛЯ КАЛЕНДАРЯ
// ============================================================
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
// ============================================================
// МОДАЛЬНОЕ ОКНО "НЕТ ИНТЕРНЕТА"
// ============================================================

let isOfflineModalShown = false; // ← ФЛАГ ДЛЯ ВНУТРИ ПРИЛОЖЕНИЯ

// ============================================================
// ОФЛАЙН-ОЧЕРЕДЬ НЕСИНХРОНИЗИРОВАННЫХ ТРЕНИРОВОК
// ============================================================
const PENDING_KEY = 'pendingWorkouts';

function getPendingWorkouts() {
  return JSON.parse(localStorage.getItem(PENDING_KEY)) || [];
}

function savePendingWorkouts(workouts) {
  localStorage.setItem(PENDING_KEY, JSON.stringify(workouts));
}

function addPendingWorkout(workoutData) {
  const pending = getPendingWorkouts();
  workoutData._localId = Date.now() + '_' + Math.random().toString(36).slice(2, 6);
  pending.push(workoutData);
  savePendingWorkouts(pending);
}

function removePendingWorkout(localId) {
  let pending = getPendingWorkouts();
  pending = pending.filter(w => w._localId !== localId);
  savePendingWorkouts(pending);
}

async function syncPendingWorkouts() {
    const pending = getPendingWorkouts();
    if (pending.length === 0) return;

    const user = await getFirebaseUser();
    if (!user) {
        console.warn('Пользователь не авторизован, синхронизация отложена');
        return;
    }

    let syncedIds = [];
    let failedIds = [];
    
    for (const workout of pending) {
        try {
            const result = await saveWorkoutToFirestore(user.uid, {
                title: workout.title,
                date: workout.date,
                durationSeconds: workout.durationSeconds,
                exercises: workout.exercises,
                xpEarned: workout.xpEarned
            });
            
            if (result.success) {
                const profileResult = await getUserProfile(user.uid);
                if (profileResult.success) {
                    const currentXp = profileResult.data.totalXp || 0;
                    await updateUserProfile(user.uid, { totalXp: currentXp + workout.xpEarned });
                }
                syncedIds.push(workout._localId);
            } else {
                failedIds.push(workout._localId);
                console.warn('Ошибка синхронизации тренировки:', result.error);
            }
        } catch (e) {
            failedIds.push(workout._localId);
            console.warn('Ошибка синхронизации, повторим позже:', e);
        }
    }

    if (syncedIds.length > 0) {
        let pendingAfter = getPendingWorkouts();
        pendingAfter = pendingAfter.filter(w => !syncedIds.includes(w._localId));
        savePendingWorkouts(pendingAfter);
        
        // ✅ ПОКАЗЫВАЕМ КОРОТКИЙ ТОСТ БЕЗ ALERT
        showToast(`✅ Синхронизировано ${syncedIds.length} тренировок`);
        console.log(`Синхронизировано ${syncedIds.length} тренировок`);
    }
    
    if (failedIds.length > 0) {
        // Оставляем failed тренировки в очереди
        console.log(`${failedIds.length} тренировок ожидают синхронизации`);
    }
}

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
// РАБОТА С XP
// ============================================================

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

function getNextLevel(xp) {
    for (let i = 0; i < levels.length; i++) {
        if (xp < levels[i].minXp) {
            return levels[i];
        }
    }
    return null;
}

function getXpProgress(xp) {
    const current = getCurrentLevel(xp);
    const next = getNextLevel(xp);
    if (!next) return 100;
    const total = next.minXp - current.minXp;
    const earned = xp - current.minXp;
    return Math.min(100, Math.round((earned / total) * 100));
}

// ============================================================
// РАСЧЁТ XP ЗА ТРЕНИРОВКУ
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
// FIREBASE
// ============================================================

function getFirebaseUser() {
    return new Promise((resolve) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        });
    });
}

// ============================================================
// ПРОФИЛЬ
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
// ТРЕНИРОВКИ В FIRESTORE
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
    
    if (page === 'profile') {
        loadProfile();
    }
    if (page === 'level-select' && params) {
        loadLevelSelect(params.category);
    }
    if (page === 'workout-detail' && params) {
        loadWorkoutDetail(params.category, params.level, params.isCustom, params.id);
    }
    if (page === 'workout-edit' && params) {
        loadEditPage(params.category, params.isCustom, params.id, params.level);
    }
    if (page === 'workouts') {
        // Применяем сохранённое состояние
        applyWorkoutsTab(activeWorkoutsTab);
        renderMyWorkouts();
    }
    if (page === 'exercise-list') {
        renderExerciseListPage();
    }
    if (page === 'stats') {
        // Применяем сохранённое состояние
        applyStatsTab(activeStatsTab);
        loadStats();
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
// УПРАВЛЕНИЕ ВКЛАДКАМИ ТРЕНИРОВОК
// ============================================================

function applyWorkoutsTab(tab) {
    document.querySelectorAll('#page-workouts .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    document.querySelectorAll('#page-workouts .tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('tab-' + tab).classList.add('active');
}

// Обработчик клика на вкладках тренировок
document.querySelectorAll('#page-workouts .tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tab = this.dataset.tab;
        activeWorkoutsTab = tab;  // ← СОХРАНЯЕМ СОСТОЯНИЕ
        applyWorkoutsTab(tab);
        if (tab === 'my') {
            renderMyWorkouts();
        }
    });
});

// ============================================================
// УПРАВЛЕНИЕ ВКЛАДКАМИ СТАТИСТИКИ
// ============================================================

function applyStatsTab(tab) {
    document.querySelectorAll('#page-stats .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    document.querySelectorAll('#page-stats .stats-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('stats-' + tab).classList.add('active');
}

// Обработчик клика на вкладках статистики
document.querySelectorAll('#page-stats .tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tab = this.dataset.tab;
        activeStatsTab = tab;  // ← СОХРАНЯЕМ СОСТОЯНИЕ
        applyStatsTab(tab);
        if (tab === 'world') {
            loadWorldLeaderboard();
        } else if (tab === 'personal') {
            loadStats();
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
            window.navigateTo('level-select', { category: name });
        }
    });
});

// ============================================================
// СТРАНИЦА ВЫБОРА УРОВНЯ
// ============================================================
function loadLevelSelect(category) {
    const titleEl = document.getElementById('levelSelectTitle');
    if (titleEl) {
        titleEl.textContent = 'ТРЕНИРОВКА - ' + category.toUpperCase();
    }

    const levels = ['1 LVL', '2 LVL', '3 LVL'];
    const levelDescs = ['Начинающий', 'Любитель', 'Профессионал'];
    
    const icons = {
        'Руки': 'bodybuilding',
        'Пресс': 'press',
        'Грудь': 'breast',
        'Спина': 'back',
        'Ноги': 'legs',
        'Плечи': 'shoulder'
    };
    const icon = icons[category] || 'bodybuilding';

    const container = document.getElementById('levelsContainer');
    container.innerHTML = levels.map((level, index) => {
        const exercises = exercisesData[category]?.[level] || [];
        const count = exercises.length;
        return `
            <div class="level-card" onclick="window.navigateTo('workout-detail', { category: '${category}', level: '${level}' })">
                <div class="level-icon">
                    <img src="images/${icon}.png">
                </div>
                <div class="level-info">
                    <h3>${category} ${level}</h3>
                    <p>${levelDescs[index]} · ${count} упражнений</p>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================================
// СТРАНИЦА ДЕТАЛЕЙ ТРЕНИРОВКИ
// ============================================================
let currentCategory = '';
let currentLevel = '1 LVL';
let currentIsCustom = false;
let currentWorkoutId = null;
let timerInterval = null;
let seconds = 0;
let isWorkoutActive = false;
let completedExercises = new Set();

const timerDisplay = document.getElementById('timerDisplay');
const actionButton = document.getElementById('actionButton');
const editWorkoutBtn = document.getElementById('editWorkoutBtn');

function loadWorkoutDetail(category, level, isCustom, id) {
    currentCategory = category;
    currentLevel = level || '1 LVL';
    currentIsCustom = isCustom || false;
    currentWorkoutId = id || null;
    completedExercises = new Set();
    
    let exercises = [];
    if (isCustom && id) {
        const workout = getWorkoutById(id);
        if (workout) {
            exercises = workout.exercises || [];
            currentCategory = workout.title;
        }
    } else {
        exercises = exercisesData[category]?.[currentLevel] || exercisesData[category]?.['1 LVL'] || [];
    }
    
    const titleEl = document.getElementById('workoutDetailTitle');
    if (titleEl) {
        titleEl.textContent = 'ТРЕНИРОВКА - ' + currentCategory.toUpperCase() + ' ' + (level || '1 LVL');
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
            const params = { category: currentCategory, isCustom: currentIsCustom, id: currentWorkoutId };
            if (!currentIsCustom && currentLevel) {
                params.level = currentLevel;
            }
            window.navigateTo('workout-edit', params);
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
        exercises = exercisesData[currentCategory]?.[currentLevel] || [];
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
    const fullXp = calculateWorkoutXp(exercises);
    const xpEarned = (fullXp / total) * completed;
    const date = new Date().toISOString();
    const user = await getFirebaseUser();
    
    // Собираем данные тренировки
    const workoutData = {
        title: currentCategory + ' ' + currentLevel,
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
    };

    // Пытаемся сохранить в Firestore
    let saveSuccess = false;
    if (user) {
        const result = await saveWorkoutToFirestore(user.uid, workoutData);
        if (result.success) {
            saveSuccess = true;
            // Обновляем профиль (добавляем XP)
            const profileResult = await getUserProfile(user.uid);
            if (profileResult.success) {
                const currentXp = profileResult.data.totalXp || 0;
                await updateUserProfile(user.uid, { totalXp: currentXp + xpEarned });
            }
        } else {
            // Если ошибка сохранения (возможно, нет интернета) — сохраняем в локальную очередь
            if (result.error && (
                result.error.includes('offline') || 
                result.error.includes('network') ||
                result.error.includes('unavailable')
            )) {
                // Добавляем в локальное хранилище с флагом pending
                workoutData._localId = Date.now() + '_' + Math.random().toString(36).slice(2, 6);
                addPendingWorkout(workoutData);
                alert('Тренировка сохранена локально. Она будет синхронизирована при восстановлении интернета.');
                saveSuccess = true; // считаем, что локально сохранили
            } else {
                alert('Не удалось сохранить тренировку. Попробуйте позже.');
            }
        }
    } else {
        // Пользователь не авторизован – сохраняем локально? Но так быть не должно
        alert('Вы не авторизованы. Тренировка не сохранена.');
    }

    // Показываем модальное окно с результатами
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
let editLevel = '1 LVL';

function loadEditPage(category, isCustom, id, level) {
    editCategory = category;
    editIsCustom = isCustom;
    editWorkoutId = id;
    editLevel = level || '1 LVL';
    
    const titleEl = document.getElementById('editTitle');
    if (titleEl) {
        if (id === 'new') {
            titleEl.textContent = 'СОЗДАНИЕ ТРЕНИРОВКИ';
        } else {
            titleEl.textContent = 'РЕДАКТИРОВАТЬ - ' + category.toUpperCase() + ' ' + editLevel;
        }
    }
       // Показываем кнопку сброса только для готовых тренировок (не личных)
    const resetBtn = document.getElementById('resetWorkoutBtn');
    if (resetBtn) {
        resetBtn.style.display = (isCustom || id === 'new') ? 'none' : 'block';
    }
    
    const nameInput = document.getElementById('editWorkoutName');
    if (nameInput) {
        if (isCustom && id && id !== 'new') {
            const workout = getWorkoutById(id);
            if (workout) {
                nameInput.value = workout.title || category;
            }
        } else if (!isCustom) {
            nameInput.value = category + ' ' + editLevel;
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
        // ЗАГРУЖАЕМ УПРАЖНЕНИЯ КОНКРЕТНОГО УРОВНЯ
        const targetLevel = editLevel || '1 LVL';
        editExercises = exercisesData[category]?.[targetLevel] ? JSON.parse(JSON.stringify(exercisesData[category][targetLevel])) : [];
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

// ============================================================
// ОТКРЫТИЕ МОДАЛЬНОГО ОКНА РЕДАКТИРОВАНИЯ УПРАЖНЕНИЯ
// ============================================================
window.openExerciseModal = function(index) {
    // Закрываем все модалки
    const addModal = document.getElementById('addExerciseModal');
    if (addModal) addModal.style.display = 'none';
    
    // Если индекс не передан или упражнение не существует — создаём новое
    if (index === undefined || index === null || index === editExercises.length) {
        // Создаём новое упражнение
        editingExerciseIndex = editExercises.length;
        editExercises.push({ name: 'Новое упражнение', sets: 3, reps: 12 });
        renderEditExercises();
        index = editingExerciseIndex;
    } else if (!editExercises[index]) {
        // Если упражнение с таким индексом не найдено — создаём новое
        editingExerciseIndex = editExercises.length;
        editExercises.push({ name: 'Новое упражнение', sets: 3, reps: 12 });
        renderEditExercises();
        index = editingExerciseIndex;
    } else {
        editingExerciseIndex = index;
    }
    
    const ex = editExercises[editingExerciseIndex];
    if (!ex) return;
    
    document.getElementById('modalExerciseName').value = ex.name || '';
    document.getElementById('modalExerciseSets').value = ex.sets || 3;
    document.getElementById('modalExerciseReps').value = ex.reps || 12;
    document.getElementById('exerciseModal').style.display = 'flex';
};

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
    // Если это новое созданное упражнение (имя по умолчанию) — удаляем его
    if (editingExerciseIndex !== null) {
        const ex = editExercises[editingExerciseIndex];
        // Проверяем, что это новое упражнение (созданное через "Создать своё")
        if (ex && ex.name === 'Новое упражнение') {
            editExercises.splice(editingExerciseIndex, 1);
            renderEditExercises();
        }
    }
    
    document.getElementById('exerciseModal').style.display = 'none';
    editingExerciseIndex = null;
});

document.getElementById('exerciseModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        // Если это новое созданное упражнение — удаляем его
        if (editingExerciseIndex !== null) {
            const ex = editExercises[editingExerciseIndex];
            if (ex && ex.name === 'Новое упражнение') {
                editExercises.splice(editingExerciseIndex, 1);
                renderEditExercises();
            }
        }
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
    
    if (!title) {
        alert('Введите название тренировки');
        return;
    }

    // Проверка уникальности названия для личных тренировок
    if (editIsCustom || editWorkoutId === 'new') {
        const allWorkouts = getMyWorkouts();
        const isDuplicate = allWorkouts.some(w => 
            w._id !== editWorkoutId && w.title.toLowerCase() === title.toLowerCase()
        );
        if (isDuplicate) {
            if (!confirm('Тренировка с таким названием уже существует. Сохранить с дубликатом?')) {
                return;
            }
        }
    }
    
    const selectedIcon = document.querySelector('.icon-option.active');
    const icon = selectedIcon ? selectedIcon.dataset.icon : 'bodybuilding';
    
    if (editWorkoutId === 'new') {
        // Создание личной тренировки
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
        // Обновление личной тренировки
        updateWorkout(editWorkoutId, { 
            title: title, 
            icon: icon,
            exercises: editExercises 
        });
        alert('Тренировка обновлена!');
    } else {
        const category = editCategory;
        if (exercisesData[category]) {
            const targetLevel = editLevel || '1 LVL';
            exercisesData[category][targetLevel] = JSON.parse(JSON.stringify(editExercises));
            saveExercisesData();
            alert('Тренировка обновлена!');
        }
    }
    
    window.navigateTo('workouts');
});

document.getElementById('cancelEditBtn')?.addEventListener('click', function() {
    window.navigateTo('workouts');
});

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
    
    container.innerHTML = workouts.map(w => {
        const workoutId = w._id;
        const title = w.title;
        return `
            <div class="category-card" onclick="window.navigateTo('workout-detail', { category: '${title}', isCustom: true, id: '${workoutId}' })">
                <div class="category-icon">
                    <img src="images/${w.icon || 'bodybuilding'}.png">
                </div>
                <div class="category-info">
                    <h3>${title}</h3>
                    <p>${w.exercises?.length || 0} упражнений</p>
                </div>
                <button class="workout-delete" onclick="event.stopPropagation(); deleteCustomWorkout('${workoutId}')">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
    }).join('');
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

    const muscleGroups = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги'];
    const container = document.getElementById('musclesStats');
    if (!container) return;
    
    const muscleCounts = muscleGroups.map(m => {
        return workouts.filter(w => w.title && w.title.includes(m)).length;
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
// КАЛЕНДАРЬ (из FIRESTORE)
// ============================================================
async function renderCalendar(month, year) {
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
    
    // ✅ ОЧИЩАЕМ СОДЕРЖИМОЕ, НЕ УДАЛЯЕМ КОНТЕЙНЕР
    container.innerHTML = '';

    // Добавляем пустые ячейки до первого дня
    for (let i = 1; i < startDayOfWeek; i++) {
        const empty = document.createElement('div');
        empty.classList.add('calendar-empty');
        container.appendChild(empty);
    }

    const today = new Date();
    
    const user = await getFirebaseUser();
    let workoutDays = [];
    if (user) {
        const result = await getUserWorkoutsFromFirestore(user.uid);
        if (result.success) {
            workoutDays = result.data.map(w => new Date(w.date));
        }
    }

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
// ПРОФИЛЬ
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
    
    const nameEl = document.getElementById('profileName');
    if (nameEl) nameEl.textContent = profile.displayName || 'Пользователь';
    
    const initialsEl = document.getElementById('profileInitials');
    if (initialsEl) initialsEl.textContent = (profile.displayName || 'П')[0].toUpperCase();
    
    const emailDisplayEl = document.getElementById('profileEmailDisplay');
    if (emailDisplayEl) emailDisplayEl.textContent = profile.email || user.email || '';
    
    const dateEl = document.getElementById('profileDate');
    if (dateEl && profile.createdAt) {
        const date = new Date(profile.createdAt);
        dateEl.textContent = date.toLocaleDateString('ru-RU', {
            day: '2-digit', month: 'long', year: 'numeric'
        });
    }
    
    const editNameEl = document.getElementById('editName');
    if (editNameEl) editNameEl.value = profile.displayName || '';
    
    const editEmailEl = document.getElementById('editEmail');
    if (editEmailEl) editEmailEl.value = profile.email || user.email || '';
    
    const nameErrorEl = document.getElementById('editNameError');
    if (nameErrorEl) nameErrorEl.textContent = '';
    
    const emailErrorEl = document.getElementById('editEmailError');
    if (emailErrorEl) emailErrorEl.textContent = '';
    
    const levelLvlEl = document.getElementById('levelLvl');
    if (levelLvlEl) levelLvlEl.textContent = currentLevel.id + ' LVL';
    
    const levelTitleEl = document.getElementById('levelTitle');
    if (levelTitleEl) levelTitleEl.textContent = currentLevel.name;
    
    const levelProgressTextEl = document.getElementById('levelProgressText');
    if (levelProgressTextEl) levelProgressTextEl.textContent = progressText;
    
    const levelFillEl = document.getElementById('levelFill');
    if (levelFillEl) levelFillEl.style.width = progress + '%';
    
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
        document.getElementById('editNameError').textContent = '';
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
        
        let hasError = false;
        if (!name) {
            nameError.textContent = 'Введите имя и фамилию';
            nameEl.classList.add('error');
            hasError = true;
        } else {
            nameError.textContent = '';
            nameEl.classList.remove('error');
        }
        
        if (hasError) return;
        
        const user = await getFirebaseUser();
        if (user) {
            await updateUserProfile(user.uid, { 
                displayName: name
            });
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
    
    // Сначала скрываем все страницы
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    if (user) {
        try {
            await user.reload();
        } catch (e) {}
        
        if (!user.emailVerified) {
            console.log('❌ Почта не подтверждена');
            bottomNav.style.display = 'none';
            document.getElementById('page-login').classList.add('active');
            return;
        }
        
        console.log('✅ Пользователь авторизован:', user.email);
        
        // СКРЫВАЕМ НАВИГАЦИЮ на странице загрузки
        bottomNav.style.display = 'none';
        
        // ПОКАЗЫВАЕМ СТРАНИЦУ ЗАГРУЗКИ
        document.getElementById('page-loading').classList.add('active');
        
        // Подгружаем данные в фоне
        await loadProfile();
        await loadStats();
        renderMyWorkouts();
        await renderCalendar(currentMonth, currentYear);
        
        if (typeof syncPendingWorkouts === 'function') {
            syncPendingWorkouts();
        }
        
    } else {
        console.log('❌ Пользователь не авторизован');
        bottomNav.style.display = 'none';
        
        // ПОКАЗЫВАЕМ СТРАНИЦУ ПРИВЕТСТВИЯ
        document.getElementById('page-hero').classList.add('active');
    }
});

// ============================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================
// Синхронизация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    console.log('SportApp загружен!');
    // При загрузке пробуем синхронизировать
    if (navigator.onLine) {
        syncPendingWorkouts();
    }
});

// Синхронизация при восстановлении сети
window.addEventListener('online', function() {
    console.log('Интернет появился, синхронизируем...');
    syncPendingWorkouts();
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
// РЕГИСТРАЦИЯ (с подтверждением почты)
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
        
        // Валидация
        let hasError = false;
        if (!name) {
            nameInput.classList.add('error');
            nameError.textContent = 'Введите имя';
            hasError = true;
        } else {
            nameInput.classList.remove('error');
            nameError.textContent = '';
        }
        
        if (!email) {
            emailInput.classList.add('error');
            emailError.textContent = 'Введите почту';
            hasError = true;
        } else {
            emailInput.classList.remove('error');
            emailError.textContent = '';
        }
        
        if (!password) {
            passwordInput.classList.add('error');
            passwordError.textContent = 'Введите пароль';
            hasError = true;
        } else if (password.length < 6) {
            passwordInput.classList.add('error');
            passwordError.textContent = 'Пароль минимум 6 символов';
            hasError = true;
        } else {
            passwordInput.classList.remove('error');
            passwordError.textContent = '';
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
            
            // ОТПРАВЛЯЕМ ПИСЬМО
            await result.user.sendEmailVerification();
            
            // ПОКАЗЫВАЕМ СООБЩЕНИЕ
            alert('Подтвердите почту, письмо отправлено на ' + email);
            
            // НЕ ВЫХОДИМ — onAuthStateChanged покажет страницу входа
            
        } catch (error) {
            let message = 'Ошибка регистрации';
            if (error.code === 'auth/email-already-in-use') {
                message = 'Почта уже используется';
                emailInput.classList.add('error');
                emailError.textContent = message;
            } else if (error.code === 'auth/weak-password') {
                message = 'Пароль минимум 6 символов';
                passwordInput.classList.add('error');
                passwordError.textContent = message;
            } else if (error.code === 'auth/invalid-email') {
                message = 'Неверный формат почты';
                emailInput.classList.add('error');
                emailError.textContent = message;
            } else if (error.code === 'auth/network-request-failed') {
                message = 'Проверьте интернет-соединение';
                passwordInput.classList.add('error');
                passwordError.textContent = message;
            } else {
                alert('Ошибка ' + error.message);
            }
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
// ВХОД (Email + пароль) — С ПРИНУДИТЕЛЬНЫМ ОБНОВЛЕНИЕМ
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
            const user = result.user;
            
            // ✅ ПРИНУДИТЕЛЬНО ОБНОВЛЯЕМ ДАННЫЕ ПОЛЬЗОВАТЕЛЯ
            await user.reload();
            
            if (!user.emailVerified) {
                alert('Подтвердите почту, письмо отправлено на ' + email);
                // Остаёмся на странице входа
                return;
            }
            
            console.log('✅ Вход выполнен:', user.email);
            // Явно показываем меню и переходим в приложение
            document.getElementById('bottomNav').style.display = 'block';
            window.navigateTo('workouts');
            
        } catch (error) {
            passwordInput.classList.add('error');
            let message = 'Неверный email или пароль';
            if (error.code === 'auth/user-not-found') {
                message = 'Пользователь не найден';
            } else if (error.code === 'auth/wrong-password') {
                message = 'Неверный пароль';
            } else if (error.code === 'auth/invalid-email') {
                message = 'Неверный формат email';
            } else if (error.code === 'auth/too-many-requests') {
                message = 'Слишком много попыток входа. Подождите несколько минут.';
            }
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
        // onAuthStateChanged покажет страницу приветствия
    }
}

// ============================================================
// ПОВТОРНАЯ ОТПРАВКА ПИСЬМА (ТОЛЬКО ПО КНОПКЕ)
// ============================================================
async function resendVerification() {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert('Вы не авторизованы');
        return;
    }
    if (user.emailVerified) {
        alert('Почта уже подтверждена');
        return;
    }
    try {
        await user.sendEmailVerification();
        alert('Письмо отправлено на ' + user.email);
    } catch (error) {
        if (error.code === 'auth/too-many-requests') {
            alert('Слишком много попыток. Подождите несколько минут и попробуйте снова.');
        } else {
            alert('Ошибка: ' + error.message);
        }
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
            resultsDiv.innerHTML = '';
            
            if (!query) {
                return;
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
            const level = getCurrentLevel(f.totalXp || 0).id;
            return `
                <div class="friend-item">
                    <div class="friend-avatar">${initial}</div>
                    <div class="friend-info">
                        <strong>${f.displayName || 'Пользователь'}</strong>
                        <span>Уровень ${level} · ${(f.totalXp || 0).toFixed(1)} XP</span>
                    </div>
                    <button class="friend-delete-btn" onclick="removeFriend('${f.id}')" title="Удалить друга">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
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

window.removeFriend = async function(friendId) {
    if (!confirm('Удалить этого друга?')) return;
    
    const user = await getFirebaseUser();
    if (!user) {
        alert('Пользователь не авторизован');
        return;
    }
    
    try {
        // Удаляем друга из своего списка
        const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
        const currentFriends = userDoc.data()?.friends || [];
        const updatedFriends = currentFriends.filter(id => id !== friendId);
        await firebase.firestore().collection('users').doc(user.uid).update({
            friends: updatedFriends
        });
        
        // Удаляем себя из списка друга
        const friendDoc = await firebase.firestore().collection('users').doc(friendId).get();
        const friendFriends = friendDoc.data()?.friends || [];
        const updatedFriendFriends = friendFriends.filter(id => id !== user.uid);
        await firebase.firestore().collection('users').doc(friendId).update({
            friends: updatedFriendFriends
        });
        
        await renderFriendsInProfile();
    } catch (error) {
        console.error('Ошибка удаления друга:', error);
        alert('Ошибка при удалении друга');
    }
};

// ============================================================
// СБРОС ТРЕНИРОВКИ К ИСХОДНОМУ СОСТОЯНИЮ
// ============================================================
function resetWorkout() {
    if (!editCategory || editIsCustom) {
        alert('Эта функция только для готовых тренировок');
        return;
    }

    // ✅ НОВОЕ СООБЩЕНИЕ С КНОПКАМИ "Да" и "Нет"
    if (!confirm('Сбросить тренировку?')) {
        return;
    }

    const category = editCategory;
    const level = editLevel || '1 LVL';

    // Восстанавливаем из исходных данных
    if (exercisesDataDefault[category] && exercisesDataDefault[category][level]) {
        exercisesData[category][level] = JSON.parse(JSON.stringify(exercisesDataDefault[category][level]));
        saveExercisesData();
        editExercises = JSON.parse(JSON.stringify(exercisesData[category][level]));
        renderEditExercises();
    } else {
        alert('Не удалось найти исходные данные для этой тренировки');
    }
}

// ============================================================
// ВСЕ УПРАЖНЕНИЯ ДЛЯ СПИСКА
// ============================================================
function getAllExercises() {
    const all = [];
    for (const category in exercisesData) {
        for (const level in exercisesData[category]) {
            exercisesData[category][level].forEach(ex => {
                if (!all.some(e => e.name === ex.name && e.category === category)) {
                    all.push({
                        ...ex,
                        category: category,
                        level: level
                    });
                }
            });
        }
    }
    return all;
}

let allExercisesList = [];
let currentCategoryFilter = 'all';
let currentSearchQuery = '';

// ============================================================
// ОТКРЫТИЕ СПИСКА УПРАЖНЕНИЙ (НОВАЯ СТРАНИЦА)
// ============================================================
function openExerciseList() {
    closeAddExerciseModal();
    allExercisesList = getAllExercises();
    currentCategoryFilter = 'all';
    currentSearchQuery = '';
    document.getElementById('exerciseSearchInput').value = '';
    window.navigateTo('exercise-list');
}

// ============================================================
// РЕНДЕР СТРАНИЦЫ СПИСКА УПРАЖНЕНИЙ
// ============================================================
function renderExerciseListPage() {
    // Устанавливаем фильтры
    document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(el => {
        el.classList.toggle('active', el.dataset.category === currentCategoryFilter);
    });
    
    // Обработчики для фильтров
    document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(el => {
        el.onclick = function() {
            document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(e => e.classList.remove('active'));
            this.classList.add('active');
            currentCategoryFilter = this.dataset.category;
            renderExerciseListPageContent();
        };
    });
    
    // Поиск
    document.getElementById('exerciseSearchInput').oninput = function() {
        currentSearchQuery = this.value.trim().toLowerCase();
        renderExerciseListPageContent();
    };
    
    renderExerciseListPageContent();
}

function renderExerciseListPageContent() {
    const container = document.getElementById('exerciseListContainer');
    const searchQuery = currentSearchQuery.toLowerCase();
    
    let filtered = allExercisesList;
    
    if (currentCategoryFilter !== 'all') {
        filtered = filtered.filter(ex => ex.category === currentCategoryFilter);
    }
    
    if (searchQuery) {
        filtered = filtered.filter(ex => ex.name.toLowerCase().includes(searchQuery));
    }
    
    filtered.sort((a, b) => a.name.localeCompare(b.name));
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="color:var(--slate);text-align:center;padding:2rem 0;">Упражнения не найдены</p>';
        return;
    }
    
    const icons = {
        'Руки': 'bodybuilding',
        'Пресс': 'press',
        'Грудь': 'breast',
        'Спина': 'back',
        'Ноги': 'legs',
        'Плечи': 'shoulder'
    };
    
    container.innerHTML = filtered.map(ex => {
        const icon = icons[ex.category] || 'bodybuilding';
        return `
            <div class="level-card" onclick="addExerciseFromList('${ex.name}', ${ex.sets}, ${ex.reps})" style="cursor:pointer; margin-bottom:0.8rem;">
                <div class="level-icon" style="width:44px;height:44px;min-width:44px;">
                    <img src="images/${icon}.png" style="width:28px;height:28px;">
                </div>
                <div class="level-info">
                    <h3>${ex.name}</h3>
                    <p>${ex.sets} подходов × ${ex.reps} повторений</p>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================================
// МОДАЛЬНОЕ ОКНО ВЫБОРА ДЕЙСТВИЯ
// ============================================================
function openAddExerciseModal() {
    document.getElementById('addExerciseModal').style.display = 'flex';
}

function closeAddExerciseModal() {
    document.getElementById('addExerciseModal').style.display = 'none';
}

// ============================================================
// ДОБАВЛЕНИЕ УПРАЖНЕНИЯ ИЗ СПИСКА
// ============================================================
function addExerciseFromList(name, sets, reps) {
    editExercises.push({ 
        name: name, 
        sets: parseInt(sets) || 3, 
        reps: parseInt(reps) || 12 
    });
    // Возвращаемся на страницу редактирования
    window.navigateTo('workout-edit', { 
        category: editCategory, 
        isCustom: editIsCustom, 
        id: editWorkoutId, 
        level: editLevel 
    });
    renderEditExercises();
    const resetBtn = document.getElementById('resetWorkoutBtn');
    if (resetBtn) {
        resetBtn.style.display = (editIsCustom || editWorkoutId === 'new') ? 'none' : 'block';
    }
}

// ============================================================
// МОДАЛЬНОЕ ОКНО "НЕТ ИНТЕРНЕТА"
// ============================================================

function showOfflineModal() {
    const modal = document.getElementById('offlineModal');
    if (modal) modal.style.display = 'flex';
}

function closeOfflineModal() {
    const modal = document.getElementById('offlineModal');
    if (modal) modal.style.display = 'none';
    
    // ✅ После нажатия "Понятно" на странице загрузки → переходим в приложение
    const loadingPage = document.getElementById('page-loading');
    if (loadingPage && loadingPage.classList.contains('active')) {
        // Просто переходим в приложение (enterApp() сам проверит интернет)
        enterApp();
    }
}

// Показываем при потере соединения (ТОЛЬКО ВНУТРИ ПРИЛОЖЕНИЯ)
window.addEventListener('offline', function() {
    // Проверяем, что мы НЕ на странице загрузки
    const loadingPage = document.getElementById('page-loading');
    if (loadingPage && loadingPage.classList.contains('active')) {
        return; // на странице загрузки не показываем
    }
    
    // Проверяем, что мы в приложении (на тренировках, статистике или профиле)
    const workoutsPage = document.getElementById('page-workouts');
    const statsPage = document.getElementById('page-stats');
    const profilePage = document.getElementById('page-profile');
    
    const isInApp = (workoutsPage && workoutsPage.classList.contains('active')) ||
                    (statsPage && statsPage.classList.contains('active')) ||
                    (profilePage && profilePage.classList.contains('active'));
    
    if (!isInApp) return; // не в приложении → выходим
    
    // Если модалку ещё не показывали → показываем
    if (!isOfflineModalShown) {
        showOfflineModal();
        isOfflineModalShown = true; // запоминаем, что показали
    }
});

// Закрываем при восстановлении и сбрасываем флаг
window.addEventListener('online', function() {
    closeOfflineModal();
    isOfflineModalShown = false; // сбрасываем флаг
    
    if (typeof syncPendingWorkouts === 'function') {
        syncPendingWorkouts();
    }
});

// ============================================================
// ВХОД В ПРИЛОЖЕНИЕ СО СТРАНИЦЫ ЗАГРУЗКИ
// ============================================================
function enterApp() {
    // Проверяем интернет (ВСЕГДА при нажатии)
    if (!navigator.onLine) {
        showOfflineModal(); // ← показываем модалку
        return; // НЕ переходим на тренировки, пока не нажмут "Понятно"
    }
    
    // Если интернет есть → переходим в приложение
    document.getElementById('bottomNav').style.display = 'block';
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-workouts').classList.add('active');
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === 'workouts');
    });
    
    loadProfile();
    loadStats();
    renderMyWorkouts();
    renderCalendar(currentMonth, currentYear);
    
    if (typeof syncPendingWorkouts === 'function') {
        syncPendingWorkouts();
    }
}

// ============================================================
// СОСТОЯНИЕ ВКЛАДОК
// ============================================================
let activeWorkoutsTab = 'ready';  // 'ready' или 'my'
let activeStatsTab = 'personal';  // 'personal' или 'world'

// ============================================================
// СТАТИСТИКА - ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
// ============================================================

function switchStatsTab(tab) {
    activeStatsTab = tab;  // ← СОХРАНЯЕМ
    applyStatsTab(tab);
    if (tab === 'world') {
        loadWorldLeaderboard();
    } else if (tab === 'personal') {
        loadStats();
    }
}

// ============================================================
// ВКЛАДКИ ТРЕНИРОВОК
// ============================================================
document.querySelectorAll('#page-workouts .tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('#page-workouts .tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('#page-workouts .tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById('tab-' + this.dataset.tab).classList.add('active');
        if (this.dataset.tab === 'my') {
            renderMyWorkouts();
        }
    });
});

// ============================================================
// МИРОВОЙ РЕЙТИНГ
// ============================================================

async function loadWorldLeaderboard() {
    const container = document.getElementById('worldLeaderboard');
    const countEl = document.getElementById('worldStatsCount');
    
    if (!container) return;
    
    // Показываем загрузку
    container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Загрузка рейтинга...</div>';
    
    try {
        const user = await getFirebaseUser();
        if (!user) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Авторизуйтесь, чтобы увидеть рейтинг</div>';
            if (countEl) countEl.textContent = '—';
            return;
        }
        
        // Запрос топ-30 пользователей по XP
        const snapshot = await firebase.firestore()
            .collection('users')
            .orderBy('totalXp', 'desc')
            .limit(30)
            .get();
        
        const users = [];
        snapshot.forEach(doc => {
            users.push({ id: doc.id, ...doc.data() });
        });
        
        if (users.length === 0) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Пока нет пользователей</div>';
            if (countEl) countEl.textContent = '0';
            return;
        }
        
        // Рендерим рейтинг
        container.innerHTML = users.map((userData, index) => {
            const position = index + 1;
            const level = getCurrentLevel(userData.totalXp || 0);
            const date = userData.createdAt ? new Date(userData.createdAt).toLocaleDateString('ru-RU') : '—';
            
            // Проверяем, текущий ли это пользователь
            const isCurrentUser = userData.id === user.uid;
            
            return `
                <div class="leaderboard-item ${isCurrentUser ? 'current-user' : ''}">
                    <div class="leaderboard-position">${position}</div>
                    <div class="leaderboard-info">
                        <div class="leaderboard-name">${userData.displayName || 'Пользователь'}</div>
                        <div class="leaderboard-details">
                            <span>Уровень ${level.id}</span>
                            <span>·</span>
                            <span><i class="fa-regular fa-calendar"></i> ${date}</span>
                        </div>
                    </div>
                    <div class="leaderboard-xp">${(userData.totalXp || 0).toFixed(1)} XP</div>
                </div>
            `;
        }).join('');
        
    } catch (error) {
        console.error('Ошибка загрузки рейтинга:', error);
        container.innerHTML = '<div style="text-align:center;color:#EF4444;padding:2rem 0;">Ошибка загрузки. Проверьте интернет.</div>';
        if (countEl) countEl.textContent = 'Ошибка';
    }
}

// ============================================================
// PULL-TO-REFRESH
// ============================================================

let pullStartY = 0;
let pullOffset = 0;
let isPulling = false;
let pullRefreshEnabled = true;

function initPullToRefresh() {
    const container = document.querySelector('.dashboard-container');
    if (!container) return;
    
    container.addEventListener('touchstart', function(e) {
        // Проверяем, что мы вверху страницы
        if (window.scrollY === 0) {
            pullStartY = e.touches[0].clientY;
            isPulling = true;
        }
    }, { passive: true });
    
    container.addEventListener('touchmove', function(e) {
        if (!isPulling) return;
        
        const currentY = e.touches[0].clientY;
        pullOffset = currentY - pullStartY;
        
        // Если тянем вниз больше 50px
        if (pullOffset > 50 && pullRefreshEnabled) {
            e.preventDefault();
            showPullIndicator();
        }
    }, { passive: false });
    
    container.addEventListener('touchend', function(e) {
        if (!isPulling) return;
        
        if (pullOffset > 100 && pullRefreshEnabled) {
            // Выполняем обновление
            performRefresh();
        } else {
            hidePullIndicator();
        }
        
        isPulling = false;
        pullOffset = 0;
    }, { passive: true });
}

function showPullIndicator() {
    const indicator = document.getElementById('pullToRefresh');
    if (indicator) {
        indicator.style.display = 'block';
    }
}

function hidePullIndicator() {
    const indicator = document.getElementById('pullToRefresh');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

async function performRefresh() {
    pullRefreshEnabled = false;
    showPullIndicator();
    
    try {
        // Обновляем все данные
        const user = await getFirebaseUser();
        if (user) {
            await loadProfile();
            await loadStats();
            renderMyWorkouts();
            await renderCalendar(currentMonth, currentYear);
            
            // Если активна вкладка "Мировая" — обновляем рейтинг
            const worldTab = document.getElementById('stats-world');
            if (worldTab && worldTab.classList.contains('active')) {
                await loadWorldLeaderboard();
            }
            
            // Синхронизируем отложенные тренировки
            if (typeof syncPendingWorkouts === 'function') {
                await syncPendingWorkouts();
            }
            
            // Показываем уведомление об успехе
            showToast('✅ Данные обновлены');
        }
    } catch (error) {
        console.error('Ошибка обновления:', error);
        showToast('❌ Ошибка обновления');
    } finally {
        hidePullIndicator();
        pullRefreshEnabled = true;
    }
}

// Инициализируем Pull-to-Refresh после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    initPullToRefresh();
});

// ============================================================
// ТОСТ-УВЕДОМЛЕНИЯ
// ============================================================

function showToast(message, duration = 3000) {
    // Удаляем старый тост, если есть
    const oldToast = document.getElementById('toast');
    if (oldToast) oldToast.remove();
    
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--dark);
        color: white;
        padding: 0.8rem 1.5rem;
        border-radius: 12px;
        font-size: 0.9rem;
        font-weight: 500;
        z-index: 3000;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        max-width: 90%;
        text-align: center;
        animation: slideUp 0.3s ease-out;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Показываем с анимацией
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
    });
    
    // Автоматически скрываем
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
}

// ============================================================
// PWA - УСТАНОВКА НА ГЛАВНЫЙ ЭКРАН
// ============================================================

let deferredPrompt = null;

// Функция для проверки, установлено ли приложение
function isAppInstalled() {
    // Проверяем через localStorage, если пользователь уже устанавливал
    const installed = localStorage.getItem('appInstalled');
    if (installed === 'true') return true;
    
    // Проверяем через window.navigator (если доступно)
    if (window.navigator && window.navigator.standalone) {
        return true;
    }
    
    return false;
}

// Показываем баннер принудительно (при загрузке приложения)
function showInstallBannerIfNeeded() {
    // Если приложение уже установлено — не показываем
    if (isAppInstalled()) {
        console.log('✅ Приложение уже установлено');
        return;
    }
    
    // Если пользователь уже закрыл баннер — не показываем
    const bannerHidden = localStorage.getItem('installBannerHidden');
    if (bannerHidden === 'true') {
        console.log('ℹ️ Баннер скрыт пользователем');
        return;
    }
    
    // Проверяем, поддерживается ли установка
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
        console.log('✅ Приложение уже запущено в режиме standalone');
        return;
    }
    
    // Показываем баннер
    console.log('📱 Показываем баннер установки');
    showInstallBanner();
}

// Показываем баннер
function showInstallBanner() {
    const banner = document.getElementById('installBanner');
    if (banner) {
        banner.style.display = 'block';
    }
}

// Закрываем баннер
function closeInstallBanner() {
    const banner = document.getElementById('installBanner');
    if (banner) {
        banner.style.display = 'none';
    }
    // Запоминаем, что пользователь закрыл баннер
    localStorage.setItem('installBannerHidden', 'true');
}

// Установка приложения
async function installApp() {
    if (!deferredPrompt) {
        // Если нет deferredPrompt, показываем инструкцию
        showToast('📱 Нажмите "Добавить на экран" в меню браузера', 'info', 4000);
        return;
    }
    
    try {
        const result = await deferredPrompt.prompt();
        
        if (result.outcome === 'accepted') {
            localStorage.setItem('appInstalled', 'true');
            showToast('✅ Приложение установлено!', 'success');
            closeInstallBanner();
        } else {
            showToast('❌ Установка отменена', 'error');
        }
        
        deferredPrompt = null;
    } catch (error) {
        console.error('Ошибка установки:', error);
        showToast('❌ Ошибка установки', 'error');
    }
}

// Слушаем событие beforeinstallprompt (браузерное)
window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredPrompt = e;
    console.log('✅ Событие beforeinstallprompt получено');
    
    // Показываем баннер, если его ещё не скрывали
    const bannerHidden = localStorage.getItem('installBannerHidden');
    if (!bannerHidden && !isAppInstalled()) {
        showInstallBanner();
    }
});

// Проверяем, установлено ли приложение
window.addEventListener('appinstalled', function() {
    localStorage.setItem('appInstalled', 'true');
    showToast('✅ Приложение установлено!', 'success');
    closeInstallBanner();
    deferredPrompt = null;
});

// Вызываем при загрузке приложения
document.addEventListener('DOMContentLoaded', function() {
    // Показываем баннер через 3 секунды после загрузки
    setTimeout(() => {
        showInstallBannerIfNeeded();
    }, 3000);
});