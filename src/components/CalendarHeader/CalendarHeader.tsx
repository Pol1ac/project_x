import { SetStateAction, useState} from 'react'

export default function CalendarHeader() {
    const [view, setView] = useState('week')
    const [currentDate, setCurrentDate] = useState(new Date())

    const handleViewChange = (newView: SetStateAction<string>) => {
        setView(newView)
    }

    const handlePrev = () => {
        // Перемотка по тижнях чи місяцях
        if (view === 'week') {
            setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 7))
        } else {
            setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, prev.getDate()))
        }
    }

    const handleNext = () => {
        if (view === 'week') {
            setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 7))
        } else {
            setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, prev.getDate()))
        }
    }

    const handleToday = () => {
        setCurrentDate(new Date())
    }

    const monthNames = [
        'January','February','March','April','May','June','July',
        'August','September','October','November','December'
    ]
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    return (
        <div style={{ background: '#fff', padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <div>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleToday}>Today</button>
                <button onClick={handleNext}>Next</button>
                <h2>{monthNames[month]} {year}</h2>
            </div>
            <div>
                <button onClick={() => handleViewChange('month')}>Month</button>
                <button onClick={() => handleViewChange('week')}>Week</button>
            </div>
        </div>
    )
}

