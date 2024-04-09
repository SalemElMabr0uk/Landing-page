"use client"
import roadmap from '@/app/(pages)/roadmap/page';
import Link from 'next/link';

interface CardProps {
    item: roadmap;
}

const Card = ({ item }: CardProps) => {
    function renderStars(rating: number): JSX.Element[] {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i}>
                    <img src={i < rating ? "/star-16.png" : "/star-17.png"} alt="star" />
                </span>
            );
        }
        return stars;
    }



    return (
        <div className="container2 flex  justify-between flex-col m-auto shadow-xl rounded-lg p-1 transform transition-transform hover:ring-2 hover:ring-[#FF8ED0]">
        <div className="bg-white w-[300px] h-[340px] rounded-lg">
          <div className="space-x-2 flex ml-6 p-2">
            <div className="flex p-4 space-x-2">
              {/* Your star rendering logic here */}
              {renderStars(item.rating)}
            </div>
            <div className="flex flex-col">
              <Link
                href={`/roadmap/${item._id}`}
                prefetch={false}
                className="md:flex items-center mt-4 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[#162E4F] rounded-full bg-gradient-to-br from-[#162E4F] to-[#3269B5] hover:text-white dark:text-white focus:ring-4 focus:outline-none sm:text-xs"
              >
                <span className="p-0.5 flex text-bold text-xs sm:text-left text-[#162E4F] transition-all ease-in duration-75 bg-white rounded-full">
                  Project tag
                </span>
              </Link>
            </div>
          </div>
          <h2 className="text-l font-semibold text-center h-[10%]">{item.title}</h2>
          <p className="text-[#9E9EAE] text-xs h-[25%] p-4">{item.pageContent.mainLine}</p>
          <div className="flex flex-wrap p-8 text-lg h-[15%]">
            {item.pageContent.points.map((point, index) => (
              <p
                className="bg-gray-100 rounded-full px-2 flex justify-center text-xs text-gray-700 mr-2 mb-2"
                key={index}
              >
                {point}
              </p>
            ))}
          </div>
          <Link
            href={`/roadmap/${item._id}`}
            className="flex text-bold items-center px-4 py-4 p-2 h-[30%] text-sm font-medium text-center text-[#FB8971]"
          >
            View more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rtl:rotate-180 w-3.5 h-4 ms-2"
              viewBox="0 0 512 512"
            >
              <path
                d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"
                fill="#FB8971"
              />
            </svg>
          </Link>
        </div>
      </div>
      
    );
};

export default Card;