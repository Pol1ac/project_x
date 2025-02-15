import { Link } from 'react-router-dom'
import './Sidebar.css'

// Приклад іконок (можна імпортувати свої зображення/файли)


export default function Sidebar() {
    return (
        <div className="sidebar">
            {/* Верхні кнопки/іконки */}
            <div className="top-section">
                <Link to="/calendar" className="icon-btn">

                </Link>
                <Link to="/todo" className="icon-btn">

                </Link>
            </div>

            {/* Середній блок (наприклад, аватари чи щось інше) */}
            <div className="middle-section">
                {/* Можна вставити аватари */}
                <img
                    src="https://i.pravatar.cc/40?img=11"
                    alt="User 1"
                    className="avatar"
                />
                <img
                    src="https://i.pravatar.cc/40?img=22"
                    alt="User 2"
                    className="avatar"
                />
            </div>

            {/* Нижній блок – кнопка Settings */}
            <div className="bottom-section">
                <Link to="/settings" className="icon-btn">

                </Link>
            </div>
        </div>
    )
}

