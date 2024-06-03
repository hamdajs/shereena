window.addEventListener('scroll', function() {
    const stories = document.querySelectorAll('.story');
    const scrollPosition = window.scrollY;
    
    stories.forEach(story => {
        const depth = parseInt(story.style.zIndex);
        const movement = -(scrollPosition * (depth * 0.5));
        story.style.transform = `translate3d(0, ${movement}px, 0)`;
    });
});
