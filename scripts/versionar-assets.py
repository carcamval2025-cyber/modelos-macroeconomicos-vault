#!/usr/bin/env python3
"""Actualiza las versiones de assets compartidos antes de publicar en Pages."""
import argparse
import hashlib
import re
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--check", action="store_true", help="Comprueba sin editar archivos")
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
docs = root / "docs"
versions = {
    path.resolve(): hashlib.sha256(path.read_bytes()).hexdigest()[:12]
    for path in (docs / "assets" / name for name in ("guia.css", "guia.js", "favicon.svg"))
}
attributes = re.compile(r"(?P<start>\b(?:href|src)=[\"'])(?P<url>[^\"']+)(?P<end>[\"'])")
changed = []
for page in sorted(docs.rglob("*.html")):
    def version(match):
        url = urlsplit(match["url"])
        if url.scheme or url.netloc or not url.path:
            return match[0]
        asset = (page.parent / url.path).resolve()
        if asset not in versions:
            return match[0]
        query = [(k, v) for k, v in parse_qsl(url.query) if k != "v"]
        query.append(("v", versions[asset]))
        updated = urlunsplit((url.scheme, url.netloc, url.path, urlencode(query), url.fragment))
        return match["start"] + updated + match["end"]
    original = page.read_text()
    updated = attributes.sub(version, original)
    if updated != original:
        changed.append(page.relative_to(root))
        if not args.check:
            page.write_text(updated)
if args.check:
    print("Versiones actualizadas" if not changed else "Versiones pendientes: " + ", ".join(map(str, changed)))
    raise SystemExit(bool(changed))
print(f"Versiones actualizadas en {len(changed)} páginas")
