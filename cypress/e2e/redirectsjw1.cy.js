/// <reference types="cypress" />

describe('URL redirect - Step 1', () => {

  it('URL redirect for [2238]', () => {
    cy.visit('/' + 'luna-faith-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [2240]', () => {
    cy.visit('/' + 'prudence-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [2242]', () => {
    cy.visit('/' + 'butterfly-field-ori-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [2244]', () => {
    cy.visit('/' + 'aja-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [2394]', () => {
    cy.visit('/' + 'morning-mist-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [2396]', () => {
    cy.visit('/' + 'miller-change-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [2398]', () => {
    cy.visit('/' + 'rainforest-tropical-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [2400]', () => {
    cy.visit('/' + 'forever-joy-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [6460]', () => {
    cy.visit('/' + 'odette-scarf.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [6462]', () => {
    cy.visit('/' + 'winery-juliet-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [6464]', () => {
    cy.visit('/' + 'butterfly-field-garden-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [6851]', () => {
    cy.visit('/' + 'poplin-cargo-pants.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [6908]', () => {
    cy.visit('/' + 'linen-cargo-pants.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [6941]', () => {
    cy.visit('/' + 'poplin-cargo-shorts.html')
    cy.url().should('include', '/' + 'clothing.html')
  })


  it('URL redirect for [6976]', () => {
    cy.visit('/' + 'linen-cargo-shorts.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [7006]', () => {
    cy.visit('/' + 'linen-cargo-skirt.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [7062]', () => {
    cy.visit('/' + 'poplin-cargo-skirt-13767.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [7075]', () => {
    cy.visit('/' + 'silk-cargo-shorts.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [7092]', () => {
    cy.visit('/' + 'silk-cargo-pant.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [8045]', () => {
    cy.visit('/' + 'eddera-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8047]', () => {
    cy.visit('/' + 'loma-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8049]', () => {
    cy.visit('/' + 'milana-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8065]', () => {
    cy.visit('/' + 'fruitful-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [8260]', () => {
    cy.visit('/' + 'helio-play-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8392]', () => {
    cy.visit('/' + 'mediterranean-scarf.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [8394]', () => {
    cy.visit('/' + 'miami-beach-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [8403]', () => {
    cy.visit('/' + 'floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [8405]', () => {
    cy.visit('/' + 'tan-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8407]', () => {
    cy.visit('/' + 'soot-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8409]', () => {
    cy.visit('/' + 'olive-grey-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8410]', () => {
    cy.visit('/' + 'raspberry-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8412]', () => {
    cy.visit('/' + 'deep-plum-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8414]', () => {
    cy.visit('/' + 'black-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8808]', () => {
    cy.visit('/' + 'maycrest-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [8809]', () => {
    cy.visit('/' + 'dolce-vivo-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8810]', () => {
    cy.visit('/' + 'roslin-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [8811]', () => {
    cy.visit('/' + 'great-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [9356]', () => {
    cy.visit('/' + 'white-karina-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [9358]', () => {
    cy.visit('/' + 'karina-scarf-9802.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [9360]', () => {
    cy.visit('/' + 'mint-karina-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [9362]', () => {
    cy.visit('/' + 'pink-karina-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [9530]', () => {
    cy.visit('/' + 'voyage-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [9532]', () => {
    cy.visit('/' + 'passiflora-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [9732]', () => {
    cy.visit('/' + 'montecello-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [9734]', () => {
    cy.visit('/' + 'prissy-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [9736]', () => {
    cy.visit('/' + 'valenza-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [10481]', () => {
    cy.visit('/' + 'quintessa-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [10483]', () => {
    cy.visit('/' + 'ginger-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [10485]', () => {
    cy.visit('/' + 'quianna-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [10973]', () => {
    cy.visit('/' + 'gaberdine-cargo-pant-13613.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [11050]', () => {
    cy.visit('/' + 'vineyard-floral-embroidered-scarf-11430.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11052]', () => {
    cy.visit('/' + 'teal-floral-embroidered-scarf-11434.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11054]', () => {
    cy.visit('/' + 'green-floral-embroidered-scarf-11436.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11056]', () => {
    cy.visit('/' + 'mustard-floral-embroidered-scarf-11438.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11058]', () => {
    cy.visit('/' + 'mint-floral-embroidered-scarf-11440.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11060]', () => {
    cy.visit('/' + '09-30-12.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11069]', () => {
    cy.visit('/' + 'poplin-cargo-pants-35239.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [11070]', () => {
    cy.visit('/' + 'poplin-cargo-pants-35240.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [11072]', () => {
    cy.visit('/' + 'poplin-cargo-pants-35242.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [11074]', () => {
    cy.visit('/' + 'poplin-cargo-pants-35244.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [11132]', () => {
    cy.visit('/' + 'kreisen-hoodie-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11141]', () => {
    cy.visit('/' + 'light-grey-floral-embroidered-scarf-11523.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11147]', () => {
    cy.visit('/' + 'manulito-hoodie-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11148]', () => {
    cy.visit('/' + 'malala-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11323]', () => {
    cy.visit('/' + 'red-flower-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [11324]', () => {
    cy.visit('/' + 'couleur-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [11325]', () => {
    cy.visit('/' + 'blanche-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [11326]', () => {
    cy.visit('/' + 'bella-sprout-calm-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11717]', () => {
    cy.visit('/' + 'brick-black-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11719]', () => {
    cy.visit('/' + 'black-white-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11721]', () => {
    cy.visit('/' + 'camel-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11723]', () => {
    cy.visit('/' + 'desert-oasis-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11725]', () => {
    cy.visit('/' + 'hot-pink-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11727]', () => {
    cy.visit('/' + 'royal-floral-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [11951]', () => {
    cy.visit('/' + 'poplin-cargo-crop.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [12035]', () => {
    cy.visit('/' + 'cullen-shadow-scarf-12377.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [12037]', () => {
    cy.visit('/' + 'mayberry-scarf-12379.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [12039]', () => {
    cy.visit('/' + 'potter-scarf-12381.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [12041]', () => {
    cy.visit('/' + 'theo-midnight-scarf-12383.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [13100]', () => {
    cy.visit('/' + 'iron-rose-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [13211]', () => {
    cy.visit('/' + 'asia-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [13212]', () => {
    cy.visit('/' + 'spark-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [13213]', () => {
    cy.visit('/' + 'omni-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [13272]', () => {
    cy.visit('/' + 'sateen-cargo-pants.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [13573]', () => {
    cy.visit('/' + 'asia-scarf-jwc1088-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [13670]', () => {
    cy.visit('/' + 'jill-scarf-15032.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [13672]', () => {
    cy.visit('/' + 'jill-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [13675]', () => {
    cy.visit('/' + 'jill-scarf-15033.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [13677]', () => {
    cy.visit('/' + 'jill-scarf-15034.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [13679]', () => {
    cy.visit('/' + 'jill-scarf-15035.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [13681]', () => {
    cy.visit('/' + 'jill-scarf-15036.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [13929]', () => {
    cy.visit('/' + 'fierra-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [13930]', () => {
    cy.visit('/' + 'talasi-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [13931]', () => {
    cy.visit('/' + 'bayhill-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [13932]', () => {
    cy.visit('/' + 'marion-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14218]', () => {
    cy.visit('/' + 'samantha-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14219]', () => {
    cy.visit('/' + 'samantha-scarf-16173.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14220]', () => {
    cy.visit('/' + 'samantha-scarf-16174.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14221]', () => {
    cy.visit('/' + 'samantha-scarf-16175.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14222]', () => {
    cy.visit('/' + 'samantha-scarf-16176.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14223]', () => {
    cy.visit('/' + 'samantha-scarf-16177.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14224]', () => {
    cy.visit('/' + 'samantha-scarf-16178.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14225]', () => {
    cy.visit('/' + 'samantha-scarf-16179.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14226]', () => {
    cy.visit('/' + 'melissa-scarf-jw1112-leli-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14227]', () => {
    cy.visit('/' + 'melissa-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [14229]', () => {
    cy.visit('/' + 'melissa-scarf-16488.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [14230]', () => {
    cy.visit('/' + 'melissa-scarf-jw1112-puor-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14231]', () => {
    cy.visit('/' + 'melissa-scarf-16489.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [14232]', () => {
    cy.visit('/' + 'melissa-scarf-jw1112-pkle.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14233]', () => {
    cy.visit('/' + 'melissa-scarf-16490.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [14234]', () => {
    cy.visit('/' + 'melissa-scarf-jw1112-pkli.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14235]', () => {
    cy.visit('/' + 'melissa-scarf-16491.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [14237]', () => {
    cy.visit('/' + 'melissa-scarf-16492.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [14238]', () => {
    cy.visit('/' + 'melissa-scarf-jw1112-pkor-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14239]', () => {
    cy.visit('/' + 'melissa-scarf-16493.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [14240]', () => {
    cy.visit('/' + 'melissa-scarf-jw1112-pupk-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [14241]', () => {
    cy.visit('/' + 'melissa-scarf-16494.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [14866]', () => {
    cy.visit('/' + 'whisteria-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [14868]', () => {
    cy.visit('/' + 'tangelo-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [14870]', () => {
    cy.visit('/' + 'patchwork-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [14872]', () => {
    cy.visit('/' + 'euphoria-duo-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [15522]', () => {
    cy.visit('/' + 'le-claire-scarf-15737.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [15523]', () => {
    cy.visit('/' + 'adisa-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [15526]', () => {
    cy.visit('/' + 'bellisimo-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [15563]', () => {
    cy.visit('/' + 'serenity-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [15564]', () => {
    cy.visit('/' + 'carnival-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [15565]', () => {
    cy.visit('/' + 'biya-flower-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [15566]', () => {
    cy.visit('/' + 'polka-paisley-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [16433]', () => {
    cy.visit('/' + 'yellow-submarine-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [16434]', () => {
    cy.visit('/' + 'phoenix-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [16435]', () => {
    cy.visit('/' + 'mode-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [16652]', () => {
    cy.visit('/' + 'ginsberg-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [16883]', () => {
    cy.visit('/' + 'poplin-cargo-pants-35249.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [17082]', () => {
    cy.visit('/' + 'serrano-cave-scarf-jwc1128-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [17141]', () => {
    cy.visit('/' + 'taylor-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [17142]', () => {
    cy.visit('/' + 'eden-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [17143]', () => {
    cy.visit('/' + 'serrano-cave-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [17144]', () => {
    cy.visit('/' + 'cloudy-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [17145]', () => {
    cy.visit('/' + 'striped-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [17518]', () => {
    cy.visit('/' + 'medium-slip-28477.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [18110]', () => {
    cy.visit('/' + 'dragon-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [18111]', () => {
    cy.visit('/' + 'sonoma-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [18112]', () => {
    cy.visit('/' + 'butterfly-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [18113]', () => {
    cy.visit('/' + 'mala-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [18520]', () => {
    cy.visit('/' + 'medium-lace-slip-21016.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [18532]', () => {
    cy.visit('/' + 'isabel-scarf-18787.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [18556]', () => {
    cy.visit('/' + 'jaime-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [18558]', () => {
    cy.visit('/' + 'daisy-lace-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [18560]', () => {
    cy.visit('/' + 'antique-lace-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [18562]', () => {
    cy.visit('/' + 'solid-black-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [18564]', () => {
    cy.visit('/' + 'solid-white-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [18566]', () => {
    cy.visit('/' + 'solid-blue-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [18572]', () => {
    cy.visit('/' + 'fanciful-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [18574]', () => {
    cy.visit('/' + 'stripe-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [18576]', () => {
    cy.visit('/' + 'sorrentine-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [18578]', () => {
    cy.visit('/' + 'trevi-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [18580]', () => {
    cy.visit('/' + 'sunlight-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [18582]', () => {
    cy.visit('/' + 'lauren-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [18584]', () => {
    cy.visit('/' + 'sunita-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [18587]', () => {
    cy.visit('/' + 'sateen-cargo-pants-26656.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [18742]', () => {
    cy.visit('/' + 'fresh-garden-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [18743]', () => {
    cy.visit('/' + 'silver-bay-scarf-jwc1129-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [18744]', () => {
    cy.visit('/' + 'silver-bay-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [18745]', () => {
    cy.visit('/' + 'sunlight-scarf-19008.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [18749]', () => {
    cy.visit('/' + 'sateen-mestina-cargo.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [18898]', () => {
    cy.visit('/' + 'tracey-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [18899]', () => {
    cy.visit('/' + 'cherry-blossom-scarf-19299.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [18900]', () => {
    cy.visit('/' + 'tierra-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [19095]', () => {
    cy.visit('/' + 'cherry-blossom-scarf-jwc1098-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [19096]', () => {
    cy.visit('/' + 'tierra-scarf-jwc1125-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [19300]', () => {
    cy.visit('/' + 'butterfly-flower-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [19302]', () => {
    cy.visit('/' + 'blue-mosaic-paisley-flow-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [19304]', () => {
    cy.visit('/' + 'romero-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [19306]', () => {
    cy.visit('/' + 'eiji-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [19307]', () => {
    cy.visit('/' + 'elan-scarf-jwc187-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [19308]', () => {
    cy.visit('/' + 'elan-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [19310]', () => {
    cy.visit('/' + 'solar-deity-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [19899]', () => {
    cy.visit('/' + 'botantical-lace-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [19900]', () => {
    cy.visit('/' + 'rubani-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [19912]', () => {
    cy.visit('/' + 'medium-slip-28478.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [20116]', () => {
    cy.visit('/' + 'poplin-cargo-pants-35250.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [20117]', () => {
    cy.visit('/' + 'poplin-cargo-pants-35251.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [20680]', () => {
    cy.visit('/' + 'kamelia-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [20681]', () => {
    cy.visit('/' + 'biya-feather-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [20683]', () => {
    cy.visit('/' + 'opium-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [20744]', () => {
    cy.visit('/' + 'poplin-cargo-pants-35253.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [21410]', () => {
    cy.visit('/' + 'thai-scarf-jwc1168-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [21411]', () => {
    cy.visit('/' + 'belletini-scarf-jwc1174-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [21480]', () => {
    cy.visit('/' + 'bellamy-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [21481]', () => {
    cy.visit('/' + 'sunrose-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [21482]', () => {
    cy.visit('/' + 'thai-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [21483]', () => {
    cy.visit('/' + 'belletini-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [21503]', () => {
    cy.visit('/' + 'medium-slip-28479.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [21536]', () => {
    cy.visit('/' + 'flower-patch-cargo-pant.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [21706]', () => {
    cy.visit('/' + 'how-to-tie-a-scarf-book.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [21715]', () => {
    cy.visit('/' + 'tie-dye-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [21717]', () => {
    cy.visit('/' + 'tie-dye-scarf-21802.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [22731]', () => {
    cy.visit('/' + 'blue-springs-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [22732]', () => {
    cy.visit('/' + 'bandana-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [22733]', () => {
    cy.visit('/' + 'jasper-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [22734]', () => {
    cy.visit('/' + 'kia-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [22754]', () => {
    cy.visit('/' + 'medium-slip-28480.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [22796]', () => {
    cy.visit('/' + 'beaded-silk-geo-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [22797]', () => {
    cy.visit('/' + 'beaded-silk-geo-scarf-22927.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [22801]', () => {
    cy.visit('/' + 'sateen-cargo-pants-26657.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [22808]', () => {
    cy.visit('/' + 'mitra-cargo-dress.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [22942]', () => {
    cy.visit('/' + 'dandridge-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [22944]', () => {
    cy.visit('/' + 'village-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [22946]', () => {
    cy.visit('/' + 'integrity-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [22948]', () => {
    cy.visit('/' + 'enlightenment-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [23676]', () => {
    cy.visit('/' + 'teally-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [23677]', () => {
    cy.visit('/' + 'fairchild-scarf-23795.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [23678]', () => {
    cy.visit('/' + 'alamo-mint-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [23679]', () => {
    cy.visit('/' + 'donna-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [23702]', () => {
    cy.visit('/' + 'medium-slip-28481.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [23743]', () => {
    cy.visit('/' + 'cydrey-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [23746]', () => {
    cy.visit('/' + 'linen-cargo-pants-26079.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [23747]', () => {
    cy.visit('/' + 'linen-cargo-crop-23940.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [23751]', () => {
    cy.visit('/' + 'cupra-cargo-short.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [23782]', () => {
    cy.visit('/' + 'poplin-cargo-pant-28221.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [23986]', () => {
    cy.visit('/' + 'ross-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [23987]', () => {
    cy.visit('/' + 'flint-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [23989]', () => {
    cy.visit('/' + 'sala-cream-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [24011]', () => {
    cy.visit('/' + 'medium-slip-28482.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [24049]', () => {
    cy.visit('/' + 'poplin-cargo-short.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [24377]', () => {
    cy.visit('/' + 'flint-scarf-jwc1162-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [24742]', () => {
    cy.visit('/' + 'poplin-cargo-shorts-26502.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [24751]', () => {
    cy.visit('/' + 'poplin-cargo-shorts-26503.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [25135]', () => {
    cy.visit('/' + 'biscotti-scarf-jwc1175-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [25461]', () => {
    cy.visit('/' + 'mini-checker-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [25462]', () => {
    cy.visit('/' + 'mini-garden-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [25463]', () => {
    cy.visit('/' + 'biscotti-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [25464]', () => {
    cy.visit('/' + 'red-embroidered-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [25482]', () => {
    cy.visit('/' + 'medium-slip-28483.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [25674]', () => {
    cy.visit('/' + 'marika-cargo-pant-28260.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [25683]', () => {
    cy.visit('/' + 'cupra-cargo-short-25757.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [25770]', () => {
    cy.visit('/' + 'lasso-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [25771]', () => {
    cy.visit('/' + 'ornament-lilac-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [25772]', () => {
    cy.visit('/' + 'serrano-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [25773]', () => {
    cy.visit('/' + 'aziz-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [26516]', () => {
    cy.visit('/' + 'sateen-cargo-pants-26658.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [27287]', () => {
    cy.visit('/' + 'monte-vista-circle-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [27324]', () => {
    cy.visit('/' + 'rocha-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [27325]', () => {
    cy.visit('/' + 'altivo-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [27326]', () => {
    cy.visit('/' + 'igory-lisa-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [27327]', () => {
    cy.visit('/' + 'red-cloud-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [27352]', () => {
    cy.visit('/' + 'medium-slip-28505.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [27408]', () => {
    cy.visit('/' + 'poplin-cargo-short-27473.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [27409]', () => {
    cy.visit('/' + 'long-cargo-skirt-27563.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [27410]', () => {
    cy.visit('/' + 'long-cargo-skirt-27564.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [28045]', () => {
    cy.visit('/' + 'rumble-circle-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [28086]', () => {
    cy.visit('/' + 'obsession-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [28087]', () => {
    cy.visit('/' + 'hummingbird-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [28088]', () => {
    cy.visit('/' + 'lena-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [28163]', () => {
    cy.visit('/' + 'layandalyn-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [28170]', () => {
    cy.visit('/' + 'poplin-cargo-pant-28246.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [28171]', () => {
    cy.visit('/' + 'sateen-mestina-cargo-pant.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [28172]', () => {
    cy.visit('/' + 'marika-cargo-pant-28309.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [28173]', () => {
    cy.visit('/' + 'marika-cargo-pant-28310.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [29173]', () => {
    cy.visit('/' + 'circle-scarf.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [29174]', () => {
    cy.visit('/' + 'circle-scarf-29198.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [29213]', () => {
    cy.visit('/' + 'popely-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [29214]', () => {
    cy.visit('/' + 'verdino-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [29215]', () => {
    cy.visit('/' + 'jace-jw-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [29216]', () => {
    cy.visit('/' + 'tile-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [29295]', () => {
    cy.visit('/' + 'sateen-cargo-pants-29319.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [29318]', () => {
    cy.visit('/' + 'cardi-with-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [29421]', () => {
    cy.visit('/' + 'sferra-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [29489]', () => {
    cy.visit('/' + 'medium-slip-9.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [29495]', () => {
    cy.visit('/' + 'medium-slip-10.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [30228]', () => {
    cy.visit('/' + 'tribal-circle-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [30229]', () => {
    cy.visit('/' + 'tribal-circle-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [30271]', () => {
    cy.visit('/' + 'jimmy-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [30272]', () => {
    cy.visit('/' + 'vintage-tapestry-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [30273]', () => {
    cy.visit('/' + 'diamonds-pearls-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [30274]', () => {
    cy.visit('/' + 'rich-paisley-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [30359]', () => {
    cy.visit('/' + 'tie-dye-infinity-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [30369]', () => {
    cy.visit('/' + 'tie-dye-infinity-scarf-1.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [30431]', () => {
    cy.visit('/' + 'medium-slip-11.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [30437]', () => {
    cy.visit('/' + 'medium-slip-12.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [30557]', () => {
    cy.visit('/' + 'peacock-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [30558]', () => {
    cy.visit('/' + 'asian-dragon-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [30559]', () => {
    cy.visit('/' + 'chaney-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [30560]', () => {
    cy.visit('/' + 'retro-geo-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [30616]', () => {
    cy.visit('/' + 'elan-hoodie-scarf.html')
    cy.url().should('include', '/' + 'clothing/biya.html')
  })

  it('URL redirect for [30807]', () => {
    cy.visit('/' + 'chaney-scarf-jwc1208-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [31426]', () => {
    cy.visit('/' + 'wilkins-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [31427]', () => {
    cy.visit('/' + 'grey-bird-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [31428]', () => {
    cy.visit('/' + 'kobi-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [31429]', () => {
    cy.visit('/' + 'pepin-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [32181]', () => {
    cy.visit('/' + 'grey-bird-scarf-jwc1197-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [32234]', () => {
    cy.visit('/' + 'mariko-cargo-pants.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [32235]', () => {
    cy.visit('/' + 'linen-cargo-crop-3.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [32236]', () => {
    cy.visit('/' + 'poplin-cargo-pants-16.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [32774]', () => {
    cy.visit('/' + 'aurora-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [32775]', () => {
    cy.visit('/' + 'hummingbird-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [32777]', () => {
    cy.visit('/' + 'nova-floral-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [32783]', () => {
    cy.visit('/' + 'flair-twill-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [32815]', () => {
    cy.visit('/' + 'short-mesh-hem-slip-2.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [32816]', () => {
    cy.visit('/' + 'short-mesh-hem-slip-3.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [32817]', () => {
    cy.visit('/' + 'medium-mesh-hem-slip-2.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [32818]', () => {
    cy.visit('/' + 'medium-mesh-hem-slip-3.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [32846]', () => {
    cy.visit('/' + 'linen-cargo-pants-35.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [32847]', () => {
    cy.visit('/' + 'cupra-long-cargo-skirt.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [33900]', () => {
    cy.visit('/' + 'tea-garden-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [33901]', () => {
    cy.visit('/' + 'anna-melody-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [33902]', () => {
    cy.visit('/' + 'weirick-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [33907]', () => {
    cy.visit('/' + 'dragon-patch-twill-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [33928]', () => {
    cy.visit('/' + 'medium-slip-13.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [33929]', () => {
    cy.visit('/' + 'medium-slip-14.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [33986]', () => {
    cy.visit('/' + 'marika-cargo-pants.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [33987]', () => {
    cy.visit('/' + 'marika-cargo-pants-1.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [34223]', () => {
    cy.visit('/' + 'tea-garden-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [34246]', () => {
    cy.visit('/' + 'dragon-ptch-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [34816]', () => {
    cy.visit('/' + 'lemon-leaf-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [34817]', () => {
    cy.visit('/' + 'luxor-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [34818]', () => {
    cy.visit('/' + 'mayee-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [34819]', () => {
    cy.visit('/' + 'monroe-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [34820]', () => {
    cy.visit('/' + 'moonlight-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [34823]', () => {
    cy.visit('/' + 'rowen-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [34824]', () => {
    cy.visit('/' + 'toro-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [34825]', () => {
    cy.visit('/' + 'theia-ori-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [34826]', () => {
    cy.visit('/' + 'tropic-thunder-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [34827]', () => {
    cy.visit('/' + 'winery-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [34828]', () => {
    cy.visit('/' + 'edgar-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [34829]', () => {
    cy.visit('/' + 'enchanted-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [34830]', () => {
    cy.visit('/' + 'ensemble-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [34831]', () => {
    cy.visit('/' + 'expression-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [34832]', () => {
    cy.visit('/' + 'insight-view-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [34833]', () => {
    cy.visit('/' + 'irina-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [34844]', () => {
    cy.visit('/' + 'toro-scarf-jwc1083-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [34976]', () => {
    cy.visit('/' + 'marika-cargo-pants-2.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [34988]', () => {
    cy.visit('/' + 'zipper-cargo-pants.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [35084]', () => {
    cy.visit('/' + 'tea-leaf-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [35086]', () => {
    cy.visit('/' + 'poe-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [35087]', () => {
    cy.visit('/' + 'anthen-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [35092]', () => {
    cy.visit('/' + 'aim-twill-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [35359]', () => {
    cy.visit('/' + 'short-mesh-hem-slip-4.html')
    cy.url().should('include', '/' + 'dresses/clothing/dresses/slips.html')
  })

  it('URL redirect for [35360]', () => {
    cy.visit('/' + 'short-mesh-hem-slip-5.html')
    cy.url().should('include', '/' + 'dresses/clothing/dresses/slips.html')
  })

  it('URL redirect for [35361]', () => {
    cy.visit('/' + 'med-mesh-hem-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [35362]', () => {
    cy.visit('/' + 'med-mesh-hem-slip-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [35928]', () => {
    cy.visit('/' + 'cupra-cargo-shorts.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [36078]', () => {
    cy.visit('/' + 'bella-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [36092]', () => {
    cy.visit('/' + 'short-mesh-hem-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [36093]', () => {
    cy.visit('/' + 'medium-mesh-hem-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [36094]', () => {
    cy.visit('/' + 'lacey-medium-slip.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [36141]', () => {
    cy.visit('/' + 'lacey-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [36144]', () => {
    cy.visit('/' + 'modisch-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [37230]', () => {
    cy.visit('/' + 'short-mesh-hem-slip-9.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [37231]', () => {
    cy.visit('/' + 'short-mesh-hem-slip-10.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [37232]', () => {
    cy.visit('/' + 'medium-mesh-hem-slip-7.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [37233]', () => {
    cy.visit('/' + 'medium-mesh-hem-slip-8.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [37234]', () => {
    cy.visit('/' + 'lacey-medium-slip-1.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [37555]', () => {
    cy.visit('/' + 'pratesi-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [37556]', () => {
    cy.visit('/' + 'lamb-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [37557]', () => {
    cy.visit('/' + 'lowell-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [37558]', () => {
    cy.visit('/' + 'garden-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [37940]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [37941]', () => {
    cy.visit('/' + 'medium-slip-16.html')
    cy.url().should('include', '/' + 'look-book/love-n-liberty.html')
  })

  it('URL redirect for [38214]', () => {
    cy.visit('/' + 'marika-cargo-pants-5.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [38226]', () => {
    cy.visit('/' + 'poplin-cargo-pants-20.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [38369]', () => {
    cy.visit('/' + 'helen-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [38370]', () => {
    cy.visit('/' + 'nikky-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [38371]', () => {
    cy.visit('/' + 'biya-circle-scarf.html')
    cy.url().should('include', '/' + 'look-book/johnnywas.html')
  })

  it('URL redirect for [38372]', () => {
    cy.visit('/' + 'exotic-flower-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [38378]', () => {
    cy.visit('/' + 'paradise-scarf.html')
    cy.url().should('include', '/' + 'look-book/johnnywas.html')
  })

  it('URL redirect for [39001]', () => {
    cy.visit('/' + 'asian-geo-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [39002]', () => {
    cy.visit('/' + 'morelli-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [39003]', () => {
    cy.visit('/' + 'retro-feather-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [39004]', () => {
    cy.visit('/' + 'karina-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [39012]', () => {
    cy.visit('/' + 'urban-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [39560]', () => {
    cy.visit('/' + 'medium-slip-19.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [39562]', () => {
    cy.visit('/' + 'medium-slip-20.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [39704]', () => {
    cy.visit('/' + 'marika-cargo-pants-7.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [39812]', () => {
    cy.visit('/' + 'lana-scarf-back-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [40172]', () => {
    cy.visit('/' + 'sari-scarf.html')
    cy.url().should('include', '/' + 'look-book/johnnywas.html')
  })

  it('URL redirect for [40173]', () => {
    cy.visit('/' + 'jw-fantasy-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [40174]', () => {
    cy.visit('/' + 'currency-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [40175]', () => {
    cy.visit('/' + 'heidi-scarf.html')
    cy.url().should('include', '/' + 'look-book/johnnywas.html')
  })

  it('URL redirect for [40181]', () => {
    cy.visit('/' + 'franc-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [40580]', () => {
    cy.visit('/' + 'areanthe-scarf-back-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [40661]', () => {
    cy.visit('/' + 'medium-slip-21.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [40663]', () => {
    cy.visit('/' + 'medium-slip-22.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [41170]', () => {
    cy.visit('/' + 'katara-scarf-jwc1014-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [41171]', () => {
    cy.visit('/' + 'katara-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [41173]', () => {
    cy.visit('/' + 'nativo-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [41218]', () => {
    cy.visit('/' + 'wild-flower-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [41221]', () => {
    cy.visit('/' + 'endo-scarf.html')
    cy.url().should('include', '/' + 'look-book/johnnywas.html')
  })

  it('URL redirect for [41227]', () => {
    cy.visit('/' + 'kella-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [41532]', () => {
    cy.visit('/' + 'medium-slip-23.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [41533]', () => {
    cy.visit('/' + 'medium-slip-24.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [41672]', () => {
    cy.visit('/' + 'cupra-long-cargo-skirt-1.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [41673]', () => {
    cy.visit('/' + 'cupra-long-cargo-skirt-2.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [42003]', () => {
    cy.visit('/' + 'azalea-scarf-back-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [42260]', () => {
    cy.visit('/' + 'biya-plaid-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42261]', () => {
    cy.visit('/' + 'biya-solid-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42262]', () => {
    cy.visit('/' + 'biya-solid-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42263]', () => {
    cy.visit('/' + 'biya-solid-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42264]', () => {
    cy.visit('/' + 'maui-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42266]', () => {
    cy.visit('/' + 'trilium-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42267]', () => {
    cy.visit('/' + 'island-scroll-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42268]', () => {
    cy.visit('/' + 'victorian-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42269]', () => {
    cy.visit('/' + 'keystone-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42270]', () => {
    cy.visit('/' + 'affection-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42305]', () => {
    cy.visit('/' + 'maui-scarf-jwc1183-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42306]', () => {
    cy.visit('/' + 'antq-paisley-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42307]', () => {
    cy.visit('/' + 'trilium-scarf-jwc1169-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42308]', () => {
    cy.visit('/' + 'island-scroll-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42309]', () => {
    cy.visit('/' + 'victorian-scarf-jwc1147-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42310]', () => {
    cy.visit('/' + 'keystone-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [42354]', () => {
    cy.visit('/' + 'serenity-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [42355]', () => {
    cy.visit('/' + 'rose-garden-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [42356]', () => {
    cy.visit('/' + 'yana-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [42357]', () => {
    cy.visit('/' + 'bylexi-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [42358]', () => {
    cy.visit('/' + 'collection-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [42723]', () => {
    cy.visit('/' + 'lace-hemmed-medium-slip.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [42724]', () => {
    cy.visit('/' + 'lace-hemmed-medium-slip-1.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [42955]', () => {
    cy.visit('/' + 'tierry-cargo-pant.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [42957]', () => {
    cy.visit('/' + 'sateen-cargo-pants-5.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [42958]', () => {
    cy.visit('/' + 'mariko-cargo-pants-1.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [43302]', () => {
    cy.visit('/' + 'ruru-scarf.html')
    cy.url().should('include', '/' + 'look-book/spring.html')
  })

  it('URL redirect for [43303]', () => {
    cy.visit('/' + 'nellis-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [43304]', () => {
    cy.visit('/' + 'livelli-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [43305]', () => {
    cy.visit('/' + 'laite-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [43306]', () => {
    cy.visit('/' + 'koi-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [43325]', () => {
    cy.visit('/' + 'manj-scarf-back-shirt.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [43354]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem25-ec7bc219d6b27db42bc7a99e70a6ad21.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [43355]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem-26-0ac63fc89fb84b9c110d7dd412908165.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [43361]', () => {
    cy.visit('/' + 'poplin-cargo-pant-3.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [43362]', () => {
    cy.visit('/' + 'mariko-cargo-pants-2.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [43363]', () => {
    cy.visit('/' + 'long-cargo-skirt-4.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [43364]', () => {
    cy.visit('/' + 'reyle-cargo-pants.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [43679]', () => {
    cy.visit('/' + 'livelli-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [44397]', () => {
    cy.visit('/' + 'neill-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [44398]', () => {
    cy.visit('/' + 'butterfly-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [44399]', () => {
    cy.visit('/' + 'nikky-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [44400]', () => {
    cy.visit('/' + 'periwinkle-scarf.html')
    cy.url().should('include', '/' + 'look-book/spring.html')
  })

  it('URL redirect for [44430]', () => {
    cy.visit('/' + 'melani-scarf-mix-shirt.html')
    cy.url().should('include', '/' + 'clothing/3j-workshop.html')
  })

  it('URL redirect for [44471]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [44472]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem-1.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [45469]', () => {
    cy.visit('/' + 'linen-cargo-pants-36.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [45470]', () => {
    cy.visit('/' + 'pissaro-cargo-pants.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [45471]', () => {
    cy.visit('/' + 'poplin-cargo-pants-21.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [45482]', () => {
    cy.visit('/' + 'bree-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45483]', () => {
    cy.visit('/' + 'betty-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45484]', () => {
    cy.visit('/' + 'helen-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [45485]', () => {
    cy.visit('/' + 'helen-scarf-2.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45486]', () => {
    cy.visit('/' + 'lacey-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [45487]', () => {
    cy.visit('/' + 'lacey-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [45488]', () => {
    cy.visit('/' + 'pepin-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45489]', () => {
    cy.visit('/' + 'pepin-scarf-2.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45490]', () => {
    cy.visit('/' + 'modisch-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [45491]', () => {
    cy.visit('/' + 'modisch-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [45492]', () => {
    cy.visit('/' + 'kobi-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45493]', () => {
    cy.visit('/' + 'lowell-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [45496]', () => {
    cy.visit('/' + 'lamb-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45497]', () => {
    cy.visit('/' + 'lamb-scarf-2.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45498]', () => {
    cy.visit('/' + 'aurora-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [45499]', () => {
    cy.visit('/' + 'aurora-scarf-2.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45500]', () => {
    cy.visit('/' + 'nikky-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [45501]', () => {
    cy.visit('/' + 'nikky-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [45503]', () => {
    cy.visit('/' + 'wilkins-scarf-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [45554]', () => {
    cy.visit('/' + 'timony-linen-t-shirt-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45559]', () => {
    cy.visit('/' + 'malina-short-wrap-2.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45564]', () => {
    cy.visit('/' + 'mod-eyelet-tunic.html')
    cy.url().should('include', '/' + 'look-book/spring.html')
  })

  it('URL redirect for [45568]', () => {
    cy.visit('/' + 'scalloped-v-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [45569]', () => {
    cy.visit('/' + 'scalloped-v-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [45570]', () => {
    cy.visit('/' + 'scalloped-v-tee-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [45578]', () => {
    cy.visit('/' + 'sweetheart-patchwork-dress.html')
    cy.url().should('include', '/' + 'look-book/spring.html')
  })

  it('URL redirect for [45588]', () => {
    cy.visit('/' + 'sable-tunic-2.html')
    cy.url().should('include', '/' + 'look-book/spring.html')
  })

  it('URL redirect for [45591]', () => {
    cy.visit('/' + 'olivia-blouse.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [45597]', () => {
    cy.visit('/' + 'alyssa-kimono-dress.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/outerwear-kimonos.html')
  })

  it('URL redirect for [45598]', () => {
    cy.visit('/' + 'alyssa-kimono-dress-1.html')
    cy.url().should('include', '/' + 'look-book/spring.html')
  })

  it('URL redirect for [45601]', () => {
    cy.visit('/' + 'adriana-reversible-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [45602]', () => {
    cy.visit('/' + 'reversible-kimono-jacket.html')
    cy.url().should('include', '/' + 'look-book/spring.html')
  })

  it('URL redirect for [45603]', () => {
    cy.visit('/' + 'multi-tier-cherrie-skirt.html')
    cy.url().should('include', '/' + 'look-book/spring.html')
  })

  it('URL redirect for [45610]', () => {
    cy.visit('/' + 'jessner-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45611]', () => {
    cy.visit('/' + 'villa-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [45612]', () => {
    cy.visit('/' + 'endo-spring-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45613]', () => {
    cy.visit('/' + 'floral-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [45614]', () => {
    cy.visit('/' + 'kav-obi-belt.html')
    cy.url().should('include', '/' + 'accessories/belts.html')
  })

  it('URL redirect for [45615]', () => {
    cy.visit('/' + 'peacock-fringe-kimono.html')
    cy.url().should('include', '/' + 'accessories/jewelry/rings.html')
  })

  it('URL redirect for [45616]', () => {
    cy.visit('/' + 'peacock-fringe-kimono-1.html')
    cy.url().should('include', '/' + 'accessories/jewelry/rings.html')
  })

  it('URL redirect for [45617]', () => {
    cy.visit('/' + 'bella-linen-peasant-tunic.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45618]', () => {
    cy.visit('/' + 'bella-linen-peasant-tunic-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45619]', () => {
    cy.visit('/' + 'bella-linen-peasant-tunic-2.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45620]', () => {
    cy.visit('/' + 'dharma-trapeze-tee.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45621]', () => {
    cy.visit('/' + 'dharma-trapeze-tee-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45622]', () => {
    cy.visit('/' + 'calista-shirt-tail-tank.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45623]', () => {
    cy.visit('/' + 'calista-shirt-tail-tank-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45624]', () => {
    cy.visit('/' + 'calista-shirt-tail-tank-2.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45625]', () => {
    cy.visit('/' + 'sunniva-linen-shirred-back-tee.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45626]', () => {
    cy.visit('/' + 'sunniva-linen-shirred-back-tee-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45627]', () => {
    cy.visit('/' + 'dharma-crop-legging.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [45629]', () => {
    cy.visit('/' + 'dharma-long-drape-poncho-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45630]', () => {
    cy.visit('/' + 'aileen-v-neck-long-poncho.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45631]', () => {
    cy.visit('/' + 'bella-s-s-boho-tunic.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45632]', () => {
    cy.visit('/' + 'calista-side-slit-maxi-dress.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45633]', () => {
    cy.visit('/' + 'sunniva-linen-palazzo-pant.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45634]', () => {
    cy.visit('/' + 'dharma-side-slit-maxi-skirt.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45635]', () => {
    cy.visit('/' + 'dharma-side-slit-maxi-skirt-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45636]', () => {
    cy.visit('/' + 'aileen-linen-draped-cardigan.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [45637]', () => {
    cy.visit('/' + 'lizzie-emb-blouse.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45638]', () => {
    cy.visit('/' + 'lizzie-emb-blouse-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45639]', () => {
    cy.visit('/' + 'pansy-shift-dress.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45640]', () => {
    cy.visit('/' + 'pansy-shift-dress-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45641]', () => {
    cy.visit('/' + 'jean-sweet-heart-top.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45642]', () => {
    cy.visit('/' + 'jean-sweet-heart-top-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45643]', () => {
    cy.visit('/' + 'olive-emb-mesh-dress.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45644]', () => {
    cy.visit('/' + 'olive-emb-mesh-dress-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45645]', () => {
    cy.visit('/' + 'lulu-lace-front-emb-tunic.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45646]', () => {
    cy.visit('/' + 'maggie-emb-top.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45647]', () => {
    cy.visit('/' + 'dee-pintuck-iris-blouse.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45648]', () => {
    cy.visit('/' + 'rosie-eyelet-emb-pant.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45649]', () => {
    cy.visit('/' + 'rosie-eyelet-emb-pant-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45650]', () => {
    cy.visit('/' + 'iris-spaghetti-dress.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45651]', () => {
    cy.visit('/' + 'evie-iris-fringe-jacket.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45652]', () => {
    cy.visit('/' + 'applique-front-emb-tank.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45653]', () => {
    cy.visit('/' + 'applique-front-emb-tank-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45654]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem-2.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [45655]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem-3.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [45656]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem-4.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [45657]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem-2.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [45658]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem-3.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [45659]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem-4.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [45660]', () => {
    cy.visit('/' + 'long-slip-w-emb-chiffon-skirt.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45661]', () => {
    cy.visit('/' + 'long-slip-w-emb-chiffon-skirt-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45662]', () => {
    cy.visit('/' + 'long-slip-w-emb-chiffon-skirt-2.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [45663]', () => {
    cy.visit('/' + 'astrid-effortless-tunic.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45664]', () => {
    cy.visit('/' + 'astrid-effortless-tunic-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45665]', () => {
    cy.visit('/' + 'lyla-ls-hi-lo-basic-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45666]', () => {
    cy.visit('/' + 'lyla-ls-hi-lo-basic-shirt-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45667]', () => {
    cy.visit('/' + 'odene-pleated-peasant-tunic.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45668]', () => {
    cy.visit('/' + 'odene-pleated-peasant-tunic-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45669]', () => {
    cy.visit('/' + 'v-neck-poncho-14.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45670]', () => {
    cy.visit('/' + 'astrid-handkerchief-dress.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45671]', () => {
    cy.visit('/' + 'polly-button-back-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45672]', () => {
    cy.visit('/' + 'polly-button-back-shirt-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45673]', () => {
    cy.visit('/' + 'lyla-eyelet-panel-poncho.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45674]', () => {
    cy.visit('/' + 'lyla-eyelet-panel-poncho-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45675]', () => {
    cy.visit('/' + 'polly-3-4-sleeve-v-neck-tunic.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45676]', () => {
    cy.visit('/' + 'isabella-tunic.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45677]', () => {
    cy.visit('/' + 'v-neck-djellaba.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45678]', () => {
    cy.visit('/' + 'mavi-top.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45679]', () => {
    cy.visit('/' + 'mavi-top-1.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45680]', () => {
    cy.visit('/' + 'fay-reversible-top.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45681]', () => {
    cy.visit('/' + 'fay-reversible-top-1.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45682]', () => {
    cy.visit('/' + 'hartley-top.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45683]', () => {
    cy.visit('/' + 'kinsley-top.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45684]', () => {
    cy.visit('/' + 'seena-box-top.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45686]', () => {
    cy.visit('/' + 'telly-top.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45687]', () => {
    cy.visit('/' + 'fox-legging.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45688]', () => {
    cy.visit('/' + 'borrano-t-shirt.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45689]', () => {
    cy.visit('/' + 'borrano-t-shirt-1.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45690]', () => {
    cy.visit('/' + 'ramble-pull-on-cargo-pant.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45691]', () => {
    cy.visit('/' + 'saku-pant.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45692]', () => {
    cy.visit('/' + 'cupra-cargo-short-2.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45693]', () => {
    cy.visit('/' + 'cupra-cargo-short-3.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [45694]', () => {
    cy.visit('/' + 'poetry-tunic.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45695]', () => {
    cy.visit('/' + 'poetry-tunic-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45696]', () => {
    cy.visit('/' + 'katnia-blouse.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45697]', () => {
    cy.visit('/' + 'yindari-blouse.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45698]', () => {
    cy.visit('/' + 'yindari-blouse-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45699]', () => {
    cy.visit('/' + 'patras-wrap.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45700]', () => {
    cy.visit('/' + 'larissa-top.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45701]', () => {
    cy.visit('/' + 'volos-pocket-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45702]', () => {
    cy.visit('/' + 'clairvyent-dress.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [45703]', () => {
    cy.visit('/' + 'rosie-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45704]', () => {
    cy.visit('/' + 'roos-t-shirt.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45705]', () => {
    cy.visit('/' + 'lainie-silk-top-w-contrast-back.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45706]', () => {
    cy.visit('/' + 'jessa-silk-top.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45707]', () => {
    cy.visit('/' + 'boe-silk-dress-2.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45708]', () => {
    cy.visit('/' + 'lairra-silk-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45709]', () => {
    cy.visit('/' + 'nisoni-wrap.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45710]', () => {
    cy.visit('/' + 'nisoni-wrap-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45711]', () => {
    cy.visit('/' + 'fylem-long-hoodie.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45712]', () => {
    cy.visit('/' + 'fylem-long-hoodie-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45713]', () => {
    cy.visit('/' + 'maemi-hoodie.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [45714]', () => {
    cy.visit('/' + 'nelange-bag.html')
    cy.url().should('include', '/' + 'accessories/handbags.html')
  })

  it('URL redirect for [45715]', () => {
    cy.visit('/' + 'nelange-bag-1.html')
    cy.url().should('include', '/' + 'accessories/handbags.html')
  })

  it('URL redirect for [46012]', () => {
    cy.visit('/' + 'villa-scarf-jwc1274-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [46015]', () => {
    cy.visit('/' + 'kavi-obi-belt-c79170-as-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [46218]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem-4140ll-cem-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [46530]', () => {
    cy.visit('/' + 'alyssa-kimono-dress-plus-size.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/outerwear-kimonos.html')
  })

  it('URL redirect for [46531]', () => {
    cy.visit('/' + 'adriana-reversible-tank-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46533]', () => {
    cy.visit('/' + 'calista-shirt-tail-tank-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [46534]', () => {
    cy.visit('/' + 'dharma-long-drape-poncho-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [46535]', () => {
    cy.visit('/' + 'dharma-trapeze-tee-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [46536]', () => {
    cy.visit('/' + 'dharma-trapeze-tee-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [46538]', () => {
    cy.visit('/' + 'calista-side-slit-maxi-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [46539]', () => {
    cy.visit('/' + 'sunniva-linen-shirred-back-tee-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [46540]', () => {
    cy.visit('/' + 'alyssa-kimono-dress-plus-size-1.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/outerwear-kimonos.html')
  })

  it('URL redirect for [46541]', () => {
    cy.visit('/' + 'multi-tier-cherries-skirt-plus-size.html')
    cy.url().should('include', '/' + 'clothing/bottoms/skirts.html')
  })

  it('URL redirect for [46551]', () => {
    cy.visit('/' + 'scalloped-v-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46649]', () => {
    cy.visit('/' + 'button-down-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46650]', () => {
    cy.visit('/' + 'button-down-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46651]', () => {
    cy.visit('/' + 'button-down-tank-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46677]', () => {
    cy.visit('/' + 'mix-print-kimono-2.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/outerwear-kimonos.html')
  })

  it('URL redirect for [46688]', () => {
    cy.visit('/' + 'tropical-flower-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [46690]', () => {
    cy.visit('/' + 'color-currency-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [46693]', () => {
    cy.visit('/' + 'cleo-obi-belt.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [46694]', () => {
    cy.visit('/' + 'josephine-linen-crop-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46695]', () => {
    cy.visit('/' + 'jospehine-linen-crop-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46696]', () => {
    cy.visit('/' + 'jospehine-linen-crop-tank-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46697]', () => {
    cy.visit('/' + 'sabine-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46698]', () => {
    cy.visit('/' + 'sabine-tank-dress-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46699]', () => {
    cy.visit('/' + 'sabine-tank-dress-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46700]', () => {
    cy.visit('/' + 'josephine-trapeze-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46701]', () => {
    cy.visit('/' + 'josephine-trapeze-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46702]', () => {
    cy.visit('/' + 'josephine-trapeze-tee-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46734]', () => {
    cy.visit('/' + 'mathilda-emb-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46735]', () => {
    cy.visit('/' + 'mathilda-emb-tank-dress-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46743]', () => {
    cy.visit('/' + 'long-slip-e-emb-chiffon-1.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [46744]', () => {
    cy.visit('/' + 'embroidered-open-back-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46746]', () => {
    cy.visit('/' + 'short-slv-emb-overlay-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46747]', () => {
    cy.visit('/' + 'short-slv-emb-overlay-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46749]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [46750]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [46751]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [46752]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [46753]', () => {
    cy.visit('/' + 'sully-pant.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [46761]', () => {
    cy.visit('/' + 'chaunley-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [46762]', () => {
    cy.visit('/' + 'chaunley-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47065]', () => {
    cy.visit('/' + 'cleo-obi-belt-c80167-as-ml.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47336]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem-4143ll-ant-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47342]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem-4143ll-prr-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47343]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem-4143ll-prr-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47344]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem-4143ll-prr-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47345]', () => {
    cy.visit('/' + 'medium-slip-w-chiffon-hem-4143ll-prr-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47349]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem-4142ll-ant-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47350]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem-4142ll-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47351]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem-4142ll-prr-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47352]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem-4142ll-prr-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47353]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem-4142ll-prr-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47354]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem-4142ll-prr-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47355]', () => {
    cy.visit('/' + 'short-slip-w-chiffon-hem-4142ll-prr-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47545]', () => {
    cy.visit('/' + 'judit-tassel-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47546]', () => {
    cy.visit('/' + 'brass-chain-with-tassels-and-crystal-drops.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47548]', () => {
    cy.visit('/' + 'eli-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47549]', () => {
    cy.visit('/' + 'eli-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47550]', () => {
    cy.visit('/' + 'eli-necklace.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [47551]', () => {
    cy.visit('/' + 'eli-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47552]', () => {
    cy.visit('/' + 'eli-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47553]', () => {
    cy.visit('/' + 'eli-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47554]', () => {
    cy.visit('/' + 'eli-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47555]', () => {
    cy.visit('/' + 'eli-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47556]', () => {
    cy.visit('/' + 'eli-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47557]', () => {
    cy.visit('/' + 'eli-necklace-50.html')
    cy.url().should('include', '/' + 'accessories/jewelry/necklaces.html')
  })

  it('URL redirect for [47558]', () => {
    cy.visit('/' + 'eli-necklace-51.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47559]', () => {
    cy.visit('/' + 'eli-necklace-52.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47560]', () => {
    cy.visit('/' + 'eli-necklace-53.html')
    cy.url().should('include', '/' + 'accessories/jewelry/necklaces.html')
  })

  it('URL redirect for [47561]', () => {
    cy.visit('/' + 'eli-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [47579]', () => {
    cy.visit('/' + 'delia-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47583]', () => {
    cy.visit('/' + 'sage-drawstring-tote-2.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [47584]', () => {
    cy.visit('/' + 'sage-drawstring-tote-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [47587]', () => {
    cy.visit('/' + 'zade-single-druzy-ring.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47589]', () => {
    cy.visit('/' + 'zade-two-druzy-ring.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47591]', () => {
    cy.visit('/' + 'long-kimono.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [47616]', () => {
    cy.visit('/' + 'mix-print-kimono-plus-size-1.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets/outerwear-kimonos.html')
  })

  it('URL redirect for [47618]', () => {
    cy.visit('/' + 'joesphine-trapeze-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47688]', () => {
    cy.visit('/' + 'scalloped-v-tee-plus-size-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47704]', () => {
    cy.visit('/' + 'bella-short-sleeve-boho-tunic-3610jwx-ban-1x-1.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [47708]', () => {
    cy.visit('/' + 'black-spinel-square-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47709]', () => {
    cy.visit('/' + 'freshwater-pearl-square-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47710]', () => {
    cy.visit('/' + 'garnet-square-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47711]', () => {
    cy.visit('/' + 'green-onyx-square-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47712]', () => {
    cy.visit('/' + 'labradorite-square-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47713]', () => {
    cy.visit('/' + 'pyrite-square-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47714]', () => {
    cy.visit('/' + 'black-spinel-key-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47715]', () => {
    cy.visit('/' + 'freshwater-pearl-key-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47716]', () => {
    cy.visit('/' + 'garnet-key-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47717]', () => {
    cy.visit('/' + 'green-onyx-key-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47718]', () => {
    cy.visit('/' + 'labradorite-key-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47719]', () => {
    cy.visit('/' + 'pyrite-key-charm-bracelet.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47739]', () => {
    cy.visit('/' + 'flower-vine-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47740]', () => {
    cy.visit('/' + 'flower-vine-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47741]', () => {
    cy.visit('/' + 'flower-vine-tee-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47742]', () => {
    cy.visit('/' + 'gigi-tank-tunic.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47743]', () => {
    cy.visit('/' + 'gigi-tank-tunic-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47773]', () => {
    cy.visit('/' + 'metra-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47782]', () => {
    cy.visit('/' + 'wirey-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [47783]', () => {
    cy.visit('/' + 'belletini-scarf-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [47784]', () => {
    cy.visit('/' + 'bessy-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [47785]', () => {
    cy.visit('/' + 'monika-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [47786]', () => {
    cy.visit('/' + 'sonya-yoke-tank-tunic.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47787]', () => {
    cy.visit('/' + 'sonya-yoke-tank-tunic-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47788]', () => {
    cy.visit('/' + 'sonya-yoke-tank-tunic-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47797]', () => {
    cy.visit('/' + 'cassandra-oversized-v-neck-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47798]', () => {
    cy.visit('/' + 'cassandra-oversized-v-neck-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47807]', () => {
    cy.visit('/' + 'rita-scarf-mix-shirt.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [47838]', () => {
    cy.visit('/' + 'knit-front-embroidered-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47839]', () => {
    cy.visit('/' + 'short-sleeve-crossover-front-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47840]', () => {
    cy.visit('/' + 'short-slip-with-chiffon-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47841]', () => {
    cy.visit('/' + 'short-slip-with-chiffon-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47842]', () => {
    cy.visit('/' + 'medium-slip-with-chiffon-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47843]', () => {
    cy.visit('/' + 'medium-slip-with-chiffon-hem.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [47871]', () => {
    cy.visit('/' + 'cupra-tank-top-7.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47872]', () => {
    cy.visit('/' + 'cupra-tank-top-8.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47873]', () => {
    cy.visit('/' + 'cupra-tank-top-9.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [47875]', () => {
    cy.visit('/' + 'crane-pant.html')
    cy.url().should('include', '/' + 'sale/shop-sale/clothing-sale.html')
  })

  it('URL redirect for [48464]', () => {
    cy.visit('/' + 'medium-slip-with-chiffon-hem-4146ll-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [48681]', () => {
    cy.visit('/' + 'cassandra-v-neck-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [48748]', () => {
    cy.visit('/' + 'wilson-tunic.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [48754]', () => {
    cy.visit('/' + 'lucky-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [48755]', () => {
    cy.visit('/' + 'lucky-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [48756]', () => {
    cy.visit('/' + 'lucky-tank-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [48797]', () => {
    cy.visit('/' + 'sharee-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [48798]', () => {
    cy.visit('/' + 'puente-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [48799]', () => {
    cy.visit('/' + 'neil-calm-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [48800]', () => {
    cy.visit('/' + 'echo-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [49126]', () => {
    cy.visit('/' + 'lolita-linen-draped-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49127]', () => {
    cy.visit('/' + 'lolita-linen-draped-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49128]', () => {
    cy.visit('/' + 'lolita-linen-draped-tee-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49132]', () => {
    cy.visit('/' + 'cecilia-trapeze-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49133]', () => {
    cy.visit('/' + 'cecilia-trapeze-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49141]', () => {
    cy.visit('/' + 'lolita-crop-legging.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [49149]', () => {
    cy.visit('/' + 'galina-scarf-back-shirt.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [49154]', () => {
    cy.visit('/' + 'potter-scarf-back-sleeveless-shirt.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [49176]', () => {
    cy.visit('/' + 'short-sleeve-curved-hem-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49177]', () => {
    cy.visit('/' + 'short-sleeve-curved-hem-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49180]', () => {
    cy.visit('/' + 'embroidered-front-short-sleeve-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49181]', () => {
    cy.visit('/' + 'embroidered-front-short-sleeve-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49182]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [49183]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [49184]', () => {
    cy.visit('/' + 'medium-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [49185]', () => {
    cy.visit('/' + 'medium-slip-w-lace-trim-1.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [49214]', () => {
    cy.visit('/' + 'marika-cargo-pants-8.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [49215]', () => {
    cy.visit('/' + 'marika-cargo-pants-9.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [49216]', () => {
    cy.visit('/' + 'poplin-cargo-shorts-31.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [49217]', () => {
    cy.visit('/' + 'poplin-cargo-shorts-32.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [49218]', () => {
    cy.visit('/' + 'poplin-cargo-pants-22.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [49219]', () => {
    cy.visit('/' + 'poplin-cargo-pants-23.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [49356]', () => {
    cy.visit('/' + 'potter-scarf-back-sleeveless-shirt-7293-as-xs.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [49358]', () => {
    cy.visit('/' + 'potter-scarf-back-sleeveless-shirt-7293-as-m.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [49359]', () => {
    cy.visit('/' + 'potter-scarf-back-sleeveless-shirt-7293-as-l.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [49496]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim-4147ll-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [49501]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim-4147ll-asw-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [49507]', () => {
    cy.visit('/' + 'medium-slip-w-lace-trim-4148ll-asw-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [49805]', () => {
    cy.visit('/' + 'melvin-button-down.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [49806]', () => {
    cy.visit('/' + 'melvin-button-down-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [49807]', () => {
    cy.visit('/' + 'melvin-button-down-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [49850]', () => {
    cy.visit('/' + 'emby-button-down.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [49851]', () => {
    cy.visit('/' + 'tribeca-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [49852]', () => {
    cy.visit('/' + 'emby-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [49853]', () => {
    cy.visit('/' + 'sandos-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [49854]', () => {
    cy.visit('/' + 'jacy-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [49855]', () => {
    cy.visit('/' + 'springtime-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [49864]', () => {
    cy.visit('/' + 'michelle-3-4-sleeve-trapeze-tee.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [49865]', () => {
    cy.visit('/' + 'michelle-3-4-sleeve-trapeze-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49866]', () => {
    cy.visit('/' + 'michelle-3-4-sleeve-trapeze-tee-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49869]', () => {
    cy.visit('/' + 'michelle-velvet-tank-tunic.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49870]', () => {
    cy.visit('/' + 'michelle-velvet-tank-tunic-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49880]', () => {
    cy.visit('/' + 'heidi-scarf-back-shirt.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [49894]', () => {
    cy.visit('/' + 'the-love-top-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [49895]', () => {
    cy.visit('/' + 'denim-whispers-wrap-shirt.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [49909]', () => {
    cy.visit('/' + 'v-neck-patched-front-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49910]', () => {
    cy.visit('/' + 'v-neck-patched-front-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49911]', () => {
    cy.visit('/' + 'long-sleeve-hig-low-hem-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [49913]', () => {
    cy.visit('/' + 'medium-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [49914]', () => {
    cy.visit('/' + 'medium-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [49915]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [49916]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [49943]', () => {
    cy.visit('/' + 'ramble-pull-on-cargo.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [49944]', () => {
    cy.visit('/' + 'ramble-pull-on-cargo-1.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [49949]', () => {
    cy.visit('/' + 'myra-leather-leggings-4.html')
    cy.url().should('include', '/' + 'sale/shop-sale/clothing-sale.html')
  })

  it('URL redirect for [49950]', () => {
    cy.visit('/' + 'myra-leather-leggings-5.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [50240]', () => {
    cy.visit('/' + 'tribeca-scarf-jwc1273-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [50242]', () => {
    cy.visit('/' + 'sandos-scarf-1.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [50507]', () => {
    cy.visit('/' + 'medium-slip-w-lace-trim-4150ll-ant-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50508]', () => {
    cy.visit('/' + 'medium-slip-w-lace-trim-4150ll-ant-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50512]', () => {
    cy.visit('/' + 'medium-slip-w-lace-trim-4150ll-den-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50521]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim-4149ll-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50522]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim-4149ll-den-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50526]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim-4149ll-den-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50801]', () => {
    cy.visit('/' + 'poplin-cargo-pants-24.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [50802]', () => {
    cy.visit('/' + 'poplin-cargo-pants-25.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [50803]', () => {
    cy.visit('/' + 'marika-cargo-pants-10.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [50804]', () => {
    cy.visit('/' + 'marika-cargo-pants-11.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [50805]', () => {
    cy.visit('/' + 'short-cami-31-a4515893fb679d22ba85cb4d9098c952.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50806]', () => {
    cy.visit('/' + 'short-cami-32-47a8171630734e80b1e4e4177618c296.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50807]', () => {
    cy.visit('/' + 'long-cami.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50808]', () => {
    cy.visit('/' + 'long-cami.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50867]', () => {
    cy.visit('/' + 'eyelet-back-shirt.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50868]', () => {
    cy.visit('/' + 'eyelet-back-shirt-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50869]', () => {
    cy.visit('/' + 'eyelet-back-shirt-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50870]', () => {
    cy.visit('/' + 'eyelet-back-shirt-3.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50871]', () => {
    cy.visit('/' + 'dial-eyelet-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50872]', () => {
    cy.visit('/' + 'dial-eyelet-dress-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50873]', () => {
    cy.visit('/' + 'dial-eyelet-dress-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50874]', () => {
    cy.visit('/' + 'lona-v-neck.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50875]', () => {
    cy.visit('/' + 'lona-v-neck-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50876]', () => {
    cy.visit('/' + 'lona-v-neck-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50877]', () => {
    cy.visit('/' + 'natt-tie-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50878]', () => {
    cy.visit('/' + 'natt-tie-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50879]', () => {
    cy.visit('/' + 'natty-loop-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50880]', () => {
    cy.visit('/' + 'antoinette-crochet-jacket.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50881]', () => {
    cy.visit('/' + 'antoinette-crochet-jacket-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50882]', () => {
    cy.visit('/' + 'paige-jacket.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50883]', () => {
    cy.visit('/' + 'paige-jacket-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50884]', () => {
    cy.visit('/' + 'sheradon-scallop-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50885]', () => {
    cy.visit('/' + 'sheradon-scallop-top-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50886]', () => {
    cy.visit('/' + 'alona-scoop-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50887]', () => {
    cy.visit('/' + 'dial-mix-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50888]', () => {
    cy.visit('/' + 'bennet-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50889]', () => {
    cy.visit('/' + 'bennet-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50890]', () => {
    cy.visit('/' + 'bennet-blouse-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50891]', () => {
    cy.visit('/' + 'bennet-blouse-3.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50892]', () => {
    cy.visit('/' + 'oasis-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50893]', () => {
    cy.visit('/' + 'oasis-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50894]', () => {
    cy.visit('/' + 'oasis-blouse-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50895]', () => {
    cy.visit('/' + 'arianna-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50896]', () => {
    cy.visit('/' + 'arianna-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50897]', () => {
    cy.visit('/' + 'arianna-tunic-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50898]', () => {
    cy.visit('/' + 'breeland-neck-tie-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50899]', () => {
    cy.visit('/' + 'breeland-neck-tie-top-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50900]', () => {
    cy.visit('/' + 'lotte-button-down.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50901]', () => {
    cy.visit('/' + 'lotte-button-down-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50902]', () => {
    cy.visit('/' + 'wish-velvet-jacket.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50903]', () => {
    cy.visit('/' + 'harmony-shrug.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50904]', () => {
    cy.visit('/' + 'harmony-shrug-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50905]', () => {
    cy.visit('/' + 'long-sleeve-wish-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50906]', () => {
    cy.visit('/' + 'long-sleeve-wish-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50907]', () => {
    cy.visit('/' + 'wish-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50908]', () => {
    cy.visit('/' + 'wish-dress-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50909]', () => {
    cy.visit('/' + 'harmony-pant.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50910]', () => {
    cy.visit('/' + 'cherry-tree-embroidered-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50911]', () => {
    cy.visit('/' + 'shiro-cardigan.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50912]', () => {
    cy.visit('/' + 'vignes-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50913]', () => {
    cy.visit('/' + 'passion-fruit-flower-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50914]', () => {
    cy.visit('/' + 'velasco-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50915]', () => {
    cy.visit('/' + 'emmy-boxy-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [50916]', () => {
    cy.visit('/' + 'vignes-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [50917]', () => {
    cy.visit('/' + 'passion-flower-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [50918]', () => {
    cy.visit('/' + 'emmy-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [50919]', () => {
    cy.visit('/' + 'velasco-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [50920]', () => {
    cy.visit('/' + 'shiro-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [50923]', () => {
    cy.visit('/' + 'dani-velvet-scoop-neck-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [50924]', () => {
    cy.visit('/' + 'dani-velvet-scoop-neck-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [50947]', () => {
    cy.visit('/' + 'altivo-scarf-back-shirt.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [50973]', () => {
    cy.visit('/' + 'v-neck-long-sleeve-patched-embroidered-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [50974]', () => {
    cy.visit('/' + 'v-neck-long-sleeve-patched-embroidered-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [50975]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50976]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [50977]', () => {
    cy.visit('/' + 'short-slip-31-38d4f9d23d007fdb017e8aad3f0a6342.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [50978]', () => {
    cy.visit('/' + 'short-slip-32.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [51000]', () => {
    cy.visit('/' + 'lily-short-blazer-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [51018]', () => {
    cy.visit('/' + 'lacey-insert-top-10.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51019]', () => {
    cy.visit('/' + 'lacey-insert-top-11.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51020]', () => {
    cy.visit('/' + 'mix-kimono-print.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51021]', () => {
    cy.visit('/' + 'vanessa-blouse-3.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51022]', () => {
    cy.visit('/' + 'vanessa-blouse-4.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51023]', () => {
    cy.visit('/' + 'vanessa-blouse-5.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51590]', () => {
    cy.visit('/' + 'medium-slip-4152ll-chm-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [51592]', () => {
    cy.visit('/' + 'medium-slip-4152ll-chm-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [51600]', () => {
    cy.visit('/' + 'short-slip-4151ll-chm-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [51856]', () => {
    cy.visit('/' + 'rose-garden-tunic-5.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51872]', () => {
    cy.visit('/' + 'poncho-sweater.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51873]', () => {
    cy.visit('/' + 'jw-cardigan.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [51876]', () => {
    cy.visit('/' + 'dayla-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [51881]', () => {
    cy.visit('/' + 'shiro-cardigan-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51882]', () => {
    cy.visit('/' + 'wish-dress-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51883]', () => {
    cy.visit('/' + 'antoinette-crochet-jacket-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51884]', () => {
    cy.visit('/' + 'oasis-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51885]', () => {
    cy.visit('/' + 'bennet-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51886]', () => {
    cy.visit('/' + 'arianna-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51887]', () => {
    cy.visit('/' + 'sheradon-scallop-top-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51888]', () => {
    cy.visit('/' + 'alona-scoop-top-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51889]', () => {
    cy.visit('/' + 'natt-tie-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51890]', () => {
    cy.visit('/' + 'lona-v-neck-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51891]', () => {
    cy.visit('/' + 'lotte-button-down-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51892]', () => {
    cy.visit('/' + 'lotte-button-down-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51893]', () => {
    cy.visit('/' + 'long-sleeve-wish-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51894]', () => {
    cy.visit('/' + 'breeland-neck-tie-top-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51895]', () => {
    cy.visit('/' + 'breeland-neck-tie-top-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [51896]', () => {
    cy.visit('/' + 'emmy-box-top-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [52034]', () => {
    cy.visit('/' + 'embroidered-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [52035]', () => {
    cy.visit('/' + 'embroidered-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [52036]', () => {
    cy.visit('/' + 'embroidered-tee-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [52080]', () => {
    cy.visit('/' + 'sunlight-scarf-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [52081]', () => {
    cy.visit('/' + 'kai-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [52082]', () => {
    cy.visit('/' + 'prima-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [52083]', () => {
    cy.visit('/' + 'dunes-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [52084]', () => {
    cy.visit('/' + 'rosalia-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [52085]', () => {
    cy.visit('/' + 'sassi-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [52086]', () => {
    cy.visit('/' + 'sassi-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [52087]', () => {
    cy.visit('/' + 'sassi-tee-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [52092]', () => {
    cy.visit('/' + 'allah-velvet-scarf-back-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [52113]', () => {
    cy.visit('/' + 'butterfly-dream-scarf-back-shirt.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [52143]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [52144]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [52145]', () => {
    cy.visit('/' + 'short-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [52146]', () => {
    cy.visit('/' + 'medium-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [52147]', () => {
    cy.visit('/' + 'medium-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [52148]', () => {
    cy.visit('/' + 'medium-slip-w-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [52167]', () => {
    cy.visit('/' + 'daguerrie-velvet-jacket.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [52168]', () => {
    cy.visit('/' + 'taraxa-vest.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [52186]', () => {
    cy.visit('/' + 'cupra-long-cargo-skirt-3.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [52187]', () => {
    cy.visit('/' + 'cupra-long-cargo-skirt-4.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [53092]', () => {
    cy.visit('/' + 'todo-scarf-silk-twil.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [53093]', () => {
    cy.visit('/' + 'lily-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [53094]', () => {
    cy.visit('/' + 'sara-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [53095]', () => {
    cy.visit('/' + 'mural-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [53096]', () => {
    cy.visit('/' + 'mirage-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [53102]', () => {
    cy.visit('/' + 'lucia-sleeve-velvet-scarf-back-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [53123]', () => {
    cy.visit('/' + 'velveteen-wide-leg-pant.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [53135]', () => {
    cy.visit('/' + 'medium-slip-with-lace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [53136]', () => {
    cy.visit('/' + 'medium-slip-with-lace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [53139]', () => {
    cy.visit('/' + 'colorful-floral-burnout-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [53169]', () => {
    cy.visit('/' + 'embroidered-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [53389]', () => {
    cy.visit('/' + 'lily-scarf-jwc1278-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [53390]', () => {
    cy.visit('/' + 'sara-scarf-jwc1286-as-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [53948]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [53949]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [53953]', () => {
    cy.visit('/' + 'beaded-choker-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [53955]', () => {
    cy.visit('/' + 'suede-fringe-choker.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [53956]', () => {
    cy.visit('/' + 'suede-fringe-choker.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [53958]', () => {
    cy.visit('/' + 'leather-chain-tassel-necklace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [53975]', () => {
    cy.visit('/' + 'lucia-3-4-sleeve-velvet-scarf-back-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [54096]', () => {
    cy.visit('/' + 'velvet-floral-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [54098]', () => {
    cy.visit('/' + 'heaven-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [54104]', () => {
    cy.visit('/' + 'bekka-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [54105]', () => {
    cy.visit('/' + 'timmie-fringe-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [54106]', () => {
    cy.visit('/' + 'water-lily-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [54107]', () => {
    cy.visit('/' + 'prima-scarf-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [54118]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [54119]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [54123]', () => {
    cy.visit('/' + 'long-sleeve-patched-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [54124]', () => {
    cy.visit('/' + 'long-sleeve-patched-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [54125]', () => {
    cy.visit('/' + 'long-sleeve-patched-tee-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [54133]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [54134]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [54135]', () => {
    cy.visit('/' + 'lillian-scarf-mix-draped-cardigan.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [54142]', () => {
    cy.visit('/' + 'hila-velvet-scoop-neck-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [54143]', () => {
    cy.visit('/' + 'hila-velvet-scoop-neck-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [54144]', () => {
    cy.visit('/' + 'serenity-velvet-scarf-back-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [54158]', () => {
    cy.visit('/' + 'dragon-scarf-mix-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [54188]', () => {
    cy.visit('/' + 'marika-cargo-pant-4.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [54189]', () => {
    cy.visit('/' + 'marika-cargo-pant-5.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [54190]', () => {
    cy.visit('/' + 'poplin-cargo-pant-4.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [54192]', () => {
    cy.visit('/' + 'vernet-leather-leggings.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [54704]', () => {
    cy.visit('/' + 'dragon-scarf-mix-tunic-7420-mti-xs.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [54705]', () => {
    cy.visit('/' + 'dragon-scarf-mix-tunic-7420-mti-s.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [54706]', () => {
    cy.visit('/' + 'dragon-scarf-mix-tunic-7420-mti-m.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [54707]', () => {
    cy.visit('/' + 'dragon-scarf-mix-tunic-7420-mti-l.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [54708]', () => {
    cy.visit('/' + 'dragon-scarf-mix-tunic-7420-mti-xl.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [54961]', () => {
    cy.visit('/' + 'davi-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves.html')
  })

  it('URL redirect for [54962]', () => {
    cy.visit('/' + 'suede-fringe-choker.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [54985]', () => {
    cy.visit('/' + 'elleson-velvet-top.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [54988]', () => {
    cy.visit('/' + 'floral-burnout-velvet-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55028]', () => {
    cy.visit('/' + 'hila-velvet-sccop-neck-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55033]', () => {
    cy.visit('/' + 'tasho-dolman-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55091]', () => {
    cy.visit('/' + '1016-jwg111-mti-014a22dbc8045c5e77bab6184ae39bef.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55093]', () => {
    cy.visit('/' + 'bear-with-tree.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55094]', () => {
    cy.visit('/' + 'bear-with-tree.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55095]', () => {
    cy.visit('/' + 'bear-with-tree.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55096]', () => {
    cy.visit('/' + 'bear-with-tree.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55097]', () => {
    cy.visit('/' + 'dapper-felt-dog.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55098]', () => {
    cy.visit('/' + 'dapper-felt-dog.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55099]', () => {
    cy.visit('/' + 'dapper-felt-dog.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55100]', () => {
    cy.visit('/' + 'dapper-felt-dog.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55101]', () => {
    cy.visit('/' + 'wooly-snowman.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55102]', () => {
    cy.visit('/' + 'wooly-snowman.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55103]', () => {
    cy.visit('/' + 'wooly-snowman.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55104]', () => {
    cy.visit('/' + 'wooly-snowman.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55105]', () => {
    cy.visit('/' + 'donkey-ole-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55106]', () => {
    cy.visit('/' + 'donkey-ole-ornament-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55107]', () => {
    cy.visit('/' + 'donkey-ole-ornament-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55108]', () => {
    cy.visit('/' + 'donkey-ole-ornament-3.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55109]', () => {
    cy.visit('/' + 'rudy-red-nosed-dach.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55110]', () => {
    cy.visit('/' + 'rudy-red-nosed-dach-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55111]', () => {
    cy.visit('/' + 'rudy-red-nosed-dach-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55112]', () => {
    cy.visit('/' + 'rudy-red-nosed-dach-3.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55113]', () => {
    cy.visit('/' + 'felt-forrest-friends.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55114]', () => {
    cy.visit('/' + 'felt-forrest-friends-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55115]', () => {
    cy.visit('/' + 'felt-forrest-friends-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55116]', () => {
    cy.visit('/' + 'felt-forrest-friends-3.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [55117]', () => {
    cy.visit('/' + 'yuletide-mouse.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55118]', () => {
    cy.visit('/' + 'yuletide-mouse.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55119]', () => {
    cy.visit('/' + 'yuletide-mouse.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55120]', () => {
    cy.visit('/' + 'yuletide-mouse.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55121]', () => {
    cy.visit('/' + 'foxy-fellow.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55122]', () => {
    cy.visit('/' + 'foxy-fellow.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55123]', () => {
    cy.visit('/' + 'foxy-fellow.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55124]', () => {
    cy.visit('/' + 'foxy-fellow.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55125]', () => {
    cy.visit('/' + 'owlish-felt.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55126]', () => {
    cy.visit('/' + 'owlish-felt.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55127]', () => {
    cy.visit('/' + 'owlish-felt.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55128]', () => {
    cy.visit('/' + 'owlish-felt.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55129]', () => {
    cy.visit('/' + 'felt-mistletoe-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55130]', () => {
    cy.visit('/' + 'felt-mistletoe-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55131]', () => {
    cy.visit('/' + 'felt-mistletoe-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55132]', () => {
    cy.visit('/' + 'felt-mistletoe-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55133]', () => {
    cy.visit('/' + 'holiday-hedgehog.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55134]', () => {
    cy.visit('/' + 'holiday-hedgehog.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55135]', () => {
    cy.visit('/' + 'holiday-hedgehog.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55136]', () => {
    cy.visit('/' + 'holiday-hedgehog.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55137]', () => {
    cy.visit('/' + 'downtown-hound.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55138]', () => {
    cy.visit('/' + 'downtown-hound.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55139]', () => {
    cy.visit('/' + 'downtown-hound.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55140]', () => {
    cy.visit('/' + 'downtown-hound.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55141]', () => {
    cy.visit('/' + 'peacock-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55142]', () => {
    cy.visit('/' + 'peacock-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55143]', () => {
    cy.visit('/' + 'peacock-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55144]', () => {
    cy.visit('/' + 'peacock-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55145]', () => {
    cy.visit('/' + 'peacock-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55146]', () => {
    cy.visit('/' + 'peacock-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55147]', () => {
    cy.visit('/' + 'penguin-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55148]', () => {
    cy.visit('/' + 'penguin-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55149]', () => {
    cy.visit('/' + 'penguin-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55150]', () => {
    cy.visit('/' + 'penguin-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55151]', () => {
    cy.visit('/' + 'penguin-ornament.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55211]', () => {
    cy.visit('/' + 'dragonia-print-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [55212]', () => {
    cy.visit('/' + 'asian-geo-print-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [55213]', () => {
    cy.visit('/' + 'karina-print-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [55214]', () => {
    cy.visit('/' + 'lammi-print-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [55215]', () => {
    cy.visit('/' + 'aja-print-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [55216]', () => {
    cy.visit('/' + 'casa-embroidered-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [55217]', () => {
    cy.visit('/' + 'casa-embroidered-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [55234]', () => {
    cy.visit('/' + 'rudy-red-nosed-dach.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55235]', () => {
    cy.visit('/' + 'felt-forrest-friends.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55236]', () => {
    cy.visit('/' + 'felt-forrest-friends.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55237]', () => {
    cy.visit('/' + 'holiday-hedgehog.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55267]', () => {
    cy.visit('/' + 'power-scarf-kimono.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [55268]', () => {
    cy.visit('/' + 'power-scarf-kimono.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [55272]', () => {
    cy.visit('/' + 'checker-v-neck-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55273]', () => {
    cy.visit('/' + 'power-scarf-pant.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [55274]', () => {
    cy.visit('/' + 'power-scarf-long-dress.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [55278]', () => {
    cy.visit('/' + 'shelby-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55279]', () => {
    cy.visit('/' + 'chapel-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55280]', () => {
    cy.visit('/' + 'camilla-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55281]', () => {
    cy.visit('/' + 'revine-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55282]', () => {
    cy.visit('/' + 'betsabe-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55283]', () => {
    cy.visit('/' + 'savannah-geo-belt.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55294]', () => {
    cy.visit('/' + 'shirred-back-printed-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55295]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55296]', () => {
    cy.visit('/' + 'short-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55297]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55298]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55302]', () => {
    cy.visit('/' + 'bellitini-scarf-back-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [55316]', () => {
    cy.visit('/' + 'tuscany-3-4-sleeve-trapeze-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55317]', () => {
    cy.visit('/' + 'tuscany-3-4-sleeve-trapeze-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55318]', () => {
    cy.visit('/' + 'paige-relaxed-v-neck-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55319]', () => {
    cy.visit('/' + 'paige-relaxed-v-neck-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55321]', () => {
    cy.visit('/' + 'tuscany-linen-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55322]', () => {
    cy.visit('/' + 'tuscany-linen-tank-dress-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55323]', () => {
    cy.visit('/' + 'sita-long-sleeve-fitted-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55324]', () => {
    cy.visit('/' + 'sita-short-sleeve-fitted-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55328]', () => {
    cy.visit('/' + 'paige-weekend-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55329]', () => {
    cy.visit('/' + 'paige-weekend-bag-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55330]', () => {
    cy.visit('/' + 'dorana-backpack.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55331]', () => {
    cy.visit('/' + 'dorana-backpack-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [55360]', () => {
    cy.visit('/' + 'ramble-pull-on-cargo-pant-1.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [55361]', () => {
    cy.visit('/' + 'ramble-pull-on-cargo-pant-2.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [55527]', () => {
    cy.visit('/' + 'power-scarf-kimono-c88454a-mti-m.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [55596]', () => {
    cy.visit('/' + 'savannah-geo-belt-c88101-mti-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [55984]', () => {
    cy.visit('/' + 'power-scarf-kimono-plus-size.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [55985]', () => {
    cy.visit('/' + 'power-scarf-kimono-plus-size.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [55997]', () => {
    cy.visit('/' + 'tsucany-3-4-sleeve-trapeze-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [55999]', () => {
    cy.visit('/' + 'tuscany-3-4-sleeve-trapeze-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56049]', () => {
    cy.visit('/' + 'arva-tiered-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56057]', () => {
    cy.visit('/' + 'nye-tank.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56058]', () => {
    cy.visit('/' + 'nye-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56059]', () => {
    cy.visit('/' + 'nye-tank-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56060]', () => {
    cy.visit('/' + 'stretch-eyelet-legging.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56061]', () => {
    cy.visit('/' + 'stretch-eyelet-legging-1.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [56081]', () => {
    cy.visit('/' + 'morning-dew-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56083]', () => {
    cy.visit('/' + 'frame-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56088]', () => {
    cy.visit('/' + 'frame-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56089]', () => {
    cy.visit('/' + 'meadow-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56090]', () => {
    cy.visit('/' + 'secret-garden-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56091]', () => {
    cy.visit('/' + 'ellyna-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56092]', () => {
    cy.visit('/' + 'biorla-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56103]', () => {
    cy.visit('/' + 'printed-peplum-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56104]', () => {
    cy.visit('/' + 'printed-peplum-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56105]', () => {
    cy.visit('/' + 'asymmetrical-embroidered-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56106]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56107]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56108]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56109]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56113]', () => {
    cy.visit('/' + 'eliza-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56114]', () => {
    cy.visit('/' + 'eliza-deep-scoop-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56121]', () => {
    cy.visit('/' + 'anaya-crop-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56126]', () => {
    cy.visit('/' + 'mina-bucket-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56127]', () => {
    cy.visit('/' + 'mina-bucket-bag-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56128]', () => {
    cy.visit('/' + 'anaya-drawstring-tote.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56129]', () => {
    cy.visit('/' + 'anaya-drawstring-tote-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56136]', () => {
    cy.visit('/' + 'laite-3-4-sleeve-scarf-back-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [56140]', () => {
    cy.visit('/' + 'jasmine-denim-tote-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56157]', () => {
    cy.visit('/' + 'tazo-print-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56158]', () => {
    cy.visit('/' + 'rinit-print-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56159]', () => {
    cy.visit('/' + 'shosh-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56160]', () => {
    cy.visit('/' + 'shosh-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [56161]', () => {
    cy.visit('/' + 'arlo-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56170]', () => {
    cy.visit('/' + 'glancita-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56171]', () => {
    cy.visit('/' + 'elena-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [56172]', () => {
    cy.visit('/' + 'lea-scarf.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56173]', () => {
    cy.visit('/' + 'rita-scarf.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56174]', () => {
    cy.visit('/' + 'clorinda-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56175]', () => {
    cy.visit('/' + 'colette-scarf.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56176]', () => {
    cy.visit('/' + 'bruna-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56192]', () => {
    cy.visit('/' + 'silver-collection.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56193]', () => {
    cy.visit('/' + 'silver-collection.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56194]', () => {
    cy.visit('/' + 'silver-collection.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56195]', () => {
    cy.visit('/' + 'silver-collection.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56196]', () => {
    cy.visit('/' + 'silver-collection-4.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56197]', () => {
    cy.visit('/' + 'silver-collection-5.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56198]', () => {
    cy.visit('/' + 'silver-collection-6.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56199]', () => {
    cy.visit('/' + 'silver-collection-7.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56200]', () => {
    cy.visit('/' + 'silver-collection-8.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56201]', () => {
    cy.visit('/' + 'silver-collection-9.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56202]', () => {
    cy.visit('/' + 'silver-collection-10.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56203]', () => {
    cy.visit('/' + 'hinga-wallet-12.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56204]', () => {
    cy.visit('/' + 'hinga-wallet-13.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56205]', () => {
    cy.visit('/' + 'hinga-wallet-14.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56516]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-4161ll-ant-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56517]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-4161ll-ant-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56518]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-4161ll-ant-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56519]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-4161ll-ant-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56520]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-4161ll-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56521]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-4161ll-wmt-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56522]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-4161ll-wmt-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56523]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-4161ll-wmt-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56524]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-4161ll-wmt-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56525]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-4161ll-wmt-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56526]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-4162ll-ant-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56527]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-4162ll-ant-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56528]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-4162ll-ant-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56529]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-4162ll-ant-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56530]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-4162ll-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56531]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-4162ll-wmt-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56532]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-4162ll-wmt-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56533]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-4162ll-wmt-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56534]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-4162ll-wmt-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56535]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-4162ll-wmt-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56665]', () => {
    cy.visit('/' + 'laite-3-4-sleeve-scarf-back-tunic-7526-chm-xs.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [56666]', () => {
    cy.visit('/' + 'laite-3-4-sleeve-scarf-back-tunic-7526-chm-s.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [56667]', () => {
    cy.visit('/' + 'laite-3-4-sleeve-scarf-back-tunic-7526-chm-m.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [56668]', () => {
    cy.visit('/' + 'laite-3-4-sleeve-scarf-back-tunic-7526-chm-l.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [56669]', () => {
    cy.visit('/' + 'laite-3-4-sleeve-scarf-back-tunic-7526-chm-xl.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [56832]', () => {
    cy.visit('/' + 'glancita-scarf-r90117-mti-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [56925]', () => {
    cy.visit('/' + 'silver-collection-elya1833-blk-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56947]', () => {
    cy.visit('/' + 'johnny-was-journal.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56948]', () => {
    cy.visit('/' + 'tuscany-wide-palazzo-pant-plus-size.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [56952]', () => {
    cy.visit('/' + 'skinny-jean.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56957]', () => {
    cy.visit('/' + 'adam-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56958]', () => {
    cy.visit('/' + 'adam-necklace-adam15-blk.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56959]', () => {
    cy.visit('/' + 'dana-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56961]', () => {
    cy.visit('/' + 'elya-choker.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56962]', () => {
    cy.visit('/' + 'elya-choker-elya1836-blk-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56963]', () => {
    cy.visit('/' + 'bracelet.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56965]', () => {
    cy.visit('/' + 'bracelet-hip107-turq.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56967]', () => {
    cy.visit('/' + 'mia-silver-bracelet.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56969]', () => {
    cy.visit('/' + 'mia-silver-bracelet-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56971]', () => {
    cy.visit('/' + 'mia-silver-bracelet-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56973]', () => {
    cy.visit('/' + 'nanet-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56974]', () => {
    cy.visit('/' + 'nanet-necklace-nanet07-brwn-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [56975]', () => {
    cy.visit('/' + 'nanet-necklace-nanet07-brwn-os-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56977]', () => {
    cy.visit('/' + 'nanet-necklace-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56979]', () => {
    cy.visit('/' + 'skinny-jean.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56980]', () => {
    cy.visit('/' + 'boyfriend-jean.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [56981]', () => {
    cy.visit('/' + 'flare-jean.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [56982]', () => {
    cy.visit('/' + 'nepentha-espadrille-f9da3b003ca9de882f2688d3be99cb54.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56983]', () => {
    cy.visit('/' + 'elysia-espadrille-a5d7cd841115aeb33a4f9222abc1a155.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56984]', () => {
    cy.visit('/' + 'aldorva-espadrille-d2a5ac73bdabd29d975ff5911c95559f.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56985]', () => {
    cy.visit('/' + 'catopsia-espadrille-87b25ad769ba11ab1267ea0dfa0e0689.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56986]', () => {
    cy.visit('/' + 'nepentha-espadrille-1-d2262e46bb6dbb1ab48787c590fe65f4.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [56987]', () => {
    cy.visit('/' + 'elysia-espadrille-1-2a942e2e37bf1fbd558934bc85291855.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57056]', () => {
    cy.visit('/' + 'skinny-jean-6.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [57065]', () => {
    cy.visit('/' + 'elya-bead-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57086]', () => {
    cy.visit('/' + 'anaya-crop-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [57092]', () => {
    cy.visit('/' + 'tz-collection.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57094]', () => {
    cy.visit('/' + 'black-diamond-raised-band.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57096]', () => {
    cy.visit('/' + 'raised-band.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57100]', () => {
    cy.visit('/' + 'solid-band.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57104]', () => {
    cy.visit('/' + 'happiness-bangle.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57112]', () => {
    cy.visit('/' + 'gold-script-bangle.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57114]', () => {
    cy.visit('/' + 'block-ring.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57118]', () => {
    cy.visit('/' + 'johnny-was-journal-jwg120-mti-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57129]', () => {
    cy.visit('/' + 'stretch-eyelet-legging-plus-size.html')
    cy.url().should('include', '/' + 'clothing/luxe.html')
  })

  it('URL redirect for [57130]', () => {
    cy.visit('/' + 'morning-dew-tank-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [57133]', () => {
    cy.visit('/' + 'nye-tank-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [57139]', () => {
    cy.visit('/' + 'mina-dropped-shoulder-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [57227]', () => {
    cy.visit('/' + 'wynifred-twofer-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [57244]', () => {
    cy.visit('/' + 'mixed-prints-maxi-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [57245]', () => {
    cy.visit('/' + 'mixed-prints-maxi-tank-dress-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [57250]', () => {
    cy.visit('/' + 'zia-v-neck-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [57251]', () => {
    cy.visit('/' + 'zia-v-neck-tank-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [57256]', () => {
    cy.visit('/' + 'plaid-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57257]', () => {
    cy.visit('/' + 'jordyn-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57258]', () => {
    cy.visit('/' + 'rose-lace-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57259]', () => {
    cy.visit('/' + 'fiesta-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57260]', () => {
    cy.visit('/' + 'emma-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57261]', () => {
    cy.visit('/' + 'tsubaki-belt.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57275]', () => {
    cy.visit('/' + 'stretch-twill-pants.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [57276]', () => {
    cy.visit('/' + 'stretch-twill-pants-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [57280]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-2.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [57281]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-3.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [57282]', () => {
    cy.visit('/' + 'medum-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57283]', () => {
    cy.visit('/' + 'medum-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57292]', () => {
    cy.visit('/' + 'rina-yoke-tank-long-tunic.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [57293]', () => {
    cy.visit('/' + 'rina-yoke-tank-long-tunic-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [57303]', () => {
    cy.visit('/' + 'letty-tote-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57304]', () => {
    cy.visit('/' + 'letty-tote-bag-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57305]', () => {
    cy.visit('/' + 'arwen-backpack.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57306]', () => {
    cy.visit('/' + 'arwen-backpack-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57307]', () => {
    cy.visit('/' + 'lucy-easy-v-neck-top.html')
    cy.url().should('include', '/' + 'clothing/tops.html')
  })

  it('URL redirect for [57314]', () => {
    cy.visit('/' + 'kai-short-sleeve-scarf-back-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [57335]', () => {
    cy.visit('/' + 'tanaica-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57336]', () => {
    cy.visit('/' + 'hynden-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57344]', () => {
    cy.visit('/' + 'joveno-short-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [57349]', () => {
    cy.visit('/' + 'timmie-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [57350]', () => {
    cy.visit('/' + 'milla-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [57351]', () => {
    cy.visit('/' + 'johnny-was-long-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [57352]', () => {
    cy.visit('/' + 'johnny-was-long-pillow-1.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [57353]', () => {
    cy.visit('/' + 'viney-embroidered-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [57354]', () => {
    cy.visit('/' + 'viney-embroidered-pillow-1.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [57355]', () => {
    cy.visit('/' + 'busch-button-down-top-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [57356]', () => {
    cy.visit('/' + 'water-drop-18k-gold-plated-bangle.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57357]', () => {
    cy.visit('/' + 'water-drop-18k-gold-plated-bangle-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57358]', () => {
    cy.visit('/' + 'water-drop-18k-gold-plated-bangle-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [57608]', () => {
    cy.visit('/' + 'fiesta-scarf-jwc1319-mti-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [57610]', () => {
    cy.visit('/' + 'tsubaki-belt-c90102-mti-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57691]', () => {
    cy.visit('/' + 'short-slip-4163ll-ant-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57692]', () => {
    cy.visit('/' + 'short-slip-4163ll-ant-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57693]', () => {
    cy.visit('/' + 'short-slip-4163ll-ant-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57694]', () => {
    cy.visit('/' + 'short-slip-4163ll-ant-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57695]', () => {
    cy.visit('/' + 'short-slip-4163ll-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57696]', () => {
    cy.visit('/' + 'short-slip-4163ll-mns-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57697]', () => {
    cy.visit('/' + 'short-slip-4163ll-mns-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57698]', () => {
    cy.visit('/' + 'short-slip-4163ll-mns-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57699]', () => {
    cy.visit('/' + 'short-slip-4163ll-mns-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57700]', () => {
    cy.visit('/' + 'short-slip-4163ll-mns-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57701]', () => {
    cy.visit('/' + 'medium-slip-4164ll-ant-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57702]', () => {
    cy.visit('/' + 'medium-slip-4164ll-ant-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57703]', () => {
    cy.visit('/' + 'medium-slip-4164ll-ant-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57704]', () => {
    cy.visit('/' + 'medium-slip-4164ll-ant-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57705]', () => {
    cy.visit('/' + 'medium-slip-4164ll-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57706]', () => {
    cy.visit('/' + 'medium-slip-4164ll-mns-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57707]', () => {
    cy.visit('/' + 'medium-slip-4164ll-mns-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57708]', () => {
    cy.visit('/' + 'medium-slip-4164ll-mns-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57709]', () => {
    cy.visit('/' + 'medium-slip-4164ll-mns-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57710]', () => {
    cy.visit('/' + 'medium-slip-4164ll-mns-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [57845]', () => {
    cy.visit('/' + 'kai-short-sleeve-scarf-back-tunic-7494-pla-xs.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [57846]', () => {
    cy.visit('/' + 'kai-short-sleeve-scarf-back-tunic-7494-pla-s.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [57847]', () => {
    cy.visit('/' + 'kai-short-sleeve-scarf-back-tunic-7494-pla-m.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [57848]', () => {
    cy.visit('/' + 'kai-short-sleeve-scarf-back-tunic-7494-pla-l.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [57849]', () => {
    cy.visit('/' + 'kai-short-sleeve-scarf-back-tunic-7494-pla-xl.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [58071]', () => {
    cy.visit('/' + 'diamond-eyelet-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58072]', () => {
    cy.visit('/' + 'wynired-twofer-tank-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58097]', () => {
    cy.visit('/' + 'rina-yoke-tank-long-tunic-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58206]', () => {
    cy.visit('/' + 'rebekah-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [58210]', () => {
    cy.visit('/' + 'rebehak-pillow-v3930jw-ofw-1.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [58212]', () => {
    cy.visit('/' + 'multi-block-wrap-pant.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58219]', () => {
    cy.visit('/' + 'asbrie-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [58220]', () => {
    cy.visit('/' + 'asbrie-dress-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [58221]', () => {
    cy.visit('/' + 'asbrie-dress-2.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [58222]', () => {
    cy.visit('/' + 'asbrie-dress-3.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [58223]', () => {
    cy.visit('/' + 'deleal-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58224]', () => {
    cy.visit('/' + 'deleal-dress-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58225]', () => {
    cy.visit('/' + 'deleal-dress-2.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58226]', () => {
    cy.visit('/' + 'deleal-dress-3.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58227]', () => {
    cy.visit('/' + 'greidon-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58228]', () => {
    cy.visit('/' + 'greidon-dress-1.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [58229]', () => {
    cy.visit('/' + 'greidon-dress-2.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58230]', () => {
    cy.visit('/' + 'greidon-dress-3.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58231]', () => {
    cy.visit('/' + 'marbay-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58232]', () => {
    cy.visit('/' + 'marbay-dress-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58233]', () => {
    cy.visit('/' + 'marbay-dress-2.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58234]', () => {
    cy.visit('/' + 'marbay-dress-3.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58326]', () => {
    cy.visit('/' + 'skinny-jean-7.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [58330]', () => {
    cy.visit('/' + 'torreya-button-down-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58331]', () => {
    cy.visit('/' + 'torreya-button-down-dress-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58335]', () => {
    cy.visit('/' + 'julian-handkerchief-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58338]', () => {
    cy.visit('/' + 'rocky-eyelet-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58339]', () => {
    cy.visit('/' + 'rocky-eyelet-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58340]', () => {
    cy.visit('/' + 'hoxie-eyelet-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58341]', () => {
    cy.visit('/' + 'hoxie-eyelet-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58342]', () => {
    cy.visit('/' + 'hoxie-eyelet-tank-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58353]', () => {
    cy.visit('/' + 'archi-tier-tank.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58354]', () => {
    cy.visit('/' + 'archi-tier-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58362]', () => {
    cy.visit('/' + 'horizon-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58363]', () => {
    cy.visit('/' + 'horizon-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [58364]', () => {
    cy.visit('/' + 'holly-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [58365]', () => {
    cy.visit('/' + 'vintage-floral-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [58366]', () => {
    cy.visit('/' + 'timmie-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [58367]', () => {
    cy.visit('/' + 'era-long-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [58368]', () => {
    cy.visit('/' + 'rosetti-shirred-off-the-shoulder-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58373]', () => {
    cy.visit('/' + 'tea-garden-crochet-yoke-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58374]', () => {
    cy.visit('/' + 'tea-garden-crochet-yoke-top-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58383]', () => {
    cy.visit('/' + 'printed-lace-trim-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58385]', () => {
    cy.visit('/' + 'short-slip-39.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [58386]', () => {
    cy.visit('/' + 'short-slip-40.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [58387]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58388]', () => {
    cy.visit('/' + 'medium-slip.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58393]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58394]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58395]', () => {
    cy.visit('/' + 'colette-deep-scoop-tee-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58396]', () => {
    cy.visit('/' + 'dita-yoke-tank-long-tunic.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58397]', () => {
    cy.visit('/' + 'dita-yoke-tank-long-tunic-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })
})