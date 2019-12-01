<!DOCTYPE html><html><head><meta charset="utf-8"><title>TechStore.md</title><style></style></head><body id="preview">
<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="TechStore_0"></a>TechStore</h1>
<p class="has-line-data" data-line-start="1" data-line-end="2">A dynamic e-commerce platform project to display the products. And allow the customer to add and delete the product. Also creating a login and register page to keep the track of product added and deleted.</p>
<h1 class="code-line" data-line-start=2 data-line-end=3 ><a id="Motivation_2"></a>Motivation</h1>
<p class="has-line-data" data-line-start="3" data-line-end="4">The original motivation and thinking behind creating this project was to build an dynamic e-commerce platform with combination of Html,Css and JavaScript.</p>
<h3 class="code-line" data-line-start=6 data-line-end=7 ><a id="Techframework_used_6"></a>Tech/framework used</h3>
<p class="has-line-data" data-line-start="8" data-line-end="9">TechStore uses a number of open source projects to work properly:</p>
<ul>
<li class="has-line-data" data-line-start="10" data-line-end="11"><a href="https://www.w3schools.com/css/css3_flexbox.asp">FlexBox</a> -  is a new layout mode in CSS3</li>
<li class="has-line-data" data-line-start="11" data-line-end="12"><a href="https://fontawesome.com/">Font Awesome</a> - is a font and icon toolkit based on CSS</li>
<li class="has-line-data" data-line-start="12" data-line-end="14"><a href="https://www.w3schools.com/whatis/whatis_json.asp">JSON </a> - The JSON format is syntactically identical to the code for creating JavaScript objects.</li>
</ul>
<h3 class="code-line" data-line-start=14 data-line-end=15 ><a id="Requirements_14"></a>Requirements</h3>
<p class="has-line-data" data-line-start="16" data-line-end="21">The requirement for the project :<br>
· Visual studio code<br>
· Html file<br>
· CSS file<br>
· Javascript</p>
<h3 class="code-line" data-line-start=22 data-line-end=23 ><a id="Installation_22"></a>Installation</h3>
<p class="has-line-data" data-line-start="24" data-line-end="28">· Visual studio code<br>
· Live server<br>
· Github<br>
· Fork</p>
<h3 class="code-line" data-line-start=29 data-line-end=30 ><a id="Features_29"></a>Features</h3>
<p class="has-line-data" data-line-start="30" data-line-end="31">A website for a newly started company that sells technology gadgets. The company is called TechStore and is for building an e-commerce site to add and remove the product selected by the customer after login in.</p>
<h3 class="code-line" data-line-start=31 data-line-end=32 ><a id="Code_Example_31"></a>Code Example</h3>
<pre><code class="has-line-data" data-line-start="35" data-line-end="48" class="language-sh"><span class="hljs-keyword">function</span> <span class="hljs-function"><span class="hljs-title">loadProducts</span></span>() {
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
<h3 class="code-line" data-line-start=48 data-line-end=49 ><a id="Authors_48"></a>Authors</h3>
<p class="has-line-data" data-line-start="49" data-line-end="52">•   Bara Abdullatif -<a href="https://github.com/baraabd">Bara Abdullatif</a><br>
•   Ahmad Askandarafshar -<a href="https://github.com/afshar20922019">Ahmad Askandarafshar</a><br>
•   anukhatra -<a href="https://github.com/anukhatra">anukhatra</a></p>
<h3 class="code-line" data-line-start=52 data-line-end=53 ><a id="License_52"></a>License</h3>
<p class="has-line-data" data-line-start="53" data-line-end="54"><strong>Free Software, Hell Yeah!</strong></p>

</body></html>