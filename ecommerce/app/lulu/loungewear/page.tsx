import Image from "next/image";
import { LuluVideoPlayer } from "@/src/lulu/components/LuluVideoPlayer";
import { LuluProductCarousel } from "@/src/lulu/components/LuluProductCarousel";

const versatilityProducts = [
  {
    title: "Scuba Full-Zip Hoodie",
    price: "$138.00",
    href: "https://shop.lululemon.com/p/womens-outerwear/Scuba-Hoodie-IV/_/prod8351133?color=42797",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW3JGYS_042797_1?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
  {
    title: "Scuba Mid-Rise Oversized Jogger *Regular",
    price: "$118.00",
    href: "https://shop.lululemon.com/p/womens-joggers/Scuba-MR-Oversized-Jogger-Regular/_/prod11670121?color=30437",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW5HJHS_030437_1?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
  {
    title: "Scuba Oversized Full-Zip Hoodie *Waffle",
    price: "$148.00",
    href: "https://shop.lululemon.com/p/womens-outerwear/Scuba-Oversized-Full-Zip-Hoodie-Waffle/_/prod20004531?color=36168",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW3JCVS_036168_1?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
  {
    title: "Scuba Mid-Rise Wide-Leg Pant *Waffle",
    price: "$148.00",
    href: "https://shop.lululemon.com/p/womens-sweatpants/Scuba-Mid-Rise-Wide-Leg-Pant-Waffle/_/prod20004467?color=32925",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW5HFQS_032925_1?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
  {
    title: "Scuba Full-Zip Hoodie",
    price: "$138.00",
    href: "https://shop.lululemon.com/p/womens-outerwear/Scuba-Hoodie-IV/_/prod8351133?color=42797",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW3JGYS_042797_2?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
  {
    title: "Scuba Mid-Rise Oversized Jogger *Regular",
    price: "$118.00",
    href: "https://shop.lululemon.com/p/womens-joggers/Scuba-MR-Oversized-Jogger-Regular/_/prod11670121?color=30437",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW5HJHS_030437_2?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
];

const steadyStateProducts = [
  {
    title: "Women's Steady State SuperLoft Hoodie *Wider Cuff",
    price: "$108.00",
    href: "https://shop.lululemon.com/p/womens-steady-state-superloft-hoodie-wide-cuff/mxzwnxmd1f?color=75700",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW3KR5S_075700_1?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
  {
    title: "Women's Steady State SuperLoft Pant *Regular",
    price: "$98.00",
    href: "https://shop.lululemon.com/p/womens-steady-state-superloft-pant-regular/buhfealuxw?color=75700",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW5IUQS_075700_1?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
  {
    title: "Women's Steady State SuperLoft Crew *Wider Cuff",
    price: "$98.00",
    href: "https://shop.lululemon.com/p/womens-steady-state-superloft-crew-wider-cuff/vlxelc6oi5?color=0284",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW3KRCS_0284_1?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
  {
    title: "Women's Steady State SuperLoft Jogger",
    price: "$98.00",
    href: "https://shop.lululemon.com/p/womens-steady-state-superloft-jogger/dk9wcfq3p3?color=75700",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW5IUMS_075700_1?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
];

const lineup = [
  {
    label: "Scuba™",
    href: "https://shop.lululemon.com/c/women-scuba-clothes/n14uwkz9uld?icid=cdp-story:lounge-shop;4;ctacontentcard;cdp:womens-scuba-clothes;campaigns;loungeshop",
    image:
      "https://images.lululemon.com/is/image/lululemon/NA_Nov25_Wk2_W_Lounge_Storypage_CategoryTile_D_Scuba_360x432?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
  {
    label: "BeCalm™",
    href: "https://shop.lululemon.com/c/women-becalm-clothes/n14uwkzc827?icid=cdp-story:lounge-shop;4;ctacontentcard;cdp:womens-becalm-clothes;campaigns;loungeshop",
    image:
      "https://images.lululemon.com/is/image/lululemon/NA_Nov25_Wk2_W_Lounge_Storypage_CategoryTile_D_BeCalm_360x432?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
  {
    label: "Steady State",
    href: "https://shop.lululemon.com/c/women-steady-state-clothes/n14uwkzk0lg?icid=cdp-story:lounge-shop;4;ctacontentcard;cdp:womens-steady-state-clothes;campaigns;loungeshop",
    image:
      "https://images.lululemon.com/is/image/lululemon/NA_Feb26_Wk3_W_OTM_3UP_Feature_D_SuperLoft?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
  {
    label: "Softstreme™",
    href: "https://shop.lululemon.com/c/women-softstreme-clothes/n13dciz4uwk?icid=cdp-story:lounge-shop;4;ctacontentcard;cdp:womens-softstreme-clothes;campaigns;loungeshop",
    image:
      "https://images.lululemon.com/is/image/lululemon/NA_Nov25_Wk2_W_Lounge_Storypage_CategoryTile_D_Softstreme_360x432?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  },
];

export default function LuluLoungewearPage() {
  return (
    <>
      <section className="px-6 pb-8 pt-16 md:px-10 md:pt-16">
        <div className="mx-auto max-w-[1560px]">
          <h1 className="font-lulu-display text-lulu-display-xl text-lulu-ink">
            lululemon loungewear
          </h1>
        </div>
      </section>

      <section className="relative flex h-[420px] items-center justify-center overflow-hidden md:h-[600px]">
        <LuluVideoPlayer
          fill
          videoUrl="https://s7mbrstream.scene7.com/hls-vod/lululemon/_media_/3c9/3c92c72b-1645-4294-a2c3-646de58d1b50.mp4.m3u8"
        />
        <h2 className="relative px-6 text-center font-lulu-display text-lulu-display-xl text-lulu-bone">
          Expand your comfort zone
        </h2>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <h2 className="font-lulu-display text-lulu-display-xl text-lulu-ink">
            Cozy up to loungewear that looks as good as it feels—with quality
            fabrics and thoughtful details to carry you through your day.
          </h2>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="https://images.lululemon.com/is/image/lululemon/NA_Nov25_Wk2_W_Lounge_Storypage_2upFeature_D_BigCozy_1760x1728?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="Cozy loungewear"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="https://images.lululemon.com/is/image/lululemon/NA_Nov25_Wk2_W_Lounge_Storypage_2upFeature_D_Softstreme_1760x1728?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="Softstreme loungewear"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1560px]">
          <h2 className="font-lulu-display text-lulu-display-lg text-lulu-ink">
            Compare our loungewear lineup.
          </h2>
          <p className="mt-4 max-w-2xl font-lulu-display text-lulu-body-lg text-lulu-ink">
            There&rsquo;s a fabric and feel for all moods—from modal French
            terry and waffle knits, to peach-fuzz feels and heavy fleece.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {lineup.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex flex-col items-center gap-4"
              >
                <div className="relative aspect-[5/6] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-lulu-display text-lulu-body-md text-lulu-ink">
                  {item.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex h-[420px] items-end justify-center overflow-hidden pb-16 md:h-[600px] md:pb-32">
        <Image
          src="https://images.lululemon.com/is/image/lululemon/NA_Nov25_Wk2_W_Lounge_Storypage_1upFeature_D_Scuba_3748x1800?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Keep cool with Scuba"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-lulu-ink/55 to-transparent" />
        <h2 className="relative px-6 text-center font-lulu-display text-lulu-display-xl text-lulu-bone">
          Keep cool with Scuba
        </h2>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <h2 className="font-lulu-display text-lulu-display-xl text-lulu-ink">
            Keep your cool with breathable cotton-blend fleece and waffle
            knits that layer well for adaptable warmth.
          </h2>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <div className="relative aspect-[5/3] w-full overflow-hidden">
              <Image
                src="https://images.lululemon.com/is/image/lululemon/NA_Nov25_Wk2_W_Lounge_Storypage_FeatureScroll_D_Scuba_324x389_01?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
                alt="Comfort takes shape"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <h3 className="font-lulu-display text-lulu-display-md text-lulu-ink">
                Comfort takes shape.
              </h3>
              <p className="font-lulu-display text-lulu-body-md text-lulu-ink">
                Our iconic curved seams contour the body, while fleece with a
                soft interior provides mid-weight warmth.
              </p>
            </div>
          </div>
          <LuluVideoPlayer
            videoUrl="https://s7mbrstream.scene7.com/hls-vod/lululemon/_media_/073/07398023-6ec3-463f-81c5-289f69290278.mp4.m3u8"
            posterUrl="https://images.lululemon.com/is/image/lululemon/Nov25_Wk2_W_Loungewear_StoryPage_D_Scuba_SilhouetteEdit_PosterFrame_5x6_1440x1800"
          />
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1560px]">
          <h3 className="mb-8 font-lulu-display text-lulu-display-md text-lulu-ink">
            Fit for all-day versatility.
          </h3>
          <LuluProductCarousel
            products={versatilityProducts}
            ctaLabel="Shop Scuba"
            ctaHref="https://shop.lululemon.com/c/women-scuba-clothes/n14uwkz9uld?icid=cdp-story:lounge-shop;7;featuregridcta;cdp:womens-scuba-clothes;campaigns;loungeshop"
          />
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1560px]">
          <h3 className="mb-8 font-lulu-display text-lulu-display-md text-lulu-ink">
            Luxury, made standard.
          </h3>
          <LuluProductCarousel
            products={steadyStateProducts}
            ctaLabel="Shop Steady State"
            ctaHref="https://shop.lululemon.com/c/women-steady-state-clothes/n14uwkzk0lg?icid=cdp-story:lounge-shop;4;ctacontentcard;cdp:womens-steady-state-clothes;campaigns;loungeshop"
          />
        </div>
      </section>
    </>
  );
}
