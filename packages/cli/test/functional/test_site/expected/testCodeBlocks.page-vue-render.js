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
    <p><strong>Test: Code blocks</strong></p>
<p><strong>Normal fenced code should render correctly</strong></p>
<pre><code class="line-numbers hljs" v-pre><span>Content in a fenced code block
</span></code></pre><p><strong>With syntax coloring should render correctly</strong></p>
<pre><code class="line-numbers hljs xml" v-pre><span><span class="hljs-tag">&lt;<span class="hljs-name">foo</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">bar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">bar</span>&gt;</span>
</span><span><span class="hljs-tag">&lt;/<span class="hljs-name">foo</span>&gt;</span>
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>codeLineNumbers</code> option in <code class="line-numbers hljs inline no-lang" v-pre>site.json</code> should set the global code line numbers behavior (should show line numbers)</strong></p>
<pre><code class="line-numbers hljs xml" v-pre><span><span class="hljs-tag">&lt;<span class="hljs-name">foo</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">bar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">bar</span>&gt;</span>
</span><span><span class="hljs-tag">&lt;/<span class="hljs-name">foo</span>&gt;</span>
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>line-numbers</code> class should show corresponding line numbers</strong></p>
<pre><code class="line-numbers hljs xml" v-pre><span><span class="hljs-tag">&lt;<span class="hljs-name">foo</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">bar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">bar</span>&gt;</span>
</span><span><span class="hljs-tag">&lt;/<span class="hljs-name">foo</span>&gt;</span>
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>no-line-numbers</code> class should hide corresponding line numbers</strong></p>
<pre><code class="no-line-numbers hljs xml" v-pre><span><span class="hljs-tag">&lt;<span class="hljs-name">foo</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">bar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">bar</span>&gt;</span>
</span><span><span class="hljs-tag">&lt;/<span class="hljs-name">foo</span>&gt;</span>
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>start-from</code> attr should set inline css in <code class="line-numbers hljs inline no-lang" v-pre>&lt;code&gt;</code> tag, enabling lines to start from a specific line number</strong></p>
<pre><code style="counter-reset: line 29;" class="line-numbers hljs markdown" v-pre><span><span class="hljs-section"><span class="hljs-strong">****</span><span class="hljs-emphasis">*</span></span>
</span><span><span class="hljs-emphasis"><span class="hljs-section">-----</span></span>
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>highlight-lines</code> attr causes corresponding lines to have 'highlighted' class</strong></p>
<pre><code class="line-numbers hljs markdown" v-pre><span><span class="highlighted">1  highlighted</span>
</span><span>2
</span><span><span class="highlighted">3  highlighted</span>
</span><span>4
</span><span><span class="highlighted">5  highlighted</span>
</span><span><span class="highlighted">6  highlighted</span>
</span><span><span class="highlighted">7  highlighted</span>
</span><span><span class="highlighted">8  highlighted</span>
</span><span>9
</span><span>10
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>highlight-lines</code> attr with <code class="line-numbers hljs inline no-lang" v-pre>start-from</code> attr should cause corresponding lines to have 'highlighted' class based on <code class="line-numbers hljs inline no-lang" v-pre>start-from</code></strong></p>
<pre><code style="counter-reset: line 10;" class="line-numbers hljs markdown" v-pre><span><span class="highlighted">11  highlighted</span>
</span><span>12
</span><span><span class="highlighted">13  highlighted</span>
</span><span>14
</span><span><span class="highlighted">15  highlighted</span>
</span><span><span class="highlighted">16  highlighted</span>
</span><span><span class="highlighted">17  highlighted</span>
</span><span><span class="highlighted">18  highlighted</span>
</span><span>19
</span><span>20
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>highlight-lines</code> attr with empty (any variant) line-slice syntax should highlight leading/trailing spaces</strong></p>
<pre><code class="line-numbers hljs xml" v-pre><span><span class="hljs-tag">&lt;<span class="hljs-name">foo</span>&gt;</span>
</span><span class="highlighted">  <span class="hljs-tag">&lt;<span class="hljs-name">bar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">bar</span>&gt;</span>
</span><span class="highlighted">  <span class="hljs-tag">&lt;<span class="hljs-name">baz</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">baz</span>&gt;</span>
</span><span class="highlighted">  <span class="hljs-tag">&lt;<span class="hljs-name">qux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">qux</span>&gt;</span>
</span><span class="highlighted">  <span class="hljs-tag">&lt;<span class="hljs-name">quux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">quux</span>&gt;</span>
</span><span><span class="hljs-tag">&lt;/<span class="hljs-name">foo</span>&gt;</span>
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>highlight-lines</code> attr with full character-variant line-slice syntax should highlight only at specified range</strong></p>
<pre><code class="line-numbers hljs xml" v-pre><span><span class="hljs-tag">&lt;<span class="hljs-name highlighted">foo</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">bar</span> <span class="hljs-attr highlighted">type</span><span class="highlighted">=</span><span class="hljs-string"><span><span class="highlighted">&quot;na</span>me&quot;</span></span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">bar</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name"><span>b<span class="highlighted">az</span></span></span><span class="highlighted"> </span><span class="hljs-attr highlighted">type</span><span class="highlighted">=</span><span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">baz</span>&gt;</span>
</span><span>  <span class="highlighted"><span class="hljs-tag">&lt;<span class="hljs-name">qux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">qux</span>&gt;</span></span>
</span><span>  <span class="highlighted"><span class="hljs-tag">&lt;<span class="hljs-name">quux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">quux</span>&gt;</span></span>
</span><span><span class="hljs-tag"><span>&lt;<span class="highlighted">/</span></span><span class="hljs-name"><span><span class="highlighted">fo</span>o</span></span>&gt;</span>
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>highlight-lines</code> attr with partial character-variant line-slice syntax should default highlight to start/end of line</strong></p>
<pre><code class="line-numbers hljs xml" v-pre><span><span class="hljs-tag">&lt;<span class="hljs-name highlighted">foo</span><span class="highlighted">&gt;</span></span>
</span><span>  <span class="hljs-tag"><span class="highlighted">&lt;</span><span class="hljs-name highlighted">bar</span><span class="highlighted"> </span><span class="hljs-attr highlighted">type</span><span class="highlighted">=</span><span class="hljs-string"><span><span class="highlighted">&quot;na</span>me&quot;</span></span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">bar</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name"><span>b<span class="highlighted">az</span></span></span><span class="highlighted"> </span><span class="hljs-attr highlighted">type</span><span class="highlighted">=</span><span class="hljs-string highlighted">&quot;name&quot;</span><span class="highlighted">&gt;</span></span><span class="highlighted">goo</span><span class="hljs-tag highlighted">&lt;/<span class="hljs-name">baz</span>&gt;</span>
</span><span>  <span class="highlighted"><span class="hljs-tag">&lt;<span class="hljs-name">qux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">qux</span>&gt;</span></span>
</span><span>  <span class="highlighted"><span class="hljs-tag">&lt;<span class="hljs-name">quux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">quux</span>&gt;</span></span>
</span><span><span class="hljs-tag"><span class="highlighted">&lt;/</span><span class="hljs-name">foo</span>&gt;</span>
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>highlight-lines</code> attr with line-part syntax should highlight only at specified substring</strong></p>
<pre><code class="line-numbers hljs xml" v-pre><span><span class="hljs-tag">&lt;<span class="hljs-name">foo</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">bar</span> <span class="hljs-attr highlighted">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name">bar</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name highlighted">baz</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>goo<span class="hljs-tag">&lt;/<span class="hljs-name highlighted">baz</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">qux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span><span class="highlighted">go,o</span><span class="hljs-tag highlighted">&lt;/<span class="hljs-name">qux</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">quux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span><span class="highlighted">go&#x27;o</span><span class="hljs-tag">&lt;/<span class="hljs-name">quux</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">quuux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span><span class="highlighted">go-o</span><span class="hljs-tag">&lt;/<span class="hljs-name">quuux</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">quuuux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span><span> 3 arrays:<span class="highlighted">[1, 2, 3], [4, 5, 6],</span> and [7, 8, 9]. </span><span class="hljs-tag">&lt;/<span class="hljs-name">quuuux</span>&gt;</span>
</span><span><span class="hljs-tag">&lt;/<span class="hljs-name">foo</span>&gt;</span>
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>highlight-lines</code> attr with full word-variant line-slice syntax should highlight only at specified word ranges</strong></p>
<pre><code class="line-numbers hljs xml" v-pre><span><span class="hljs-tag highlighted">&lt;<span class="hljs-name">foo</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">bar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span> goo <span class="hljs-tag highlighted">&lt;/<span class="hljs-name">bar</span>&gt;</span>
</span><span>  <span class="hljs-tag highlighted">&lt;<span class="hljs-name">baz</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span> goo <span class="hljs-tag">&lt;/<span class="hljs-name">baz</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">qux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span><span> <span class="highlighted">goo </span></span><span class="hljs-tag highlighted">&lt;/<span class="hljs-name">qux</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">quux</span> <span class="hljs-attr highlighted">type</span><span class="highlighted">=</span><span class="hljs-string highlighted">&quot;name&quot;</span><span class="highlighted">&gt;</span></span><span><span class="highlighted"> goo</span> </span><span class="hljs-tag">&lt;/<span class="hljs-name">quux</span>&gt;</span>
</span><span><span class="hljs-tag">&lt;/<span class="hljs-name">foo</span>&gt;</span>
</span></code></pre><p><strong><code class="line-numbers hljs inline no-lang" v-pre>highlight-lines</code> attr with partial word-variant line-slice syntax should default highlight to start/end of line</strong></p>
<pre><code class="line-numbers hljs xml" v-pre><span><span class="hljs-tag highlighted">&lt;<span class="hljs-name">foo</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">bar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span> goo <span class="hljs-tag highlighted">&lt;/<span class="hljs-name">bar</span>&gt;</span>
</span><span>  <span class="hljs-tag highlighted">&lt;<span class="hljs-name">baz</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span> goo <span class="hljs-tag">&lt;/<span class="hljs-name">baz</span>&gt;</span>
</span><span>  <span class="hljs-tag">&lt;<span class="hljs-name">qux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span><span> <span class="highlighted">goo </span></span><span class="hljs-tag highlighted">&lt;/<span class="hljs-name">qux</span>&gt;</span>
</span><span>  <span class="hljs-tag highlighted">&lt;<span class="hljs-name">quux</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span><span><span class="highlighted"> goo</span> </span><span class="hljs-tag">&lt;/<span class="hljs-name">quux</span>&gt;</span>
</span><span><span class="hljs-tag">&lt;/<span class="hljs-name">foo</span>&gt;</span>
</span></code></pre><p><strong>Should render correctly with heading</strong></p>
<div class="code-block"><div class="code-block-heading"><span>A heading</span></div><div class="code-block-content"><pre><code heading="A heading" class="line-numbers hljs" v-pre><span>&lt;foo&gt;
</span><span>    &lt;bar&gt;
</span><span>&lt;/foo&gt;
</span></code></pre></div></div><p><strong>Inline markdown contained in heading should also be rendered correctly</strong></p>
<div class="code-block"><div class="code-block-heading inline-markdown-heading"><span><strong>Bold</strong>, <em>Italic</em>, <em><strong>Bold and Italic</strong></em>, <s>Strike through</s>, <strong><strong>Super Bold</strong></strong>, <span class="underline">Underline</span>, <mark>Highlight</mark>, <span class="large">Large</span>, <span class="small">Small</span>, 👍 ❗️ ❌ 🚧<br>We support page breaks</span></div><div class="code-block-content"><pre><code heading="**Bold**, _Italic_, ___Bold and Italic___, ~~Strike through~~, ****Super Bold****, !!Underline!!, ==Highlight==, ++Large++, --Small--, :+1: :exclamation: :x: :construction:&lt;br&gt;We support page breaks" class="line-numbers hljs" v-pre><span>&lt;foo&gt;
</span><span>    &lt;bar&gt;
</span><span>&lt;/foo&gt;
</span></code></pre></div></div><p><strong>Code block with multiple linebreaks should not have the empty lines collapsed</strong></p>
<pre><code class="line-numbers hljs" v-pre><span>
</span><span>Four empty lines below, one above
</span><span>
</span><span>
</span><span>
</span><span>
</span><span>Four empty lines above, one below
</span><span>
</span></code></pre><p><strong>Code block without line numbers and multiple linebreaks should not have the empty lines collapsed</strong></p>
<pre><code class="no-line-numbers hljs" v-pre><span>
</span><span>Four empty lines below, one above
</span><span>
</span><span>
</span><span>
</span><span>
</span><span>Four empty lines above, one below
</span><span>
</span></code></pre><p><strong>Code block with syntax highlighting and multiple linebreaks should not have the empty lines collapsed</strong></p>
<pre><code class="line-numbers hljs js" v-pre><span>
</span><span><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fourEmptyLinesBelowOneAbove</span>(<span class="hljs-params"></span>) </span>{
</span><span>
</span><span>
</span><span>
</span><span>
</span><span>} <span class="hljs-comment">// four empty lines above, one below</span>
</span><span>
</span></code></pre><p><strong>span with <code class="line-numbers hljs inline no-lang" v-pre>hljs</code> class should span multiple lines <a href="https://github.com/MarkBind/markbind/pull/991#issuecomment-586547275">(Link for context)</a></strong></p>
<pre><code class="line-numbers hljs markdown" v-pre><span><span class="hljs-section"><span class="hljs-strong">****</span><span class="hljs-emphasis">*</span></span>
</span><span><span class="hljs-emphasis"><span class="hljs-section">-----</span></span>
</span></code></pre><p><strong>Span containing multi-line strings should have each line wrapped in a <code class="line-numbers hljs inline no-lang" v-pre>hljs</code> span</strong></p>
<pre><code class="line-numbers hljs javascript" v-pre><span><span class="hljs-keyword">var</span> x = <span class="hljs-string">`&lt;span class=&quot;string&quot;&gt;This is a</span>
</span><span><span class="hljs-string">really long string</span>
</span><span><span class="hljs-string">that spans multiple lines</span>
</span><span><span class="hljs-string">super annoying&quot;&lt;/span&gt;`</span>
</span></code></pre><pre><code class="line-numbers hljs markdown" v-pre><span><span class="hljs-section">## My header</span>
</span><span>
</span><span><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span></span>Some paragraphs
</span><span>
</span><span>123                           5
</span><span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
</span><span>
</span><span><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span></span>
</span><span>another paragraph<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span></span>some span
</span><span>abc
</span><span>a
</span><span>
</span><span>b<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
</span><span>
</span><span><span class="hljs-section">### Header 2</span>
</span></code></pre><p><strong>Having <span> in code blocks should not interfere with hljs</span></strong></p>
<pre><code class="line-numbers hljs javascript" v-pre><span><span class="hljs-keyword">const</span> a = <span class="hljs-string">`another</span>
</span><span><span class="hljs-string"></span>
</span><span><span class="hljs-string">really</span>
</span><span><span class="hljs-string"></span>
</span><span><span class="hljs-string">reallly</span>
</span><span><span class="hljs-string"></span>
</span><span><span class="hljs-string"></span>
</span><span><span class="hljs-string">reallly                   really</span>
</span><span><span class="hljs-string">long string`</span>
</span><span>
</span><span><span class="hljs-keyword">const</span> b = <span class="hljs-string">`long string</span>
</span><span><span class="hljs-string">with multiple</span>
</span><span><span class="hljs-string"></span>
</span><span><span class="hljs-string">embeded &lt;span&gt;</span>
</span><span><span class="hljs-string"></span>
</span><span><span class="hljs-string">&lt;/span&gt;</span>
</span><span><span class="hljs-string"></span>
</span><span><span class="hljs-string">&lt;span&gt;`</span>
</span></code></pre>
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