async function sleep(ts = 5e3) { return new Promise(done => { setTimeout(done, ts); }); };

function setCopyright(content = "Copyright © 2015 - 2025 上海趣浪电子商务有限公司") {
  const $dom = document.querySelector(".vp-footer .container .message");
  $dom && ($dom.innerHTML = content);
}

function setStatistics(w, d, s, q, i) {
  w[q] = w[q] || [];
  var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
  j.async = true;
  j.id = "beacon-aplus";
  j.src = "https://d.alicdn.com/alilog/mlog/aplus/" + i + ".js";
  f.parentNode.insertBefore(j, f);
  setTimeout(() => {
    aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: ["appKey", "6359cf2105844627b5706df0"]
    });
  });
};

(() => {
  try {
    document.body.onload = async () => {
      await sleep(1e2);
      setCopyright("Copyright © 2015 - 2025 上海趣浪电子商务有限公司");
    };
    setCopyright("Copyright © 2015 - 2025 上海趣浪电子商务有限公司");
    setStatistics(window, document, "script", "aplus_queue", "203467608");
  } catch (error) { }
})();