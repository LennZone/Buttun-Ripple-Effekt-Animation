window.addEventListener("load", () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.onmousemove = function (e) {
            let x = e.pageX - this.offsetLeft;
            let y = e.pageY - this.offsetTop;
            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', y + 'px');
        }
    })
});
