(async () => {
    const cube = document.querySelector('.cube');
    let isDragging = false;
    let previousMouseX;
    let previousMouseY;
    let rotationX = 0;
    let rotationY = 0;

    const navigateToLink = (event, link) => {
        event.preventDefault();
        window.location.href = link;
    };

    const onMouseDown = (event) => {
        isDragging = true;
        previousMouseX = event.clientX;
        previousMouseY = event.clientY;
    };

    const onMouseMove = async (event) => {
        if (!isDragging) return;
        const deltaX = event.clientX - previousMouseX;
        const deltaY = event.clientY - previousMouseY;
        rotationY += deltaX * 0.5;
        rotationX -= deltaY * 0.5;
        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        previousMouseX = event.clientX;
        previousMouseY = event.clientY;
    };

    const onMouseUp = () => {
        isDragging = false;
    };

    const onMouseOver = async (event) => {
        cube.style.cursor = 'grab';
    };

    const onMouseOut = async (event) => {
        cube.style.cursor = 'default';
    };

    cube.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    cube.addEventListener('mouseover', onMouseOver);
    cube.addEventListener('mouseout', onMouseOut);

    // Initialize cube position
    cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
})();