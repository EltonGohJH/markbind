<template>
  <div>
    <nav
      ref="navbar"
      :class="['navbar', 'navbar-expand-md', 'd-print-none', themeOptions, addClass, fixedOptions]"
    >
      <div class="container-fluid">
        <div class="navbar-left">
          <slot name="brand"></slot>
        </div>
        <div ref="navbarDefault" class="navbar-default">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <slot></slot>
          </ul>
        </div>

        <ul v-if="slots?.right" class="navbar-nav navbar-right">
          <slot name="right"></slot>
        </ul>
      </div>
    </nav>
    <div
      v-show="isLowerNavbarShowing"
      ref="lowerNavbar"
      class="lower-navbar-container"
    >
      <slot name="lower-navbar">
        <site-nav-button />
        <page-nav-button />
      </slot>
    </div>
  </div>
</template>

<script>
import { ref, computed, onBeforeMount, onBeforeUnmount } from 'vue';
import $ from './utils/NodeList';
import { toBoolean } from './utils/utils';
import normalizeUrl from './utils/urls';
import SiteNavButton from './SiteNavButton.vue';
import PageNavButton from './PageNavButton.vue';

export default {
  components: {
    SiteNavButton,
    PageNavButton,
  },
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    addClass: {
      type: String,
      default: '',
    },
    fixed: {
      type: [Boolean, String],
      default: false,
    },
    defaultHighlightOn: {
      type: String,
      default: 'sibling-or-child',
    },
  },
  provide() {
    return {
      toggleLowerNavbar: this.toggleLowerNavbar,
      isParentNavbar: true,
    };
  },
  setup(props, { slots }) {
    const _navbar = true;

    onBeforeMount(() => {
      const $dropdown = $('.dropdown>[data-bs-toggle="dropdown"]', this.$el).parent();
      $dropdown.on('click', '.dropdown-toggle', (e) => {
        e.preventDefault();
        $dropdown.each((content) => {
          if (content.contains(e.target)) content.classList.toggle('open');
        });
      }).on('click', '.dropdown-menu>li>a', (e) => {
        $dropdown.each((content) => {
          if (content.contains(e.target)) content.classList.remove('open');
        });
      }).onBlur((e) => {
        $dropdown.each((content) => {
          if (!content.contains(e.target)) content.classList.remove('open');
        });
      });

      // highlight current nav link
      this.highlightLink(window.location.href);

      // scroll default navbar horizontally to current link if it is beyond the current scroll
      const currentNavlink = $(this.$refs.navbarDefault).find('.current')[0];
      if (currentNavlink && window.innerWidth < 768
          && currentNavlink.offsetLeft + currentNavlink.offsetWidth > window.innerWidth) {
        this.$refs.navbarDefault.scrollLeft = currentNavlink.offsetLeft + currentNavlink.offsetWidth
            - window.innerWidth;
      }

      this.toggleLowerNavbar();
      $(window).on('resize', this.toggleLowerNavbar);

      // scroll default navbar horizontally when mousewheel is scrolled
      $(this.$refs.navbarDefault).on('wheel', (e) => {
        const isDropdown = (nodes) => {
          for (let i = 0; i < nodes.length; i += 1) {
            if (nodes[i].classList && nodes[i].classList.contains('dropdown-menu')) {
              return true;
            }
          }
          return false;
        };

        // prevent horizontal scrolling if the scroll is on dropdown menu
        if (window.innerWidth < 768 && !isDropdown(e.path)) {
          e.preventDefault();
          this.$refs.navbarDefault.scrollLeft += e.deltaY;
        }
      });
    });

    onBeforeUnmount(() => {
      $('.dropdown', this.$el).off('click').offBlur();
      $(window).off('resize', this.toggleLowerNavbar);
      $(this.$refs.navbarDefault).off('wheel');
    });

    return {
      _navbar,
      id: ref('bs-example-navbar-collapse-1'),
      styles: ref({}),
      isLowerNavbarShowing: ref(false),
      fixedBool: computed(() => toBoolean(props.fixed)),
      fixedOptions: computed(() => (props.fixedBool ? 'navbar-fixed' : '')),
      slots: computed(() => slots),
      themeOptions: computed(() => {
        switch (props.type) {
        case 'none':
          return '';
        case 'light':
          return 'navbar-light bg-light';
        case 'dark':
          return 'navbar-dark bg-dark';
        case 'primary':
        default:
          return 'navbar-dark bg-primary';
        }
      }),
    };
  },
  methods: {
    // Splits a normalised URL into its parts,
    // e.g http://site.org/foo/bar/index.html -> ['foo','bar','index.html']
    splitUrl(url) {
      const u = new URL(normalizeUrl(url));
      return `${u.pathname}`.substr(1).split('/');
    },
    isEqualExceptLast(hParts, uParts) {
      for (let i = 0; i < hParts.length - 1; i += 1) {
        if (hParts[i] !== uParts[i]) {
          return false;
        }
      }
      return true;
    },
    isSibling(url, href) {
      const hParts = this.splitUrl(href);
      const uParts = this.splitUrl(url);
      if (hParts.length !== uParts.length) {
        return false;
      }
      return this.isEqualExceptLast(hParts, uParts);
    },
    isChild(url, href) {
      const hParts = this.splitUrl(href);
      const uParts = this.splitUrl(url);
      if (uParts.length <= hParts.length) {
        return false;
      }
      return this.isEqualExceptLast(hParts, uParts);
    },
    isExact(url, href) {
      return normalizeUrl(url) === normalizeUrl(href);
    },
    addClassIfDropdown(dropdownLinks, a, li) {
      if (dropdownLinks.includes(a)) {
        a.classList.add('dropdown-current');
        this.addClassIfSubmenu(a, li);
      }
    },
    addClassIfSubmenu(a, li) {
      let el = a.parentElement;
      while (el !== li) {
        if (el.classList.contains('dropdown-submenu')) {
          $(el).findChildren('a').each(aChild => aChild.classList.add('dropdown-current'));
        }
        el = el.parentElement;
      }
    },
    highlightLink(url) {
      const defHlMode = this.defaultHighlightOn;
      const navLis = [];
      this.$el.querySelectorAll('.navbar-nav').forEach(nav => navLis.push(...Array.from(nav.children)));
      // attempt an exact match first
      for (let i = 0; i < navLis.length; i += 1) {
        const li = navLis[i];
        const standardLinks = [li];
        const navLinks = Array.from(li.querySelectorAll('a.nav-link'));
        const dropdownLinks = Array.from(li.querySelectorAll('a.dropdown-item'));
        const allNavLinks = standardLinks.concat(navLinks).concat(dropdownLinks).filter(a => a.href);
        for (let j = 0; j < allNavLinks.length; j += 1) {
          const a = allNavLinks[j];
          const hlMode = a.getAttribute('highlight-on') || defHlMode;
          if (hlMode === 'none') {
            // eslint-disable-next-line no-continue
            continue;
          }
          // terminate early on an exact match
          if (this.isExact(url, a.href)) {
            li.classList.add('current');
            this.addClassIfDropdown(dropdownLinks, a, li);
            return;
          }
        }
      }
      // fallback to user preference, otherwise
      for (let i = 0; i < navLis.length; i += 1) {
        const li = navLis[i];
        const standardLinks = [li];
        const navLinks = Array.from(li.querySelectorAll('a.nav-link'));
        const dropdownLinks = Array.from(li.querySelectorAll('a.dropdown-item'));
        const allNavLinks = standardLinks.concat(navLinks).concat(dropdownLinks).filter(a => a.href);
        for (let j = 0; j < allNavLinks.length; j += 1) {
          const a = allNavLinks[j];
          const hlMode = a.getAttribute('highlight-on') || defHlMode;
          if (hlMode === 'none') {
            // eslint-disable-next-line no-continue
            continue;
          }
          // Ignores invalid navbar highlight rule
          if (hlMode === 'sibling-or-child') {
            if (this.isSibling(url, a.href) || this.isChild(url, a.href)) {
              li.classList.add('current');
              this.addClassIfDropdown(dropdownLinks, a, li);
              return;
            }
          } else if (hlMode === 'sibling') {
            if (this.isSibling(url, a.href)) {
              li.classList.add('current');
              this.addClassIfDropdown(dropdownLinks, a, li);
              return;
            }
          } else if (hlMode === 'child') {
            if (this.isChild(url, a.href)) {
              li.classList.add('current');
              this.addClassIfDropdown(dropdownLinks, a, li);
              return;
            }
          }
        }
      }
    },
    toggleLowerNavbar() {
      if (this.$refs.lowerNavbar.childElementCount > 0) {
        this.isLowerNavbarShowing = true;
      } else {
        this.isLowerNavbarShowing = false;
      }
    },
  },
};
</script>

<style scoped>
  .navbar-default {
      display: flex !important;
      flex-basis: auto !important;
      flex-grow: 1 !important;
      align-items: center !important;
  }
</style>
