/// <reference types="cypress" />

describe('URL redirect - Step 4', () => {

  it('URL redirect for [81609]', () => {
    cy.visit('/' + 'issoria-blanket-poncho-j40617x-nap-3x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [81611]', () => {
    cy.visit('/' + 'skye-blouse-c10317x-gon-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81612]', () => {
    cy.visit('/' + 'journey-v-neck-c14117bx-mti-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81613]', () => {
    cy.visit('/' + 'patule-button-down-shirt-c11617x-mtb-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81614]', () => {
    cy.visit('/' + 'tumi-boxy-top-c11717x-bgrv-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81615]', () => {
    cy.visit('/' + 'leafy-tier-popover-tunic-c2107x-port-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81616]', () => {
    cy.visit('/' + 'luda-popover-tunic-c21917ax-mti-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81619]', () => {
    cy.visit('/' + 'dexter-deep-scoop-tee-c11617x-ppl-3x.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81620]', () => {
    cy.visit('/' + 'dexter-deep-scoop-tee-c11617x-bdm-3x.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81621]', () => {
    cy.visit('/' + 'angeline-pant-c60217x-sta-3x.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [81625]', () => {
    cy.visit('/' + 'faith-blouse-c85767x-port-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81626]', () => {
    cy.visit('/' + 'clarissa-dress-c85844x-dca-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81627]', () => {
    cy.visit('/' + 'rhinestone-bracelet-21724.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81628]', () => {
    cy.visit('/' + 'rhinestone-bracelet-21723.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81629]', () => {
    cy.visit('/' + 'rhinestone-bracelet-21722.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81630]', () => {
    cy.visit('/' + 'rhinestone-bracelet-21721.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81631]', () => {
    cy.visit('/' + 'rhinestone-bracelet-21720.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81632]', () => {
    cy.visit('/' + 'mona-poncho-tee-11336.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81634]', () => {
    cy.visit('/' + 'monique-maxi-dress-6677.html')
    cy.url().should('include', '/' + 'clothing/dresses/maxi.html')
  })

  it('URL redirect for [81636]', () => {
    cy.visit('/' + 'cailin-bed-jacket-6320.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/clothing-jackets-kimonos-jackets.html')
  })

  it('URL redirect for [81639]', () => {
    cy.visit('/' + 'chain-heart-tee-6615.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81640]', () => {
    cy.visit('/' + 'butterfly-tank-6609.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81641]', () => {
    cy.visit('/' + 'paisley-jeweled-tee-6603.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81642]', () => {
    cy.visit('/' + 'snap-front-jacket-6597.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/clothing-jackets-kimonos-jackets.html')
  })

  it('URL redirect for [81644]', () => {
    cy.visit('/' + 'pierced-heart-6585.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [81645]', () => {
    cy.visit('/' + 'into-the-woods-inverted-tuck-tee-6268.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81646]', () => {
    cy.visit('/' + 'birds-nest-asymmetrical-tee-6263.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81665]', () => {
    cy.visit('/' + 'mayvis-hoodie-5653.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/hoodies.html')
  })

  it('URL redirect for [81667]', () => {
    cy.visit('/' + 'terra-lotu-hoodie-7196.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/hoodies.html')
  })

  it('URL redirect for [81668]', () => {
    cy.visit('/' + 'terra-lotu-hoodie-7191.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/hoodies.html')
  })

  it('URL redirect for [81671]', () => {
    cy.visit('/' + 'wardrow-hoodie-6614.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81672]', () => {
    cy.visit('/' + 'roja-ravi-hoodie-5375.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81673]', () => {
    cy.visit('/' + 'bronson-wrap-5369.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81674]', () => {
    cy.visit('/' + 'tykeif-hoodie-4745.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81675]', () => {
    cy.visit('/' + 'pom-pom-wrap-6904.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81689]', () => {
    cy.visit('/' + 'drawstring-tunic-3934.html')
    cy.url().should('include', '/' + 'accessories/jewelry/rings.html')
  })

  it('URL redirect for [81692]', () => {
    cy.visit('/' + 'katrina-crop-tank-plus-size-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81693]', () => {
    cy.visit('/' + 'katrina-crop-tank-plus-size-8.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81694]', () => {
    cy.visit('/' + 'katrina-crop-tank-plus-size-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81695]', () => {
    cy.visit('/' + 'katrina-everyday-tee-plus-size-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81696]', () => {
    cy.visit('/' + 'katrina-everyday-tee-plus-size-8.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81697]', () => {
    cy.visit('/' + 'katrina-everyday-tee-plus-size-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81698]', () => {
    cy.visit('/' + 'velsia-short-sleeve-deep-scoop-tee-plus-size-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81699]', () => {
    cy.visit('/' + 'velsia-short-sleeve-deep-scoop-tee-plus-size-8.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81700]', () => {
    cy.visit('/' + 'velsia-short-sleeve-deep-scoop-tee-plus-size-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81701]', () => {
    cy.visit('/' + 'samira-drape-top-plus-size-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81702]', () => {
    cy.visit('/' + 'samira-drape-top-plus-size-8.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81703]', () => {
    cy.visit('/' + 'samira-drape-top-plus-size-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81704]', () => {
    cy.visit('/' + 'stretch-eyelet-legging-plus-size-4.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81706]', () => {
    cy.visit('/' + 'tiered-eyelet-tank-dress-plus-size-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81707]', () => {
    cy.visit('/' + 'tiered-eyelet-tank-dress-plus-size-4.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81708]', () => {
    cy.visit('/' + 'songstar-long-side-slit-tunic-plus-size-3.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81709]', () => {
    cy.visit('/' + 'theda-tunic-plus-size-3.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81710]', () => {
    cy.visit('/' + 'sobina-tunic-plus-size-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81711]', () => {
    cy.visit('/' + 'sobina-tunic-plus-size-4.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81712]', () => {
    cy.visit('/' + 'pari-tunic-plus-size-3.html')
    cy.url().should('include', '/' + 'clothing/luxe.html')
  })

  it('URL redirect for [81713]', () => {
    cy.visit('/' + 'austina-top-plus-size-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81714]', () => {
    cy.visit('/' + 'austina-top-plus-size-4.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81715]', () => {
    cy.visit('/' + 'kyuss-blouse-plus-size-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81716]', () => {
    cy.visit('/' + 'kyuss-blouse-plus-size-4.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81717]', () => {
    cy.visit('/' + 'melrose-top-plus-size-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81718]', () => {
    cy.visit('/' + 'melrose-top-plus-size-4.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81719]', () => {
    cy.visit('/' + 'demoran-top-plus-size-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81720]', () => {
    cy.visit('/' + 'demoran-top-plus-size-4.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81721]', () => {
    cy.visit('/' + 'demoran-tank-plus-size-3.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81729]', () => {
    cy.visit('/' + 'wolf-tee-6001.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81732]', () => {
    cy.visit('/' + 'calista-kimono-top-8293.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/outerwear-kimonos.html')
  })

  it('URL redirect for [81735]', () => {
    cy.visit('/' + 'addison-embroidered-tank-7031.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81736]', () => {
    cy.visit('/' + 'addison-embroidered-tank-7026.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81747]', () => {
    cy.visit('/' + 'natt-tie-tunic-c84777x-dca-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81753]', () => {
    cy.visit('/' + 'leiko-flounce-tunic-3510jwx-blk-3x.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [81758]', () => {
    cy.visit('/' + 'macie-tie-back-dress-3425jwx-nvy-3x.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [81761]', () => {
    cy.visit('/' + 'molly-trapeze-tee-3413jwx-nvy-3x.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [81762]', () => {
    cy.visit('/' + 'athina-blouse-c70766x-ist-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81763]', () => {
    cy.visit('/' + 'nova-maxi-skirt-c70256x-as-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81764]', () => {
    cy.visit('/' + 'floral-pintuck-dress-c69851x-blk-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81765]', () => {
    cy.visit('/' + 'mix-print-maxi-skirt-jwc4007x-as-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81766]', () => {
    cy.visit('/' + 'eyelet-floral-tunic-c67640x-blk-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81767]', () => {
    cy.visit('/' + 'collared-button-down-dress-c62837x-blk-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81768]', () => {
    cy.visit('/' + 'contessa-pintuck-poncho-3322jwx-cmi-3x.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [81769]', () => {
    cy.visit('/' + 'steve-3-4-sleeve-novelle-drape-coat-3330jwx-blk-3x.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [81770]', () => {
    cy.visit('/' + 'ambiance-long-cardigan-c66721ax-as-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81771]', () => {
    cy.visit('/' + 'sweetheart-blouse-c66684x-ami-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81773]', () => {
    cy.visit('/' + 'lacey-crochet-top-c66686x-ber-3x.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81774]', () => {
    cy.visit('/' + 'casper-dolman-sweater-cardigan-3273jwx-cha-3x.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [81775]', () => {
    cy.visit('/' + 'classic-belt-7992.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81776]', () => {
    cy.visit('/' + 'silver-hoop-earrings-21022.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81777]', () => {
    cy.visit('/' + 'dangle-hoop-earrings-7211.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81778]', () => {
    cy.visit('/' + 'chain-wrap-bracelet.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81779]', () => {
    cy.visit('/' + 'caspian-hoodie-5348.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81780]', () => {
    cy.visit('/' + 'blake-short-hoodie-6887.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81781]', () => {
    cy.visit('/' + 'blake-short-hoodie-6882.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81782]', () => {
    cy.visit('/' + 'apodis-sweater-4713.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81783]', () => {
    cy.visit('/' + 'crosshatch-wrap-5018.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81784]', () => {
    cy.visit('/' + 'delilah-sweater-5013.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81785]', () => {
    cy.visit('/' + 'peruki-hoodie-5317.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81786]', () => {
    cy.visit('/' + 'stifer-hoodie-5311.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81787]', () => {
    cy.visit('/' + 'greer-jacket-5923.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81788]', () => {
    cy.visit('/' + 'greer-jacket-5919.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81789]', () => {
    cy.visit('/' + 'dragon-jacket-4988.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [81797]', () => {
    cy.visit('/' + 'homecoming-racer-tank-4046.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81800]', () => {
    cy.visit('/' + 'ruffle-tank-5271.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [81808]', () => {
    cy.visit('/' + 'clover-bucket-bag-4.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81809]', () => {
    cy.visit('/' + 'aspen-legging.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [81810]', () => {
    cy.visit('/' + 'aspra-legging.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [81813]', () => {
    cy.visit('/' + 'valea-jogger.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81814]', () => {
    cy.visit('/' + 'valea-jogger.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81815]', () => {
    cy.visit('/' + 'aurora-velvet-jogger.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [81816]', () => {
    cy.visit('/' + 'aurora-velvet-jogger.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [81817]', () => {
    cy.visit('/' + 'sean-drape-top-11.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [81818]', () => {
    cy.visit('/' + 'sean-drape-top.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [81819]', () => {
    cy.visit('/' + 'rae-pointelle-duster-5.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [81820]', () => {
    cy.visit('/' + 'embroidered-border-cardigan-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81822]', () => {
    cy.visit('/' + 'alessia-italian-leather-sandal.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81823]', () => {
    cy.visit('/' + 'mia-italian-leather-sandal.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81824]', () => {
    cy.visit('/' + 'calme-lined-short-5.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81826]', () => {
    cy.visit('/' + 'abilene-hooded-cardigan-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81827]', () => {
    cy.visit('/' + 'nessava-hooded-cardigan-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81828]', () => {
    cy.visit('/' + 'kemira-mesh-dress-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81829]', () => {
    cy.visit('/' + 'mel-challis-blouse-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81830]', () => {
    cy.visit('/' + 'versairo-crinkle-satin-tunic-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81831]', () => {
    cy.visit('/' + 'bertie-cupra-blouse-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81832]', () => {
    cy.visit('/' + 'porfirio-wrap-dress-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81833]', () => {
    cy.visit('/' + 'porfirio-wrap-dress-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81834]', () => {
    cy.visit('/' + 'cohen-tunic-dress-5.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [81835]', () => {
    cy.visit('/' + 'gabriel-kaftan-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81836]', () => {
    cy.visit('/' + 'boyd-yoke-top-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81837]', () => {
    cy.visit('/' + 'boyd-yoke-top-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81838]', () => {
    cy.visit('/' + 'karl-cold-shoulder-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81839]', () => {
    cy.visit('/' + 'karl-cold-shoulder-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81840]', () => {
    cy.visit('/' + 'azaeal-peasant-blouse-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81841]', () => {
    cy.visit('/' + 'parnaz-bomber-jacket-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81842]', () => {
    cy.visit('/' + 'flare-sleeve-tunic-dress-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81843]', () => {
    cy.visit('/' + 'v-neck-button-down-dress-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81844]', () => {
    cy.visit('/' + 'lila-jo-flare-sleeve-dress-5.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81845]', () => {
    cy.visit('/' + 'lila-jo-flare-tunic-dress-5.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [81846]', () => {
    cy.visit('/' + 'cami-tank-sun-dress-10.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81847]', () => {
    cy.visit('/' + 'cami-tank-sun-dress-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81848]', () => {
    cy.visit('/' + 'vella-easy-knit-tunic-dress-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81849]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress-13.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81850]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81851]', () => {
    cy.visit('/' + 'cami-peasant-blouse-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81855]', () => {
    cy.visit('/' + 'solomio-kimono-6.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [81856]', () => {
    cy.visit('/' + 'tillson-kaftan-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81860]', () => {
    cy.visit('/' + 'mixed-eyelet-dress-12.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81861]', () => {
    cy.visit('/' + 'mixed-eyelet-dress-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81862]', () => {
    cy.visit('/' + 'heiho-lane-kimono-dress-3.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81863]', () => {
    cy.visit('/' + 'chloris-v-neck-blouse-3.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81864]', () => {
    cy.visit('/' + 'plaid-dream-top-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81865]', () => {
    cy.visit('/' + 'heidine-tie-blouse-27.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81866]', () => {
    cy.visit('/' + 'heidine-tie-blouse-21.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81867]', () => {
    cy.visit('/' + 'heidine-tie-blouse-9.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81868]', () => {
    cy.visit('/' + 'heidine-poncho-20.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81869]', () => {
    cy.visit('/' + 'heidine-poncho-14.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81870]', () => {
    cy.visit('/' + 'heidine-poncho-8.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81871]', () => {
    cy.visit('/' + 'palmer-jogger-pant-5.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [81876]', () => {
    cy.visit('/' + 'loistin-short-wrap-6.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [81880]', () => {
    cy.visit('/' + 'leah-mini-dress-5.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [81881]', () => {
    cy.visit('/' + 'elena-ruffle-dress-5.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [81882]', () => {
    cy.visit('/' + 'surya-back-slit-peasant-top-14.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [81883]', () => {
    cy.visit('/' + 'surya-back-slit-peasant-top-12.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [81884]', () => {
    cy.visit('/' + 'surya-back-slit-peasant-top-7.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [81885]', () => {
    cy.visit('/' + 'surya-everyday-tote-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81886]', () => {
    cy.visit('/' + 'hira-linen-shorts-20.html')
    cy.url().should('include', '/' + 'clothing/bottoms.html')
  })

  it('URL redirect for [81887]', () => {
    cy.visit('/' + 'hira-linen-shorts-14.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81889]', () => {
    cy.visit('/' + 'calida-side-slit-maxi-skirt-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81891]', () => {
    cy.visit('/' + 'clover-easy-tunic-dress-6.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [81892]', () => {
    cy.visit('/' + 'adeline-draped-tunic-dress-6.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [81893]', () => {
    cy.visit('/' + 'adeline-side-button-tunic-dress-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81894]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress-13.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81895]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81896]', () => {
    cy.visit('/' + 'hira-peasant-tunic-dress-13.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [81897]', () => {
    cy.visit('/' + 'hira-peasant-tunic-dress-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81898]', () => {
    cy.visit('/' + 'clover-cold-shoulder-tee-13.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81899]', () => {
    cy.visit('/' + 'clover-cold-shoulder-tee-7.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [81914]', () => {
    cy.visit('/' + 'fiskla-flare-sleeve-blouse-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81916]', () => {
    cy.visit('/' + 'dillion-mesh-dress-5.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [81917]', () => {
    cy.visit('/' + 'relaxed-shirt-5.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [81924]', () => {
    cy.visit('/' + 'side-slit-palazzo-pant-r60317s-san-xl.html')
    cy.url().should('include', '/' + 'clothing/bottoms/palazzo.html')
  })

  it('URL redirect for [81925]', () => {
    cy.visit('/' + 'elleson-velvet-top-9048n-ikat-xl.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [81926]', () => {
    cy.visit('/' + 'one-of-a-kind-necklace-jwl1172-grn-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81927]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-with-single-diamond-lh0029-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81928]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81929]', () => {
    cy.visit('/' + 'heart-of-gold-large-lh0003-gld-xs.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [81930]', () => {
    cy.visit('/' + 'fiest-tunic-jwc62226-mti-xxl.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81931]', () => {
    cy.visit('/' + 'bracelet-hip107-turq-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81932]', () => {
    cy.visit('/' + 'silver-collection-elya1833l-brn-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry.html')
  })

  it('URL redirect for [81933]', () => {
    cy.visit('/' + 'silver-collection-elya1833d-brn-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry.html')
  })

  it('URL redirect for [81934]', () => {
    cy.visit('/' + 'silver-collection-elya1833-blk-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry.html')
  })

  it('URL redirect for [81935]', () => {
    cy.visit('/' + 'silver-collection-ellya1826l-brn-os.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount.html')
  })

  it('URL redirect for [81936]', () => {
    cy.visit('/' + 'orange-blossom-tier-dress-7519a-mti-xl.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [81937]', () => {
    cy.visit('/' + 'vintage-rose-spaghetti-top-1919ll-blk-l-1.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [81938]', () => {
    cy.visit('/' + 'holiday-hedgehog-jwg109a-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81939]', () => {
    cy.visit('/' + 'peacock-ornament-jwg87c-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81940]', () => {
    cy.visit('/' + 'felt-forrest-friends-jwg102b-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81941]', () => {
    cy.visit('/' + 'donkey-ole-ornament-jwg100d-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81942]', () => {
    cy.visit('/' + 'wooly-snowman-jwg98d-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81943]', () => {
    cy.visit('/' + 'dapper-felt-dog-jwg70d-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81944]', () => {
    cy.visit('/' + 'bear-with-tree-jwg99d-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81945]', () => {
    cy.visit('/' + 'floral-burnout-velvet-scarf-c83117-mti-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [81946]', () => {
    cy.visit('/' + 'suede-fringe-choker-naomi230-gry-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81947]', () => {
    cy.visit('/' + 'leather-wrap-choker-nanet04-blk-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [81948]', () => {
    cy.visit('/' + 'vanessa-blouse-c68715-pnkby-s.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [81949]', () => {
    cy.visit('/' + 'michelle-crop-legging-3718jw-blk-xs.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [81951]', () => {
    cy.visit('/' + 'gaya-scarf-back-shirt-7278-as-xl.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [81953]', () => {
    cy.visit('/' + 'calme-linen-pants-20.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81954]', () => {
    cy.visit('/' + 'calme-linen-shorts-5.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81955]', () => {
    cy.visit('/' + 'calme-linen-pants-15.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81956]', () => {
    cy.visit('/' + 'calme-linen-pants-10.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81957]', () => {
    cy.visit('/' + 'calme-linen-poncho-16.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81958]', () => {
    cy.visit('/' + 'calme-linen-poncho-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81961]', () => {
    cy.visit('/' + 'wonder-swing-front-sweater-20.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81962]', () => {
    cy.visit('/' + 'kamilia-crochet-duster-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81964]', () => {
    cy.visit('/' + 'speir-jogger-pant-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81967]', () => {
    cy.visit('/' + 'auburn-knit-box-top-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81968]', () => {
    cy.visit('/' + 'auburn-knit-box-top-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81971]', () => {
    cy.visit('/' + 'parnaz-long-kaftan-11.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81972]', () => {
    cy.visit('/' + 'bethanie-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81973]', () => {
    cy.visit('/' + 'jessa-tunic-21.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81974]', () => {
    cy.visit('/' + 'jessa-tunic-15.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81975]', () => {
    cy.visit('/' + 'jessa-tunic-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81976]', () => {
    cy.visit('/' + 'happy-tunic.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81977]', () => {
    cy.visit('/' + 'arlene-applique-tunic-20.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81978]', () => {
    cy.visit('/' + 'arlene-applique-tunic-14.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81979]', () => {
    cy.visit('/' + 'arlene-applique-tunic-8.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81980]', () => {
    cy.visit('/' + 'pippa-tunic-20.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81981]', () => {
    cy.visit('/' + 'pippa-tunic-8.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81984]', () => {
    cy.visit('/' + 'invita-blouse-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81985]', () => {
    cy.visit('/' + 'luana-blouse-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81986]', () => {
    cy.visit('/' + 'tabatha-maxi-dress-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81987]', () => {
    cy.visit('/' + 'kennedy-tunic-17.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81988]', () => {
    cy.visit('/' + 'kennedy-tunic-12.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81989]', () => {
    cy.visit('/' + 'olivia-top-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81990]', () => {
    cy.visit('/' + 'chasselas-tunic-4.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81991]', () => {
    cy.visit('/' + 'simple-all-over-tunic-13.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [81992]', () => {
    cy.visit('/' + 'simple-all-over-tunic-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [81993]', () => {
    cy.visit('/' + 'elle-top-18.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [81999]', () => {
    cy.visit('/' + 'ceretti-embroidered-back-shirt-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82000]', () => {
    cy.visit('/' + 'veronica-market-tote.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82001]', () => {
    cy.visit('/' + 'sobina-tunic-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82002]', () => {
    cy.visit('/' + 'bali-button-down-blouse-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82003]', () => {
    cy.visit('/' + 'demoran-top-13.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82004]', () => {
    cy.visit('/' + 'demoran-top-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82006]', () => {
    cy.visit('/' + 'one-of-a-kind-necklace-jwl10517-mti-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82010]', () => {
    cy.visit('/' + 'organic-moonstone-ring-lh0132-silver-9.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82011]', () => {
    cy.visit('/' + 'medium-mesh-slip-4122ll-ant-m.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [82013]', () => {
    cy.visit('/' + 'long-slip-4113ll-as-xl-2.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [82014]', () => {
    cy.visit('/' + 'nita-belt-c67199-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82016]', () => {
    cy.visit('/' + 'shirt-tail-sweatshirt-5509ll-awht-m.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [82019]', () => {
    cy.visit('/' + 'leah-handbag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82020]', () => {
    cy.visit('/' + 'linen-cargo-pants-26069.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [82021]', () => {
    cy.visit('/' + 'parnaz-long-kaftan-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82022]', () => {
    cy.visit('/' + 'marion-peasant-tank-dress-5.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [82023]', () => {
    cy.visit('/' + 'boho-mix-blouse-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82024]', () => {
    cy.visit('/' + 'lila-jo-drape-top-17.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82025]', () => {
    cy.visit('/' + 'lila-jo-drape-top-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82026]', () => {
    cy.visit('/' + 'stella-cap-sleeve-peasant-blouse-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82027]', () => {
    cy.visit('/' + 'marion-flare-sleeve-blouse-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82028]', () => {
    cy.visit('/' + 'marion-flare-sleeve-blouse-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82029]', () => {
    cy.visit('/' + 'vernazza-linen-short-13.html')
    cy.url().should('include', '/' + 'clothing/bottoms.html')
  })

  it('URL redirect for [82030]', () => {
    cy.visit('/' + 'vernazza-linen-short-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82033]', () => {
    cy.visit('/' + 'vella-jogger-pant-8.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82034]', () => {
    cy.visit('/' + 'cami-draped-cardigan-13.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82035]', () => {
    cy.visit('/' + 'cami-draped-cardigan-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82036]', () => {
    cy.visit('/' + 'penelope-top-11.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [82037]', () => {
    cy.visit('/' + 'penelope-top-6.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [82039]', () => {
    cy.visit('/' + 'medium-slip-58.html')
    cy.url().should('include', '/' + 'clothing/tops/slips.html')
  })

  it('URL redirect for [82040]', () => {
    cy.visit('/' + 'dima-pant-r60717bs-mti-s.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [82042]', () => {
    cy.visit('/' + 'parina-long-velvet-dress-9-j31017-9-stg-xxl.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [82043]', () => {
    cy.visit('/' + 'verdot-necklace-9-jwl7017-9-mti-os.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82044]', () => {
    cy.visit('/' + 'carmelita-embroidered-cape-9-m50217-9-dgry-s.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [82045]', () => {
    cy.visit('/' + 'ashton-velvet-jacket-9-p40917-9-dss-xl.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [82046]', () => {
    cy.visit('/' + 'lennon-velvet-embroidered-back-shirt-9-w15517-9-mti-xl.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [82047]', () => {
    cy.visit('/' + 'riesling-necklace-jwl6017-mti-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82048]', () => {
    cy.visit('/' + 'mourverde-necklace-jwl7917-mti-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82051]', () => {
    cy.visit('/' + 'laila-rayon-blouse-a3518-wht-xl-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [82052]', () => {
    cy.visit('/' + 'crochet-yoke-blouse-1908ll-blk-m-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [82053]', () => {
    cy.visit('/' + 'nova-legging-3791jw-blk-xl-1.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [82054]', () => {
    cy.visit('/' + 'eckley-long-hoodie-r40517c-lagb-xl.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [82055]', () => {
    cy.visit('/' + 'watermelon-tourmaline-ring-with-diamonds-lh7003-14kgld-6.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82056]', () => {
    cy.visit('/' + 'fall-moon-deep-v-blouse-l10117-ecr-xl.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [82058]', () => {
    cy.visit('/' + 'multi-tier-cherrie-skirt-c79258-as-m-1.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [82059]', () => {
    cy.visit('/' + 'cleo-obi-belt-c80167-as-ml.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82060]', () => {
    cy.visit('/' + 'lamb-scarf-jwc1238a-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82063]', () => {
    cy.visit('/' + 'modisch-scarf-jwc1242b-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82064]', () => {
    cy.visit('/' + 'modisch-scarf-jwc1242a-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82065]', () => {
    cy.visit('/' + 'lacey-scarf-jwc1239b-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82066]', () => {
    cy.visit('/' + 'marivick-dress-8919c-silv-m.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [82067]', () => {
    cy.visit('/' + 'glorie-silk-top-8964i-as-xl.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [82069]', () => {
    cy.visit('/' + 'affection-scarf-jwc169-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82070]', () => {
    cy.visit('/' + 'keystone-scarf-jwc1164-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82071]', () => {
    cy.visit('/' + 'victorian-scarf-jwc1147-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82072]', () => {
    cy.visit('/' + 'island-scroll-scarf-jwc1148-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82073]', () => {
    cy.visit('/' + 'trilium-scarf-jwc1169-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82074]', () => {
    cy.visit('/' + 'antique-paisley-scarf-jwc1200-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82075]', () => {
    cy.visit('/' + 'maui-scarf-jwc1183-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82076]', () => {
    cy.visit('/' + 'biya-solid-scarf-by101s-bls-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82077]', () => {
    cy.visit('/' + 'biya-solid-scarf-by101s-blo-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82078]', () => {
    cy.visit('/' + 'biya-solid-scarf-by101s-nvy-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82079]', () => {
    cy.visit('/' + 'mia-earrings-m2616-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82080]', () => {
    cy.visit('/' + 'ori-earrings-noa22e-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82081]', () => {
    cy.visit('/' + 'amit-collection-necklace-am05n-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82082]', () => {
    cy.visit('/' + 'jenny-collection-necklace-jen03n-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82083]', () => {
    cy.visit('/' + 'amit-collection-necklace-am03n-as-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82084]', () => {
    cy.visit('/' + 'ultra-suede-wrap-jwl1038-oli-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry.html')
  })

  it('URL redirect for [82085]', () => {
    cy.visit('/' + 'ultra-suede-wrap-jwl1038-sun-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry.html')
  })

  it('URL redirect for [82086]', () => {
    cy.visit('/' + 'ultra-suede-wrap-jwl1038-blk-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry.html')
  })

  it('URL redirect for [82087]', () => {
    cy.visit('/' + 'amit-collection-bracelet-am01b-grn-os.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [82092]', () => {
    cy.visit('/' + 'oman-denim-jacket-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82094]', () => {
    cy.visit('/' + 'surya-drape-tunic-dress-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82095]', () => {
    cy.visit('/' + 'oman-laceup-swing-blouse-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82096]', () => {
    cy.visit('/' + 'oman-laceup-swing-blouse-6.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [82098]', () => {
    cy.visit('/' + 'zelda-mexican-peasant-top-11.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82099]', () => {
    cy.visit('/' + 'zelda-mexican-peasant-top-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82102]', () => {
    cy.visit('/' + 'fubu-pant-6.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [82103]', () => {
    cy.visit('/' + 'fuska-kimono-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82104]', () => {
    cy.visit('/' + 'lotto-horizon-kimono-dress-3.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [82106]', () => {
    cy.visit('/' + 'lisa-babydoll-dress-20.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82107]', () => {
    cy.visit('/' + 'lisa-babydoll-dress-14.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82108]', () => {
    cy.visit('/' + 'lisa-babydoll-dress-8.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82109]', () => {
    cy.visit('/' + 'feather-necklace-with-tourmaline-lh0109-18kgld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/necklaces.html')
  })

  it('URL redirect for [82110]', () => {
    cy.visit('/' + 'lucy-easy-v-neck-top-7492-pla-xl-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [82112]', () => {
    cy.visit('/' + 'tie-wrap-cardigan.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [82155]', () => {
    cy.visit('/' + 'summer-paisley-kimono.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82156]', () => {
    cy.visit('/' + 'summer-paisley-kimono.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/outerwear-kimonos.html')
  })

  it('URL redirect for [82157]', () => {
    cy.visit('/' + 'wmns-summer-paisley-kimono.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/outerwear-kimonos.html')
  })

  it('URL redirect for [82158]', () => {
    cy.visit('/' + 'linko-babydoll.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [82159]', () => {
    cy.visit('/' + 'linko-babydoll.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [82160]', () => {
    cy.visit('/' + 'wmns-linko-babydoll.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [82161]', () => {
    cy.visit('/' + 'wmns-linko-babydoll.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [82162]', () => {
    cy.visit('/' + 'hira-linen-shorts-8.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82163]', () => {
    cy.visit('/' + 'multi-print-cardigan-c40917-mti-xxl.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [82575]', () => {
    cy.visit('/' + 'golden-heart-large.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82576]', () => {
    cy.visit('/' + 'golden-heart-large.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82577]', () => {
    cy.visit('/' + 'golden-heart-large.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82578]', () => {
    cy.visit('/' + 'golden-heart-large-w-diamond.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82579]', () => {
    cy.visit('/' + 'golden-heart-large-w-diamond.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82580]', () => {
    cy.visit('/' + 'rose-thorn-band.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82581]', () => {
    cy.visit('/' + 'rose-thorn-band-with-ruby.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82582]', () => {
    cy.visit('/' + 'rose-thorn-band-with-ruby.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82583]', () => {
    cy.visit('/' + 'rose-thorn-band-with-ruby.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82584]', () => {
    cy.visit('/' + 'rose-thorn-band-with-diamond.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82585]', () => {
    cy.visit('/' + 'rose-thorn-band-with-sprinkled-diamond.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82586]', () => {
    cy.visit('/' + 'queen-ruby-ring-w-diamonds.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82587]', () => {
    cy.visit('/' + 'queen-ruby-ring-w-diamonds.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82588]', () => {
    cy.visit('/' + 'turquoise-oval.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82589]', () => {
    cy.visit('/' + 'turquoise-oval.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82590]', () => {
    cy.visit('/' + 'turquoise-oval.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82591]', () => {
    cy.visit('/' + 'green-agate-petal-ring.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82592]', () => {
    cy.visit('/' + 'green-agate-petal-ring.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82593]', () => {
    cy.visit('/' + 'snake-ring-w-star-set.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82594]', () => {
    cy.visit('/' + 'snake-ring-w-star-set.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82595]', () => {
    cy.visit('/' + 'snake-ring-w-blue-topaz.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82596]', () => {
    cy.visit('/' + 'snake-ring-w-blue-topaz.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82597]', () => {
    cy.visit('/' + 'green-agate-open-petal-ring.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82598]', () => {
    cy.visit('/' + 'green-agate-open-petal-ring.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82615]', () => {
    cy.visit('/' + 'snake-ring-w-star-set-ring.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82616]', () => {
    cy.visit('/' + 'ilaria-woven-washed-leather-cross-body-bag-1-1.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [82630]', () => {
    cy.visit('/' + 'blk-velvet-embroidered-skinny-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [82704]', () => {
    cy.visit('/' + 'natalya-cap-slv-pintuck-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82705]', () => {
    cy.visit('/' + 'natalya-cap-slv-pintuck-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82706]', () => {
    cy.visit('/' + 'natalya-cap-slv-pintuck-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82707]', () => {
    cy.visit('/' + 'natalya-cap-slv-pintuck-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82708]', () => {
    cy.visit('/' + 'natalya-cap-slv-pintuck-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82876]', () => {
    cy.visit('/' + 'melrose-top.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82877]', () => {
    cy.visit('/' + 'melrose-top.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82878]', () => {
    cy.visit('/' + 'melrose-top.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82879]', () => {
    cy.visit('/' + 'cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82880]', () => {
    cy.visit('/' + 'cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82881]', () => {
    cy.visit('/' + 'cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82882]', () => {
    cy.visit('/' + 'cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82883]', () => {
    cy.visit('/' + 'cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82884]', () => {
    cy.visit('/' + 'cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82893]', () => {
    cy.visit('/' + 'aveline-scarf-flounce-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [82916]', () => {
    cy.visit('/' + 'melissa-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [82917]', () => {
    cy.visit('/' + 'melissa-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [82918]', () => {
    cy.visit('/' + 'melissa-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [82919]', () => {
    cy.visit('/' + 'luxor-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [82921]', () => {
    cy.visit('/' + 'eye-pendant.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [82957]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82959]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82960]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82961]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82962]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82963]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82964]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82965]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82966]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82967]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82968]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82969]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82972]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82975]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82977]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82979]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82980]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82981]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82982]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82983]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82984]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82985]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [82988]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83012]', () => {
    cy.visit('/' + 'eye-pendant.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [83013]', () => {
    cy.visit('/' + 'eye-pendant.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [83024]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83025]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83026]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83027]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83028]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83029]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83030]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83031]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83032]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83033]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83034]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83035]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83036]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83037]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83038]', () => {
    cy.visit('/' + 'shrt-slip-w-chif-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83039]', () => {
    cy.visit('/' + 'shrt-slip-w-chif-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83040]', () => {
    cy.visit('/' + 'shrt-slip-w-chif-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83041]', () => {
    cy.visit('/' + 'shrt-slip-w-chif-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83042]', () => {
    cy.visit('/' + 'med-slip-w-chif-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83043]', () => {
    cy.visit('/' + 'med-slip-w-chif-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83044]', () => {
    cy.visit('/' + 'med-slip-w-chif-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83045]', () => {
    cy.visit('/' + 'med-slip-w-chif-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83047]', () => {
    cy.visit('/' + 'med-slip-lace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83048]', () => {
    cy.visit('/' + 'med-slip-lace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83049]', () => {
    cy.visit('/' + 'med-slip-lace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83050]', () => {
    cy.visit('/' + 'med-slip-lace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83051]', () => {
    cy.visit('/' + 'med-slip-lace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83052]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83053]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83054]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83055]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83056]', () => {
    cy.visit('/' + 'med-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83057]', () => {
    cy.visit('/' + 'med-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83058]', () => {
    cy.visit('/' + 'med-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83059]', () => {
    cy.visit('/' + 'med-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83060]', () => {
    cy.visit('/' + 'short-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83061]', () => {
    cy.visit('/' + 'short-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83062]', () => {
    cy.visit('/' + 'short-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83063]', () => {
    cy.visit('/' + 'short-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83064]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83065]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83066]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83067]', () => {
    cy.visit('/' + 'med-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83068]', () => {
    cy.visit('/' + 'med-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83069]', () => {
    cy.visit('/' + 'med-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83070]', () => {
    cy.visit('/' + 'med-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83071]', () => {
    cy.visit('/' + 'med-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83072]', () => {
    cy.visit('/' + 'med-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83073]', () => {
    cy.visit('/' + 'med-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83074]', () => {
    cy.visit('/' + 'short-slip-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83075]', () => {
    cy.visit('/' + 'short-slip-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83076]', () => {
    cy.visit('/' + 'short-slip-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83077]', () => {
    cy.visit('/' + 'short-slip-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83078]', () => {
    cy.visit('/' + 'short-slip-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83079]', () => {
    cy.visit('/' + 'short-slip-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83080]', () => {
    cy.visit('/' + 'med-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [83131]', () => {
    cy.visit('/' + 'amara-cross-body-bag.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [83171]', () => {
    cy.visit('/' + 'lulu-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [83755]', () => {
    cy.visit('/' + 'aveline-scarf-flounce-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [84318]', () => {
    cy.visit('/' + 'stretch-eyelet-legging.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84319]', () => {
    cy.visit('/' + 'stretch-eyelet-legging.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84320]', () => {
    cy.visit('/' + 'stretch-eyelet-legging.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84321]', () => {
    cy.visit('/' + 'stretch-eyelet-legging.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84322]', () => {
    cy.visit('/' + 'stretch-eyelet-legging.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84323]', () => {
    cy.visit('/' + 'stretch-eyelet-legging.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84549]', () => {
    cy.visit('/' + 'basille-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84550]', () => {
    cy.visit('/' + 'basille-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84551]', () => {
    cy.visit('/' + 'basille-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84552]', () => {
    cy.visit('/' + 'basille-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84553]', () => {
    cy.visit('/' + 'basille-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84554]', () => {
    cy.visit('/' + 'basille-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84603]', () => {
    cy.visit('/' + 'lisa-babydoll-dress-lined.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84604]', () => {
    cy.visit('/' + 'lisa-babydoll-dress-lined.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84605]', () => {
    cy.visit('/' + 'lisa-babydoll-dress-lined.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84606]', () => {
    cy.visit('/' + 'lisa-babydoll-dress-lined.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84607]', () => {
    cy.visit('/' + 'lisa-babydoll-dress-lined.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84608]', () => {
    cy.visit('/' + 'lisa-babydoll-dress-lined.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84651]', () => {
    cy.visit('/' + 'peta-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84652]', () => {
    cy.visit('/' + 'peta-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84653]', () => {
    cy.visit('/' + 'peta-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84654]', () => {
    cy.visit('/' + 'peta-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84655]', () => {
    cy.visit('/' + 'peta-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [84656]', () => {
    cy.visit('/' + 'peta-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [85705]', () => {
    cy.visit('/' + 'demoran-ruffle-kimono.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [85706]', () => {
    cy.visit('/' + 'demoran-ruffle-kimono.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [85707]', () => {
    cy.visit('/' + 'demoran-ruffle-kimono.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [85708]', () => {
    cy.visit('/' + 'demoran-ruffle-kimono.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [85709]', () => {
    cy.visit('/' + 'demoran-ruffle-kimono.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [85710]', () => {
    cy.visit('/' + 'demoran-ruffle-kimono.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [85927]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85928]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85929]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85930]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85931]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85932]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85933]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85934]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85935]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85936]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85937]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85938]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85939]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85940]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85941]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85942]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85943]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85944]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85945]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85946]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85947]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85948]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85949]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85950]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85951]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85952]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85953]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85954]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [85955]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [86906]', () => {
    cy.visit('/' + 'lulu-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [86907]', () => {
    cy.visit('/' + 'lulu-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [86908]', () => {
    cy.visit('/' + 'lulu-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [86909]', () => {
    cy.visit('/' + 'lulu-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [86910]', () => {
    cy.visit('/' + 'lulu-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [86959]', () => {
    cy.visit('/' + 'mikones-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [86960]', () => {
    cy.visit('/' + 'mikones-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [86961]', () => {
    cy.visit('/' + 'mikones-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [86962]', () => {
    cy.visit('/' + 'mikones-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [86963]', () => {
    cy.visit('/' + 'mikones-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [86964]', () => {
    cy.visit('/' + 'mikones-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87026]', () => {
    cy.visit('/' + 'pari-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87027]', () => {
    cy.visit('/' + 'pari-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87028]', () => {
    cy.visit('/' + 'pari-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87029]', () => {
    cy.visit('/' + 'pari-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87030]', () => {
    cy.visit('/' + 'pari-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87031]', () => {
    cy.visit('/' + 'pari-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87086]', () => {
    cy.visit('/' + 'eros-blue-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87087]', () => {
    cy.visit('/' + 'eros-blue-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87088]', () => {
    cy.visit('/' + 'eros-blue-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87089]', () => {
    cy.visit('/' + 'eros-blue-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87090]', () => {
    cy.visit('/' + 'eros-blue-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87091]', () => {
    cy.visit('/' + 'eros-blue-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87278]', () => {
    cy.visit('/' + 'sobina-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87279]', () => {
    cy.visit('/' + 'sobina-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87280]', () => {
    cy.visit('/' + 'sobina-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87281]', () => {
    cy.visit('/' + 'sobina-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87282]', () => {
    cy.visit('/' + 'sobina-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87283]', () => {
    cy.visit('/' + 'sobina-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87613]', () => {
    cy.visit('/' + 'playa-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87614]', () => {
    cy.visit('/' + 'playa-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87615]', () => {
    cy.visit('/' + 'playa-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87616]', () => {
    cy.visit('/' + 'playa-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87617]', () => {
    cy.visit('/' + 'playa-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87618]', () => {
    cy.visit('/' + 'playa-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87741]', () => {
    cy.visit('/' + 'wmns-talum-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87742]', () => {
    cy.visit('/' + 'wmns-talum-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87743]', () => {
    cy.visit('/' + 'wmns-talum-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [87771]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [87772]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [87773]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [88073]', () => {
    cy.visit('/' + 'snake-ring-w-star-set-ring.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [88101]', () => {
    cy.visit('/' + 'nikolita-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88102]', () => {
    cy.visit('/' + 'nikolita-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88103]', () => {
    cy.visit('/' + 'nikolita-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88104]', () => {
    cy.visit('/' + 'nikolita-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88105]', () => {
    cy.visit('/' + 'nikolita-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88106]', () => {
    cy.visit('/' + 'nikolita-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88401]', () => {
    cy.visit('/' + 'wmns-dreaming-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88402]', () => {
    cy.visit('/' + 'wmns-dreaming-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88403]', () => {
    cy.visit('/' + 'wmns-dreaming-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88500]', () => {
    cy.visit('/' + 'blue-moon-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88501]', () => {
    cy.visit('/' + 'blue-moon-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88502]', () => {
    cy.visit('/' + 'blue-moon-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88503]', () => {
    cy.visit('/' + 'blue-moon-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88504]', () => {
    cy.visit('/' + 'blue-moon-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88505]', () => {
    cy.visit('/' + 'blue-moon-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88561]', () => {
    cy.visit('/' + 'valerie-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88562]', () => {
    cy.visit('/' + 'valerie-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88563]', () => {
    cy.visit('/' + 'valerie-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88564]', () => {
    cy.visit('/' + 'valerie-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88565]', () => {
    cy.visit('/' + 'valerie-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88566]', () => {
    cy.visit('/' + 'valerie-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88782]', () => {
    cy.visit('/' + 'demoran-tank.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88783]', () => {
    cy.visit('/' + 'demoran-tank.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88784]', () => {
    cy.visit('/' + 'demoran-tank.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88785]', () => {
    cy.visit('/' + 'demoran-tank.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88786]', () => {
    cy.visit('/' + 'demoran-tank.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88787]', () => {
    cy.visit('/' + 'demoran-tank.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88806]', () => {
    cy.visit('/' + 'demoran-top.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88807]', () => {
    cy.visit('/' + 'demoran-top.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88808]', () => {
    cy.visit('/' + 'demoran-top.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88809]', () => {
    cy.visit('/' + 'demoran-top.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88810]', () => {
    cy.visit('/' + 'demoran-top.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88811]', () => {
    cy.visit('/' + 'demoran-top.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88890]', () => {
    cy.visit('/' + 'sibyll-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88891]', () => {
    cy.visit('/' + 'sibyll-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88892]', () => {
    cy.visit('/' + 'sibyll-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88893]', () => {
    cy.visit('/' + 'sibyll-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88894]', () => {
    cy.visit('/' + 'sibyll-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88895]', () => {
    cy.visit('/' + 'sibyll-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88938]', () => {
    cy.visit('/' + 'kyuss-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88939]', () => {
    cy.visit('/' + 'kyuss-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88940]', () => {
    cy.visit('/' + 'kyuss-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88941]', () => {
    cy.visit('/' + 'kyuss-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88942]', () => {
    cy.visit('/' + 'kyuss-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [88943]', () => {
    cy.visit('/' + 'kyuss-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [89283]', () => {
    cy.visit('/' + 'bali-button-down-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [89284]', () => {
    cy.visit('/' + 'bali-button-down-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [89285]', () => {
    cy.visit('/' + 'bali-button-down-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [89286]', () => {
    cy.visit('/' + 'bali-button-down-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [89287]', () => {
    cy.visit('/' + 'bali-button-down-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [89288]', () => {
    cy.visit('/' + 'bali-button-down-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [89452]', () => {
    cy.visit('/' + 'veronica-flare-sleeve-blouse.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89453]', () => {
    cy.visit('/' + 'veronica-flare-sleeve-blouse.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89454]', () => {
    cy.visit('/' + 'veronica-flare-sleeve-blouse.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89455]', () => {
    cy.visit('/' + 'veronica-flare-sleeve-blouse.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89456]', () => {
    cy.visit('/' + 'veronica-flare-sleeve-blouse.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89507]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89508]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89509]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89510]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89511]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89647]', () => {
    cy.visit('/' + 'surya-back-slit-peasant-top.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89648]', () => {
    cy.visit('/' + 'surya-back-slit-peasant-top.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89649]', () => {
    cy.visit('/' + 'surya-back-slit-peasant-top.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89650]', () => {
    cy.visit('/' + 'surya-back-slit-peasant-top.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89651]', () => {
    cy.visit('/' + 'surya-back-slit-peasant-top.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89893]', () => {
    cy.visit('/' + 'butterfly-cap-slv-scarf-back-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [89896]', () => {
    cy.visit('/' + 'adira-mexican-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89897]', () => {
    cy.visit('/' + 'adira-mexican-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89898]', () => {
    cy.visit('/' + 'adira-mexican-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89899]', () => {
    cy.visit('/' + 'adira-mexican-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89900]', () => {
    cy.visit('/' + 'adira-mexican-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89930]', () => {
    cy.visit('/' + 'surya-drape-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89931]', () => {
    cy.visit('/' + 'surya-drape-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89932]', () => {
    cy.visit('/' + 'surya-drape-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89933]', () => {
    cy.visit('/' + 'surya-drape-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89934]', () => {
    cy.visit('/' + 'surya-drape-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [89935]', () => {
    cy.visit('/' + 'surya-drape-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [90118]', () => {
    cy.visit('/' + 'wmns-cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90119]', () => {
    cy.visit('/' + 'wmns-cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90120]', () => {
    cy.visit('/' + 'wmns-cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90342]', () => {
    cy.visit('/' + 'indio-beaded-crossbody-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [90461]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90462]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90463]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90464]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90465]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90466]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90467]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90468]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90469]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90477]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90480]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90482]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [90510]', () => {
    cy.visit('/' + 'dreaming-blouse.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [90568]', () => {
    cy.visit('/' + 'blue-moon-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90575]', () => {
    cy.visit('/' + 'nikolita-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90584]', () => {
    cy.visit('/' + 'valerie-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90586]', () => {
    cy.visit('/' + 'demoran-top.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90606]', () => {
    cy.visit('/' + 'melrose-top.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90747]', () => {
    cy.visit('/' + 'sibyll-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90760]', () => {
    cy.visit('/' + 'demoran-tank.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90767]', () => {
    cy.visit('/' + 'kyuss-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90894]', () => {
    cy.visit('/' + 'lulu-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90905]', () => {
    cy.visit('/' + 'austina-top.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90917]', () => {
    cy.visit('/' + 'mikones-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90926]', () => {
    cy.visit('/' + 'cherpas-poncho.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90937]', () => {
    cy.visit('/' + 'pari-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90952]', () => {
    cy.visit('/' + 'cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [90960]', () => {
    cy.visit('/' + 'bali-button-down-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [91080]', () => {
    cy.visit('/' + 'eros-blue-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [91159]', () => {
    cy.visit('/' + 'playa-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [91172]', () => {
    cy.visit('/' + 'sobina-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [91178]', () => {
    cy.visit('/' + 'talum-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [91199]', () => {
    cy.visit('/' + 'basille-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [91225]', () => {
    cy.visit('/' + 'lisa-babydoll-dress-lined.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [91236]', () => {
    cy.visit('/' + 'peta-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [91238]', () => {
    cy.visit('/' + 'demoran-ruffle-kimono.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [91263]', () => {
    cy.visit('/' + 'calla-kimono.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [91265]', () => {
    cy.visit('/' + 'stretch-eyelet-legging.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [91285]', () => {
    cy.visit('/' + 'aveline-scarf-flounce-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [91286]', () => {
    cy.visit('/' + 'aveline-scarf-flounce-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [91287]', () => {
    cy.visit('/' + 'aveline-scarf-flounce-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [91288]', () => {
    cy.visit('/' + 'aveline-scarf-flounce-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [91290]', () => {
    cy.visit('/' + 'aveline-scarf-flounce-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [91359]', () => {
    cy.visit('/' + 'calida-deep-scoop-t-shirt.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [91697]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91698]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91699]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91704]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91705]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91706]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91707]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91709]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91729]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91730]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91731]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91732]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91733]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91734]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91735]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91736]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91743]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91744]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91745]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91746]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91747]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91748]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91750]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91752]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91775]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91776]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91777]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91778]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91779]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91780]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91781]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91787]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [91921]', () => {
    cy.visit('/' + 'veronica-flare-sleeve-blouse.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [91922]', () => {
    cy.visit('/' + 'veronica-flare-sleeve-blouse.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [91933]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [91934]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [91951]', () => {
    cy.visit('/' + 'surya-back-slit-peasant-top.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [91952]', () => {
    cy.visit('/' + 'surya-back-slit-peasant-top.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [91967]', () => {
    cy.visit('/' + 'oman-laceup-swing-blouse.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [91968]', () => {
    cy.visit('/' + 'oman-laceup-swing-blouse.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [91984]', () => {
    cy.visit('/' + 'adira-mexican-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [91985]', () => {
    cy.visit('/' + 'adira-mexican-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [91998]', () => {
    cy.visit('/' + 'surya-drape-tunic-dress.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [92044]', () => {
    cy.visit('/' + 'skinny-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [92045]', () => {
    cy.visit('/' + 'skinny-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [92046]', () => {
    cy.visit('/' + 'boyfriend-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [92047]', () => {
    cy.visit('/' + 'boyfriend-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [92075]', () => {
    cy.visit('/' + 'med-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [92076]', () => {
    cy.visit('/' + 'med-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [92077]', () => {
    cy.visit('/' + 'med-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [92078]', () => {
    cy.visit('/' + 'med-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [93533]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [93534]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [93535]', () => {
    cy.visit('/' + 'indigo-embroidered-skinny-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [93536]', () => {
    cy.visit('/' + 'indigo-embroidered-skinny-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [93623]', () => {
    cy.visit('/' + 'blossom-boyfriend-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [93626]', () => {
    cy.visit('/' + 'blossom-boyfriend-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [93788]', () => {
    cy.visit('/' + 'cropped-skinny-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [93796]', () => {
    cy.visit('/' + 'cropped-skinny-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [93870]', () => {
    cy.visit('/' + 'j32218-4-black-black-xs.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [93871]', () => {
    cy.visit('/' + 'j32218-4-black-black-s.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [93872]', () => {
    cy.visit('/' + 'j32218-4-black-black-m.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [93874]', () => {
    cy.visit('/' + 'j32218-4-black-black-xl.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [93875]', () => {
    cy.visit('/' + 'j32218-4-black-black-xxl.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [93876]', () => {
    cy.visit('/' + 'w12518-4-white-white-xs.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [93886]', () => {
    cy.visit('/' + 'w13218-wht-white-xs.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [93887]', () => {
    cy.visit('/' + 'w13218-wht-white-s.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [93888]', () => {
    cy.visit('/' + 'w13218-wht-white-m.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [93889]', () => {
    cy.visit('/' + 'w13218-wht-white-l.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [93913]', () => {
    cy.visit('/' + 'calme-knit-jumpsuit.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [93916]', () => {
    cy.visit('/' + 'stevie-sunglasses.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93919]', () => {
    cy.visit('/' + 'grace-sunglass-5.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93920]', () => {
    cy.visit('/' + 'grace-sunglass-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93922]', () => {
    cy.visit('/' + 'stevie-sunglass-3.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93923]', () => {
    cy.visit('/' + 'carly-sunglasses.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93924]', () => {
    cy.visit('/' + 'carly-sunglass-4.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93925]', () => {
    cy.visit('/' + 'zen-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93926]', () => {
    cy.visit('/' + 'calme-linen-poncho-17.html')
    cy.url().should('include', '/' + 'clothing/tops.html')
  })

  it('URL redirect for [93927]', () => {
    cy.visit('/' + 'talitha-earring-4.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93928]', () => {
    cy.visit('/' + 'heidine-tie-blouse-28.html')
    cy.url().should('include', '/' + 'clothing/tops.html')
  })

  it('URL redirect for [93929]', () => {
    cy.visit('/' + 'bethanie-tunic-10.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [93930]', () => {
    cy.visit('/' + 'blossom-boyfriend-jean.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [93931]', () => {
    cy.visit('/' + 'cropped-skinny-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [93932]', () => {
    cy.visit('/' + 'mica-boyfriend-short.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [93933]', () => {
    cy.visit('/' + 'phoebe-sunglass.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93934]', () => {
    cy.visit('/' + 'phoebe-sunglasses.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93935]', () => {
    cy.visit('/' + 'phoebe-sunglasses.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93937]', () => {
    cy.visit('/' + 'marianne-sunglasses-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93938]', () => {
    cy.visit('/' + 'marianne-sunglasses-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93939]', () => {
    cy.visit('/' + 'violette-sunglasses.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93940]', () => {
    cy.visit('/' + 'violette-sunglasses.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93941]', () => {
    cy.visit('/' + 'michelle-sunglasses.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93942]', () => {
    cy.visit('/' + 'michelle-sunglasses-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [93943]', () => {
    cy.visit('/' + 'calme-linen-poncho-17.html')
    cy.url().should('include', '/' + 'clothing/tops.html')
  })

  it('URL redirect for [94171]', () => {
    cy.visit('/' + 'w10818-3-white-white-xxl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94172]', () => {
    cy.visit('/' + 'w10818-3-white-coral-xs.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94173]', () => {
    cy.visit('/' + 'w10818-3-white-coral-s.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94174]', () => {
    cy.visit('/' + 'w10818-3-white-coral-m.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94175]', () => {
    cy.visit('/' + 'w10818-3-white-coral-l.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94176]', () => {
    cy.visit('/' + 'w10818-3-white-coral-xl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94177]', () => {
    cy.visit('/' + 'w10818-3-white-coral-xxl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94178]', () => {
    cy.visit('/' + 'w10818-3-white-plaid-xxl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94179]', () => {
    cy.visit('/' + 'w10818-3-coral-plaid-xxl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94180]', () => {
    cy.visit('/' + 'w10818-3-coral-white-xxl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94181]', () => {
    cy.visit('/' + 'w10818-3-coral-coral-xs.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94182]', () => {
    cy.visit('/' + 'w10818-3-coral-coral-s.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94183]', () => {
    cy.visit('/' + 'w10818-3-coral-coral-m.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94184]', () => {
    cy.visit('/' + 'w10818-3-coral-coral-l.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94185]', () => {
    cy.visit('/' + 'w10818-3-coral-coral-xl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94187]', () => {
    cy.visit('/' + 'w10818-3-dustycoral-dusty-coral-xxl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94188]', () => {
    cy.visit('/' + 'w10818-3-dustycoral-plaid-xxl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94189]', () => {
    cy.visit('/' + 'w10818-3-dustycoral-white-xxl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94190]', () => {
    cy.visit('/' + 'w10818-3-dustycoral-dusty-coral-xxl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94191]', () => {
    cy.visit('/' + 'w10818-3-dustycoral-plaid-xxl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94192]', () => {
    cy.visit('/' + 'w10818-3-dustycoral-white-xxl.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94211]', () => {
    cy.visit('/' + 'w11118-1-plaid-white-xs.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94212]', () => {
    cy.visit('/' + 'w11118-1-plaid-white-s.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94213]', () => {
    cy.visit('/' + 'w11118-1-plaid-white-m.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94214]', () => {
    cy.visit('/' + 'w11118-1-plaid-white-l.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [94303]', () => {
    cy.visit('/' + 'rot00218-gry-o-s-grey.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [94370]', () => {
    cy.visit('/' + 'c95718-3-mti-o-s-multi.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [94397]', () => {
    cy.visit('/' + 'nicce-handwoven-bag-grey.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [94416]', () => {
    cy.visit('/' + 'maritza-hoops.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [94417]', () => {
    cy.visit('/' + 'maritza-hoops-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [94418]', () => {
    cy.visit('/' + 'nicce-handwoven-bag-grey-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [94421]', () => {
    cy.visit('/' + 'cropped-skinny-jean-1.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [94423]', () => {
    cy.visit('/' + 'talitha-earring-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94425]', () => {
    cy.visit('/' + 'bp1920-crl-o-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [94426]', () => {
    cy.visit('/' + 'bp1920-coral-marine-blue-o-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [94428]', () => {
    cy.visit('/' + 'vella-jogger-pant-21.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94430]', () => {
    cy.visit('/' + 'bowen-challis-tunic-dress-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94431]', () => {
    cy.visit('/' + 'hinga-tunic-6.html')
    cy.url().should('include', '/' + 'clothing/tops.html')
  })

  it('URL redirect for [94432]', () => {
    cy.visit('/' + 'vella-jogger-pant-9.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94433]', () => {
    cy.visit('/' + 'tillson-kaftan-black.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94435]', () => {
    cy.visit('/' + 'tillson-kaftan-cloudy-skies.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94436]', () => {
    cy.visit('/' + 'invita-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [94439]', () => {
    cy.visit('/' + 'hana-cropped-boyfriend-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/jeans.html')
  })

  it('URL redirect for [94446]', () => {
    cy.visit('/' + 'hana-cropped-boyfriend-jean.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94452]', () => {
    cy.visit('/' + 'calme-stretch-crepe-pant.html')
    cy.url().should('include', '/' + 'clothing/bottoms.html')
  })

  it('URL redirect for [94453]', () => {
    cy.visit('/' + 'vita-handwoven-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94459]', () => {
    cy.visit('/' + 'blossom-cali-jacket.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [94494]', () => {
    cy.visit('/' + 'jeli-gauze-top.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [94497]', () => {
    cy.visit('/' + 'jeli-gauze-top.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [94498]', () => {
    cy.visit('/' + 'jeli-gauze-top.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [94500]', () => {
    cy.visit('/' + 'jeli-gauze-top-12.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94506]', () => {
    cy.visit('/' + 'jeli-gauze-top-13.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94507]', () => {
    cy.visit('/' + 'ghenar-gauze-top-1.html')
    cy.url().should('include', '/' + 'clothing/tops.html')
  })

  it('URL redirect for [94555]', () => {
    cy.visit('/' + 'magdalene-legging-den.html')
    cy.url().should('include', '/' + 'clothing/bottoms.html')
  })

  it('URL redirect for [94556]', () => {
    cy.visit('/' + 'magdalene-legging-blk.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [94557]', () => {
    cy.visit('/' + 'magdalene-legging-wht.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94559]', () => {
    cy.visit('/' + 'magdalene-legging.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [94563]', () => {
    cy.visit('/' + 'roma-tunic-4.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94570]', () => {
    cy.visit('/' + 'rae-pointelle-duster-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94571]', () => {
    cy.visit('/' + 'magdalene-legging-10.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94582]', () => {
    cy.visit('/' + 'embroidered-border-cardigan-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94585]', () => {
    cy.visit('/' + 'four-seasons-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [94586]', () => {
    cy.visit('/' + 'bowen-challis-tunic-dress-8.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94589]', () => {
    cy.visit('/' + 'eban-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [94590]', () => {
    cy.visit('/' + 're-augustina-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [94592]', () => {
    cy.visit('/' + 'elle-top-19.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94593]', () => {
    cy.visit('/' + 'teague-hooded-duster.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94595]', () => {
    cy.visit('/' + 'c95718-3-mti-o-s-multi.html')
    cy.url().should('include', '/' + 'sale/accessories.html')
  })

  it('URL redirect for [94602]', () => {
    cy.visit('/' + 'cropped-skinny-jean.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94603]', () => {
    cy.visit('/' + 'nico-reader-glasses.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [94610]', () => {
    cy.visit('/' + 'blossom-boyfriend-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [94611]', () => {
    cy.visit('/' + 'lila-jo-flare-sleeve-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94612]', () => {
    cy.visit('/' + 'lila-jo-flare-sleeve-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94613]', () => {
    cy.visit('/' + 'lila-jo-flare-sleeve-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94614]', () => {
    cy.visit('/' + 'lila-jo-flare-sleeve-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94615]', () => {
    cy.visit('/' + 'lila-jo-flare-sleeve-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94616]', () => {
    cy.visit('/' + 'marion-peasant-tank-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94617]', () => {
    cy.visit('/' + 'marion-peasant-tank-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94618]', () => {
    cy.visit('/' + 'marion-peasant-tank-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94619]', () => {
    cy.visit('/' + 'marion-peasant-tank-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94620]', () => {
    cy.visit('/' + 'marion-peasant-tank-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94621]', () => {
    cy.visit('/' + 'marion-peasant-tank-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94622]', () => {
    cy.visit('/' + 'marion-peasant-tank-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94656]', () => {
    cy.visit('/' + 'vella-easy-knit-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94657]', () => {
    cy.visit('/' + 'vella-easy-knit-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94658]', () => {
    cy.visit('/' + 'vella-easy-knit-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94659]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94660]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94661]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94662]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94663]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94664]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94665]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94666]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94667]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94668]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94669]', () => {
    cy.visit('/' + 'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94670]', () => {
    cy.visit('/' + 'sonoma-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94671]', () => {
    cy.visit('/' + 'vella-easy-knit-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [94681]', () => {
    cy.visit('/' + 'nadia-peasant-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94683]', () => {
    cy.visit('/' + 'brenna-drawstring-military-jacket.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [94716]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94717]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94718]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94719]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94720]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94721]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94722]', () => {
    cy.visit('/' + 'terraza-v-neck-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94740]', () => {
    cy.visit('/' + 'alton-mix-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94741]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount.html')
  })

  it('URL redirect for [94742]', () => {
    cy.visit('/' + 'alton-mix-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94743]', () => {
    cy.visit('/' + 'alton-mix-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94744]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount.html')
  })

  it('URL redirect for [94755]', () => {
    cy.visit('/' + 'calme-linen-pant.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94756]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount.html')
  })

  it('URL redirect for [94757]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount.html')
  })

  it('URL redirect for [94763]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount.html')
  })

  it('URL redirect for [94764]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [94821]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94823]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94825]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94827]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94829]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94831]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94833]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94835]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94836]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94837]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94838]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94843]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94845]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94866]', () => {
    cy.visit('/' + 'lane-tie-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94893]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94894]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94895]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94900]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94902]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94904]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94906]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94908]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94910]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94912]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94914]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94916]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94917]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94918]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94919]', () => {
    cy.visit('/' + 'katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [94952]', () => {
    cy.visit('/' + 'aveline-scarf-flounce-tunic-heather-grey.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94960]', () => {
    cy.visit('/' + 'liana-tier-skirt.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [94986]', () => {
    cy.visit('/' + 'betty-blouse.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95003]', () => {
    cy.visit('/' + 'eros-blue-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95006]', () => {
    cy.visit('/' + 'cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount.html')
  })

  it('URL redirect for [95017]', () => {
    cy.visit('/' + 'lulu-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95042]', () => {
    cy.visit('/' + 'melrose-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95043]', () => {
    cy.visit('/' + 'melrose-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95046]', () => {
    cy.visit('/' + 'melrose-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95060]', () => {
    cy.visit('/' + 'demoran-top.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95062]', () => {
    cy.visit('/' + 'valerie-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95064]', () => {
    cy.visit('/' + 'demoran-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95066]', () => {
    cy.visit('/' + 'demoran-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95071]', () => {
    cy.visit('/' + 'nikolita-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95078]', () => {
    cy.visit('/' + 'blue-moon-blouse.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95088]', () => {
    cy.visit('/' + 'side-slit-palazzo-pant.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount/over-70-off.html')
  })

  it('URL redirect for [95105]', () => {
    cy.visit('/' + 'andreas-leather-tote.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95122]', () => {
    cy.visit('/' + 'butterfly-cap-slv-scarf-back-tunic.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95170]', () => {
    cy.visit('/' + 'wmns-kobi-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95171]', () => {
    cy.visit('/' + 'kobi-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95172]', () => {
    cy.visit('/' + 'kobi-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95196]', () => {
    cy.visit('/' + 'calme-palm-spring-pant.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95204]', () => {
    cy.visit('/' + 'snake-ring-w-star-set-ring.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [95233]', () => {
    cy.visit('/' + 'playa-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95261]', () => {
    cy.visit('/' + 'pari-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95264]', () => {
    cy.visit('/' + 'pari-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95307]', () => {
    cy.visit('/' + 'adeline-side-button-tunic-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [95308]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95309]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95310]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95311]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95312]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95313]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95314]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95315]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95316]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95317]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95318]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95319]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95320]', () => {
    cy.visit('/' + 'calida-yoke-tank-tunic-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95367]', () => {
    cy.visit('/' + 'basille-dress-slip.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95369]', () => {
    cy.visit('/' + 'tank-slit-dress-slip.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95370]', () => {
    cy.visit('/' + 'tank-slit-dress-slip.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95371]', () => {
    cy.visit('/' + 'tank-slit-dress-slip.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95372]', () => {
    cy.visit('/' + 'tank-slit-dress-slip.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95373]', () => {
    cy.visit('/' + 'tank-slit-dress-slip.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95392]', () => {
    cy.visit('/' + 'wmns-izamal-3-4-slv-button-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95412]', () => {
    cy.visit('/' + 'printed-peplum-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95413]', () => {
    cy.visit('/' + 'assymetrical-embroidered-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95414]', () => {
    cy.visit('/' + 'assymetrical-embroidered-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95423]', () => {
    cy.visit('/' + 'helena-drawstring-prairie-dress.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95424]', () => {
    cy.visit('/' + 'helena-drawstring-prairie-dress.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95425]', () => {
    cy.visit('/' + 'helena-drawstring-prairie-dress.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95426]', () => {
    cy.visit('/' + 'helena-drawstring-prairie-dress.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95427]', () => {
    cy.visit('/' + 'helena-drawstring-prairie-dress.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95428]', () => {
    cy.visit('/' + 'helena-drawstring-prairie-dress.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95429]', () => {
    cy.visit('/' + 'helena-drawstring-prairie-dress.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95430]', () => {
    cy.visit('/' + 'helena-drawstring-prairie-dress.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95431]', () => {
    cy.visit('/' + 'helena-drawstring-prairie-dress.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95443]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95444]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95445]', () => {
    cy.visit('/' + 'med-slip-chiff-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95446]', () => {
    cy.visit('/' + 'sage-drawstrng-tote.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95448]', () => {
    cy.visit('/' + 'casa-emb-pillow.html')
    cy.url().should('include', '/' + 'accessories/vip-accessory-flash-sale.html')
  })

  it('URL redirect for [95449]', () => {
    cy.visit('/' + 'giulia-straw-bag-with-suede-fringe.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95451]', () => {
    cy.visit('/' + 'eye-pendant.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [95452]', () => {
    cy.visit('/' + 'eye-pendant.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [95459]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95460]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95461]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95462]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95463]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95464]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95465]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95466]', () => {
    cy.visit('/' + 'long-knit-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95477]', () => {
    cy.visit('/' + 'eye-pendant.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [95478]', () => {
    cy.visit('/' + 'laala-bracelet.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95479]', () => {
    cy.visit('/' + 'luxor-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95480]', () => {
    cy.visit('/' + 'melissa-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95481]', () => {
    cy.visit('/' + 'melissa-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95482]', () => {
    cy.visit('/' + 'melissa-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95488]', () => {
    cy.visit('/' + 'indio-beaded-crossbow-bag-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95489]', () => {
    cy.visit('/' + 'tosca-italian-leather-tote-alabaster-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95490]', () => {
    cy.visit('/' + 'chandi-bracelet-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95492]', () => {
    cy.visit('/' + 'farrah-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95493]', () => {
    cy.visit('/' + 'farrah-necklace-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95494]', () => {
    cy.visit('/' + 'farrah-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95496]', () => {
    cy.visit('/' + 'sadie-earring.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95498]', () => {
    cy.visit('/' + 'eban-necklace-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95499]', () => {
    cy.visit('/' + 'elza-necklace-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95500]', () => {
    cy.visit('/' + 'linda-sunglasses.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95501]', () => {
    cy.visit('/' + 'christine-sunglass.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95502]', () => {
    cy.visit('/' + 'nico-sunglass.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95509]', () => {
    cy.visit('/' + 'anais-necklace-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95510]', () => {
    cy.visit('/' + 'tirzah-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95512]', () => {
    cy.visit('/' + 'sonoma-everyday-tee-plus-size-11.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95513]', () => {
    cy.visit('/' + 'sonoma-everyday-tee-plus-size-8.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95514]', () => {
    cy.visit('/' + 'sonoma-everyday-tee-plus-size-5.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95515]', () => {
    cy.visit('/' + 'aria-ruffle-top-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95516]', () => {
    cy.visit('/' + 'calida-overnight-bag.html')
    cy.url().should('include', '/' + 'accessories/vip-accessory-flash-sale.html')
  })

  it('URL redirect for [95517]', () => {
    cy.visit('/' + 'darla-tunic-20.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95519]', () => {
    cy.visit('/' + 'darla-tunic-8.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95522]', () => {
    cy.visit('/' + 'fusion-cold-shoulder-7.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount/30-off.html')
  })

  it('URL redirect for [95523]', () => {
    cy.visit('/' + 'lei-lei-peasant-tunic-dress-plus-size-7.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95525]', () => {
    cy.visit('/' + 'indigo-embroidered-skinny-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [95540]', () => {
    cy.visit('/' + 'linda-reader-glasses.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95541]', () => {
    cy.visit('/' + 'christine-reader-glasses-long-beach-tortoise.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95546]', () => {
    cy.visit('/' + 'stella-cap-sleeve-peasant-blouse.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount/over-70-off.html')
  })

  it('URL redirect for [95560]', () => {
    cy.visit('/' + 'bethanie-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95568]', () => {
    cy.visit('/' + 'palmer-jogger-pant.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95572]', () => {
    cy.visit('/' + 'campbell-challis-tunic-dress.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95573]', () => {
    cy.visit('/' + 'campbell-challis-tunic-dress.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95582]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95649]', () => {
    cy.visit('/' + 'mikones-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95658]', () => {
    cy.visit('/' + 'austina-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95661]', () => {
    cy.visit('/' + 'valley-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95662]', () => {
    cy.visit('/' + 'babette-blouse.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95680]', () => {
    cy.visit('/' + 'nye-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95681]', () => {
    cy.visit('/' + 'nye-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95684]', () => {
    cy.visit('/' + 'surya-everyday-tote.html')
    cy.url().should('include', '/' + 'accessories/vip-accessory-flash-sale.html')
  })

  it('URL redirect for [95692]', () => {
    cy.visit('/' + 'spring-blouse.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95707]', () => {
    cy.visit('/' + 'crochet-button-down-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [95708]', () => {
    cy.visit('/' + 'crochet-button-down-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [95709]', () => {
    cy.visit('/' + 'white-lillies-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [95716]', () => {
    cy.visit('/' + 'crochet-fringe-poncho.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95717]', () => {
    cy.visit('/' + 'crochet-fringe-poncho.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95723]', () => {
    cy.visit('/' + 'magdalene-velvet-crop-palazzo-pant.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95724]', () => {
    cy.visit('/' + 'brazillia-tunic.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95725]', () => {
    cy.visit('/' + 'brazillia-tunic.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95726]', () => {
    cy.visit('/' + 'brazillia-tunic.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95727]', () => {
    cy.visit('/' + 'brazillia-tunic.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95728]', () => {
    cy.visit('/' + 'brazillia-tunic.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95729]', () => {
    cy.visit('/' + 'brazillia-tunic.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95730]', () => {
    cy.visit('/' + 'brazillia-tunic.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [95762]', () => {
    cy.visit('/' + 'wmns-katrina-everyday-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95765]', () => {
    cy.visit('/' + 'wmns-velsia-s-s-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95780]', () => {
    cy.visit('/' + 'rae-silk-dress.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95789]', () => {
    cy.visit('/' + 'amara-cross-body-bag.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95790]', () => {
    cy.visit('/' + 'lorne-vel-tote-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95791]', () => {
    cy.visit('/' + 'harlow-vel-tote-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95809]', () => {
    cy.visit('/' + 'med-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95812]', () => {
    cy.visit('/' + 'med-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95813]', () => {
    cy.visit('/' + 'med-slip-wlace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95814]', () => {
    cy.visit('/' + 'med-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95816]', () => {
    cy.visit('/' + 'med-slip-lace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95818]', () => {
    cy.visit('/' + 'med-slip-w-chif-hem.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount.html')
  })

  it('URL redirect for [95819]', () => {
    cy.visit('/' + 'shrt-slip-w-chif-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95820]', () => {
    cy.visit('/' + 'juno-cotton-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95822]', () => {
    cy.visit('/' + 'wmns-linsu-maxi-tank-dress.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95823]', () => {
    cy.visit('/' + 'linsu-maxi-tank-dress.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95824]', () => {
    cy.visit('/' + 'linsu-maxi-tank-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95825]', () => {
    cy.visit('/' + 'summy-long-tunic.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95826]', () => {
    cy.visit('/' + 'summy-long-tunic.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95827]', () => {
    cy.visit('/' + 'wmns-summer-paisley-kimono.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95829]', () => {
    cy.visit('/' + 'wmns-summer-paisley-kimono.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95831]', () => {
    cy.visit('/' + 'esafie-reversible-tank-dress-6.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95841]', () => {
    cy.visit('/' + 'namibia-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [95843]', () => {
    cy.visit('/' + 'butterfly-studs-sm-9-lh0090-9-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [95844]', () => {
    cy.visit('/' + 'mini-butterfly-necklace-mini-butterfly-necklace-9-lh0086-9-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [95845]', () => {
    cy.visit('/' + 'austin-denim-pillow.html')
    cy.url().should('include', '/' + 'accessories/vip-accessory-flash-sale.html')
  })

  it('URL redirect for [95846]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [95863]', () => {
    cy.visit('/' + 'malakye-cropped-top.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95864]', () => {
    cy.visit('/' + 'betimo-cold-shoulder.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95866]', () => {
    cy.visit('/' + 'nemma-hooded-cardigan.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95867]', () => {
    cy.visit('/' + 'haret-silk-blouse.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95885]', () => {
    cy.visit('/' + 'wmns-cattleya-long-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [95915]', () => {
    cy.visit('/' + 'malla-chiffon-blouse.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95922]', () => {
    cy.visit('/' + 'conan-chiffon-blouse.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95923]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95924]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95925]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95926]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95927]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95928]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95929]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95930]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95931]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95932]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95933]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [95934]', () => {
    cy.visit('/' + 'tempo-flair-blouse.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95938]', () => {
    cy.visit('/' + 'tiva-drawstring-tote.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [95940]', () => {
    cy.visit('/' + 'yabi-belt.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [95970]', () => {
    cy.visit('/' + 'dina-top-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95972]', () => {
    cy.visit('/' + 'dina-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [95978]', () => {
    cy.visit('/' + 'mixed-prints-maxi-tank-dress.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [95980]', () => {
    cy.visit('/' + 'bowen-challis-tunic.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount/over-70-off.html')
  })

  it('URL redirect for [95983]', () => {
    cy.visit('/' + 'boyfriend-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [95984]', () => {
    cy.visit('/' + 'skinny-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [95997]', () => {
    cy.visit('/' + 'lisa-babydoll-dress-lined.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [96016]', () => {
    cy.visit('/' + 'forma-handkerchief-tank-dress.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [96017]', () => {
    cy.visit('/' + 'forma-handkerchief-tank-dress.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [96020]', () => {
    cy.visit('/' + 'malakye-cropped-top.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [96024]', () => {
    cy.visit('/' + 'wmns-charming-top.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [96028]', () => {
    cy.visit('/' + 'wmns-talum-tunic.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [96029]', () => {
    cy.visit('/' + 'copains-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96030]', () => {
    cy.visit('/' + 'copains-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96034]', () => {
    cy.visit('/' + 'bayla-long-side-slit-tunic.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96035]', () => {
    cy.visit('/' + 'mixed-prints-tier-skirt.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96036]', () => {
    cy.visit('/' + 'mixed-prints-maxi-tank-dress.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [96039]', () => {
    cy.visit('/' + 'aliya-tote-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96040]', () => {
    cy.visit('/' + 'izamal-drawstring-tote.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96041]', () => {
    cy.visit('/' + 'bora-silk-dress-slip-included.html')
    cy.url().should('include', '/' + 'prints.html')
  })

  it('URL redirect for [96042]', () => {
    cy.visit('/' + 'wmns-dexter-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [96045]', () => {
    cy.visit('/' + 'flower-patch-button-down-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [96046]', () => {
    cy.visit('/' + 'flower-patch-button-down-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [96057]', () => {
    cy.visit('/' + 'natalya-cap-slv-pintuck-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96058]', () => {
    cy.visit('/' + 'knox-dress.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96059]', () => {
    cy.visit('/' + 'blk-velvet-embroidered-skinny-jean.html')
    cy.url().should('include', '/' + 'clothing/bottoms/denim.html')
  })

  it('URL redirect for [96060]', () => {
    cy.visit('/' + 'ilaria-woven-washed-leather-cross-body-bag.html')
    cy.url().should('include', '/' + 'accessories/vip-accessory-flash-sale.html')
  })

  it('URL redirect for [96062]', () => {
    cy.visit('/' + 'green-agate-open-petal-ring.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96063]', () => {
    cy.visit('/' + 'snake-ring-w-blue-topaz.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96064]', () => {
    cy.visit('/' + 'snake-ring-w-star-set.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96065]', () => {
    cy.visit('/' + 'green-agate-petal-ring.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96066]', () => {
    cy.visit('/' + 'turquoise-oval.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96067]', () => {
    cy.visit('/' + 'queen-ruby-ring-w-diamonds.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96068]', () => {
    cy.visit('/' + 'rose-thorn-band-with-sprinkled-diamond.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96069]', () => {
    cy.visit('/' + 'rose-thorn-band-with-diamond.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96070]', () => {
    cy.visit('/' + 'rose-thorn-band-with-ruby.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96071]', () => {
    cy.visit('/' + 'rose-thorn-band.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96072]', () => {
    cy.visit('/' + 'golden-heart-large-w-diamond.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96073]', () => {
    cy.visit('/' + 'golden-heart-large.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96077]', () => {
    cy.visit('/' + 'w11118-1-plaid-white-l.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [96079]', () => {
    cy.visit('/' + 'elle-top.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96080]', () => {
    cy.visit('/' + 'elle-top.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96191]', () => {
    cy.visit('/' + 'tanya-tonal-blouse-blue-night.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96217]', () => {
    cy.visit('/' + 'gritson-hooded-cardigan-light-beige.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96230]', () => {
    cy.visit('/' + 'resso-wrap-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96380]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [96381]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [96382]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [96383]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [96384]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [96385]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [96386]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [96387]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [96388]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [96389]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [96550]', () => {
    cy.visit('/' + 'cayden-everyday-tote.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96551]', () => {
    cy.visit('/' + 'botanical-stan-kimono-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96552]', () => {
    cy.visit('/' + 'downing-linen-tunic-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96553]', () => {
    cy.visit('/' + 'marian-mesh-dress-with-slip.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [96554]', () => {
    cy.visit('/' + 'damour-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96555]', () => {
    cy.visit('/' + 'victoriana-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96556]', () => {
    cy.visit('/' + 'japer-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96557]', () => {
    cy.visit('/' + 'forest-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96558]', () => {
    cy.visit('/' + 'oranda-market-tote.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96559]', () => {
    cy.visit('/' + 'oranda-market-tote.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96560]', () => {
    cy.visit('/' + 'peta-bucket-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96561]', () => {
    cy.visit('/' + 'peta-bucket-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96562]', () => {
    cy.visit('/' + 'flower-garden-tunic-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96563]', () => {
    cy.visit('/' + 'gauze-split-sleeve-dress-navy.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96564]', () => {
    cy.visit('/' + 'gauze-split-sleeve-dress-black.html')
    cy.url().should('include', '/' + 'calme.html')
  })

  it('URL redirect for [96565]', () => {
    cy.visit('/' + 'easy-gauze-skirt-navy.html')
    cy.url().should('include', '/' + 'calme.html')
  })

  it('URL redirect for [96566]', () => {
    cy.visit('/' + 'easy-gauze-skirt-black.html')
    cy.url().should('include', '/' + 'calme.html')
  })

  it('URL redirect for [96567]', () => {
    cy.visit('/' + 'effortless-boho-flounce-dress-black.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96568]', () => {
    cy.visit('/' + 'gauze-split-sleeve-top-navy.html')
    cy.url().should('include', '/' + 'calme.html')
  })

  it('URL redirect for [96569]', () => {
    cy.visit('/' + 'gauze-split-sleeve-top-black.html')
    cy.url().should('include', '/' + 'sustainable.html')
  })

  it('URL redirect for [96570]', () => {
    cy.visit('/' + 'chakra-earring-turquoise.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96571]', () => {
    cy.visit('/' + 'chakra-earring.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96572]', () => {
    cy.visit('/' + 'gia-necklace-turquoise.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96573]', () => {
    cy.visit('/' + 'gia-necklace-coral.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96574]', () => {
    cy.visit('/' + 'odi-bracelet.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96575]', () => {
    cy.visit('/' + 'cayden-drape-tunic-dress-black.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96576]', () => {
    cy.visit('/' + 'ronnie-laceup-tunic-dress-camouflage.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96577]', () => {
    cy.visit('/' + 'ronnie-crop-mexican-top-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96578]', () => {
    cy.visit('/' + 'ronnie-crop-mexican-top-grape.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96579]', () => {
    cy.visit('/' + 'ronnie-crop-mexican-top-plaid.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96580]', () => {
    cy.visit('/' + 'austine-pull-on-tee-black.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96581]', () => {
    cy.visit('/' + 'shea-peasant-blouse-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96582]', () => {
    cy.visit('/' + 'oranda-v-neck-djellaba-sand.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96583]', () => {
    cy.visit('/' + 'peta-easy-tunic-dress-red.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96584]', () => {
    cy.visit('/' + 'peta-easy-tunic-dress-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96585]', () => {
    cy.visit('/' + 'briar-button-back-dress-denim.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96586]', () => {
    cy.visit('/' + 'hazelton-draped-tunic-dress-heathergrey.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96587]', () => {
    cy.visit('/' + 'hazelton-draped-tunic-dress-dusty-coral.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96588]', () => {
    cy.visit('/' + 'hazelton-peasant-tie-blouse-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96589]', () => {
    cy.visit('/' + 'peta-drape-top-denim.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96590]', () => {
    cy.visit('/' + 'peonies-wrapped-pant-multib.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96591]', () => {
    cy.visit('/' + 'peonies-wrapped-pant.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96592]', () => {
    cy.visit('/' + 'victoriana-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96593]', () => {
    cy.visit('/' + 'garden-arch-dress-multia.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96594]', () => {
    cy.visit('/' + 'marietta-button-down-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96595]', () => {
    cy.visit('/' + 'peta-drape-top-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96596]', () => {
    cy.visit('/' + 'selena-poncho.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96597]', () => {
    cy.visit('/' + 'selena-poncho-graphite.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96598]', () => {
    cy.visit('/' + 'petunia-tunic-graphite.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96599]', () => {
    cy.visit('/' + 'petunia-tunic-blue-night.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96600]', () => {
    cy.visit('/' + 'sunny-challis-tunic-natural.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96601]', () => {
    cy.visit('/' + 'lueta-silk-blouse-multia.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96602]', () => {
    cy.visit('/' + 'augusta-cargo-skirt-iron-blue.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96603]', () => {
    cy.visit('/' + 'augusta-cargo-skirt-black.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96605]', () => {
    cy.visit('/' + 'poplin-cargo-shorts.html')
    cy.url().should('include', '/' + 'linen.html')
  })

  it('URL redirect for [96610]', () => {
    cy.visit('/' + 'eva-earring.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96668]', () => {
    cy.visit('/' + 'gauze-split-sleeve-top.html')
    cy.url().should('include', '/' + 'sustainable.html')
  })

  it('URL redirect for [96669]', () => {
    cy.visit('/' + 'berry-tunic-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96670]', () => {
    cy.visit('/' + 'easy-gauze-skirt-guava.html')
    cy.url().should('include', '/' + 'calme.html')
  })

  it('URL redirect for [96671]', () => {
    cy.visit('/' + 'ani-earring.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96672]', () => {
    cy.visit('/' + 'juliet-earring.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96673]', () => {
    cy.visit('/' + 'wyatt-necklace-quartz.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96674]', () => {
    cy.visit('/' + 'madison-hoop.html')
    cy.url().should('include', '/' + 'accessories/jewelry.html')
  })

  it('URL redirect for [96675]', () => {
    cy.visit('/' + 'luca-bracelet.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96676]', () => {
    cy.visit('/' + 'tosca-italian-leather-tote.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96677]', () => {
    cy.visit('/' + 'halle-earring.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96679]', () => {
    cy.visit('/' + 'aspen-legging-true-army-green.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96680]', () => {
    cy.visit('/' + 'asper-legging-eden-rose.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96681]', () => {
    cy.visit('/' + 'asper-legging-voltage.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96682]', () => {
    cy.visit('/' + 'asper-legging-sand.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96683]', () => {
    cy.visit('/' + 'asper-legging-black.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96684]', () => {
    cy.visit('/' + 'shea-peasant-blouse-stripe.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96685]', () => {
    cy.visit('/' + 'grange-linen-dress-stripe.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96686]', () => {
    cy.visit('/' + 'jesse-midi-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96687]', () => {
    cy.visit('/' + 'mike-peasant-dress-cadet-blue.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96688]', () => {
    cy.visit('/' + 'gavin-maxi-dress-cadet-blue.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96689]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'clothing/tops.html')
  })

  it('URL redirect for [96690]', () => {
    cy.visit('/' + 'medium-slip-cadet-blue.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96691]', () => {
    cy.visit('/' + 'hazelton-cropped-jumpsuit.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [96692]', () => {
    cy.visit('/' + 'peta-leggings-black.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96693]', () => {
    cy.visit('/' + 'peonies-garden-blouse-multi.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96694]', () => {
    cy.visit('/' + 'garden-cold-shoulder.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96695]', () => {
    cy.visit('/' + 'garden-cold-shoulder.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96696]', () => {
    cy.visit('/' + 'peonies-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96697]', () => {
    cy.visit('/' + 'peonies-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96698]', () => {
    cy.visit('/' + 'marietta-blouse-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96699]', () => {
    cy.visit('/' + 'marietta-blouse-cloudy-skies.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96700]', () => {
    cy.visit('/' + 'dani-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96701]', () => {
    cy.visit('/' + 'dani-top-french-blue.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96702]', () => {
    cy.visit('/' + 'jeli-gauze-top.html')
    cy.url().should('include', '/' + '.html')
  })

  it('URL redirect for [96703]', () => {
    cy.visit('/' + 'skinny-rinse.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96704]', () => {
    cy.visit('/' + 'briar-linen-shorts-black.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96705]', () => {
    cy.visit('/' + 'briar-linen-short-voltage.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96712]', () => {
    cy.visit('/' + 'briar-linen-shorts-cmf.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [96713]', () => {
    cy.visit('/' + 'soven-hooded-duster-nvy.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96714]', () => {
    cy.visit('/' + 'griston-hooded-cardigan-light-beige.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [96715]', () => {
    cy.visit('/' + 'tanya-tonal-blouse-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96716]', () => {
    cy.visit('/' + 'forest-blouse-multi.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96718]', () => {
    cy.visit('/' + 'garden-cold-shoulder-multib.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96720]', () => {
    cy.visit('/' + 'alaura-blouse-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96721]', () => {
    cy.visit('/' + 'oranda-mexican-shift-tunic-dress-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96723]', () => {
    cy.visit('/' + 'marietta-button-down-tunic-black.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96725]', () => {
    cy.visit('/' + 'hazelton-linen-bolero-voltage.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96726]', () => {
    cy.visit('/' + 'walter-top-lined-multi.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96727]', () => {
    cy.visit('/' + 'travis-ruffle-blouse-lined-multi.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96728]', () => {
    cy.visit('/' + 'jude-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96729]', () => {
    cy.visit('/' + 'short-slip-cloud.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [96730]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96731]', () => {
    cy.visit('/' + 'shea-peasant-blouse-grey.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96733]', () => {
    cy.visit('/' + 'travis-ruffle-sleeveless-blouse.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96735]', () => {
    cy.visit('/' + 'dina-top-cherry.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96736]', () => {
    cy.visit('/' + 'alaura-blouse-black.html')
    cy.url().should('include', '/' + 'clothing/tops/blouses.html')
  })

  it('URL redirect for [96737]', () => {
    cy.visit('/' + 'alaura-blouse-black.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96750]', () => {
    cy.visit('/' + 'emma-italian-leather-sandal.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96805]', () => {
    cy.visit('/' + 'ariza-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [96806]', () => {
    cy.visit('/' + 'c14018-5-mti-o-s-multi-xs.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [96807]', () => {
    cy.visit('/' + 'c14018-5-mti-o-s-multi-s.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [96808]', () => {
    cy.visit('/' + 'c14018-5-mti-o-s-multi-m.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [96809]', () => {
    cy.visit('/' + 'c14018-5-mti-o-s-multi-l.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [96810]', () => {
    cy.visit('/' + 'c14018-5-mti-o-s-multi-xl.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [96811]', () => {
    cy.visit('/' + 'c14018-5-mti-o-s-multi-xxl.html')
    cy.url().should('include', '/' + 'clothing/outerwear.html')
  })

  it('URL redirect for [96818]', () => {
    cy.visit('/' + 'ariza-necklace-black.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96819]', () => {
    cy.visit('/' + 'ariza-necklace-natural.html')
    cy.url().should('include', '/' + 'accessories/jewelry.html')
  })

  it('URL redirect for [96822]', () => {
    cy.visit('/' + 'adura-bracelet-grey.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [96824]', () => {
    cy.visit('/' + 'avri-necklace.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96825]', () => {
    cy.visit('/' + 'jacque-blouse-multi.html')
    cy.url().should('include', '/' + 'clothing/tops.html')
  })

  it('URL redirect for [96826]', () => {
    cy.visit('/' + 'briyah-pant.html')
    cy.url().should('include', '/' + 'sale/shop-by-discount/over-70-off.html')
  })

  it('URL redirect for [96830]', () => {
    cy.visit('/' + 'fiska-flare-sleeve-blouse.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [96839]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-ring-lh0027-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [96840]', () => {
    cy.visit('/' + '14k-gold-custom-large-golden-heart-with-star-set-diamond-lh0011-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [96841]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-sprinkled-diamonds-lh0030-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [96842]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-single-ruby-lh0028-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })
  
})