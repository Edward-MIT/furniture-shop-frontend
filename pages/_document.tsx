import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="title" content="FurniShop"/>
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="favicon.ico" />
           {/* SEO */}
        <meta name= "keyword" content={"funriture, furniShop.uz, usmmanov.com, nestjs fullstack"} />
        <meta  name="description" content={
          "Buy and sell Properties anywhere anytime in South Korea. | "+
          "Покупайте и продавайте недвижимость в любой точке Южной Кореи в любое время." +
          "언제 어디서나 한국에서 부동산을 사고 팔 수 있습니다."
          }/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
