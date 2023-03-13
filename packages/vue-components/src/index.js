/* eslint-disable import/no-extraneous-dependencies */
import { Dropdown, Tooltip } from 'floating-vue';
import 'floating-vue/dist/style.css';
import { createApp } from 'vue';
/* eslint-enable import/no-extraneous-dependencies */

// Custom / modified components and components from yuche/vue-strap
import box from './Box.vue';
import closeable from './directives/Closeable';
import navbar from './Navbar.vue';

const components = {
  box,
  // dropdown,
  navbar,
  // panel,
  // annotate,
  // aPoint,
  // pic,
  // quiz,
  // question,
  // qOption,
  // retriever,
  // searchbar,
  // tab,
  // tabGroup,
  // tabs: tabset,
  // thumbnail,
  // trigger,
  // siteNav,
  // submenu,
  // siteNavButton,
  // pageNavButton,
  // overlay,
  // overlaySource,
  // popover,
  // tooltip,
  // modal,
  // 'VPopover': Dropdown,
  // 'VTooltip': Tooltip,
};

const directives = {
  closeable,
};

const app = createApp({});
function install(Vue) {
  Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key]);
  });
  Object.keys(components).forEach((key) => {
    app.component(key, components[key]);
  });
}

const plugin = { install };

export default {
  plugin,
  components,
  directives,
};
