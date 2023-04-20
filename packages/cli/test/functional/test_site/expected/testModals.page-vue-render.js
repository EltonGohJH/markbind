const pageContent =  `<div id="app">

<div><header>
  <navbar type="dark" default-highlight-on="sibling-or-child">
    <template #brand><a href="/" title="Home" class="navbar-brand">MarkBind Test Site</a></template>
    <li><a class="nav-link" href="/test_site/bugs/index.html">Open Bugs</a></li></navbar>
  <div class="bg-info display-4 text-center text-white">
      <br>
      Test Jumbotron<br>
      <br></div></header>
<p><strong>Relative Link Test</strong> This is a relative Intra-Site link in a layout (see <a href="/test_site/index.html#heading-with-hidden-keyword">link</a>)</p></div>
<div id="flex-body">
  <overlay-source id="site-nav" tag-name="nav" to="site-nav">
    <div class="site-nav-top">
      <div class="fw-bold mb-2" style="font-size: 1.25rem;"><div><h2 id="default-layout">Default Layout<a class="fa fa-anchor" href="#default-layout" onclick="event.stopPropagation()"></a></h2></div></div></div>
    <div class="nav-component slim-scroll">
      <div><site-nav><overlay-source class="site-nav-list site-nav-list-root" tag-name="ul" to="mb-site-nav">
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/test_site/index.html">Home 🏠</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/test_site/bugs/index.html">Open Bugs 🐛</a></div></li>
<li class="site-nav-custom-list-item site-nav-list-item-0">
<h3 id="testing-site-nav">Testing Site-Nav<a class="fa fa-anchor" href="#testing-site-nav" onclick="event.stopPropagation()"></a></h3>
</li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><strong>Dropdown </strong> <span aria-hidden="true" class="glyphicon glyphicon-search"></span> title ✏️ <!-- Nested list items will be placed inside a Dropdown menu -->

<div class="site-nav-dropdown-btn-container"><i class="site-nav-dropdown-btn-icon site-nav-rotate-icon" onclick="handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();">
<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
</i></div></div><ul class="site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list">
<li><div class="site-nav-default-list-item site-nav-list-item-1" onclick="handleSiteNavClick(this)"><a href="https://www.google.com/">Dropdown link one</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-1" onclick="handleSiteNavClick(this)"><a href="https://www.google.com/">Html within site-nav <span style="color: red;">should</span> be displayed properly</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-1" onclick="handleSiteNavClick(this)">Nested Dropdown title 📐

<div class="site-nav-dropdown-btn-container"><i class="site-nav-dropdown-btn-icon" onclick="handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();">
<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
</i></div></div><ul class="site-nav-dropdown-container site-nav-list">
<li><div class="site-nav-default-list-item site-nav-list-item-2" onclick="handleSiteNavClick(this)"><a href="https://www.google.com/"><strong>Nested</strong> Dropdown link one</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-2" onclick="handleSiteNavClick(this)"><a href="https://www.google.com/"><strong>Nested</strong> Dropdown link two</a></div></li>
</ul></li>
<li><div class="site-nav-default-list-item site-nav-list-item-1" onclick="handleSiteNavClick(this)"><a href="https://www.google.com/">Dropdown link two</a></div></li>
</ul></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="https://www.google.com/"><mark>Third Link</mark> 📋</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)">Filler text <a href="https://www.youtube.com/"><span aria-hidden="true" class="glyphicon glyphicon-facetime-video"></span> Youtube 📺</a> filler text<!-- Using a link as a Dropdown title will not render a Dropdown menu -->

<div class="site-nav-dropdown-btn-container"><i class="site-nav-dropdown-btn-icon" onclick="handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();">
<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
</i></div></div><ul class="site-nav-dropdown-container site-nav-list">
<li><div class="site-nav-default-list-item site-nav-list-item-1" onclick="handleSiteNavClick(this)"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">The answer to everything in the universe</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-1" onclick="handleSiteNavClick(this)"><mark>Dropdown title</mark> <span aria-hidden="true" class="glyphicon glyphicon-comment"></span> ✏️ <!-- Dropdown menus in are still supported inside, as long as the title is not a link -->

<div class="site-nav-dropdown-btn-container"><i class="site-nav-dropdown-btn-icon site-nav-rotate-icon" onclick="handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();">
<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
</i></div></div><ul class="site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list">
<li><div class="site-nav-default-list-item site-nav-list-item-2" onclick="handleSiteNavClick(this)"><a href="https://www.google.com/"><strong>Nested</strong> Dropdown link one</a></div></li>
</ul></li>
</ul></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)">Really Long Dropdown Title Really Long Dropdown Title Really Long Dropdown Title Really Long Dropdown

<div class="site-nav-dropdown-btn-container"><i class="site-nav-dropdown-btn-icon" onclick="handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();">
<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
</i></div></div><ul class="site-nav-dropdown-container site-nav-list">
<li class="site-nav-custom-list-item site-nav-list-item-1">Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text Really Really Long Text</li>
<li><div class="site-nav-default-list-item site-nav-list-item-1" onclick="handleSiteNavClick(this)">Nested Dropdown Title

<div class="site-nav-dropdown-btn-container"><i class="site-nav-dropdown-btn-icon" onclick="handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();">
<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
</i></div></div><ul class="site-nav-dropdown-container site-nav-list">
<li class="site-nav-custom-list-item site-nav-list-item-2">Hello Doge Hello Doge 🐶</li>
<li><div class="site-nav-default-list-item site-nav-list-item-2" onclick="handleSiteNavClick(this)"><a href="/test_site/index.html"><strong>NESTED LINK</strong> Home 🏠</a></div></li>
<li class="site-nav-custom-list-item site-nav-list-item-2">Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit Text cut off from height limit</li>
</ul></li>
</ul></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)">Test line break in navigation layout

<div class="site-nav-dropdown-btn-container"><i class="site-nav-dropdown-btn-icon" onclick="handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();">
<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
</i></div></div><ul class="site-nav-dropdown-container site-nav-list">
<li class="site-nav-custom-list-item site-nav-list-item-1">Nested line break text ✂️</li>
<li><div class="site-nav-default-list-item site-nav-list-item-1" onclick="handleSiteNavClick(this)"><a href="/test_site/index.html">Nested line break href</a>

<div class="site-nav-dropdown-btn-container"><i class="site-nav-dropdown-btn-icon" onclick="handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();">
<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
</i></div></div><ul class="site-nav-dropdown-container site-nav-list">
<li class="site-nav-custom-list-item site-nav-list-item-2">Nested Nested line break text ✂️</li>
</ul></li>
<li><div class="site-nav-default-list-item site-nav-list-item-1" onclick="handleSiteNavClick(this)">Nested line break dropdown menu

<div class="site-nav-dropdown-btn-container"><i class="site-nav-dropdown-btn-icon" onclick="handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();">
<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
</i></div></div><ul class="site-nav-dropdown-container site-nav-list">
<li class="site-nav-custom-list-item site-nav-list-item-2">Line break item 2 📘</li>
</ul></li>
</ul></li>
</overlay-source>
</site-nav></div></div></overlay-source>
  <div id="content-wrapper">
    <breadcrumb></breadcrumb>
    <p><strong>Modal with attributes</strong></p>
<p>This is a <trigger for="modal:loremipsum" trigger="hover">hover trigger</trigger> for a modal.</p>
<modal id="modal:loremipsum"><template #header><strong>Modal header</strong> 🚀</template>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</modal>
<br>
This is the same <trigger for="modal:loremipsum" trigger="click">click trigger</trigger> as last one.
<p><trigger for="modal:centered">Trigger for a centered modal with no header</trigger>.</p>
<modal id="modal:centered" center>
<p>Centered modal contents <em>(this modal has no header)</em></p></modal>
<p><trigger for="modal:ok-text">Trigger for centered modal with a custom OK button</trigger>.</p>
<modal id="modal:ok-text" ok-text="Custom OK" center><template #header><span class="large">OK button visible!</span></template>
<p>Content of a modal with <span class="large">OK button</span></p></modal>
<p><trigger for="modal:small">Trigger for a small modal</trigger>.</p>
<modal id="modal:small" small><template #header>Small modal title</template>
  Content of a small modal
</modal>
<p><trigger for="modal:large">Trigger for a large modal</trigger>.</p>
<modal id="modal:large" large><template #header>Large modal title</template>
  Content of a large modal
</modal>
<p><trigger for="modal:fade">Trigger for a modal with <em>fade</em> effect</trigger>.</p>
<modal id="modal:fade" center effect="fade"><template #header><em>Fading modal</em> title</template>
  Content of a fade modal 
</modal>
<p><trigger for="modal:backdrop" trigger="click">Click trigger for a backdrop modal</trigger>.
<trigger for="modal:backdrop" trigger="hover">Hover trigger for a backdrop modal</trigger>.</p>
<modal id="modal:backdrop" backdrop="false"><template #header>backdrop modal title</template>
  Content of a backdrop modal.
  It cannot be closed by clicking outside the modal.
</modal>
<p><trigger for="modal:longtext">Trigger for modal that should overflow</trigger>.</p>
<modal id="modal:longtext" large><template #header><span class="large">this modal has long text</span></template>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p></modal>
<p><strong>Modal with slots</strong></p>
<p><trigger for="modal:with-slots">Trigger for a modal with slots</trigger>.</p>
<modal id="modal:with-slots">
  <template #header><span>Modal header from a slot</span></template>
  <template #footer><div>
    Footer from a slot:
    <button class="btn btn-primary">Primary btn</button>
    <button class="btn btn-secondary">secondary btn</button></div></template>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</modal>
<p><strong>Modal with slots overriding attributes</strong></p>
<p><trigger for="modal:with-slots-and-attribs">Trigger for a modal with slots</trigger>.</p>
<modal id="modal:with-slots-and-attribs">
  <template #header><div>Modal header from a slot correctly overriding attribute</div></template>
  <template #footer><div>
    Footer from a slot:
    <button class="btn btn-primary">Primary btn</button>
    <button class="btn btn-secondary">secondary btn</button></div></template>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</modal>
<p><strong>Modal containing headers</strong></p>
<p><trigger for="modal:withpanel">Open modal with panel</trigger>.</p>
<modal id="modal:withpanel"><template #header>has a panel</template>
<h1 id="heading-inside-modal-should-not-appear-in-pagenav-and-search">Heading inside modal should not appear in pagenav and search<a class="fa fa-anchor" href="#heading-inside-modal-should-not-appear-in-pagenav-and-search" onclick="event.stopPropagation()"></a></h1>
<h2 id="another-heading-inside-modal-should-not-appear-in-pagenav-and-search">Another heading inside modal should not appear in pagenav and search<a class="fa fa-anchor" href="#another-heading-inside-modal-should-not-appear-in-pagenav-and-search" onclick="event.stopPropagation()"></a></h2>
<panel expanded panelId="heading-inside-panel-inside-modal-should-not-appear-in-pagenav-and-search"><template #header><h2 id="heading-inside-panel-inside-modal-should-not-appear-in-pagenav-and-search">Heading inside panel inside modal should not appear in pagenav and search<a class="fa fa-anchor" href="#heading-inside-panel-inside-modal-should-not-appear-in-pagenav-and-search" onclick="event.stopPropagation()"></a></h2></template>
  Panel content
</panel></modal>
  </div>
  <overlay-source id="page-nav" tag-name="nav" to="page-nav">
    <div class="nav-component slim-scroll">
      </div></overlay-source>    
  <scroll-top-button></scroll-top-button></div>
<div><footer>
<h1 id="heading-in-footer-should-not-be-indexed">Heading in footer should not be indexed<a class="fa fa-anchor" href="#heading-in-footer-should-not-be-indexed" onclick="event.stopPropagation()"></a></h1>
  <div class="text-center">
    This is a dynamic height footer that supports markdown <span>😄</span>!
  </div></footer></div></div>`;