import { useEffect } from 'react';
import { SITE_URL, buildOrganizationSchema, buildWebsiteSchema, getMeta } from '../constants/seo';

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

export function Seo({ path, schema = [] }: { path: string; schema?: object[] }) {
  useEffect(() => {
    const meta = getMeta(path);
    const canonical = `${SITE_URL}${meta.path === '/' ? '' : meta.path}`;
    document.title = meta.title;
    setMeta('description', meta.description);
    setMeta('robots', 'index,follow,max-image-preview:large');
    setMeta('og:type', 'website', true);
    setMeta('og:title', meta.title, true);
    setMeta('og:description', meta.description, true);
    setMeta('og:url', canonical, true);
    setMeta('og:site_name', 'HiTaxSaver', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setCanonical(canonical);

    document.querySelectorAll('script[data-managed-schema="true"]').forEach((node) => node.remove());
    [buildOrganizationSchema(), buildWebsiteSchema(), ...schema].forEach((item) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.managedSchema = 'true';
      script.text = JSON.stringify(item);
      document.head.appendChild(script);
    });
  }, [path, schema]);

  return null;
}
