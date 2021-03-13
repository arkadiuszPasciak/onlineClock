module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
          @import "~@/styles/colors.scss";
          @import "~@/styles/fonts.scss";
          @import "~@/styles/rwd.scss";
          @import "~@/styles/btn.scss";
          @import "~@/styles/hover.scss";
        `
            }
        }
    },
};
