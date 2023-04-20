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
    
<div class="website-content">
<p><strong>Test <code class="line-numbers hljs inline no-lang" v-pre>&lt;markdown&gt;</code> and <code class="line-numbers hljs inline no-lang" v-pre>&lt;md&gt;</code> elements</strong></p>
<div><p>This should be wrapped in a <code class="line-numbers hljs inline no-lang" v-pre>&lt;p&gt;</code> tag as it uses the block-level markdown renderer</p></div>
<span>
This should not be wrapped in a <code class="line-numbers hljs inline no-lang" v-pre>&lt;p&gt;</code> tag as it uses the inline markdown renderer
</span>
<div class="mt-2"><pre><code class="line-numbers hljs" v-pre><span>&lt;markdown&gt; elements allow block-level markdown without needing a leading newline.
</span><span>Hence, the contained markdown should be parsed and output as is, without any parsing errors.
</span><span>&lt;/invalidhtml&gt;
</span></code></pre></div>
<span>
<code class="line-numbers hljs inline no-lang" v-pre>&lt;md&gt;</code> elements allow inline-level markdown even in a non-markdown token.
Hence, the contained markdown should be parsed and output as is, without any parsing errors.
<code class="line-numbers hljs inline no-lang" v-pre>&lt;/invalid&gt;</code>.
</span>
<p><strong>Test footnotes</strong></p>
<div><p><strong>Normal footnotes:</strong>
Here is a footnote reference,<trigger for="pop:footnotefn-1-1"><sup class="footnote-ref"><a aria-describedby="footnote-label" href="#fn-1-1">[1]</a></sup></trigger> and another.<trigger for="pop:footnotefn-1-2"><sup class="footnote-ref"><a aria-describedby="footnote-label" href="#fn-1-2">[2]</a></sup></trigger></p>
<p>Here is a repeated footnote to <trigger for="pop:footnotefn-1-1"><sup class="footnote-ref"><a aria-describedby="footnote-label" href="#fn-1-1">[1:1]</a></sup></trigger></p>
<p><strong>Inline footnotes:</strong>
Here is an inline note.<trigger for="pop:footnotefn-1-3"><sup class="footnote-ref"><a aria-describedby="footnote-label" href="#fn-1-3">[3]</a></sup></trigger></p>
</div>
<p><strong>Nunjucks SetExt</strong></p>
<div> front back </div>
<p>arrayVarItem1</p>
<p>arrayVarItem2</p>
<p>nestedVarValue</p>
<p><strong>Variables that reference another variable</strong></p>
<p>This variable can be referenced.</p>
<p>References can be several levels deep.</p>
<p><strong>Global Variables can be referenced in {% set %}</strong></p>
<p>Page Variable with Global Variable</p>
<p><strong>Global Variables should override {% set %}</strong></p>
<p>Global Variable Overriding Page Variable</p>
<p><strong>Test Page Variable and Included Variable Integrations</strong></p>
<div><p><strong>Outer Page Variable Should Not Leak Into Inner Pages</strong></p>
<p>Outer Page Variable Should Not Leak Into Inner Pages</p></div>
<h1 id="heading-with-multiple-keywords">Heading with multiple keywords<a class="fa fa-anchor" href="#heading-with-multiple-keywords" onclick="event.stopPropagation()"></a></h1>
<p><span class="keyword">keyword 1</span>
<span class="keyword">keyword 2</span></p>
<h1 id="heading-with-keyword-in-panel">Heading with keyword in panel<a class="fa fa-anchor" href="#heading-with-keyword-in-panel" onclick="event.stopPropagation()"></a></h1>
<panel expanded><template #header><p>Panel with keyword</p></template>
  <span class="keyword">panel keyword</span></panel>
<p><strong>Panel with heading with keyword</strong></p>
<panel expanded panelId="panel-with-heading"><template #header><h1 id="panel-with-heading">Panel with heading<a class="fa fa-anchor" href="#panel-with-heading" onclick="event.stopPropagation()"></a></h1></template>
  <span class="keyword">panel keyword</span></panel>
<p><strong>Expanded panel without heading with keyword</strong></p>
<panel expanded panelId="panel-without-heading-with-keyword"><template #header><h1 id="panel-without-heading-with-keyword">Panel without heading with keyword<a class="fa fa-anchor" href="#panel-without-heading-with-keyword" onclick="event.stopPropagation()"></a></h1></template>
<h1 id="keyword-should-be-tagged-to-this-heading-not-the-panel-heading">Keyword should be tagged to this heading, not the panel heading<a class="fa fa-anchor" href="#keyword-should-be-tagged-to-this-heading-not-the-panel-heading" onclick="event.stopPropagation()"></a></h1>
<p><span class="keyword">panel keyword</span></p></panel>
<p><strong>Unexpanded panel with heading with keyword</strong></p>
<panel panelId="panel-with-heading-with-keyword"><template #header><h1 id="panel-with-heading-with-keyword">Panel with heading with keyword<a class="fa fa-anchor" href="#panel-with-heading-with-keyword" onclick="event.stopPropagation()"></a></h1></template>
<h1 id="keyword-should-be-tagged-to-the-panel-heading-not-this-heading">Keyword should be tagged to the panel heading, not this heading<a class="fa fa-anchor" href="#keyword-should-be-tagged-to-the-panel-heading-not-this-heading" onclick="event.stopPropagation()"></a></h1>
<p><span class="keyword">panel keyword</span></p></panel>
<h1 id="heading-fragment-with-leading-spaces-and-newline">Heading <div>
<pre><code class="line-numbers" v-pre>Fragment with leading spaces and newline
</code></pre></div><a class="fa fa-anchor" href="#heading-fragment-with-leading-spaces-and-newline" onclick="event.stopPropagation()"></a></h1>
<p>The <code class="line-numbers hljs inline no-lang" v-pre>id</code> for the above heading should be <code class="line-numbers hljs inline no-lang" v-pre>heading-fragment-with-leading-spaces-and-newline</code> in total.
This test ensures heading ids are assigned last (e.g. after <code class="line-numbers hljs inline no-lang" v-pre>&lt;include /&gt;</code>s are processed).</p>
<h1 id="heading-with-included-keyword">Heading with included keyword<a class="fa fa-anchor" href="#heading-with-included-keyword" onclick="event.stopPropagation()"></a></h1>
<div><p><span class="keyword">included keyword</span></p></div>
<div><h1 id="included-heading">Included Heading<a class="fa fa-anchor" href="#included-heading" onclick="event.stopPropagation()"></a></h1></div>
<span class="keyword">Keyword with included heading</span>
<h1 id="heading-with-nested-keyword">Heading with nested keyword<a class="fa fa-anchor" href="#heading-with-nested-keyword" onclick="event.stopPropagation()"></a></h1>
<div>
  <div>
    <div>
      <span class="keyword">nested keyword</span></div></div></div>
<h1 id="heading-with-hidden-keyword">Heading with hidden keyword<a class="fa fa-anchor" href="#heading-with-hidden-keyword" onclick="event.stopPropagation()"></a></h1>
<p><span class="keyword d-none">invisible keyword</span></p>
<div><p><strong>Div with frontmatter shown tag</strong></p>
<div tags="tag-frontmatter-shown">
Div with shown tag
</div>
<p><strong>Div with site shown tag</strong></p>
<div tags="tag-site-shown">
Div with site shown tag
</div>
<p><strong>Div with multiple tags</strong></p>
<div tags="tag-site-shown tag-other">
Div with multiple tags
</div>
<p><strong>Div with hidden tag (Hidden)</strong></p>

<div><p><strong>Div with tag in included file</strong></p>
<div tags="tag-included-file">
Div with tag in included file
</div></div>
<p><strong>Div with tag matching general tag</strong></p>
<div tags="tag-exp-shown">
Div with tag matching general tag
</div>
<p><strong>Div with tag matching general tag and specific tag (Hidden)</strong></p>

<p><strong>Div with tag matching frontmatter tag overridden by matching site tag</strong></p>
<div tags="tag-site-override-shown">
Div with tag matching frontmatter tag overridden by matching site tag
</div>
<p><strong>Div with tag matching general frontmatter tag not overridden by matching specific site tag (Hidden)</strong></p>

<p><strong>Div with tag matching general frontmatter tag overridden by matching specific site tag</strong></p>
<div tags="tag-site-override-shown">
Div with tag matching general frontmatter tag overridden by matching specific site tag
</div></div>
<p><strong>Normal include</strong></p>
<div><h3 id="establishing-requirements">Establishing Requirements<a class="fa fa-anchor" href="#establishing-requirements" onclick="event.stopPropagation()"></a></h3>
<p><span id="preview">Requirements gathering, requirements elicitation, requirements analysis,
requirements capture are some of the terms commonly <strong>and</strong> interchangeably used to represent the activity
of understanding what a software product should do.</span></p>
<p>There are many techniques used during a requirements gathering. The following are some of the techniques.</p>
<h4 id="brainstorming">Brainstorming<a class="fa fa-anchor" href="#brainstorming" onclick="event.stopPropagation()"></a></h4>
<p>Brainstorming is a group activity designed to generate a large number of diverse and creative ideas for the solution
of a problem. In a brainstorming session there are no &quot;bad&quot; ideas.
The aim is to generate ideas; not to validate them. Brainstorming encourages you to &quot;think outside the box&quot; and
put &quot;crazy&quot; ideas on the table without fear of rejection.</p>
<h4 id="user-surveys">User surveys<a class="fa fa-anchor" href="#user-surveys" onclick="event.stopPropagation()"></a></h4>
<p>Carefully designed questionnaires can be used to solicit responses and opinions from a large number of users regarding
any current system or a new innovation.</p>
<h4 id="focus-groups">Focus groups<a class="fa fa-anchor" href="#focus-groups" onclick="event.stopPropagation()"></a></h4>
<p>Focus groups are a kind of informal interview within an interactive group setting.
A <tooltip><template #content>e.g. potential users, beta testers</template>group of people</tooltip>
are asked about their understanding of a specific issue or a process.
Focus groups can bring out undiscovered conflicts and misunderstandings among stakeholder interests which can then be
resolved or clarified as necessary.</p></div>
<p><strong>Include segment</strong></p>
<div>Requirements gathering, requirements elicitation, requirements analysis,
requirements capture are some of the terms commonly <strong>and</strong> interchangeably used to represent the activity
of understanding what a software product should do.</div>
<p><strong>Boilerplate include</strong></p>
<div name="Boilerplate Referencing"><panel src="/test_site/requirements/UserStories._include_.html" no-close><template #header><p>Boilerplate Includes</p></template></panel></div>
<div name="Referencing specified path in boilerplate"><h1 id="path-within-the-boilerplate-folder-is-separately-specified">Path within the boilerplate folder is separately specified<a class="fa fa-anchor" href="#path-within-the-boilerplate-folder-is-separately-specified" onclick="event.stopPropagation()"></a></h1>
<p>Like static include, pages within the site should be able to use files located in folders within boilerplate.</p>
<p>Also, the boilerplate file name (e.g. <code class="line-numbers hljs inline no-lang" v-pre>inside.md</code>) and the file that it is supposed to act as (<code class="line-numbers hljs inline no-lang" v-pre>notInside.md</code>) can be different.</p>
<p>This file should behaves as if it is in the <code class="line-numbers hljs inline no-lang" v-pre>requirements</code> folder:</p>
<panel src="/test_site/requirements/NonFunctionalRequirements._include_.html"><template #header><p>Tested with the folllowing include</p></template></panel></div>
<p><strong>Nested include</strong></p>
<div><ol>
<li><strong>Establishing requirements</strong>: <span>Requirements gathering, requirements elicitation, requirements analysis,
requirements capture are some of the terms commonly <strong>and</strong> interchangeably used to represent the activity
of understanding what a software product should do.</span></li>
<li><strong>Specifying requirements</strong>: <span>As we establish requirements, they should be recorded in some way for future reference,
usually called a requirement specification. Furthermore, it is advisable to show these requirements to stakeholders,
and refine requirements based on their feedback. The next phase is to convert requirements into a product
specification that specifies how the product will address the requirements. </span></li></ol></div>
<p><strong>HTML include</strong></p>
<div><p>This is a HTML document</p>

<span>It is <strong>possible</strong> to use Markdown in HTML</span></div>
<p><strong>Include from another MarkBind site</strong></p>
<div><p>This is a page from another MarkBind site.</p>
<h2 id="feature-list">Feature list<a class="fa fa-anchor" href="#feature-list" onclick="event.stopPropagation()"></a></h2>
<p>It is a list of features (or functionalities) grouped according to some criteria such as priority
(e.g. must-have, nice-to-have, etc. ), order of delivery, object or process related
(e.g. order-related, invoice-related, etc.).
Here is a sample feature list from Minesweeper (only a brief description has been provided to save space).</p>
<ol>
<li>Basic play – Single player play.</li>
<li>Difficulty levels – Additional Medium and Advanced levels.</li>
<li>Versus play – Two players can play against each other.</li>
<li>Timer – Additional fixed time restriction on the player.</li></ol>
<div id="image">
<img src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png"></div></div>
<div><p>This is a page from another MarkBind site.
The purpose of this page is to ensure that reuse works as expected.
All the following images should display correctly.</p>
<p>IMG tags:
<img src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png">
<img src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png">
<img src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png">
<img src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png">
<img src="https://dummyimage.com/600x400/000/fff"></p>
<p>PIC tags:
<pic src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png"></pic>
<pic src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png"></pic>
<pic src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png"></pic>
<pic src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png"></pic>
<pic src="https://dummyimage.com/600x400/000/fff"></pic></p>
<p>Anchor:
<a href="https://dummyimage.com/600x400/000/fff">External Image</a></p>

<p><a href="/test_site/sub_site/images/I'm%20not%20allowed%20to%20use%20my%20favorite%20tool.png">Link to picture</a>
<a id="namedAnchor">Named Anchor</a>
<a>Anchor with no attributes</a></p>
<p>Within DIV tag:</p>
<div id="imageTest">
  <img src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png">
  <pic src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png"></pic></div></div>
<div>
  <img src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png">
  <pic src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png"></pic></div>
<p><strong>Include nested sub-site directly</strong></p>
<box>
<div><p><strong>baseUrl in a nested sub-site should correctly evaluate to the nested sub-site</strong></p>
<p>The base url in the nested_sub_site is /test_site/sub_site/nested_sub_site.</p>
<div><p><strong>baseUrl in a nested sub-site page's include should correctly evaluate to the nested sub-site</strong></p>
<p>The base url in the nested_sub_site page's include is /test_site/sub_site/nested_sub_site.</p></div></div></box>
<p><strong>Include nested sub-site from sub-site</strong></p>
<box>
<div><p><strong>baseUrl in a sub site should correctly evaluate</strong></p>
<p>The base url in sub_site is /test_site/sub_site.</p>
<p><strong>Subsite including nested subsite:</strong></p>
<box>
<div><p><strong>baseUrl in a nested sub-site should correctly evaluate to the nested sub-site</strong></p>
<p>The base url in the nested_sub_site is /test_site/sub_site/nested_sub_site.</p>
<div><p><strong>baseUrl in a nested sub-site page's include should correctly evaluate to the nested sub-site</strong></p>
<p>The base url in the nested_sub_site page's include is /test_site/sub_site/nested_sub_site.</p></div></div></box></div></box>
<p><strong>Include a file using baseUrl</strong></p>
<div>As we establish requirements, they should be recorded in some way for future reference,
usually called a requirement specification. Furthermore, it is advisable to show these requirements to stakeholders,
and refine requirements based on their feedback. The next phase is to convert requirements into a product
specification that specifies how the product will address the requirements. </div>
<panel src="/test_site/requirements/SpecifyingRequirements._include_.html#preview" type="minimal" fragment="preview"><template #header><p><strong>same test with panels</strong></p></template></panel>
<p><strong>Include a file in a sub-folder that uses baseUrl</strong></p>
<div><div>Requirements gathering, requirements elicitation, requirements analysis,
requirements capture are some of the terms commonly <strong>and</strong> interchangeably used to represent the activity
of understanding what a software product should do.</div></div>
<panel src="/test_site/requirements/testBaseUrlInIncludeSrc._include_.html" type="minimal"><template #header><p><strong>same test with panels</strong></p></template></panel>
<p><strong>Include a file in a sub-folder that uses baseUrl using baseUrl</strong></p>
<div><div>Requirements gathering, requirements elicitation, requirements analysis,
requirements capture are some of the terms commonly <strong>and</strong> interchangeably used to represent the activity
of understanding what a software product should do.</div></div>
<panel src="/test_site/requirements/testBaseUrlInIncludeSrc._include_.html" type="minimal"><template #header><p><strong>same test with panels</strong></p></template></panel>
<p><strong>Include a file in a sub-site that uses baseUrl</strong></p>
<div><div>
<img src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png"></div></div>
<panel src="/test_site/sub_site/testBaseUrlInIncludeSrcSubSite._include_.html" type="minimal"><template #header><p><strong>same test with panels</strong></p></template></panel>
<p><strong>Include a file in a sub-site that uses baseUrl using baseUrl</strong></p>
<div><div>
<img src="/test_site/sub_site/images/I'm not allowed to use my favorite tool.png"></div></div>
<panel src="/test_site/sub_site/testBaseUrlInIncludeSrcSubSite._include_.html" type="minimal"><template #header><p><strong>same test with panels</strong></p></template></panel>
<p><strong>Trimmed include</strong></p>
<p><strong><span><br>
Fragment with leading spaces and newline</span></strong></p>
<p><strong>Trimmed include fragment</strong></p>
<p><strong>Before | <span>Fragment with leading spaces and newline</span> | After</strong></p>
<p><strong>Include with custom variables</strong></p>
<div><p><strong>Test included variable as include attribute</strong></p>
<p>Included variable as include attribute</p>
<p><strong>Test included variable</strong></p>
<p>Included variable</p>
<p><strong>Test included variable with markdown</strong></p>
<p><strong><strong>Included variable with markdown</strong></strong></p>
<p><strong>Test included variable as attribute</strong></p>
<p style="color: blue">Test</p>
<p><strong>Test included variable as HTML element</strong></p>
<p><span>Included variable within HTML element</span></p>
<p><strong>Test included variable overridden by variables.md</strong></p>
<p>Global Variable Overriding Included Variable</p>
<p><strong>Test included variables in included file</strong></p>
<div><p>Included variable in outer included file</p>
<p>Included variable overriding inner variable</p></div>
<p><strong>Inner included variables should not leak into other files</strong></p>
<div><p>Should be blank:</p></div>
<p><strong>Test included variable with global variable</strong></p>
<p>Included variable with Global Variable</p>
<p><strong>Test nunjucks set overridden by include variable and global variable</strong></p>
<p>Included variable
Global Variable</p>
<p><strong>Test nunjucks import overridden by include variable and global variable</strong></p>
<p>Included variable
Global Variable</p>
<p><strong>Test nunjucks set overridden by include variable and global variable in nested include</strong></p>
<p>Included variable
Global Variable</p>
<p><strong>Test nunjucks import overridden by include variable and global variable in nested include</strong></p>
<p>Included variable
Global Variable</p>
<p><strong>Test missing variable with default</strong></p>
<p>Missing Variable</p></div>
<p>Variables for includes should not be recognised as page variables, hence, there should be no text between <strong>this</strong></p>
<p>and <strong>this</strong>.</p>
<p><strong>Included variables should not leak into other files</strong></p>
<div><p>Should be blank:</p></div>
<p><strong>Panel with shorthand heading syntax</strong></p>
<panel>
    <span slot="header" class="card-title">
        Heading
    </span></panel>
<p><strong>Panel without src</strong></p>
<panel expanded panelId="panel-without-src-header"><template #header><h2 id="panel-without-src-header">Panel without src header<a class="fa fa-anchor" href="#panel-without-src-header" onclick="event.stopPropagation()"></a></h2></template>
<div><p><strong>Panel without src content heading</strong></p></div></panel>
<p><strong>Panel with normal src</strong></p>
<panel src="/test_site/testPanels/PanelNormalSource._include_.html" expanded panelId="panel-with-normal-src-header"><template #header><h2 id="panel-with-normal-src-header">Panel with normal src header<a class="fa fa-anchor" href="#panel-with-normal-src-header" onclick="event.stopPropagation()"></a></h2></template></panel>    
<p><strong>Panel with src from a page segment</strong></p>
<panel src="/test_site/testPanels/PanelSourceContainsSegment._include_.html#segment" expanded fragment="segment" panelId="panel-with-src-from-a-page-segment-header"><template #header><h2 id="panel-with-src-from-a-page-segment-header">Panel with src from a page segment header<a class="fa fa-anchor" href="#panel-with-src-from-a-page-segment-header" onclick="event.stopPropagation()"></a></h2></template></panel>
<p><strong>Panel with boilerplate</strong></p>
<panel src="/test_site/testPanels/boilerTestPanel._include_.html" expanded panelId="boilerplate-referencing"><template #header><h2 id="boilerplate-referencing">Boilerplate referencing<a class="fa fa-anchor" href="#boilerplate-referencing" onclick="event.stopPropagation()"></a></h2></template></panel>
<panel src="/test_site/testPanelsDuplicate/boilerTestPanel._include_.html" expanded panelId="boilerplate-referencing-2"><template #header><h2 id="boilerplate-referencing-2">Boilerplate referencing 2<a class="fa fa-anchor" href="#boilerplate-referencing-2" onclick="event.stopPropagation()"></a></h2></template></panel>
<panel src="/test_site/testPanels/notInside._include_.html" expanded panelId="referencing-specified-path-in-boilerplate"><template #header><h2 id="referencing-specified-path-in-boilerplate">Referencing specified path in boilerplate<a class="fa fa-anchor" href="#referencing-specified-path-in-boilerplate" onclick="event.stopPropagation()"></a></h2></template></panel>
<p><strong>Nested panel</strong></p>
<panel src="/test_site/testPanels/NestedPanel._include_.html" expanded panelId="outer-nested-panel"><template #header><h2 id="outer-nested-panel">Outer nested panel<a class="fa fa-anchor" href="#outer-nested-panel" onclick="event.stopPropagation()"></a></h2></template></panel>
<p><strong>Nested panel without src</strong></p>
<panel expanded panelId="outer-nested-panel-without-src"><template #header><h2 id="outer-nested-panel-without-src">Outer nested panel without src<a class="fa fa-anchor" href="#outer-nested-panel-without-src" onclick="event.stopPropagation()"></a></h2></template>
<p><strong>Panel content of outer nested panel</strong></p>
  <panel expanded panelId="inner-panel-header-without-src"><template #header><h2 id="inner-panel-header-without-src">Inner panel header without src<a class="fa fa-anchor" href="#inner-panel-header-without-src" onclick="event.stopPropagation()"></a></h2></template>
<p><strong>Panel content of inner nested panel</strong></p></panel></panel>
<p><strong>Panel with src from another MarkBind site</strong></p>
<panel src="/test_site/sub_site/index._include_.html" expanded panelId="panel-with-src-from-another-markbind-site-header"><template #header><h2 id="panel-with-src-from-another-markbind-site-header">Panel with src from another MarkBind site header<a class="fa fa-anchor" href="#panel-with-src-from-another-markbind-site-header" onclick="event.stopPropagation()"></a></h2></template></panel>
<panel src="/test_site/sub_site/testReuseSubsite._include_.html" expanded panelId="panel-with-src-from-another-markbind-site-header-2"><template #header><h2 id="panel-with-src-from-another-markbind-site-header-2">Panel with src from another MarkBind site header<a class="fa fa-anchor" href="#panel-with-src-from-another-markbind-site-header-2" onclick="event.stopPropagation()"></a></h2></template></panel></div>
<p><strong>Modal with panel inside</strong></p>
<p><trigger for="modal-with-panel">trigger</trigger></p>
<modal id="modal-with-panel"><template #header>modal title with panel inside</template>
  <panel expanded panelId="panel-inside-modal"><template #header><h2 id="panel-inside-modal">Panel inside modal<a class="fa fa-anchor" href="#panel-inside-modal" onclick="event.stopPropagation()"></a></h2></template>
<p><strong>Panel content inside modal</strong></p></panel></modal>
<p><strong>Unexpanded panel</strong></p>
<panel panelId="unexpanded-panel-header"><template #header><h2 id="unexpanded-panel-header">Unexpanded panel header<a class="fa fa-anchor" href="#unexpanded-panel-header" onclick="event.stopPropagation()"></a></h2></template>
<p><strong>Panel content of unexpanded panel should not appear in search data</strong></p>
  <panel expanded panelId="panel-header-inside-unexpanded-panel-should-not-appear-in-search-data"><template #header><h2 id="panel-header-inside-unexpanded-panel-should-not-appear-in-search-data">Panel header inside unexpanded panel should not appear in search data<a class="fa fa-anchor" href="#panel-header-inside-unexpanded-panel-should-not-appear-in-search-data" onclick="event.stopPropagation()"></a></h2></template>
<p><strong>Panel content inside unexpanded panel should not appear in search data</strong></p></panel></panel>
<p><strong>Test panel closing transitions</strong></p>
<div><p><strong>Nested Panel with height greater than viewport</strong></p>
<panel type="info"><template #header><p>Expandable panel without closing transition</p></template>
  Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text some text some text some text some text some text some text some text. Some text some text some text some text some text some text. Some text some text some text some text some text some text some text.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</panel>
<p><strong>Nested Panel with height smaller than viewport</strong></p>
<panel type="info"><template #header><p>Expanded panel without transition</p></template>
  Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text some text some text some text some text some text some text some text. Some text some text some text some text some text some text. Some text some text some text some text some text some text some text.
</panel>
<p><strong>Minimal Panel with height greater than viewport</strong></p>
<panel type="minimal"><template #header><p><em><strong>Minimal panel without closing transition <strong>-&gt;</strong></strong></em></p></template><template #_alt><p>Minimal panel 1</p></template>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text some text some text some text some text some text some text some text. Some text some text some text some text some text some text. Some text some text some text some text some text some text some text.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</panel>
<p><strong>Minimal Panel with height smaller than viewport</strong></p>
<panel type="minimal"><template #header><p><em><strong>Minimal panel without closing transition <strong>-&gt;</strong></strong></em></p></template><template #_alt><p>Minimal panel 2</p></template>
  Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text some text some text some text some text some text some text some text. Some text some text some text some text some text some text. Some text some text some text some text some text some text some text.
</panel></div>
<p><strong>Test search indexing</strong></p>
<p><strong>Test PlantUML live reload without include</strong></p>
<pic src="/test_site/diagrams/activity.png" alt="activity diagram"></pic>
<p><strong>Test PlantUML live reload with include</strong></p>
<div><p><strong>PlantUML Test</strong></p>
<pic src="/test_site/inline-output.png"></pic>
<pic src="/test_site/9c9e77fc0a983cb6b592e65733787bec.png"></pic>
<p><strong>Sequence Diagram</strong></p>
<pic src="/test_site/diagrams/sequence.png"></pic>
<p><strong>Use Case Diagram</strong></p>
<pic src="/test_site/diagrams/usecase.png"></pic>
<p><strong>Class Diagram</strong></p>
<pic src="/test_site/diagrams/class.png"></pic></div>
<p><strong>Test PlantUML in sub folder</strong></p>
<div><pic src="/test_site/sub_site/inline-output/inline-puml-image.png"></pic>
<p><strong>Activity Diagram</strong></p>
<pic src="/test_site/diagrams/activity.png"></pic>
<p><strong>Component Diagram</strong></p>
<pic src="/test_site/diagrams/component.png"></pic>
<p><strong>State Diagram</strong></p>
<pic src="/test_site/diagrams/state.png"></pic>
<p><strong>Object Diagram</strong></p>
<pic src="/test_site/diagrams/object.png"></pic></div>
<h2 class="no-index" id="level-2-header-inside-headingsearchindex-with-no-index-attribute-should-not-be-indexed">Level 2 header (inside headingSearchIndex) with no-index attribute should not be indexed<a class="fa fa-anchor" href="#level-2-header-inside-headingsearchindex-with-no-index-attribute-should-not-be-indexed" onclick="event.stopPropagation()"></a></h2>
<h6 class="always-index" id="level-6-header-outside-headingsearchindex-with-always-index-attribute-should-be-indexed">Level 6 header (outside headingSearchIndex) with always-index attribute should be indexed<a class="fa fa-anchor" href="#level-6-header-outside-headingsearchindex-with-always-index-attribute-should-be-indexed" onclick="event.stopPropagation()"></a></h6>
<p><strong>Test nunjucks raw tags</strong></p>
<div v-pre>{{ variable interpolation syntax can be used with v-pre }}</div>
<div v-pre>{{ nonExistentVariable }}</div>
<code class="line-numbers" v-pre>{{ code elements should automatically be assigned v-pre }}</code><hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<popover id="pop:footnotefn-1-1">
            <template #content><div>
              <p>Here is the footnote. Footnotes will appear at the bottom of the page.</p>

            </div></template>
          </popover><popover id="pop:footnotefn-1-2">
            <template #content><div>
              <p>Here's one with multiple blocks.</p>
<p>Subsequent paragraphs are indented to show that they
belong to the previous footnote.</p>

            </div></template>
          </popover><popover id="pop:footnotefn-1-3">
            <template #content><div>
              <p>Inlines notes are easier to write, since
you don't have to pick an identifier and move down to type the
note.</p>

            </div></template>
          </popover>

<li id="fn-1-1" class="footnote-item"><p>Here is the footnote. Footnotes will appear at the bottom of the page.</p>
</li>
<li id="fn-1-2" class="footnote-item"><p>Here's one with multiple blocks.</p>
<p>Subsequent paragraphs are indented to show that they
belong to the previous footnote.</p>
</li>
<li id="fn-1-3" class="footnote-item"><p>Inlines notes are easier to write, since
you don't have to pick an identifier and move down to type the
note.</p>
</li>

</ol>
</section>

  </div>
  <overlay-source id="page-nav" tag-name="nav" to="page-nav">
    <div class="nav-component slim-scroll">
      <a class="navbar-brand page-nav-title" href="#" v-pre>Testing Page Navigation</a>
<overlay-source id="mb-page-nav" tag-name="nav" to="mb-page-nav" class="nav nav-pills flex-column my-0 small no-flex-wrap">
<a class="nav-link py-1" href="#heading-with-multiple-keywords" v-pre>Heading with multiple keywords&#x200E;</a>
<a class="nav-link py-1" href="#heading-with-keyword-in-panel" v-pre>Heading with keyword in panel&#x200E;</a>
<a class="nav-link py-1" href="#panel-with-heading" v-pre>Panel with heading&#x200E;</a>
<a class="nav-link py-1" href="#panel-without-heading-with-keyword" v-pre>Panel without heading with keyword&#x200E;</a>
<a class="nav-link py-1" href="#keyword-should-be-tagged-to-this-heading-not-the-panel-heading" v-pre>Keyword should be tagged to this heading, not the panel heading&#x200E;</a>
<a class="nav-link py-1" href="#panel-with-heading-with-keyword" v-pre>Panel with heading with keyword&#x200E;</a>
<a class="nav-link py-1" href="#heading-fragment-with-leading-spaces-and-newline" v-pre>Heading 
Fragment with leading spaces and newline
&#x200E;</a>
<a class="nav-link py-1" href="#heading-with-included-keyword" v-pre>Heading with included keyword&#x200E;</a>
<a class="nav-link py-1" href="#included-heading" v-pre>Included Heading&#x200E;</a>
<a class="nav-link py-1" href="#heading-with-nested-keyword" v-pre>Heading with nested keyword&#x200E;</a>
<a class="nav-link py-1" href="#heading-with-hidden-keyword" v-pre>Heading with hidden keyword&#x200E;</a>
<nav class="nav nav-pills flex-column my-0 nested no-flex-wrap">
<a class="nav-link py-1" href="#establishing-requirements" v-pre>Establishing Requirements&#x200E;</a>
<nav class="nav nav-pills flex-column my-0 nested no-flex-wrap">
<a class="nav-link py-1" href="#brainstorming" v-pre>Brainstorming&#x200E;</a>
<a class="nav-link py-1" href="#user-surveys" v-pre>User surveys&#x200E;</a>
<a class="nav-link py-1" href="#focus-groups" v-pre>Focus groups&#x200E;</a>
</nav>
</nav>
<a class="nav-link py-1" href="#path-within-the-boilerplate-folder-is-separately-specified" v-pre>Path within the boilerplate folder is separately specified&#x200E;</a>
<nav class="nav nav-pills flex-column my-0 nested no-flex-wrap">
<a class="nav-link py-1" href="#feature-list" v-pre>Feature list&#x200E;</a>
<a class="nav-link py-1" href="#panel-without-src-header" v-pre>Panel without src header&#x200E;</a>
<a class="nav-link py-1" href="#panel-with-normal-src-header" v-pre>Panel with normal src header&#x200E;</a>
<a class="nav-link py-1" href="#panel-with-src-from-a-page-segment-header" v-pre>Panel with src from a page segment header&#x200E;</a>
<a class="nav-link py-1" href="#boilerplate-referencing" v-pre>Boilerplate referencing&#x200E;</a>
<a class="nav-link py-1" href="#boilerplate-referencing-2" v-pre>Boilerplate referencing 2&#x200E;</a>
<a class="nav-link py-1" href="#referencing-specified-path-in-boilerplate" v-pre>Referencing specified path in boilerplate&#x200E;</a>
<a class="nav-link py-1" href="#outer-nested-panel" v-pre>Outer nested panel&#x200E;</a>
<a class="nav-link py-1" href="#outer-nested-panel-without-src" v-pre>Outer nested panel without src&#x200E;</a>
<a class="nav-link py-1" href="#inner-panel-header-without-src" v-pre>Inner panel header without src&#x200E;</a>
<a class="nav-link py-1" href="#panel-with-src-from-another-markbind-site-header" v-pre>Panel with src from another MarkBind site header&#x200E;</a>
<a class="nav-link py-1" href="#panel-with-src-from-another-markbind-site-header-2" v-pre>Panel with src from another MarkBind site header&#x200E;</a>
<a class="nav-link py-1" href="#unexpanded-panel-header" v-pre>Unexpanded panel header&#x200E;</a>
<nav class="nav nav-pills flex-column my-0 nested no-flex-wrap">
<a class="nav-link py-1" href="#level-6-header-outside-headingsearchindex-with-always-index-attribute-should-be-indexed" v-pre>Level 6 header (outside headingSearchIndex) with always-index attribute should be indexed&#x200E;</a>
</nav>
</nav>

</overlay-source>
</div></overlay-source>    
  <scroll-top-button></scroll-top-button></div>
<div><footer>
<h1 id="heading-in-footer-should-not-be-indexed">Heading in footer should not be indexed<a class="fa fa-anchor" href="#heading-in-footer-should-not-be-indexed" onclick="event.stopPropagation()"></a></h1>
  <div class="text-center">
    This is a dynamic height footer that supports markdown <span>😄</span>!
  </div></footer></div></div>`;