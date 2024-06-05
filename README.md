# Projektarbeit Web-Engineering – Marco Hofer

## Webseite
[Web-Engineering_teko](https://marxosan.github.io/Web-Engineering_teko/)

## Validierungsanforderung

### HTML und CSS Validierung
- **HTML Validator:** [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmarxosan.github.io%2FWeb-Engineering_teko%2F)
- **CSS Validator:** [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmarxosan.github.io%2FWeb-Engineering_teko%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de)

### Lighthouse Analyse
- **PageSpeed Insights:** [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-marxosan-github-io-Web-Engineering_teko/h5lw6w7wdc?form_factor=mobile)

## Static Site Generator (SSG)

### Erläuterung SSG
Ein Static Site Generator (SSG) wie Eleventy oder Hugo bietet zahlreiche Vorteile für Webprojekte. Durch die Generierung statischer HTML-Dateien, die direkt vom Server ausgeliefert werden, ermöglichen SSGs extrem schnelle Ladezeiten und reduzieren gleichzeitig die Angriffsfläche für Sicherheitslücken, da keine serverseitige Logik oder Datenbank involviert ist. Das macht die Seiten auch einfacher zu pflegen im Vergleich zu komplexen Content-Management-Systemen, was auf lange Sicht Zeit und Geld spart. Die direkte Integration mit Versionskontrollsystemen wie Git erleichtert die Nachverfolgbarkeit von Änderungen und die Zusammenarbeit im Team. Statische Seiten sind SEO-freundlich, da sie konsistente HTML-Strukturen bieten, die von Suchmaschinen leicht gecrawlt und indiziert werden können, was zu besseren Rankings führt. Das Deployment gestaltet sich einfach und schnell, da statische Dateien auf nahezu jedem Webserver gehostet werden können. SSGs profitieren auch von einer modernen und aktiven Community mit zahlreichen Plugins, Themes und Integrationen, was die Entwicklung beschleunigt. Diese Vorteile machen SSGs zu einer exzellenten Wahl für viele Webprojekte.

### Begründung SSG
Es wurde Eleventy gewählt, da dies der Vorschlag des Dozenten Fabian Hirter war und Eleventy die geforderte Markdown-Sprache unterstützt. Die Nutzung eines Static Site Generators bietet eine Vielzahl von Vorteilen, die von verbesserter Performance und Sicherheit bis hin zu geringeren Kosten und höherer Flexibilität reichen. Durch die Erzeugung statischer Seiten können Entwickler sicherstellen, dass ihre Websites schnell, sicher und einfach zu warten sind, während sie gleichzeitig eine hervorragende Benutzererfahrung bieten können.

## Deployment und Hosting

### Erreichbarkeit im Internet
Das Projekt wird über GitHub Pages deployt, was bedeutet, dass die Website direkt aus dem GitHub-Repository im Internet veröffentlicht wird: <br> [Web-Engineering_teko](https://marxosan.github.io/Web-Engineering_teko/)

### Begründung verwendetes Hosting und Deployment
**Hosting:** GitHub Pages

Ich habe GitHub Pages als Hosting gewählt, da es ein kostenloser Hosting-Dienst ist, der für öffentliche Repositories genutzt werden kann. Es bietet eine einfache Integration, da das Projekt bereits auf GitHub gehostet wird, ist GitHub Pages eine einfache Erweiterung. Das Einrichten von GitHub Pages erfordert nur wenige Klicks, es sind keine komplexen Konfigurationsschritte oder zusätzlichen Dienste erforderlich, und es erfordert auch keine zusätzlichen Schritte, um das Projekt auf eine andere Plattform zu migrieren.

Weitere Vorteile sind automatische Deployments sowie Schnelligkeit und Zuverlässigkeit. Durch das weltweite Content Delivery Network (CDN) von GitHub stellt GitHub Pages sicher, dass die Website von überall auf der Welt schnell geladen wird. Durch die enge Integration mit Git kann jede veröffentlichte Version leicht zurückgesetzt oder geändert werden. Dies ist besonders nützlich, wenn Fehler in einer neuen Version auftreten. GitHub Pages bietet natürlich HTTPS-Unterstützung für alle bereitgestellten Seiten, was die Sicherheit der Website verbessert. GitHub Pages kann mit Static Site Generators verwendet werden, was zusätzliche Flexibilität und Anpassungsmöglichkeiten bietet.

Diese Gründe machen GitHub Pages zu einer ausgezeichneten Wahl für das Hosting und Deployment, insbesondere wenn das Projekt bereits auf GitHub gehostet wird.
