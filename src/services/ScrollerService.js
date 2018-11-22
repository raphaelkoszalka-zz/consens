class Scroller {

    scrollToResolver(elem, McGyverism) {

        let jump = parseInt(elem.getBoundingClientRect().top * .2);

        if (McGyverism) {
            jump -= McGyverism;
        }

        document.body.scrollTop += jump + 2.5;
        document.documentElement.scrollTop += jump + 2.5;

        if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
            elem.lastjump = Math.abs(jump);
            setTimeout(() => this.scrollToResolver(elem), 45);
            return;
        }

        elem.lastjump = null;

    }

}

export default Scroller;
