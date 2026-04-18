const projectList = document.querySelector("[data-project-list]");
const careerList = document.querySelector("[data-career-list]");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderTimelineMeta(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return "";
  }

  return `
    <dl class="timeline-meta">
      ${items
        .map(
          (item) => `
            <div>
              <dt>${escapeHtml(item.label || "")}</dt>
              <dd>${escapeHtml(item.value || "")}</dd>
            </div>
          `,
        )
        .join("")}
    </dl>
  `;
}

function renderTimelineHighlights(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return "";
  }

  return `
    <ul class="timeline-details">
      ${items
        .map((item) => {
          const link = item.href && item.linkLabel
            ? `<a class="timeline-link" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(item.linkLabel)}</a>`
            : "";
          const summaryParts = [
            item.label ? `<span class="timeline-detail-label">${escapeHtml(item.label)}</span>` : "",
            link,
            item.suffix ? `<span>${escapeHtml(item.suffix)}</span>` : "",
          ].filter(Boolean);
          const bullets = Array.isArray(item.bullets) && item.bullets.length > 0
            ? `
              <ul class="timeline-subdetails">
                ${item.bullets
                  .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
                  .join("")}
              </ul>
            `
            : "";

          return `
            <li>
              ${summaryParts.length > 0 ? `<p class="timeline-detail-summary">${summaryParts.join(" ")}</p>` : ""}
              ${bullets}
            </li>
          `;
        })
        .join("")}
    </ul>
  `;
}

function renderProjects(items) {
  if (!projectList) {
    return;
  }

  projectList.innerHTML = items
    .map((item) => {
      const tags = Array.isArray(item.tags)
        ? item.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")
        : "";

      return `
        <article class="project-card ${escapeHtml(item.accent || "")}">
          <p class="project-index">${escapeHtml(item.index || "")}</p>
          <h3>${escapeHtml(item.title || "")}</h3>
          <p>${escapeHtml(item.description || "")}</p>
          <ul>${tags}</ul>
        </article>
      `;
    })
    .join("");
}

function renderCareer(items) {
  if (!careerList) {
    return;
  }

  careerList.innerHTML = items
    .map(
      (item) => `
        <li>
          <span class="timeline-year">${escapeHtml(item.year || "")}</span>
          <div class="timeline-copy">
            <strong>${escapeHtml(item.title || "")}</strong>
            ${item.description ? `<p>${escapeHtml(item.description)}</p>` : ""}
            ${renderTimelineMeta(item.meta)}
            ${renderTimelineHighlights(item.highlights)}
          </div>
        </li>
      `,
    )
    .join("");
}

function initHomeContent() {
  try {
    const projects = Array.isArray(window.__HOME_PROJECTS__)
      ? window.__HOME_PROJECTS__
      : [];
    const career = Array.isArray(window.__HOME_CAREER__)
      ? window.__HOME_CAREER__
      : [];

    renderProjects(projects);
    renderCareer(career);
  } catch (error) {
    if (projectList) {
      projectList.innerHTML =
        '<p class="dynamic-status">Project data could not be loaded.</p>';
    }

    if (careerList) {
      careerList.innerHTML =
        '<li><p class="dynamic-status">Career data could not be loaded.</p></li>';
    }

    console.error("Failed to initialize homepage content.", error);
  }
}

initHomeContent();
