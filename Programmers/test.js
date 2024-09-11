import * as _ from "fxjs/Strict";
import * as L from "fxjs/Lazy";

const Images = {};
Images.fetch = () => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { name: "하니", url: "" },
          { name: "해린", url: "" },
          { name: "민지", url: "" },
        ]),
      500
    )
  );
};

const $ = {};
$.qs = document.querySelector.bind(document);
$.append = (parent, child) => parent.appendChild(child);
$.el = (html) => {
  const wrap = document.createElement("div");
  wrap.innerHTML = html;
  return wrap.children[0];
};

const stringify = (iter) => _.reduce((a, b) => `${a}${b}`, iter);

Images.tmpl = (imgs) => `
  <div class="images>
    ${stringify(
      L.map(
        (img) => `
        <div class="image">
          <div class="box"><img src="${img.url}" alt="" /></div>
          <div class="name">${img.name}</div>
        </div>
      `,
        imgs
      )
    )}
  </div>
`;

_.go(Images.fetch(), Images.tmpl, $.el, $.append($.qs("body")), console.log);
