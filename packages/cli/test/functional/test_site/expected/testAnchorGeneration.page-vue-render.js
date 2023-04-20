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
    
<h1 id="root-file">Root file<a class="fa fa-anchor" href="#root-file" onclick="event.stopPropagation()"></a></h1>
<h1 id="should-have-anchor">should have anchor<a class="fa fa-anchor" href="#should-have-anchor" onclick="event.stopPropagation()"></a></h1>
<h2 id="should-have-anchor-2">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-2" onclick="event.stopPropagation()"></a></h2>
<h3 id="should-have-anchor-3">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-3" onclick="event.stopPropagation()"></a></h3>
<h4 id="should-have-anchor-4">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-4" onclick="event.stopPropagation()"></a></h4>
<h5 id="should-have-anchor-5">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-5" onclick="event.stopPropagation()"></a></h5>
<h6 id="should-have-anchor-6">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-6" onclick="event.stopPropagation()"></a></h6>
<panel panelId="should-have-anchor-7"><template #header><h4 id="should-have-anchor-7">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-7" onclick="event.stopPropagation()"></a></h4></template>
Lorem ipsum
</panel>
<panel><template #header><p>Collapsed</p></template>
<p>Headings in a collapsed-by-default panel should <strong>not</strong> have anchors</p>
<h1 id="should-not-have-anchor">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor" onclick="event.stopPropagation()"></a></h1>
<h2 id="should-not-have-anchor-2">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor-2" onclick="event.stopPropagation()"></a></h2>
<h3 id="should-not-have-anchor-3">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor-3" onclick="event.stopPropagation()"></a></h3>
<h4 id="should-not-have-anchor-4">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor-4" onclick="event.stopPropagation()"></a></h4>
<h5 id="should-not-have-anchor-5">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor-5" onclick="event.stopPropagation()"></a></h5>
<h6 id="should-not-have-anchor-6">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor-6" onclick="event.stopPropagation()"></a></h6></panel>
<panel expanded><template #header><p>Expanded</p></template>
<p>Headings in a expanded-by-default panel <strong>should</strong> have anchors</p>
<h1 id="should-have-anchor-8">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-8" onclick="event.stopPropagation()"></a></h1>
<h2 id="should-have-anchor-9">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-9" onclick="event.stopPropagation()"></a></h2>
<h3 id="should-have-anchor-10">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-10" onclick="event.stopPropagation()"></a></h3>
<h4 id="should-have-anchor-11">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-11" onclick="event.stopPropagation()"></a></h4>
<h5 id="should-have-anchor-12">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-12" onclick="event.stopPropagation()"></a></h5>
<h6 id="should-have-anchor-13">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-13" onclick="event.stopPropagation()"></a></h6></panel>
<hr>
<div><h1 id="included-file">Included File<a class="fa fa-anchor" href="#included-file" onclick="event.stopPropagation()"></a></h1>
<br>
<h1 id="should-have-anchor-14">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-14" onclick="event.stopPropagation()"></a></h1>
<h2 id="should-have-anchor-15">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-15" onclick="event.stopPropagation()"></a></h2>
<h3 id="should-have-anchor-16">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-16" onclick="event.stopPropagation()"></a></h3>
<h4 id="should-have-anchor-17">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-17" onclick="event.stopPropagation()"></a></h4>
<h5 id="should-have-anchor-18">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-18" onclick="event.stopPropagation()"></a></h5>
<h6 id="should-have-anchor-19">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-19" onclick="event.stopPropagation()"></a></h6>
<panel panelId="should-have-anchor-20"><template #header><h4 id="should-have-anchor-20">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-20" onclick="event.stopPropagation()"></a></h4></template>
Lorem ipsum
</panel>
<panel><template #header><p>Collapsed</p></template>
<p>Headings in a collapsed-by-default panel should <strong>not</strong> have anchors</p>
<h1 id="should-not-have-anchor-7">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor-7" onclick="event.stopPropagation()"></a></h1>
<h2 id="should-not-have-anchor-8">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor-8" onclick="event.stopPropagation()"></a></h2>
<h3 id="should-not-have-anchor-9">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor-9" onclick="event.stopPropagation()"></a></h3>
<h4 id="should-not-have-anchor-10">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor-10" onclick="event.stopPropagation()"></a></h4>
<h5 id="should-not-have-anchor-11">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor-11" onclick="event.stopPropagation()"></a></h5>
<h6 id="should-not-have-anchor-12">should not have anchor<a class="fa fa-anchor" href="#should-not-have-anchor-12" onclick="event.stopPropagation()"></a></h6></panel>
<panel expanded><template #header><p>Expanded</p></template>
<p>Headings in a expanded-by-default panel <strong>should</strong> have anchors</p>
<h1 id="should-have-anchor-21">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-21" onclick="event.stopPropagation()"></a></h1>
<h2 id="should-have-anchor-22">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-22" onclick="event.stopPropagation()"></a></h2>
<h3 id="should-have-anchor-23">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-23" onclick="event.stopPropagation()"></a></h3>
<h4 id="should-have-anchor-24">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-24" onclick="event.stopPropagation()"></a></h4>
<h5 id="should-have-anchor-25">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-25" onclick="event.stopPropagation()"></a></h5>
<h6 id="should-have-anchor-26">should have anchor<a class="fa fa-anchor" href="#should-have-anchor-26" onclick="event.stopPropagation()"></a></h6></panel></div>
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