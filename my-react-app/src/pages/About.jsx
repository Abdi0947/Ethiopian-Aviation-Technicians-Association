import React from 'react';
import { 
  Target, 
  Eye, 
  History, 
  Users, 
  Award, 
  Shield, 
  BookOpen, 
  Heart,
  Star,
  TrendingUp,
  Globe,
  CheckCircle
} from 'lucide-react';
import Card from '../components/Card';
import MemberCard from '../components/MemberCard';

const About = () => {
  const leadership = [
    {
      id: 1,
      name: "Captain Yohannes Bekele",
      title: "President",
      company: "EATA",
      location: "Addis Ababa",
      joinDate: "2018-01-01",
      certifications: ["Commercial Pilot", "Aircraft Engineer"],
      achievements: ["20+ Years Aviation Experience", "Safety Leadership Award"],
      bio: "Leading EATA with over two decades of aviation experience and a passion for advancing Ethiopian aviation standards.",
      isFeatured: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Engineer Meseret Tadesse",
      title: "Vice President",
      company: "EATA",
      location: "Addis Ababa",
      joinDate: "2019-03-15",
      certifications: ["Aircraft Engineer", "Quality Management"],
      achievements: ["Engineering Excellence Award", "15 Years Service"],
      bio: "Dedicated to promoting engineering excellence and professional development in Ethiopian aviation.",
      isFeatured: true,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Dr. Alemayehu Worku",
      title: "Secretary General",
      company: "EATA",
      location: "Addis Ababa",
      joinDate: "2020-06-01",
      certifications: ["PhD Aviation Safety", "Safety Management"],
      achievements: ["Academic Excellence", "Research Award"],
      bio: "Leading research and development initiatives to advance aviation safety and education in Ethiopia.",
      isFeatured: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety Excellence",
      description: "We prioritize safety above all else, ensuring the highest standards in aviation maintenance and operations."
    },
    {
      icon: Award,
      title: "Professional Integrity",
      description: "We maintain the highest ethical standards and professional integrity in all our activities."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We foster collaboration and knowledge sharing among aviation professionals across Ethiopia."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "We promote lifelong learning and professional development in aviation technology and practices."
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "We serve our community by advancing aviation safety and contributing to Ethiopia's development."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "We align with international aviation standards while respecting local context and needs."
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "EATA Founded",
      description: "The Ethiopian Aviation Technicians Association was established with 50 founding members."
    },
    {
      year: "2012",
      title: "First Conference",
      description: "Hosted our inaugural aviation safety conference with 200+ participants."
    },
    {
      year: "2015",
      title: "Training Center",
      description: "Opened the EATA Training Center in Addis Ababa for professional development programs."
    },
    {
      year: "2018",
      title: "International Recognition",
      description: "Achieved recognition from international aviation organizations and partnerships."
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Launched comprehensive digital platforms for member services and training."
    },
    {
      year: "2024",
      title: "500+ Members",
      description: "Reached a milestone of 500+ active members across Ethiopia."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About EATA
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto">
            Advancing aviation excellence in Ethiopia through professional development, 
            safety advocacy, and industry collaboration since 2009.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="text-center">
              <div className="flex justify-center mb-6">
                <Target className="h-16 w-16 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To promote excellence in aviation maintenance and safety by providing 
                professional development opportunities, fostering collaboration among 
                aviation technicians, and advocating for the highest standards of 
                safety and quality in Ethiopian aviation.
              </p>
            </Card>

            {/* Vision */}
            <Card className="text-center">
              <div className="flex justify-center mb-6">
                <Eye className="h-16 w-16 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading professional association for aviation technicians 
                in Ethiopia, recognized for our commitment to safety, excellence, 
                and the advancement of aviation technology and best practices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our History
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of growth and commitment to Ethiopian aviation excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals leading EATA's mission to advance Ethiopian aviation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <MemberCard key={leader.id} member={leader} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              The difference we're making in Ethiopian aviation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-200">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-200">Certifications Issued</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
              <div className="text-primary-200">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15</div>
              <div className="text-primary-200">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of our journey to advance aviation excellence in Ethiopia. 
            Together, we can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              Become a Member
            </button>
            <button className="btn-outline text-lg px-8 py-3">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 