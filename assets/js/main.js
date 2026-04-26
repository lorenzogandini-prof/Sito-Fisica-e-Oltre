/* ============================================================
   THEME TOGGLE
   ============================================================ */

(function () {
  const STORAGE_KEY = 'theme';
  const html = document.documentElement;

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem(STORAGE_KEY, t);
    // Aggiorna Giscus se presente
    const giscus = document.querySelector('iframe.giscus-frame');
    if (giscus) {
      giscus.contentWindow.postMessage({
        giscus: { setConfig: { theme: t === 'dark' ? 'dark' : 'light' } }
      }, 'https://giscus.app');
    }
  }

  // Applica subito per evitare flash
  applyTheme(getTheme());

  document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const current = html.getAttribute('data-theme') || 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    });
  });
})();


/* ============================================================
   NAVBAR MOBILE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar__burger');
  const nav = document.querySelector('.navbar__nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    // Chiudi al click su link
    nav.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Active link
  const path = window.location.pathname;
  document.querySelectorAll('.navbar__link').forEach(link => {
    if (link.getAttribute('href') && path.startsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
});


/* ============================================================
   EDITOR ARTICOLI
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('editorOverlay');
  if (!overlay) return;

  const modal = overlay.querySelector('.editor-modal');
  const closeBtn = overlay.querySelector('.editor-close');
  const textarea = document.getElementById('editorContent');
  const preview = document.getElementById('editorPreview');
  const titleInput = document.getElementById('editorTitle');
  const sectionSel = document.getElementById('editorSection');
  const tagInput = document.getElementById('editorTags');
  const exportBtn = document.getElementById('editorExport');
  const copyBtn = document.getElementById('editorCopy');

  // Apri editor
  document.querySelectorAll('[data-open-editor]').forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Chiudi
  function closeEditor() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  closeBtn.addEventListener('click', closeEditor);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeEditor(); });

  // Markdown → HTML semplice
  function mdToHtml(md) {
    return md
      .replace(/^#{3} (.+)$/gm, '<h3>$1</h3>')
      .replace(/^#{2} (.+)$/gm, '<h2>$1</h2>')
      .replace(/^#{1} (.+)$/gm, '<h1>$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<[h|u|b|l|p])(.+)$/gm, '<p>$1</p>');
  }

  // Anteprima live
  function updatePreview() {
    if (!preview || !textarea) return;
    preview.innerHTML = mdToHtml(textarea.value || '');
  }

  if (textarea) {
    textarea.addEventListener('input', updatePreview);
    updatePreview();
  }

  // Toolbar markdown
  const toolbarActions = {
    'bold':       ['**', '**', 'testo in grassetto'],
    'italic':     ['*', '*', 'testo in corsivo'],
    'h2':         ['## ', '', 'Titolo sezione'],
    'h3':         ['### ', '', 'Sottotitolo'],
    'link':       ['[', '](https://)', 'testo del link'],
    'quote':      ['> ', '', 'citazione'],
    'code':       ['`', '`', 'codice'],
    'ul':         ['- ', '', 'elemento lista'],
    'hr':         ['\n---\n', '', ''],
  };

  document.querySelectorAll('[data-md]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!textarea) return;
      const action = btn.dataset.md;
      const [before, after, placeholder] = toolbarActions[action] || ['', '', ''];
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selected = textarea.value.slice(start, end) || placeholder;
      const replacement = before + selected + after;
      textarea.setRangeText(replacement, start, end, 'select');
      textarea.focus();
      updatePreview();
    });
  });

  // Genera front matter Jekyll
  function generateFrontMatter() {
    const title = titleInput?.value || 'Titolo';
    const section = sectionSel?.value || 'riflessioni';
    const tags = tagInput?.value ? tagInput.value.split(',').map(t => t.trim()) : [];
    const date = new Date().toISOString().split('T')[0];
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const tagsYaml = tags.length ? '\ntags:\n' + tags.map(t => `  - ${t}`).join('\n') : '';

    return {
      frontMatter: `---\nlayout: post\ntitle: "${title}"\ndate: ${date}\ncategories: ${section}${tagsYaml}\ncomments: true\n---\n\n`,
      filename: `${date}-${slug}.md`
    };
  }

  // Copia negli appunti
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const { frontMatter } = generateFrontMatter();
      const content = frontMatter + (textarea?.value || '');
      await navigator.clipboard.writeText(content);
      copyBtn.textContent = '✓ Copiato!';
      setTimeout(() => copyBtn.textContent = '📋 Copia testo', 1500);
    });
  }

  // Download file .md
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const { frontMatter, filename } = generateFrontMatter();
      const content = frontMatter + (textarea?.value || '');
      const blob = new Blob([content], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
});


/* ============================================================
   VOCABOLARIO - FILTRO/RICERCA
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const vocabSearch = document.getElementById('vocabSearch');
  if (!vocabSearch) return;

  const items = document.querySelectorAll('.vocab-item');
  vocabSearch.addEventListener('input', () => {
    const q = vocabSearch.value.toLowerCase();
    items.forEach(item => {
      const term = item.querySelector('.vocab-item__term')?.textContent.toLowerCase() || '';
      const def  = item.querySelector('.vocab-item__def')?.textContent.toLowerCase() || '';
      item.style.display = (term.includes(q) || def.includes(q)) ? '' : 'none';
    });
  });
});


/* ============================================================
   FILTRO ARTICOLI
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('[data-filter]');
  if (!filterBtns.length) return;

  const cards = document.querySelectorAll('[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});


/* ============================================================
   INTERSECTION OBSERVER - ANIMAZIONI
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const animElements = document.querySelectorAll('.animate-on-scroll');
  if (!animElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animElements.forEach(el => observer.observe(el));
});
