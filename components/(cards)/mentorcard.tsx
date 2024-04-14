import React from "react";


interface Mentor {
    id: number;
    imageUrl: string;
    name: string;
    designation: string;
    bio: string;
  }
  
  interface MentorCardProps {
    mentor: Mentor;
  }
  
  const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
    const { id, imageUrl, name, designation, bio } = mentor;
  
    return (
        <div className="mentor-card bg-white p-6 shadow-md rounded-lg">
        <div className="mentor-image mb-4">
          <img src={imageUrl} alt={name} className="w-full h-auto rounded" />
        </div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500 mb-2">{designation}</p>
        <div className="flex items-center justify-center space-x-4">
          <a href="#" className="text-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6"
            >
              {/* Add your SVG path here */}
            </svg>
          </a>
          <a href="#" className="text-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6"
            >
              {/* Add your SVG path here */}
            </svg>
          </a>
          <a href="#" className="text-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6"
            >
              {/* Add your SVG path here */}
            </svg>
          </a>
          <a href="#" className="text-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6"
            >
              {/* Add your SVG path here */}
            </svg>
          </a>
        </div>
      </div>
    );
  };
  
  export default MentorCard;