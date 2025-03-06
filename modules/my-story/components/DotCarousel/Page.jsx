import { useRef } from "react";

import "./DotCarousel.scss";

const Page = ({ onSwipe, children }) => {
    const ref = useRef();

    const handleTouchStart = (e) => {
        if (ref.swipeCheckInterval) clearInterval(ref.swipeCheckInterval);

        const track = e.target.parentElement;
        const [targetTouch] = e.targetTouches;

        ref.initialTouchPosition = targetTouch.clientX;
        ref.initialTrackPosition = track.scrollLeft;
    };

    const handleTouchEnd = (e) => {
        const track = e.target.parentElement;
        const finalTouchPosition = e.changedTouches[0].clientX;
        const swipeDiff = finalTouchPosition - ref.initialTouchPosition;

        ref.swipeCheckInterval = setTimeout(() => {
            let swipeDirection;

            if (track.scrollLeft === ref.initialTrackPosition) {
                swipeDirection = "NO_SWIPE";
            } else {
                if (swipeDiff > 0) {
                    swipeDirection = "RIGHT_SWIPE";
                } else {
                    swipeDirection = "LEFT_SWIPE";
                }
            }

            onSwipe(swipeDirection);
        }, 500);
    };

    return (
        <div
            className="dot-carousel__page"
            ref={ref}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {children}
        </div>
    );
};

export default Page;
