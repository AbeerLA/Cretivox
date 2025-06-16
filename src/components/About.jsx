"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/About.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            }
        );

        gsap.fromTo(
            itemsRef.current,
            { opacity: 0, x: 40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    const facts = [
        ["🌑", "I run on coffe and bad decisions "],
        ["🕷️", "I name my files weird things like “banana-bug”"],
        ["🏙️", "Dreaming of a cozy apartment + espresso machine"],
        ["💻", "I live for beautiful UI that feels alive"],
        ["🎧", "My happy place? Spotify + clean code"],
        ["⚠️", "My first website had no <head> tag"],
        ["🖤", 'Frontend is where I feel like "me"'],
    ];

    return (
        <section id="about" ref={containerRef} className={styles.aboutSection}>
            <div className={styles.aboutWrapper}>
                <div className={styles.imageBox}>
                    <img src="/profile2.png" alt="Abeer" />
                </div>

                <div className={styles.factsBox}>
                    <h2>Random facts about me ✒️</h2>
                    <ul>
                        {facts.map(([emoji, text], i) => (
                            <li key={i} ref={(el) => (itemsRef.current[i] = el)}>
                                <span>{emoji}</span> {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
