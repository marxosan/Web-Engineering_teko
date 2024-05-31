eleventy
hugo

fabians vorschlag, markdown sprache

s92 im buch

Deployment (im Internet erreichbar) und verwendetes Hosting mit Begründung
Deployment (im Internet erreichbar)
Das Projekt wird über GitHub Pages deployt, was bedeutet, dass die Website direkt aus dem GitHub-Repository im Internet veröffentlicht wird. Der genaue Prozess umfasst folgende Schritte:

Repository einrichten: Das Projekt wird in einem Git-Repository auf GitHub gespeichert.
GitHub Pages aktivieren: In den Repository-Einstellungen wird GitHub Pages aktiviert. Dies erfolgt durch Auswahl des Branches (main oder gh-pages) und des Verzeichnisses (Root oder /docs), aus dem die statischen Dateien bereitgestellt werden.
Automatisierte Builds: Wenn das Projekt einen Build-Prozess benötigt (z.B. für Frameworks wie React, Angular, Vue.js), wird ein Workflow mit GitHub Actions eingerichtet. Dieser Workflow baut das Projekt und veröffentlicht die gebauten Dateien automatisch auf GitHub Pages.
URL der Website: Die Website ist dann unter der URL https://username.github.io/repositoryname (bei einem Projekt-Repository) oder https://username.github.io (bei einem Benutzer-/Organisations-Repository) erreichbar.
Durch diese Schritte wird sichergestellt, dass jede Änderung im Repository automatisch zur Aktualisierung der veröffentlichten Website führt.

Verwendetes Hosting: GitHub Pages
Begründung für die Wahl von GitHub Pages:
Kostenlos: GitHub Pages ist ein kostenloser Hosting-Dienst, der für öffentliche und private Repositories genutzt werden kann. Dies macht es besonders attraktiv für Open-Source-Projekte und kleinere Projekte ohne Budget.
Einfache Integration: Da das Projekt bereits auf GitHub gehostet wird, ist GitHub Pages eine nahtlose Erweiterung. Es erfordert keine zusätzlichen Schritte, um das Projekt auf eine andere Plattform zu migrieren.
Automatische Deployments: Mit GitHub Actions können automatische Deployments eingerichtet werden. Dies bedeutet, dass jede Änderung im main-Branch automatisch gebaut und veröffentlicht wird, was den manuellen Aufwand reduziert und Fehler minimiert.
Schnelligkeit und Zuverlässigkeit: GitHub Pages bietet schnelle und zuverlässige Bereitstellung durch das weltweite Content Delivery Network (CDN) von GitHub. Dies stellt sicher, dass die Website von überall auf der Welt schnell geladen wird.
Einfaches Setup: Das Einrichten von GitHub Pages ist einfach und erfordert nur wenige Klicks. Es sind keine komplexen Konfigurationsschritte oder zusätzlichen Dienste erforderlich.
Versionierung und Rollbacks: Durch die enge Integration mit Git kann jede veröffentlichte Version leicht zurückgesetzt oder geändert werden. Dies ist besonders nützlich, wenn Fehler in einer neuen Version auftreten.
Unterstützung für statische Seiten: GitHub Pages ist speziell für statische Websites konzipiert, was perfekt für viele Webprojekte ist, die keine serverseitige Logik erfordern.
Sicherheit: GitHub Pages bietet HTTPS-Unterstützung für alle bereitgestellten Seiten, was die Sicherheit der Website verbessert und Vertrauen bei den Benutzern schafft.
Community und Support: Als weit verbreiteter Dienst hat GitHub Pages eine große Community und umfassende Dokumentation, die bei Problemen oder Fragen hilfreich sein kann.
Anpassungsfähigkeit: GitHub Pages kann mit Jekyll und anderen Static Site Generators verwendet werden, was zusätzliche Flexibilität und Anpassungsmöglichkeiten bietet.
Diese Gründe machen GitHub Pages zu einer ausgezeichneten Wahl für das Hosting und Deployment von statischen Websites, insbesondere wenn das Projekt bereits auf GitHub gehostet wird.
