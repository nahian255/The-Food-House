import { useState } from "react";
import OrderOfline from "./OrderOfline";

const reviews = [
    { id: 1, userName: 'Jone Dun', reviewText: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ex ea ad distinctio maxime, architecto adipisci totam? Vel dolorum numquam cupiditate, porro officiis laboriosam dicta aliquam. Aliquam animi provident natus.' },
    { id: 2, userName: 'Alex Carry', reviewText: ' This is the one of my favourite resturent that I also want to try. Its make satisfiy always.' },
    { id: 3, userName: 'Neha Ton', reviewText: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ex ea ad distinctio maxime, architecto adipisci totam? Vel dolorum numquam cupiditate, porro officiis laboriosam dicta aliquam. Aliquam animi provident natus.' },
];

const Review = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const showNextReview = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const showPreviousReview = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const currentReview = reviews[currentReviewIndex];

    return (
        <div className="px-10 md:px-24  py-20">
            <OrderOfline title1={'What Our Clients Say'} title2={'TESTIMONIALS'} />
            <div className="md:flex justify-between h-[440px] md:h-60 lg:h-40 bg-white p-4 rounded-lg shadow-lg shadow-gray-200">
                <div className="mt-10">
                    <button
                        onClick={showPreviousReview}
                        className="bg-blue-700 hover:bg-blue-400 text-white px-4 py-2 rounded-lg mr-2"
                    >
                        Previous
                    </button>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-center text-orange-600">{currentReview.userName}</h2>
                    <p className="px-6">{currentReview.reviewText}</p>
                </div>
                <div className="mt-10">
                    <button
                        onClick={showNextReview}
                        className="bg-blue-700 hover:bg-blue-400 text-white px-4 py-2 rounded-lg"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;