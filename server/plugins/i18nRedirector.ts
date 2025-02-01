import { useRuntimeConfig } from '#imports';
import { withTrailingSlash } from 'ufo';
import type { LocaleObject } from '@nuxtjs/i18n';

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    if (event.path.includes("_nuxt") || event.path.match(/\d{3}\.html/) || event.path.match(/^\/ns/)) {
      return;
    }

    const runtimeConfig = useRuntimeConfig();
    const locales = runtimeConfig.public.locales as LocaleObject[];
    if (!event.path.match(new RegExp(`^/(${locales.map((l) => l.code).join('|')})/`))) {
      const links = locales.map((l) => {
        const url = withTrailingSlash(`/${l.code}${event.path.replace(/\.html$/g, '/')}`);
        return `<a href="${url}">${l.name}</a>`;
      });

      html.htmlAttrs = [];

      const remainingList: string[] = [];
      html.head.forEach((v: string) => {
        remainingList.push(...(v.match(/<!--(.|\n)*(?<=-->)/gm) ?? []));
        remainingList.push(...(v.match(/<link\s+rel="(og|alternate|canonical|me)[^>]+>/gm) ?? []));
        remainingList.push(...(v.match(/<meta[^>]+>/gm) ?? []));
        remainingList.push(...(v.match(/<script type="application\/ld\+json">.*(?<=<\/script>)/gm) ?? []));
      });
      remainingList.push('');

      html.head = remainingList.map((v) => v + '\n');
      //@ts-ignore
      html.head.push('<script type="text/javascript">const s = ' + JSON.stringify(locales.map((l) => l.code)) + '; const d = new URLSearchParams(document.cookie); if (d.get(\'i18n_redirected\')) { location.replace(\'/\' + d.get(\'i18n_redirected\') + location.pathname + location.search); } else if (s.includes(navigator.language.split("-")[0])) { location.replace(\'/\' + navigator.language.split("-")[0] + location.pathname + location.search); } else { location.replace(\'/cn\' + location.pathname + location.search); }</script>\n');
      html.body = [
        '\n<noscript>Please enable Javascript to see this page properly.</noscript>\n',
        `<noscript>${links.join(', ')}</noscript>\n`,
      ];
      html.bodyAppend = [];
      html.bodyPrepend = [];
    }
	});
});
