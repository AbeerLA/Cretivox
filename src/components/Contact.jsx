"use client";

import React, { useEffect, useRef } from "react";
import styles from "../styles/Contact.module.css";
import gsap from "gsap";

const Contact = () => {
    const sectionRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );

            gsap.fromTo(
                linksRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    delay: 0.3,
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className={styles.contactSection}>
            <h2 className={styles.heading}>Let's Connect</h2>
            <p className={styles.message}>
                Feel free to reach out, or just to say hi ☕💻
            </p>

            <div className={styles.links}>
                <a
                    href="mailto:abeeralbaqi@gmail.com"
                    ref={(el) => (linksRef.current[0] = el)}
                    className={styles.link}
                >
                    📧 Send me an email
                </a>
                <a
                    href="https://github.com/AbeerLA"
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={(el) => (linksRef.current[1] = el)}
                    className={styles.link}
                >
                    🐙 GitHub
                </a>
                <a
                    href="https://linkedin.com/in/abeerb"
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={(el) => (linksRef.current[2] = el)}
                    className={styles.link}
                >
                    💼 LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Contact;
