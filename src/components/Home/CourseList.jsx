import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const courses = [
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React development' },
    { id: 2, title: 'Advanced JavaScript Techniques', description: 'Master complex JavaScript concepts' },
    { id: 3, title: 'Web Design Fundamentals', description: 'Create beautiful and responsive web layouts' },
    { id: 4, title: 'Node.js for Beginners', description: 'Build server-side applications with Node.js' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <Link 
            to={`/course/${course.id}`} 
            key={course.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
