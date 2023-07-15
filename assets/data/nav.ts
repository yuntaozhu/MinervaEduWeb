import { FunctionalComponent } from "nuxt/dist/app/compat/capi";
import GHIcon from "bi/github.svg";

/** ナビゲーションバー アイテム */
type NavItem = {
    /** 翻訳キー */
    i18n: string;
    /** リンク先 */
    to: string;
} | {
    /** アイコン（svgをインポートして貼り付け） */
    icon: FunctionalComponent | string;
    /** リンク先 */
    to: string;
};

/** ナビゲーションバー コンテンツ */
export default <{
    /** ナビゲーションの真ん中のリンク */
    center: NavItem[];
    /** 
     * ナビゲーションの右端のリンク
     * （SNSとかGithubのリンクとか）
     */
    right: NavItem[];
}> {
    center: [
        {
            i18n: '_nav.servers',
            to: '/servers/',
        },
        {
            i18n: '_nav.docs',
            to: '/docs/',
        },
        {
            i18n: '_nav.blog',
            to: '/blog/',
        },
        {
            i18n: '_nav.other',
            to: '/learn-more/',
        }
    ],
    right: [
        {
            icon: GHIcon,
            to: 'https://github.com/misskey-dev/misskey-hub',
        },
    ]
};