import { Users, UserPlus, Calendar } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Campus Club Finder</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Campus Club Finder is a comprehensive web application designed to help students discover, learn about, and join student organizations at their university. Our platform bridges the gap between students and the vibrant club community on campus.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Browse through diverse student clubs and organizations</li>
              <li>View detailed information about each club including upcoming events</li>
              <li>Join clubs that match your interests with a single click</li>
              <li>Sort and filter clubs to find exactly what you're looking for</li>
              <li>Switch between grid and list views for optimal browsing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• React (UI Framework)</li>
                  <li>• React Hooks (State Management)</li>
                  <li>• Tailwind CSS (Styling)</li>
                  <li>• Lucide React (Icons)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Vite (Build Tool)</li>
                  <li>• In-Memory Storage (Data Persistence)</li>
                  <li>• Responsive Design</li>
                  <li>• Modern ES6+ JavaScript</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Club Discovery</h3>
                <p className="text-gray-600 text-sm">Easily browse and discover student clubs that match your interests.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <UserPlus className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Joining</h3>
                <p className="text-gray-600 text-sm">Join clubs with a single click and track your memberships.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Event Tracking</h3>
                <p className="text-gray-600 text-sm">Stay updated with upcoming events and activities from your clubs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
