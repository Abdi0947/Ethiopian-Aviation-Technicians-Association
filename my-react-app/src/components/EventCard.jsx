import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Card from './Card';
import Button from './Button';

const EventCard = ({ 
  event, 
  className = '',
  showRegisterButton = true 
}) => {
  const {
    id,
    title,
    description,
    date,
    time,
    location,
    capacity,
    registered,
    image,
    category,
    isFeatured = false
  } = event;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isFull = registered >= capacity;
  const registrationPercentage = (registered / capacity) * 100;

  return (
    <Card 
      className={`relative overflow-hidden ${isFeatured ? 'ring-2 ring-primary-500' : ''} ${className}`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}

      {/* Event Image */}
      {image && (
        <div className="relative h-48 mb-4 -mx-6 -mt-6">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      {/* Category Badge */}
      {category && (
        <div className="mb-3">
          <span className="inline-block bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {category}
          </span>
        </div>
      )}

      {/* Event Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
        {title}
      </h3>

      {/* Event Description */}
      <p className="text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>

      {/* Event Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-2 text-primary-600" />
          <span>{formatDate(date)}</span>
        </div>
        
        {time && (
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-primary-600" />
            <span>{time}</span>
          </div>
        )}
        
        {location && (
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-primary-600" />
            <span className="line-clamp-1">{location}</span>
          </div>
        )}
        
        {capacity && (
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-primary-600" />
            <span>{registered}/{capacity} registered</span>
          </div>
        )}
      </div>

      {/* Registration Progress */}
      {capacity && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Registration</span>
            <span>{Math.round(registrationPercentage)}% full</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(registrationPercentage, 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* Action Button */}
      {showRegisterButton && (
        <div className="flex justify-between items-center">
          <Button
            variant={isFull ? "secondary" : "primary"}
            size="sm"
            disabled={isFull}
            className="flex-1 mr-2"
          >
            {isFull ? 'Event Full' : 'Register Now'}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="flex-shrink-0"
          >
            Details
          </Button>
        </div>
      )}
    </Card>
  );
};

export default EventCard; 