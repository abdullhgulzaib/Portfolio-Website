import React, { useEffect, useRef } from "react";
import "../../styles/ProjectsDeck.css"; 

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height;
    const stars = [];
    const STAR_COUNT = 150;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speed = Math.random() * 0.3 + 0.05;
        this.opacity = Math.random();
        this.fadeDir = Math.random() > 0.5 ? 0.01 : -0.01;
      }
      update() {
        this.y -= this.speed;
        if (this.y < 0) this.reset();
        this.opacity += this.fadeDir;
        if (this.opacity >= 1 || this.opacity <= 0.2) this.fadeDir *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) stars.push(new Star());
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="galaxy-bg">
      <canvas ref={canvasRef} className="stars-canvas" />
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
    </div>
  );
};

export default GalaxyBackground;