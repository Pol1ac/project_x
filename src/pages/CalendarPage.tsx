
import CalendarHeader from '../components/CalendarHeader/CalendarHeader.tsx'
import CalendarView from '../components/CalendarView/CalendarView.tsx'

export default function CalendarPage() {
    return (
        <div style={{ padding: '1rem' }}>
            <h1>Calendar</h1>
            {/* Приклад використання вашого календаря */}
            <CalendarHeader />
            <CalendarView />
        </div>
    )
}
