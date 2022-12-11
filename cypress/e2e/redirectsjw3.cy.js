/// <reference types="cypress" />

describe('URL redirect - Step 3', {
  "retries": 1
}, () => {

  it('URL redirect for [65116]', () => {
    cy.visit('/'+'leith-velvet-bolero.html')
    cy.url().should('include', '/'+'sale/jwla.html')
  })
  
  it('URL redirect for [65117]', () => {
    cy.visit('/'+'aspen-velvet-scarf-back-tee.html')
    cy.url().should('include', '/'+'sale/jwla.html')
  })
  
  it('URL redirect for [65118]', () => {
    cy.visit('/'+'aspen-legging.html')
    cy.url().should('include', '/'+'clothing/bottoms/legging.html')
  })
  
  it('URL redirect for [65119]', () => {
    cy.visit('/'+'aspen-legging-1.html')
    cy.url().should('include', '/'+'clothing/bottoms/legging.html')
  })
  
  it('URL redirect for [65120]', () => {
    cy.visit('/'+'leith-woven-panel-tunic.html')
    cy.url().should('include', '/'+'sale/jwla.html')
  })
  
  it('URL redirect for [65121]', () => {
    cy.visit('/'+'eleanor-velvet-drape-top.html')
    cy.url().should('include', '/'+'sale/jwla.html')
  })
  
  it('URL redirect for [65122]', () => {
    cy.visit('/'+'magdalene-velvet-midi-coat.html')
    cy.url().should('include', '/'+'sale/jwla.html')
  })
  
  it('URL redirect for [65123]', () => {
    cy.visit('/'+'eleanor-velvet-midi-slip-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65124]', () => {
    cy.visit('/'+'magdalene-velvet-prarie-dress.html')
    cy.url().should('include', '/'+'sale/jwla.html')
  })
  
  it('URL redirect for [65125]', () => {
    cy.visit('/'+'aspen-weekend-bag.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65126]', () => {
    cy.visit('/'+'aspen-weekend-bag-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65127]', () => {
    cy.visit('/'+'leith-velvet-tote-bag.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65128]', () => {
    cy.visit('/'+'leith-velvet-tote-bag-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65129]', () => {
    cy.visit('/'+'palazzo-pants.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65130]', () => {
    cy.visit('/'+'terre-velvet-embroidered-back-shirt.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65131]', () => {
    cy.visit('/'+'valea-peasant-button-down-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65132]', () => {
    cy.visit('/'+'alaric-velvet-mix-boho-blouse.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65133]', () => {
    cy.visit('/'+'alaric-velvet-mix-boho-blouse-1.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65134]', () => {
    cy.visit('/'+'valea-long-sleeve-hi-lo-basic-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65135]', () => {
    cy.visit('/'+'mica-laceup-henley-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65136]', () => {
    cy.visit('/'+'mica-button-back-shirt.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65137]', () => {
    cy.visit('/'+'mica-button-back-shirt-1.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65138]', () => {
    cy.visit('/'+'valea-jogger-pant.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65139]', () => {
    cy.visit('/'+'mica-drawstring-military-coat.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65140]', () => {
    cy.visit('/'+'alaric-yoke-peasant-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65141]', () => {
    cy.visit('/'+'terre-weekend-bag.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65142]', () => {
    cy.visit('/'+'laceup-swing-blouse.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65143]', () => {
    cy.visit('/'+'dragon-bomber.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65144]', () => {
    cy.visit('/'+'velvet-mix-prairie-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65145]', () => {
    cy.visit('/'+'otis-velvet-tunic.html')
    cy.url().should('include', '/'+'sale/biya.html')
  })
  
  it('URL redirect for [65146]', () => {
    cy.visit('/'+'edna-chiffon-top.html')
    cy.url().should('include', '/'+'sale/biya.html')
  })
  
  it('URL redirect for [65147]', () => {
    cy.visit('/'+'bora-silk-dress-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65148]', () => {
    cy.visit('/'+'althea-silk-dress.html')
    cy.url().should('include', '/'+'sale/biya.html')
  })
  
  it('URL redirect for [65149]', () => {
    cy.visit('/'+'wishmor-silk-tunic.html')
    cy.url().should('include', '/'+'sale/biya.html')
  })
  
  it('URL redirect for [65150]', () => {
    cy.visit('/'+'wishmor-silk-tunic-1.html')
    cy.url().should('include', '/'+'sale/biya.html')
  })
  
  it('URL redirect for [65151]', () => {
    cy.visit('/'+'ritner-long-hoodie.html')
    cy.url().should('include', '/'+'sale/biya.html')
  })
  
  it('URL redirect for [65152]', () => {
    cy.visit('/'+'ritner-long-hoodie-1.html')
    cy.url().should('include', '/'+'sale/biya.html')
  })
  
  it('URL redirect for [65153]', () => {
    cy.visit('/'+'lanna-long-hoodie.html')
    cy.url().should('include', '/'+'sale/biya.html')
  })
  
  it('URL redirect for [65154]', () => {
    cy.visit('/'+'whalin-long-hoodie.html')
    cy.url().should('include', '/'+'sale/biya.html')
  })
  
  it('URL redirect for [65155]', () => {
    cy.visit('/'+'bavin-suede-coat.html')
    cy.url().should('include', '/'+'sale/biya.html')
  })
  
  it('URL redirect for [65156]', () => {
    cy.visit('/'+'sabineth-velvet-shirt.html')
    cy.url().should('include', '/'+'sale/pete-and-greta.html')
  })
  
  it('URL redirect for [65157]', () => {
    cy.visit('/'+'mincey-velvet-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65159]', () => {
    cy.visit('/'+'zeppa-knit-cardigan.html')
    cy.url().should('include', '/'+'sale/pete-and-greta.html')
  })
  
  it('URL redirect for [65160]', () => {
    cy.visit('/'+'rimmel-knit-top.html')
    cy.url().should('include', '/'+'sale/pete-and-greta.html')
  })
  
  it('URL redirect for [65162]', () => {
    cy.visit('/'+'gemma-convertible-cluth.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65163]', () => {
    cy.visit('/'+'ariana-fringed-tote.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65164]', () => {
    cy.visit('/'+'alessandra-laminated-suede-handbag.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65165]', () => {
    cy.visit('/'+'elisa-laminated-suede-wristlet.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65166]', () => {
    cy.visit('/'+'elisa-laminated-suede-wristlet-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65167]', () => {
    cy.visit('/'+'elisa-laminated-suede-wristlet-2.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65168]', () => {
    cy.visit('/'+'bella-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65169]', () => {
    cy.visit('/'+'florance-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65170]', () => {
    cy.visit('/'+'one-of-a-kind-necklace-9.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65171]', () => {
    cy.visit('/'+'elephant-coin-charm-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65172]', () => {
    cy.visit('/'+'moonstone-pendant.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65173]', () => {
    cy.visit('/'+'butterfly-charm-hoop.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65174]', () => {
    cy.visit('/'+'emerald-pendant.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65175]', () => {
    cy.visit('/'+'sarabeth-tunic-3.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [65176]', () => {
    cy.visit('/'+'papillon-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65177]', () => {
    cy.visit('/'+'black-velvet-embroidered-skinny-jean.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65178]', () => {
    cy.visit('/'+'mackillop-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65179]', () => {
    cy.visit('/'+'erskine-top.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65180]', () => {
    cy.visit('/'+'arbuthnott-top.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [65181]', () => {
    cy.visit('/'+'canna-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65182]', () => {
    cy.visit('/'+'dima-pant.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65184]', () => {
    cy.visit('/'+'lucy-easy-v-neck-top.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65406]', () => {
    cy.visit('/'+'short-slip-with-lace-l14917-blk-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65411]', () => {
    cy.visit('/'+'short-slip-with-lace-l14917-ecr-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65412]', () => {
    cy.visit('/'+'short-slip-with-lace-l14917-ecr-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65413]', () => {
    cy.visit('/'+'short-slip-with-lace-l14917-ecr-m.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65414]', () => {
    cy.visit('/'+'short-slip-with-lace-l14917-ecr-l.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65416]', () => {
    cy.visit('/'+'short-slip-with-lace-l14917-plm-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65417]', () => {
    cy.visit('/'+'short-slip-with-lace-l14917-plm-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65418]', () => {
    cy.visit('/'+'short-slip-with-lace-l14917-plm-m.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65419]', () => {
    cy.visit('/'+'short-slip-with-lace-l14917-plm-l.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65429]', () => {
    cy.visit('/'+'medium-slip-with-lace-l15017-ecr-l.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65431]', () => {
    cy.visit('/'+'medium-slip-with-lace-l15017-plm-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65432]', () => {
    cy.visit('/'+'medium-slip-with-lace-l15017-plm-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65433]', () => {
    cy.visit('/'+'medium-slip-with-lace-l15017-plm-m.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65434]', () => {
    cy.visit('/'+'medium-slip-with-lace-l15017-plm-l.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65435]', () => {
    cy.visit('/'+'medium-slip-with-lace-l15017-plm-xl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65476]', () => {
    cy.visit('/'+'aspen-velvet-scarf-back-tee-j14017-blk-xs.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65477]', () => {
    cy.visit('/'+'aspen-velvet-scarf-back-tee-j14017-blk-s.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65478]', () => {
    cy.visit('/'+'aspen-velvet-scarf-back-tee-j14017-blk-m.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65479]', () => {
    cy.visit('/'+'aspen-velvet-scarf-back-tee-j14017-blk-l.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65480]', () => {
    cy.visit('/'+'aspen-velvet-scarf-back-tee-j14017-blk-xl.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65481]', () => {
    cy.visit('/'+'aspen-velvet-scarf-back-tee-j14017-blk-xxl.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65702]', () => {
    cy.visit('/'+'elephant-coin-charm-necklace-lh0110-18kgld-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65714]', () => {
    cy.visit('/'+'black-velvet-embroidered-skinny-jean-jwd1010-blkrs-26.html')
    cy.url().should('include', '/'+'clothing/bottoms/denim.html')
  })
  
  it('URL redirect for [65757]', () => {
    cy.visit('/'+'gemma-covertible-clutch.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65759]', () => {
    cy.visit('/'+'gemma-convertible-clutch-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65761]', () => {
    cy.visit('/'+'ariana-fringed-tote.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65773]', () => {
    cy.visit('/'+'tana-belt-necklace-2.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65775]', () => {
    cy.visit('/'+'one-of-a-kind-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65777]', () => {
    cy.visit('/'+'jezabelle-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65781]', () => {
    cy.visit('/'+'reversible-stocking.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65782]', () => {
    cy.visit('/'+'roma-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65783]', () => {
    cy.visit('/'+'roma-tunic-plus-size-1.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65784]', () => {
    cy.visit('/'+'kayo-kimono-plus-size.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65785]', () => {
    cy.visit('/'+'araxi-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65788]', () => {
    cy.visit('/'+'blossom-blouse-plus-size-1.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65793]', () => {
    cy.visit('/'+'wishing-blouse-plus-size.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65794]', () => {
    cy.visit('/'+'julian-blazer-plus-size.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65795]', () => {
    cy.visit('/'+'magdalene-velvet-midi-coat-plus-size.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65796]', () => {
    cy.visit('/'+'magdalene-long-sleeve-thermal-plus-size.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65797]', () => {
    cy.visit('/'+'magdalene-long-sleeve-thermal-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65799]', () => {
    cy.visit('/'+'aspen-legging-plus-size.html')
    cy.url().should('include', '/'+'clothing/bottoms/legging.html')
  })
  
  it('URL redirect for [65800]', () => {
    cy.visit('/'+'leith-woven-panel-plus-size.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65802]', () => {
    cy.visit('/'+'aspen-velvet-scarf-back-tee-plus-size.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65863]', () => {
    cy.visit('/'+'aspen-velvet-scarf-back-tee-j14017x-blk-1x.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65864]', () => {
    cy.visit('/'+'aspen-velvet-scarf-back-tee-j14017x-blk-2x.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65865]', () => {
    cy.visit('/'+'aspen-velvet-scarf-back-tee-j14017x-blk-3x.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65866]', () => {
    cy.visit('/'+'tasseled-cashmere-wrap.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [65867]', () => {
    cy.visit('/'+'tasseled-cashmere-wrap-1.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [65868]', () => {
    cy.visit('/'+'tasseled-cashmere-wrap-2.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [65869]', () => {
    cy.visit('/'+'calme-layering-tee.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [65870]', () => {
    cy.visit('/'+'calme-wide-leg-knit-pant.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [65871]', () => {
    cy.visit('/'+'snake-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65872]', () => {
    cy.visit('/'+'crescent-and-arrow-charm-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65873]', () => {
    cy.visit('/'+'tusk-and-star-charm-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65875]', () => {
    cy.visit('/'+'grey-moonstone-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65876]', () => {
    cy.visit('/'+'tusk-charm-hoop.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65879]', () => {
    cy.visit('/'+'leaf-charm-hoop.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65882]', () => {
    cy.visit('/'+'marsala-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65883]', () => {
    cy.visit('/'+'marsala-scarf-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65884]', () => {
    cy.visit('/'+'mantis-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65885]', () => {
    cy.visit('/'+'mantis-scarf-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65886]', () => {
    cy.visit('/'+'buddy-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65887]', () => {
    cy.visit('/'+'nettare-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65888]', () => {
    cy.visit('/'+'namibia-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65889]', () => {
    cy.visit('/'+'tadora-scarf.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65890]', () => {
    cy.visit('/'+'tie-dye-scarf-2.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65891]', () => {
    cy.visit('/'+'tie-dye-cardigan.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [65892]', () => {
    cy.visit('/'+'botanical-patchwork-pillow.html')
    cy.url().should('include', '/'+'accessories/home.html')
  })
  
  it('URL redirect for [65893]', () => {
    cy.visit('/'+'forrest-velvet-pillow.html')
    cy.url().should('include', '/'+'accessories/home.html')
  })
  
  it('URL redirect for [65894]', () => {
    cy.visit('/'+'johnny-was-long-cozy-cardigan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65898]', () => {
    cy.visit('/'+'calme-layering-tee-o10617-wht-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [65910]', () => {
    cy.visit('/'+'snake-necklace-lh0115-18kgld-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65911]', () => {
    cy.visit('/'+'crescent-and-arrow-charm-necklace-lh0112-18kgld-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65915]', () => {
    cy.visit('/'+'tusk-charm-hoop-lh0119-gldv-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65918]', () => {
    cy.visit('/'+'leaf-charm-hoop-lh0118-gldv-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65921]', () => {
    cy.visit('/'+'marsala-scarf-r090117-grey-os.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65922]', () => {
    cy.visit('/'+'marsala-scarf-r090117-sage-os.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65923]', () => {
    cy.visit('/'+'mantis-scarf-r090217-aza-os.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65924]', () => {
    cy.visit('/'+'mantis-scarf-r090217-indg-os.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65925]', () => {
    cy.visit('/'+'buddy-scarf-r090317-taup-os.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65926]', () => {
    cy.visit('/'+'nettare-scarf-r090417-blk-os.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65927]', () => {
    cy.visit('/'+'namibia-scarf-r0905017-rose-os.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65928]', () => {
    cy.visit('/'+'tadora-scarf-r090617-aqua-os.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65944]', () => {
    cy.visit('/'+'namibia-scarf-r090517-rose-os.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [65945]', () => {
    cy.visit('/'+'feather-earrings-with-turquoise-bezel.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65946]', () => {
    cy.visit('/'+'large-feather-cuff-with-turquoise-bezel.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65947]', () => {
    cy.visit('/'+'feather-ring-with-turqouise-bezel.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65948]', () => {
    cy.visit('/'+'feather-necklace-with-turquoise-bezel.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65949]', () => {
    cy.visit('/'+'feather-necklace-with-tourmaline.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65950]', () => {
    cy.visit('/'+'snake-charm-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65951]', () => {
    cy.visit('/'+'dragonfly-charm-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65952]', () => {
    cy.visit('/'+'large-moonstone-pendent.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65953]', () => {
    cy.visit('/'+'emerald-pendent.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [65954]', () => {
    cy.visit('/'+'double-star-moon-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65955]', () => {
    cy.visit('/'+'oval-turquoise-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65956]', () => {
    cy.visit('/'+'oval-turquoise-earrings.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65957]', () => {
    cy.visit('/'+'north-star-lariat.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65958]', () => {
    cy.visit('/'+'grey-moonstone-drop-earrings.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65959]', () => {
    cy.visit('/'+'butterfly-ring.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65960]', () => {
    cy.visit('/'+'butterfly-split-ring-with-diamonds.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [65961]', () => {
    cy.visit('/'+'organic-moonstone-ring.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65962]', () => {
    cy.visit('/'+'feather-earrings-with-turquoise-bezel-lh0105-18kgld-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65963]', () => {
    cy.visit('/'+'large-feather-cuff-with-turquoise-bezel-lh0106-18kgld-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65964]', () => {
    cy.visit('/'+'feather-ring-with-turquoise-bezel-lh0107-18kgld-6.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65965]', () => {
    cy.visit('/'+'feather-ring-with-turquoise-bezel-lh0107-18kgld-7.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65966]', () => {
    cy.visit('/'+'feather-ring-with-turquoise-bezel-lh0107-18kgld-8.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65967]', () => {
    cy.visit('/'+'feather-ring-with-turquoise-bezel-lh0107-18kgld-9.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65968]', () => {
    cy.visit('/'+'feather-necklace-with-turquoise-bezel.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65969]', () => {
    cy.visit('/'+'feather-necklace-with-tourmaline-lh0109-18kgld-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65970]', () => {
    cy.visit('/'+'snake-charm-necklace-lh0113-18kgld-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65974]', () => {
    cy.visit('/'+'double-star-moon-necklace-lh0124-18kgld-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65977]', () => {
    cy.visit('/'+'north-star-lariat-lh0127-18kgld-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65979]', () => {
    cy.visit('/'+'butterfly-ring-lh0130-18kgld-6.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65980]', () => {
    cy.visit('/'+'butterfly-ring-lh0130-18kgld-7.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65981]', () => {
    cy.visit('/'+'butterfly-ring-lh0130-18kgld-8.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65982]', () => {
    cy.visit('/'+'butterfly-ring-lh0130-18kgld-9.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65983]', () => {
    cy.visit('/'+'butterfly-split-ring-with-diamonds-lh0131-14kgld-6.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65984]', () => {
    cy.visit('/'+'butterfly-split-ring-with-diamonds-lh0131-14kgld-7.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65985]', () => {
    cy.visit('/'+'butterfly-split-ring-with-diamonds-lh0131-14kgld-8.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65986]', () => {
    cy.visit('/'+'butterfly-split-ring-with-diamonds-lh0131-14kgld-9.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65987]', () => {
    cy.visit('/'+'organic-moonstone-ring-lh0132-silver-6.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65988]', () => {
    cy.visit('/'+'organic-moonstone-ring-lh0132-silver-7.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65989]', () => {
    cy.visit('/'+'organic-moonstone-ring-lh0132-silver-8.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65990]', () => {
    cy.visit('/'+'organic-moonstone-ring-lh0132-silver-9.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [65993]', () => {
    cy.visit('/'+'velvet-dreamer-pillow.html')
    cy.url().should('include', '/'+'accessories/home.html')
  })
  
  it('URL redirect for [65995]', () => {
    cy.visit('/'+'kiki-drape-top-1.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65996]', () => {
    cy.visit('/'+'kealan-easy-v-neck-dress-1.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [65997]', () => {
    cy.visit('/'+'nindi-cold-shoulder-tunic-1.html')
    cy.url().should('include', '/'+'sale/jwla.html')
  })
  
  it('URL redirect for [65998]', () => {
    cy.visit('/'+'emilia-legging-2.html')
    cy.url().should('include', '/'+'clothing/jwla.html')
  })
  
  it('URL redirect for [65999]', () => {
    cy.visit('/'+'sheesoh-blouse-2.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [66001]', () => {
    cy.visit('/'+'stargaze-flare-top-2.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [66003]', () => {
    cy.visit('/'+'lorenna-short-hoodie-2.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [66050]', () => {
    cy.visit('/'+'khellanie-kimono.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66052]', () => {
    cy.visit('/'+'khellanie-kimono-1.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66054]', () => {
    cy.visit('/'+'khellanie-kimono-2.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66056]', () => {
    cy.visit('/'+'khellanie-kimono-3.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66057]', () => {
    cy.visit('/'+'long-knit-tank.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66058]', () => {
    cy.visit('/'+'long-knit-tank-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66059]', () => {
    cy.visit('/'+'long-knit-tank-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66060]', () => {
    cy.visit('/'+'long-knit-tank-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66061]', () => {
    cy.visit('/'+'knit-tank-4.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [66062]', () => {
    cy.visit('/'+'knit-tank-5.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [66063]', () => {
    cy.visit('/'+'knit-tank-6.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [66064]', () => {
    cy.visit('/'+'knit-tank.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [66065]', () => {
    cy.visit('/'+'flower-patch-button-down-tank.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66066]', () => {
    cy.visit('/'+'flower-patch-button-down-tank-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66067]', () => {
    cy.visit('/'+'botanica-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66068]', () => {
    cy.visit('/'+'salinas-poncho.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66069]', () => {
    cy.visit('/'+'sophia-princess-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66070]', () => {
    cy.visit('/'+'sophia-princess-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66071]', () => {
    cy.visit('/'+'sophia-princess-top-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66072]', () => {
    cy.visit('/'+'sibyll-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66073]', () => {
    cy.visit('/'+'sibyll-blouse-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66074]', () => {
    cy.visit('/'+'sibyll-blouse-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66075]', () => {
    cy.visit('/'+'seeroon-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66076]', () => {
    cy.visit('/'+'seeroon-blouse-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66077]', () => {
    cy.visit('/'+'seeroon-blouse-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66078]', () => {
    cy.visit('/'+'charming-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66079]', () => {
    cy.visit('/'+'mishka-button-down.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66080]', () => {
    cy.visit('/'+'dolce-drapey-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66081]', () => {
    cy.visit('/'+'dolce-drapey-top-1.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [66082]', () => {
    cy.visit('/'+'eros-blue-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66083]', () => {
    cy.visit('/'+'eros-blue-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66084]', () => {
    cy.visit('/'+'patchwork-sleeve-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66085]', () => {
    cy.visit('/'+'patchwork-sleeve-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66086]', () => {
    cy.visit('/'+'patchwork-sleeve-tunic-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66087]', () => {
    cy.visit('/'+'cage-flare-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66088]', () => {
    cy.visit('/'+'cage-flare-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66089]', () => {
    cy.visit('/'+'pavo-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66090]', () => {
    cy.visit('/'+'playa-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66091]', () => {
    cy.visit('/'+'playa-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66092]', () => {
    cy.visit('/'+'playa-tunic-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66093]', () => {
    cy.visit('/'+'basille-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66094]', () => {
    cy.visit('/'+'basille-dress-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66095]', () => {
    cy.visit('/'+'averette-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66096]', () => {
    cy.visit('/'+'camuba-heaven-kimono-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66097]', () => {
    cy.visit('/'+'cage-with-flowers-jacket.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66098]', () => {
    cy.visit('/'+'cage-with-flowers-jacket-1.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66099]', () => {
    cy.visit('/'+'rosmishka-kimono.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66100]', () => {
    cy.visit('/'+'mishka-rose-embroidery-kimono.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66101]', () => {
    cy.visit('/'+'rosey-pant.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [66102]', () => {
    cy.visit('/'+'rosey-pant-1.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [66103]', () => {
    cy.visit('/'+'stretch-eyelet-legging-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66104]', () => {
    cy.visit('/'+'boutique-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66105]', () => {
    cy.visit('/'+'lacey-border-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66106]', () => {
    cy.visit('/'+'avery-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66107]', () => {
    cy.visit('/'+'puzzle-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66108]', () => {
    cy.visit('/'+'salina-scarf.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [66109]', () => {
    cy.visit('/'+'tiwa-market-tote.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66110]', () => {
    cy.visit('/'+'tiwa-market-tote-1.html')
    cy.url().should('include', '/'+'accessories/handbags.html')
  })
  
  it('URL redirect for [66111]', () => {
    cy.visit('/'+'langley-weekend-bag.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66112]', () => {
    cy.visit('/'+'langley-weekend-bag-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66113]', () => {
    cy.visit('/'+'tiwa-peasant-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66114]', () => {
    cy.visit('/'+'tiwa-peasant-blouse-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66115]', () => {
    cy.visit('/'+'tiwa-peasant-blouse-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66116]', () => {
    cy.visit('/'+'sean-knit-drape-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66117]', () => {
    cy.visit('/'+'sean-knit-drape-top-1.html')
    cy.url().should('include', '/'+'clothing/jwla.html')
  })
  
  it('URL redirect for [66118]', () => {
    cy.visit('/'+'annika-laceup-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66119]', () => {
    cy.visit('/'+'annika-laceup-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66120]', () => {
    cy.visit('/'+'tiwa-draped-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66121]', () => {
    cy.visit('/'+'annika-button-down-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66122]', () => {
    cy.visit('/'+'langley-casual-hooded-tunic.html')
    cy.url().should('include', '/'+'clothing/jwla.html')
  })
  
  it('URL redirect for [66123]', () => {
    cy.visit('/'+'sean-peasant-djellaba.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66124]', () => {
    cy.visit('/'+'tiwa-heavy-linen-coat.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66125]', () => {
    cy.visit('/'+'sean-linen-jogger.html')
    cy.url().should('include', '/'+'clothing/jwla.html')
  })
  
  it('URL redirect for [66126]', () => {
    cy.visit('/'+'langley-legging.html')
    cy.url().should('include', '/'+'clothing/jwla.html')
  })
  
  it('URL redirect for [66127]', () => {
    cy.visit('/'+'langley-legging-1.html')
    cy.url().should('include', '/'+'clothing/jwla.html')
  })
  
  it('URL redirect for [66128]', () => {
    cy.visit('/'+'boho-blouse.html')
    cy.url().should('include', '/'+'clothing/3j-workshop.html')
  })
  
  it('URL redirect for [66129]', () => {
    cy.visit('/'+'misha-drape-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66130]', () => {
    cy.visit('/'+'freddie-flare-sleeve-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66131]', () => {
    cy.visit('/'+'misha-embroiered-back-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66132]', () => {
    cy.visit('/'+'pratt-basic-shirt.html')
    cy.url().should('include', '/'+'clothing/3j-workshop.html')
  })
  
  it('URL redirect for [66133]', () => {
    cy.visit('/'+'nadia-peasant-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66134]', () => {
    cy.visit('/'+'nadia-peasant-blouse-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66135]', () => {
    cy.visit('/'+'nadia-peasant-tank-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66136]', () => {
    cy.visit('/'+'mexican-tier-dress.html')
    cy.url().should('include', '/'+'clothing/3j-workshop.html')
  })
  
  it('URL redirect for [66137]', () => {
    cy.visit('/'+'nadia-bomber-jacket.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66138]', () => {
    cy.visit('/'+'tier-palazzo-pant.html')
    cy.url().should('include', '/'+'clothing/3j-workshop.html')
  })
  
  it('URL redirect for [66139]', () => {
    cy.visit('/'+'hana-tiered-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66140]', () => {
    cy.visit('/'+'eri-off-the-shoulder-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66141]', () => {
    cy.visit('/'+'short-slip-41.html')
    cy.url().should('include', '/'+'clothing/tops.html')
  })
  
  it('URL redirect for [66142]', () => {
    cy.visit('/'+'short-slip-42.html')
    cy.url().should('include', '/'+'clothing/tops.html')
  })
  
  it('URL redirect for [66143]', () => {
    cy.visit('/'+'medium-slip-31.html')
    cy.url().should('include', '/'+'clothing/tops/slips.html')
  })
  
  it('URL redirect for [66144]', () => {
    cy.visit('/'+'medium-slip.html')
    cy.url().should('include', '/'+'clothing/tops/slips.html')
  })
  
  it('URL redirect for [66145]', () => {
    cy.visit('/'+'leiko-mesh-tee.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [66146]', () => {
    cy.visit('/'+'amaya-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66147]', () => {
    cy.visit('/'+'ima-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66148]', () => {
    cy.visit('/'+'emiko-maxi-dress.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [66149]', () => {
    cy.visit('/'+'kiko-midi-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66150]', () => {
    cy.visit('/'+'rai-lace-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66151]', () => {
    cy.visit('/'+'rai-lace-dress-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66152]', () => {
    cy.visit('/'+'mireya-challis-blouse.html')
    cy.url().should('include', '/'+'clothing/biya.html')
  })
  
  it('URL redirect for [66153]', () => {
    cy.visit('/'+'georgina-cotton-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66154]', () => {
    cy.visit('/'+'georgina-cotton-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66155]', () => {
    cy.visit('/'+'burnette-mesh-dress.html')
    cy.url().should('include', '/'+'clothing/biya.html')
  })
  
  it('URL redirect for [66156]', () => {
    cy.visit('/'+'yalen-wrap.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66157]', () => {
    cy.visit('/'+'ruedebec-short-wrap.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66158]', () => {
    cy.visit('/'+'ruedebec-short-wrap-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66159]', () => {
    cy.visit('/'+'kaleid-hooded-duster.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66160]', () => {
    cy.visit('/'+'alton-mix-tank.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66161]', () => {
    cy.visit('/'+'alton-mix-tank-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66162]', () => {
    cy.visit('/'+'genoa-mix-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66163]', () => {
    cy.visit('/'+'dolenne-silk-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66164]', () => {
    cy.visit('/'+'odell-gauze-top.html')
    cy.url().should('include', '/'+'clothing/pete-and-greta.html')
  })
  
  it('URL redirect for [66165]', () => {
    cy.visit('/'+'odell-gauze-top-1.html')
    cy.url().should('include', '/'+'clothing/pete-and-greta.html')
  })
  
  it('URL redirect for [66166]', () => {
    cy.visit('/'+'wiltern-jogger-pant.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66286]', () => {
    cy.visit('/'+'long-knit-tank-c11217-wht-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66289]', () => {
    cy.visit('/'+'long-knit-tank-c11217-wht-xl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66290]', () => {
    cy.visit('/'+'long-knit-tank-c11217-wht-xxl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66291]', () => {
    cy.visit('/'+'long-knit-tank-c11217-bln-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66292]', () => {
    cy.visit('/'+'long-knit-tank-c11217-bln-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66294]', () => {
    cy.visit('/'+'long-knit-tank-c11217-bln-l.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66295]', () => {
    cy.visit('/'+'long-knit-tank-c11217-bln-xl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66297]', () => {
    cy.visit('/'+'long-knit-tank-c11217-grh-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66298]', () => {
    cy.visit('/'+'long-knit-tank-c11217-grh-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66301]', () => {
    cy.visit('/'+'long-knit-tank-c11217-grh-xl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66302]', () => {
    cy.visit('/'+'long-knit-tank-c11217-grh-xxl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66303]', () => {
    cy.visit('/'+'long-knit-tank-c11217-blk-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66308]', () => {
    cy.visit('/'+'long-knit-tank-c11217-blk-xxl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66309]', () => {
    cy.visit('/'+'knit-tank-c11317-wht-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66310]', () => {
    cy.visit('/'+'knit-tank-c11317-wht-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66311]', () => {
    cy.visit('/'+'knit-tank-c11317-wht-m.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66312]', () => {
    cy.visit('/'+'knit-tank-c11317-wht-l.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66313]', () => {
    cy.visit('/'+'knit-tank-c11317-wht-xl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66314]', () => {
    cy.visit('/'+'knit-tank-c11317-wht-xxl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66315]', () => {
    cy.visit('/'+'knit-tank-c11317-bln-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66316]', () => {
    cy.visit('/'+'knit-tank-c11317-bln-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66317]', () => {
    cy.visit('/'+'knit-tank-c11317-bln-m.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66318]', () => {
    cy.visit('/'+'knit-tank-c11317-bln-l.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66319]', () => {
    cy.visit('/'+'knit-tank-c11317-bln-xl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66320]', () => {
    cy.visit('/'+'knit-tank-c11317-bln-xxl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66323]', () => {
    cy.visit('/'+'knit-tank-c11317-grh-m.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66324]', () => {
    cy.visit('/'+'knit-tank-c11317-grh-l.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66325]', () => {
    cy.visit('/'+'knit-tank-c11317-grh-xl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66326]', () => {
    cy.visit('/'+'knit-tank-c11317-grh-xxl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66328]', () => {
    cy.visit('/'+'knit-tank-c11317-blk-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66329]', () => {
    cy.visit('/'+'knit-tank-c11317-blk-m.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66331]', () => {
    cy.visit('/'+'knit-tank-c11317-blk-xl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66332]', () => {
    cy.visit('/'+'knit-tank-c11317-blk-xxl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66643]', () => {
    cy.visit('/'+'short-slip-l16017-clo-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66644]', () => {
    cy.visit('/'+'short-slip-l16017-clo-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66645]', () => {
    cy.visit('/'+'short-slip-l16017-clo-m.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66646]', () => {
    cy.visit('/'+'short-slip-l16017-clo-l.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66647]', () => {
    cy.visit('/'+'short-slip-l16017-clo-xl.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66648]', () => {
    cy.visit('/'+'short-slip-l16017-blk-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66734]', () => {
    cy.visit('/'+'sari-scarf-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66735]', () => {
    cy.visit('/'+'native-scarf-b90218s-mti-os.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [66736]', () => {
    cy.visit('/'+'native-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66738]', () => {
    cy.visit('/'+'bazantam-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66740]', () => {
    cy.visit('/'+'callon-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66742]', () => {
    cy.visit('/'+'arte-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66744]', () => {
    cy.visit('/'+'hera-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66746]', () => {
    cy.visit('/'+'maea-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66748]', () => {
    cy.visit('/'+'noir-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66753]', () => {
    cy.visit('/'+'calme-knit-jumper.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [66754]', () => {
    cy.visit('/'+'calme-maxi-a-line-dress.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [66755]', () => {
    cy.visit('/'+'calme-maxi-a-line-dress-1.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [66756]', () => {
    cy.visit('/'+'shibori-short-sleeve-t-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66757]', () => {
    cy.visit('/'+'calme-layering-tee.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [66758]', () => {
    cy.visit('/'+'calme-knit-duster.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66759]', () => {
    cy.visit('/'+'calme-knit-duster-1.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66760]', () => {
    cy.visit('/'+'exotic-garden-peasant-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66761]', () => {
    cy.visit('/'+'windro-silk-top.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [66762]', () => {
    cy.visit('/'+'windro-silk-top-1.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [66763]', () => {
    cy.visit('/'+'samar-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66764]', () => {
    cy.visit('/'+'samar-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66765]', () => {
    cy.visit('/'+'samar-tunic-2.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [66766]', () => {
    cy.visit('/'+'samar-tunic-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66767]', () => {
    cy.visit('/'+'ramble-pant.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66769]', () => {
    cy.visit('/'+'ammy-bag.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66770]', () => {
    cy.visit('/'+'tommy-bag.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66771]', () => {
    cy.visit('/'+'trentina-kimono.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66772]', () => {
    cy.visit('/'+'trentina-kimono-1.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66773]', () => {
    cy.visit('/'+'tie-wrap-cardigan.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66774]', () => {
    cy.visit('/'+'tie-wrap-cardigan-1.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [66775]', () => {
    cy.visit('/'+'easy-tiered-dress.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [66776]', () => {
    cy.visit('/'+'marion-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66777]', () => {
    cy.visit('/'+'bonilla-bracelet.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66778]', () => {
    cy.visit('/'+'magdelena-bracelet.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [66799]', () => {
    cy.visit('/'+'calme-layering-tee-o10617-blk-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66800]', () => {
    cy.visit('/'+'calme-layering-tee-o10617-blk-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66801]', () => {
    cy.visit('/'+'calme-layering-tee-o10617-blk-m.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66867]', () => {
    cy.visit('/'+'mishka-button-down-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66873]', () => {
    cy.visit('/'+'easy-tiered-dress-1.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [66877]', () => {
    cy.visit('/'+'langley-legging-plus-size.html')
    cy.url().should('include', '/'+'clothing/bottoms/legging.html')
  })
  
  it('URL redirect for [66878]', () => {
    cy.visit('/'+'sean-peasant-djellaba-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66880]', () => {
    cy.visit('/'+'annika-swing-dress-plus-size.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66882]', () => {
    cy.visit('/'+'sophia-button-down-blouse-plus-size.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66883]', () => {
    cy.visit('/'+'nova-button-down-plus-size.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66884]', () => {
    cy.visit('/'+'sheradonian-top-plus-size.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66892]', () => {
    cy.visit('/'+'charmrose-long-tunic-plus-size.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [66893]', () => {
    cy.visit('/'+'rosmishka-kimono-plus-size.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets/outerwear-kimonos.html')
  })
  
  it('URL redirect for [66894]', () => {
    cy.visit('/'+'basille-dress-plus-size-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66896]', () => {
    cy.visit('/'+'charming-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66900]', () => {
    cy.visit('/'+'mishka-rose-kimono-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66901]', () => {
    cy.visit('/'+'cage-flare-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66903]', () => {
    cy.visit('/'+'patchwork-sleeve-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [66998]', () => {
    cy.visit('/'+'keya-shine-sneaker.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67004]', () => {
    cy.visit('/'+'esme-wrap.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67005]', () => {
    cy.visit('/'+'aileas-earrings-jwl10117-mti-os.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [67006]', () => {
    cy.visit('/'+'aileas-earrings.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67008]', () => {
    cy.visit('/'+'kai-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67185]', () => {
    cy.visit('/'+'talum-tunic-c26718-bls-xs.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67186]', () => {
    cy.visit('/'+'talum-tunic-c26718-bls-s.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67187]', () => {
    cy.visit('/'+'talum-tunic-c26718-bls-m.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67188]', () => {
    cy.visit('/'+'talum-tunic-c26718-bls-l.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67189]', () => {
    cy.visit('/'+'talum-tunic-c26718-bls-xl.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67190]', () => {
    cy.visit('/'+'talum-tunic-c26718-bls-xxl.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67227]', () => {
    cy.visit('/'+'calla-kimono-c42418-bls-xs.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67228]', () => {
    cy.visit('/'+'calla-kimono-c42418-bls-s.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67229]', () => {
    cy.visit('/'+'calla-kimono-c42418-bls-m.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67230]', () => {
    cy.visit('/'+'calla-kimono-c42418-bls-l.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67231]', () => {
    cy.visit('/'+'calla-kimono-c42418-bls-xl.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67232]', () => {
    cy.visit('/'+'calla-kimono-c42418-bls-xxl.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67404]', () => {
    cy.visit('/'+'short-slip-l17018-clo-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [67405]', () => {
    cy.visit('/'+'short-slip-l17018-clo-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [67406]', () => {
    cy.visit('/'+'short-slip-l17018-clo-m.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [67407]', () => {
    cy.visit('/'+'short-slip-l17018-clo-l.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [67409]', () => {
    cy.visit('/'+'short-slip-l17018-blk-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [67410]', () => {
    cy.visit('/'+'short-slip-l17018-blk-s.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [67414]', () => {
    cy.visit('/'+'medium-slip-l17118-clo-xs.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [67580]', () => {
    cy.visit('/'+'betimo-cold-shoulder.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67581]', () => {
    cy.visit('/'+'betimo-cold-shoulder-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67582]', () => {
    cy.visit('/'+'malakye-cropped-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67583]', () => {
    cy.visit('/'+'malakye-cropped-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67584]', () => {
    cy.visit('/'+'blue-moon-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67585]', () => {
    cy.visit('/'+'blue-moon-blouse-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67586]', () => {
    cy.visit('/'+'valerie-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67587]', () => {
    cy.visit('/'+'valerie-blouse-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67588]', () => {
    cy.visit('/'+'valerie-blouse-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67589]', () => {
    cy.visit('/'+'navi-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67590]', () => {
    cy.visit('/'+'navi-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67591]', () => {
    cy.visit('/'+'kobi-tank.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67592]', () => {
    cy.visit('/'+'kobi-tank-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67593]', () => {
    cy.visit('/'+'kobi-tank-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67594]', () => {
    cy.visit('/'+'charming-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67595]', () => {
    cy.visit('/'+'charming-shirt-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67596]', () => {
    cy.visit('/'+'charming-shirt-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67597]', () => {
    cy.visit('/'+'madeline-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67598]', () => {
    cy.visit('/'+'golding-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67599]', () => {
    cy.visit('/'+'betty-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67600]', () => {
    cy.visit('/'+'lulu-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67601]', () => {
    cy.visit('/'+'lulu-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67602]', () => {
    cy.visit('/'+'kaylyn-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67603]', () => {
    cy.visit('/'+'kaylyn-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67604]', () => {
    cy.visit('/'+'charming-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67605]', () => {
    cy.visit('/'+'charming-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67606]', () => {
    cy.visit('/'+'charming-tunic-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67607]', () => {
    cy.visit('/'+'lillian-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67610]', () => {
    cy.visit('/'+'talum-tunic-graphite.html')
    cy.url().should('include', '/'+'rayon.html')
  })
  
  it('URL redirect for [67611]', () => {
    cy.visit('/'+'talum-tunic-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67612]', () => {
    cy.visit('/'+'forma-handkerchief-tank-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67613]', () => {
    cy.visit('/'+'forma-handkerchief-tank-dress-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67614]', () => {
    cy.visit('/'+'talasi-mona-kimono-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67615]', () => {
    cy.visit('/'+'calla-kimono.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67616]', () => {
    cy.visit('/'+'calla-kimono-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67617]', () => {
    cy.visit('/'+'betimo-embroidery-kimono.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67618]', () => {
    cy.visit('/'+'trim-linen-cropped-pant-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67619]', () => {
    cy.visit('/'+'maya-wrapped-pant.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67620]', () => {
    cy.visit('/'+'epson-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67621]', () => {
    cy.visit('/'+'aratta-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67622]', () => {
    cy.visit('/'+'midleton-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67623]', () => {
    cy.visit('/'+'liya-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67624]', () => {
    cy.visit('/'+'birds-of-paradise-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67625]', () => {
    cy.visit('/'+'izamal-drawstring-tote.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67626]', () => {
    cy.visit('/'+'aliya-tote-bag.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67627]', () => {
    cy.visit('/'+'libbie-drape-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67628]', () => {
    cy.visit('/'+'libbie-drape-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67629]', () => {
    cy.visit('/'+'aliya-deep-scoop-t-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67630]', () => {
    cy.visit('/'+'aliya-shift-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67631]', () => {
    cy.visit('/'+'lei-lei-peasant-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67632]', () => {
    cy.visit('/'+'lei-lei-peasant-tunic-dress-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67633]', () => {
    cy.visit('/'+'izamal-crop-jacket.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [67634]', () => {
    cy.visit('/'+'izamal-zipup-hoodie.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67635]', () => {
    cy.visit('/'+'izamal-zipup-hoodie-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67636]', () => {
    cy.visit('/'+'aliya-draped-cardigan.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [67637]', () => {
    cy.visit('/'+'izamal-side-slit-pant.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67638]', () => {
    cy.visit('/'+'libbie-legging.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67639]', () => {
    cy.visit('/'+'libbie-legging-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67640]', () => {
    cy.visit('/'+'lei-lei-swing-skirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67641]', () => {
    cy.visit('/'+'amal-overnight-bag.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67642]', () => {
    cy.visit('/'+'paris-effortless-top.html')
    cy.url().should('include', '/'+'clothing/3j-workshop.html')
  })
  
  it('URL redirect for [67643]', () => {
    cy.visit('/'+'amal-handkerchief-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67644]', () => {
    cy.visit('/'+'amal-paris-effortless-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67645]', () => {
    cy.visit('/'+'kitti-easy-v-neck-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67646]', () => {
    cy.visit('/'+'brenna-button-back-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67647]', () => {
    cy.visit('/'+'kitti-laceup-swing-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67648]', () => {
    cy.visit('/'+'boho-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67649]', () => {
    cy.visit('/'+'amal-mexican-tier-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67650]', () => {
    cy.visit('/'+'amal-mexican-tier-dress-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67651]', () => {
    cy.visit('/'+'brenna-drawstring-military-jacket.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67652]', () => {
    cy.visit('/'+'desi-denim-jacket.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67653]', () => {
    cy.visit('/'+'julia-poncho.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67654]', () => {
    cy.visit('/'+'julia-poncho-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67655]', () => {
    cy.visit('/'+'camilla-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67656]', () => {
    cy.visit('/'+'hailey-off-the-shoulder.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67657]', () => {
    cy.visit('/'+'hailey-off-the-shoulder-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67658]', () => {
    cy.visit('/'+'short-slip-43.html')
    cy.url().should('include', '/'+'clothing/slips.html')
  })
  
  it('URL redirect for [67659]', () => {
    cy.visit('/'+'short-slip-44.html')
    cy.url().should('include', '/'+'clothing/slips.html')
  })
  
  it('URL redirect for [67660]', () => {
    cy.visit('/'+'medium-slip-33.html')
    cy.url().should('include', '/'+'clothing/tops/slips.html')
  })
  
  it('URL redirect for [67661]', () => {
    cy.visit('/'+'medium-slip-34.html')
    cy.url().should('include', '/'+'clothing/tops/slips.html')
  })
  
  it('URL redirect for [67662]', () => {
    cy.visit('/'+'abby-mesh-tee.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67663]', () => {
    cy.visit('/'+'belle-embroiderd-tee.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [67664]', () => {
    cy.visit('/'+'victoria-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67665]', () => {
    cy.visit('/'+'victoria-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67666]', () => {
    cy.visit('/'+'darcey-maxi-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67667]', () => {
    cy.visit('/'+'grace-maxi-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67668]', () => {
    cy.visit('/'+'grace-maxi-dress-1.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [67669]', () => {
    cy.visit('/'+'joleen-mini-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67670]', () => {
    cy.visit('/'+'joleen-mini-dress-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67671]', () => {
    cy.visit('/'+'haret-silk-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67672]', () => {
    cy.visit('/'+'yoon-challis-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67673]', () => {
    cy.visit('/'+'viki-mesh-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67674]', () => {
    cy.visit('/'+'telerose-hooded-duster.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67675]', () => {
    cy.visit('/'+'yayabetty-hooded-duster.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [67676]', () => {
    cy.visit('/'+'spleo-patchwork-cardigan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67677]', () => {
    cy.visit('/'+'campbell-challis-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67678]', () => {
    cy.visit('/'+'campbell-challis-tunic-dress-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67679]', () => {
    cy.visit('/'+'grange-linen-dress.html')
    cy.url().should('include', '/'+'sale/shop-sale/clothing-sale.html')
  })
  
  it('URL redirect for [67680]', () => {
    cy.visit('/'+'yvonne-crochet-cardigan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67681]', () => {
    cy.visit('/'+'ramble-pull-on-pant.html')
    cy.url().should('include', '/'+'clothing/bottoms/cargos.html')
  })
  
  it('URL redirect for [67682]', () => {
    cy.visit('/'+'ramble-pull-on-pant-1.html')
    cy.url().should('include', '/'+'clothing/bottoms/cargos.html')
  })
  
  it('URL redirect for [67684]', () => {
    cy.visit('/'+'fifi-floral-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67685]', () => {
    cy.visit('/'+'exotic-garden-boho-henley-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67686]', () => {
    cy.visit('/'+'allegra-washed-leather-cross-body-bag-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67688]', () => {
    cy.visit('/'+'tiwa-peasant-blouse-plus-size-1.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [67689]', () => {
    cy.visit('/'+'dinna-slides.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67692]', () => {
    cy.visit('/'+'skinny-rinse-jeans.html')
    cy.url().should('include', '/'+'clothing/bottoms/denim.html')
  })
  
  it('URL redirect for [67695]', () => {
    cy.visit('/'+'johnny-was-long-and-cozy-cardigan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67696]', () => {
    cy.visit('/'+'anna-pom-pom-straw-bag.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67697]', () => {
    cy.visit('/'+'allesandra-fringe-bag.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67698]', () => {
    cy.visit('/'+'kids-silk-wonder-kimono.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [67699]', () => {
    cy.visit('/'+'valentine-shoulder-bag.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67700]', () => {
    cy.visit('/'+'gan-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67701]', () => {
    cy.visit('/'+'copains-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67702]', () => {
    cy.visit('/'+'carmen-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67703]', () => {
    cy.visit('/'+'carmen-necklace-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67704]', () => {
    cy.visit('/'+'carmen-necklace-2.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67705]', () => {
    cy.visit('/'+'carmen-necklace-3.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67706]', () => {
    cy.visit('/'+'clea-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67707]', () => {
    cy.visit('/'+'addu-bracelet.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67708]', () => {
    cy.visit('/'+'eye-pendant.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67709]', () => {
    cy.visit('/'+'eye-pendant.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67710]', () => {
    cy.visit('/'+'eye-pendant-2.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67733]', () => {
    cy.visit('/'+'joveno-cargo-shorts.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67743]', () => {
    cy.visit('/'+'one-a-kind-necklace-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67745]', () => {
    cy.visit('/'+'one-of-a-kind-necklace-12.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67747]', () => {
    cy.visit('/'+'one-of-a-kind-necklace-jwl10817-mti-os-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67749]', () => {
    cy.visit('/'+'ojai-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67751]', () => {
    cy.visit('/'+'ojai-necklace-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67753]', () => {
    cy.visit('/'+'ojai-necklace-2.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67755]', () => {
    cy.visit('/'+'topanga-earrings-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67758]', () => {
    cy.visit('/'+'morganite-pendant-lh0137-mti-os.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [67759]', () => {
    cy.visit('/'+'morganite-pendant.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67761]', () => {
    cy.visit('/'+'morganite-earrings.html')
    cy.url().should('include', '/'+'sale/shop-sale/accessories.html')
  })
  
  it('URL redirect for [67762]', () => {
    cy.visit('/'+'morganite-ring-lh0138-mti-6.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [67763]', () => {
    cy.visit('/'+'morganite-ring-lh0138-mti-7.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [67764]', () => {
    cy.visit('/'+'morganite-ring-lh0138-8.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [67765]', () => {
    cy.visit('/'+'morganite-ring-lh0138-mti-9.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [67766]', () => {
    cy.visit('/'+'morganite-ring.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [67768]', () => {
    cy.visit('/'+'giulia-straw-bag-with-fringe.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67769]', () => {
    cy.visit('/'+'mala-handkerchief-blouse-plus-size.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [67770]', () => {
    cy.visit('/'+'betimo-cold-shoulder-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67771]', () => {
    cy.visit('/'+'blue-moon-blouse-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67772]', () => {
    cy.visit('/'+'valerie-blouse-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67773]', () => {
    cy.visit('/'+'navi-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67774]', () => {
    cy.visit('/'+'kobi-tank-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67775]', () => {
    cy.visit('/'+'madeline-blouse-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67776]', () => {
    cy.visit('/'+'golding-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67777]', () => {
    cy.visit('/'+'betty-blouse-plus-size.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [67778]', () => {
    cy.visit('/'+'kaylyn-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67779]', () => {
    cy.visit('/'+'lillian-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67780]', () => {
    cy.visit('/'+'talum-tunic-plus-size.html')
    cy.url().should('include', '/'+'clothing/tops/tunics.html')
  })
  
  it('URL redirect for [67781]', () => {
    cy.visit('/'+'spring-border-kimono-plus-size.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [67782]', () => {
    cy.visit('/'+'maya-wrapped-pant-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67783]', () => {
    cy.visit('/'+'calla-kimono-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67784]', () => {
    cy.visit('/'+'izamal-tee-plus-size.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [67785]', () => {
    cy.visit('/'+'libbie-drape-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67786]', () => {
    cy.visit('/'+'allya-deep-sccop-tee-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67787]', () => {
    cy.visit('/'+'libbie-easy-tunic-dress-plus-size.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [67788]', () => {
    cy.visit('/'+'allya-shift-tunic-dress-plus-size.html')
    cy.url().should('include', '/'+'clothing/tops/tunics.html')
  })
  
  it('URL redirect for [67789]', () => {
    cy.visit('/'+'lei-lei-tunic-dress-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67790]', () => {
    cy.visit('/'+'libbie-legging-plus-size.html')
    cy.url().should('include', '/'+'clothing/bottoms/legging.html')
  })
  
  it('URL redirect for [67791]', () => {
    cy.visit('/'+'lei-lei-smocked-tiered-dress-plus-size.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [67792]', () => {
    cy.visit('/'+'izamal-side-slit-pant-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67793]', () => {
    cy.visit('/'+'brenna-military-coat-plus-size.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [67794]', () => {
    cy.visit('/'+'pratt-drape-sleeve-tunic-plus-size.html')
    cy.url().should('include', '/'+'clothing/tops/tunics.html')
  })
  
  it('URL redirect for [67858]', () => {
    cy.visit('/'+'embry-scarf-dress-plus-size.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [67859]', () => {
    cy.visit('/'+'embry-scarf-dress-plus-size-1.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [67860]', () => {
    cy.visit('/'+'embry-scarf-dress-plus-size-2.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [67873]', () => {
    cy.visit('/'+'embry-scarf-dress-plus-size-3.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [67879]', () => {
    cy.visit('/'+'amal-effortless-paris-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67884]', () => {
    cy.visit('/'+'izamal-zipup-hoodie-plus-size.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets/hoodies.html')
  })
  
  it('URL redirect for [67885]', () => {
    cy.visit('/'+'izamal-zipup-hoodie-plus-size-1.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets/hoodies.html')
  })
  
  it('URL redirect for [67886]', () => {
    cy.visit('/'+'libbie-drape-top-plus-size-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67890]', () => {
    cy.visit('/'+'izamal-3-4-sleeve-button-tee-plus-size.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [67894]', () => {
    cy.visit('/'+'trim-linen-cropped-pant-plus-size.html')
    cy.url().should('include', '/'+'linen.html')
  })
  
  it('URL redirect for [67900]', () => {
    cy.visit('/'+'betimo-embroidery-kimono-plus-size.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets/outerwear-kimonos.html')
  })
  
  it('URL redirect for [67901]', () => {
    cy.visit('/'+'lulu-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67902]', () => {
    cy.visit('/'+'lulu-tunic-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67905]', () => {
    cy.visit('/'+'desi-denim-jacket-plus-size.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets/clothing-jackets-kimonos-jackets.html')
  })
  
  it('URL redirect for [67948]', () => {
    cy.visit('/'+'talum-tunic-plus-size-5.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67949]', () => {
    cy.visit('/'+'talum-tunic-plus-size-6.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67950]', () => {
    cy.visit('/'+'talum-tunic-plus-size-7.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [67972]', () => {
    cy.visit('/'+'linko-babydoll.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67973]', () => {
    cy.visit('/'+'nikolita-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67974]', () => {
    cy.visit('/'+'nikolita-blouse-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67975]', () => {
    cy.visit('/'+'nikolita-blouse-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67976]', () => {
    cy.visit('/'+'demoran-tank.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67977]', () => {
    cy.visit('/'+'demoran-tank-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67978]', () => {
    cy.visit('/'+'demoran-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67979]', () => {
    cy.visit('/'+'demoran-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67980]', () => {
    cy.visit('/'+'melrose-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67981]', () => {
    cy.visit('/'+'melrose-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67982]', () => {
    cy.visit('/'+'melrose-top-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67984]', () => {
    cy.visit('/'+'kyuss-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67985]', () => {
    cy.visit('/'+'kyuss-blouse-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67986]', () => {
    cy.visit('/'+'kyuss-blouse-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67987]', () => {
    cy.visit('/'+'austina-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67988]', () => {
    cy.visit('/'+'austina-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67989]', () => {
    cy.visit('/'+'bali-button-down-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67991]', () => {
    cy.visit('/'+'pari-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67992]', () => {
    cy.visit('/'+'pari-tunic-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67993]', () => {
    cy.visit('/'+'sobina-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67994]', () => {
    cy.visit('/'+'theda-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [67997]', () => {
    cy.visit('/'+'peta-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68000]', () => {
    cy.visit('/'+'flower-ombre-kimono-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68001]', () => {
    cy.visit('/'+'witteau-cardigan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68002]', () => {
    cy.visit('/'+'demoran-ruffle-kimono.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68003]', () => {
    cy.visit('/'+'demoran-ruffle-kimono-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68006]', () => {
    cy.visit('/'+'stretch-eyelet-legging-5.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68007]', () => {
    cy.visit('/'+'liana-tier-skirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68008]', () => {
    cy.visit('/'+'swag-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [68009]', () => {
    cy.visit('/'+'romantico-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [68010]', () => {
    cy.visit('/'+'bisco-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [68011]', () => {
    cy.visit('/'+'bobbitt-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [68012]', () => {
    cy.visit('/'+'ricoco-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [68013]', () => {
    cy.visit('/'+'velsia-fringe-clutch.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68014]', () => {
    cy.visit('/'+'velsia-fringe-clutch-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68015]', () => {
    cy.visit('/'+'lane-everyday-tote.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68016]', () => {
    cy.visit('/'+'lane-everyday-tote-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68017]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68018]', () => {
    cy.visit('/'+'samira-drape-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68019]', () => {
    cy.visit('/'+'samira-drape-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68020]', () => {
    cy.visit('/'+'samira-drape-top-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68021]', () => {
    cy.visit('/'+'katrina-everyday-tee.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68022]', () => {
    cy.visit('/'+'katrina-everyday-tee-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68023]', () => {
    cy.visit('/'+'katrina-everyday-tee-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68024]', () => {
    cy.visit('/'+'katrina-crop-tank.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68025]', () => {
    cy.visit('/'+'samira-pleated-peasant-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68026]', () => {
    cy.visit('/'+'samira-pleated-peasant-tunic-dress-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68027]', () => {
    cy.visit('/'+'velsia-easy-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68028]', () => {
    cy.visit('/'+'lane-short-sleeve-woven-panel-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68029]', () => {
    cy.visit('/'+'katrina-swing-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68030]', () => {
    cy.visit('/'+'lane-tie-tank-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68031]', () => {
    cy.visit('/'+'samira-legging.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68032]', () => {
    cy.visit('/'+'lane-culotte-pant.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68033]', () => {
    cy.visit('/'+'lane-culotte-pant-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68034]', () => {
    cy.visit('/'+'veronica-market-tote.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68035]', () => {
    cy.visit('/'+'veronica-v-neck-button-down.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68036]', () => {
    cy.visit('/'+'veronica-flare-sleeve-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68037]', () => {
    cy.visit('/'+'terraza-v-neck-tank.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68038]', () => {
    cy.visit('/'+'terraza-v-neck-tank-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68039]', () => {
    cy.visit('/'+'terraza-v-neck-tank-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68040]', () => {
    cy.visit('/'+'cerretti-drape-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68041]', () => {
    cy.visit('/'+'ceretti-embroidered-back-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68042]', () => {
    cy.visit('/'+'relaxed-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68043]', () => {
    cy.visit('/'+'adira-mexican-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68044]', () => {
    cy.visit('/'+'flare-sleeve-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68045]', () => {
    cy.visit('/'+'ceretti-bomber-jacket.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68046]', () => {
    cy.visit('/'+'ceretti-bomber-jacket-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68047]', () => {
    cy.visit('/'+'ceretti-bomber-jacket-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68048]', () => {
    cy.visit('/'+'elizabeth-ruffle-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68049]', () => {
    cy.visit('/'+'eleanor-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68050]', () => {
    cy.visit('/'+'eleanor-blouse-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68051]', () => {
    cy.visit('/'+'alisha-tiered-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68052]', () => {
    cy.visit('/'+'kiara-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68053]', () => {
    cy.visit('/'+'kiara-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68055]', () => {
    cy.visit('/'+'short-slip-46.html')
    cy.url().should('include', '/'+'clothing/slips.html')
  })
  
  it('URL redirect for [68056]', () => {
    cy.visit('/'+'medium-slip-35.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68057]', () => {
    cy.visit('/'+'medium-slip-36.html')
    cy.url().should('include', '/'+'clothing.html')
  })
  
  it('URL redirect for [68058]', () => {
    cy.visit('/'+'mia-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68059]', () => {
    cy.visit('/'+'flora-kaftan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68060]', () => {
    cy.visit('/'+'mishti-sundress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68061]', () => {
    cy.visit('/'+'mishti-sundress-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68063]', () => {
    cy.visit('/'+'dillion-mesh-dress.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [68064]', () => {
    cy.visit('/'+'goorin-hooded-duster.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68065]', () => {
    cy.visit('/'+'goorin-hooded-duster-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68066]', () => {
    cy.visit('/'+'imrie-patchwork-vest.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68067]', () => {
    cy.visit('/'+'simone-wrap.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68068]', () => {
    cy.visit('/'+'nemma-hooded-cardigan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68069]', () => {
    cy.visit('/'+'linelea-cupra-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68070]', () => {
    cy.visit('/'+'ghenar-gauze-top.html')
    cy.url().should('include', '/'+'clothing/pete-and-greta.html')
  })
  
  it('URL redirect for [68071]', () => {
    cy.visit('/'+'athina-silk-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68072]', () => {
    cy.visit('/'+'ventura-jogger-pant.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68073]', () => {
    cy.visit('/'+'nikolita-blouse-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68074]', () => {
    cy.visit('/'+'nikolita-blouse-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68075]', () => {
    cy.visit('/'+'roanna-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68076]', () => {
    cy.visit('/'+'witteau-cardigan-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68078]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68080]', () => {
    cy.visit('/'+'flare-sleeve-tunic-dress-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68081]', () => {
    cy.visit('/'+'linko-babydoll-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68082]', () => {
    cy.visit('/'+'linko-babydoll-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68083]', () => {
    cy.visit('/'+'demoran-tank-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68084]', () => {
    cy.visit('/'+'demoran-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68085]', () => {
    cy.visit('/'+'demoran-top-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68086]', () => {
    cy.visit('/'+'melrose-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68087]', () => {
    cy.visit('/'+'melrose-top-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68088]', () => {
    cy.visit('/'+'kyuss-blouse-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68089]', () => {
    cy.visit('/'+'kyuss-blouse-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68090]', () => {
    cy.visit('/'+'austina-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68091]', () => {
    cy.visit('/'+'austina-top-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68092]', () => {
    cy.visit('/'+'pari-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68093]', () => {
    cy.visit('/'+'sobina-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68094]', () => {
    cy.visit('/'+'sobina-tunic-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68095]', () => {
    cy.visit('/'+'theda-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68096]', () => {
    cy.visit('/'+'songstar-long-side-slit-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68097]', () => {
    cy.visit('/'+'tiered-eyelet-tank-dress-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68098]', () => {
    cy.visit('/'+'tiered-eyelet-tank-dress-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68100]', () => {
    cy.visit('/'+'stretch-eyelet-legging-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68101]', () => {
    cy.visit('/'+'samira-drape-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68102]', () => {
    cy.visit('/'+'samira-drape-top-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68103]', () => {
    cy.visit('/'+'samira-drape-top-plus-size-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68104]', () => {
    cy.visit('/'+'velsia-short-sleeve-deep-scoop-tee-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68105]', () => {
    cy.visit('/'+'velsia-short-sleeve-deep-scoop-tee-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68106]', () => {
    cy.visit('/'+'velsia-short-sleeve-deep-scoop-tee-plus-size-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68110]', () => {
    cy.visit('/'+'katrina-crop-tank-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68111]', () => {
    cy.visit('/'+'katrina-crop-tank-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68112]', () => {
    cy.visit('/'+'katrina-crop-tank-plus-size-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68113]', () => {
    cy.visit('/'+'samira-pleated-peasant-tunic-dress-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68114]', () => {
    cy.visit('/'+'samira-pleated-peasant-tunic-dress-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68115]', () => {
    cy.visit('/'+'samira-pleated-peasant-tunic-dress-plus-size-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68116]', () => {
    cy.visit('/'+'velsia-easy-tunic-dress-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68117]', () => {
    cy.visit('/'+'velsia-easy-tunic-dress-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68118]', () => {
    cy.visit('/'+'velsia-easy-tunic-dress-plus-size-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68119]', () => {
    cy.visit('/'+'lane-short-sleeve-woven-panel-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68120]', () => {
    cy.visit('/'+'lane-short-sleeve-woven-panel-tunic-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68121]', () => {
    cy.visit('/'+'lane-short-sleeve-woven-panel-tunic-plus-size-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68122]', () => {
    cy.visit('/'+'katrina-swing-dress-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68123]', () => {
    cy.visit('/'+'katrina-swing-dress-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68124]', () => {
    cy.visit('/'+'katrina-swing-dress-plus-size-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68125]', () => {
    cy.visit('/'+'lane-tie-tank-dress-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68126]', () => {
    cy.visit('/'+'lane-tie-tank-dress-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68127]', () => {
    cy.visit('/'+'samira-legging-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68128]', () => {
    cy.visit('/'+'samira-legging-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68183]', () => {
    cy.visit('/'+'melrose-top-9.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68184]', () => {
    cy.visit('/'+'melrose-top-10.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68185]', () => {
    cy.visit('/'+'melrose-top-11.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68186]', () => {
    cy.visit('/'+'melrose-top-12.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68187]', () => {
    cy.visit('/'+'melrose-top-13.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68188]', () => {
    cy.visit('/'+'melrose-top-14.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68224]', () => {
    cy.visit('/'+'austina-top-8.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68225]', () => {
    cy.visit('/'+'austina-top-9.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68226]', () => {
    cy.visit('/'+'austina-top-10.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68227]', () => {
    cy.visit('/'+'austina-top-11.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68228]', () => {
    cy.visit('/'+'austina-top-12.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68229]', () => {
    cy.visit('/'+'austina-top-13.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68350]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic-1.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [68351]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic-2.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [68352]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic-3.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [68353]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic-4.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [68354]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic-5.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [68355]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic-6.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [68548]', () => {
    cy.visit('/'+'short-slip-47.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68549]', () => {
    cy.visit('/'+'short-slip-48.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68550]', () => {
    cy.visit('/'+'short-slip-49.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68551]', () => {
    cy.visit('/'+'short-slip-50.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68552]', () => {
    cy.visit('/'+'short-slip-51.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68553]', () => {
    cy.visit('/'+'short-slip-52.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68554]', () => {
    cy.visit('/'+'short-slip-53.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68555]', () => {
    cy.visit('/'+'short-slip-54.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68556]', () => {
    cy.visit('/'+'short-slip-55.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68557]', () => {
    cy.visit('/'+'short-slip-56.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68558]', () => {
    cy.visit('/'+'medium-slip-37.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68559]', () => {
    cy.visit('/'+'medium-slip-38.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68560]', () => {
    cy.visit('/'+'medium-slip-39.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68561]', () => {
    cy.visit('/'+'medium-slip-40.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68562]', () => {
    cy.visit('/'+'medium-slip-41.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68563]', () => {
    cy.visit('/'+'medium-slip-42.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68564]', () => {
    cy.visit('/'+'medium-slip-43.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68565]', () => {
    cy.visit('/'+'medium-slip-44.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68566]', () => {
    cy.visit('/'+'medium-slip-45.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68567]', () => {
    cy.visit('/'+'medium-slip-46.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [68655]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic-plus-size-4.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [68656]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic-plus-size-5.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [68657]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic-plus-size-6.html')
    cy.url().should('include', '/'+'accessories/scarves/silk-scarves.html')
  })
  
  it('URL redirect for [68802]', () => {
    cy.visit('/'+'dreaming-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68803]', () => {
    cy.visit('/'+'dreaming-blouse-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68804]', () => {
    cy.visit('/'+'dreaming-blouse-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68807]', () => {
    cy.visit('/'+'vice-tank.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68808]', () => {
    cy.visit('/'+'vice-tank-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68809]', () => {
    cy.visit('/'+'vice-tank-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68810]', () => {
    cy.visit('/'+'babette-blouse.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [68811]', () => {
    cy.visit('/'+'valley-tank.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [68812]', () => {
    cy.visit('/'+'cherpas-poncho.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68813]', () => {
    cy.visit('/'+'cherpas-poncho-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68814]', () => {
    cy.visit('/'+'mikones-tunic.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [68815]', () => {
    cy.visit('/'+'mikones-tunic-1.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [68816]', () => {
    cy.visit('/'+'cattleya-long-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68818]', () => {
    cy.visit('/'+'darla-tunic.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [68819]', () => {
    cy.visit('/'+'darla-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68820]', () => {
    cy.visit('/'+'darla-tunic-2.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [68821]', () => {
    cy.visit('/'+'elle-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68823]', () => {
    cy.visit('/'+'simple-all-over-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68824]', () => {
    cy.visit('/'+'simple-all-over-tunic-1.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [68825]', () => {
    cy.visit('/'+'chasselas-tunic.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [68826]', () => {
    cy.visit('/'+'lisa-babydoll-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68827]', () => {
    cy.visit('/'+'lisa-babydoll-dress-1.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [68828]', () => {
    cy.visit('/'+'lisa-babydoll-dress-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68833]', () => {
    cy.visit('/'+'vino-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [68834]', () => {
    cy.visit('/'+'re-augstina-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [68835]', () => {
    cy.visit('/'+'coachella-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [68837]', () => {
    cy.visit('/'+'flower-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [68838]', () => {
    cy.visit('/'+'calida-deep-scoop-t-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68839]', () => {
    cy.visit('/'+'calida-deep-scoop-t-shirt-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68844]', () => {
    cy.visit('/'+'hira-peasant-tunic-dress-1.html')
    cy.url().should('include', '/'+'clothing/jwla.html')
  })
  
  it('URL redirect for [68846]', () => {
    cy.visit('/'+'calida-yoke-tank-tunic-dress-1.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [68848]', () => {
    cy.visit('/'+'adeline-draped-tunic-dress.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [68849]', () => {
    cy.visit('/'+'clover-easy-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68850]', () => {
    cy.visit('/'+'hira-linen-kimono.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [68855]', () => {
    cy.visit('/'+'surya-everyday-tote.html')
    cy.url().should('include', '/'+'accessories/handbags.html')
  })
  
  it('URL redirect for [68856]', () => {
    cy.visit('/'+'surya-back-slit-peasant-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68857]', () => {
    cy.visit('/'+'surya-back-slit-peasant-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68858]', () => {
    cy.visit('/'+'surya-back-slit-peasant-top-2.html')
    cy.url().should('include', '/'+'clothing/3j-workshop.html')
  })
  
  it('URL redirect for [68861]', () => {
    cy.visit('/'+'melika-button-back-shirt.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68862]', () => {
    cy.visit('/'+'oman-laceup-swing-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68864]', () => {
    cy.visit('/'+'surya-drape-tunic-dress.html')
    cy.url().should('include', '/'+'clothing/3j-workshop.html')
  })
  
  it('URL redirect for [68865]', () => {
    cy.visit('/'+'surya-military-jacket.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68869]', () => {
    cy.visit('/'+'medium-slip-47.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [68870]', () => {
    cy.visit('/'+'medium-slip-48.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [68874]', () => {
    cy.visit('/'+'olivia-top.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [68875]', () => {
    cy.visit('/'+'olivia-top-1.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [68876]', () => {
    cy.visit('/'+'kennedy-tunic-6.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [68877]', () => {
    cy.visit('/'+'kennedy-tunic-7.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [68878]', () => {
    cy.visit('/'+'tabatha-maxi-dress.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [68879]', () => {
    cy.visit('/'+'elena-ruffle-dress.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [68880]', () => {
    cy.visit('/'+'leah-mini-dress.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [68881]', () => {
    cy.visit('/'+'victoria-cupra-blouse.html')
    cy.url().should('include', '/'+'clothing/biya.html')
  })
  
  it('URL redirect for [68882]', () => {
    cy.visit('/'+'victoria-cupra-blouse-1.html')
    cy.url().should('include', '/'+'clothing/biya.html')
  })
  
  it('URL redirect for [68883]', () => {
    cy.visit('/'+'missio-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68884]', () => {
    cy.visit('/'+'loistin-short-wrap.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [68885]', () => {
    cy.visit('/'+'loistin-short-wrap-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68886]', () => {
    cy.visit('/'+'casquina-kimono.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68887]', () => {
    cy.visit('/'+'casquina-kimono-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68889]', () => {
    cy.visit('/'+'palmer-jogger-pant.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68890]', () => {
    cy.visit('/'+'ray-cargo-shorts.html')
    cy.url().should('include', '/'+'clothing/pete-and-greta.html')
  })
  
  it('URL redirect for [68891]', () => {
    cy.visit('/'+'ray-cargo-shorts-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [68902]', () => {
    cy.visit('/'+'adeline-knit-tank-plus-size.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [68903]', () => {
    cy.visit('/'+'adeline-knit-tank-plus-size-1.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [68904]', () => {
    cy.visit('/'+'adeline-knit-tank-plus-size-2.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [68905]', () => {
    cy.visit('/'+'clover-cold-shoulder-tee-plus-size.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [68906]', () => {
    cy.visit('/'+'clover-cold-shoulder-tee-plus-size-1.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [68907]', () => {
    cy.visit('/'+'clover-cold-shoulder-tee-plus-size-2.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [68911]', () => {
    cy.visit('/'+'calida-yoke-tank-tunic-dress-plus-size.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [68912]', () => {
    cy.visit('/'+'calida-yoke-tank-tunic-dress-plus-size-1.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [68913]', () => {
    cy.visit('/'+'calida-yoke-tank-tunic-dress-plus-size-2.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [68931]', () => {
    cy.visit('/'+'valley-tank-plus-size.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [68969]', () => {
    cy.visit('/'+'dreaming-blouse-9.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68970]', () => {
    cy.visit('/'+'dreaming-blouse-10.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68971]', () => {
    cy.visit('/'+'dreaming-blouse-11.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68972]', () => {
    cy.visit('/'+'dreaming-blouse-12.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68973]', () => {
    cy.visit('/'+'dreaming-blouse-13.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [68974]', () => {
    cy.visit('/'+'dreaming-blouse-14.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69029]', () => {
    cy.visit('/'+'cherpas-poncho-8.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69030]', () => {
    cy.visit('/'+'cherpas-poncho-9.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69031]', () => {
    cy.visit('/'+'cherpas-poncho-10.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69032]', () => {
    cy.visit('/'+'cherpas-poncho-11.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69033]', () => {
    cy.visit('/'+'cherpas-poncho-12.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69034]', () => {
    cy.visit('/'+'cherpas-poncho-13.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69053]', () => {
    cy.visit('/'+'cattleya-long-tunic.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69054]', () => {
    cy.visit('/'+'cattleya-long-tunic.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69055]', () => {
    cy.visit('/'+'cattleya-long-tunic-4.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69056]', () => {
    cy.visit('/'+'cattleya-long-tunic-5.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69057]', () => {
    cy.visit('/'+'cattleya-long-tunic-6.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69058]', () => {
    cy.visit('/'+'cattleya-long-tunic-7.html')
    cy.url().should('include', '/'+'new/when-in-pink.html')
  })
  
  it('URL redirect for [69157]', () => {
    cy.visit('/'+'re-augstina-scarf-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [69241]', () => {
    cy.visit('/'+'hira-linen-kimono-5.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [69303]', () => {
    cy.visit('/'+'oman-laceup-swing-blouse-7.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [69304]', () => {
    cy.visit('/'+'oman-laceup-swing-blouse-8.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [69305]', () => {
    cy.visit('/'+'oman-laceup-swing-blouse-9.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [69306]', () => {
    cy.visit('/'+'oman-laceup-swing-blouse-10.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [69307]', () => {
    cy.visit('/'+'oman-laceup-swing-blouse-11.html')
    cy.url().should('include', '/'+'accessories/jewelry/logan-x-johnny-was.html')
  })
  
  it('URL redirect for [69323]', () => {
    cy.visit('/'+'short-slip-59.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69324]', () => {
    cy.visit('/'+'short-slip-60.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69325]', () => {
    cy.visit('/'+'short-slip-61.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69326]', () => {
    cy.visit('/'+'short-slip-62.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69327]', () => {
    cy.visit('/'+'short-slip-63.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69328]', () => {
    cy.visit('/'+'short-slip-64.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69329]', () => {
    cy.visit('/'+'short-slip-65.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69330]', () => {
    cy.visit('/'+'short-slip-66.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69331]', () => {
    cy.visit('/'+'short-slip-67.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69332]', () => {
    cy.visit('/'+'short-slip-68.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69333]', () => {
    cy.visit('/'+'medium-slip-49.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69334]', () => {
    cy.visit('/'+'medium-slip-50.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69335]', () => {
    cy.visit('/'+'medium-slip-51.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69336]', () => {
    cy.visit('/'+'medium-slip-52.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69337]', () => {
    cy.visit('/'+'medium-slip-53.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [69419]', () => {
    cy.visit('/'+'casquina-kimono-3.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [69618]', () => {
    cy.visit('/'+'heidine-poncho.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69619]', () => {
    cy.visit('/'+'heidine-poncho-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69620]', () => {
    cy.visit('/'+'heidine-poncho-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69621]', () => {
    cy.visit('/'+'heidine-tie-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69623]', () => {
    cy.visit('/'+'heidine-tie-blouse-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69624]', () => {
    cy.visit('/'+'heidine-tie-blouse-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69625]', () => {
    cy.visit('/'+'plaid-dream-top.html')
    cy.url().should('include', '/'+'clothing.html')
  })
  
  it('URL redirect for [69626]', () => {
    cy.visit('/'+'chloris-v-neck-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69627]', () => {
    cy.visit('/'+'luana-blouse.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [69628]', () => {
    cy.visit('/'+'invita-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69629]', () => {
    cy.visit('/'+'rose-stitch-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69630]', () => {
    cy.visit('/'+'rose-stitch-blouse-1.html')
    cy.url().should('include', '/'+'clothing.html')
  })
  
  it('URL redirect for [69631]', () => {
    cy.visit('/'+'pippa-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69632]', () => {
    cy.visit('/'+'pippa-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69637]', () => {
    cy.visit('/'+'happy-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69638]', () => {
    cy.visit('/'+'jessa-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69639]', () => {
    cy.visit('/'+'jessa-tunic-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69640]', () => {
    cy.visit('/'+'jessa-tunic-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69641]', () => {
    cy.visit('/'+'hinga-tunic-3.html')
    cy.url().should('include', '/'+'clothing.html')
  })
  
  it('URL redirect for [69643]', () => {
    cy.visit('/'+'hinga-tunic-5.html')
    cy.url().should('include', '/'+'clothing.html')
  })
  
  it('URL redirect for [69644]', () => {
    cy.visit('/'+'bethanie-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69645]', () => {
    cy.visit('/'+'bethanie-tunic-1.html')
    cy.url().should('include', '/'+'clothing.html')
  })
  
  it('URL redirect for [69646]', () => {
    cy.visit('/'+'bethanie-tunic.html')
    cy.url().should('include', '/'+'clothing.html')
  })
  
  it('URL redirect for [69647]', () => {
    cy.visit('/'+'bethanie-tunic-3.html')
    cy.url().should('include', '/'+'clothing.html')
  })
  
  it('URL redirect for [69651]', () => {
    cy.visit('/'+'lomi-tank-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69652]', () => {
    cy.visit('/'+'lomi-tank-dress-1.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [69656]', () => {
    cy.visit('/'+'solomio-kimono.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [69659]', () => {
    cy.visit('/'+'chloris-scarf.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [69661]', () => {
    cy.visit('/'+'sonoma-tote-bag.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69662]', () => {
    cy.visit('/'+'sonoma-tote-bag-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [69663]', () => {
    cy.visit('/'+'vella-everyday-tote.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69664]', () => {
    cy.visit('/'+'vella-everyday-tote-1.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [69665]', () => {
    cy.visit('/'+'sonoma-everyday-tee.html')
    cy.url().should('include', '/'+'clothing/jwla.html')
  })
  
  it('URL redirect for [69666]', () => {
    cy.visit('/'+'sonoma-everyday-tee-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69667]', () => {
    cy.visit('/'+'sonoma-everyday-tee-2.html')
    cy.url().should('include', '/'+'clothing/tops.html')
  })
  
  it('URL redirect for [69669]', () => {
    cy.visit('/'+'sonoma-side-button-tunic-dress.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [69670]', () => {
    cy.visit('/'+'sonoma-side-button-tunic-dress-1.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [69671]', () => {
    cy.visit('/'+'vella-v-neck-mexican-tunic-dress-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69672]', () => {
    cy.visit('/'+'vella-v-neck-mexican-tunic-dress.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69673]', () => {
    cy.visit('/'+'vella-easy-knit-tunic-dress.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [69676]', () => {
    cy.visit('/'+'cami-draped-cardigan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69677]', () => {
    cy.visit('/'+'cami-draped-cardigan-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69678]', () => {
    cy.visit('/'+'sonoma-legging.html')
    cy.url().should('include', '/'+'clothing/jwla.html')
  })
  
  it('URL redirect for [69679]', () => {
    cy.visit('/'+'sonoma-legging-1.html')
    cy.url().should('include', '/'+'clothing/jwla.html')
  })
  
  it('URL redirect for [69680]', () => {
    cy.visit('/'+'vella-jogger-pant.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69681]', () => {
    cy.visit('/'+'vella-jogger-pant-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69682]', () => {
    cy.visit('/'+'vella-jogger-pant-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69685]', () => {
    cy.visit('/'+'marion-market-tote.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [69686]', () => {
    cy.visit('/'+'marion-flare-sleeve-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69687]', () => {
    cy.visit('/'+'marion-flare-sleeve-blouse-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69688]', () => {
    cy.visit('/'+'stella-cap-sleeve-peasant-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69690]', () => {
    cy.visit('/'+'lila-jo-drape-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69692]', () => {
    cy.visit('/'+'boho-mix-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69693]', () => {
    cy.visit('/'+'marion-peasant-tank-dress.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [69694]', () => {
    cy.visit('/'+'parnaz-long-kaftan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69695]', () => {
    cy.visit('/'+'parnaz-long-kaftan-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69696]', () => {
    cy.visit('/'+'lila-jo-flare-tunic-dress.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [69699]', () => {
    cy.visit('/'+'flare-sleeve-tunic-dress-6.html')
    cy.url().should('include', '/'+'clothing/3j-workshop.html')
  })
  
  it('URL redirect for [69700]', () => {
    cy.visit('/'+'parnaz-bomber-jacket.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69701]', () => {
    cy.visit('/'+'azaeal-peasant-blouse.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [69702]', () => {
    cy.visit('/'+'karl-cold-shoulder.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69703]', () => {
    cy.visit('/'+'karl-cold-shoulder-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69704]', () => {
    cy.visit('/'+'boyd-yoke-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69705]', () => {
    cy.visit('/'+'boyd-yoke-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69707]', () => {
    cy.visit('/'+'cohen-tunic-dress.html')
    cy.url().should('include', '/'+'clothing/love-johnny-was.html')
  })
  
  it('URL redirect for [69710]', () => {
    cy.visit('/'+'bertie-cupra-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69711]', () => {
    cy.visit('/'+'versairo-crinkle-satin-tunic.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69712]', () => {
    cy.visit('/'+'mel-challis-blouse.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69713]', () => {
    cy.visit('/'+'kemira-mesh-dress.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [69714]', () => {
    cy.visit('/'+'nessava-hooded-cardigan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69715]', () => {
    cy.visit('/'+'abilene-hooded-cardigan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69716]', () => {
    cy.visit('/'+'liya-print-duster.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69719]', () => {
    cy.visit('/'+'auburn-knit-box-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69720]', () => {
    cy.visit('/'+'auburn-knit-box-top-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69723]', () => {
    cy.visit('/'+'speir-jogger-pant.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69724]', () => {
    cy.visit('/'+'cupra-cargo-shorts-1.html')
    cy.url().should('include', '/'+'clothing/pete-and-greta.html')
  })
  
  it('URL redirect for [69725]', () => {
    cy.visit('/'+'flare-sleeve-tunic-dress-plus-size-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69726]', () => {
    cy.visit('/'+'chansy-v-neck-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69727]', () => {
    cy.visit('/'+'chansy-v-neck-top-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69728]', () => {
    cy.visit('/'+'heidine-poncho-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69729]', () => {
    cy.visit('/'+'heidine-poncho-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69730]', () => {
    cy.visit('/'+'solo-button-down-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69731]', () => {
    cy.visit('/'+'plaid-dream-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69732]', () => {
    cy.visit('/'+'chloris-v-neck-blouse-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69733]', () => {
    cy.visit('/'+'luana-blouse-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69734]', () => {
    cy.visit('/'+'zen-drapey-blouse-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69735]', () => {
    cy.visit('/'+'arlene-applique-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69736]', () => {
    cy.visit('/'+'arlene-applique-tunic-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69737]', () => {
    cy.visit('/'+'happy-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69738]', () => {
    cy.visit('/'+'happy-tunic-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69739]', () => {
    cy.visit('/'+'jessa-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69740]', () => {
    cy.visit('/'+'jessa-tunic-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69741]', () => {
    cy.visit('/'+'bethanie-tunic-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69742]', () => {
    cy.visit('/'+'bethanie-tunic-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69743]', () => {
    cy.visit('/'+'tillson-kaftan-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69744]', () => {
    cy.visit('/'+'tillson-kaftan-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69745]', () => {
    cy.visit('/'+'solomio-kimono-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69746]', () => {
    cy.visit('/'+'vernazza-deep-scoop-t-shirt-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69747]', () => {
    cy.visit('/'+'vernazza-deep-scoop-t-shirt-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69748]', () => {
    cy.visit('/'+'vernazza-deep-scoop-t-shirt-plus-size-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69749]', () => {
    cy.visit('/'+'sonoma-everyday-tee-plus-size.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [69750]', () => {
    cy.visit('/'+'sonoma-everyday-tee-plus-size-1.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [69751]', () => {
    cy.visit('/'+'sonoma-everyday-tee-plus-size-2.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [69752]', () => {
    cy.visit('/'+'vella-sccop-neck-tank-plus-size.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [69753]', () => {
    cy.visit('/'+'vella-sccop-neck-tank-plus-size-1.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [69754]', () => {
    cy.visit('/'+'vella-sccop-neck-tank-plus-size-2.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [69755]', () => {
    cy.visit('/'+'nikky-drape-top-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69756]', () => {
    cy.visit('/'+'vella-v-neck-mexican-tunic-dress-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69757]', () => {
    cy.visit('/'+'vella-v-neck-mexican-tunic-dress-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69758]', () => {
    cy.visit('/'+'vella-easy-knit-tunic-dress-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69759]', () => {
    cy.visit('/'+'vella-easy-knit-tunic-dress-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69760]', () => {
    cy.visit('/'+'vella-easy-knit-tunic-dress-plus-size-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69761]', () => {
    cy.visit('/'+'vernazza-zip-up-hoodie-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69762]', () => {
    cy.visit('/'+'vernazza-zip-up-hoodie-plus-size-1.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [69763]', () => {
    cy.visit('/'+'vernazza-zip-up-hoodie-plus-size-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70410]', () => {
    cy.visit('/'+'meadow-tassel-blouse.html')
    cy.url().should('include', '/'+'clothing/tops.html')
  })
  
  it('URL redirect for [70411]', () => {
    cy.visit('/'+'kamilia-crochet-duster.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70412]', () => {
    cy.visit('/'+'wonder-swing-front-sweater-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70413]', () => {
    cy.visit('/'+'wonder-swing-front-sweater-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70414]', () => {
    cy.visit('/'+'wonder-swing-front-sweater-5.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70415]', () => {
    cy.visit('/'+'shibori-scarf.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70416]', () => {
    cy.visit('/'+'shibori-top.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70417]', () => {
    cy.visit('/'+'shibori-cardigan.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [70418]', () => {
    cy.visit('/'+'midu-necklace.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70419]', () => {
    cy.visit('/'+'sanson-bracelet.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70420]', () => {
    cy.visit('/'+'toko-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70421]', () => {
    cy.visit('/'+'mula-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70422]', () => {
    cy.visit('/'+'laala-bracelet.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70428]', () => {
    cy.visit('/'+'calme-linen-pants-5.html')
    cy.url().should('include', '/'+'clothing.html')
  })
  
  it('URL redirect for [70429]', () => {
    cy.visit('/'+'calme-lined-short.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70430]', () => {
    cy.visit('/'+'ziva-bracelet.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70431]', () => {
    cy.visit('/'+'tamar-bracelet.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70432]', () => {
    cy.visit('/'+'sheba-bracelet.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70433]', () => {
    cy.visit('/'+'yadira-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70435]', () => {
    cy.visit('/'+'anais-necklace.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70460]', () => {
    cy.visit('/'+'eylse-necklace-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70461]', () => {
    cy.visit('/'+'eylse-necklace-5.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70462]', () => {
    cy.visit('/'+'eylse-necklace-6.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70463]', () => {
    cy.visit('/'+'eylse-necklace-7.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70464]', () => {
    cy.visit('/'+'eva-earring-4.html')
    cy.url().should('include', '/'+'accessories/jewelry.html')
  })
  
  it('URL redirect for [70465]', () => {
    cy.visit('/'+'eva-earring-5.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70466]', () => {
    cy.visit('/'+'eva-earring-6.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70467]', () => {
    cy.visit('/'+'eva-earring-7.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70468]', () => {
    cy.visit('/'+'etana-bracelet-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70469]', () => {
    cy.visit('/'+'etana-bracelet-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70471]', () => {
    cy.visit('/'+'eban-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70472]', () => {
    cy.visit('/'+'elvie-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70473]', () => {
    cy.visit('/'+'este-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70474]', () => {
    cy.visit('/'+'mia-italian-leather-sandal.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70477]', () => {
    cy.visit('/'+'embroidered-border-cardigan.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70478]', () => {
    cy.visit('/'+'rae-pointelle-duster.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70480]', () => {
    cy.visit('/'+'talia-earring-2.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70481]', () => {
    cy.visit('/'+'talia-earring-3.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70483]', () => {
    cy.visit('/'+'talitha-earring.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70484]', () => {
    cy.visit('/'+'dhani-earring-2.html')
    cy.url().should('include', '/'+'accessories/jewelry/earrings.html')
  })
  
  it('URL redirect for [70485]', () => {
    cy.visit('/'+'dhani-earring-3.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70486]', () => {
    cy.visit('/'+'aida-necklace-2.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70489]', () => {
    cy.visit('/'+'farrah-necklace-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70492]', () => {
    cy.visit('/'+'chandi-bracelet.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70508]', () => {
    cy.visit('/'+'wonder-swing-front-sweater-10.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70509]', () => {
    cy.visit('/'+'wonder-swing-front-sweater.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70510]', () => {
    cy.visit('/'+'wonder-swing-front-sweater.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70511]', () => {
    cy.visit('/'+'wonder-swing-front-sweater.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70512]', () => {
    cy.visit('/'+'wonder-swing-front-sweater.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70513]', () => {
    cy.visit('/'+'wonder-swing-front-sweater-10.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70594]', () => {
    cy.visit('/'+'nico-sunglass.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70597]', () => {
    cy.visit('/'+'christine-sunglass.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70599]', () => {
    cy.visit('/'+'linda-sunglasses.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70643]', () => {
    cy.visit('/'+'rae-pointelle-duster-3.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets.html')
  })
  
  it('URL redirect for [70646]', () => {
    cy.visit('/'+'sadie-earring-1.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70647]', () => {
    cy.visit('/'+'talia-earring-4.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70648]', () => {
    cy.visit('/'+'talia-earring-4.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70652]', () => {
    cy.visit('/'+'dhani-earring-4.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70655]', () => {
    cy.visit('/'+'farrah-necklace-6.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70657]', () => {
    cy.visit('/'+'farrah-necklace.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70661]', () => {
    cy.visit('/'+'camilia-washed-leather-clutch-crossbody.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70662]', () => {
    cy.visit('/'+'tosca-italian-leather-tote-alabaster.html')
    cy.url().should('include', '/'+'accessories/handbags.html')
  })
  
  it('URL redirect for [70663]', () => {
    cy.visit('/'+'andreas-leather-tote.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70666]', () => {
    cy.visit('/'+'4-30-bag.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70667]', () => {
    cy.visit('/'+'sofia-leather-tote.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70668]', () => {
    cy.visit('/'+'sean-drape-top.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70669]', () => {
    cy.visit('/'+'sean-drape-top.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70670]', () => {
    cy.visit('/'+'aurora-velvet-jogger.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70671]', () => {
    cy.visit('/'+'aurora-velvet-jogger.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70672]', () => {
    cy.visit('/'+'valea-jogger.html')
    cy.url().should('include', '/'+'clothing.html')
  })
  
  it('URL redirect for [70673]', () => {
    cy.visit('/'+'valea-jogger.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [70735]', () => {
    cy.visit('/'+'sobina-tunic-7.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70736]', () => {
    cy.visit('/'+'calida-overnight-bag-2.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70737]', () => {
    cy.visit('/'+'calida-overnight-bag-3.html')
    cy.url().should('include', '/'+'accessories/handbags.html')
  })
  
  it('URL redirect for [70738]', () => {
    cy.visit('/'+'clover-bucket-bag-2.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70739]', () => {
    cy.visit('/'+'clover-bucket-bag.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70741]', () => {
    cy.visit('/'+'olivia-blouse-17.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [70742]', () => {
    cy.visit('/'+'joshua-espadrille.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [70770]', () => {
    cy.visit('/'+'mikones-tunic-20.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [70771]', () => {
    cy.visit('/'+'elle-top-19.html')
    cy.url().should('include', '/'+'clothing/johnny-was.html')
  })
  
  it('URL redirect for [81290]', () => {
    cy.visit('/'+'vernazza-zip-up-hoodie-plus-size-11.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81291]', () => {
    cy.visit('/'+'vernazza-zip-up-hoodie-plus-size-8.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81292]', () => {
    cy.visit('/'+'vernazza-zip-up-hoodie-plus-size-5.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81293]', () => {
    cy.visit('/'+'vella-easy-knit-tunic-dress-plus-size-11.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81294]', () => {
    cy.visit('/'+'vella-easy-knit-tunic-dress-plus-size-8.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81295]', () => {
    cy.visit('/'+'vella-easy-knit-tunic-dress-plus-size-5.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81296]', () => {
    cy.visit('/'+'vella-v-neck-mexican-tunic-dress-plus-size-7.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81297]', () => {
    cy.visit('/'+'vella-v-neck-mexican-tunic-dress-plus-size-4.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81298]', () => {
    cy.visit('/'+'nikky-drape-top-plus-size-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81299]', () => {
    cy.visit('/'+'vella-sccop-neck-tank-plus-size-11.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [81300]', () => {
    cy.visit('/'+'vella-sccop-neck-tank-plus-size-8.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [81301]', () => {
    cy.visit('/'+'vella-sccop-neck-tank-plus-size-5.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [81305]', () => {
    cy.visit('/'+'vernazza-deep-scoop-t-shirt-plus-size-11.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81306]', () => {
    cy.visit('/'+'vernazza-deep-scoop-t-shirt-plus-size-8.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81307]', () => {
    cy.visit('/'+'vernazza-deep-scoop-t-shirt-plus-size-5.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81308]', () => {
    cy.visit('/'+'solomio-kimono-plus-size-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81309]', () => {
    cy.visit('/'+'tillson-kaftan-plus-size-7.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81310]', () => {
    cy.visit('/'+'tillson-kaftan-plus-size-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81311]', () => {
    cy.visit('/'+'bethanie-tunic-plus-size-7.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81312]', () => {
    cy.visit('/'+'bethanie-tunic-plus-size-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81313]', () => {
    cy.visit('/'+'jessa-tunic-plus-size-7.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81314]', () => {
    cy.visit('/'+'jessa-tunic-plus-size-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81315]', () => {
    cy.visit('/'+'happy-tunic-plus-size-7.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81316]', () => {
    cy.visit('/'+'arlene-applique-tunic-plus-size-7.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81317]', () => {
    cy.visit('/'+'arlene-applique-tunic-plus-size-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81318]', () => {
    cy.visit('/'+'zen-drapey-blouse-plus-size-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81319]', () => {
    cy.visit('/'+'luana-blouse-plus-size-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81320]', () => {
    cy.visit('/'+'chloris-v-neck-blouse-plus-size-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81321]', () => {
    cy.visit('/'+'plaid-dream-top-plus-size-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81322]', () => {
    cy.visit('/'+'adeline-draped-tunic-dress-plus-size-10.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81323]', () => {
    cy.visit('/'+'adeline-draped-tunic-dress-plus-size-8.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81324]', () => {
    cy.visit('/'+'adeline-draped-tunic-dress-plus-size-5.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81325]', () => {
    cy.visit('/'+'calida-yoke-tank-tunic-dress-plus-size-11.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81326]', () => {
    cy.visit('/'+'calida-yoke-tank-tunic-dress-plus-size-8.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81327]', () => {
    cy.visit('/'+'calida-yoke-tank-tunic-dress-plus-size-5.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81328]', () => {
    cy.visit('/'+'hira-peasant-tunic-dress-plus-size-11.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81329]', () => {
    cy.visit('/'+'hira-peasant-tunic-dress-plus-size-8.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81330]', () => {
    cy.visit('/'+'hira-peasant-tunic-dress-plus-size-5.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81331]', () => {
    cy.visit('/'+'clover-cold-shoulder-tee-plus-size-11.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81332]', () => {
    cy.visit('/'+'clover-cold-shoulder-tee-plus-size-8.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81333]', () => {
    cy.visit('/'+'clover-cold-shoulder-tee-plus-size-5.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81334]', () => {
    cy.visit('/'+'adeline-knit-tank-plus-size-11.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81335]', () => {
    cy.visit('/'+'adeline-knit-tank-plus-size-8.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81336]', () => {
    cy.visit('/'+'adeline-knit-tank-plus-size-5.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81337]', () => {
    cy.visit('/'+'calida-deep-scoop-t-shirt-plus-size-11.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81338]', () => {
    cy.visit('/'+'calida-deep-scoop-t-shirt-plus-size-8.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81339]', () => {
    cy.visit('/'+'calida-deep-scoop-t-shirt-plus-size-5.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81340]', () => {
    cy.visit('/'+'penelope-top-plus-size-3.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81341]', () => {
    cy.visit('/'+'surya-military-jacket-plus-size-7.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81342]', () => {
    cy.visit('/'+'surya-military-jacket-plus-size-4.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81344]', () => {
    cy.visit('/'+'fiska-flare-sleeve-blouse-plus-size-3.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81345]', () => {
    cy.visit('/'+'fusion-cold-shoulder-plus-size-3.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81346]', () => {
    cy.visit('/'+'samira-legging-plus-size-7.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81347]', () => {
    cy.visit('/'+'samira-legging-plus-size-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81349]', () => {
    cy.visit('/'+'lane-tie-tank-dress-plus-size-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81350]', () => {
    cy.visit('/'+'katrina-swing-dress-plus-size-11.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81351]', () => {
    cy.visit('/'+'katrina-swing-dress-plus-size-8.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [81352]', () => {
    cy.visit('/'+'katrina-swing-dress-plus-size-5.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81353]', () => {
    cy.visit('/'+'velsia-easy-tunic-dress-plus-size-11.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81354]', () => {
    cy.visit('/'+'velsia-easy-tunic-dress-plus-size-8.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81355]', () => {
    cy.visit('/'+'velsia-easy-tunic-dress-plus-size-5.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81356]', () => {
    cy.visit('/'+'linko-babydoll-plus-size-5.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81357]', () => {
    cy.visit('/'+'flare-sleeve-tunic-dress-plus-size-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81358]', () => {
    cy.visit('/'+'oman-denim-jacket-plus-size-7.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81359]', () => {
    cy.visit('/'+'aveline-scarf-flounce-tunic-plus-size-6.html')
    cy.url().should('include', '/'+'accessories/scarves.html')
  })
  
  it('URL redirect for [81360]', () => {
    cy.visit('/'+'witteau-cardigan-plus-size-6.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81361]', () => {
    cy.visit('/'+'roanna-top-plus-size-6.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [81362]', () => {
    cy.visit('/'+'nikolita-blouse-plus-size-13.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81363]', () => {
    cy.visit('/'+'nikolita-blouse-plus-size-10.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81365]', () => {
    cy.visit('/'+'blue-moon-blouse-plus-size-7.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81370]', () => {
    cy.visit('/'+'izamal-3-4-sleeve-button-tee-plus-size-3.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [81373]', () => {
    cy.visit('/'+'salinas-poncho-plus-size.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81374]', () => {
    cy.visit('/'+'charmrose-long-tunic-c26817bx-mtb-3x.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [81375]', () => {
    cy.visit('/'+'dolce-drapey-top-c19817ax-mta-3x.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81377]', () => {
    cy.visit('/'+'nova-button-down-c19417x-cnb-3x.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [81382]', () => {
    cy.visit('/'+'eleanor-draped-cardigan-coat-j42217x-blk-3x.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [81383]', () => {
    cy.visit('/'+'meco-tunic-c23017bx-mtb-3x.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [81384]', () => {
    cy.visit('/'+'lentino-bell-sleeve-c23717x-mti-3x.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [81385]', () => {
    cy.visit('/'+'morno-top-c23317x-dlbr-3x.html')
    cy.url().should('include', '/'+'sale/3j-workshop.html')
  })
  
  it('URL redirect for [81390]', () => {
    cy.visit('/'+'cortex-fitted-hoodie-j40117x-nvy-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81391]', () => {
    cy.visit('/'+'mayee-scarf-back-tee-j11117x-nvy-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81392]', () => {
    cy.visit('/'+'tiva-tank-dress-j30317x-vol-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81393]', () => {
    cy.visit('/'+'christine-short-sleeve-panel-dress-j30117x-blk-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81394]', () => {
    cy.visit('/'+'lucia-relaxed-v-neck-tee-j10317x-nvy-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81395]', () => {
    cy.visit('/'+'lucia-relaxed-v-neck-tee-j10317x-heg-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81396]', () => {
    cy.visit('/'+'tropic-thunder-scarf-back-dress-j30517x-nvy-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81397]', () => {
    cy.visit('/'+'christine-v-neck-blouse-j13517x-mpi-3x.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [81398]', () => {
    cy.visit('/'+'christine-front-slit-djellaba-j20117x-vol-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81399]', () => {
    cy.visit('/'+'mixed-print-kimono-c40399x-mti-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81400]', () => {
    cy.visit('/'+'modelo-blouse-c12599ax-mti-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81401]', () => {
    cy.visit('/'+'modelo-blouse-c12599bx-mti-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81402]', () => {
    cy.visit('/'+'biggie-tee-c10499x-bln-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81403]', () => {
    cy.visit('/'+'selena-short-sleeve-trapeze-tee-3877jwx-hto-3x.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [81404]', () => {
    cy.visit('/'+'voi-princess-top-c91671x-pgm-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81405]', () => {
    cy.visit('/'+'bay-dolman-poncho-c91692bx-mti-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81406]', () => {
    cy.visit('/'+'bay-dolman-poncho-c91692ax-mti-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81407]', () => {
    cy.visit('/'+'malani-handkerchief-long-tunic-c91695bx-mtb-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81408]', () => {
    cy.visit('/'+'jenn-blouse-nmc917103x-jgr-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81409]', () => {
    cy.visit('/'+'nylori-dolman-top-c89648x-tro-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81410]', () => {
    cy.visit('/'+'harva-crochet-back-top-c78547x-bluer-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81411]', () => {
    cy.visit('/'+'dorana-3-4-sleeve-draped-t-shirt-tunic-3839jwx-cla-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81412]', () => {
    cy.visit('/'+'camilla-long-tunic-jwc6217x-mti-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81413]', () => {
    cy.visit('/'+'muda-mix-kimono-c87448bx-mti-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81414]', () => {
    cy.visit('/'+'marina-top-c87630x-sta-1x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81415]', () => {
    cy.visit('/'+'roco-blouson-c86442ax-as-2x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81416]', () => {
    cy.visit('/'+'anita-v-neck-c86602ax-as-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81417]', () => {
    cy.visit('/'+'blossom-embroidered-top-c86613x-as-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81418]', () => {
    cy.visit('/'+'joulette-tunic-c86764x-blk-1x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81419]', () => {
    cy.visit('/'+'tansy-duster-cardigan-3736jwx-nsh-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81421]', () => {
    cy.visit('/'+'cam-button-down-c85606x-mer-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81422]', () => {
    cy.visit('/'+'long-lacy-jacket-c85443x-turm-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81423]', () => {
    cy.visit('/'+'shirina-vneck-trapeze-tee-3279jwx-dam-2x.html')
    cy.url().should('include', '/'+'sale/jwla.html')
  })
  
  it('URL redirect for [81424]', () => {
    cy.visit('/'+'mandarin-pocket-tunic-c65674x-drp-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81425]', () => {
    cy.visit('/'+'lilly-kimono-c65401x-drp-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81426]', () => {
    cy.visit('/'+'eli-tunic-c65676x-drp-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81428]', () => {
    cy.visit('/'+'jenna-peplum-hoodie-3077jwx-nwa-2x.html')
    cy.url().should('include', '/'+'clothing/clothing-jackets/hoodies.html')
  })
  
  it('URL redirect for [81433]', () => {
    cy.visit('/'+'arcie-poncho-tee-2861jw-wht-xs.html')
    cy.url().should('include', '/'+'sale/new-sale.html')
  })
  
  it('URL redirect for [81434]', () => {
    cy.visit('/'+'round-neck-tunic-25659-wht-xl.html')
    cy.url().should('include', '/'+'sale/new-sale.html')
  })
  
  it('URL redirect for [81437]', () => {
    cy.visit('/'+'molly-jo-handbag-11402.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [81440]', () => {
    cy.visit('/'+'sterling-silver-rose-gold-charm-necklace.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [81446]', () => {
    cy.visit('/'+'applique-dress-8562.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81449]', () => {
    cy.visit('/'+'paper-bag-print-pant-voile-24179.html')
    cy.url().should('include', '/'+'beauty/categories/fragrance.html')
  })
  
  it('URL redirect for [81452]', () => {
    cy.visit('/'+'linen-ibra-shorts-10826.html')
    cy.url().should('include', '/'+'linen.html')
  })
  
  it('URL redirect for [81453]', () => {
    cy.visit('/'+'5-wrap-bracelet-10421.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [81456]', () => {
    cy.visit('/'+'amaya-embroidered-shirt-6204.html')
    cy.url().should('include', '/'+'clothing/tops/shirts.html')
  })
  
  it('URL redirect for [81461]', () => {
    cy.visit('/'+'roxy-embroidered-tank-6173.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [81464]', () => {
    cy.visit('/'+'violet-embroidered-tank-6467.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [81466]', () => {
    cy.visit('/'+'janielle-embroidered-tank-6139.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [81474]', () => {
    cy.visit('/'+'v-neck-tee-6381.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [81478]', () => {
    cy.visit('/'+'brooke-bow-print-tee-6051.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [81481]', () => {
    cy.visit('/'+'eloise-faux-wrap-shirt-6034.html')
    cy.url().should('include', '/'+'clothing/tops/shirts.html')
  })
  
  it('URL redirect for [81485]', () => {
    cy.visit('/'+'renne-chain-link-embroidered-dress-5981.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81486]', () => {
    cy.visit('/'+'gigi-split-sleeve-dress-5975.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81487]', () => {
    cy.visit('/'+'raine-orchid-embroidered-dress-5660.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81488]', () => {
    cy.visit('/'+'adelle-paisley-embroidered-dress-5959.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81489]', () => {
    cy.visit('/'+'short-sleeve-tunic-dress-5953.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81490]', () => {
    cy.visit('/'+'harlo-sleeveless-dress-5924.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81491]', () => {
    cy.visit('/'+'sienna-beaded-dress-5918.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81492]', () => {
    cy.visit('/'+'surie-pintucked-tunic-dress-5592.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81493]', () => {
    cy.visit('/'+'elle-floral-tank-dress-5587.html')
    cy.url().should('include', '/'+'clothing/tops/clothing-tops-tanks-camis.html')
  })
  
  it('URL redirect for [81494]', () => {
    cy.visit('/'+'chloe-tunic-dress-5582.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81495]', () => {
    cy.visit('/'+'abigate-knit-mix-5885.html')
    cy.url().should('include', '/'+'clothing/outerwear.html')
  })
  
  it('URL redirect for [81496]', () => {
    cy.visit('/'+'faith-ruffle-card-5570.html')
    cy.url().should('include', '/'+'clothing/outerwear.html')
  })
  
  it('URL redirect for [81498]', () => {
    cy.visit('/'+'dana-red-handbag-4616.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [81499]', () => {
    cy.visit('/'+'dana-grey-handbag-4600.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [81500]', () => {
    cy.visit('/'+'jesse-grey-handbag.html')
    cy.url().should('include', '/'+'accessories.html')
  })
  
  it('URL redirect for [81515]', () => {
    cy.visit('/'+'charon-short-dress-solid-4826.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81516]', () => {
    cy.visit('/'+'charon-short-dress-5440.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81517]', () => {
    cy.visit('/'+'wild-love-dress-5434.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81518]', () => {
    cy.visit('/'+'lily-dress-22114.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81519]', () => {
    cy.visit('/'+'ditsy-flower-dress-5415.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81520]', () => {
    cy.visit('/'+'black-rose-dress-6961.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81521]', () => {
    cy.visit('/'+'black-rose-dress-6956.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81522]', () => {
    cy.visit('/'+'antique-broach-dress-6634.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81523]', () => {
    cy.visit('/'+'antique-broach-dress-6630.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81524]', () => {
    cy.visit('/'+'mayan-dress-with-slip-5086.html')
    cy.url().should('include', '/'+'dresses/clothing/dresses/slips.html')
  })
  
  it('URL redirect for [81559]', () => {
    cy.visit('/'+'drawstring-tunic-3928.html')
    cy.url().should('include', '/'+'accessories/jewelry/rings.html')
  })
  
  it('URL redirect for [81561]', () => {
    cy.visit('/'+'solo-button-down-plus-size-3.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81562]', () => {
    cy.visit('/'+'heidine-poncho-plus-size-7.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81563]', () => {
    cy.visit('/'+'heidine-poncho-plus-size-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81564]', () => {
    cy.visit('/'+'chansy-v-neck-top-plus-size-7.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81565]', () => {
    cy.visit('/'+'chansy-v-neck-top-plus-size-4.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81566]', () => {
    cy.visit('/'+'flare-sleeve-tunic-dress-plus-size-7.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81568]', () => {
    cy.visit('/'+'simple-all-over-tunic-plus-size-7.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [81569]', () => {
    cy.visit('/'+'simple-all-over-tunic-plus-size-4.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81570]', () => {
    cy.visit('/'+'elle-top-plus-size-7.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81571]', () => {
    cy.visit('/'+'elle-top-plus-size-4.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81572]', () => {
    cy.visit('/'+'darla-button-down-tunic-plus-size-12.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81573]', () => {
    cy.visit('/'+'darla-button-down-tunic-plus-size-9.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81574]', () => {
    cy.visit('/'+'darla-tunic-plus-size-13.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81575]', () => {
    cy.visit('/'+'darla-tunic-plus-size-10.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81576]', () => {
    cy.visit('/'+'cattleya-long-tunic-plus-size-7.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81577]', () => {
    cy.visit('/'+'cattleya-long-tunic-plus-size-4.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81578]', () => {
    cy.visit('/'+'mikones-tunic-plus-size-7.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81579]', () => {
    cy.visit('/'+'mikones-tunic-plus-size-4.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81580]', () => {
    cy.visit('/'+'valley-tank-plus-size-3.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81581]', () => {
    cy.visit('/'+'babette-blouse-plus-size-3.html')
    cy.url().should('include', '/'+'clothing/luxe.html')
  })
  
  it('URL redirect for [81584]', () => {
    cy.visit('/'+'olivia-blouse-plus-size-8.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81585]', () => {
    cy.visit('/'+'olivia-blouse-plus-size-5.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81586]', () => {
    cy.visit('/'+'dreaming-blouse-plus-size-7.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81587]', () => {
    cy.visit('/'+'dreaming-blouse-plus-size-4.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81588]', () => {
    cy.visit('/'+'clover-legging-plus-size-7.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81589]', () => {
    cy.visit('/'+'clover-legging-plus-size-4.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81590]', () => {
    cy.visit('/'+'hira-linen-kimono-plus-size-7.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81591]', () => {
    cy.visit('/'+'hira-linen-kimono-plus-size-4.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81592]', () => {
    cy.visit('/'+'clover-easy-tunic-dress-plus-size-11.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81593]', () => {
    cy.visit('/'+'clover-easy-tunic-dress-plus-size-5.html')
    cy.url().should('include', '/'+'dresses.html')
  })
  
  it('URL redirect for [81594]', () => {
    cy.visit('/'+'samira-pleated-peasant-tunic-dress-plus-size-11.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81596]', () => {
    cy.visit('/'+'canvans-button-down-c14617bx-mtb-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81597]', () => {
    cy.visit('/'+'cambria-blouse-c14717bx-mti-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81598]', () => {
    cy.visit('/'+'esmeralda-suede-kaftan-w12717x-blk-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81599]', () => {
    cy.visit('/'+'flores-draped-cardigan-j40917x-blk-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81600]', () => {
    cy.visit('/'+'malui-dropped-shoulder-j20917x-agn-3x.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [81601]', () => {
    cy.visit('/'+'malui-dropped-shoulder-j20917x-blkd-3x.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [81602]', () => {
    cy.visit('/'+'malui-dropped-shoulder-j20917x-blk-3x.html')
    cy.url().should('include', '/'+'red-hot-and-festive.html')
  })
  
  it('URL redirect for [81603]', () => {
    cy.visit('/'+'rose-eyelet-top-c12017x-vnn-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81604]', () => {
    cy.visit('/'+'jossimar-flowy-tunic-c21117x-dgrp-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81605]', () => {
    cy.visit('/'+'jossy-top-c11917x-bgrv-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81606]', () => {
    cy.visit('/'+'paoloma-button-down-c14917ax-mta-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })
  
  it('URL redirect for [81607]', () => {
    cy.visit('/'+'cavalan-blouse-c15017ax-mti-3x.html')
    cy.url().should('include', '/'+'sale.html')
  })
  
  it('URL redirect for [81608]', () => {
    cy.visit('/'+'waleska-woven-panel-j30717x-blk-3x.html')
    cy.url().should('include', '/'+'sale/johnny-was.html')
  })

})