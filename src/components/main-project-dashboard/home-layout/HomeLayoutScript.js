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
      showProject: false,
    };
  },
  methods: {
    changeCurrentNav(nav) {
      this.showProject = false;
      this.currentNav = nav;
    },
    changeShowProject(bool) {
      this.showProject = bool;
    },
  },
};
