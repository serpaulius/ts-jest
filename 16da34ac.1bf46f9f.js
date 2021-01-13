(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),o=n(7),r=(n(0),n(97)),l={title:"Babel Config option"},i={unversionedId:"options/babelConfig",id:"options/babelConfig",isDocsHomePage:!1,title:"Babel Config option",description:"ts-jest by default does NOT use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ts-jest can call the BabelJest processor once TypeScript has transformed the source into JavaScript.",source:"@site/docs/options/babelConfig.md",slug:"/options/babelConfig",permalink:"/ts-jest/docs/options/babelConfig",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/docs/options/babelConfig.md",version:"current"},s=[{value:"Examples",id:"examples",children:[]}],b={rightToc:s};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ts-jest")," by default does ",Object(r.b)("strong",{parentName:"p"},"NOT")," use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ",Object(r.b)("inlineCode",{parentName:"p"},"ts-jest")," can call the BabelJest processor once TypeScript has transformed the source into JavaScript."),Object(r.b)("p",null,"The option is ",Object(r.b)("inlineCode",{parentName:"p"},"babelConfig")," and it works pretty much as the ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig")," option, except that it is disabled by default. Here is the possible values it can take:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"false"),": the default, disables the use of Babel"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"true"),": enables Babel processing. ",Object(r.b)("inlineCode",{parentName:"li"},"ts-jest")," will try to find a ",Object(r.b)("inlineCode",{parentName:"li"},".babelrc"),", ",Object(r.b)("inlineCode",{parentName:"li"},".babelrc.js"),", ",Object(r.b)("inlineCode",{parentName:"li"},"babel.config.js")," file or a ",Object(r.b)("inlineCode",{parentName:"li"},"babel")," section in the ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")," file of your project and use it as the config to pass to ",Object(r.b)("inlineCode",{parentName:"li"},"babel-jest")," processor."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"{ ... }"),": inline ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://babeljs.io/docs/en/next/options"}),"Babel options"),". You can also set this to an empty object (",Object(r.b)("inlineCode",{parentName:"li"},"{}"),") so that the default Babel config file is not used.")),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("h4",{id:"use-default-babelrc-file"},"Use default ",Object(r.b)("inlineCode",{parentName:"h4"},"babelrc")," file"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: true\n    }\n  }\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": true\n      }\n    }\n  }\n}\n')),Object(r.b)("h4",{id:"path-to-a-babelrc-file"},"Path to a ",Object(r.b)("inlineCode",{parentName:"h4"},"babelrc")," file"),Object(r.b)("p",null,"The path should be relative to the current working directory where you start Jest from. You can also use ",Object(r.b)("inlineCode",{parentName:"p"},"\\<rootDir>")," in the path, or use an absolute path (this last one is strongly not recommended)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: 'babelrc.test.js'\n    }\n  }\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// OR jest.config.js with require for babelrc\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: require('./babelrc.test.js'),\n    }\n  }\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": "babelrc.test.js"\n      }\n    }\n  }\n}\n')),Object(r.b)("h4",{id:"inline-compiler-options"},"Inline compiler options"),Object(r.b)("p",null,"Refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/next/options"}),"Babel options")," to know what can be used there."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: {\n        comments: false,\n        plugins: ['@babel/plugin-transform-for-of']\n      }\n    }\n  }\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": {\n          "comments": false,\n          "plugins": ["@babel/plugin-transform-for-of"]\n        }\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),c=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},j=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=c(n),j=a,f=p["".concat(l,".").concat(j)]||p[j]||u[j]||r;return n?o.a.createElement(f,i(i({ref:t},b),{},{components:n})):o.a.createElement(f,i({ref:t},b))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=j;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<r;b++)l[b]=n[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);