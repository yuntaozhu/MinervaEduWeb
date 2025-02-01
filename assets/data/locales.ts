import type { LocaleObject } from '@nuxtjs/i18n';

export const localesConst = [

	{ files: [ 'en-US.json' ], code: 'en', iso: 'en-US', name: 'English' },
	{ files: [ 'zh-CN.json' ], code: 'cn', iso: 'zh-CN', name: '简体中文' },

] as const;

export type LocaleCodes = typeof localesConst[number]['code'];

export const locales = localesConst as unknown as LocaleObject[];
