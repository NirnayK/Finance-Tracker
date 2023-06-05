'use client';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Income",
            description: "Track your monthly income and monitor your earnings.",
            color: "#FCD34D",
            textColor: "#000000", // Black text for yellow background
        },
        {
            title: "Expenses",
            description: "Keep track of your expenses and categorize your spending habits.",
            color: "#6EE7B7",
            textColor: "#000000", // Black text for green background
        },
        {
            title: "Savings",
            description: "Set savings goals and track your progress to financial freedom.",
            color: "#69C2D3",
            textColor: "#000000", // Black text for blue background
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [slides.length]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">Welcome to Your Finance Tracker</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-center mb-8">Track your income, expenses, and savings with ease.</p>
            <div className="w-full max-w-3xl mx-auto">
                <div
                    className="bg-white rounded-lg shadow-md p-6 h-full"
                    style={{ backgroundColor: slides[currentSlide].color }}
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4" style={{ color: slides[currentSlide].textColor }}>
                        {slides[currentSlide].title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl" style={{ color: slides[currentSlide].textColor }}>
                        {slides[currentSlide].description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
