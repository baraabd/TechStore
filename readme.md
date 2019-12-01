<!DOCTYPE html><html><head><meta charset="utf-8"><title>TechStore.md</title><style></style></head><body id="preview">
<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="TechStore_0"></a>TechStore</h1>
<p class="has-line-data" data-line-start="1" data-line-end="2">A dynamic e-commerce platform</p>
<h1 class="code-line" data-line-start=2 data-line-end=3 ><a id="Motivation_2"></a>Motivation</h1>
<p class="has-line-data" data-line-start="3" data-line-end="4">The original motivation and thinking behind creating this project was to build an dynamic e-commerce platform with combination of Html,Css and JavaScript.</p>
<h3 class="code-line" data-line-start=6 data-line-end=7 ><a id="Techframework_used_6"></a>Tech/framework used</h3>
<p class="has-line-data" data-line-start="8" data-line-end="9">TechStore uses a number of open source projects to work properly:</p>
<ul>
<li class="has-line-data" data-line-start="10" data-line-end="11"><a href="https://www.w3schools.com/css/css3_flexbox.asp">FlexBox</a> -  is a new layout mode in CSS3</li>
<li class="has-line-data" data-line-start="11" data-line-end="12"><a href="https://fontawesome.com/">Font Awesome</a> - is a font and icon toolkit based on CSS</li>
<li class="has-line-data" data-line-start="12" data-line-end="13"><a href="https://www.w3schools.com/whatis/whatis_json.asp">JSON </a> - The JSON format is syntactically identical to the code for creating JavaScript objects.</li>
</ul>
<h3 class="code-line" data-line-start=15 data-line-end=16 ><a id="Features_15"></a>Features</h3>
<p class="has-line-data" data-line-start="16" data-line-end="17">A website for a newly started company that sells technology gadgets. The company is called TechStore and is for building an e-commerce site.</p>
<h3 class="code-line" data-line-start=17 data-line-end=18 ><a id="Code_Example_17"></a>Code Example</h3>
<pre><code class="has-line-data" data-line-start="21" data-line-end="34" class="language-sh"><span class="hljs-keyword">function</span> <span class="hljs-function"><span class="hljs-title">loadProducts</span></span>() {
    fetch(<span class="hljs-string">"./products.json"</span>)
        .then(<span class="hljs-keyword">function</span>(response) {
            <span class="hljs-built_in">return</span> response.json()
        })
        .then(<span class="hljs-keyword">function</span>(products) {
            listOfProducts = products
            addProductsToWebpage()
                // var checkLogin = <span class="hljs-string">"Logga in"</span>
                // <span class="hljs-built_in">local</span>Storage.setItem(<span class="hljs-string">"checkLogin"</span>, JSON.stringify(checkLogin))
        })
}
</code></pre>
<h3 class="code-line" data-line-start=34 data-line-end=35 ><a id="Authors_34"></a>Authors</h3>
<p class="has-line-data" data-line-start="35" data-line-end="38">•   Bara Abdullatif -<a href="https://github.com/baraabd">Bara Abdullatif</a><br>
•   Ahmad Askandarafshar -<a href="https://github.com/afshar20922019">Ahmad Askandarafshar</a><br>
•   anukhatra -<a href="https://github.com/anukhatra">anukhatra</a></p>
<h3 class="code-line" data-line-start=38 data-line-end=39 ><a id="License_38"></a>License</h3>
<p class="has-line-data" data-line-start="39" data-line-end="40"><strong>Free Software, Hell Yeah!</strong></p>

</body></html>