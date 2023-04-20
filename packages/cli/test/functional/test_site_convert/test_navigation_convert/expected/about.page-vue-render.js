const pageContent =  `<div id="app">
<header sticky>
  <navbar placement="top" type="dark">
    <template #brand><a href="/index.html" title="Home" class="navbar-brand">
      <i class="far fa-file-image"></i></a></template>
    <li><a href="/index.html" class="nav-link">HOME</a></li>
    <li><a href="/about.html" class="nav-link">ABOUT</a></li>
    <template #right><li>
      <form class="navbar-form">
        <searchbar :data="searchData" placeholder="Search" :on-hit="searchCallback" menu-align-right></searchbar></form></li></template></navbar></header>
<div id="flex-body">
  <overlay-source id="site-nav" tag-name="nav" to="site-nav">
    <div class="site-nav-top">
      <div class="fw-bold mb-2" style="font-size: 1.25rem;">Contents</div></div>
    <div class="nav-component slim-scroll">
      <site-nav><overlay-source class="site-nav-list site-nav-list-root" tag-name="ul" to="mb-site-nav">
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/404.html">404</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/Home.html">Home</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/Page-1.html">Page 1</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/README.html">README</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/contents/topic1.html">Topic 1</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/contents/topic2.html">Topic 2</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/contents/topic3a.html">Topic 3 A</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/contents/topic3b.html">Topic 3 B</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/index.html">Index</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/test_folder/extra_1.html">Extra 1</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/test_folder/extra_2.html">Extra 2</a></div></li>
<li><div class="site-nav-default-list-item site-nav-list-item-0" onclick="handleSiteNavClick(this)"><a href="/test_folder/extra_3.html">Extra 3</a></div></li>
</overlay-source>
</site-nav></div>
    <collapse-expand-buttons></collapse-expand-buttons></overlay-source>
  <div id="content-wrapper">
    <breadcrumb></breadcrumb>
    <h1 id="about">About<a class="fa fa-anchor" href="#about" onclick="event.stopPropagation()"></a></h1>
<p>Welcome to your <strong>About Us</strong> page.</p>
  </div>
  <overlay-source id="page-nav" tag-name="nav" to="page-nav">
    <div class="nav-component slim-scroll">
      </div></overlay-source>
  <scroll-top-button></scroll-top-button></div>
<footer>
  
  <div class="text-center">
    <small>[Generated by <a href="https://markbind.org/">MarkBind 4.1.0</a>]</small></div></footer></div>`;