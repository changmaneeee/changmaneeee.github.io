(function () {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");

  const ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 9.5 12 4l10 5.5L12 15z"/><path d="M6 11.7V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.3"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h3v12H3zM9 9h2.9v1.7c.5-.9 1.7-1.9 3.6-1.9 3.1 0 4.5 1.9 4.5 5.3V21h-3v-6.2c0-1.7-.5-2.9-2-2.9s-2.2 1.1-2.2 2.9V21H9z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>'
  };

  document.querySelectorAll("[data-bind]").forEach((el) => { el.textContent = S[el.dataset.bind] || ""; });
  $("#year").textContent = new Date().getFullYear();

  const linkHTML = S.links.map((l) => {
    const ext = l.href.startsWith("http") ? ' rel="noopener" target="_blank"' : "";
    return `<li><a href="${esc(l.href)}"${ext}>${ICONS[l.icon] || ""}<span>${esc(l.label)}</span></a></li>`;
  }).join("");
  $("#links").innerHTML = linkHTML;
  $("#links-foot").innerHTML = linkHTML;

  $("#news").innerHTML = S.news.map((n) =>
    `<li><span class="date">${esc(n.date)}</span><span>${md(n.text)}</span></li>`).join("");

  $("#themes").innerHTML = S.research.map((r) => `
    <article class="theme-item">
      ${r.image ? `<figure><img src="${esc(r.image)}" alt="${esc(r.alt)}" loading="lazy"></figure>` : ""}
      <h3>${esc(r.title)}</h3>
      <p>${esc(r.text)}</p>
    </article>`).join("");

  $("#featured").innerHTML = S.featured.map((p) => {
    const figs = p.figures.length
      ? `<dl class="figs">${p.figures.map((f) => `<div><dt class="fig-value">${esc(f.value)}</dt><dd>${esc(f.label)}</dd></div>`).join("")}</dl>` : "";
    const first = p.images[0];
    const thumbs = p.images.length > 1
      ? `<div class="thumbs" role="group" aria-label="Choose image">${p.images.map((im, i) =>
          `<button type="button" aria-pressed="${i === 0}" data-i="${i}" aria-label="Show: ${esc(im.caption)}"><img src="${esc(im.src)}" alt="" loading="lazy"></button>`).join("")}</div>` : "";
    return `
    <article class="project" id="${esc(p.id)}">
      <div class="gallery" data-project="${esc(p.id)}">
        <figure class="main">
          <button type="button" aria-label="Enlarge image"><img src="${esc(first.src)}" alt="${esc(first.alt)}" loading="lazy"></button>
          <figcaption>${esc(first.caption)}</figcaption>
        </figure>
        ${thumbs}
      </div>
      <div>
        <h3>${esc(p.title)}</h3>
        <p class="meta">${esc(p.context)}, ${esc(p.period)}</p>
        <p class="meta role-line">${esc(p.role)}</p>
        <ul>${p.points.map((x) => `<li>${md(x)}</li>`).join("")}</ul>
        ${figs}
      </div>
    </article>`;
  }).join("");

  // Gallery: thumbnails swap the main image; the main image opens the lightbox.
  const lb = $("#lightbox");
  document.querySelectorAll(".gallery").forEach((g) => {
    const p = S.featured.find((x) => x.id === g.dataset.project);
    const img = g.querySelector(".main img");
    const cap = g.querySelector(".main figcaption");
    g.querySelectorAll(".thumbs button").forEach((b) => b.addEventListener("click", () => {
      const im = p.images[+b.dataset.i];
      img.src = im.src; img.alt = im.alt; cap.textContent = im.caption;
      g.querySelectorAll(".thumbs button").forEach((o) => o.setAttribute("aria-pressed", String(o === b)));
    }));
    g.querySelector(".main button").addEventListener("click", () => {
      lb.querySelector("img").src = img.src;
      lb.querySelector("img").alt = img.alt;
      lb.querySelector(".lb-cap").textContent = cap.textContent;
      lb.showModal();
    });
  });
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });

  $("#minor").innerHTML = S.projects.map((p) => `
    <article>
      <h4>${esc(p.title)}</h4>
      <p class="meta">${esc(p.context)}, ${esc(p.period)}</p>
      <p>${md(p.text)}</p>
    </article>`).join("");

  $("#pubs").innerHTML = S.publications.map((g) => `
    <div class="pub-group">
      <h3>${esc(g.group)}</h3>
      <ol class="pubs">${g.items.map((it) =>
        `<li>${md(it.text)}${it.link ? ` <a href="${esc(it.link)}" rel="noopener" target="_blank">${esc(it.linkLabel || "Link")}</a>` : ""}</li>`).join("")}</ol>
    </div>`).join("");

  $("#timeline").innerHTML = S.talks.map((t) => `
    <li><span class="date">${esc(t.date)}</span>
      <div><h3>${esc(t.event)}</h3><span class="place">${esc(t.place)}</span><p>${esc(t.detail)}</p></div></li>`).join("");

  $("#edu").innerHTML = S.education.map((e) =>
    `<li><strong>${esc(e.school)}</strong><span>${esc(e.degree)}</span><span class="date">${esc(e.period)}</span></li>`).join("");
  $("#skills").innerHTML = S.skills.map((s) => `<dt>${esc(s.area)}</dt><dd>${esc(s.items)}</dd>`).join("");

  // Theme toggle
  $(".theme").addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

})();
