if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let b=Promise.resolve();return c[e]||(b=new Promise(async b=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=b}else importScripts(e),b()})),b.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},b=(b,c)=>{Promise.all(b.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(b)};self.define=(b,a,f)=>{c[b]||(c[b]=Promise.resolve().then(()=>{let c={};const d={uri:location.origin+b.slice(1)};return Promise.all(a.map(b=>{switch(b){case"exports":return c;case"module":return d;default:return e(b)}})).then(e=>{const b=f(...e);return c.default||(c.default=b),c})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/21f7ddc02a44a781450baa387b6c0126.jpg",revision:"21f7ddc02a44a781450baa387b6c0126"},{url:"/35c222565d4672ebaf7950475f1071c2.jpg",revision:"35c222565d4672ebaf7950475f1071c2"},{url:"/3ba9c0f4f8b543ffde8bd6f86fa9ce3e.jpg",revision:"3ba9c0f4f8b543ffde8bd6f86fa9ce3e"},{url:"/3d46f8ae10beb5223d0dbf93358c5062.jpg",revision:"3d46f8ae10beb5223d0dbf93358c5062"},{url:"/47b49276e2dcd396b02fcefc03f46466.gif",revision:"47b49276e2dcd396b02fcefc03f46466"},{url:"/4b93446cf9abb836dbe76e3d0b5e0e65.svg",revision:"4b93446cf9abb836dbe76e3d0b5e0e65"},{url:"/5e31f1a79da9a90941d353b563316dd0.jpg",revision:"5e31f1a79da9a90941d353b563316dd0"},{url:"/6608d2ac61a81f34460375128c70c1be.jpg",revision:"6608d2ac61a81f34460375128c70c1be"},{url:"/672e1ef81a28e89fd110808f732aa3e7.jpg",revision:"672e1ef81a28e89fd110808f732aa3e7"},{url:"/69afbc824cbb35cc5aa814cd7bf6c4c1.jpg",revision:"69afbc824cbb35cc5aa814cd7bf6c4c1"},{url:"/8d453788db7faafef8b8023bac4a594c.jpg",revision:"8d453788db7faafef8b8023bac4a594c"},{url:"/a76256cbfa8553be1dbb097d0ccba25e.svg",revision:"a76256cbfa8553be1dbb097d0ccba25e"},{url:"/a97af75f877159ea448194bb90c0d85d.png",revision:"a97af75f877159ea448194bb90c0d85d"},{url:"/acf756b2c367e9b2a9f797f4c026fd5b.jpg",revision:"acf756b2c367e9b2a9f797f4c026fd5b"},{url:"/b2138751ec3c40bb5c24fcea41aaff9d.svg",revision:"b2138751ec3c40bb5c24fcea41aaff9d"},{url:"/b23a06bc4b0abf75f6773d277ea7f45f.png",revision:"b23a06bc4b0abf75f6773d277ea7f45f"},{url:"/be3dca9e94347ae9bba956376015b389.jpg",revision:"be3dca9e94347ae9bba956376015b389"},{url:"/cb7683c976906ea039f9329fc4c86fe8.jpg",revision:"cb7683c976906ea039f9329fc4c86fe8"},{url:"/cdd6e433cbd2f5ba8a7e4dbfbf22dfe4.jpg",revision:"cdd6e433cbd2f5ba8a7e4dbfbf22dfe4"},{url:"/dc88c8739799f3131accaf9096266319.jpg",revision:"dc88c8739799f3131accaf9096266319"},{url:"/e4d03924b2b90cc7b08dc60c9cbafb12.jpg",revision:"e4d03924b2b90cc7b08dc60c9cbafb12"},{url:"/e9ea73949de71d45ae46047646b95727.gif",revision:"e9ea73949de71d45ae46047646b95727"},{url:"/ham.svg",revision:"b60e86a80bcf5a17bc80efe9602b2483"},{url:"/index.html",revision:"b02f8bc2883b87005a75346e9bc62f8a"},{url:"/main.bundle.js",revision:"a0fde68dcb25d6ce9fcbdac69a6a86cf"},{url:"/main.css",revision:"2c3f40b36b8abdf78370bb7e6e123e19"},{url:"/vendors~main.bundle.js",revision:"2387f399357270a682ba72f38c1195d7"},{url:"/vendors~main.bundle.js.LICENSE.txt",revision:"aed08aa0788271d4d26a3eded4f47261"}],{})}));
//# sourceMappingURL=service-worker.js.map
