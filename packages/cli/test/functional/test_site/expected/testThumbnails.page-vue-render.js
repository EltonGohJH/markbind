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
    <p><strong>Thumbnail test</strong></p>
<p><strong>Images</strong></p>
<p><strong>Square thumb, size = 100 (default)</strong>
<thumbnail src="http://placehold.it/800x600"></thumbnail></p>
<p><strong>Square thumb with alt=&quot;Test&quot;</strong>
<thumbnail alt="Test" src="/test_site/asdf"></thumbnail></p>
<p><strong>Square thumb, size = 200</strong>
<thumbnail src="http://placehold.it/800x600" size="200"></thumbnail></p>
<p><strong>Circle thumbs, size = 100</strong>
<thumbnail src="http://placehold.it/800x600" circle></thumbnail>
<thumbnail src="http://placehold.it/100x300" circle></thumbnail></p>
<p><strong>An actual image</strong>
<thumbnail circle size="300" src="/test_site/images/deer.jpg"></thumbnail>
<pic src="/test_site/images/deer.jpg" height="300"></pic></p>
<hr>
<p><strong>Broken link, still takes up the space it's supposed to</strong></p>
<thumbnail src="/broken_link" border></thumbnail>
<thumbnail src="http://placehold.it/300x100"></thumbnail>
<hr>
<p><strong>Borders</strong></p>
<div class="table-responsive"><table class="markbind-table table table-bordered table-striped"><thead>
<tr>
<th>Thumbnail</th>
<th>Attribute</th>
<th>Description</th></tr></thead>
<tbody>
<tr>
<td><thumbnail src="http://placehold.it/300x100"></thumbnail></td>
<td></td>
<td>no border</td></tr>
<tr>
<td><thumbnail border="3px solid red" src="http://placehold.it/300x100"></thumbnail></td>
<td><code class="line-numbers hljs inline no-lang" v-pre>border='3px solid red'</code></td>
<td>3 pixel thick solid red line</td></tr>
<tr>
<td><thumbnail border="4px dotted blue" src="http://placehold.it/300x100"></thumbnail></td>
<td><code class="line-numbers hljs inline no-lang" v-pre>4px dotted blue</code></td>
<td>4 pixel thick dotted blue line</td></tr></tbody></table></div><hr>
<p><strong>Background</strong></p>
<p><strong>Valid CSS properties</strong>
<thumbnail background="lightblue" circle></thumbnail>
<thumbnail background="#aaf" circle></thumbnail>
<thumbnail background="rgba(120, 120, 200, 0.4)" circle></thumbnail></p>
<p><strong>Invalid CSS properties</strong>
<thumbnail background="asdf" border="1px solid black" circle></thumbnail></p>
<p><strong>Empty</strong>
<thumbnail background border="1px solid black" circle></thumbnail></p>
<hr>
<p><strong>Text/Emojis/Icons</strong></p>
<p><strong>Text</strong>
<thumbnail border="1px solid black" circle>test</thumbnail></p>
<p><strong>Markdown</strong>
<thumbnail border="1px solid black" circle><em>test</em></thumbnail>
<thumbnail border="1px solid black" circle><strong>test</strong></thumbnail></p>
<p><strong>Emojis</strong>
<thumbnail border="1px solid black" circle>❌</thumbnail>
<thumbnail border="1px solid black" circle>🍆</thumbnail></p>
<p><strong>Icons</strong>
<thumbnail border="1px solid black" circle><span aria-hidden="true" class="fab fa-github"></span></thumbnail>
<thumbnail background="#666" font-color="#eee" circle><span aria-hidden="true" class="glyphicon glyphicon-book"></span></thumbnail></p>
<hr>
<p><strong>font-size/font-color</strong></p>
<p><strong>20px font-size</strong>
<thumbnail border="1px solid black" font-size="20" circle>test</thumbnail></p>
<p><strong>40px font-size</strong>
<thumbnail border="1px solid black" font-size="40" circle>test</thumbnail></p>
<p><strong>font-color</strong>
<thumbnail border="1px solid black" font-color="#669" circle>blue</thumbnail>
<thumbnail border="1px solid black" font-color="maroon" font-size="25" circle>maroon</thumbnail></p>
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