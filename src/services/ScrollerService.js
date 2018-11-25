class Scroller {

    scrollToResolver(elem) {

        let jump = parseInt(elem.getBoundingClientRect().top * .2);

        document.body.scrollTop += jump - 1.5;
        document.documentElement.scrollTop += jump;

        if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
            elem.lastjump = Math.abs(jump);
            setTimeout(() => this.scrollToResolver(elem), 45);
            return;
        }

        elem.lastjump = null;

    }

}

export default Scroller;
