const pageContent =  `<div id="app"><p><h1 id="functional-test-for-htmlparser2-and-markdown-it-patches-for-special-tags">Functional test for htmlparser2 and markdown-it patches for special tags<a class="fa fa-anchor" href="#functional-test-for-htmlparser2-and-markdown-it-patches-for-special-tags" onclick="event.stopPropagation()"></a></h1>
<h2 id="so-far-as-to-comply-with-the-commonmark-spec">So far as to comply with the commonmark spec<a class="fa fa-anchor" href="#so-far-as-to-comply-with-the-commonmark-spec" onclick="event.stopPropagation()"></a></h2>
<p>There should be no text between this and the next <code class="hljs inline no-lang" v-pre>&lt;hr&gt;</code> tag in the browser, since it is a <code class="hljs inline no-lang" v-pre>&lt;script&gt;</code> tag.<br>
There should be an alert with the value of 2 as well.</p>

<hr>
<p>There should be no text between this and the next <code class="hljs inline no-lang" v-pre>&lt;hr&gt;</code> tag in the browser, since it is a <code class="hljs inline no-lang" v-pre>&lt;style&gt;</code> tag.</p>

<hr>
<p>There should be text between this and the next <code class="hljs inline no-lang" v-pre>&lt;hr&gt;</code> tag, since it is a special tag.
All text should appear in the browser window as a single line,
save for the comment which the browser still interprets. (but will be in the expected output)</p>
<testtag>
<these>
some text
</these>

<p>//</p>
<p>/*
...
*/</p></testtag>
<hr>
<p>This has the same content has the previous test, but it is <strong>not</strong> a special tag.
The HTML comment <code class="hljs inline no-lang" v-pre>&lt;!-- --&gt;</code> should disappear in the expected output.
The line <code class="hljs inline no-lang" v-pre>some text</code> should appear as per normal, and not wrapped by a paragraph since
a HTML tag precedes it without a blank line.
The other lines should be parsed as markdown paragraphs, as per commonmark spec.</p>
<abc>
<these>
some text
</these>

<p>//</p>
<p>/*
...
*/</p></abc>
<hr>
<p>There are two self closing special tags below, which should display nothing, but are present in the output.
There is then one special tag with both and opening and closing tag with some text in it (<code class="hljs inline no-lang" v-pre>lorem ipsum...</code>).
Note that script and style tags are still not allowed to be self-closing, as per the html5 spec.</p>
<testselfclosingtag></testselfclosingtag>
<testselfclosingtag></testselfclosingtag>
<testselfclosingtag>
<p>Lorem ipsum lorem ipsum</p></testselfclosingtag>
<hr>
<p>This should pass the htmlparser2 patch but not the markdown-it patch as it violates commonmark.<br>
All lines after the first <code class="hljs inline no-lang" v-pre>!success</code> wrapping text will be wrapped in a <code class="hljs inline no-lang" v-pre>&lt;p&gt;...&lt;/p&gt;</code> tag as it is
parsed as a markdown paragraph.</p>
<div>
<testtag>
let x = 2;
<p>if (x &lt;= 5) {
alert(x);
}</p></testtag></div>
<hr></p>
<scroll-top-button></scroll-top-button></div>`;