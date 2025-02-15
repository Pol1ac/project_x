import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar.tsx'

// Сторінки
import CalendarPage from './pages/CalendarPage'
import TodoPage from './pages/TodoPage'
import SettingsPage from './pages/SettingsPage'

function App() {
    return (
        <BrowserRouter>
            <div style={{ display: 'flex' }}>
                {/* Бічна панель з кнопками */}
                <Sidebar />

                {/* Основна зона з різними сторінками */}
                <div style={{ flex: 1 }}>
                    <Routes>
                        {/* При відкритті "/" перенаправляємо на "/calendar" */}
                        <Route path="/" element={<Navigate to="/calendar" />} />
                        <Route path="/calendar" element={<CalendarPage />} />
                        <Route path="/todo" element={<TodoPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
