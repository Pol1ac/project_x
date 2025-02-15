import './CalendarView.css'

export default function CalendarView() {
    // Приклад тижневого вигляду
    const daysOfWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    // Години доби (8-19)
    const hours = Array.from({ length: 12 }, (_, i) => i + 8)

    return (
        <div className="calendar-view">
            <div className="calendar-grid">
                {/* Ліва колонка (мітки часу) */}
                <div className="time-column">
                    <div className="header"></div>
                    {hours.map((hour) => (
                        <div className="time-slot" key={hour}>
                            {hour}:00
                        </div>
                    ))}
                </div>

                {/* Колонки днів тижня */}
                {daysOfWeek.map((day) => (
                    <div className="day-column" key={day}>
                        {/* Заголовок дня */}
                        <div className="day-header">{day}</div>
                        {/* Слоти часу */}
                        {hours.map((hour) => (
                            <div className="day-slot" key={hour}></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
