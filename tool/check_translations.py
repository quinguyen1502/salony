#!/usr/bin/env python3
"""Fail when a handbook page is missing its translation sibling.

`mkdocs build --strict` does not catch this: `fallback_to_default: true`
silently serves the Vietnamese page on the English site instead. DES-0003
says a page missing its sibling must not publish, so this is the gate.
"""
import sys
from pathlib import Path

DOCS = Path(__file__).resolve().parent.parent / "docs"


def main() -> int:
    stems = {}
    for path in DOCS.rglob("*.md"):
        stem, _, locale = path.name.rpartition(".md")[0].rpartition(".")
        if not locale:
            print(f"error: {path.relative_to(DOCS)} has no .vi/.en suffix")
            return 1
        stems.setdefault(path.parent / stem, set()).add(locale)

    orphans = sorted(
        (base, locales) for base, locales in stems.items() if locales != {"vi", "en"}
    )
    for base, locales in orphans:
        missing = ", ".join(sorted({"vi", "en"} - locales))
        print(f"error: {base.relative_to(DOCS)} is missing: {missing}")

    if orphans:
        print(f"\n{len(orphans)} page(s) without a complete VI/EN pair.")
        return 1

    print(f"{len(stems)} page pairs, all complete.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
