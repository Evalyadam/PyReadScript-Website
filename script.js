document.addEventListener('DOMContentLoaded', function() {
    const cursorDot = document.querySelector("[datacursordot]");
    const cursorOutline = document.querySelector("[datacursoroutline]");

    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // cursorOutline.style.left = `${posX}px`;
        // cursorOutline.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, {duration: 300, fill: 'forwards'}
)


    });
});

