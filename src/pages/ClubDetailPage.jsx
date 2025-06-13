import { useParams, useNavigate } from 'react-router-dom'
import { clubs } from '../data/clubs'
import { useEffect, useState } from 'react'
import { ArrowLeft, UserPlus, CheckCircle, Calendar } from 'lucide-react'

export default function ClubDetailPage() {
  const { clubId } = useParams()
  const navigate = useNavigate()
  const club = clubs.find(c => c.id === clubId)

  const [joined, setJoined] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]')
    setJoined(joinedClubs.includes(clubId))
  }, [clubId])

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]')
    if (!joinedClubs.includes(clubId)) {
      joinedClubs.push(clubId)
      localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs))
      setJoined(true)
      setShowConfirmation(true)
      setTimeout(() => setShowConfirmation(false), 3000)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (!club) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Club Not Found</h1>
          <button
            onClick={() => navigate('/clubs')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Back to Clubs
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/clubs')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Clubs</span>
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={club.image}
            alt={club.name}
            className="w-full h-64 md:h-80 object-cover"
          />

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">{club.name}</h1>

              {!joined ? (
                <button
                  onClick={handleJoin}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <UserPlus className="h-5 w-5" />
                  <span>Join Club</span>
                </button>
              ) : (
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">You have joined this club!</span>
                </div>
              )}
            </div>

            {showConfirmation && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                <div className="flex items-center space-x-2 text-green-800">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Successfully joined {club.name}!</span>
                </div>
              </div>
            )}

            <p className="text-gray-700 text-lg leading-relaxed mb-8">{club.description}</p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>Upcoming Events</span>
              </h2>

              <div className="space-y-4">
                {club.events.map((event, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.name}</h3>
                    <p className="text-gray-600">{formatDate(event.date)}</p>
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
