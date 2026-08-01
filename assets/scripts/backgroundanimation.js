// All AI generated ggs

(function() {
    const canvas = document.getElementById('constellation');
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = 100;
    const maxDistance = 120;
    const mouse = { x: null, y: null, radius: 150 };

    // Particle constructor
    function Particle(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
    }

    Particle.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffeebb';
        ctx.fill();
    };

    Particle.prototype.update = function() {
        if (this.x + this.size > width || this.x - this.size < 0) this.dx = -this.dx;
        if (this.y + this.size > height || this.y - this.size < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };

    // Create particles
    function init() {
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            const size = Math.random() * 2 + 1;
            const x = Math.random() * width;
            const y = Math.random() * height;
            const dx = (Math.random() - 0.5) * 1;
            const dy = (Math.random() - 0.5) * 1;
            particles.push(new Particle(x, y, dx, dy, size));
        }
    }

    // Draw lines between close particles
    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => p.update());
        connectParticles();
        requestAnimationFrame(animate);
    }

    // Mouse tracking
    window.addEventListener('mousemove', e => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    // Resize handling
    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        init();
    });

    init();
    animate();
})();