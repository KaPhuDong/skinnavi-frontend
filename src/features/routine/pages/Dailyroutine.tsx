import { useState, useEffect } from 'react'
import { Sun, Moon, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { env } from '@/config/env'
import profile from '@/shared/assets/images/image 14.png'
import type { Routine, RoutineResponse } from '../types/index'

const routineTips = [
  {
    title: 'Consistency is Key',
    description: 'Follow your routine daily for at least 4-6 weeks to see results'
  },
  {
    title: 'Wait Between Steps',
    description: 'Allow 30-60 seconds between products for better absorption'
  },
  {
    title: 'Track Your Progress',
    description: 'Take weekly photos to monitor improvements in skin health'
  }
]

// Calendar helper functions
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

// Get background color based on usage role
const getBackgroundColor = (role: string) => {
  const colorMap: Record<string, string> = {
    Cleanser: 'bg-blue-50',
    Toner: 'bg-purple-50',
    Moisturizer: 'bg-blue-50',
    Exfoliator: 'bg-pink-50',
    Serum: 'bg-green-50',
    Sunscreen: 'bg-yellow-50'
  }
  return colorMap[role] || 'bg-gray-50'
}

const DailyRoutine = () => {
  const [activeTab, setActiveTab] = useState<'morning' | 'evening'>('morning')
  const [currentDate, setCurrentDate] = useState(new Date())
  const [routines, setRoutines] = useState<Routine[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth)

  // Fetch routines from API
  useEffect(() => {
    const fetchRoutines = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // Get userId from localStorage or auth context
        const userId = localStorage.getItem('userId') || 'default-user-id'

        const response = await fetch(`${env.API_URL}/routines/${userId}`, {
          headers: {
            'Content-Type': 'application/json'
            // Add authentication token if needed
            // 'Authorization': `Bearer ${token}`
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch routines')
        }

        const result: RoutineResponse = await response.json()

        if (result.success) {
          setRoutines(result.data)
        } else {
          setError(result.message)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching routines:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRoutines()
  }, [])

  // Get current routine based on active tab
  const currentRoutine = routines.find((r) => r.routine_time === activeTab.toUpperCase())

  // Generate calendar days
  const calendarDays = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ]

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  // Mock completed days (replace with actual data from API)
  const completedDays = [2, 4, 5, 6, 9, 10, 11, 12, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30, 31]

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-400 mx-auto mb-4" />
          <p className="text-gray-600">Loading your routine...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <div className="text-red-500 mb-4">⚠️</div>
          <p className="text-gray-800 font-medium mb-2">Failed to load routine</p>
          <p className="text-gray-600 text-sm">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">ROUTINE</h1>
          <nav className="flex items-center justify-center gap-2 text-sm md:text-base">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <span className="text-gray-400">&gt;&gt;</span>
            <span className="text-blue-500 font-medium">Routine</span>
          </nav>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-[1fr,420px] gap-8">
          {/* Left Column - Routine Steps */}
          <div className="space-y-6">
            {/* Greeting Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img src={profile} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    Good {activeTab}!<span className="ml-1">😊</span> Let's start
                  </p>
                  <p className="text-gray-800 font-medium">your skincare!</p>
                </div>
              </div>
              <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Routine Steps from API */}
            {currentRoutine && currentRoutine.steps.length > 0 ? (
              <div className="space-y-0">
                {currentRoutine.steps
                  .sort((a, b) => a.step_order - b.step_order)
                  .map((step, index) => (
                    <div key={step.id} className="relative">
                      {/* Step Item */}
                      <div className="flex items-start gap-4">
                        {/* Step Number with Line */}
                        <div className="flex flex-col items-center">
                          <div className="w-9 h-9 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {step.step_order}
                          </div>
                          {/* Vertical Line */}
                          {index < currentRoutine.steps.length - 1 && (
                            <div
                              className="w-0.5 h-full bg-blue-200 my-1"
                              style={{ minHeight: '60px' }}
                            />
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 pb-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-3">
                            {step.product.usage_role}
                          </h3>

                          {/* Product Card */}
                          <a
                            href={`/routine/detail/${step.product.id}`}
                            className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className={`w-16 h-16 ${getBackgroundColor(step.product.usage_role)} rounded-xl flex items-center justify-center p-3 flex-shrink-0`}
                              >
                                <img
                                  src={step.product.image_url}
                                  alt={step.product.name}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    e.currentTarget.src = '/placeholder-product.png'
                                  }}
                                />
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-800 font-medium text-sm">
                                  {step.product.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {step.instruction.substring(0, 60)}...
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No routine found for {activeTab}</p>
              </div>
            )}

            {/* Routine Tips */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Routine Tips</h3>

              <div className="bg-blue-50 rounded-2xl px-8 py-6">
                <div className="grid md:grid-cols-3 gap-8">
                  {routineTips.map((tip, index) => (
                    <div key={index} className="text-left">
                      <h4 className="font-bold text-gray-900 text-sm mb-2">{tip.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tabs & Calendar */}
          <div className="space-y-6 lg:sticky lg:top-4 lg:self-start">
            {/* Tabs */}
            <div className="bg-white rounded-full p-1.5 shadow-sm border border-gray-100 flex">
              <button
                onClick={() => setActiveTab('morning')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full font-semibold text-sm md:text-base transition-all ${
                  activeTab === 'morning'
                    ? 'bg-blue-400 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Sun className="w-5 h-5" />
                Morning
              </button>
              <button
                onClick={() => setActiveTab('evening')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full font-semibold text-sm md:text-base transition-all ${
                  activeTab === 'evening'
                    ? 'bg-blue-400 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Moon className="w-5 h-5" />
                Evening
              </button>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">ACTIVITY</h3>

              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <span className="font-bold text-gray-900">
                  {monthNames[currentMonth]} {currentYear}
                </span>
                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* Week day headers */}
                {weekDays.map((day, index) => (
                  <div key={index} className="text-center text-xs font-medium text-gray-500 pb-2">
                    {day}
                  </div>
                ))}

                {/* Calendar days */}
                {calendarDays.map((day, index) => (
                  <div key={index} className="aspect-square flex items-center justify-center">
                    {day && (
                      <button
                        className={`w-full h-full flex items-center justify-center rounded-lg text-sm font-semibold transition-all ${
                          completedDays.includes(day)
                            ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {day}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyRoutine
