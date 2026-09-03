# DRKI

Nuxt-Frontend für das Deutsch-Russische Kulturinstitut e.V. (drki.de) — Inhalte werden zur Build-Zeit aus dem bestehenden WordPress per REST-API gezogen (Beiträge, Veranstaltungen, Seiteninhalte) und als statische Seiten ausgeliefert.

## Entwicklung

```bash
npm install
npm run dev
```

## Produktions-Build (statisch, für Apache o.ä.)

```bash
npm run generate
```

Ergebnis liegt in `.output/public/` — dieser Ordner kann 1:1 auf einen normalen Webspace (Apache, nginx, …) hochgeladen werden, es ist kein Node-Server nötig. Da die Inhalte zur Build-Zeit aus WordPress gezogen werden, muss bei neuen Beiträgen/Veranstaltungen `npm run generate` erneut laufen und der Ordner neu hochgeladen werden.
