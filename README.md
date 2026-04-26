# Sito Personale — Jekyll + GitHub Pages

Sito personale con 4 sezioni: Didattica, Poesia, Divulgazione, Riflessioni.

## 🚀 Setup rapido su GitHub Pages

### 1. Crea il repository

```bash
# Crea un nuovo repo su GitHub (es: nomeutente.github.io o qualsiasi nome)
# Poi clona e copia qui dentro tutti i file
git init
git add .
git commit -m "Prima versione sito"
git remote add origin https://github.com/TUOUSERNAME/TUOREPO.git
git push -u origin main
```

### 2. Attiva GitHub Pages

- Vai su **Settings → Pages** nel tuo repo
- Source: **GitHub Actions**
- Il deploy partirà automaticamente ad ogni push su `main`

### 3. Configura `_config.yml`

Apri `_config.yml` e modifica:
```yaml
title: "Il tuo nome o titolo"
url: "https://TUOUSERNAME.github.io"
```

### 4. Configura Giscus per i commenti

1. Vai su [giscus.app](https://giscus.app/it)
2. Inserisci il tuo repo (`TUOUSERNAME/TUOREPO`)
3. Copia il **repo-id** e il **category-id** generati
4. Apri `_includes/comments.html` e sostituisci:
   - `TUOUSERNAME/TUOREPO`
   - `INSERISCI_REPO_ID`
   - `INSERISCI_CATEGORY_ID`

> ⚠️ Devi abilitare le **Discussions** nel repo GitHub (Settings → Features → Discussions)

---

## ✍️ Scrivere articoli

### Metodo 1 — Editor integrato (consigliato)
Clicca **+ Nuovo articolo** nella navbar, scrivi, poi scarica il file `.md` generato e aggiungilo a `_posts/`.

### Metodo 2 — Direttamente in `_posts/`
Crea un file con nome `YYYY-MM-DD-titolo-articolo.md` e usa questo front matter:

```yaml
---
layout: post
title: "Titolo articolo"
date: 2024-01-15
categories: didattica   # oppure: poesia | riflessioni
comments: true

# Per DIDATTICA:
tipo: scheda            # scheda | libro | approfondimento | vocabolo
livello: "Biennio"      # opzionale
capitolo: 1             # solo per tipo: libro

# Per POESIA:
raccolta: "Nome raccolta"
versi: |                # anteprima in corsivo sulla card
  primi versi della poesia
  seconda riga

# Per POESIA tipo evento:
tipo: evento
data_evento: 2024-06-15
luogo: "Milano, Teatro XY"
link: "https://..."

# Per RIFLESSIONI:
sottotipo: scuola       # scuola | libro | film | musica | altro
opera: "Titolo opera"   # opzionale
---

Il tuo testo in **Markdown** qui.
```

---

## 🎨 Struttura del progetto

```
├── _config.yml          # Configurazione Jekyll
├── index.html           # Homepage
├── didattica/
│   └── index.html       # Pagina didattica (tab: schede, libro, approfondimenti, vocabolario)
├── poesia/
│   └── index.html       # Pagina poesia + sidebar eventi
├── divulgazione/
│   └── index.html       # Pagina divulgazione (link a xarenios-science.art)
├── riflessioni/
│   └── index.html       # Pagina riflessioni con filtri
├── _posts/              # Tutti gli articoli (.md)
├── _layouts/
│   ├── default.html     # Layout base con navbar + footer
│   └── post.html        # Layout singolo articolo
├── _includes/
│   ├── navbar.html      # Barra navigazione
│   ├── footer.html      # Footer
│   ├── comments.html    # Giscus (commenti)
│   └── editor.html      # Editor articoli modale
├── assets/
│   ├── css/main.css     # Tutto il CSS
│   └── js/main.js       # JavaScript
└── .github/workflows/
    └── deploy.yml       # Auto-deploy su GitHub Pages
```

---

## 🔧 Sviluppo locale

```bash
# Installa dipendenze
gem install bundler
bundle install

# Avvia server locale
bundle exec jekyll serve

# Apri http://localhost:4000
```

---

## 🌐 Link esterno divulgazione

Il sito di divulgazione è configurato in `_config.yml`:
```yaml
divulgazione_url: "https://xarenios-science.art/"
```
