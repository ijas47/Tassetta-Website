#!/usr/bin/env python3
"""Extract per-route HTML from the recovered Claude Design template.

- Strips <sc-if> wrappers (Claude Design conditional render markers).
- In r_study, drops the inline study_none/study_has upload sub-blocks;
  the React component <NexusStudyUploader /> renders the upload UI instead.
- Converts href="#/route" -> href="/route".
- Converts inline `style-hover="prop: val;"` (Claude Design hover sugar) into
  a generated class whose :hover rule is emitted to `hover.css`.
- Emits `sections/<route>.html` for each route + `_header.html` + `_footer.html`.
"""
import re, os, html

SRC = os.path.join(os.path.dirname(__file__), 'template.html')
OUT = os.path.join(os.path.dirname(__file__), 'sections')
os.makedirs(OUT, exist_ok=True)

ROUTES = {
    'r_home':         '/',
    'r_study':        '/nexus-study',
    'r_how':          '/how-it-works',
    'r_who':          '/who-its-for',
    'r_who_shopify':  '/who-its-for/shopify',
    'r_who_multi':    '/who-its-for/multi-channel',
    'r_handle':       '/what-we-handle',
    'r_nexus':        '/what-we-handle/nexus',
    'r_reg':          '/what-we-handle/registrations',
    'r_filing':       '/what-we-handle/filing',
    'r_notices':      '/what-we-handle/notices',
    'r_exempt':       '/what-we-handle/exemptions',
    'r_pricing':      '/pricing',
    'r_cmp_software': '/compare/software',
    'r_cmp_cpa':      '/compare/cpa',
    'r_about':        '/about',
    'r_security':     '/security',
    'r_resources':    '/resources',
    'r_contact':      '/contact',
    'r_fallback':     '/_fallback',
}

with open(SRC) as f:
    src = f.read()

def extract_block(varname):
    open_re = re.compile(r'<sc-if value="\{\{\s*' + re.escape(varname) + r'\s*\}\}"[^>]*>')
    m = open_re.search(src)
    if not m:
        return None
    pos = m.end()
    depth = 1
    open_tag = re.compile(r'<sc-if\b')
    close_tag = re.compile(r'</sc-if>')
    while depth > 0:
        no = open_tag.search(src, pos)
        nc = close_tag.search(src, pos)
        if nc is None:
            return None
        if no is not None and no.start() < nc.start():
            depth += 1
            pos = no.end()
        else:
            depth -= 1
            pos = nc.end()
    inner = src[m.end():nc.start()].strip()
    dm = re.match(r'^<div>\s*', inner)
    if dm:
        inner = inner[dm.end():]
        if inner.endswith('</div>'):
            inner = inner[: -len('</div>')]
    return inner.strip()

hover_rules = []
counter = [0]

def clean(s, tag):
    s = re.sub(r'href="#/', 'href="/', s)
    s = re.sub(r"href='#/", "href='/", s)
    s = s.replace('href="#"', 'href="/"')
    if tag == 'r_study':
        # Replace both study_none and study_has blocks with a single marker.
        s = re.sub(
            r'<sc-if value="\{\{\s*study_none\s*\}\}"[^>]*>.*?</sc-if>',
            '<!--NEXUS_UPLOADER-->',
            s, count=1, flags=re.DOTALL,
        )
        s = re.sub(
            r'<sc-if value="\{\{\s*study_has\s*\}\}"[^>]*>.*?</sc-if>',
            '',
            s, count=1, flags=re.DOTALL,
        )
    def repl(m):
        rule = html.unescape(m.group(1)).strip().rstrip(';') + ';'
        counter[0] += 1
        cls = f'th-{counter[0]}'
        hover_rules.append(f'.{cls}:hover {{ {rule} }}')
        return f' data-hc="{cls}"'
    s = re.sub(r'\sstyle-hover="([^"]*)"', repl, s)
    def merge(m):
        tag_html = m.group(0)
        hc = re.search(r'data-hc="([^"]+)"', tag_html)
        if not hc:
            return tag_html
        cls = hc.group(1)
        tag_html = re.sub(r'\sdata-hc="[^"]+"', '', tag_html)
        if re.search(r'\sclass="', tag_html):
            tag_html = re.sub(r'\sclass="([^"]*)"',
                              lambda mm: f' class="{mm.group(1)} {cls}"', tag_html)
        else:
            tag_html = re.sub(r'^<(\w+)',
                              lambda mm: f'<{mm.group(1)} class="{cls}"', tag_html)
        return tag_html
    s = re.sub(r'<[^>]+data-hc="[^"]+"[^>]*>', merge, s)
    return s

for var, route in ROUTES.items():
    b = extract_block(var)
    if b is None:
        print('!! missing', var); continue
    cleaned = clean(b, var)
    name = route.strip('/').replace('/', '__') or 'index'
    with open(os.path.join(OUT, name + '.html'), 'w') as f:
        f.write(cleaned)

# Header and footer live outside sc-if
hdr = re.search(r'(<header[\s\S]*?</header>)', src)
ftr = re.search(r'(<footer[\s\S]*?</footer>)', src)
if hdr:
    with open(os.path.join(OUT, '_header.html'), 'w') as f:
        f.write(clean(hdr.group(1), 'hdr'))
if ftr:
    with open(os.path.join(OUT, '_footer.html'), 'w') as f:
        f.write(clean(ftr.group(1), 'ftr'))

with open(os.path.join(OUT, 'hover.css'), 'w') as f:
    f.write('\n'.join(hover_rules))

print(f'wrote {len(ROUTES)} routes + header/footer, {len(hover_rules)} hover rules')
