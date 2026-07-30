// ============================================================
// ДАННЫЕ УПРАЖНЕНИЙ
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
    ],
};

// ============================================================
// XP ЗА ТРЕНИРОВКИ
// ============================================================
const xpData = {
    'Руки': 80,
    'Пресс': 100,
    'Грудь': 100,
    'Спина': 120,
    'Ноги': 120
};

// ============================================================
// УРОВНИ
// ============================================================
const levels = [
    { id: 1, name: 'НАЧИНАЮЩИЙ', minXp: 0 },
    { id: 2, name: 'ЛЮБИТЕЛЬ', minXp: 100 },
    { id: 3, name: 'ПРОДВИНУТЫЙ', minXp: 200 },
    { id: 4, name: 'ЭКСПЕРТ', minXp: 300 },
    { id: 5, name: 'ПРОФЕССИОНАЛ', minXp: 500 }
];

// ============================================================
// РАБОТА С XP В LOCALSTORAGE
// ============================================================
function getTotalXp() {
    return parseInt(localStorage.getItem('totalXp')) || 0;
}

function setTotalXp(xp) {
    localStorage.setItem('totalXp', xp.toString());
}

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
        loadWorkoutDetail(params.category);
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
// КАТЕГОРИИ ТРЕНИРОВОК
// ============================================================
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const name = this.querySelector('.category-info h3')?.textContent;
        if (name) {
            window.navigateTo('workout-detail', { category: name });
        }
    });
});

// ============================================================
// СТРАНИЦА ДЕТАЛЕЙ ТРЕНИРОВКИ
// ============================================================
let currentCategory = '';
let timerInterval = null;
let seconds = 0;
let isWorkoutActive = false;
let completedExercises = new Set();

const timerDisplay = document.getElementById('timerDisplay');
const actionButton = document.getElementById('actionButton');

function loadWorkoutDetail(category) {
    if (!category) return;
    
    currentCategory = category;
    completedExercises = new Set();
    
    const titleEl = document.getElementById('workoutDetailTitle');
    if (titleEl) {
        titleEl.textContent = 'ТРЕНИРОВКА - ' + category.toUpperCase();
    }

    const exercises = exercisesData[category] || exercisesData['Руки'];
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
    
    // Прячем цифры, показываем квадратики
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
// МОДАЛЬНОЕ ОКНО
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
                    <div class="modal-stat-value">+${xpEarned} XP</div>
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
// ЗАВЕРШЕНИЕ ТРЕНИРОВКИ
// ============================================================
function finishWorkout() {
    const totalTime = stopTimer(); // totalTime в секундах (точное время)
    const exercises = exercisesData[currentCategory] || exercisesData['Руки'];
    const total = exercises.length;
    const completed = completedExercises.size;
    
    const maxXp = xpData[currentCategory] || 80;
    const xpEarned = Math.round((completed / total) * maxXp);
    
    const date = new Date().toISOString();
    const newWorkout = {
        _id: Date.now().toString(),
        title: currentCategory,
        notes: '',
        durationSeconds: totalTime, // сохраняем точное время в секундах
        duration: Math.floor(totalTime / 60), // для отображения в минутах
        date: date,
        exercises: exercises.map((ex, i) => ({
            name: ex.name,
            sets: parseInt(ex.sets) || 3,
            reps: parseInt(ex.reps) || 10,
            weight: 0,
            order: i,
            completed: completedExercises.has(i)
        }))
    };

    const workouts = JSON.parse(localStorage.getItem('myWorkouts') || '[]');
    workouts.push(newWorkout);
    localStorage.setItem('myWorkouts', JSON.stringify(workouts));
    
    const currentXp = getTotalXp();
    setTotalXp(currentXp + xpEarned);
    
    showModal(currentCategory, totalTime, completed, total, xpEarned);
    
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
// СТАТИСТИКА
// ============================================================
function getWorkouts() {
    return JSON.parse(localStorage.getItem('myWorkouts') || '[]');
}

function loadStats() {
    const workouts = getWorkouts();
    const total = workouts.length;
    
    // Считаем общее время БЕЗ округления (суммируем секунды и переводим в минуты)
    const totalSeconds = workouts.reduce((sum, w) => sum + (w.durationSeconds || 0), 0);
    const totalMinutes = Math.floor(totalSeconds / 60);
    
    // Считаем ТОЛЬКО выполненные упражнения (с галочкой)
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

    // ============================================================
    // ИСТОРИЯ ТРЕНИРОВОК - обновленный блок
    // ============================================================
const historyContainer = document.getElementById('workoutHistory');
if (historyContainer) {
    if (workouts.length === 0) {
        historyContainer.innerHTML = '<p style="color:var(--slate);text-align:center;">Нет выполненных тренировок</p>';
    } else {
        historyContainer.innerHTML = workouts.slice().reverse().map(w => {
            const totalEx = w.exercises?.length || 0;
            const completedEx = w.exercises?.filter(e => e.completed === true).length || 0;
            const maxXp = xpData[w.title] || 80;
            const xpEarned = Math.round((completedEx / totalEx) * maxXp) || 0;
            const minutes = Math.floor((w.durationSeconds || 0) / 60);
            
            return `
                <div>
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <strong>${w.title}</strong>
                        <span style="color:var(--slate);font-size:0.9rem;">${new Date(w.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div style="color:var(--slate);font-size:0.9rem;margin-top:0.3rem;">
                        ${minutes} мин · ${completedEx}/${totalEx} упражнений · ${xpEarned} XP
                    </div>
                </div>
            `;
        }).join('');
    }
}
    
    // ============================================================
    // ИСТОРИЯ ПРОГРЕССА - ВЫЗОВ ФУНКЦИИ
    // ============================================================
    loadProgressHistory();
}

// ============================================================
// ИСТОРИЯ ПРОГРЕССА - ФУНКЦИЯ (вне loadStats)
// ============================================================
function loadProgressHistory() {
    const container = document.getElementById('progressHistory');
    if (!container) return;
    
    const workouts = getWorkouts();
    if (workouts.length === 0) {
        container.innerHTML = '<p style="color:var(--slate);text-align:center;">Нет данных о прогрессе</p>';
        return;
    }
    
    const weeksMap = new Map();
    workouts.forEach(w => {
        const weekId = getWeekId(w.date);
        if (!weeksMap.has(weekId)) {
            weeksMap.set(weekId, []);
        }
        weeksMap.get(weekId).push(w);
    });
    
    const sortedWeeks = Array.from(weeksMap.keys()).sort((a, b) => b - a);
    
    let html = '';
    sortedWeeks.forEach(weekId => {
        const weekWorkouts = weeksMap.get(weekId);
        const weekXp = getWeekXp(weekWorkouts, weekId);
        const level = getWeekLevel(weekXp);
        const workoutCount = weekWorkouts.length;
        
        const { monday, sunday } = getWeekRange(new Date(weekId));
        const dateRange = `${formatDate(monday)} - ${formatDate(sunday)}`;
        
        html += `
            <div class="progress-history-item">
                <div class="progress-history-header">
                    <span class="progress-history-level">${level.name}</span>
                    <span class="progress-history-date">${dateRange}</span>
                </div>
                <div class="progress-history-stats">
                    <span class="progress-history-lvl">${level.id} LVL · ${weekXp} XP · ${workoutCount} тренировок</span>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ============================================================
// КАЛЕНДАРЬ
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
    const workoutDays = getWorkouts().map(w => new Date(w.date));

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
function getUserProfile() {
    return {
        name: localStorage.getItem('userName') || 'Пользователь',
        createdAt: localStorage.getItem('userCreatedAt') || new Date().toISOString()
    };
}

function loadProfile() {
    const user = getUserProfile();
    const allWorkouts = getWorkouts();
    const currentWeekId = getWeekId(new Date());
    
    // Считаем XP только за текущую неделю
    const weekXp = getWeekXp(allWorkouts, currentWeekId);
    
    // Для прогресс-бара используем XP за неделю
    const xp = weekXp;
    const currentLevel = getCurrentLevel(xp);
    const progress = getXpProgress(xp);
    const nextLevel = getNextLevel(xp);
    
    let progressText = '';
    if (nextLevel) {
        progressText = `${xp}/${nextLevel.minXp} XP`;
    } else {
        progressText = `${xp}+ XP`;
    }
    
    const nameEl = document.getElementById('profileName');
    const initialsEl = document.getElementById('profileInitials');
    const dateEl = document.getElementById('profileDate');
    const editNameEl = document.getElementById('editName');
    
    const levelLvlEl = document.getElementById('levelLvl');
    const levelTitleEl = document.getElementById('levelTitle');
    const levelProgressTextEl = document.getElementById('levelProgressText');
    const levelFillEl = document.getElementById('levelFill');
    
    if (nameEl) nameEl.textContent = user.name;
    if (initialsEl) initialsEl.textContent = user.name.charAt(0).toUpperCase();
    if (dateEl && user.createdAt) {
        const date = new Date(user.createdAt);
        dateEl.textContent = date.toLocaleDateString('ru-RU', {
            day: '2-digit', month: 'long', year: 'numeric'
        });
    }
    if (editNameEl) editNameEl.value = user.name;
    
    if (levelLvlEl) levelLvlEl.textContent = currentLevel.id + ' LVL';
    if (levelTitleEl) levelTitleEl.textContent = currentLevel.name;
    if (levelProgressTextEl) levelProgressTextEl.textContent = progressText;
    if (levelFillEl) levelFillEl.style.width = progress + '%';
}

// ============================================================
// ПРОФИЛЬ - РЕДАКТИРОВАНИЕ
// ============================================================
const editBtn = document.getElementById('editProfileBtn');
const editForm = document.getElementById('editForm');
const cancelBtn = document.getElementById('cancelEditBtn');
const saveBtn = document.getElementById('saveProfileBtn');

if (editBtn) {
    editBtn.addEventListener('click', () => {
        if (editForm) editForm.style.display = 'block';
        editBtn.style.display = 'none';
    });
}

if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
        if (editForm) editForm.style.display = 'none';
        if (editBtn) editBtn.style.display = 'block';
    });
}

if (saveBtn) {
    saveBtn.addEventListener('click', () => {
        const nameEl = document.getElementById('editName');
        const name = nameEl ? nameEl.value.trim() : '';
        
        if (!name) { 
            alert('Введите имя');
            return; 
        }
        localStorage.setItem('userName', name);
        if (!localStorage.getItem('userCreatedAt')) {
            localStorage.setItem('userCreatedAt', new Date().toISOString());
        }
        loadProfile();
        if (editForm) editForm.style.display = 'none';
        if (editBtn) editBtn.style.display = 'block';
    });
}

// ============================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    loadStats();
    renderCalendar(currentMonth, currentYear);
    loadProfile();
    console.log('SportApp загружен!');
});

// ============================================================
// РАБОТА С НЕДЕЛЯМИ
// ============================================================
function getWeekId(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d.setDate(diff));
    monday.setHours(0, 0, 0, 0);
    return monday.getTime();
}

function getWeekRange(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d.setDate(diff));
    monday.setHours(0, 0, 0, 0);
    
    const sunday = new Date(monday);
    sunday.setDate(sunday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);
    
    return { monday, sunday };
}

function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

function getWeekXp(workouts, weekId) {
    return workouts
        .filter(w => getWeekId(w.date) === weekId)
        .reduce((sum, w) => {
            const totalEx = w.exercises?.length || 0;
            const completedEx = w.exercises?.filter(e => e.completed === true).length || 0;
            const maxXp = xpData[w.title] || 80;
            const xpEarned = Math.round((completedEx / totalEx) * maxXp) || 0;
            return sum + xpEarned;
        }, 0);
}

function getWeekLevel(xp) {
    return getCurrentLevel(xp);
}