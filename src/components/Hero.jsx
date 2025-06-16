"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../styles/Hero.module.css";

export default function Hero() {
    const headingRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate card
        tl.from(`.${styles.heroCard}`, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        })

            // Animate title
            .from(
                `.${styles.heroTitle}`,
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "-=0.5"
            )

            // Animate h2, p, and button inside heroText
            .from(
                `.${styles.heroText} h2, .${styles.heroText} p, .${styles.heroText} button`,
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out",
                },
                "-=0.4"
            );

        // Scroll indicator animation
        gsap.to(`.${styles.scrollIndicator}`, {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: "sine.inOut",
        });
    }, []);

    const scrollToProjects = () => {
        const el = document.getElementById("projects");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroCard}>
                {/* Image */}
                <div className={styles.heroImage}>
                    <img src="/profile.jpg" alt="Abeer" />
                </div>

                {/* Text */}
                <div className={styles.heroText}>
                    <h1 ref={headingRef} className={styles.heroTitle}>
                        Hello World! <span className={styles.cursor}>|</span>
                    </h1>
                    <h2
                        style={{
                            fontSize: "1.75rem",
                            marginTop: "1rem",
                            fontWeight: "600",
                            color: "#374151",
                        }}
                    >
                        I'm Abeer
                    </h2>
                    <p
                        style={{ marginTop: "0.5rem", color: "#6b7280", maxWidth: "400px" }}
                    >
                        A frontend developer who loves life, simplicity, and a little
                        adventure
                    </p>
                    <button onClick={scrollToProjects} className={styles.viewButton}>
                        View My Work
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator}>
                <div>Scroll down</div>
                <div>↓</div>
            </div>
        </section>
    );
}
