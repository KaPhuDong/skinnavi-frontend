import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from '@/features/auth/pages/Register'
import AdminDashboard from './features/admin/pages/AdminDashboard'
import PlaceholderPage from './features/admin/components/PlaceholderPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />

        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<PlaceholderPage title="Users" />} />
        <Route path="/admin/subscriptions" element={<PlaceholderPage title="Subscriptions" />} />
        <Route path="/admin/revenue" element={<PlaceholderPage title="Revenue" />} />
        <Route path="/admin/product" element={<PlaceholderPage title="Product" />} />
        <Route path="/admin/settings" element={<PlaceholderPage title="Settings" />} />

        {/* <Route path="/login" element={<LoginPage />} /> */}

        {/* Route 404 - Not Found */}
        <Route
          path="*"
          element={
            <div className="flex h-screen items-center justify-center">404 - Page Not Found</div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
