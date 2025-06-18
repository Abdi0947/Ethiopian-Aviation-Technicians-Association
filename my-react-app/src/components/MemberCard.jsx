import React from 'react';
import { Award, MapPin, Calendar, Star, Linkedin, Mail } from 'lucide-react';
import Card from './Card';
import Button from './Button';

const MemberCard = ({ 
  member, 
  className = '',
  showContact = false 
}) => {
  const {
    id,
    name,
    title,
    company,
    location,
    joinDate,
    certifications,
    achievements,
    avatar,
    bio,
    isFeatured = false,
    linkedin,
    email
  } = member;

  const formatJoinDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <Card 
      className={`relative overflow-hidden ${isFeatured ? 'ring-2 ring-primary-500' : ''} ${className}`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            Featured Member
          </span>
        </div>
      )}

      {/* Member Header */}
      <div className="flex items-start space-x-4 mb-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary-200"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-600 font-semibold text-lg">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>

        {/* Member Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {name}
          </h3>
          <p className="text-primary-600 font-medium mb-1">
            {title}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            {company}
          </p>
          
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Member Bio */}
      {bio && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {bio}
        </p>
      )}

      {/* Member Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-2 text-primary-600" />
          <span>Member since {formatJoinDate(joinDate)}</span>
        </div>
        
        {certifications && certifications.length > 0 && (
          <div className="flex items-start text-sm text-gray-600">
            <Award className="h-4 w-4 mr-2 text-primary-600 mt-0.5" />
            <div>
              <span className="font-medium">Certifications:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-secondary-100 text-secondary-800 text-xs px-2 py-0.5 rounded"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {achievements && achievements.length > 0 && (
          <div className="flex items-start text-sm text-gray-600">
            <Star className="h-4 w-4 mr-2 text-primary-600 mt-0.5" />
            <div>
              <span className="font-medium">Achievements:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {achievements.map((achievement, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-accent-100 text-accent-800 text-xs px-2 py-0.5 rounded"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Actions */}
      {showContact && (
        <div className="flex space-x-2 pt-4 border-t border-gray-200">
          {email && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.location.href = `mailto:${email}`}
            >
              <Mail className="h-4 w-4 mr-1" />
              Email
            </Button>
          )}
          
          {linkedin && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(linkedin, '_blank')}
            >
              <Linkedin className="h-4 w-4 mr-1" />
              LinkedIn
            </Button>
          )}
        </div>
      )}

      {/* View Profile Button */}
      {!showContact && (
        <Button
          variant="outline"
          size="sm"
          className="w-full"
        >
          View Profile
        </Button>
      )}
    </Card>
  );
};

export default MemberCard; 