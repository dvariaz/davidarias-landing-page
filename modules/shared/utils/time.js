const UNITS_MAPPING = {
  es: {
    semesters: ['semestre', 'semestres'],
    weeks: ['semana', 'semanas'],
    days: ['día', 'días'],
    hours: ['hora', 'horas'],
    minutes: ['minuto', 'minutos']
  },
  en: {
    semesters: ['semester', 'semesters'],
    weeks: ['week', 'weeks'],
    days: ['day', 'days'],
    hours: ['hour', 'hours'],
    minutes: ['minute', 'minutes']
  }
};

export const humanizeDuration = (locale, duration) => {
  if (!UNITS_MAPPING[locale]) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  const parts = Object.entries(duration)
    .filter(([_, value]) => value !== 0)
    .map(([unit, value]) => {
      const word = value === 1 ? UNITS_MAPPING[locale][unit][0] : UNITS_MAPPING[locale][unit][1]; 
      return `${value} ${word}`;
    });

  return parts.join(', ');
}
