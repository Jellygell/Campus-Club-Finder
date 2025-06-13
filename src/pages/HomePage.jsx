import { Link } from 'react-router-dom'
import { Users, MapPin, Calendar } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="mt-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your 
            <span className="text-blue-600"> Community</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with like-minded students, explore your interests, and make lasting friendships through our diverse student clubs and organizations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
            <span><Link to="/clubs">Browse Clubs</Link></span>
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
                <Link to="/about">Learn More</Link>
            </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Your Tribe</h3>
                <p className="text-gray-600">Connect with students who share your interests and passions.</p>
            </div>
            
            <div className="text-center p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Join Events</h3>
                <p className="text-gray-600">Participate in exciting workshops, competitions, and social events.</p>
            </div>
            
            <div className="text-center p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Grow Together</h3>
                <p className="text-gray-600">Develop new skills and leadership abilities in a supportive community.</p>
            </div>
        </div>
    </div>
  )
}
