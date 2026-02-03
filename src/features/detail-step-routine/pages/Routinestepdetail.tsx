import { useState } from 'react'
import { X, Send, Mic } from 'lucide-react'

const productDetail = {
  name: 'Gentle facial cleanser',
  image: '/products/cleanser.png',
  steps: [
    {
      stepNumber: 1,
      title: 'Wash your face with water',
      description:
        'Use cool or lukewarm water (avoiding hot water) to thoroughly wet your entire face.',
      image: '/images/step1.jpg',
      imagePosition: 'left'
    },
    {
      stepNumber: 2,
      title: 'Wash your face with cleanser',
      description:
        'Use a small amount of cleanser, lather it, then apply to your face. Gently massage upward in circular motions for 30-60 seconds.',
      image: '/images/step2.jpg',
      imagePosition: 'right'
    },
    {
      stepNumber: 3,
      title: 'Rinse your face with water again',
      description:
        'Rinse your face thoroughly with cool or lukewarm water until all traces of soap/cleanser have been completely removed.',
      image: '/images/step3.jpg',
      imagePosition: 'left'
    },
    {
      stepNumber: 4,
      title: 'Dry your face',
      description:
        'Use a soft, clean, dedicated face towel or disposable paper towel. Use a gentle patting motion instead of rubbing vigorously.',
      image: '/images/step4.jpg',
      imagePosition: 'right'
    }
  ]
}

// Mock chat messages
const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    text: "Hello, I'm SkinNavi Bot! 🤖 I'm your personal skincare assistant. How can I help you?",
    time: '2 mins ago'
  },
  {
    id: 2,
    sender: 'user',
    text: 'Hi, my skin feels dry lately.',
    time: 'Just now'
  },
  {
    id: 3,
    sender: 'bot',
    text: 'Hi 👋 Is it dry all over or just certain areas?',
    time: 'Just now'
  },
  {
    id: 4,
    sender: 'user',
    text: 'Mostly on my cheeks.',
    time: 'Just now'
  },
  {
    id: 5,
    sender: 'bot',
    text: 'Got it! You may need more hydration 💧 Try a gentle cleanser and a moisturizer with Hyaluronic Acid.',
    time: 'Just now'
  },
  {
    id: 6,
    sender: 'bot',
    text: 'Should I exfoliate?',
    time: 'Just now',
    isLink: true
  }
]

const RoutineStepDetail = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: inputMessage,
        time: 'Just now'
      }
      setMessages([...messages, newMessage])
      setInputMessage('')

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          sender: 'bot',
          text: "I'm here to help! Let me know if you have more questions.",
          time: 'Just now'
        }
        setMessages((prev) => [...prev, botResponse])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl p-3 shadow-sm">
              <img
                src={productDetail.image}
                alt={productDetail.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400">
              {productDetail.name}
            </h1>
          </div>

          <nav className="flex items-center justify-center gap-2 text-xs md:text-sm">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <a href="/routine" className="text-gray-600 hover:text-gray-900">
              Routine
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-blue-500 font-medium">Routine Detail</span>
          </nav>
        </div>
      </section>

      {/* Steps Section - Reduced Margins */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-20 py-8 md:py-12">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          {productDetail.steps.map((step) => (
            <div
              key={step.stepNumber}
              className={`flex flex-col md:flex-row gap-6 md:gap-8 items-center ${
                step.imagePosition === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image - Adjusted Size */}
              <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
                <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-sm">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>

              {/* Content - Compact */}
              <div className="flex-1">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-5 md:p-10 shadow-sm">
                  {/* Step Header */}
                  <div className="inline-flex items-center gap-3 bg-blue-100 rounded-full px-4 py-2 mb-4">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {step.stepNumber}
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-blue-400">{step.title}</h3>
                  </div>

                  {/* Step Description */}
                  <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Chatbot Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        {isChatOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.29-3.86-.81l-.28-.14-2.86.49.49-2.86-.14-.28C4.29 14.68 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
            <circle cx="9" cy="12" r="1.5" />
            <circle cx="15" cy="12" r="1.5" />
            <path d="M12 15c1.66 0 3-1.34 3-3h-6c0 1.66 1.34 3 3 3z" />
          </svg>
        )}
      </button>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 md:left-auto md:right-8 lg:right-16 md:translate-x-0 w-[90vw] md:w-[85vw] max-w-sm bg-white rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-4 duration-300 max-h-[500px]">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 px-3 py-2.5 flex items-center gap-2">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.29-3.86-.81l-.28-.14-2.86.49.49-2.86-.14-.28C4.29 14.68 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                <circle cx="9" cy="12" r="1.5" />
                <circle cx="15" cy="12" r="1.5" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-white text-sm">SkinNavi Bot</h3>
              <p className="text-xs text-blue-100">● Always active</p>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 space-y-2.5 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-3 py-2 ${
                    message.sender === 'user'
                      ? 'bg-blue-400 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-xs leading-relaxed">{message.text}</p>
                  {message.isLink && (
                    <button className="text-xs text-blue-500 underline mt-1">
                      Should I exfoliate?
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 px-3 py-2 rounded-full border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 text-xs"
              />
              <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                <Mic className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={handleSendMessage}
                className="w-8 h-8 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RoutineStepDetail
