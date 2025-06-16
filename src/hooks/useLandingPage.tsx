import { useEffect, useRef, useState } from "react";

export type UseLandingPageReturn = {
	heroRef: React.RefObject<HTMLDivElement | null>;
	isFixed: boolean;
};

export const useLandingPage = (): UseLandingPageReturn => {
	const heroRef = useRef<HTMLDivElement>(null);
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsFixed(!entry.isIntersecting);
			},
			{ threshold: 0 },
		);

		if (heroRef.current) {
			observer.observe(heroRef.current);
		}

		return () => {
			if (heroRef.current) {
				observer.unobserve(heroRef.current);
			}
		};
	}, []);

	return { heroRef, isFixed };
};
