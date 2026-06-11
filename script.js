
    // Video modal logic: uses YouTube placeholder IDs (replace with your actual work)
    const modal = document.getElementById('videoModal');
    const modalIframe = document.getElementById('modalIframe');
    const closeModalBtn = document.querySelector('.close-modal');
    
    function openVideo(videoId, title) {
        // You can replace this with Vimeo or your own hosted video links
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        modalIframe.src = embedUrl;
        modal.classList.add('active');
    }
    
    function closeModal() {
        modalIframe.src = '';
        modal.classList.remove('active');
    }
    
    // Attach click events to all video cards
    document.querySelectorAll('.video-card').forEach(card => {
        const videoId = card.getAttribute('data-video-id');
        const videoTitle = card.getAttribute('data-video-title');
        const thumb = card.querySelector('.video-thumb');
        thumb.addEventListener('click', (e) => {
            e.stopPropagation();
            openVideo(videoId, videoTitle);
        });
    });
    
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if(e.target === modal) closeModal();
    });
    
    // Simple form alert (just for demo – you can connect to Formspree or getform.io)
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("🔥 Thanks! Since this is a demo template, replace the action link with Formspree. For now — go get those freelance clients!");
        // In real use: add action="https://formspree.io/f/xxxx" method="POST"
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    document.querySelector('.btn-outline')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    });
    const profile = document.querySelector(".hero-image img");

profile.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;

    profile.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;
});

profile.addEventListener("mouseleave", () => {
    profile.style.transform =
        "rotateY(0deg) rotateX(0deg)";
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 100){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });

});
window.onscroll = function() {

    if (window.scrollY > 200) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }

};