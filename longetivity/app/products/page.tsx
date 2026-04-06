"use client";

import { ProductsFooter } from "../components/layout/products-footer";
import { SiteHeader } from "../components/layout/site-header";
import { DailySystemTab } from "../components/products/daily-system-tab";
import { PRODUCT_DETAILS } from "../components/products/product-copy";
import { ProductDetailBlock } from "../components/products/product-detail-block";
import { ProductsHero } from "../components/products/products-hero";
import { SystemBundleSection } from "../components/products/system-bundle-section";
import { useProductTab } from "../components/products/use-product-tab";

export default function ProductsPage() {
  const { activeTab, selectTab } = useProductTab();

  return (
    <>
      <SiteHeader variant="products" />

      <ProductsHero activeTab={activeTab} onSelectTab={selectTab} />

      {PRODUCT_DETAILS.map((data) => (
        <ProductDetailBlock
          key={data.slug}
          data={data}
          isActive={activeTab === data.slug}
        />
      ))}

      <DailySystemTab isActive={activeTab === "system"} />

      <SystemBundleSection />

      <ProductsFooter />
    </>
  );
}
