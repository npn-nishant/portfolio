import React, { useEffect, useRef } from 'react';

/**
 * AntigravityWaves - Balanced Visibility Data Science Field
 * Tuned to be clearly visible, crisp, and interactive while maintaining
 * high contrast and effortless readability for website content.
 */
export default function AntigravityWaves() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      lastX: -1000,
      lastY: -1000,
      speed: 0,
      active: false,
    };

    // 3 K-Means Cluster Centroids
    const clusters = [
      { id: 'c1', label: 'Cluster α: Retention', xRatio: 0.22, yRatio: 0.38, color: 'rgba(34, 211, 238,' },
      { id: 'c2', label: 'Cluster β: High-LTV', xRatio: 0.62, yRatio: 0.42, color: 'rgba(99, 102, 241,' },
      { id: 'c3', label: 'Cluster γ: Risk-Audit', xRatio: 0.82, yRatio: 0.65, color: 'rgba(168, 85, 247,' },
    ];

    // Clearly visible scatter points
    const pointCount = 48;
    const dataPoints = [];
    for (let i = 0; i < pointCount; i++) {
      const assignedCluster = clusters[i % clusters.length];
      const angle = Math.random() * Math.PI * 2;
      const radius = 30 + Math.random() * 120;
      dataPoints.push({
        cluster: assignedCluster,
        angle: angle,
        orbitRadius: radius,
        orbitSpeed: (Math.random() * 0.0022 + 0.0008) * (i % 2 === 0 ? 1 : -1),
        x: width * assignedCluster.xRatio + Math.cos(angle) * radius,
        y: height * assignedCluster.yRatio + Math.sin(angle) * radius,
        size: Math.random() * 2.2 + 1.2,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Floating math equations
    const mathSymbols = [
      { text: 'R²: 0.982', x: 0.15, y: 0.22, speed: 0.0003 },
      { text: 'p < 0.001', x: 0.42, y: 0.18, speed: 0.0002 },
      { text: 'σ = √(∑(x-μ)²/N)', x: 0.78, y: 0.28, speed: 0.0004 },
      { text: '∇L(θ) → 0', x: 0.28, y: 0.82, speed: 0.0003 },
      { text: 'H₀ Rejected', x: 0.68, y: 0.85, speed: 0.0002 },
    ];

    const ripples = [];

    // Distinct statistical curves
    const timeSeries = [
      {
        id: 'upper-ci',
        name: '+2σ Confidence Interval',
        baseYRatio: 0.35,
        amplitude: 24,
        freq: 0.0013,
        speed: 0.0035,
        stroke: 'rgba(6, 182, 212, 0.22)', // Visible dashed boundary
        dash: [3, 5],
        width: 1.2,
      },
      {
        id: 'polynomial-mean',
        name: 'Polynomial Trend μ',
        baseYRatio: 0.48,
        amplitude: 34,
        freq: 0.0016,
        speed: 0.0045,
        stroke: 'rgba(34, 211, 238, 0.52)', // Clearly visible & glowing
        dash: [],
        width: 1.8,
        glow: true,
      },
      {
        id: 'lower-ci',
        name: '-2σ Confidence Interval',
        baseYRatio: 0.61,
        amplitude: 26,
        freq: 0.0014,
        speed: 0.004,
        stroke: 'rgba(99, 102, 241, 0.22)', // Visible dashed boundary
        dash: [3, 5],
        width: 1.2,
      },
      {
        id: 'secondary-loss',
        name: 'Loss Gradient Curve',
        baseYRatio: 0.78,
        amplitude: 18,
        freq: 0.002,
        speed: 0.005,
        stroke: 'rgba(168, 85, 247, 0.24)',
        dash: [],
        width: 1.2,
      },
    ];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      const dx = newX - (mouse.lastX === -1000 ? newX : mouse.lastX);
      const dy = newY - (mouse.lastY === -1000 ? newY : mouse.lastY);
      const dist = Math.sqrt(dx * dx + dy * dy);
      mouse.speed = Math.min(dist * 0.45, 22);

      mouse.targetX = newX;
      mouse.targetY = newY;
      mouse.lastX = newX;
      mouse.lastY = newY;
      mouse.active = true;

      if (dist > 9 && ripples.length < 5) {
        ripples.push({
          x: newX,
          y: newY,
          radius: 8,
          maxRadius: 200,
          alpha: 0.4,
          speed: 2.2,
        });
      }
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 6,
        maxRadius: 240,
        alpha: 0.65,
        speed: 3.0,
      });
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.45;
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.09;
      mouse.y += (mouse.targetY - mouse.y) * 0.09;
      mouse.speed *= 0.95;

      // 1. Clearly Visible Statistical Gridlines
      ctx.strokeStyle = 'rgba(51, 65, 85, 0.18)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 8]);

      for (let y = 140; y < height; y += 170) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let x = 180; x < width; x += 220) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // 2. Floating Equations
      ctx.font = '10px monospace';
      mathSymbols.forEach((sym) => {
        const posX = width * sym.x + Math.sin(time * sym.speed + sym.y * 10) * 12;
        const posY = height * sym.y + Math.cos(time * sym.speed + sym.x * 10) * 10;
        ctx.fillStyle = 'rgba(148, 163, 184, 0.24)';
        ctx.fillText(sym.text, posX, posY);
      });

      // 3. Shaded ±2σ Confidence Interval Region
      const stepX = 18;
      const upperPoints = [];
      const lowerPoints = [];

      for (let x = 0; x <= width + stepX; x += stepX) {
        let upperY =
          height * 0.38 +
          Math.sin(x * 0.0013 + time * 0.0035) * 24 +
          Math.cos(x * 0.002 - time * 0.0028) * 9;

        let lowerY =
          height * 0.58 +
          Math.sin(x * 0.0015 + time * 0.004 + 1.2) * 28 +
          Math.cos(x * 0.0018 - time * 0.0028) * 9;

        if (mouse.x > -200) {
          const dx = x - mouse.x;
          const sigma = 160;
          const gaussian = Math.exp(-(dx * dx) / (2 * sigma * sigma));

          const cursorDeltaY = (mouse.y - height * 0.48) * 0.35;
          const rippleMod = Math.sin(dx * 0.038 - time * 0.07) * 12;

          upperY += (cursorDeltaY + rippleMod - 18) * gaussian;
          lowerY += (cursorDeltaY + rippleMod + 18) * gaussian;
        }

        upperPoints.push({ x, y: upperY });
        lowerPoints.push({ x, y: lowerY });
      }

      if (upperPoints.length > 0 && lowerPoints.length > 0) {
        ctx.beginPath();
        ctx.moveTo(upperPoints[0].x, upperPoints[0].y);
        for (let i = 1; i < upperPoints.length; i++) {
          ctx.lineTo(upperPoints[i].x, upperPoints[i].y);
        }
        for (let i = lowerPoints.length - 1; i >= 0; i--) {
          ctx.lineTo(lowerPoints[i].x, lowerPoints[i].y);
        }
        ctx.closePath();

        const bandGrad = ctx.createLinearGradient(0, height * 0.3, 0, height * 0.65);
        bandGrad.addColorStop(0, 'rgba(6, 182, 212, 0.035)');
        bandGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.025)');
        bandGrad.addColorStop(1, 'rgba(168, 85, 247, 0.010)');
        ctx.fillStyle = bandGrad;
        ctx.fill();
      }

      // 4. Statistical Lines (With Subtle Cyan Glow on the Mean)
      timeSeries.forEach((series, sIndex) => {
        ctx.beginPath();
        ctx.strokeStyle = series.stroke;
        ctx.lineWidth = series.width;
        if (series.dash.length > 0) ctx.setLineDash(series.dash);
        else ctx.setLineDash([]);

        if (series.glow) {
          ctx.shadowColor = 'rgba(6, 182, 212, 0.35)';
          ctx.shadowBlur = 8;
        } else {
          ctx.shadowBlur = 0;
        }

        const baseLineY = height * series.baseYRatio;
        let isFirst = true;

        for (let x = 0; x <= width + stepX; x += stepX) {
          let y =
            baseLineY +
            Math.sin(x * series.freq + time * series.speed) * series.amplitude +
            Math.cos(x * series.freq * 0.38 - time * series.speed * 0.55) *
              (series.amplitude * 0.32);

          if (mouse.x > -200) {
            const dx = x - mouse.x;
            const sigma = 150 + sIndex * 15;
            const kdeWeight = Math.exp(-(dx * dx) / (2 * sigma * sigma));
            const pull = (mouse.y - baseLineY) * kdeWeight * 0.40;
            const waveWarp = Math.sin(dx * 0.035 - time * 0.07) * 12 * kdeWeight;
            y += pull + waveWarp;
          }

          for (let r = 0; r < ripples.length; r++) {
            const rip = ripples[r];
            const distToRip = Math.abs(Math.hypot(x - rip.x, baseLineY - rip.y) - rip.radius);
            if (distToRip < 42) {
              const weight = (1 - distToRip / 42) * rip.alpha;
              y += Math.sin(distToRip * 0.14 - time * 0.09) * 12 * weight;
            }
          }

          if (isFirst) {
            ctx.moveTo(x, y);
            isFirst = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      ctx.shadowBlur = 0;
      ctx.setLineDash([]);

      // 5. Shockwave Ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.97;

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 211, 238, ${rip.alpha * 0.30})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        if (rip.radius > rip.maxRadius || rip.alpha < 0.015) {
          ripples.splice(r, 1);
        }
      }

      // 6. Cluster Centroids
      clusters.forEach((c) => {
        const cx = width * c.xRatio;
        const cy = height * c.yRatio;

        ctx.strokeStyle = `${c.color} 0.38)`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = `${c.color} 0.65)`;
        ctx.beginPath();
        ctx.arc(cx, cy, 2.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(148, 163, 184, 0.40)';
        ctx.font = '9px monospace';
        ctx.fillText(c.label, cx + 11, cy + 3);
      });

      // 7. Scatter Points
      const nearestPoints = [];

      dataPoints.forEach((p) => {
        p.angle += p.orbitSpeed;
        const cx = width * p.cluster.xRatio;
        const cy = height * p.cluster.yRatio;

        p.x = cx + Math.cos(p.angle) * p.orbitRadius;
        p.y = cy + Math.sin(p.angle) * (p.orbitRadius * 0.7);

        const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (mouse.x > 0 && distToMouse < 250) {
          nearestPoints.push({ point: p, dist: distToMouse });
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.cluster.color} 0.42)`;
        ctx.fill();
      });

      // 8. K-Nearest Neighbors (k=5)
      nearestPoints.sort((a, b) => a.dist - b.dist);
      const kNearest = nearestPoints.slice(0, 5);

      if (mouse.active && mouse.x > 0 && mouse.x < width && mouse.y > 0 && mouse.y < height) {
        kNearest.forEach((item, index) => {
          const p = item.point;
          const alpha = (1 - item.dist / 250) * 0.48;

          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size + 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(34, 211, 238, 0.85)';
          ctx.fill();
        });

        // 9. Statistical Telemetry HUD
        const hudX = mouse.x + 16;
        const hudY = mouse.y - 20;

        if (hudX < width - 180 && hudY > 30) {
          ctx.fillStyle = 'rgba(11, 15, 25, 0.82)';
          ctx.strokeStyle = 'rgba(34, 211, 238, 0.30)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(hudX, hudY, 142, 52, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#22d3ee';
          ctx.font = 'bold 9px monospace';
          ctx.fillText(`KDE Cluster • R²: 0.985`, hudX + 8, hudY + 15);

          ctx.fillStyle = '#94a3b8';
          ctx.font = '8px monospace';
          ctx.fillText(`μ: ${(mouse.x / 10).toFixed(0)}  σ: ±${(1.85).toFixed(2)}`, hudX + 8, hudY + 28);
          ctx.fillText(`k-NN: ${kNearest.length} nodes linked`, hudX + 8, hudY + 40);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
