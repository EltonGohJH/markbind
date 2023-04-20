const pageContent =  `<div id="app"><p>
<p><strong>Test Algolia plugin adds algolia-no-index classes</strong></p>
<p><strong>Dropdowns should have algolia-no-index class</strong></p>
<dropdown class="algolia-no-index"><template #header>Dropdown</template>
  <li><a class="dropdown-item" href="/">One</a></li>
  <li><a class="dropdown-item" href="/">Two</a></li></dropdown>
<p><strong>Modal content should have algolia-no-index class</strong></p>
<modal id="modal:trigger_id" class="algolia-no-index"><template #header>Modal</template>
  Content should have `algolia-no-index` class
</modal>
<trigger for="modal:trigger_id">Trigger should not have `algolia-no-index` class</trigger>
<p><strong>Panels that are not expanded should have algolia-no-index class</strong></p>
<panel class="algolia-no-index"><template #header><p>Panel</p></template>
  Content
</panel>
<panel expanded><template #header><p>Panel</p></template>
  Content
</panel>
<p><strong>Popover content should have algolia-no-index class</strong></p>
<popover placement="top"><template #header>Title</template>
  <template #content><div>Content should have `algolia-no-index` class</div></template>
  <button class="btn btn-secondary">Trigger should not have `algolia-no-index` class</button></popover>
<popover placement="top"><template #content>Content should have <code class="hljs inline no-lang" v-pre>algolia-no-index</code> class</template><template #header>Title</template>
  <button class="btn btn-secondary">Trigger should not have `algolia-no-index` class</button></popover>
<p><strong>Tooltip content should have algolia-no-index class</strong></p>
<tooltip placement="top"><template #content>Content should have <code class="hljs inline no-lang" v-pre>algolia-no-index</code> class</template>
  <button class="btn btn-secondary">Trigger should not have `algolia-no-index` class</button></tooltip>
<p><strong>Question hint and answer should have algolia-no-index class</strong></p>
<question type="checkbox">
  Question should not have `algolia-no-index` class
  <template #hint><div class="algolia-no-index">Hint should have `algolia-no-index` class</div></template>
  <template #answer><div class="algolia-no-index">Answer should have `algolia-no-index` class</div></template></question>
<p><strong>Tabs except first tab should have algolia-no-index class</strong></p>
<tabs>
  <tab><template #header>First Tab</template>
    Content<br>Content<br>Content<br>Content
  </tab>
  <tab class="algolia-no-index"><template #header>Second Tab</template>
    Content<br>Content<br>Content<br>Content
  </tab></tabs>
<tabs>
  <tab-group><template #header>First Group</template>
    <tab><template #header>First Tab</template>
      Content<br>Content<br>Content<br>Content
    </tab>
    <tab class="algolia-no-index"><template #header>Second Tab</template>
      Content<br>Content<br>Content<br>Content
    </tab></tab-group>
  <tab-group class="algolia-no-index"><template #header>Second Group</template>
    <tab><template #header>First Tab</template>
      Content<br>Content<br>Content<br>Content
    </tab>
    <tab class="algolia-no-index"><template #header>Second Tab</template>
      Content<br>Content<br>Content<br>Content
    </tab></tab-group></tabs>
<tabs>
  <tab-group><template #header>Outer One</template>
    <tab><template #header>First Tab</template>
      Content<br>Content<br>Content<br>Content
    </tab>
    <tab class="algolia-no-index"><template #header>Second Tab</template>
      Content<br>Content<br>Content<br>Content
    </tab></tab-group>
  <tab><template #header>Outer Two</template>
    Content<br>Content<br>Content<br>Content
  </tab></tabs></p>
<scroll-top-button></scroll-top-button></div>`;