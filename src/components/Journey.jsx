"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/Journey.module.css";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
    {
        image: "/friends.jpg",
        text: `Home isn't a place, it's people who get my weird jokes.`,
    },
    {
        image: "/travel.jpg",
        text: `My Google Maps is tired. I've been lost more times than I've been found.`,
    },
    {
        image: "/setup.jpg",
        text: `Debugging is just arguing with ChatGPT until one of us cries.`,
    },
];

export default function MyJourney() {
    const sectionRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                    },
                }
            );

            gsap.fromTo(
                itemRefs.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="myjourney" ref={sectionRef} className={styles.journeySection}>
            <div className={styles.journeyWrapper}>
                {journeyData.map((item, i) => (
                    <div
                        key={i}
                        className={styles.journeyItem}
                        ref={(el) => (itemRefs.current[i] = el)}
                    >
                        <div className={styles.journeyImage}>
                            <img src={item.image} alt={`journey-${i}`} />
                        </div>
                        <div className={styles.journeyText}>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
