document.getElementById('year').textContent = new Date().getFullYear();
const projects = window.portfolioProjects;
const grid = document.getElementById('project-grid');
const dialog = document.getElementById('project-dialog');
let activeProject;
let imageIndex = 0;
let lastTrigger;

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}
projects.forEach((project, index) => {
  const card = node('article', 'work-card' + (index === 0 ? ' featured-work' : ''));
  card.dataset.group = project.group;
  const trigger = node('button', 'project-trigger');
  trigger.type = 'button';
  trigger.setAttribute('aria-haspopup', 'dialog');
  trigger.setAttribute('aria-label', 'Xem hình ảnh và chi tiết ' + project.name);
  const cover = node('div', 'work-cover cover-' + project.id);
  const image = node('img');
  image.src = project.images[0].src;
  image.alt = project.images[0].alt;
  image.loading = 'lazy';
  image.width = 1000;
  image.height = 580;
  cover.append(image, node('span', 'cover-badge', project.id === 'odoo' ? 'ẢNH DỰ ÁN' : 'SƠ ĐỒ DỰ ÁN'), node('span', 'cover-open', '↗'));
  const body = node('div', 'work-body');
  body.append(node('p', 'work-category', project.category), node('h3', '', project.name), node('p', 'work-description', project.short));
  const footer = node('div', 'work-footer');
  const tags = node('div', 'work-tags');
  project.tech.forEach(tech => tags.append(node('span', '', tech)));
  footer.append(tags, node('span', 'view-project', 'Khám phá ↗'));
  body.append(footer);
  trigger.append(cover, body);
  trigger.addEventListener('click', () => openProject(project, trigger));
  card.append(trigger);
  grid.append(card);
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    grid.querySelectorAll('.work-card').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.group !== button.dataset.filter;
      if (!card.hidden) visible++;
    });
    document.getElementById('project-status').textContent = `Đang hiển thị ${visible} dự án.`;
  });
});

function renderImage() {
  const image = activeProject.images[imageIndex];
  const target = document.getElementById('detail-image');
  target.src = image.src;
  target.alt = image.alt;
  document.getElementById('image-caption').textContent = image.caption;
  document.getElementById('image-count').textContent = `${imageIndex + 1} / ${activeProject.images.length}`;
  document.querySelectorAll('.gallery-thumbnail').forEach((button, index) => {
    button.setAttribute('aria-pressed', String(index === imageIndex));
  });
}
function openProject(project, trigger) {
  activeProject = project;
  imageIndex = 0;
  lastTrigger = trigger;
  document.getElementById('detail-index').textContent = String(projects.indexOf(project) + 1).padStart(2, '0');
  document.getElementById('detail-title').textContent = project.name;
  document.getElementById('detail-category').textContent = project.category;
  document.getElementById('detail-description').textContent = project.description;
  document.getElementById('detail-repo').href = 'https://github.com/khoadd879/' + project.repo;
  document.getElementById('detail-features').replaceChildren(...project.features.map(feature => node('li', '', feature)));
  document.getElementById('detail-tech').replaceChildren(...project.tech.map(tech => node('span', '', tech)));
  const thumbnails = document.getElementById('gallery-thumbnails');
  thumbnails.replaceChildren(...project.images.map((image, index) => {
    const button = node('button', 'gallery-thumbnail');
    button.type = 'button';
    button.setAttribute('aria-label', `Xem ảnh ${index + 1}: ${image.caption}`);
    const img = node('img');
    img.src = image.src;
    img.alt = '';
    button.append(img);
    button.addEventListener('click', () => { imageIndex = index; renderImage(); });
    return button;
  }));
  renderImage();
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
  document.getElementById('close-dialog').focus();
}
function moveImage(step) {
  imageIndex = (imageIndex + step + activeProject.images.length) % activeProject.images.length;
  renderImage();
}
document.querySelector('.gallery-prev').addEventListener('click', () => moveImage(-1));
document.querySelector('.gallery-next').addEventListener('click', () => moveImage(1));
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { event.preventDefault(); moveImage(1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); moveImage(-1); }
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  lastTrigger?.focus();
});
