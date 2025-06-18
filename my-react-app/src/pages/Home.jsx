import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Award, 
  BookOpen, 
  Calendar, 
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import EventCard from '../components/EventCard';
import MemberCard from '../components/MemberCard';
import Button from '../components/Button';

const Home = () => {
  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Aviation Safety Conference",
      description: "Join us for our flagship event featuring industry experts, safety workshops, and networking opportunities.",
      date: "2024-03-15",
      time: "9:00 AM - 5:00 PM",
      location: "Addis Ababa Convention Center",
      capacity: 200,
      registered: 145,
      category: "Conference",
      isFeatured: true,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Aircraft Maintenance Workshop",
      description: "Hands-on training session covering the latest maintenance procedures and best practices.",
      date: "2024-03-22",
      time: "10:00 AM - 4:00 PM",
      location: "EATA Training Center",
      capacity: 50,
      registered: 32,
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Networking Mixer",
      description: "Monthly networking event for aviation professionals to connect and share experiences.",
      date: "2024-03-28",
      time: "6:00 PM - 9:00 PM",
      location: "Sky Lounge, Bole",
      capacity: 100,
      registered: 78,
      category: "Networking",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Mock data for featured members
  const featuredMembers = [
    {
      id: 1,
      name: "Abebe Kebede",
      title: "Senior Aircraft Mechanic",
      company: "Ethiopian Airlines",
      location: "Addis Ababa",
      joinDate: "2020-01-15",
      certifications: ["A&P License", "Boeing 737", "Airbus A350"],
      achievements: ["Safety Award 2023", "15 Years Service"],
      bio: "Experienced aircraft mechanic with over 15 years in commercial aviation maintenance.",
      isFeatured: true
    },
    {
      id: 2,
      name: "Sara Haile",
      title: "Aviation Safety Inspector",
      company: "Ethiopian Civil Aviation Authority",
      location: "Addis Ababa",
      joinDate: "2019-06-20",
      certifications: ["Safety Inspector", "Quality Management"],
      achievements: ["Excellence Award 2022"],
      bio: "Dedicated safety professional committed to maintaining the highest aviation safety standards.",
      isFeatured: true
    },
    {
      id: 3,
      name: "Dawit Mengistu",
      title: "Aircraft Engineer",
      company: "Lufthansa Technik",
      location: "Addis Ababa",
      joinDate: "2021-03-10",
      certifications: ["EASA License", "Aircraft Systems"],
      achievements: ["Innovation Award 2023"],
      bio: "Passionate engineer specializing in aircraft systems and maintenance procedures.",
      isFeatured: true
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Promoting the highest standards of aviation safety through training and best practices."
    },
    {
      icon: Users,
      title: "Professional Network",
      description: "Connect with fellow aviation technicians and industry professionals across Ethiopia."
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Access to industry-recognized certifications and continuous professional development."
    },
    {
      icon: BookOpen,
      title: "Training Resources",
      description: "Comprehensive training materials, workshops, and educational programs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join EATA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of being part of Ethiopia's premier aviation technicians association
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-200">Active Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-200">Certifications</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-primary-200">Events/Year</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600">
                Don't miss our upcoming events and training sessions
              </p>
            </div>
            <Button 
              variant="outline" 
              size="lg"
              as={Link}
              to="/events"
              className="hidden md:flex"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button 
              variant="outline" 
              size="lg"
              as={Link}
              to="/events"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Members Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Members
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our outstanding members who are making a difference in Ethiopian aviation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="primary" 
              size="lg"
              as={Link}
              to="/membership"
            >
              Join Our Community
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Advance Your Aviation Career?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join EATA today and become part of a community dedicated to excellence in aviation maintenance and safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-white text-primary-700 hover:bg-gray-100"
              as={Link}
              to="/membership"
            >
              Become a Member
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-700"
              as={Link}
              to="/contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 