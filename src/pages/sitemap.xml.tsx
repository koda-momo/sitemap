import { GetServerSideProps } from "next";
import { getServerSideSitemap } from "next-sitemap";

/**
 * サイトマップ
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const array = ["hogehoge1", "hogehoge2", "hogehoge3"];

  const lastmod = "2022-10-10";

  const fields = new Array<{
    loc: string;
    changefreq: any;
    lastmod: string;
  }>({
    loc: "https://hogehoge",
    changefreq: "weekly",
    lastmod: lastmod,
  });

  array.forEach((item) => {
    fields.push({
      loc: `https://hogehoge/${item}/`,
      changefreq: "weekly",
      lastmod: lastmod,
    });
  });

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
