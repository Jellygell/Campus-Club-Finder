import { Link } from 'react-router-dom';

export default function ClubCard({ club, view = 'grid' }) {
  const cardClass =
    view === 'grid'
      ? "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
      : "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row gap-4";

  const imageClass =
    view === 'grid'
      ? "w-full h-48 object-cover"
      : "w-full md:w-48 h-48 md:h-auto object-cover";

  const contentClass =
    view === 'grid'
      ? "p-6"
      : "p-6 flex-1";

  return (
    <div className={cardClass}>
      <img
        src={club.image}
        alt={club.name}
        className={imageClass}
      />
      <div className={contentClass}>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{club.name}</h2>
        <p className="text-gray-600 mb-4">{club.shortDescription}</p>
        <Link to={`/clubs/${club.id}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 w-full md:w-auto">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
