INSERT INTO categories (name)
VALUES
('Clothing & Shoes'),
('Accessories'),
('Skincare'),
('Beauty'),
('Wellness'),
('Electronics'),
('Home Decor'),
('Kitchen'),
('Books');

INSERT INTO items (name, price, url, category_id)
VALUES

-- Seed Clothing & Shoes (category #1)
('Birdies mules', 98, 'https://birdies.com/products/womens-slides-swan-red-suede-beaded-cuff?variant=39707281457232', 1),

-- Seed Accessories (category #2)
('Umbrella', 110, 'https://www.longchamp.com/ca/en/products/retractable-umbrella-L1593PES300.html', 2),

-- Seed Skincare (category #3)
('Vitamic C serum', 69, 'https://www.drmtlgy.com/products/advanced-c-e-ferulic', 3),
('Body lotion', 27, 'https://www.drmtlgy.com/products/exfoliating-body-lotion', 3),


-- Seed Beauty (category #4)
('Hot Rollers', 170, 'https://www.sephora.com/ca/en/product/volumizing-hot-rollers-luxe-P415212?country_switch=ca&lang=en&skuId=1873579&om_mmc=ppc-GG_15994479088_135623273994_pla-1599491157264_1873579_576701186800_9000631_c&gclid=Cj0KCQjwy5maBhDdARIsAMxrkw38_6Fs2XLTOeeKPMVypFWLcOrZwgwgdsnUbY_fXdL413Sn1hK8ZOwaAhrhEALw_wcB&gclsrc=aw.ds', 4),
('NuFace face tool ', 250, 'https://www.nordstrom.ca/s/nuface-mini-facial-toning-device/5754869?origin=category-personalizedsort&breadcrumb=Home%2FBrands%2FNuFACE%C2%AE&color=100', 4),


-- Seed Electronics (category #6)
('Air Fryer', 125, 'https://cosori.com/products/pro-air-fryer-5-8-quart', 6),
('Coffee grinder', 240, 'https://www.amazon.ca/Breville-BCG600SIL-Control-Coffee-Grinder/dp/B00RLXPHJ8/ref=sr_1_4?crid=KON1IIBOOGIY&keywords=breville+coffee+grinder&qid=1665626070&qu=eyJxc2MiOiIzLjAxIiwicXNhIjoiMi43MCIsInFzcCI6IjIuNDIifQ%3D%3D&s=kitchen&sprefix=%2Ckitchen%2C75&sr=1-4', 6),

-- Seed Kitchen (category #8)
('Le Creuset French oven 8.1 L in Flame', 680, 'https://www.lecreuset.ca/en_CA/round-french-oven/CA-21177.html', 8);
