document.addEventListener('DOMContentLoaded', () => {
    const pElements = document.querySelectorAll('.word p');

    pElements.forEach((p) => {
        p.addEventListener('mouseenter', () => {
            pElements.forEach((otherp) => {
                if (otherp !== p) {
                    otherp.classList.add('dimmed'); // 其他元素變暗
                }
            });
        });

        h2.addEventListener('mouseleave', () => {
            pElements.forEach((otherp) => {
                otherp.classList.remove('dimmed'); // 恢復正常
            });
        });
    });
});
