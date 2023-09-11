const ru = {
  locale: "ru",
  // Home Tab
  Home: "Главная",
  "Period in": "Месячные через",
  "no info": "неизвестно",
  Period: "Месячные",
  today: "сегодня",
  "Today is the": "Сегодня",
  Delay: "Задержка",
  Days: "(0)[Дней];(1)[День];(2-4)[Дня];(5-20)[Дней];(21)[День];(22-24)[Дня];(25-30)[Дней];(31)[День];(32-34)[Дня];(35-40)[Дней];",
  "Current cycle day": "Текущий день цикла",
  // NOTE: i18next doesn't support ordinals for the Russian language and instead
  //       always use `day of your period_ordinal_other` with the `ый` ordinal,
  //       so I use interval instead
  "day of your period":
    "(1)[{{count}}ый день месячных];(2)[{{count}}ой день месячных];(3)[{{count}}ий день месячных];(4-5)[{{count}}ый день месячных];(6-8)[{{count}}ой день месячных];(9-inf)[{{count}}ый день месячных];",
  Ovulation: "Овуляция",
  possible: "может быть сегодня",
  finished: "завершена",
  tomorrow: "завтра",
  in: "через",
  "chance of getting pregnant": "вероятность забеременеть",
  High: "Высокая",
  Low: "Низкая",
  // Details Tab
  Details: "Детали",
  "Period length": "Длина месячных",
  "Cycle length": "Длина цикла",
  "You haven't marked any periods yet": "Вы еще не отметили дни месячных",
  // Mark Modal
  mark: "отметить",
  "Select date range": "Отметьте диапазон месячных",
  cancel: "отмена",
  save: "сохранить",
  // Welcome Modal
  "Welcome to Peri": "Добро пожаловать в Peri",
  "Mark the days of your": "Отметьте дни",
  "last period": "последних месячных",
  Continue: "Продолжить",
  "Forecast will not be generated.": "Прогноз не будет сгенерирован.",
  or: "или",
  // Info Modal
  "learn more about the current state": "узнать больше о текущем состоянии",
  "Frequent symptoms": "Частые симптомы",
  // Phases info
  "Menstrual phase": "Менструация",
  "This cycle is accompanied by low hormone levels.":
    "Этот цикл сопровождается низким уровнем гормонов.",
  "lack of energy and strength": "недостаток энергии и сил",
  pain: "боль",
  "weakness and irritability": "слабость и раздражительность",
  "increased appetite": "повышенный аппетит",

  "Follicular phase": "Фолликулярная фаза",
  "The level of estrogen in this phase rises and reaches a maximum level.":
    "Уровень эстрогена в эту фазу растет и достигает максимального уровня.",
  "strength and vigor appear": "появляются силы и бодрость",
  "endurance increases": "увеличивается выносливость",
  "new ideas and plans appear": "появляются новые идеи и планы",
  "libido increases": "повышается либидо",

  "Ovulation phase": "Овуляция",
  "Once estrogen levels peak, they trigger the release of two important ovulation hormones, follicle-stimulating hormone and luteinizing hormone.":
    "Как только уровень эстрогена достигает пика, он вызывает выброс двух важных гормонов овуляции — фолликулостимулирующего гормона и лютеинизирующего гормона.",
  "increased sexual desire": "усиление полового влечения",
  "optimistic mood": "оптимистичное настроение",
  "mild fever": "незначительное повышение температуры",
  "lower abdominal pain": "боль в низу живота",
  "chest discomfort and bloating": "дискомфорт в груди и вздутием живота",
  "characteristic secretions": "характерные выделения",

  "Luteal phase": "Лютеиновая фаза",
  "Levels of the hormones estrogen and progesterone first rise and then drop sharply just before a period. Progesterone reaches its peak in the luteal phase.":
    "Уровни гормонов эстрогена и прогестерона сначала повышаются, а прямо перед менструацией резко падают. Прогестерон в лютеиновую фазу достигает своего пика.",
  "breast tenderness": "чувствительность груди",
  puffiness: "отечность",
  "acne and skin rashes": "акне и высыпания на коже",
  "diarrhea or constipation": "диарея или запоры",
  "irritability and depressed mood":
    "раздражительность и подавленное настроение",
  Preferences: "Настройки",
  Language: "Язык",
  Edit: "Редактирование",
  "Import config": "Импортировать данные",
  "Export config": "Экспортировать данные",
  "Edit cycles": "Редактировать циклы",
  "Configuration has been imported": "Данные были успешно импортированы",
  "Download latest version": "Загрузить новую версию",
};

export default ru;
