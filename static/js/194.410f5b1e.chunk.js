(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[194],{328:function(n,e){!function(n){var e=n.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,a){"string"===typeof e&&(e=[e]),e.forEach((function(e){!function(e,a){var t="doc-comment",i=n.languages[e];if(i){var o=i[t];if(!o){var r={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};o=(i=n.languages.insertBefore(e,"comment",r))[t]}if(o instanceof RegExp&&(o=i[t]={pattern:o}),Array.isArray(o))for(var s=0,p=o.length;s<p;s++)o[s]instanceof RegExp&&(o[s]={pattern:o[s]}),a(o[s]);else a(o)}}(e,(function(n){n.inside||(n.inside={}),n.inside.rest=a}))}))}}),e.addSupport(["java","javascript","php"],e)}(Prism)}}]);
//# sourceMappingURL=194.410f5b1e.chunk.js.map