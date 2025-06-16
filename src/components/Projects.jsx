"use client";

import React, { useEffect, useRef } from "react";
import styles from "../styles/Projects.module.css";
import gsap from "gsap";

const projects = [
    {
        title: "Jobzy",
        image: "/jobzy.png",
        description:
            "A job search UI/UX prototype designed in Figma for the Middle East. Features modern layout, filters, and multi-language support.",
        link: "https://www.figma.com/design/kAM4Ha8cbDNXP9WLnmtT9y/Jobzy?node-id=0-1&t=TpA34Lb8VlniAUIt-1",
        tech: "Figma",
    },
    {
        title: "To-Do List App",
        image: "/todolist.jpg",
        description:
            "A collaborative to-do web app built with HTML, CSS, and JavaScript. Includes responsive design and task management features.",
        link: "https://github.com/AbeerLA/JavaScript/tree/1b3c4c87ce2389c5c57e15cdf799f700c1676758/finalproject",
        tech: "HTML, CSS, JS",
    },
    {
        title: "Snake Game AI",
        image: "/snakegame.png",
        description:
            "An AI-powered Snake Game using Python and hand tracking via OpenCV + MediaPipe. Control the snake with your finger!",
        link: "https://github.com/AbeerLA/Python/tree/9674885b96a165e3fd62e64fe3d4fcae50728f77/Game",
        tech: "Python, OpenCV",
    },
];

const Projects = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate section fade-in
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                }
            );

            // Animate each card with stagger
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.25,
                    ease: "power3.out",
                    delay: 0.3,
                }
            );
        }, sectionRef);

        return () => ctx.revert(); // clean up
    }, []);

    return (
        <section id="projects" ref={sectionRef} className={styles.projectsSection}>
            <h2 className={styles.heading}>Projects</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className={styles.card}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p className={styles.tech}>
                                <strong>Tech:</strong> {project.tech}
                            </p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                View Project ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
