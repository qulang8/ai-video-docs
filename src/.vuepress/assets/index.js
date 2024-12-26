async function sleep(ts = 5e3) { return new Promise(done => { setTimeout(done, ts); }); };

function setCopyright(content = "Copyright © 2015 - 2025 上海趣浪电子商务有限公司") {
  const $dom = document.querySelector(".vp-footer .container .message");
  $dom && ($dom.innerHTML = content);
}

(() => {
  try {
    document.body.onload = async () => {
      await sleep(1e2);
      setCopyright("Copyright © 2015 - 2025 上海趣浪电子商务有限公司");
    };
  } catch (error) { }
})();