// ===================ОСНОВНЫЕ ДАННЫЕ ===================
const exercisesData = {
    // ===================СИЛОВЫЕ ===================
    'Силовые': {
        'Руки': {
            '1 LVL': [
                { name: 'Отжимания от стены', category: 'Руки', reps: '12', sets: '3' },
                { name: 'Сгибание рук с резинкой', category: 'Руки', reps: '15', sets: '3' },
                { name: 'Разгибание рук с резинкой', category: 'Руки', reps: '15', sets: '3' },
                { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3' },
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '10', sets: '3' }
            ],
            '2 LVL': [
                { name: 'Отжимания от пола узким хватом', category: 'Руки', reps: '10', sets: '4' },
                { name: 'Отжимания от пола широким хватом', category: 'Грудь', reps: '10', sets: '4' },
                { name: 'Алмазные отжимания', category: 'Руки', reps: '8', sets: '4' },
                { name: 'Сгибание рук с гантелями (бицепс)', category: 'Руки', reps: '12', sets: '4' },
                { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '12', sets: '4' },
                { name: 'Обратные отжимания от стула', category: 'Руки', reps: '10', sets: '4' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '30 сек', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Отжимания на одной руке на правую руку', category: 'Руки', reps: '5', sets: '4' },
                { name: 'Отжимания на одной руке на левую руку', category: 'Руки', reps: '5', sets: '4' },
                { name: 'Отжимания с хлопком', category: 'Грудь', reps: '8', sets: '4' },
                { name: 'Отжимания с узкой постановкой рук', category: 'Руки', reps: '12', sets: '4' },
                { name: 'Сгибание рук с гантелями (бицепс)', category: 'Руки', reps: '15', sets: '4' },
                { name: 'Молотковые сгибания', category: 'Руки', reps: '12', sets: '4' },
                { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '12', sets: '4' },
                { name: 'Обратные отжимания от стула с весом', category: 'Руки', reps: '12', sets: '4' },
                { name: 'Планка на одной руке на правую руку', category: 'Руки', reps: '30 сек', sets: '4' },
                { name: 'Планка на одной руке на левую руку', category: 'Руки', reps: '30 сек', sets: '4' }
            ]
        },
        'Плечи': {
            '1 LVL': [
                { name: 'Разведение рук с резинкой в стороны', category: 'Плечи', reps: '15', sets: '3' },
                { name: 'Подъем рук вперед с резинкой', category: 'Плечи', reps: '15', sets: '3' },
                { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '3' },
                { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '12', sets: '3' },
                { name: 'Тяга к подбородку с резинкой', category: 'Плечи', reps: '15', sets: '3' }
            ],
            '2 LVL': [
                { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '4' },
                { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '12', sets: '4' },
                { name: 'Тяга к подбородку с гантелью', category: 'Плечи', reps: '12', sets: '4' },
                { name: 'Подъем рук вперед с гантелями', category: 'Плечи', reps: '12', sets: '4' },
                { name: 'Разведение гантелей в наклоне', category: 'Плечи', reps: '12', sets: '4' },
                { name: 'Жим Арнольда', category: 'Плечи', reps: '10', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '4' },
                { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '15', sets: '4' },
                { name: 'Тяга к подбородку с гантелью', category: 'Плечи', reps: '12', sets: '4' },
                { name: 'Подъем рук вперед с гантелями', category: 'Плечи', reps: '15', sets: '4' },
                { name: 'Разведение гантелей в наклоне', category: 'Плечи', reps: '15', sets: '4' },
                { name: 'Жим Арнольда', category: 'Плечи', reps: '12', sets: '4' },
                { name: 'Отжимания в стойке у стены', category: 'Плечи', reps: '8', sets: '4' },
                { name: 'Махи гантелями перед собой', category: 'Плечи', reps: '12', sets: '4' }
            ]
        },
        'Пресс': {
            '1 LVL': [
                { name: 'Скручивания лёжа', category: 'Пресс', reps: '15', sets: '3' },
                { name: 'Подъем ног лёжа', category: 'Пресс', reps: '12', sets: '3' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '3' },
                { name: 'Боковая планка на коленях на правую сторону', category: 'Пресс', reps: '15 сек', sets: '3' },
                { name: 'Боковая планка на коленях на левую сторону', category: 'Пресс', reps: '15 сек', sets: '3' },
                { name: 'Лодочка', category: 'Спина', reps: '12', sets: '3' },
                { name: 'Вакуум живота стоя', category: 'Пресс', reps: '10 сек', sets: '3' }
            ],
            '2 LVL': [
                { name: 'Скручивания с вытянутыми руками', category: 'Пресс', reps: '20', sets: '4' },
                { name: 'Подъем ног в висе (на турнике)', category: 'Пресс', reps: '12', sets: '4' },
                { name: 'Ножницы ногами лёжа', category: 'Пресс', reps: '25', sets: '4' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '40 сек', sets: '4' },
                { name: 'Боковая планка на правую сторону', category: 'Пресс', reps: '25 сек', sets: '4' },
                { name: 'Боковая планка на левую сторону', category: 'Пресс', reps: '25 сек', sets: '4' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '15', sets: '4' },
                { name: 'Твист сидя', category: 'Пресс', reps: '20', sets: '4' },
                { name: 'Велосипед лёжа', category: 'Пресс', reps: '20', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Скручивания с весом', category: 'Пресс', reps: '25', sets: '4' },
                { name: 'Подъем ног в висе (на турнике)', category: 'Пресс', reps: '15', sets: '4' },
                { name: 'Ножницы ногами лёжа', category: 'Пресс', reps: '30', sets: '4' },
                { name: 'Планка на локтях с подъемом ног', category: 'Пресс', reps: '45 сек', sets: '4' },
                { name: 'Боковая планка с подъемом ног на правую сторону', category: 'Пресс', reps: '30 сек', sets: '4' },
                { name: 'Боковая планка с подъемом ног на левую сторону', category: 'Пресс', reps: '30 сек', sets: '4' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '20', sets: '4' },
                { name: 'Твист сидя с весом', category: 'Пресс', reps: '25', sets: '4' },
                { name: 'Подъем ног лёжа под углом 45°', category: 'Пресс', reps: '15', sets: '4' },
                { name: 'Планка на руках с касанием плеч', category: 'Пресс', reps: '16', sets: '4' }
            ]
        },
        'Грудь': {
            '1 LVL': [
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '3' },
                { name: 'Отжимания от стены', category: 'Грудь', reps: '15', sets: '3' },
                { name: 'Разводка рук с резинкой', category: 'Грудь', reps: '15', sets: '3' },
                { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3' },
                { name: 'Отжимания с упором спереди', category: 'Грудь', reps: '10', sets: '3' }
            ],
            '2 LVL': [
                { name: 'Отжимания от пола', category: 'Грудь', reps: '15', sets: '4' },
                { name: 'Широкие отжимания', category: 'Грудь', reps: '12', sets: '4' },
                { name: 'Отжимания с узкой постановкой рук', category: 'Руки', reps: '12', sets: '4' },
                { name: 'Отжимания с ногами на возвышении', category: 'Грудь', reps: '12', sets: '4' },
                { name: 'Разводка рук с гантелями лёжа', category: 'Грудь', reps: '12', sets: '4' },
                { name: 'Планка с переходом', category: 'Пресс', reps: '30 сек', sets: '4' },
                { name: 'Жим гантелей лёжа', category: 'Грудь', reps: '12', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '4' },
                { name: 'Отжимания на одной руке на правую руку', category: 'Грудь', reps: '6', sets: '4' },
                { name: 'Отжимания на одной руке на левую руку', category: 'Грудь', reps: '6', sets: '4' },
                { name: 'Отжимания с ногами на возвышении', category: 'Грудь', reps: '15', sets: '4' },
                { name: 'Отжимания в алмаз', category: 'Руки', reps: '12', sets: '4' },
                { name: 'Жим гантелей лёжа', category: 'Грудь', reps: '12', sets: '4' },
                { name: 'Разводка гантелей лёжа', category: 'Грудь', reps: '15', sets: '4' },
                { name: 'Отжимания с паузой внизу', category: 'Грудь', reps: '12', sets: '4' },
                { name: 'Планка на одной руке на правую руку', category: 'Руки', reps: '30 сек', sets: '4' },
                { name: 'Планка на одной руке на левую руку', category: 'Руки', reps: '30 сек', sets: '4' },
                { name: 'Жим гантелей на наклонной скамье', category: 'Грудь', reps: '10', sets: '4' }
            ]
        },
        'Спина': {
            '1 LVL': [
                { name: 'Тяга резинки к груди', category: 'Спина', reps: '15', sets: '3' },
                { name: 'Гиперэкстензия лёжа', category: 'Спина', reps: '15', sets: '3' },
                { name: 'Лодочка', category: 'Спина', reps: '12', sets: '3' },
                { name: 'Тяга резинки к поясу', category: 'Спина', reps: '15', sets: '3' },
                { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3' },
                { name: 'Тяга резинки над головой', category: 'Спина', reps: '12', sets: '3' }
            ],
            '2 LVL': [
                { name: 'Подтягивания (с резинкой)', category: 'Спина', reps: '10', sets: '4' },
                { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4' },
                { name: 'Гиперэкстензия', category: 'Спина', reps: '20', sets: '4' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '15', sets: '4' },
                { name: 'Тяга резинки к груди', category: 'Спина', reps: '15', sets: '4' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '30 сек', sets: '4' },
                { name: 'Тяга гантели в наклоне двумя руками', category: 'Спина', reps: '12', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '4' },
                { name: 'Тяга гантели к поясу', category: 'Спина', reps: '15', sets: '4' },
                { name: 'Гиперэкстензия с весом', category: 'Спина', reps: '20', sets: '4' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '15', sets: '4' },
                { name: 'Тяга резинки к груди', category: 'Спина', reps: '20', sets: '4' },
                { name: 'Планка на локтях с подъемом рук', category: 'Пресс', reps: '40 сек', sets: '4' },
                { name: 'Подтягивания широким хватом', category: 'Спина', reps: '10', sets: '4' },
                { name: 'Тяга гантели к груди', category: 'Спина', reps: '12', sets: '4' },
                { name: 'Тяга штанги в наклоне (с гантелями)', category: 'Спина', reps: '12', sets: '4' }
            ]
        },
        'Ноги': {
            '1 LVL': [
                { name: 'Приседания без веса', category: 'Ноги', reps: '20', sets: '3' },
                { name: 'Выпады на месте на правую ногу', category: 'Ноги', reps: '12', sets: '3' },
                { name: 'Выпады на месте на левую ногу', category: 'Ноги', reps: '12', sets: '3' },
                { name: 'Подъем на носки стоя', category: 'Ноги', reps: '20', sets: '3' },
                { name: 'Ягодичный мостик', category: 'Ягодицы', reps: '20', sets: '3' },
                { name: 'Приседания у стены', category: 'Ноги', reps: '30 сек', sets: '3' },
                { name: 'Махи ногой назад стоя на правую ногу', category: 'Ягодицы', reps: '15', sets: '3' },
                { name: 'Махи ногой назад стоя на левую ногу', category: 'Ягодицы', reps: '15', sets: '3' }
            ],
            '2 LVL': [
                { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Выпады вперед с гантелями на правую ногу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Выпады вперед с гантелями на левую ногу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Подъем на носки с гантелями', category: 'Ноги', reps: '20', sets: '4' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Приседания с паузой внизу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Выпады назад с гантелями на правую ногу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Выпады назад с гантелями на левую ногу', category: 'Ноги', reps: '12', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Приседания с гантелями (глубокие)', category: 'Ноги', reps: '20', sets: '4' },
                { name: 'Выпады вперед с гантелями на правую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Выпады вперед с гантелями на левую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Румынская тяга с гантелями', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Подъем на носки с гантелями', category: 'Ноги', reps: '25', sets: '4' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Приседания с паузой внизу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Выпады в стороны на правую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Выпады в стороны на левую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Приседания плие с гантелью', category: 'Ноги', reps: '15', sets: '4' }
            ]
        },
        'Всё тело': {
            '1 LVL': [
                { name: 'Приседания без веса', category: 'Ноги', reps: '15', sets: '3' },
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '3' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '3' },
                { name: 'Выпады на месте на правую ногу', category: 'Ноги', reps: '10', sets: '3' },
                { name: 'Выпады на месте на левую ногу', category: 'Ноги', reps: '10', sets: '3' },
                { name: 'Тяга резинки к груди', category: 'Спина', reps: '15', sets: '3' },
                { name: 'Скручивания лёжа', category: 'Пресс', reps: '15', sets: '3' }
            ],
            '2 LVL': [
                { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Отжимания от пола', category: 'Грудь', reps: '12', sets: '4' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '30 сек', sets: '4' },
                { name: 'Выпады вперед с гантелями на правую ногу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Выпады вперед с гантелями на левую ногу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4' },
                { name: 'Скручивания лёжа', category: 'Пресс', reps: '20', sets: '4' },
                { name: 'Подъем на носки с гантелями', category: 'Ноги', reps: '15', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Приседания с гантелями (глубокие)', category: 'Ноги', reps: '20', sets: '4' },
                { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '4' },
                { name: 'Планка с подъемом ног', category: 'Пресс', reps: '40 сек', sets: '4' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4' },
                { name: 'Скручивания с весом', category: 'Пресс', reps: '20', sets: '4' },
                { name: 'Бёрпи', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Тяга гантели к груди', category: 'Спина', reps: '12', sets: '4' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '15', sets: '4' }
            ]
        }
    },
    // ===================ФИТНЕС ===================
    'Фитнес': {
        'Зарядка': {
            '1 LVL': [
                { name: 'Наклоны головы', category: 'Пресс', reps: '10', sets: '3' },
                { name: 'Вращение плечами', category: 'Плечи', reps: '10', sets: '3' },
                { name: 'Наклоны туловища', category: 'Спина', reps: '12', sets: '3' },
                { name: 'Приседания', category: 'Ноги', reps: '15', sets: '3' },
                { name: 'Махи ногами', category: 'Ноги', reps: '12', sets: '3' },
                { name: 'Круговые движения тазом', category: 'Ягодицы', reps: '10', sets: '3' },
                { name: 'Потягивание вверх', category: 'Спина', reps: '10', sets: '3' }
            ],
            '2 LVL': [
                { name: 'Наклоны головы с сопротивлением', category: 'Пресс', reps: '12', sets: '4' },
                { name: 'Вращение плечами с гантелями', category: 'Плечи', reps: '12', sets: '4' },
                { name: 'Наклоны туловища с весом', category: 'Спина', reps: '12', sets: '4' },
                { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Махи ногами с утяжелением', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Планка', category: 'Пресс', reps: '30 сек', sets: '4' },
                { name: 'Выпады на месте на правую ногу', category: 'Ноги', reps: '10', sets: '4' },
                { name: 'Выпады на месте на левую ногу', category: 'Ноги', reps: '10', sets: '4' },
                { name: 'Вращение корпусом с гантелью', category: 'Пресс', reps: '12', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Наклоны головы с отягощением', category: 'Пресс', reps: '15', sets: '4' },
                { name: 'Вращение плечами с гантелями', category: 'Плечи', reps: '15', sets: '4' },
                { name: 'Наклоны туловища с весом', category: 'Спина', reps: '15', sets: '4' },
                { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '20', sets: '4' },
                { name: 'Махи ногами с утяжелением', category: 'Ноги', reps: '20', sets: '4' },
                { name: 'Планка с подъемом рук', category: 'Пресс', reps: '40 сек', sets: '4' },
                { name: 'Бёрпи', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Твист корпуса с гантелью', category: 'Пресс', reps: '15', sets: '4' }
            ]
        },
        'Кардио': {
            '1 LVL': [
                { name: 'Бег на месте', category: 'Ноги', reps: '30 сек', sets: '3' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '20', sets: '3' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '15', sets: '3' },
                { name: 'Бёрпи (упрощённые)', category: 'Ноги', reps: '8', sets: '3' },
                { name: 'Ходьба с высоким подниманием колен', category: 'Ноги', reps: '20 сек', sets: '3' },
                { name: 'Прыжки со сменой ног', category: 'Ноги', reps: '15', sets: '3' }
            ],
            '2 LVL': [
                { name: 'Бег на месте', category: 'Ноги', reps: '45 сек', sets: '4' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '30', sets: '4' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '25', sets: '4' },
                { name: 'Бёрпи', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Скакалка (без скакалки)', category: 'Ноги', reps: '30 сек', sets: '4' },
                { name: 'Горные лыжи', category: 'Ноги', reps: '20', sets: '4' },
                { name: 'Прыжки ноги вместе-врозь', category: 'Ноги', reps: '20', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Бег на месте', category: 'Ноги', reps: '60 сек', sets: '5' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '35', sets: '5' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '30', sets: '5' },
                { name: 'Бёрпи с отжиманием', category: 'Ноги', reps: '15', sets: '5' },
                { name: 'Скакалка (быстрая)', category: 'Ноги', reps: '45 сек', sets: '5' },
                { name: 'Горные лыжи', category: 'Ноги', reps: '25', sets: '5' },
                { name: 'Прыжки из приседа', category: 'Ноги', reps: '20', sets: '5' },
                { name: 'Берпи с прыжком вверх', category: 'Ноги', reps: '12', sets: '5' }
            ]
        },
        'Пилатес': {
            '1 LVL': [
                { name: 'Сотня (дыхание + руки)', category: 'Пресс', reps: '10', sets: '3' },
                { name: 'Скручивание с подъемом ног', category: 'Пресс', reps: '12', sets: '3' },
                { name: 'Подъем таза лёжа', category: 'Ягодицы', reps: '15', sets: '3' },
                { name: 'Ножницы ногами', category: 'Ноги', reps: '15', sets: '3' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '3' },
                { name: 'Боковые наклоны сидя', category: 'Пресс', reps: '10', sets: '3' },
                { name: 'Растяжка позвоночника (кошка)', category: 'Спина', reps: '10', sets: '3' }
            ],
            '2 LVL': [
                { name: 'Сотня с вытянутыми ногами', category: 'Пресс', reps: '15', sets: '4' },
                { name: 'Скручивание с подъемом ног', category: 'Пресс', reps: '15', sets: '4' },
                { name: 'Подъем таза на правую ногу', category: 'Ягодицы', reps: '12', sets: '4' },
                { name: 'Подъем таза на левую ногу', category: 'Ягодицы', reps: '12', sets: '4' },
                { name: 'Ножницы ногами', category: 'Ноги', reps: '20', sets: '4' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '35 сек', sets: '4' },
                { name: 'Боковая планка на правую сторону', category: 'Пресс', reps: '20 сек', sets: '4' },
                { name: 'Боковая планка на левую сторону', category: 'Пресс', reps: '20 сек', sets: '4' },
                { name: 'Растяжка спины (скручивание)', category: 'Спина', reps: '15', sets: '4' },
                { name: 'Мостик с подъемом ноги на правую ногу', category: 'Ягодицы', reps: '12', sets: '4' },
                { name: 'Мостик с подъемом ноги на левую ногу', category: 'Ягодицы', reps: '12', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Сотня с отягощением', category: 'Пресс', reps: '20', sets: '4' },
                { name: 'Скручивание с подъемом ног и рук', category: 'Пресс', reps: '20', sets: '4' },
                { name: 'Подъем таза с гантелью', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Ножницы ногами с утяжелением', category: 'Ноги', reps: '25', sets: '4' },
                { name: 'Планка с подъемом ноги на правую ногу', category: 'Пресс', reps: '40 сек', sets: '4' },
                { name: 'Планка с подъемом ноги на левую ногу', category: 'Пресс', reps: '40 сек', sets: '4' },
                { name: 'Боковая планка с подъемом ноги на правую сторону', category: 'Пресс', reps: '25 сек', sets: '4' },
                { name: 'Боковая планка с подъемом ноги на левую сторону', category: 'Пресс', reps: '25 сек', sets: '4' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '20', sets: '4' },
                { name: 'Растяжка в позе голубя', category: 'Ягодицы', reps: '20 сек', sets: '4' },
                { name: 'Стойка на лопатках', category: 'Спина', reps: '20 сек', sets: '4' }
            ]
        },
        'Растяжка': {
            '1 LVL': [
                { name: 'Наклоны к ногам сидя', category: 'Спина', reps: '25 сек', sets: '3' },
                { name: 'Растяжка шеи', category: 'Плечи', reps: '15 сек', sets: '3' },
                { name: 'Растяжка рук за спиной', category: 'Руки', reps: '20 сек', sets: '3' },
                { name: 'Наклоны в стороны', category: 'Спина', reps: '15 сек', sets: '3' },
                { name: 'Растяжка спины (кошка-корова)', category: 'Спина', reps: '20 сек', sets: '3' },
                { name: 'Ягодичный мостик (статический)', category: 'Ягодицы', reps: '20 сек', sets: '3' },
                { name: 'Растяжка трицепса', category: 'Руки', reps: '15 сек', sets: '3' }
            ],
            '2 LVL': [
                { name: 'Глубокий наклон к ногам', category: 'Спина', reps: '30 сек', sets: '4' },
                { name: 'Растяжка шеи с руками', category: 'Плечи', reps: '20 сек', sets: '4' },
                { name: 'Растяжка плеч (замок)', category: 'Плечи', reps: '25 сек', sets: '4' },
                { name: 'Боковые наклоны с руками', category: 'Спина', reps: '20 сек', sets: '4' },
                { name: 'Растяжка спины (скручивание)', category: 'Спина', reps: '25 сек', sets: '4' },
                { name: 'Растяжка ног (шпагат)', category: 'Ноги', reps: '20 сек', sets: '4' },
                { name: 'Поза голубя', category: 'Ягодицы', reps: '25 сек', sets: '4' },
                { name: 'Растяжка задней поверхности бедра', category: 'Ноги', reps: '20 сек', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Глубокий наклон с захватом ног', category: 'Спина', reps: '40 сек', sets: '4' },
                { name: 'Растяжка шеи с сопротивлением', category: 'Плечи', reps: '25 сек', sets: '4' },
                { name: 'Растяжка плеч за спиной', category: 'Плечи', reps: '30 сек', sets: '4' },
                { name: 'Боковые наклоны с захватом', category: 'Спина', reps: '25 сек', sets: '4' },
                { name: 'Растяжка позвоночника (мост)', category: 'Спина', reps: '30 сек', sets: '4' },
                { name: 'Продольный шпагат', category: 'Ноги', reps: '25 сек', sets: '4' },
                { name: 'Поперечный шпагат', category: 'Ноги', reps: '20 сек', sets: '4' },
                { name: 'Поза верблюда', category: 'Спина', reps: '25 сек', sets: '4' },
                { name: 'Складка с захватом стоп', category: 'Спина', reps: '30 сек', sets: '4' }
            ]
        }
    },
    // ===================ОСОБЫЕ (PREMIUM) ===================
    'Особые': {
        'Кроссфит': {
            '1 LVL': [
                { name: 'Бёрпи (упрощённые)', category: 'Ноги', reps: '10', sets: '4' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '25', sets: '4' },
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '4' },
                { name: 'Приседания без веса', category: 'Ноги', reps: '20', sets: '4' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '4' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '20', sets: '4' }
            ],
            '2 LVL': [
                { name: 'Бёрпи', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '25', sets: '4' },
                { name: 'Отжимания от пола', category: 'Грудь', reps: '15', sets: '4' },
                { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '35 сек', sets: '4' },
                { name: 'Горные лыжи', category: 'Ноги', reps: '20', sets: '4' },
                { name: 'Скакалка (без скакалки)', category: 'Ноги', reps: '30 сек', sets: '4' },
                { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '10', sets: '4' },
                { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '10', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Бёрпи с отжиманием', category: 'Ноги', reps: '15', sets: '5' },
                { name: 'Джампинг Джек с утяжелением', category: 'Ноги', reps: '30', sets: '5' },
                { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '5' },
                { name: 'Приседания со штангой', category: 'Ноги', reps: '15', sets: '5' },
                { name: 'Планка с отягощением', category: 'Пресс', reps: '40 сек', sets: '5' },
                { name: 'Скакалка (быстрая)', category: 'Ноги', reps: '45 сек', sets: '5' },
                { name: 'Прыжки из приседа', category: 'Ноги', reps: '20', sets: '5' },
                { name: 'Бёрпи с прыжком на тумбу', category: 'Ноги', reps: '10', sets: '5' },
                { name: 'Горные лыжи с отягощением', category: 'Ноги', reps: '20', sets: '5' }
            ],
            '_premium': true
        },
        'Мужская сила': {
            '1 LVL': [
                { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '12', sets: '4' },
                { name: 'Ягодичный мостик', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Приседания с задержкой', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Планка с подъемом таза', category: 'Пресс', reps: '20 сек', sets: '4' },
                { name: 'Махи ногами в сторону на правую ногу', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Махи ногами в сторону на левую ногу', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Подъем на носки', category: 'Ноги', reps: '20', sets: '4' }
            ],
            '2 LVL': [
                { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Боковая планка с подъемом ноги на правую сторону', category: 'Пресс', reps: '25 сек', sets: '4' },
                { name: 'Боковая планка с подъемом ноги на левую сторону', category: 'Пресс', reps: '25 сек', sets: '4' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '12', sets: '4' },
                { name: 'Отведение ноги в сторону с резинкой на правую ногу', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Отведение ноги в сторону с резинкой на левую ногу', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '12', sets: '4' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '12', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '25', sets: '4' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Приседания со штангой', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Планка с отягощением на тазу', category: 'Пресс', reps: '35 сек', sets: '4' },
                { name: 'Румынская тяга с гантелями', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Махи ногой назад с резинкой на правую ногу', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Махи ногой назад с резинкой на левую ногу', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Боковые выпады с гантелью на правую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Боковые выпады с гантелью на левую ногу', category: 'Ноги', reps: '15', sets: '4' }
            ],
            '_premium': true
        },
        'Женское счастье': {
            '1 LVL': [
                { name: 'Кегель для женщин', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Ягодичный мостик', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Приседания плие', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '25 сек', sets: '4' },
                { name: 'Махи ногой назад на правую ногу', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Махи ногой назад на левую ногу', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Отведение ноги в сторону стоя на правую ногу', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Отведение ноги в сторону стоя на левую ногу', category: 'Ягодицы', reps: '15', sets: '4' }
            ],
            '2 LVL': [
                { name: 'Кегель для женщин', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Приседания плие с гантелью', category: 'Ноги', reps: '20', sets: '4' },
                { name: 'Боковая планка на правую сторону', category: 'Пресс', reps: '30 сек', sets: '4' },
                { name: 'Боковая планка на левую сторону', category: 'Пресс', reps: '30 сек', sets: '4' },
                { name: 'Махи ногой назад с утяжелением на правую ногу', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Махи ногой назад с утяжелением на левую ногу', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Отведение ноги в сторону с резинкой на правую ногу', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Отведение ноги в сторону с резинкой на левую ногу', category: 'Ягодицы', reps: '20', sets: '4' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4' }
            ],
            '3 LVL': [
                { name: 'Кегель для женщин', category: 'Ягодицы', reps: '25', sets: '4' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '20', sets: '4' },
                { name: 'Планка с подъемом ноги на правую ногу', category: 'Пресс', reps: '40 сек', sets: '4' },
                { name: 'Планка с подъемом ноги на левую ногу', category: 'Пресс', reps: '40 сек', sets: '4' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Махи ногой назад с резинкой на правую ногу', category: 'Ягодицы', reps: '25', sets: '4' },
                { name: 'Махи ногой назад с резинкой на левую ногу', category: 'Ягодицы', reps: '25', sets: '4' },
                { name: 'Румынская тяга с гантелями', category: 'Ягодицы', reps: '15', sets: '4' },
                { name: 'Боковые выпады с гантелью на правую ногу', category: 'Ноги', reps: '15', sets: '4' },
                { name: 'Боковые выпады с гантелью на левую ногу', category: 'Ноги', reps: '15', sets: '4' }
            ],
            '_premium': true
        }
    }
};

// ===================ФОРМАТИРОВАНИЕ ПОВТОРЕНИЙ ===================
function formatReps(reps) {
    const repsStr = String(reps || '');
    if (repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд')) {
        const num = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 0;
        let word = 'секунд';
        if (num === 1) word = 'секунда';
        else if (num >= 2 && num <= 4) word = 'секунды';
        return `${num} ${word}`;
    }
    const num = parseInt(repsStr) || 0;
    let word = 'повторений';
    if (num === 1) word = 'повторение';
    else if (num >= 2 && num <= 4) word = 'повторения';
    return `${num} ${word}`;
}

function formatSets(sets) {
    const num = parseInt(sets) || 0;
    let word = 'подходов';
    if (num === 1) word = 'подход';
    else if (num >= 2 && num <= 4) word = 'подхода';
    return `${num} ${word}`;
}

// ===================МАКСИМАЛЬНОЕ КОЛИЧЕСТВО УПРАЖНЕНИЙ ===================
function getMaxExercisesForLevel(level, isCustom) {
    if (isCustom) return 20; // для личных тренировок всегда 20
    const maxMap = { '1 LVL': 10, '2 LVL': 15, '3 LVL': 20 };
    return maxMap[level] || 20;
}

// ===================СОХРАНЕНИЕ ДАННЫХ В localStorage ===================
const exercisesDataDefault = JSON.parse(JSON.stringify(exercisesData));
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

// ===================ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ===================
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let isOfflineModalShown = false;
let isLoggingIn = false;

// ===================ОФЛАЙН-ОЧЕРЕДЬ ===================
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
        showToast(`✅ Синхронизировано ${syncedIds.length} тренировок`);
    }
    if (failedIds.length > 0) {
        console.log(`${failedIds.length} тренировок ожидают синхронизации`);
    }
}

// ===================УРОВНИ ===================
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

function calculateWorkoutXp(exercises) {
    let totalXp = 0;
    exercises.forEach(ex => {
        const sets = parseInt(ex.sets) || 0;
        const repsStr = String(ex.reps || '');
        if (repsStr.includes('сек') || repsStr.includes('с')) {
            const seconds = parseFloat(repsStr.replace(/[^0-9.]/g, '')) || 0;
            totalXp += (sets * seconds) / 20;
        } else {
            const reps = parseFloat(repsStr) || 0;
            totalXp += (sets * reps) / 10;
        }
    });
    return totalXp;
}

// ===================FIREBASE ===================
function getFirebaseUser() {
    return new Promise((resolve) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        });
    });
}

// ===================ПРОФИЛЬ ===================
async function saveUserProfile(userId, data) {
    try {
        await firebase.firestore().collection('users').doc(userId).set(data, { merge: true });
        return { success: true };
    } catch (error) {
        console.error('Ошибка сохранения профиля:', error);
        showToast('❌ Не удалось сохранить профиль. Попробуйте позже.');
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
        showToast('❌ Не удалось загрузить профиль. Проверьте интернет.');
        return { success: false, error: error.message };
    }
}

async function updateUserProfile(userId, updates) {
    try {
        await firebase.firestore().collection('users').doc(userId).update(updates);
        return { success: true };
    } catch (error) {
        console.error('Ошибка обновления профиля:', error);
        showToast('❌ Не удалось обновить профиль. Попробуйте позже.');
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

// ===================ТРЕНИРОВКИ В FIRESTORE ===================
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
        showToast('❌ Не удалось сохранить тренировку. Проверьте интернет.');
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
        showToast('❌ Не удалось загрузить тренировки. Проверьте интернет.');
        return { success: false, error: error.message };
    }
}

async function deleteWorkoutFromFirestore(workoutId) {
    try {
        await firebase.firestore().collection('workouts').doc(workoutId).delete();
        return { success: true };
    } catch (error) {
        console.error('Ошибка удаления тренировки:', error);
        showToast('❌ Не удалось удалить тренировку. Попробуйте позже.');
        return { success: false, error: error.message };
    }
}

// ===================УПРАВЛЕНИЕ ЦВЕТОМ ===================
function setTheme(color) {
    document.body.className = 'theme-' + color;
    localStorage.setItem('themeColor', color);
    updateColorButtons(color);
    updateColorStatus(color);
}

function updateColorButtons(color) {
    document.querySelectorAll('.color-btn-modal').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.color === color);
    });
}

function updateColorStatus(color) {
    const colorNames = {
        'red': 'Красный', 'orange': 'Оранжевый', 'yellow': 'Желтый',
        'green': 'Зеленый', 'darkgreen': 'Темно-зеленый', 'blue': 'Голубой',
        'darkblue': 'Синий', 'purple': 'Фиолетовый', 'pink': 'Розовый', 'gray': 'Серый'
    };
    const statusEl = document.getElementById('colorStatus');
    if (statusEl) {
        statusEl.textContent = colorNames[color] || 'Красный';
    }
}

const savedColor = localStorage.getItem('themeColor') || 'red';
setTheme(savedColor);

// ===================НАВИГАЦИЯ ===================
window.navigateTo = function(page, params) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === page);
    });
    if (page === 'profile') loadProfile();
    if (page === 'level-select' && params) loadLevelSelect(params.category);
    if (page === 'workout-detail' && params) {
        loadWorkoutDetail(
            params.category,
            params.level,
            params.isCustom,
            params.id,
            params.parentCategory,
            params.isPremium
        );
    }
    if (page === 'workout-edit' && params) {
        loadEditPage(
            params.category,
            params.isCustom,
            params.id,
            params.level,
            params.exercises
        );
    }
    if (page === 'workouts') {
        applyWorkoutsTab(activeWorkoutsTab);
        renderMyWorkouts();
    }
    if (page === 'exercise-list') renderExerciseListPage();
    if (page === 'stats') {
        applyStatsTab(activeStatsTab);
        if (activeStatsTab === 'world') loadWorldLeaderboard();
        else loadStats();
    }
};

document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', function() {
        const page = this.dataset.page;
        if (page) window.navigateTo(page);
    });
});

// ===================УНИВЕРСАЛЬНЫЕ ФУНКЦИИ ДЛЯ МОДАЛОК ===================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// ===================УНИВЕРСАЛЬНАЯ ИНИЦИАЛИЗАЦИЯ ВКЛАДОК ===================
function initTabs(containerSelector, tabSelector, activeTab, loaders) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const tabs = container.querySelectorAll(tabSelector);
    tabs.forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            tabs.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Скрыть все содержимые
            const parent = this.closest('.page') || document;
            const contents = parent.querySelectorAll('.tab-content, .stats-tab-content');
            contents.forEach(c => c.classList.remove('active'));
            const targetContent = document.getElementById('tab-' + tab) || document.getElementById('stats-' + tab);
            if (targetContent) targetContent.classList.add('active');
            // Вызвать загрузчик
            if (loaders && typeof loaders[tab] === 'function') {
                loaders[tab]();
            }
        });
    });
    // Активировать начальную вкладку
    const activeBtn = container.querySelector(tabSelector + '[data-tab="' + activeTab + '"]');
    if (activeBtn) activeBtn.click();
}

// ===================ГЛОБАЛЬНАЯ ФУНКЦИЯ ДЛЯ ПЕРЕКЛЮЧЕНИЯ ВКЛАДОК СТАТИСТИКИ ===================
window.switchStatsTab = function(tab) {
    applyStatsTab(tab);
    if (tab === 'world') loadWorldLeaderboard();
    else if (tab === 'personal') loadStats();
};

// ===================ВКЛАДКИ ТРЕНИРОВОК ===================
let activeWorkoutsTab = 'ready';
let activeStatsTab = 'personal';

function applyWorkoutsTab(tab) {
    document.querySelectorAll('#page-workouts .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    document.querySelectorAll('#page-workouts .tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('tab-' + tab).classList.add('active');
}

function applyStatsTab(tab) {
    document.querySelectorAll('#page-stats .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    document.querySelectorAll('#page-stats .stats-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('stats-' + tab).classList.add('active');
}

// Инициализация вкладок статистики
initTabs('#page-stats .tabs-container', '.tab-btn', 'personal', {
    personal: loadStats,
    world: loadWorldLeaderboard
});

// Вкладки тренировок – отдельный обработчик (без загрузки данных)
document.querySelectorAll('#page-workouts .tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tab = this.dataset.tab;
        activeWorkoutsTab = tab;
        applyWorkoutsTab(tab);
        if (tab === 'my') renderMyWorkouts();
    });
});

// ===================КАТЕГОРИИ ТРЕНИРОВОК ===================
document.querySelectorAll('.category-card:not([data-premium="true"])').forEach(card => {
    card.addEventListener('click', function() {
        const name = this.dataset.category;
        if (name) {
            window.navigateTo('level-select', { category: name });
        }
    });
});

// ===================СТРАНИЦА ВЫБОРА УРОВНЯ ===================
function loadLevelSelect(category) {
    let parentCategory = null;
    for (const parent in exercisesData) {
        if (exercisesData[parent] && exercisesData[parent][category]) {
            parentCategory = parent;
            break;
        }
    }
    if (parentCategory === 'Особые') {
        if (!hasPremium()) {
            openModal('premiumModal');
            window.navigateTo('workouts');
            return;
        }
    }
    const titleEl = document.getElementById('levelSelectTitle');
    if (titleEl) titleEl.textContent = 'ТРЕНИРОВКА - ' + category.toUpperCase();
    let isPremium = false;
    if (parentCategory && exercisesData[parentCategory] && exercisesData[parentCategory][category]) {
        isPremium = exercisesData[parentCategory][category]._premium || false;
    }
    const levelsArr = ['1 LVL', '2 LVL', '3 LVL'];
    const levelDescs = ['Начинающий', 'Любитель', 'Профессионал'];
    const iconMap = {
        'Руки': 'bodybuilding', 'Плечи': 'shoulder', 'Пресс': 'press',
        'Грудь': 'breast', 'Спина': 'back', 'Ноги': 'legs',
        'Всё тело': 'WholeBody', 'Кардио': 'cardio', 'Растяжка': 'stretching',
        'Зарядка': 'charging', 'Пилатес': 'Pilates',
        'Мужская сила': 'men', 'Женское счастье': 'woman', 'Кроссфит': 'crossfit'
    };
    const icon = iconMap[category] || 'bodybuilding';
    const container = document.getElementById('levelsContainer');

    container.innerHTML = levelsArr.map((level, index) => {
        let exercises = [];
        let displayName = category + ' ' + level;

        // Поиск данных по уровню
        let levelData = null;
        if (parentCategory && exercisesData[parentCategory] && exercisesData[parentCategory][category]) {
            levelData = exercisesData[parentCategory][category][level];
        } else if (exercisesData[category] && exercisesData[category][level]) {
            levelData = exercisesData[category][level];
        } else {
            for (const parent in exercisesData) {
                if (exercisesData[parent] && exercisesData[parent][category]) {
                    levelData = exercisesData[parent][category][level];
                    if (levelData) break;
                }
            }
        }

        // Обработка данных
        if (levelData) {
            if (Array.isArray(levelData)) {
                exercises = levelData;
            } else if (typeof levelData === 'object' && levelData._exercises) {
                exercises = levelData._exercises;
                displayName = levelData._title || displayName;
            }
        }

        const count = exercises.length;
        return `
            <div class="level-card" onclick="window.navigateTo('workout-detail', {
                category: '${category}',
                level: '${level}',
                parentCategory: '${parentCategory || ''}',
                isPremium: ${isPremium}
            })">
                <div class="level-icon"><img src="images/${icon}.png"></div>
                <div class="level-info">
                    <h3>${displayName}</h3>
                    <p>${levelDescs[index]} · ${count} упражнений</p>
                </div>
            </div>
        `;
    }).join('');
}

// ===================СТРАНИЦА ДЕТАЛЕЙ ТРЕНИРОВКИ ===================
let currentCategory = '';
let currentLevel = '1 LVL';
let currentIsCustom = false;
let currentWorkoutId = null;
let timerInterval = null;
let seconds = 0;
let isWorkoutActive = false;
let completedExercises = new Set();

let _quickEditIndex = null; // Индекс упражнения для быстрого редактирования
let _quickEditExercises = null; // Ссылка на массив упражнений
let _quickEditIsCustom = false;
let _quickEditCategory = '';
let _quickEditLevel = '';
let _quickEditParentCategory = '';
let _quickEditWorkoutId = null;

const timerDisplay = document.getElementById('timerDisplay');
const actionButton = document.getElementById('actionButton');
const editWorkoutBtn = document.getElementById('editWorkoutBtn');

function loadWorkoutDetail(category, level, isCustom, id, parentCategory, isPremium) {
    let isPremiumWorkout = false;
    if (isPremium === true) isPremiumWorkout = true;
    if (parentCategory === 'Особые') isPremiumWorkout = true;
    if (!isPremiumWorkout) {
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category] && exercisesData[parent][category]._premium === true) {
                isPremiumWorkout = true;
                break;
            }
        }
    }
    if (isPremiumWorkout && !hasPremium()) {
        setTimeout(() => {
            openModal('premiumModal');
            window.navigateTo('workouts');
        }, 100);
        return;
    }
    currentCategory = category;
    currentLevel = level || '1 LVL';
    currentIsCustom = isCustom || false;
    currentWorkoutId = id || null;
    completedExercises = new Set();

    // Сохраняем данные для быстрого редактирования
    _quickEditCategory = category;
    _quickEditLevel = currentLevel;
    _quickEditIsCustom = isCustom;
    _quickEditParentCategory = parentCategory || '';
    _quickEditWorkoutId = id || null;

    let exercises = [];
    let displayTitle = '';

    if (isCustom && id) {
        const workout = getWorkoutById(id);
        if (workout) {
            exercises = workout.exercises || [];
            displayTitle = workout.title;
            currentCategory = workout.title;
        }
    } else {
        let found = false;
        let savedTitle = '';
        // Ищем данные по уровню
        let levelData = null;
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category]) {
                levelData = exercisesData[parent][category][currentLevel];
                if (levelData) break;
            }
        }
        if (!levelData && exercisesData[category] && exercisesData[category][currentLevel]) {
            levelData = exercisesData[category][currentLevel];
        }

        if (levelData) {
            // Если это объект с _exercises
            if (typeof levelData === 'object' && !Array.isArray(levelData)) {
                if (levelData._exercises) {
                    exercises = levelData._exercises;
                    found = true;
                }
                if (levelData._title) {
                    savedTitle = levelData._title;
                }
            } else if (Array.isArray(levelData) && levelData.length > 0) {
                exercises = levelData;
                found = true;
            }
        }

        // Если не нашли, пробуем поискать по всем уровням
        if (!found) {
            for (const parent in exercisesData) {
                if (exercisesData[parent] && exercisesData[parent][category]) {
                    const levelsArr = ['1 LVL', '2 LVL', '3 LVL'];
                    for (const lvl of levelsArr) {
                        const data = exercisesData[parent][category][lvl];
                        if (data) {
                            if (typeof data === 'object' && !Array.isArray(data) && data._exercises) {
                                exercises = data._exercises;
                                if (data._title) savedTitle = data._title;
                            } else if (Array.isArray(data) && data.length > 0) {
                                exercises = data;
                            }
                            if (exercises.length > 0) {
                                found = true;
                                break;
                            }
                        }
                    }
                    if (found) break;
                }
            }
        }

        // Определяем отображаемый заголовок
        if (savedTitle) {
            displayTitle = savedTitle;
        } else {
            displayTitle = category + ' ' + (level || '1 LVL');
        }
    }

    // Сохраняем ссылку на массив упражнений для быстрого редактирования
    _quickEditExercises = exercises;

    const titleEl = document.getElementById('workoutDetailTitle');
    if (titleEl) {
        if (isCustom) {
            titleEl.textContent = 'ТРЕНИРОВКА - ' + currentCategory.toUpperCase();
        } else {
            titleEl.textContent = 'ТРЕНИРОВКА - ' + displayTitle.toUpperCase();
        }
    }

    const container = document.getElementById('exercisesContainer');
    if (container) {
        if (exercises.length === 0) {
            container.innerHTML = `<div class="empty-state" style="padding:1.5rem; margin-top:0;"><p style="color:var(--slate);">Упражнения не найдены</p></div>`;
        } else {
            container.innerHTML = exercises.map((ex, index) => `
                <div class="level-card" id="exercise-${index}">
                    <div class="exercise-status" id="status-${index}">
                        <span class="exercise-number" id="number-${index}">${index + 1}</span>
                        <div class="check-box" id="check-${index}" style="display:none;"></div>
                    </div>
                    <div class="level-info" style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem;">
                        <div style="flex:1; min-width:0;">
                            <h3>${ex.name}</h3>
                            <p>${formatSets(ex.sets)} × ${formatReps(ex.reps)}</p>
                        </div>
                        <button class="quick-edit-btn" id="quickEditBtn-${index}" onclick="openQuickEditModal(${index})" style="display:none;" title="Редактировать упражнение">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                    </div>
                </div>
            `).join('');
            document.querySelectorAll('.level-card').forEach((card, index) => {
                card.addEventListener('click', function(e) {
                    if (e.target.closest('.quick-edit-btn')) return;
                    toggleExercise(index);
                });
            });
        }
    }
    if (editWorkoutBtn) {
        if (isPremiumWorkout) {
            editWorkoutBtn.style.display = 'none';
        } else {
            editWorkoutBtn.style.display = 'block';
            editWorkoutBtn.onclick = function() {
                const params = { category: currentCategory, isCustom: currentIsCustom, id: currentWorkoutId };
                if (!currentIsCustom && currentLevel) params.level = currentLevel;
                if (parentCategory) params.parentCategory = parentCategory;
                window.navigateTo('workout-edit', params);
            };
        }
    }
    if (timerDisplay) timerDisplay.textContent = '00:00';
    if (actionButton) actionButton.textContent = 'Начать тренировку';
    seconds = 0;
    isWorkoutActive = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    // Скрываем кнопки редактирования
    document.querySelectorAll('.quick-edit-btn').forEach(btn => btn.style.display = 'none');
}

function openQuickEditModal(index) {
    _quickEditIndex = index;
    
    const ex = _quickEditExercises[index];
    if (!ex) return;
    
    // Заполняем поля
    document.getElementById('quickEditSets').value = ex.sets || 3;
    
    const repsStr = String(ex.reps || '');
    const isSeconds = repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд');
    let repsValue = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 12;
    if (isNaN(repsValue) || repsValue < 2) repsValue = 12;
    if (repsValue > 60) repsValue = 60;
    document.getElementById('quickEditReps').value = repsValue;
    
    const label = document.getElementById('quickEditRepsLabel');
    if (label) label.textContent = isSeconds ? 'Секунды' : 'Повторения';
    
    // Очищаем ошибки
    document.querySelectorAll('#quickEditModal input').forEach(inp => {
        inp.classList.remove('error');
    });
    
    openModal('quickEditModal');
}

// Сохранение быстрого редактирования упражнения
document.getElementById('quickEditSaveBtn')?.addEventListener('click', function() {
    if (_quickEditIndex === null || !_quickEditExercises) {
        showToast('⚠️ Ошибка: упражнение не найдено');
        return;
    }
    
    const sets = document.getElementById('quickEditSets').value.trim();
    const reps = document.getElementById('quickEditReps').value.trim();
    const setsInput = document.getElementById('quickEditSets');
    const repsInput = document.getElementById('quickEditReps');
    
    [setsInput, repsInput].forEach(inp => inp.classList.remove('error'));
    let hasError = false;
    let errorMessage = '';
    
    if (!sets || parseInt(sets) < 1 || parseInt(sets) > 5) {
        setsInput.classList.add('error');
        hasError = true;
        errorMessage = 'Подходы должны быть от 1 до 5';
    }
    if (!reps || parseInt(reps) < 2 || parseInt(reps) > 60) {
        repsInput.classList.add('error');
        hasError = true;
        if (!errorMessage) errorMessage = 'Повторения должны быть от 2 до 60';
    }
    if (hasError) {
        showToast('⚠️ ' + errorMessage);
        return;
    }
    
    const label = document.getElementById('quickEditRepsLabel');
    const isSeconds = label ? label.textContent === 'Секунды' : false;
    const repsDisplay = isSeconds ? `${reps} секунд` : `${reps}`;
    
    // Обновляем упражнение в массиве
    _quickEditExercises[_quickEditIndex] = {
        ..._quickEditExercises[_quickEditIndex],
        sets: parseInt(sets),
        reps: repsDisplay
    };
    
    // Сохраняем изменения в базу
    if (_quickEditIsCustom) {
        const workout = getWorkoutById(_quickEditWorkoutId);
        if (workout) {
            workout.exercises = _quickEditExercises;
            saveMyWorkouts(getMyWorkouts());
        }
    } else {
        let saved = false;
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][_quickEditCategory]) {
                const levelData = exercisesData[parent][_quickEditCategory][_quickEditLevel];
                if (levelData) {
                    if (typeof levelData === 'object' && !Array.isArray(levelData) && levelData._exercises) {
                        levelData._exercises = _quickEditExercises;
                    } else if (Array.isArray(levelData)) {
                        exercisesData[parent][_quickEditCategory][_quickEditLevel] = _quickEditExercises;
                    }
                    saved = true;
                    break;
                }
            }
        }
        if (saved) saveExercisesData();
    }
    
    closeModal('quickEditModal');
    const editedIndex = _quickEditIndex;
    _quickEditIndex = null;
    
    // Обновляем только DOM
    const infoDiv = document.querySelector(`#exercise-${editedIndex} .level-info`);
    if (infoDiv) {
        const p = infoDiv.querySelector('p');
        if (p) {
            p.textContent = `${formatSets(sets)} × ${formatReps(repsDisplay)}`;
        }
    }
    
    showToast('✅ Упражнение обновлено');
});

// Отмена быстрого редактирования
document.getElementById('quickEditCancelBtn')?.addEventListener('click', function() {
    closeModal('quickEditModal');
    _quickEditIndex = null;
});

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

// ===================ТАЙМЕР ===================
function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
}

function startTimer() {
    if (timerInterval) return;
    isWorkoutActive = true;
    if (editWorkoutBtn) editWorkoutBtn.style.display = 'none';
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
        if (timerDisplay) timerDisplay.textContent = formatTime(seconds);
    }, 1000);

    // Показываем кнопки быстрого редактирования
    document.querySelectorAll('.quick-edit-btn').forEach(btn => btn.style.display = 'block');
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isWorkoutActive = false;
    // Скрываем кнопки быстрого редактирования
    document.querySelectorAll('.quick-edit-btn').forEach(btn => btn.style.display = 'none');
    return seconds;
}

// ===================МОДАЛЬНОЕ ОКНО РЕЗУЛЬТАТОВ ===================
function showModal(category, time, completed, total, xpEarned) {
    const oldModal = document.getElementById('modal-overlay');
    if (oldModal) oldModal.remove();
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal-content">
            <div class="modal-title">ТРЕНИРОВКА - ${category.toUpperCase()}</div>
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
            <button class="modal-btn modal-btn-primary" onclick="closeModal('modal-overlay'); window.navigateTo('profile');">ПРОДОЛЖИТЬ</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

// ===================ЗАВЕРШЕНИЕ ТРЕНИРОВКИ ===================
async function finishWorkout() {
    const totalTime = stopTimer();
    let exercises = [];
    
    // Получаем актуальный список упражнений
    if (currentIsCustom && currentWorkoutId) {
        const workout = getWorkoutById(currentWorkoutId);
        if (workout) exercises = workout.exercises || [];
    } else {
        let found = false;
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][currentCategory]) {
                const levelData = exercisesData[parent][currentCategory][currentLevel];
                if (levelData) {
                    if (Array.isArray(levelData)) {
                        exercises = levelData;
                    } else if (typeof levelData === 'object' && levelData._exercises) {
                        exercises = levelData._exercises;
                    }
                    found = true;
                    break;
                }
            }
        }
        if (!found && exercisesData[currentCategory] && exercisesData[currentCategory][currentLevel]) {
            const levelData = exercisesData[currentCategory][currentLevel];
            if (Array.isArray(levelData)) {
                exercises = levelData;
            } else if (typeof levelData === 'object' && levelData._exercises) {
                exercises = levelData._exercises;
            }
            found = true;
        }
        if (!found) {
            for (const parent in exercisesData) {
                if (exercisesData[parent] && exercisesData[parent][currentCategory]) {
                    const levelsArr = ['1 LVL', '2 LVL', '3 LVL'];
                    for (const lvl of levelsArr) {
                        const levelData = exercisesData[parent][currentCategory][lvl];
                        if (levelData) {
                            if (Array.isArray(levelData)) {
                                exercises = levelData;
                            } else if (typeof levelData === 'object' && levelData._exercises) {
                                exercises = levelData._exercises;
                            }
                            found = true;
                            break;
                        }
                    }
                    if (found) break;
                }
            }
        }
    }
    
    const total = exercises.length;
    if (total === 0) {
        showToast('⚠️ Тренировка не содержит упражнений');
        if (actionButton) actionButton.textContent = 'Начать тренировку';
        if (timerDisplay) timerDisplay.textContent = '00:00';
        seconds = 0;
        _quickEditExercises = null;
        _quickEditIndex = null;
        return;
    }
    
    // ✅ XP считаем ТОЛЬКО за выполненные упражнения (поштучно)
    let xpEarned = 0;
    const xpExercises = (_quickEditExercises && _quickEditExercises.length > 0) ? _quickEditExercises : exercises;
    xpExercises.forEach((ex, i) => {
        if (completedExercises.has(i)) {
            const sets = parseInt(ex.sets) || 0;
            const repsStr = String(ex.reps || '');
            if (repsStr.includes('сек') || repsStr.includes('с')) {
                const seconds = parseFloat(repsStr.replace(/[^0-9.]/g, '')) || 0;
                xpEarned += (sets * seconds) / 20;
            } else {
                const reps = parseFloat(repsStr) || 0;
                xpEarned += (sets * reps) / 10;
            }
        }
    });
    
    const date = new Date().toISOString();
    const user = await getFirebaseUser();
    
    const workoutData = {
        title: currentCategory + ' ' + currentLevel,
        date: date,
        durationSeconds: totalTime,
        exercises: exercises.map((ex, i) => ({
            name: ex.name,
            category: ex.category || 'Ноги',
            sets: parseInt(ex.sets) || 0,
            reps: parseInt(ex.reps) || 0,
            weight: 0,
            order: i,
            completed: completedExercises.has(i)
        })),
        xpEarned: xpEarned
    };
    
    if (!navigator.onLine) {
        addPendingWorkout(workoutData);
        showToast('💾 Тренировка сохранена локально. Синхронизация при восстановлении интернета.');
        showModal(currentCategory, totalTime, completedExercises.size, total, xpEarned);
        if (editWorkoutBtn) editWorkoutBtn.style.display = 'block';
        if (actionButton) actionButton.textContent = 'Начать тренировку';
        if (timerDisplay) timerDisplay.textContent = '00:00';
        seconds = 0;
        _quickEditExercises = null;
        _quickEditIndex = null;
        return;
    }
    
    if (user) {
        const result = await saveWorkoutToFirestore(user.uid, workoutData);
        if (result.success) {
            const profileResult = await getUserProfile(user.uid);
            if (profileResult.success) {
                const currentXp = profileResult.data.totalXp || 0;
                await updateUserProfile(user.uid, { totalXp: currentXp + xpEarned });
            }
        } else {
            addPendingWorkout(workoutData);
            showToast('💾 Тренировка сохранена локально. Синхронизация при восстановлении интернета.');
        }
    } else {
        showToast('❌ Вы не авторизованы. Тренировка не сохранена.');
    }
    
    showModal(currentCategory, totalTime, completedExercises.size, total, xpEarned);
    if (editWorkoutBtn) editWorkoutBtn.style.display = 'block';
    if (actionButton) actionButton.textContent = 'Начать тренировку';
    if (timerDisplay) timerDisplay.textContent = '00:00';
    seconds = 0;
    _quickEditExercises = null;
    _quickEditIndex = null;
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

// ===================ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ РЕДАКТИРОВАНИЯ ===================
function getExercisesForEdit(category, level, isCustom, id) {
    if (isCustom && id && id !== 'new') {
        const workout = getWorkoutById(id);
        if (workout) return JSON.parse(JSON.stringify(workout.exercises || []));
        return [];
    }
    if (!isCustom) {
        const targetLevel = level || '1 LVL';
        let exercisesFound = [];
        // Поиск в родительских категориях
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category]) {
                const levelData = exercisesData[parent][category][targetLevel];
                if (levelData) {
                    if (Array.isArray(levelData)) {
                        exercisesFound = levelData;
                    } else if (typeof levelData === 'object' && levelData._exercises) {
                        exercisesFound = levelData._exercises;
                    }
                    break;
                }
            }
        }
        // Если не нашли, ищем в корне
        if (exercisesFound.length === 0 && exercisesData[category] && exercisesData[category][targetLevel]) {
            const levelData = exercisesData[category][targetLevel];
            if (Array.isArray(levelData)) {
                exercisesFound = levelData;
            } else if (typeof levelData === 'object' && levelData._exercises) {
                exercisesFound = levelData._exercises;
            }
        }
        return JSON.parse(JSON.stringify(exercisesFound));
    }
    return [];
}

function saveWorkoutData(category, level, isCustom, id, title, icon, exercises) {
    if (isCustom || id === 'new') {
        const allWorkouts = getMyWorkouts();
        const isDuplicate = allWorkouts.some(w => w._id !== id && w.title.toLowerCase() === title.toLowerCase());
        if (isDuplicate) {
showConfirmModal(
    'Тренировка с таким названием уже существует',
    'Сохранить с дубликатом?',
    function() {
        // Код сохранения с дубликатом
    },
    'Да, сохранить'
);
        }
        if (id === 'new') {
            const newWorkout = {
                _id: Date.now().toString(),
                title: title,
                icon: icon,
                exercises: exercises
            };
            const workouts = getMyWorkouts();
            workouts.push(newWorkout);
            saveMyWorkouts(workouts);
            return true;
        } else {
            updateWorkout(id, { title: title, icon: icon, exercises: exercises });
            return true;
        }
    } else {
        // Сохраняем готовую тренировку
        const targetLevel = level || '1 LVL';
        let saved = false;
        // Сохраняем название как _title в объекте уровня
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category]) {
                if (exercisesData[parent][category][targetLevel]) {
                    // Если это массив, превращаем его в объект с полями
                    if (Array.isArray(exercisesData[parent][category][targetLevel])) {
                        exercisesData[parent][category][targetLevel] = {
                            _title: title,
                            _exercises: JSON.parse(JSON.stringify(exercises))
                        };
                    } else {
                        // Если уже объект, обновляем поля
                        exercisesData[parent][category][targetLevel]._title = title;
                        exercisesData[parent][category][targetLevel]._exercises = JSON.parse(JSON.stringify(exercises));
                    }
                    saved = true;
                    break;
                }
            }
        }
        if (!saved) {
            if (exercisesData[category] && exercisesData[category][targetLevel]) {
                if (Array.isArray(exercisesData[category][targetLevel])) {
                    exercisesData[category][targetLevel] = {
                        _title: title,
                        _exercises: JSON.parse(JSON.stringify(exercises))
                    };
                } else {
                    exercisesData[category][targetLevel]._title = title;
                    exercisesData[category][targetLevel]._exercises = JSON.parse(JSON.stringify(exercises));
                }
                saved = true;
            }
        }
        if (saved) {
            saveExercisesData();
            return true;
        }
        showToast('❌ Ошибка: категория "' + category + '" не найдена');
        return false;
    }
}

// ===================СТРАНИЦА РЕДАКТИРОВАНИЯ ТРЕНИРОВКИ ===================
let editExercises = [];
let editWorkoutId = null;
let editIsCustom = false;
let editCategory = '';
let editingExerciseIndex = null;
let editLevel = '1 LVL';

function loadEditPage(category, isCustom, id, level, exercises) {
    editCategory = category;
    editIsCustom = isCustom;
    editWorkoutId = id;
    editLevel = level || '1 LVL';
    
    // Для готовых тренировок игнорируем сохранённое имя из localStorage
    let savedName = null;
    if (isCustom || id === 'new') {
        savedName = localStorage.getItem('temp_edit_name');
    } else {
        // Очищаем временные данные для готовых, чтобы не мешали
        localStorage.removeItem('temp_edit_name');
        localStorage.removeItem('temp_edit_exercises');
        localStorage.removeItem('temp_edit_category');
        localStorage.removeItem('temp_edit_level');
        localStorage.removeItem('temp_edit_isCustom');
        localStorage.removeItem('temp_edit_id');
    }
    
    // Восстанавливаем упражнения из localStorage (только для личных или новой)
    if (!exercises || exercises.length === 0) {
        if (isCustom || id === 'new') {
            const saved = localStorage.getItem('temp_edit_exercises');
            if (saved) {
                const parsed = JSON.parse(saved);
                const savedCategory = localStorage.getItem('temp_edit_category');
                const savedLevel = localStorage.getItem('temp_edit_level');
                if (savedCategory === category && savedLevel === level) {
                    exercises = parsed;
                }
            }
        }
    }
    
    const titleEl = document.getElementById('editTitle');
    if (titleEl) {
        titleEl.textContent = (id === 'new') ? 'СОЗДАНИЕ ТРЕНИРОВКИ' : 'РЕДАКТИРОВАТЬ - ' + category.toUpperCase() + ' ' + editLevel;
    }
    const resetBtn = document.getElementById('resetWorkoutBtn');
    if (resetBtn) resetBtn.style.display = (isCustom || id === 'new') ? 'none' : 'block';
    
    // Скрываем выбор значка для готовых
    const iconPicker = document.querySelector('.edit-header-block .icon-picker');
    const iconPickerLabel = document.querySelector('.edit-header-block label[for="iconPicker"]');
    if (iconPicker) {
        if (isCustom || id === 'new') {
            iconPicker.style.display = 'flex';
            if (iconPickerLabel) iconPickerLabel.style.display = 'block';
        } else {
            iconPicker.style.display = 'none';
            if (iconPickerLabel) iconPickerLabel.style.display = 'none';
        }
    }
    
    const nameInput = document.getElementById('editWorkoutName');
    if (nameInput) {
        if (savedName) {
            nameInput.value = savedName;
        } else if (isCustom && id && id !== 'new') {
            const workout = getWorkoutById(id);
            if (workout) nameInput.value = workout.title || category;
        } else if (!isCustom) {
            // Для готовых — всегда берём из данных
            let savedTitle = '';
            for (const parent in exercisesData) {
                if (exercisesData[parent] && exercisesData[parent][category]) {
                    const levelData = exercisesData[parent][category][editLevel];
                    if (levelData && levelData._title) {
                        savedTitle = levelData._title;
                        break;
                    }
                }
            }
            if (!savedTitle && exercisesData[category] && exercisesData[category][editLevel] && exercisesData[category][editLevel]._title) {
                savedTitle = exercisesData[category][editLevel]._title;
            }
            nameInput.value = savedTitle || (category + ' ' + editLevel);
        } else {
            const workouts = getMyWorkouts();
            nameInput.value = 'Тренировка №' + (workouts.length + 1);
        }
    }
    
    // Загружаем упражнения
    if (exercises && exercises.length > 0) {
        editExercises = exercises;
    } else {
        editExercises = getExercisesForEdit(category, editLevel, isCustom, id);
    }
    
    // Устанавливаем иконку для личных
    if (isCustom || id === 'new') {
        const defaultIcon = ['bodybuilding', 'press', 'breast', 'back', 'legs', 'shoulder', 'cardio', 'stretching', 'WholeBody', 'charging', 'Pilates'].includes(category) ? category : 'bodybuilding';
        document.querySelectorAll('.icon-option').forEach(el => {
            el.classList.toggle('active', el.dataset.icon === defaultIcon);
        });
    }
    setTimeout(() => renderEditExercises(), 300);
}

// ===================ВЫБОР ЗНАЧКА ===================
document.querySelectorAll('.icon-option').forEach(el => {
    el.addEventListener('click', function() {
        document.querySelectorAll('.icon-option').forEach(e => e.classList.remove('active'));
        this.classList.add('active');
    });
});

// ===================РЕНДЕР УПРАЖНЕНИЙ В РЕДАКТИРОВАНИИ ===================
function renderEditExercises() {
    const container = document.getElementById('editExercisesContainer');
    if (!container) return;
    const maxExercises = getMaxExercisesForLevel(editLevel, editIsCustom);
    const currentCount = editExercises.length;
    let headerHtml = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem; padding:0 0.2rem;">
            <span style="font-weight:600; font-size:1rem; color:var(--dark);">Упражнения</span>
            <span style="font-weight:500; font-size:0.9rem; color:var(--slate);">${currentCount}/${maxExercises}</span>
        </div>
    `;
    if (editExercises.length === 0) {
        container.innerHTML = headerHtml + `<div class="empty-state" style="padding:1.5rem;"><p style="color:var(--slate);">Нет упражнений</p></div>`;
        return;
    }
    let trainingIcon = 'bodybuilding';
    if (editIsCustom || editWorkoutId === 'new') {
        const selectedIcon = document.querySelector('.icon-option.active');
        if (selectedIcon) trainingIcon = selectedIcon.dataset.icon;
    } else {
        const iconMap = {
            'Руки': 'bodybuilding', 'Плечи': 'shoulder', 'Пресс': 'press',
            'Грудь': 'breast', 'Спина': 'back', 'Ноги': 'legs',
            'Всё тело': 'WholeBody', 'Кардио': 'cardio', 'Растяжка': 'stretching',
            'Зарядка': 'charging', 'Пилатес': 'Pilates'
        };
        trainingIcon = iconMap[editCategory] || 'bodybuilding';
    }
    function getExerciseIconByName(exerciseName) {
        for (const category in exercisesData) {
            if (typeof exercisesData[category] === 'object') {
                for (const subCategory in exercisesData[category]) {
                    if (typeof exercisesData[category][subCategory] === 'object') {
                        if (exercisesData[category][subCategory]._premium) continue;
                        for (const level in exercisesData[category][subCategory]) {
                            if (Array.isArray(exercisesData[category][subCategory][level])) {
                                const found = exercisesData[category][subCategory][level].find(e => e.name === exerciseName);
                                if (found) {
                                    const iconMap = {
                                        'Руки': 'bodybuilding', 'Плечи': 'shoulder', 'Пресс': 'press',
                                        'Грудь': 'breast', 'Спина': 'back', 'Ноги': 'legs',
                                        'Всё тело': 'WholeBody', 'Кардио': 'cardio', 'Растяжка': 'stretching',
                                        'Зарядка': 'charging', 'Пилатес': 'Pilates'
                                    };
                                    return iconMap[subCategory] || 'bodybuilding';
                                }
                            }
                        }
                    }
                }
            }
        }
        return trainingIcon;
    }
    const exercisesHtml = editExercises.map((ex, index) => {
        const icon = getExerciseIconByName(ex.name);
        return `
            <div class="edit-exercise-item" data-index="${index}" draggable="true">
                <div class="drag-handle"><span>☰</span></div>
                <div class="level-icon" style="width:44px;height:44px;min-width:44px;background:var(--accent-light);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                    <img src="images/${icon}.png" style="width:28px;height:28px;object-fit:contain;">
                </div>
                <div class="edit-exercise-info">
                    <h4>${ex.name}</h4>
                    <p>${formatSets(ex.sets)} × ${formatReps(ex.reps)}</p>
                </div>
                <div class="edit-actions">
                    <button class="edit-btn" onclick="openExerciseModal(${index})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="delete-btn" onclick="removeEditExercise(${index})"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        `;
    }).join('');
    container.innerHTML = headerHtml + exercisesHtml;
    setupDragDrop();
}

// ===================DRAG & DROP ===================
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
            document.querySelectorAll('.edit-exercise-item').forEach(el => el.classList.remove('drag-over'));
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

// ===================УПРАВЛЕНИЕ УПРАЖНЕНИЯМИ В РЕДАКТИРОВАНИИ ===================
window.addEditExercise = function() {
    editExercises.push({ name: 'Новое упражнение', sets: 3, reps: 12 });
    renderEditExercises();
    openExerciseModal(editExercises.length - 1);
};

window.removeEditExercise = function(index) {
showConfirmModal(
    'Удалить упражнение?',
    'Это действие нельзя отменить.',
    function() {
        editExercises.splice(index, 1);
        renderEditExercises();
        showToast('🗑️ Упражнение удалено');
    },
    'Удалить'
);
};

// ===================МОДАЛЬНОЕ ОКНО РЕДАКТИРОВАНИЯ УПРАЖНЕНИЯ ===================
window.openExerciseModal = function(index) {
    // Закрываем другие модалки
    closeModal('addExerciseModal');
    closeModal('createExerciseModal');
    // Сохраняем исходные данные для отмены
    if (index !== undefined && index !== null && editExercises[index]) {
        const ex = editExercises[index];
        window._editOriginalData = { name: ex.name, sets: ex.sets, reps: ex.reps };
    } else {
        window._editOriginalData = null;
    }
    if (index === undefined || index === null || index === editExercises.length) {
        const maxExercises = getMaxExercisesForLevel(editLevel, editIsCustom);
        if (editExercises.length >= maxExercises) {
            showToast(`⚠️ Вы достигли максимума упражнений в этой категории (${maxExercises})`);
            return;
        }
        editingExerciseIndex = editExercises.length;
        editExercises.push({ name: 'Новое упражнение', sets: 3, reps: 12 });
        renderEditExercises();
        index = editingExerciseIndex;
    } else if (!editExercises[index]) {
        const maxExercises = getMaxExercisesForLevel(editLevel, editIsCustom);
        if (editExercises.length >= maxExercises) {
            showToast(`⚠️ Вы достигли максимума упражнений в этой категории (${maxExercises})`);
            return;
        }
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
    const repsStr = String(ex.reps || '');
    const isSeconds = repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд');
    let repsValue = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 12;
    if (isNaN(repsValue) || repsValue < 2) repsValue = 12;
    if (repsValue > 60) repsValue = 60;
    document.getElementById('modalExerciseReps').value = repsValue;
    const label = document.querySelector('#exerciseModal .form-group label[for="modalExerciseReps"]');
    if (label) label.textContent = isSeconds ? 'Секунды' : 'Повторения';
    document.getElementById('exerciseModal').dataset.isSeconds = isSeconds ? 'true' : 'false';
    // Очистка ошибок при вводе
    document.querySelectorAll('#exerciseModal input').forEach(inp => {
        inp.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });
    openModal('exerciseModal');
};

// Сохранение редактирования упражнения
document.getElementById('modalSaveBtn')?.addEventListener('click', function() {
    if (editingExerciseIndex === null) return;
    const name = document.getElementById('modalExerciseName').value.trim();
    const sets = document.getElementById('modalExerciseSets').value.trim();
    const reps = document.getElementById('modalExerciseReps').value.trim();
    const nameInput = document.getElementById('modalExerciseName');
    const setsInput = document.getElementById('modalExerciseSets');
    const repsInput = document.getElementById('modalExerciseReps');
    [nameInput, setsInput, repsInput].forEach(inp => inp.classList.remove('error'));
    let hasError = false;
    let errorMessage = '';
    if (!name) { nameInput.classList.add('error'); hasError = true; errorMessage = 'Введите название упражнения'; }
    if (!sets || parseInt(sets) < 1 || parseInt(sets) > 5) { setsInput.classList.add('error'); hasError = true; if (!errorMessage) errorMessage = 'Подходы должны быть от 1 до 5'; }
    if (!reps || parseInt(reps) < 2 || parseInt(reps) > 60) { repsInput.classList.add('error'); hasError = true; if (!errorMessage) errorMessage = 'Повторения должны быть от 2 до 60'; }
    if (hasError) { showToast('⚠️ ' + errorMessage); return; }
    const isSeconds = document.getElementById('exerciseModal').dataset.isSeconds === 'true';
    const repsDisplay = isSeconds ? `${reps} секунд` : `${reps}`;
    editExercises[editingExerciseIndex] = { name: name, sets: parseInt(sets), reps: repsDisplay };
    closeModal('exerciseModal');
    editingExerciseIndex = null;
    window._editOriginalData = null;
    renderEditExercises();
    showToast('✅ Упражнение обновлено');
});

// Отмена редактирования упражнения
document.getElementById('modalCancelBtn')?.addEventListener('click', function() {
    if (window._editOriginalData && editingExerciseIndex !== null && editExercises[editingExerciseIndex]) {
        editExercises[editingExerciseIndex] = { ...window._editOriginalData };
        renderEditExercises();
    } else if (editingExerciseIndex !== null && editExercises[editingExerciseIndex] && editExercises[editingExerciseIndex].name === 'Новое упражнение') {
        editExercises.splice(editingExerciseIndex, 1);
        renderEditExercises();
    }
    closeModal('exerciseModal');
    editingExerciseIndex = null;
    window._editOriginalData = null;
});

// ===================СОХРАНЕНИЕ И ОТМЕНА В РЕДАКТИРОВАНИИ ===================
document.getElementById('saveEditBtn')?.addEventListener('click', function() {
    if (editExercises.length === 0) {
        showToast('⚠️ Добавьте хотя бы одно упражнение');
        return;
    }
    const nameInput = document.getElementById('editWorkoutName');
    const title = nameInput ? nameInput.value.trim() : (editCategory || 'Моя тренировка');
    if (!title) { showToast('⚠️ Введите название тренировки'); return; }
    const selectedIcon = document.querySelector('.icon-option.active');
    const icon = selectedIcon ? selectedIcon.dataset.icon : 'bodybuilding';
    const success = saveWorkoutData(editCategory, editLevel, editIsCustom, editWorkoutId, title, icon, editExercises);
    if (success) {
        showToast('✅ Тренировка сохранена!');
        // Очищаем временные данные
        localStorage.removeItem('temp_edit_name');
        localStorage.removeItem('temp_edit_exercises');
        localStorage.removeItem('temp_edit_category');
        localStorage.removeItem('temp_edit_level');
        localStorage.removeItem('temp_edit_isCustom');
        localStorage.removeItem('temp_edit_id');
        // Переходим на страницу деталей этой тренировки
        if (editIsCustom || editWorkoutId === 'new') {
            const id = editWorkoutId === 'new' ? Date.now().toString() : editWorkoutId;
            const workout = getWorkoutById(id);
            if (workout) {
                window.navigateTo('workout-detail', { category: workout.title, isCustom: true, id: id });
                return;
            }
        }
        // Для готовых тренировок
        window.navigateTo('workout-detail', { category: editCategory, level: editLevel, parentCategory: '' });
    }
});

document.getElementById('cancelEditBtn')?.addEventListener('click', function() {
    // Очищаем временные данные
    localStorage.removeItem('temp_edit_name');
    localStorage.removeItem('temp_edit_exercises');
    localStorage.removeItem('temp_edit_category');
    localStorage.removeItem('temp_edit_level');
    localStorage.removeItem('temp_edit_isCustom');
    localStorage.removeItem('temp_edit_id');
    // Возвращаемся на детали тренировки (без сохранения)
    if (editIsCustom || editWorkoutId === 'new') {
        const id = editWorkoutId === 'new' ? null : editWorkoutId;
        if (id) {
            const workout = getWorkoutById(id);
            if (workout) {
                window.navigateTo('workout-detail', { category: workout.title, isCustom: true, id: id });
                return;
            }
        }
        // Если это новая тренировка, то возвращаемся в мои тренировки
        window.navigateTo('workouts');
    } else {
        window.navigateTo('workout-detail', { category: editCategory, level: editLevel, parentCategory: '' });
    }
});

// ===================СБРОС ТРЕНИРОВКИ ===================
function resetWorkout() {
    if (!editCategory || editIsCustom) {
        showToast('⚠️ Эта функция только для готовых тренировок');
        return;
    }
    
    showConfirmModal(
        'Сбросить тренировку?',
        'Все изменения будут потеряны.',
        function() {
            // Код сброса тренировки (всё, что было внутри)
            const category = editCategory;
            const level = editLevel || '1 LVL';
            let parentCategory = null;
            for (const parent in exercisesDataDefault) {
                if (exercisesDataDefault[parent] && exercisesDataDefault[parent][category]) {
                    parentCategory = parent;
                    break;
                }
            }
            if (parentCategory) {
                const defaultExercises = exercisesDataDefault[parentCategory][category][level];
                if (defaultExercises) {
                    // Меняем ТОЛЬКО editExercises, не трогаем exercisesData
                    editExercises = JSON.parse(JSON.stringify(defaultExercises));
                    const nameInput = document.getElementById('editWorkoutName');
                    if (nameInput) nameInput.value = category + ' ' + level;
                    renderEditExercises();
                    showToast('✅ Тренировка сброшена к исходному состоянию');
                    return;
                }
            }
            if (exercisesDataDefault[category] && exercisesDataDefault[category][level]) {
                const defaultExercises = exercisesDataDefault[category][level];
                if (defaultExercises) {
                    // Меняем ТОЛЬКО editExercises, не трогаем exercisesData
                    editExercises = JSON.parse(JSON.stringify(defaultExercises));
                    const nameInput = document.getElementById('editWorkoutName');
                    if (nameInput) nameInput.value = category + ' ' + level;
                    renderEditExercises();
                    showToast('✅ Тренировка сброшена к исходному состоянию');
                    return;
                }
            }
            showToast('❌ Не удалось найти исходные данные для этой тренировки');
        },
        'Сбросить'
    );
}

// ===================МОИ ТРЕНИРОВКИ (localStorage) ===================
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
        container.innerHTML = `<div class="empty-state"><span>📋</span><h3>Нет своих тренировок</h3><p>Создайте свою первую тренировку!</p></div>`;
        return;
    }
    container.innerHTML = workouts.map(w => `
        <div class="category-card" onclick="window.navigateTo('workout-detail', { category: '${w.title}', isCustom: true, id: '${w._id}' })">
            <div class="category-icon"><img src="images/${w.icon || 'bodybuilding'}.png"></div>
            <div class="category-info"><h3>${w.title}</h3><p>${w.exercises?.length || 0} упражнений</p></div>
            <button class="workout-delete" onclick="event.stopPropagation(); deleteCustomWorkout('${w._id}')"><i class="fa-regular fa-trash-can"></i></button>
        </div>
    `).join('');
}

window.deleteCustomWorkout = function(id) {
showConfirmModal(
    'Удалить тренировку?',
    'Это действие нельзя отменить.',
    function() {
        deleteWorkout(id);
        renderMyWorkouts();
        showToast('🗑️ Тренировка удалена');
    },
    'Удалить'
);
};

window.createNewWorkout = function() {
    window.navigateTo('workout-edit', { category: 'Новая тренировка', isCustom: true, id: 'new' });
};

// ===================СТАТИСТИКА ===================
async function loadStats() {
    const user = await getFirebaseUser();
    if (!user) return;
    const result = await getUserWorkoutsFromFirestore(user.uid);
    if (!result.success) return;
    const workouts = result.data.filter(w => !(w.title || '').includes('Зарядка'));
    const total = workouts.length;
    const totalSeconds = workouts.reduce((sum, w) => sum + (w.durationSeconds || 0), 0);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalExercises = workouts.reduce((sum, w) => {
        const completed = w.exercises?.filter(e => e.completed === true).length || 0;
        return sum + completed;
    }, 0);
    document.getElementById('totalWorkouts').textContent = total;
    document.getElementById('totalMinutes').textContent = totalMinutes;
    document.getElementById('totalExercises').textContent = totalExercises;

    // Тренировки по категориям
    const categoryMap = {
        'Руки': ['Руки'], 'Плечи': ['Плечи'], 'Пресс': ['Пресс'],
        'Грудь': ['Грудь'], 'Спина': ['Спина'], 'Ноги': ['Ноги'],
        'Ягодицы': ['Мужская сила', 'Женское счастье', 'Пилатес'],
        'Кардио': ['Кардио'], 'Гибкость': ['Растяжка'], 'Всё тело': ['Всё тело', 'Кроссфит']
    };
    const categoryCounts = {};
    for (const cat in categoryMap) categoryCounts[cat] = 0;
    workouts.forEach(w => {
        const title = w.title || '';
        for (const cat in categoryMap) {
            if (categoryMap[cat].some(k => title.includes(k))) {
                categoryCounts[cat]++;
                break;
            }
        }
    });
    const categoriesContainer = document.getElementById('categoriesStats');
    if (categoriesContainer) {
        const maxCount = Math.max(1, ...Object.values(categoryCounts));
        categoriesContainer.innerHTML = Object.keys(categoryCounts).map(cat => {
            const count = categoryCounts[cat];
            const percent = Math.round((count / maxCount) * 100);
            return `<div class="stat-muscle-item"><span class="muscle-name">${cat}</span><div class="muscle-bar"><div class="muscle-fill" style="width:${percent}%;"></div></div><span class="muscle-count">${count}</span></div>`;
        }).join('');
    }

    // Упражнения по группам мышц
    const exerciseCounts = { 'Руки': 0, 'Плечи': 0, 'Пресс': 0, 'Грудь': 0, 'Спина': 0, 'Ноги': 0, 'Ягодицы': 0 };
    workouts.forEach(w => {
        (w.exercises || []).forEach(ex => {
            if (ex.completed) {
                const category = ex.category || 'Ноги';
                if (exerciseCounts[category] !== undefined) exerciseCounts[category]++;
            }
        });
    });
    const exercisesContainer = document.getElementById('exerciseMuscleStats');
    if (exercisesContainer) {
        const maxCount = Math.max(1, ...Object.values(exerciseCounts));
        exercisesContainer.innerHTML = Object.keys(exerciseCounts).map(cat => {
            const count = exerciseCounts[cat];
            const percent = Math.round((count / maxCount) * 100);
            return `<div class="stat-muscle-item"><span class="muscle-name">${cat}</span><div class="muscle-bar"><div class="muscle-fill" style="width:${percent}%;"></div></div><span class="muscle-count">${count}</span></div>`;
        }).join('');
    }

    // История - сортируем по дате (новые сверху)
    const historyContainer = document.getElementById('workoutHistory');
    if (historyContainer) {
        if (workouts.length === 0) {
            historyContainer.innerHTML = '<p style="color:var(--slate);text-align:center;">Нет выполненных тренировок</p>';
        } else {
            // Сортировка по дате убывания (новые первые)
            const sortedWorkouts = workouts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
            historyContainer.innerHTML = sortedWorkouts.map(w => {
                const totalEx = w.exercises?.length || 0;
                const completedEx = w.exercises?.filter(e => e.completed === true).length || 0;
                const xpEarned = w.xpEarned || 0;
                const minutes = Math.floor((w.durationSeconds || 0) / 60);
                return `<div><div style="display:flex;justify-content:space-between;align-items:center;"><strong>${w.title}</strong><span style="color:var(--slate);font-size:0.9rem;">${new Date(w.date).toLocaleDateString('ru-RU')}</span></div><div style="color:var(--slate);font-size:0.9rem;margin-top:0.3rem;">${minutes} мин · ${completedEx}/${totalEx} упражнений · ${xpEarned.toFixed(1)} XP</div></div>`;
            }).join('');
        }
    }
}

// ===================КАЛЕНДАРЬ ===================
async function renderCalendar(month, year) {
    const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    const monthYearEl = document.getElementById('currentMonthYear');
    if (monthYearEl) monthYearEl.textContent = `${monthNames[month]} ${year}`;
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
    const user = await getFirebaseUser();
    let workoutDays = [];
    if (user) {
        const result = await getUserWorkoutsFromFirestore(user.uid);
        if (result.success) {
            workoutDays = result.data
                .filter(w => !(w.title || '').includes('Зарядка'))
                .map(w => new Date(w.date));
        }
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        dayEl.classList.add('calendar-day');
        dayEl.textContent = day;
        const hasWorkout = workoutDays.some(d => d.getDate() === day && d.getMonth() === month && d.getFullYear() === year);
        if (hasWorkout) dayEl.classList.add('has-workout');
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayEl.classList.add('today');
        }
        container.appendChild(dayEl);
    }
}

document.getElementById('prevMonth')?.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar(currentMonth, currentYear);
});
document.getElementById('nextMonth')?.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    renderCalendar(currentMonth, currentYear);
});

// ===================ПРОФИЛЬ ===================
async function loadProfile() {
    const user = await getFirebaseUser();
    if (!user) return;
    const profileResult = await getUserProfile(user.uid);
    if (!profileResult.success) return;
    const profile = profileResult.data;
    const xp = profile.totalXp || 0;
    const currentLevel = getCurrentLevel(xp);
    const progress = getXpProgress(xp);
    const nextLevel = getNextLevel(xp);
    let progressText = nextLevel ? `${xp.toFixed(1)}/${nextLevel.minXp} XP` : `${xp.toFixed(1)}+ XP`;
    document.getElementById('profileName').textContent = profile.displayName || 'Пользователь';
    document.getElementById('profileInitials').textContent = (profile.displayName || 'П')[0].toUpperCase();
    document.getElementById('profileEmailDisplay').textContent = user.email || '';
    if (profile.createdAt) {
        const date = new Date(profile.createdAt);
        document.getElementById('profileDate').textContent = date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
    }
    document.getElementById('editName').value = profile.displayName || '';
    document.getElementById('editNameError').textContent = '';
    document.getElementById('levelLvl').textContent = currentLevel.id + ' LVL';
    document.getElementById('levelTitle').textContent = currentLevel.name;
    document.getElementById('levelProgressText').textContent = progressText;
    document.getElementById('levelFill').style.width = progress + '%';
    await renderFriendsInProfile();
}

// ===================ПРОФИЛЬ - РЕДАКТИРОВАНИЕ ===================
document.getElementById('editProfileBtn')?.addEventListener('click', () => {
    document.getElementById('profileView').style.display = 'none';
    document.getElementById('profileEdit').style.display = 'block';
    const currentName = document.getElementById('profileName').textContent;
    document.getElementById('editName').value = currentName;
    document.getElementById('editNameError').textContent = '';
});
document.getElementById('cancelProfileEditBtn')?.addEventListener('click', () => {
    document.getElementById('profileView').style.display = 'block';
    document.getElementById('profileEdit').style.display = 'none';
    loadProfile();
});
document.getElementById('saveProfileBtn')?.addEventListener('click', async () => {
    const nameInput = document.getElementById('editName');
    const name = nameInput.value.trim();
    const nameError = document.getElementById('editNameError');
    const currentName = document.getElementById('profileName').textContent;
    
    if (!name) {
        nameError.textContent = 'Введите имя и фамилию';
        nameInput.classList.add('error');
        return;
    }
    nameError.textContent = '';
    nameInput.classList.remove('error');
    
    // Проверяем, изменилось ли имя
    if (name === currentName) {
        // Ничего не меняем, даже тост не показываем
        document.getElementById('profileView').style.display = 'block';
        document.getElementById('profileEdit').style.display = 'none';
        return;
    }
    
    const user = await getFirebaseUser();
    if (user) {
        await updateUserProfile(user.uid, { displayName: name });
        loadProfile();
        showToast('✅ Профиль обновлен');
    }
    document.getElementById('profileView').style.display = 'block';
    document.getElementById('profileEdit').style.display = 'none';
});

// ===================СЛУШАТЕЛЬ АВТОРИЗАЦИИ ===================
firebase.auth().onAuthStateChanged(async (user) => {
    const bottomNav = document.getElementById('bottomNav');
    try {
        if (user) {
            try { await user.reload(); } catch (e) { console.warn('Ошибка перезагрузки пользователя:', e); }
            if (!user.emailVerified) {
                bottomNav.style.display = 'none';
                document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
                document.getElementById('page-login').classList.add('active');
                clearAuthFields();
                return;
            }
            const isPageLoaded = document.querySelector('#page-workouts.active') || document.querySelector('#page-stats.active') || document.querySelector('#page-profile.active');
            if (isPageLoaded) return;
            
            // Показываем страницу загрузки, скрываем навигацию
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById('page-loading').classList.add('active');
            bottomNav.style.display = 'none';
            
            // Загружаем данные
            const [profileResult, workoutsResult] = await Promise.all([
                getUserProfile(user.uid),
                getUserWorkoutsFromFirestore(user.uid)
            ]);
            
            let profile = null;
            if (profileResult.success) {
                profile = profileResult.data;
            } else {
                const newProfile = {
                    displayName: user.displayName || user.email?.split('@')[0] || 'Пользователь',
                    avatar: 'bodybuilding',
                    level: 1,
                    totalXp: 0,
                    createdAt: new Date().toISOString(),
                    tutorialCompleted: false
                };
                await saveUserProfile(user.uid, newProfile);
                profile = newProfile;
            }
            
            clearAuthFields();
            
            // Загружаем профиль и остальные данные в фоне (они уже будут готовы при переходе)
            await loadProfile();
            await loadStats();
            renderMyWorkouts();
            await renderCalendar(currentMonth, currentYear);
            updatePremiumUI();
            
            // Сохраняем флаг, нужно ли обучение
            window._tutorialNeeded = profile && profile.tutorialCompleted === false;
            
            // Страница загрузки остаётся активной, кнопка "Начать тренироваться" вызовет enterApp()
            // Навигация скрыта до нажатия кнопки
            
            if (typeof syncPendingWorkouts === 'function') syncPendingWorkouts();
        } else {
            bottomNav.style.display = 'none';
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById('page-hero').classList.add('active');
            clearAuthFields();
        }
    } catch (error) {
        console.error('Ошибка в onAuthStateChanged:', error);
        bottomNav.style.display = 'none';
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('page-login').classList.add('active');
        clearAuthFields();
    }
});

// ===================ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ ===================
function showLogin() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-login').classList.add('active');
    clearAuthFields(); // ← ДОБАВИТЬ
}

function showRegister() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-register').classList.add('active');
    clearAuthFields(); // ← ДОБАВИТЬ
}

function showHero() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-hero').classList.add('active');
    clearAuthFields(); // ← ДОБАВИТЬ
}

// ===================РЕГИСТРАЦИЯ ===================
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
        if (!name) { nameInput.classList.add('error'); nameError.textContent = 'Введите имя'; hasError = true; } else { nameInput.classList.remove('error'); nameError.textContent = ''; }
        if (!email) { emailInput.classList.add('error'); emailError.textContent = 'Введите почту'; hasError = true; } else { emailInput.classList.remove('error'); emailError.textContent = ''; }
        if (!password) { passwordInput.classList.add('error'); passwordError.textContent = 'Введите пароль'; hasError = true; } else if (password.length < 6) { passwordInput.classList.add('error'); passwordError.textContent = 'Пароль минимум 6 символов'; hasError = true; } else { passwordInput.classList.remove('error'); passwordError.textContent = ''; }
        if (hasError) return;
        btn.textContent = 'Регистрация...';
        btn.disabled = true;
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await result.user.updateProfile({ displayName: name });
            await saveUserProfile(result.user.uid, {
                displayName: name,
                email: email,
                avatar: 'bodybuilding',
                level: 1,
                totalXp: 0,
                createdAt: new Date().toISOString(),
                tutorialCompleted: false
            });
            await result.user.sendEmailVerification();
            showToast('📧 Подтвердите почту! Письмо отправлено на ' + email);
        } catch (error) {
            let message = 'Ошибка регистрации';
            if (error.code === 'auth/email-already-in-use') { message = 'Почта уже используется'; emailInput.classList.add('error'); emailError.textContent = message; }
            else if (error.code === 'auth/weak-password') { message = 'Пароль минимум 6 символов'; passwordInput.classList.add('error'); passwordError.textContent = message; }
            else if (error.code === 'auth/invalid-email') { message = 'Неверный формат почты'; emailInput.classList.add('error'); emailError.textContent = message; }
            else if (error.code === 'auth/network-request-failed') { message = 'Проверьте интернет-соединение'; passwordInput.classList.add('error'); passwordError.textContent = message; }
            showToast('❌ Ошибка: ' + error.message);
        } finally {
            btn.textContent = 'Зарегистрироваться';
            btn.disabled = false;
        }
    });
    nameInput.addEventListener('input', () => { nameInput.classList.remove('error'); nameError.textContent = ''; });
    emailInput.addEventListener('input', () => { emailInput.classList.remove('error'); emailError.textContent = ''; });
    passwordInput.addEventListener('input', () => { passwordInput.classList.remove('error'); passwordError.textContent = ''; });
}

// ===================ВХОД ===================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    const emailError = document.getElementById('loginEmailError');
    const passwordError = document.getElementById('loginPasswordError');
    let isSubmitting = false;
    emailInput.addEventListener('input', () => { emailInput.classList.remove('error'); emailError.textContent = ''; });
    passwordInput.addEventListener('input', () => { passwordInput.classList.remove('error'); passwordError.textContent = ''; });
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const btn = loginForm.querySelector('.btn-primary');
        let hasError = false;
        if (!email) { emailInput.classList.add('error'); emailError.textContent = 'Введите почту'; hasError = true; } else { emailInput.classList.remove('error'); emailError.textContent = ''; }
        if (!password) { passwordInput.classList.add('error'); passwordError.textContent = 'Введите пароль'; hasError = true; } else { passwordInput.classList.remove('error'); passwordError.textContent = ''; }
        if (hasError) return;
        isSubmitting = true;
        btn.textContent = 'Вход...';
        btn.disabled = true;
        isLoggingIn = true;
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            if (!result.user.emailVerified) {
                showToast('⚠️ Подтвердите почту! Письмо отправлено на ' + email);
                btn.textContent = 'Войти в аккаунт';
                btn.disabled = false;
                isLoggingIn = false;
                isSubmitting = false;
                return;
            }
            btn.textContent = 'Войти в аккаунт';
            btn.disabled = false;
            isLoggingIn = false;
            isSubmitting = false;
            window.location.reload();
        } catch (error) {
            let message = '';
            
            // Сначала проверяем, существует ли пользователь с таким email
            if (error.code === 'auth/invalid-credential' || 
                error.code === 'auth/user-not-found' || 
                error.code === 'auth/wrong-password') {
                
                // Проверяем, существует ли аккаунт с таким email
                try {
                    const methods = await firebase.auth().fetchSignInMethodsForEmail(email);
                    if (methods.length === 0) {
                        message = 'Мы не нашли аккаунт, привязанный к этой почте';
                    } else {
                        message = 'Неверный пароль. Попробуйте ещё раз';
                    }
                } catch (fetchError) {
                    // Если не удалось проверить, показываем общее сообщение
                    message = 'Неверный email или пароль. Проверьте введённые данные';
                }
            } else if (error.code === 'auth/invalid-email') {
                message = 'Неверный формат email. Проверьте ввод';
            } else if (error.code === 'auth/too-many-requests') {
                message = 'Слишком много попыток. Подождите 5 минут и попробуйте снова';
            } else if (error.code === 'auth/network-request-failed') {
                message = 'Проверьте интернет-соединение';
            } else if (error.code === 'auth/user-disabled') {
                message = 'Этот аккаунт был заблокирован';
            } else if (error.code === 'auth/internal-error') {
                message = 'Внутренняя ошибка сервера. Попробуйте позже';
            } else {
                message = 'Ошибка входа. Проверьте данные и попробуйте снова';
            }
            
            passwordInput.classList.add('error');
            passwordError.textContent = message;
            
            btn.textContent = 'Войти в аккаунт';
            btn.disabled = false;
            isLoggingIn = false;
            isSubmitting = false;
        }
    });
}

// ===================ОЧИСТКА ПОЛЕЙ ВВОДА ===================
function clearAuthFields() {
    // Очистка полей входа
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const loginEmailError = document.getElementById('loginEmailError');
    const loginPasswordError = document.getElementById('loginPasswordError');
    
    if (loginEmail) loginEmail.value = '';
    if (loginPassword) loginPassword.value = '';
    if (loginEmailError) loginEmailError.textContent = '';
    if (loginPasswordError) loginPasswordError.textContent = '';
    if (loginEmail) loginEmail.classList.remove('error');
    if (loginPassword) loginPassword.classList.remove('error');
    
    // Очистка полей регистрации
    const regName = document.getElementById('regName');
    const regEmail = document.getElementById('regEmail');
    const regPassword = document.getElementById('regPassword');
    const regNameError = document.getElementById('regNameError');
    const regEmailError = document.getElementById('regEmailError');
    const regPasswordError = document.getElementById('regPasswordError');
    
    if (regName) regName.value = '';
    if (regEmail) regEmail.value = '';
    if (regPassword) regPassword.value = '';
    if (regNameError) regNameError.textContent = '';
    if (regEmailError) regEmailError.textContent = '';
    if (regPasswordError) regPasswordError.textContent = '';
    if (regName) regName.classList.remove('error');
    if (regEmail) regEmail.classList.remove('error');
    if (regPassword) regPassword.classList.remove('error');
}

// ===================ВЫХОД ===================
async function logout() {
showConfirmModal(
    'Выйти из аккаунта?',
    'Вы будете перенаправлены на страницу входа.',
    function() {
        firebase.auth().signOut();
    },
    'Выйти'
);
}

function enterApp() {
    if (!navigator.onLine) {
        showOfflineModal();
        return;
    }
    // Показываем навигацию
    document.getElementById('bottomNav').style.display = 'block';
    // Переключаем на страницу тренировок
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-workouts').classList.add('active');
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === 'workouts');
    });
    
    // Проверяем, нужно ли обучение
    if (window._tutorialNeeded) {
        // НЕ скрываем навигацию — она остаётся видимой
        setTimeout(() => startTutorial(), 1000);
    }
}

// ===================ПОВТОРНАЯ ОТПРАВКА ПИСЬМА ===================
async function resendVerification() {
    const user = firebase.auth().currentUser;
    if (!user) { showToast('❌ Вы не авторизованы'); return; }
    if (user.emailVerified) { showToast('✅ Почта уже подтверждена'); return; }
    try {
        await user.sendEmailVerification();
        showToast('📧 Письмо отправлено на ' + user.email);
    } catch (error) {
        if (error.code === 'auth/too-many-requests') {
            showToast('⚠️ Слишком много попыток. Подождите несколько минут.');
        } else {
            showToast('❌ Ошибка: ' + error.message);
        }
    }
}

// ===================ДРУЗЬЯ ===================
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

async function searchUsers(query) {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    if (!query || query.trim().length === 0) return { success: true, data: [] };
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
    if (status !== 'none') return { success: false, error: 'Заявка уже отправлена или вы уже друзья' };
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
            requests.push({ id: doc.id, from: data.from, fromUser: fromUser.success ? fromUser.data : null, ...data });
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
        await firebase.firestore().collection('friendRequests').doc(requestId).update({ status: 'accepted' });
        await firebase.firestore().collection('users').doc(user.uid).update({ friends: firebase.firestore.FieldValue.arrayUnion(fromUserId) });
        await firebase.firestore().collection('users').doc(fromUserId).update({ friends: firebase.firestore.FieldValue.arrayUnion(user.uid) });
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
        if (friendIds.length === 0) return { success: true, data: [] };
        const friends = [];
        for (const id of friendIds) {
            const result = await getUserProfile(id);
            if (result.success) friends.push({ id, ...result.data });
        }
        return { success: true, data: friends };
    } catch (error) {
        console.error('Ошибка получения друзей:', error);
        return { success: false, error: error.message };
    }
}

// ===================РЕНДЕР ДРУЗЕЙ В ПРОФИЛЕ ===================
async function renderFriendsInProfile() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('searchResults');
    const requestsDiv = document.getElementById('friendRequests');
    const friendsDiv = document.getElementById('friendsList');
    if (searchBtn) {
        searchBtn.onclick = async () => {
            const query = searchInput.value.trim();
            resultsDiv.innerHTML = '';
            if (!query) return;
            const result = await searchUsers(query);
            if (!result.success) { resultsDiv.innerHTML = '<p style="color:var(--slate);font-size:0.9rem;">Ошибка поиска</p>'; return; }
            if (result.data.length === 0) { resultsDiv.innerHTML = '<p style="color:var(--slate);font-size:0.9rem;">Пользователи не найдены</p>'; return; }
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
                return `<div class="friend-result-item"><div class="friend-avatar">${initial}</div><div class="friend-result-info"><strong>${u.displayName || 'Пользователь'}</strong><span>${u.email || ''}</span></div>${buttonHtml}</div>`;
            }).join('');
        };
        searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') searchBtn.click(); });
    }
    // Заявки
    const requests = await getFriendRequests();
    let requestsHtml = `<p class="friends-subtitle">Заявки</p>`;
    if (requests.success && requests.data.length > 0) {
        requestsHtml += requests.data.map(r => {
            const fromUser = r.fromUser || {};
            const initial = (fromUser.displayName || 'П')[0].toUpperCase();
            return `<div class="friend-request-item"><div class="friend-avatar">${initial}</div><div class="friend-result-info"><strong>${fromUser.displayName || 'Пользователь'}</strong><span>${fromUser.email || ''}</span></div><div><button class="btn-primary btn-sm" onclick="acceptFriend('${r.id}','${r.from}')">Принять</button><button class="btn-secondary btn-sm" onclick="rejectFriend('${r.id}')">Отклонить</button></div></div>`;
        }).join('');
    } else {
        requestsHtml += '<p style="color:var(--slate);font-size:0.9rem;">Нет заявок</p>';
    }
    requestsDiv.innerHTML = requestsHtml;
    // Друзья
    const friends = await getFriendsList();
    let friendsHtml = `<p class="friends-subtitle">Друзья</p>`;
    if (friends.success && friends.data.length > 0) {
        friendsHtml += friends.data.map(f => {
            const initial = (f.displayName || 'П')[0].toUpperCase();
            const level = getCurrentLevel(f.totalXp || 0).id;
            return `<div class="friend-item"><div class="friend-avatar">${initial}</div><div class="friend-info"><strong>${f.displayName || 'Пользователь'}</strong><span>Уровень ${level} · ${(f.totalXp || 0).toFixed(1)} XP</span></div><button class="friend-delete-btn" onclick="removeFriend('${f.id}')" title="Удалить друга"><i class="fa-regular fa-trash-can"></i></button></div>`;
        }).join('');
    } else {
        friendsHtml += '<p style="color:var(--slate);font-size:0.9rem;">У вас пока нет друзей</p>';
    }
    friendsDiv.innerHTML = friendsHtml;
}

// ===================ДРУЗЬЯ - ГЛОБАЛЬНЫЕ КНОПКИ ===================
window.addFriend = async function(userId, btnElement) {
    if (btnElement) { btnElement.textContent = 'Отправка...'; btnElement.disabled = true; btnElement.style.opacity = '0.6'; }
    const result = await sendFriendRequest(userId);
    if (!result.success) {
        if (btnElement) { btnElement.textContent = 'Добавить'; btnElement.disabled = false; btnElement.style.opacity = '1'; }
        console.error('Ошибка:', result.error);
        const resultsDiv = document.getElementById('searchResults');
        resultsDiv.innerHTML += `<p style="color:#EF4444;font-size:0.8rem;">${result.error}</p>`;
        return;
    }
    if (btnElement) { btnElement.textContent = 'Ждем ответа'; btnElement.disabled = true; btnElement.style.opacity = '0.6'; }
    await renderFriendsInProfile();
};

window.acceptFriend = async function(requestId, fromUserId) {
    const result = await acceptFriendRequest(requestId, fromUserId);
    if (result.success) await renderFriendsInProfile();
    else console.error('Ошибка принятия:', result.error);
};

window.rejectFriend = async function(requestId) {
    const result = await rejectFriendRequest(requestId);
    if (result.success) await renderFriendsInProfile();
    else console.error('Ошибка отклонения:', result.error);
};

window.removeFriend = async function(friendId) {
    showConfirmModal(
    'Удалить друга?',
    'Вы больше не будете видеть его в списке друзей.',
    function() {
        // Код удаления друга
    },
    'Удалить'
);
    const user = await getFirebaseUser();
    if (!user) { showToast('❌ Пользователь не авторизован'); return; }
    try {
        const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
        const currentFriends = userDoc.data()?.friends || [];
        const updatedFriends = currentFriends.filter(id => id !== friendId);
        await firebase.firestore().collection('users').doc(user.uid).update({ friends: updatedFriends });
        const friendDoc = await firebase.firestore().collection('users').doc(friendId).get();
        const friendFriends = friendDoc.data()?.friends || [];
        const updatedFriendFriends = friendFriends.filter(id => id !== user.uid);
        await firebase.firestore().collection('users').doc(friendId).update({ friends: updatedFriendFriends });
        await renderFriendsInProfile();
    } catch (error) {
        console.error('Ошибка удаления друга:', error);
        showToast('❌ Ошибка при удалении друга');
    }
};

// ===================ВСЕ УПРАЖНЕНИЯ ДЛЯ СПИСКА ===================
function getAllExercises() {
    const all = [];
    for (const category in exercisesData) {
        if (typeof exercisesData[category] === 'object' && !Array.isArray(exercisesData[category])) {
            for (const subCategory in exercisesData[category]) {
                if (exercisesData[category][subCategory]._premium) continue;
                if (typeof exercisesData[category][subCategory] === 'object' && !Array.isArray(exercisesData[category][subCategory])) {
                    for (const level in exercisesData[category][subCategory]) {
                        if (Array.isArray(exercisesData[category][subCategory][level])) {
                            exercisesData[category][subCategory][level].forEach(ex => {
                                const categoryName = subCategory;
                                if (!all.some(e => e.name === ex.name && e.category === categoryName)) {
                                    all.push({ ...ex, category: categoryName, level: level });
                                }
                            });
                        }
                    }
                }
            }
        }
    }
    return all;
}

let allExercisesList = [];
let currentCategoryFilter = 'all';
let currentSearchQuery = '';

function openExerciseList() {
    closeModal('addExerciseModal');
    allExercisesList = getAllExercises();
    currentCategoryFilter = 'all';
    currentSearchQuery = '';
    document.getElementById('exerciseSearchInput').value = '';
    window.navigateTo('exercise-list');
}

// ===================РЕНДЕР СТРАНИЦЫ СПИСКА УПРАЖНЕНИЙ ===================
function renderExerciseListPage() {
    document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(el => {
        el.classList.toggle('active', el.dataset.category === currentCategoryFilter);
    });
    document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(el => {
        el.onclick = function() {
            document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(e => e.classList.remove('active'));
            this.classList.add('active');
            currentCategoryFilter = this.dataset.category;
            renderExerciseListPageContent();
        };
    });
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
        'Руки': 'bodybuilding', 'Пресс': 'press', 'Грудь': 'breast',
        'Спина': 'back', 'Ноги': 'legs', 'Плечи': 'shoulder',
        'Кардио': 'cardio', 'Растяжка': 'stretching', 'Зарядка': 'charging',
        'Пилатес': 'Pilates', 'Всё тело': 'WholeBody'
    };
    container.innerHTML = filtered.map(ex => {
        const icon = icons[ex.category] || 'bodybuilding';
        return `<div class="level-card" onclick="addExerciseFromList('${ex.name}', ${ex.sets}, '${ex.reps}')" style="cursor:pointer; margin-bottom:0.8rem;">
            <div class="level-icon" style="width:44px;height:44px;min-width:44px;background:var(--accent-light);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                <img src="images/${icon}.png" style="width:28px;height:28px;object-fit:contain;">
            </div>
            <div class="level-info"><h3>${ex.name}</h3><p>${formatSets(ex.sets)} × ${formatReps(ex.reps)}</p></div>
        </div>`;
    }).join('');
}

// ===================ДОБАВЛЕНИЕ УПРАЖНЕНИЯ ===================
function openAddExerciseModal() {
    const maxExercises = getMaxExercisesForLevel(editLevel, editIsCustom);
    if (editExercises.length >= maxExercises) {
        showToast(`⚠️ Вы достигли максимума упражнений в этой категории (${maxExercises})`);
        return;
    }
    openModal('addExerciseModal');
}

function closeAddExerciseModal() {
    closeModal('addExerciseModal');
}

function addExerciseFromList(name, sets, reps) {
    const repsStr = String(reps || '');
    const isSeconds = repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд');
    const repsValue = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 0;
    const repsDisplay = isSeconds ? `${repsValue} секунд` : `${repsValue}`;
    editExercises.push({ name: name, sets: parseInt(sets) || 3, reps: repsDisplay });
    showToast('✅ Упражнение добавлено');
    
    // Сохраняем в localStorage только для личных или новой тренировки
    if (editIsCustom || editWorkoutId === 'new') {
        const nameInput = document.getElementById('editWorkoutName');
        if (nameInput) localStorage.setItem('temp_edit_name', nameInput.value);
        localStorage.setItem('temp_edit_exercises', JSON.stringify(editExercises));
        localStorage.setItem('temp_edit_category', editCategory);
        localStorage.setItem('temp_edit_level', editLevel);
        localStorage.setItem('temp_edit_isCustom', editIsCustom);
        localStorage.setItem('temp_edit_id', editWorkoutId || '');
    }
    
    window.navigateTo('workout-edit', {
        category: editCategory,
        isCustom: editIsCustom,
        id: editWorkoutId,
        level: editLevel,
        exercises: editExercises
    });
}

// ===================МОДАЛЬНОЕ ОКНО "СОЗДАТЬ УПРАЖНЕНИЕ" ===================
function openCreateExerciseModal() {
    closeModal('addExerciseModal');
    closeModal('exerciseModal');
    document.getElementById('createExerciseName').value = 'Новое упражнение';
    document.getElementById('createExerciseSets').value = 3;
    document.getElementById('createExerciseReps').value = 12;
    document.querySelectorAll('#createExerciseModal .create-toggle-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('#createExerciseModal .create-toggle-btn[data-type="reps"]')?.classList.add('active');
    document.getElementById('createSecondLabel').textContent = 'Повторения';
    document.getElementById('createExerciseError').style.display = 'none';
    document.querySelectorAll('#createExerciseModal input').forEach(inp => inp.classList.remove('error'));
    window._isNewExercise = true;
    window._tempExerciseIndex = editExercises.length;
    editExercises.push({ name: 'Новое упражнение', sets: 3, reps: 12 });
    renderEditExercises();
    openModal('createExerciseModal');
}

document.querySelectorAll('#createExerciseModal .create-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('#createExerciseModal .create-toggle-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const label = document.getElementById('createSecondLabel');
        if (this.dataset.type === 'reps') {
            label.textContent = 'Повторения';
        } else {
            label.textContent = 'Секунды';
        }
        document.querySelectorAll('#createExerciseModal input').forEach(inp => inp.classList.remove('error'));
        document.getElementById('createExerciseError').style.display = 'none';
    });
});

document.querySelectorAll('#createExerciseModal input').forEach(inp => {
    inp.addEventListener('input', function() {
        this.classList.remove('error');
        document.getElementById('createExerciseError').style.display = 'none';
    });
});

document.getElementById('createExerciseCancelBtn')?.addEventListener('click', function() {
    closeModal('createExerciseModal');
    if (window._isNewExercise && window._tempExerciseIndex !== null) {
        editExercises.splice(window._tempExerciseIndex, 1);
        renderEditExercises();
        window._tempExerciseIndex = null;
        window._isNewExercise = false;
    }
});

document.getElementById('createExerciseSaveBtn')?.addEventListener('click', function() {
    const name = document.getElementById('createExerciseName').value.trim();
    const sets = document.getElementById('createExerciseSets').value.trim();
    const reps = document.getElementById('createExerciseReps').value.trim();
    const nameInput = document.getElementById('createExerciseName');
    const setsInput = document.getElementById('createExerciseSets');
    const repsInput = document.getElementById('createExerciseReps');
    const errorEl = document.getElementById('createExerciseError');
    [nameInput, setsInput, repsInput].forEach(inp => inp.classList.remove('error'));
    errorEl.style.display = 'none';
    errorEl.textContent = '';
    let hasError = false;
    let errorMessage = '';
    if (!name) { nameInput.classList.add('error'); hasError = true; errorMessage = 'Введите название упражнения'; }
    if (!sets || parseInt(sets) < 1 || parseInt(sets) > 5) { setsInput.classList.add('error'); hasError = true; if (!errorMessage) errorMessage = 'Подходы должны быть от 1 до 5'; }
    if (!reps || parseInt(reps) < 2 || parseInt(reps) > 60) { repsInput.classList.add('error'); hasError = true; if (!errorMessage) errorMessage = 'Повторения должны быть от 2 до 60'; }
    if (hasError) { showToast('⚠️ ' + errorMessage); return; }
    const isSeconds = document.querySelector('#createExerciseModal .create-toggle-btn.active')?.dataset.type === 'seconds';
    const repsDisplay = isSeconds ? `${reps} секунд` : `${reps}`;
    if (window._tempExerciseIndex !== null) {
        editExercises[window._tempExerciseIndex] = { name: name, sets: parseInt(sets), reps: repsDisplay };
    } else {
        editExercises.push({ name: name, sets: parseInt(sets), reps: repsDisplay });
        window._isNewExercise = true;
    }
    closeModal('createExerciseModal');
    renderEditExercises();
    showToast('✅ Упражнение создано');
    window._tempExerciseIndex = null;
    window._isNewExercise = false;
});

// ===================ОФЛАЙН МОДАЛКА ===================
function showOfflineModal() {
    openModal('offlineModal');
}

function closeOfflineModal() {
    closeModal('offlineModal');
    const loadingPage = document.getElementById('page-loading');
    if (loadingPage && loadingPage.classList.contains('active')) {
        enterApp(); // теперь enterApp делает всё правильно
    }
}

window.addEventListener('offline', function() {
    const loadingPage = document.getElementById('page-loading');
    if (loadingPage && loadingPage.classList.contains('active')) return;
    const isInApp = document.getElementById('page-workouts').classList.contains('active') ||
                    document.getElementById('page-stats').classList.contains('active') ||
                    document.getElementById('page-profile').classList.contains('active');
    if (!isInApp) return;
    if (!isOfflineModalShown) {
        showOfflineModal();
        isOfflineModalShown = true;
    }
});

window.addEventListener('online', function() {
    closeOfflineModal();
    isOfflineModalShown = false;
    if (typeof syncPendingWorkouts === 'function') syncPendingWorkouts();
});

// ===================МИРОВОЙ РЕЙТИНГ ===================
async function loadWorldLeaderboard() {
    const container = document.getElementById('worldLeaderboard');
    if (!container) return;
    container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Загрузка рейтинга...</div>';
    try {
        const user = await getFirebaseUser();
        if (!user) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Авторизуйтесь, чтобы увидеть рейтинг</div>';
            return;
        }
        const snapshot = await firebase.firestore()
            .collection('users')
            .orderBy('totalXp', 'desc')
            .limit(30)
            .get();
        const users = [];
        snapshot.forEach(doc => { users.push({ id: doc.id, ...doc.data() }); });
        if (users.length === 0) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Пока нет пользователей</div>';
            return;
        }
        container.innerHTML = users.map((userData, index) => {
            const position = index + 1;
            const level = getCurrentLevel(userData.totalXp || 0);
            const date = userData.createdAt ? new Date(userData.createdAt).toLocaleDateString('ru-RU') : '—';
            const isCurrentUser = userData.id === user.uid;
            return `<div class="leaderboard-item ${isCurrentUser ? 'current-user' : ''}">
                <div class="leaderboard-position">${position}</div>
                <div class="leaderboard-info">
                    <div class="leaderboard-name">${userData.displayName || 'Пользователь'}</div>
                    <div class="leaderboard-details"><span>Уровень ${level.id}</span><span>·</span><span><i class="fa-regular fa-calendar"></i> ${date}</span></div>
                </div>
                <div class="leaderboard-xp">${(userData.totalXp || 0).toFixed(1)} XP</div>
            </div>`;
        }).join('');
    } catch (error) {
        console.error('Ошибка загрузки рейтинга:', error);
        let message = 'Ошибка загрузки. Проверьте интернет.';
        if (error.code === 'failed-precondition' && error.message.includes('index')) {
            message = 'Для рейтинга требуется создать индекс в Firebase. Обратитесь к администратору.';
        }
        container.innerHTML = `<div style="text-align:center;color:#EF4444;padding:2rem 0;">${message}</div>`;
    }
}

// ===================PULL-TO-REFRESH ===================
let pullStartY = 0, pullOffset = 0, isPulling = false, pullRefreshEnabled = true, pullContainer = null;

function initPullToRefresh() {
    const containers = document.querySelectorAll('.dashboard-container, .profile-container, .main-content');
    containers.forEach(container => {
        container.addEventListener('touchstart', function(e) {
            if (this.scrollTop === 0 && window.scrollY === 0) {
                pullStartY = e.touches[0].clientY;
                isPulling = true;
                pullContainer = this;
            }
        }, { passive: true });
        container.addEventListener('touchmove', function(e) {
            if (!isPulling) return;
            const currentY = e.touches[0].clientY;
            pullOffset = currentY - pullStartY;
            if (pullOffset > 50 && pullRefreshEnabled) {
                e.preventDefault();
                document.getElementById('pullToRefresh').style.display = 'block';
            }
        }, { passive: false });
        container.addEventListener('touchend', function(e) {
            if (!isPulling) return;
            if (pullOffset > 100 && pullRefreshEnabled) {
                performRefresh();
            } else {
                document.getElementById('pullToRefresh').style.display = 'none';
            }
            isPulling = false;
            pullOffset = 0;
            pullContainer = null;
        }, { passive: true });
    });
}

async function performRefresh() {
    pullRefreshEnabled = false;
    document.getElementById('pullToRefresh').style.display = 'block';
    try {
        const user = await getFirebaseUser();
        if (user) {
            await loadProfile();
            await loadStats();
            renderMyWorkouts();
            await renderCalendar(currentMonth, currentYear);
            if (document.getElementById('stats-world')?.classList.contains('active')) {
                await loadWorldLeaderboard();
            }
            if (typeof syncPendingWorkouts === 'function') await syncPendingWorkouts();
            showToast('✅ Данные обновлены');
        }
    } catch (error) {
        console.error('Ошибка обновления:', error);
        showToast('❌ Ошибка обновления');
    } finally {
        document.getElementById('pullToRefresh').style.display = 'none';
        pullRefreshEnabled = true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initPullToRefresh();
});

// ===================ТОСТ ===================
function showToast(message, duration = 3000) {
    const oldToast = document.getElementById('toast');
    if (oldToast) oldToast.remove();
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ===================ТУТОРИАЛ ===================
const TUTORIAL_KEY = 'tutorialCompleted';

function isTutorialCompleted() {
    return localStorage.getItem(TUTORIAL_KEY) === 'true';
}

function setTutorialCompleted() {
    localStorage.setItem(TUTORIAL_KEY, 'true');
}

let currentTutorialStep = 0;
let tutorialActive = false;

function startTutorial() {
    if (document.getElementById('tutorialOverlay')) return;
    tutorialActive = true;
    document.addEventListener('click', blockClicksDuringTutorial, true);
    showTutorialStep(0);
}

function blockClicksDuringTutorial(e) {
    if (!tutorialActive) return;
    const tooltip = document.querySelector('.tutorial-tooltip');
    if (tooltip && tooltip.contains(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function scrollToElement(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = rect.top + scrollTop - 100;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}

function createTutorialOverlay(step) {
    const overlay = document.createElement('div');
    overlay.id = 'tutorialOverlay';
    overlay.className = 'tutorial-overlay';
    document.body.appendChild(overlay);
    let highlightElements = [];
    if (step.highlight) {
        if (Array.isArray(step.highlight)) {
            const elements = [];
            step.highlight.forEach(sel => {
                if (sel.startsWith('.')) {
                    document.querySelectorAll(sel).forEach(el => elements.push(el));
                } else {
                    const el = document.querySelector(sel);
                    if (el) elements.push(el);
                }
            });
            highlightElements = [...new Set(elements)];
        } else {
            const elements = document.querySelectorAll(step.highlight);
            highlightElements = Array.from(elements);
        }
        highlightElements.forEach(el => el.classList.add('tutorial-highlight'));
        setTimeout(() => {
            highlightElements.forEach(el => {
                el.classList.add('active');
                setTimeout(() => el.classList.add('pulsing'), 100);
            });
        }, 50);
        overlay._highlightElements = highlightElements;
        if (highlightElements.length > 0) {
            setTimeout(() => scrollToElement(highlightElements[0]), 300);
        }
    }
    setTimeout(() => overlay.classList.add('active'), 50);
    let dotsHtml = '';
    for (let i = 0; i < tutorialSteps.length; i++) {
        dotsHtml += `<div class="dot ${i === currentTutorialStep ? 'active' : ''}"></div>`;
    }
    const isLast = step.isLast || false;
    const buttonText = isLast ? 'Начать тренироваться' : 'Понятно';
    const tooltip = document.createElement('div');
    tooltip.className = 'tutorial-tooltip';
    tooltip.id = 'tutorialTooltip';
    if (step.id === 1) tooltip.style.bottom = '100px';
    else tooltip.style.bottom = '50px';
    tooltip.innerHTML = `
        <div class="tutorial-dots">${dotsHtml}</div>
        <p>${step.text}</p>
        <div class="tutorial-buttons">
            <button class="btn-primary" onclick="nextTutorialStep()" style="padding:0.6rem 2rem; width:auto;">${buttonText}</button>
        </div>
    `;
    document.body.appendChild(tooltip);
    setTimeout(() => tooltip.classList.add('active'), 200);
}

function removeTutorialOverlay() {
    const overlay = document.getElementById('tutorialOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        if (overlay._highlightElements) {
            overlay._highlightElements.forEach(el => {
                el.classList.remove('active', 'pulsing');
                setTimeout(() => el.classList.remove('tutorial-highlight'), 400);
            });
        }
        setTimeout(() => overlay.remove(), 500);
    }
    const tooltip = document.querySelector('.tutorial-tooltip');
    if (tooltip) {
        tooltip.classList.remove('active');
        setTimeout(() => tooltip.remove(), 400);
    }
}

function showTutorialStep(index) {
    if (index >= tutorialSteps.length) {
        finishTutorial();
        return;
    }
    const step = tutorialSteps[index];
    currentTutorialStep = index;
    if (step.page) window.navigateTo(step.page);
    if (step.action) setTimeout(() => step.action(), 600);
    setTimeout(() => createTutorialOverlay(step), 800);
}

function nextTutorialStep() {
    const nextIndex = currentTutorialStep + 1;
    removeTutorialOverlay();
    setTimeout(() => showTutorialStep(nextIndex), 400);
}

async function finishTutorial() {
    removeTutorialOverlay();
    setTutorialCompleted();
    const user = await getFirebaseUser();
    if (user) await updateUserProfile(user.uid, { tutorialCompleted: true });
    tutorialActive = false;
    document.removeEventListener('click', blockClicksDuringTutorial, true);
    // Навигация уже видна, ничего не меняем
}

const tutorialSteps = [
    { id: 1, page: 'workouts', highlight: '#bottomNav', text: 'Это главное меню.\nЗдесь есть три раздела: статистика, тренировки и профиль.' },
    { id: 2, page: 'stats', highlight: ['#page-stats .tab-btn[data-tab="personal"]', '#page-stats .tab-btn[data-tab="world"]'], text: 'Статистика делится на два раздела:\nмировая и личная.', action: () => { switchStatsTab('personal'); } },
    { id: 3, page: 'stats', highlight: ['#page-stats .tab-btn[data-tab="personal"]', '.stat-big-card'], text: 'В личной статистике хранятся ваши данные.\nТакие как общее количество тренировок, минуты, упражнения, статистика упражнений по группам мышц, тренировки по категориям, календарь тренировок и история тренировок.' },
    { id: 4, page: 'stats', highlight: ['#page-stats .tab-btn[data-tab="world"]', '#worldLeaderboard'], text: 'В мировой статистике находится\nрейтинг пользователей.', action: () => { switchStatsTab('world'); } },
    { id: 5, page: 'workouts', highlight: ['#page-workouts .tab-btn[data-tab="ready"]', '#page-workouts .tab-btn[data-tab="my"]'], text: 'Страница тренировок делится на два раздела:\nготовые и личные.' },
    { id: 6, page: 'workouts', highlight: ['#page-workouts .tab-btn[data-tab="ready"]', '.category-card[data-category="Руки"]'], text: 'Здесь уже собраны готовые тренировки\nкаждая из которых разделена на 3 уровня сложности.' },
    { id: 7, page: 'workouts', highlight: ['#page-workouts .tab-btn[data-tab="my"]', '.custom-workout .btn-primary'], text: 'Здесь вы можете создавать свои собственные тренировки.', action: () => { activeWorkoutsTab = 'my'; applyWorkoutsTab('my'); } },
    { id: 8, page: 'profile', highlight: '.profile-block', text: 'Это ваш профиль :)' },
    { id: 9, page: 'profile', highlight: '.level-block', text: 'Это система уровней.\nПо ней вы будете соревноваться с друзьями и другими пользователями\nЧтобы повысить уровень, нужно тренироваться.' },
    { id: 10, page: 'profile', highlight: '.friends-block', text: 'Здесь вы можете найти своих друзей.' },
    { id: 11, page: 'profile', highlight: '.settings-block-main', text: 'Это дополнительные настройки.\nЗдесь вы можете подключить PREMIUM, изменить акцентный цвет, и пройти это обучение еще раз.' },
    { id: 12, page: 'workouts', highlight: null, text: 'Пара важных правил!\nОтмечайте только те упражнения, которые действительно выполнили.\nРегулируйте количество подходов и повторений под себя.\nОт вашей честности зависит точность расчёта XP.\nТренируйтесь с умом и достигайте своих целей!', isLast: true, action: () => { activeWorkoutsTab = 'ready'; applyWorkoutsTab('ready'); } }
];

// ===================PREMIUM ===================
const PREMIUM_KEY = 'sportapp_premium';

function hasPremium() {
    return localStorage.getItem(PREMIUM_KEY) === 'true';
}

function openPremiumModal() {
    openModal('premiumModal');
}

function closePremiumModal() {
    closeModal('premiumModal');
}

function openPremiumActiveModal() {
    openModal('premiumActiveModal');
}

function closePremiumActiveModal() {
    closeModal('premiumActiveModal');
}

function buyPremium() {
    localStorage.setItem(PREMIUM_KEY, 'true');
    closePremiumModal();
    updatePremiumUI();
    showToast('👑 Поздравляем! PREMIUM активирован!');
    setTimeout(() => openPremiumActiveModal(), 300);
}

function updatePremiumUI() {
    const premium = hasPremium();
    const statusEl = document.getElementById('premiumStatus');
    if (statusEl) {
        statusEl.textContent = premium ? 'Открыты все особые тренировки' : 'Откройте все особые тренировки';
    }
    const icon = document.querySelector('.settings-item .fa-crown');
    if (icon) {
        icon.className = 'fa-solid fa-crown';
        icon.style.color = '#F7C948';
    }
    document.querySelectorAll('.category-card[data-premium="true"]').forEach(card => {
        card.style.display = 'flex';
    });
}

function checkPremiumAndNavigate(category) {
    if (!hasPremium()) {
        openPremiumModal();
        return;
    }
    window.navigateTo('level-select', { category: category });
}

function handlePremiumClick() {
    if (hasPremium()) {
        openModal('premiumActiveModal');
    } else {
        openModal('premiumModal');
    }
}

// ===================ВЫБОР ЦВЕТА ЧЕРЕЗ МОДАЛЬНОЕ ОКНО ===================
function openColorModal() {
    const currentColor = localStorage.getItem('themeColor') || 'red';
    document.querySelectorAll('.color-btn-modal').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.color === currentColor);
    });
    openModal('colorModal');
}

function closeColorModal() {
    closeModal('colorModal');
}

document.querySelectorAll('.color-btn-modal').forEach(btn => {
    btn.addEventListener('click', function() {
        const color = this.dataset.color;
        document.querySelectorAll('.color-btn-modal').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        setTheme(color);
        updateColorStatus(color);
    });
});

// ===================ИНИЦИАЛИЗАЦИЯ ===================
document.addEventListener('DOMContentLoaded', function() {
    console.log('SportApp загружен!');
    updatePremiumUI();
    if (navigator.onLine) {
        syncPendingWorkouts();
    }
    const currentColor = localStorage.getItem('themeColor') || 'red';
    updateColorStatus(currentColor);
});

// ===================МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ С ПАРОЛЕМ ===================
function showConfirmWithPasswordModal(title, message, onConfirm, confirmText = 'Да') {
    const oldModal = document.getElementById('confirmModal');
    if (oldModal) oldModal.remove();
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'confirmModal';
    overlay.innerHTML = `
        <div class="modal-content" style="max-width:420px; width:95%;">
            <div class="modal-title">${title}</div>
            <p style="color:var(--slate); font-size:0.95rem; margin:0.5rem 0 1rem 0; text-align:center;">${message}</p>
            <div class="form-group" style="text-align:left; margin-bottom:1rem;">
                <label for="confirmPassword">Введите пароль</label>
                <input type="password" id="confirmPassword" placeholder="Пароль" style="width:100%; padding:0.6rem 1rem; border:1.5px solid #E2E8F0; border-radius:10px; font-size:0.95rem;" autocomplete="new-password" />
            </div>
            <div style="display:flex; gap:0.8rem;">
                <button class="modal-btn modal-btn-danger" id="confirmYes" style="flex:1;">${confirmText}</button>
                <button class="modal-btn modal-btn-primary" id="confirmNo" style="flex:1;">Нет</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    document.getElementById('confirmYes').addEventListener('click', async function() {
        const passwordInput = document.getElementById('confirmPassword');
        const password = passwordInput.value.trim();
        if (!password) {
            showToast('⚠️ Введите пароль');
            passwordInput.classList.add('error');
            return;
        }
        passwordInput.classList.remove('error');
        
        const user = await getFirebaseUser();
        if (!user) {
            showToast('❌ Пользователь не авторизован');
            overlay.remove();
            return;
        }
        
        try {
            const credential = firebase.auth.EmailAuthProvider.credential(user.email, password);
            await user.reauthenticateWithCredential(credential);
            overlay.remove();
            if (typeof onConfirm === 'function') onConfirm();
        } catch (error) {
            console.error('Ошибка аутентификации:', error);
            showToast('❌ Неверный пароль');
            overlay.remove();
        }
    });
    
    document.getElementById('confirmNo').addEventListener('click', function() {
        overlay.remove();
    });
    
    // ❌ УДАЛЯЕМ закрытие по клику на оверлей
    // overlay.addEventListener('click', function(e) {
    //     if (e.target === this) this.remove();
    // });
}

// ===================МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ (БЕЗ ПАРОЛЯ) ===================
function showConfirmModal(title, message, onConfirm, confirmText = 'Да') {
    const oldModal = document.getElementById('confirmModal');
    if (oldModal) oldModal.remove();
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'confirmModal';
    overlay.innerHTML = `
        <div class="modal-content" style="max-width:420px; width:95%;">
            <div class="modal-title">${title}</div>
            <p style="color:var(--slate); font-size:0.95rem; margin:0.5rem 0 1.5rem 0; text-align:center;">${message}</p>
            <div style="display:flex; gap:0.8rem;">
                <button class="modal-btn modal-btn-primary" id="confirmYes" style="flex:1;">${confirmText}</button>
                <button class="modal-btn modal-btn-secondary" id="confirmNo" style="flex:1;">Нет</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    document.getElementById('confirmYes').addEventListener('click', function() {
        overlay.remove();
        if (typeof onConfirm === 'function') onConfirm();
    });
    
    document.getElementById('confirmNo').addEventListener('click', function() {
        overlay.remove();
    });
}

// ===================НЕВОЗВРАТНЫЕ НАСТРОЙКИ ===================

function confirmResetProgress() {
    showConfirmWithPasswordModal(
        'Вы подтверждаете свое действие?',
        'Введите пароль для подтверждения. Это действие нельзя отменить.',
        resetProgress,
        'Да'
    );
}

async function resetProgress() {
    const user = await getFirebaseUser();
    if (!user) {
        showToast('❌ Пользователь не авторизован');
        return;
    }
    
    try {
        // 1. Удаляем все тренировки пользователя
        const workoutsResult = await getUserWorkoutsFromFirestore(user.uid);
        if (workoutsResult.success) {
            const workouts = workoutsResult.data;
            for (const workout of workouts) {
                await firebase.firestore().collection('workouts').doc(workout.id).delete();
            }
        }
        
        // 2. Обнуляем XP и уровень в профиле
        await updateUserProfile(user.uid, { totalXp: 0, level: 1 });
        
        // 3. Очищаем локальный кэш (кроме темы и премиума)
        const theme = localStorage.getItem('themeColor') || 'red';
        const premium = localStorage.getItem(PREMIUM_KEY) || 'false';
        localStorage.clear();
        localStorage.setItem('themeColor', theme);
        localStorage.setItem(PREMIUM_KEY, premium);
        
        showToast('✅ Прогресс сброшен');
        setTimeout(() => {
            window.location.reload();
        }, 500);
    } catch (error) {
        console.error('Ошибка сброса прогресса:', error);
        alert('Ошибка при сбросе прогресса: ' + error.message);
    }
}

function confirmDeleteAccount() {
    showConfirmWithPasswordModal(
        'Вы подтверждаете свое действие?',
        'Введите пароль для подтверждения. Это действие нельзя отменить.',
        deleteAccount,
        'Да'
    );
}

async function deleteAccount() {
    const user = await getFirebaseUser();
    if (!user) {
        showToast('❌ Пользователь не авторизован');
        return;
    }
    
    try {
        // 1. Удаляем документ пользователя из Firestore
        await firebase.firestore().collection('users').doc(user.uid).delete();
        
        // 2. Удаляем все тренировки пользователя
        const workoutsResult = await getUserWorkoutsFromFirestore(user.uid);
        if (workoutsResult.success) {
            const workouts = workoutsResult.data;
            for (const workout of workouts) {
                await firebase.firestore().collection('workouts').doc(workout.id).delete();
            }
        }
        
        // 3. Удаляем пользователя из Auth
        await user.delete();
        
        // 4. Очищаем локальные данные
        localStorage.clear();
        
        showToast('✅ Аккаунт удалён');
        setTimeout(() => {
            window.location.reload();
        }, 500);
    } catch (error) {
        console.error('Ошибка удаления аккаунта:', error);
        if (error.code === 'auth/requires-recent-login') {
showToast('⚠️ Для удаления аккаунта требуется повторный вход.');
await firebase.auth().signOut();
        } else {
            showToast('❌ Ошибка при удалении аккаунта: ' + error.message);
        }
    }
}