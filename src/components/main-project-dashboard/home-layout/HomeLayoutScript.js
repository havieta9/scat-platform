export default {
  data() {
    return {
      listNavItems: [
        "News",
        "Popular",
        "Tags",
        "History",
        "Catalyst monitoring",
      ],
      currentNav: "News",
    };
  },
  methods: {
    changeCurrentNav(nav) {
      this.currentNav = nav;
      console.log( this.currentNav)
    },
  },
};
