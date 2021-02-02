
export const WindowWidthMixin = {
    mounted(){
      this.updateWindowWidth();
      window.addEventListener('resize', this.updateWindowWidth)
    },
    destroyed(){
      window.removeEventListener('resize', this.updateWindowWidth);
    },
    computed: {
      isDesktop() {
        return this.windowWidth > 768;
      }
    },  
    methods: {
        updateWindowWidth() { this.windowWidth = window.innerWidth; },
        dvw(v) {
            return `${100 * v / 1600}vw`;
        },
        mvw(v) {
            return `${100 * v / 414}vw`;
        },
    },
    data() {
        return ({ windowWidth: 1500, })
    }
};