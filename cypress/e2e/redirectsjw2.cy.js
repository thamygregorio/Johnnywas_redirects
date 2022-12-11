/// <reference types="cypress" />

describe('URL redirect - Step 2', {
  "retries": 1
}, () => {

  it('URL redirect for [58404]', () => {
    cy.visit('/' + 'karlotta-crop-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58405]', () => {
    cy.visit('/' + 'karlotta-crop-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58406]', () => {
    cy.visit('/' + 'karlotta-crop-tank-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [58410]', () => {
    cy.visit('/' + 'selena-weekend-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [58411]', () => {
    cy.visit('/' + 'selena-weekend-bag-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [58415]', () => {
    cy.visit('/' + 'willow-pleated-peasant-long-tunic.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58419]', () => {
    cy.visit('/' + 'alina-laceup-henley-shirt.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58422]', () => {
    cy.visit('/' + 'anna-melody-scarf-back-shirt.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [58430]', () => {
    cy.visit('/' + 'capoe-chiffon-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [58664]', () => {
    cy.visit('/' + 'timmie-scarf-jwc1316-mti-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [58751]', () => {
    cy.visit('/' + 'short-slip-4165ll-sal-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58752]', () => {
    cy.visit('/' + 'short-slip-4165ll-sal-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58753]', () => {
    cy.visit('/' + 'short-slip-4165ll-sal-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58754]', () => {
    cy.visit('/' + 'short-slip-4165ll-sal-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58755]', () => {
    cy.visit('/' + 'short-slip-4165ll-sal-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58756]', () => {
    cy.visit('/' + 'short-slip-4165ll-wht-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58757]', () => {
    cy.visit('/' + 'short-slip-4165ll-wht-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58758]', () => {
    cy.visit('/' + 'short-slip-4165ll-wht-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58759]', () => {
    cy.visit('/' + 'short-slip-4165ll-wht-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58760]', () => {
    cy.visit('/' + 'short-slip-4165ll-wht-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58761]', () => {
    cy.visit('/' + 'medium-slip-4166ll-sal-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58762]', () => {
    cy.visit('/' + 'medium-slip-4166ll-sal-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58763]', () => {
    cy.visit('/' + 'medium-slip-4166ll-sal-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58764]', () => {
    cy.visit('/' + 'medium-slip-4166ll-sal-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58765]', () => {
    cy.visit('/' + 'medium-slip-4166ll-sal-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58766]', () => {
    cy.visit('/' + 'medium-slip-4166ll-wht-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58767]', () => {
    cy.visit('/' + 'medium-slip-4166ll-wht-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58768]', () => {
    cy.visit('/' + 'medium-slip-4166ll-wht-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58769]', () => {
    cy.visit('/' + 'medium-slip-4166ll-wht-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58770]', () => {
    cy.visit('/' + 'medium-slip-4166ll-wht-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [58893]', () => {
    cy.visit('/' + 'willow-pleated-peasant-long-tunic-7507-blh-xs.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58894]', () => {
    cy.visit('/' + 'willow-pleated-peasant-long-tunic-7507-blh-s.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58895]', () => {
    cy.visit('/' + 'willow-pleated-peasant-long-tunic-7507-blh-m.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58896]', () => {
    cy.visit('/' + 'willow-pleated-peasant-long-tunic-7507-blh-l.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58897]', () => {
    cy.visit('/' + 'willow-pleated-peasant-long-tunic-7507-blh-xl.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58913]', () => {
    cy.visit('/' + 'alina-laceup-henley-shirt-7512-blh-xs.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58914]', () => {
    cy.visit('/' + 'alina-laceup-henley-shirt-7512-blh-s.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58915]', () => {
    cy.visit('/' + 'alina-laceup-henley-shirt-7512-blh-m.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58916]', () => {
    cy.visit('/' + 'alina-laceup-henley-shirt-7512-blh-l.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58917]', () => {
    cy.visit('/' + 'alina-laceup-henley-shirt-7512-blh-xl.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [58928]', () => {
    cy.visit('/' + 'anna-melody-scarf-back-shirt-7528-pla-xs.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [58929]', () => {
    cy.visit('/' + 'anna-melody-scarf-back-shirt-7528-pla-s.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [58930]', () => {
    cy.visit('/' + 'anna-melody-scarf-back-shirt-7528-pla-m.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [58931]', () => {
    cy.visit('/' + 'anna-melody-scarf-back-shirt-7528-pla-l.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [58932]', () => {
    cy.visit('/' + 'anna-melody-scarf-back-shirt-7528-pla-xl.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [59052]', () => {
    cy.visit('/' + 'elodie-cut-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59053]', () => {
    cy.visit('/' + 'elodie-plain-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59054]', () => {
    cy.visit('/' + 'elodie-embroidered-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59055]', () => {
    cy.visit('/' + 'one-of-a-kind-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59056]', () => {
    cy.visit('/' + 'one-of-a-kind-necklace-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59057]', () => {
    cy.visit('/' + 'leather-wrap-choker-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59058]', () => {
    cy.visit('/' + 'rose-thorn-band-with-single-diamond.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59059]', () => {
    cy.visit('/' + 'rose-thorn-band-with-single-ruby.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59060]', () => {
    cy.visit('/' + 'rose-thorn-band-with-sprinkled-diamonds.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59061]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-ring.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59062]', () => {
    cy.visit('/' + 'branch-bangle.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59063]', () => {
    cy.visit('/' + 'rutilated-quartz-charm-neckklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59064]', () => {
    cy.visit('/' + 'rutilated-quartz-earrings.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59065]', () => {
    cy.visit('/' + 'queen-ruby-and-diamond-pendant.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59066]', () => {
    cy.visit('/' + 'queen-ruby-and-diamond-ring.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59067]', () => {
    cy.visit('/' + 'leaf-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59068]', () => {
    cy.visit('/' + '14k-gold-home-is-where-the-heart-is-necklace.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59069]', () => {
    cy.visit('/' + '14k-gold-7-sapphire-crescent-necklace.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59070]', () => {
    cy.visit('/' + 'sacred-bee-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59071]', () => {
    cy.visit('/' + 'love-struck-arrow-necklace.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59072]', () => {
    cy.visit('/' + 'snake-ring-with-star-set-diamond.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59073]', () => {
    cy.visit('/' + 'snake-bangle-with-star-set-diamond.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59074]', () => {
    cy.visit('/' + 'medium-crescent-hoops.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59075]', () => {
    cy.visit('/' + 'small-crescent-hoops.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59076]', () => {
    cy.visit('/' + 'hammered-bangle.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59077]', () => {
    cy.visit('/' + 'medium-crescent-hoops-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59078]', () => {
    cy.visit('/' + 'small-heart-of-gold-with-star-set-diamond.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59079]', () => {
    cy.visit('/' + 'large-heart-of-gold-with-star-set-diamond.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59080]', () => {
    cy.visit('/' + '14k-gold-custom-heart-of-gold-ring.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59081]', () => {
    cy.visit('/' + '14k-gold-large-heart-of-gold-love-necklace.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59082]', () => {
    cy.visit('/' + 'large-customizable-heart-of-gold-necklace.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59083]', () => {
    cy.visit('/' + 'small-customizable-heart-of-gold-necklace.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59084]', () => {
    cy.visit('/' + 'turquoise-oval-ring.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59085]', () => {
    cy.visit('/' + 'turquoise-sun-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59086]', () => {
    cy.visit('/' + 'turquoise-drop-earrings.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59087]', () => {
    cy.visit('/' + 'turquoise-petal-necklace.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59088]', () => {
    cy.visit('/' + 'green-agate-petal-ring.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59089]', () => {
    cy.visit('/' + 'green-agate-petal-hoop.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59090]', () => {
    cy.visit('/' + 'green-agate-petal-stud-with-ear-jacket.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59091]', () => {
    cy.visit('/' + 'green-agate-open-petal-ring.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59093]', () => {
    cy.visit('/' + 'black-diamond-band.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59094]', () => {
    cy.visit('/' + 'black-diamond-band-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59095]', () => {
    cy.visit('/' + 'one-of-a-kind-necklace-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59104]', () => {
    cy.visit('/' + 'rose-thorn-band-with-single-diamond-lh0029-gld-6.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59105]', () => {
    cy.visit('/' + 'rose-thorn-band-with-single-diamond-lh0029-gld-7.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59110]', () => {
    cy.visit('/' + 'rose-thorn-band-with-single-ruby-lh0028-gld-6.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59111]', () => {
    cy.visit('/' + 'rose-thorn-band-with-single-ruby-lh0028-gld-7.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59116]', () => {
    cy.visit('/' + 'rose-thorn-band-with-sprinkled-diamonds-lh0030-gld-6.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59126]', () => {
    cy.visit('/' + 'rutilated-quartz-charm-necklace-lh0034-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59130]', () => {
    cy.visit('/' + 'queen-ruby-and-diamond-ring-lh0037-gld-6.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59131]', () => {
    cy.visit('/' + 'queen-ruby-and-diamond-ring-lh0037-gld-7.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59138]', () => {
    cy.visit('/' + 'bee-necklace.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59147]', () => {
    cy.visit('/' + 'medium-crescent-hoops-lh0014-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59148]', () => {
    cy.visit('/' + 'small-crescent-hoops-lh0015-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59149]', () => {
    cy.visit('/' + 'hammered-bangle-lh0045-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59150]', () => {
    cy.visit('/' + 'medium-crescent-hoops-lh0017-sil-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59163]', () => {
    cy.visit('/' + 'turquoise-oval-ring-lh0042-gld-6.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59167]', () => {
    cy.visit('/' + 'turquoise-sun-necklace-lh0041-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59168]', () => {
    cy.visit('/' + 'turquoise-drop-earrings-lh0039-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59171]', () => {
    cy.visit('/' + 'green-agate-petal-ring.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59176]', () => {
    cy.visit('/' + 'green-agate-petal-hoop-lh0033-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59201]', () => {
    cy.visit('/' + 'leather-wrap-choker-3.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59203]', () => {
    cy.visit('/' + 'one-of-a-kind-necklace-3.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59204]', () => {
    cy.visit('/' + 'one-of-a-kind-necklace-4.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59206]', () => {
    cy.visit('/' + 'initials-testing-product.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59224]', () => {
    cy.visit('/' + 'draper-shorts.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59225]', () => {
    cy.visit('/' + 'draper-shorts-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59227]', () => {
    cy.visit('/' + 'custom-large-heart-of-gold-necklace-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59228]', () => {
    cy.visit('/' + 'golden-heart-ring-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59229]', () => {
    cy.visit('/' + '14k-gold-custom-large-golden-heart-with-star-set-diamond.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59230]', () => {
    cy.visit('/' + 'rosebud-stud-earrings.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59231]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-mini-hoop-earrings.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59232]', () => {
    cy.visit('/' + 'leaf-stuf-earrings.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59233]', () => {
    cy.visit('/' + 'green-agate-baguette-stud-earrings.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59234]', () => {
    cy.visit('/' + 'love-struck-arrow-stud-earrings.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59235]', () => {
    cy.visit('/' + 'love-struck-arrow-stud-earrings-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59236]', () => {
    cy.visit('/' + 'love-struck-arrow-necklace-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59237]', () => {
    cy.visit('/' + 'love-struck-arrow-necklace-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59244]', () => {
    cy.visit('/' + 'green-agate-baguette-stud-earrings-lh0032-sil-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59246]', () => {
    cy.visit('/' + 'love-struck-arrow-stud-earrings-lh0048-sil-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59247]', () => {
    cy.visit('/' + 'love-struck-arrow-necklace-lh0054-sil-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59251]', () => {
    cy.visit('/' + 'adam-necklace-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59252]', () => {
    cy.visit('/' + 'elya-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59253]', () => {
    cy.visit('/' + 'elya-necklace-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59254]', () => {
    cy.visit('/' + 'hip-bracelet.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59255]', () => {
    cy.visit('/' + 'mia-bracelet-18.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59256]', () => {
    cy.visit('/' + 'mia-bracelet-19.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59257]', () => {
    cy.visit('/' + 'mia-bracelet-20.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59258]', () => {
    cy.visit('/' + 'mia-bracelet-21.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59259]', () => {
    cy.visit('/' + 'suede-black-choker.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59273]', () => {
    cy.visit('/' + 'rocky-eyelet-tank-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59274]', () => {
    cy.visit('/' + 'hoxie-eyelet-tank-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59277]', () => {
    cy.visit('/' + 'selena-short-sleeve-trapeze-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59278]', () => {
    cy.visit('/' + 'dita-yoke-tank-long-tunic-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59280]', () => {
    cy.visit('/' + 'collette-deep-scoop-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59287]', () => {
    cy.visit('/' + 'horizon-poncho-jwc6229x-mti-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59333]', () => {
    cy.visit('/' + 'selena-short-sleeve-trapeze-tee-3877jwx-hto-1x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59334]', () => {
    cy.visit('/' + 'selena-short-sleeve-trapeze-tee-3877jwx-hto-2x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59335]', () => {
    cy.visit('/' + 'selena-short-sleeve-trapeze-tee-3877jwx-hto-3x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59345]', () => {
    cy.visit('/' + 'adam-necklace-adam13-brwn-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59346]', () => {
    cy.visit('/' + 'elya-necklace-elya1833-blk-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59353]', () => {
    cy.visit('/' + 'suede-black-choker-neo230-blk-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59354]', () => {
    cy.visit('/' + 'color-trio-studs.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59358]', () => {
    cy.visit('/' + 'home-is-where-the-heart-is-earrings.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59361]', () => {
    cy.visit('/' + '14k-gold-rosebud-studs-with-ruby-earrings.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59362]', () => {
    cy.visit('/' + 'rose-thorn-hoop-mini-earrings.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59363]', () => {
    cy.visit('/' + 'rose-thorn-hoop-mini-earrings-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59365]', () => {
    cy.visit('/' + 'leaf-stud-earrings.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59367]', () => {
    cy.visit('/' + 'green-agate-baguette-stud-earrings-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59369]', () => {
    cy.visit('/' + 'arrow-love-struck-stud-earrings.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59378]', () => {
    cy.visit('/' + 'heart-of-gold-large.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59379]', () => {
    cy.visit('/' + 'crescent-hoops-large.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59380]', () => {
    cy.visit('/' + 'crescent-hoops-large-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59381]', () => {
    cy.visit('/' + 'crescent-hoops-small.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59382]', () => {
    cy.visit('/' + 'feather-stud.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59384]', () => {
    cy.visit('/' + 'fantasy-limonada-kimono-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [59425]', () => {
    cy.visit('/' + 'heart-of-gold-large-lh0003-gld-xs.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59426]', () => {
    cy.visit('/' + 'crescent-hoops-large-lh0013-gld-s.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59428]', () => {
    cy.visit('/' + 'crescent-hoops-small-lh0018-gld-l.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [59435]', () => {
    cy.visit('/' + 'snake-ring-with-blue-topaz.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59436]', () => {
    cy.visit('/' + 'spear-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59437]', () => {
    cy.visit('/' + 'spear-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59438]', () => {
    cy.visit('/' + 'spear-tank-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59441]', () => {
    cy.visit('/' + 'knit-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59442]', () => {
    cy.visit('/' + 'knit-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59445]', () => {
    cy.visit('/' + 'vara-blouse.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59461]', () => {
    cy.visit('/' + 'nikki-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59462]', () => {
    cy.visit('/' + 'nikki-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59471]', () => {
    cy.visit('/' + 'blu-tank-long-tunic.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59474]', () => {
    cy.visit('/' + 'cabuki-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59475]', () => {
    cy.visit('/' + 'blu-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59476]', () => {
    cy.visit('/' + 'frica-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59477]', () => {
    cy.visit('/' + 'nancy-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59482]', () => {
    cy.visit('/' + 'stained-glass-embroidered-peasant-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59487]', () => {
    cy.visit('/' + 'white-lillies-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59489]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-4.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [59490]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-5.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [59491]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-6.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [59492]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59493]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59494]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59495]', () => {
    cy.visit('/' + 'embroidered-yoke-ruffle-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59497]', () => {
    cy.visit('/' + 'printed-back-tank-sweater.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59498]', () => {
    cy.visit('/' + 'tiva-tank-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59499]', () => {
    cy.visit('/' + 'tiva-tank-dress-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59504]', () => {
    cy.visit('/' + 'tiva-drawstring-tote.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59505]', () => {
    cy.visit('/' + 'tiva-drawstring-tote-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59511]', () => {
    cy.visit('/' + 'cortez-backpack.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59512]', () => {
    cy.visit('/' + 'cortez-backpack-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59515]', () => {
    cy.visit('/' + 'lucia-crop-swing-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59521]', () => {
    cy.visit('/' + 'firenze-sleeveless-scarf-back-shirt.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [59524]', () => {
    cy.visit('/' + 'anise-camo-tote.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59534]', () => {
    cy.visit('/' + 'arcadia-flowy-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59549]', () => {
    cy.visit('/' + 'katra-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59551]', () => {
    cy.visit('/' + 'knox-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [59552]', () => {
    cy.visit('/' + 'artley-tank-top.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59553]', () => {
    cy.visit('/' + 'artley-tank-top-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [59558]', () => {
    cy.visit('/' + 'adam-necklace-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [59601]', () => {
    cy.visit('/' + 'knit-tank-c12398-ftg-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59602]', () => {
    cy.visit('/' + 'knit-tank-c12398-ftg-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59603]', () => {
    cy.visit('/' + 'knit-tank-c12398-ftg-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59604]', () => {
    cy.visit('/' + 'knit-tank-c12398-ftg-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59605]', () => {
    cy.visit('/' + 'knit-tank-c12398-ftg-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59606]', () => {
    cy.visit('/' + 'knit-tank-c12398-ftg-xxl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59607]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59608]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59609]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59610]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59611]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59612]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-xxl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59836]', () => {
    cy.visit('/' + 'short-slip-l13499-dse-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59837]', () => {
    cy.visit('/' + 'short-slip-l13499-dse-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59838]', () => {
    cy.visit('/' + 'short-slip-l13499-dse-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59841]', () => {
    cy.visit('/' + 'short-slip-l13499-ant-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59842]', () => {
    cy.visit('/' + 'short-slip-l13499-ant-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59843]', () => {
    cy.visit('/' + 'short-slip-l13499-ant-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59844]', () => {
    cy.visit('/' + 'short-slip-l13499-ant-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59845]', () => {
    cy.visit('/' + 'short-slip-l13499-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59846]', () => {
    cy.visit('/' + 'short-slip-l13499-blk-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59847]', () => {
    cy.visit('/' + 'short-slip-l13499-blk-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59849]', () => {
    cy.visit('/' + 'short-slip-l13499-blk-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59850]', () => {
    cy.visit('/' + 'short-slip-l13499-blk-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59851]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-dse-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59852]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-dse-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59853]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-dse-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59854]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-dse-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59855]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-dse-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59856]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-ant-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59857]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-ant-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59858]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-ant-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59859]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-ant-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59860]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59861]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-blk-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59862]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-blk-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59863]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-blk-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59864]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-blk-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59865]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l13599-blk-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [59980]', () => {
    cy.visit('/' + 'firenze-sleeveless-scarf-back-shirt-w11417-pla-xs.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [59981]', () => {
    cy.visit('/' + 'firenze-sleeveless-scarf-back-shirt-w11417-pla-s.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [59982]', () => {
    cy.visit('/' + 'firenze-sleeveless-scarf-back-shirt-w11417-pla-m.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [59983]', () => {
    cy.visit('/' + 'firenze-sleeveless-scarf-back-shirt-w11417-pla-l.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [59984]', () => {
    cy.visit('/' + 'firenze-sleeveless-scarf-back-shirt-w11417-pla-xl.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60163]', () => {
    cy.visit('/' + 'adam-necklace-adam14-mti-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60164]', () => {
    cy.visit('/' + 'heart-of-gold-ring-lh0009-sil-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60165]', () => {
    cy.visit('/' + 'heart-of-gold-ring-lh0009-sil-5-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60166]', () => {
    cy.visit('/' + 'heart-of-gold-ring-lh0009-sil-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60167]', () => {
    cy.visit('/' + 'heart-of-gold-ring-lh0009-sil-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60168]', () => {
    cy.visit('/' + 'heart-of-gold-ring-lh0009-sil-8-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60169]', () => {
    cy.visit('/' + 'heart-of-gold-ring-lh0009-sil-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60170]', () => {
    cy.visit('/' + 'heart-of-gold-ring-lh0009-sil-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60171]', () => {
    cy.visit('/' + '14k-gold-heart-of-gold-ring-lh0010-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60172]', () => {
    cy.visit('/' + '14k-gold-heart-of-gold-ring-lh0010-gld-5-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60173]', () => {
    cy.visit('/' + '14k-gold-heart-of-gold-ring-lh0010-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60174]', () => {
    cy.visit('/' + '14k-gold-heart-of-gold-ring-lh0010-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60175]', () => {
    cy.visit('/' + '14k-gold-heart-of-gold-ring-lh0010-gld-8-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60176]', () => {
    cy.visit('/' + '14k-gold-heart-of-gold-ring-lh0010-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60177]', () => {
    cy.visit('/' + '14k-gold-heart-of-gold-ring-lh0010-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60185]', () => {
    cy.visit('/' + '14k-gold-queen-ruby-and-diamond-ring-lh0037-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60186]', () => {
    cy.visit('/' + '14k-gold-queen-ruby-and-diamond-ring-lh0037-gld-5-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60187]', () => {
    cy.visit('/' + '14k-gold-queen-ruby-and-diamond-ring-lh0037-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60188]', () => {
    cy.visit('/' + '14k-gold-queen-ruby-and-diamond-ring-lh0037-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60189]', () => {
    cy.visit('/' + '14k-gold-queen-ruby-and-diamond-ring-lh0037-gld-8-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60190]', () => {
    cy.visit('/' + '14k-gold-queen-ruby-and-diamond-ring-lh0037-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60191]', () => {
    cy.visit('/' + '14k-gold-queen-ruby-and-diamond-ring-lh0037-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60193]', () => {
    cy.visit('/' + 'turquoise-oval-1.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60194]', () => {
    cy.visit('/' + 'turquoise-oval-ring-lh0042-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60195]', () => {
    cy.visit('/' + 'turquoise-oval-ring-lh0042-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60197]', () => {
    cy.visit('/' + 'turquoise-oval-ring-lh0042-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60199]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60200]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-5-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60201]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60202]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60204]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60205]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60206]', () => {
    cy.visit('/' + 'snake-ring-with-blue-topaz-lh0051-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60207]', () => {
    cy.visit('/' + 'snake-ring-with-blue-topaz-lh0051-gld-5-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60208]', () => {
    cy.visit('/' + 'snake-ring-with-blue-topaz-lh0051-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60209]', () => {
    cy.visit('/' + 'snake-ring-with-blue-topaz-lh0051-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60211]', () => {
    cy.visit('/' + 'snake-ring-with-blue-topaz-lh0051-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60212]', () => {
    cy.visit('/' + 'snake-ring-with-blue-topaz-lh0051-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60213]', () => {
    cy.visit('/' + 'green-agate-open-petal-ring-lh0062-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60214]', () => {
    cy.visit('/' + 'green-agate-open-petal-ring-lh0062-gld-5-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60215]', () => {
    cy.visit('/' + 'green-agate-open-petal-ring-lh0062-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60216]', () => {
    cy.visit('/' + 'green-agate-open-petal-ring-lh0062-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60217]', () => {
    cy.visit('/' + 'green-agate-open-petal-ring-lh0062-gld-8-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60218]', () => {
    cy.visit('/' + 'green-agate-open-petal-ring-lh0062-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60219]', () => {
    cy.visit('/' + 'green-agate-open-petal-ring-lh0062-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60220]', () => {
    cy.visit('/' + 'snake-ring-with-star-set-diamond-lh0050-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60221]', () => {
    cy.visit('/' + 'snake-ring-with-star-set-diamond-lh0050-gld-5-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60222]', () => {
    cy.visit('/' + 'snake-ring-with-star-set-diamond-lh0050-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60223]', () => {
    cy.visit('/' + 'snake-ring-with-star-set-diamond-lh0050-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60225]', () => {
    cy.visit('/' + 'snake-ring-with-star-set-diamond-lh0050-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60226]', () => {
    cy.visit('/' + 'snake-ring-with-star-set-diamond-lh0050-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60227]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-single-ruby-lh0028-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60228]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-single-ruby-lh0028-gld-5-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60229]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-single-ruby-lh0028-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60230]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-single-ruby-lh0028-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60231]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-single-ruby-lh0028-gld-8-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60232]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-single-ruby-lh0028-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60233]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-single-ruby-lh0028-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60234]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-sprinkled-diamonds-lh0030-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60236]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-sprinkled-diamonds-lh0030-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60237]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-sprinkled-diamonds-lh0030-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60239]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-sprinkled-diamonds-lh0030-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60240]', () => {
    cy.visit('/' + '14k-gold-rose-thorn-band-with-sprinkled-diamonds-lh0030-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60241]', () => {
    cy.visit('/' + 'green-agate-petal-ring.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60242]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-5-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60243]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60244]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60246]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60247]', () => {
    cy.visit('/' + 'green-agate-petal-ring-lh044-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60248]', () => {
    cy.visit('/' + '14k-gold-custom-large-golden-heart-with-star-set-diamond-lh0011-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60249]', () => {
    cy.visit('/' + '14k-gold-custom-large-golden-heart-with-star-set-diamond-lh0011-gld-5-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60250]', () => {
    cy.visit('/' + '14k-gold-custom-large-golden-heart-with-star-set-diamond-lh0011-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60251]', () => {
    cy.visit('/' + '14k-gold-custom-large-golden-heart-with-star-set-diamond-lh0011-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60252]', () => {
    cy.visit('/' + '14k-gold-custom-large-golden-heart-with-star-set-diamond-lh0011-gld-8-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60253]', () => {
    cy.visit('/' + '14k-gold-custom-large-golden-heart-with-star-set-diamond-lh0011-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60254]', () => {
    cy.visit('/' + '14k-gold-custom-large-golden-heart-with-star-set-diamond-lh0011-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60255]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-ring-lh0027-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60256]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-ring-lh0027-gld-5-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60257]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-ring-lh0027-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60258]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-ring-lh0027-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60259]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-ring-lh0027-gld-8-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60260]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-ring-lh0027-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60261]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-ring-lh0027-gld-9-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60262]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-with-single-diamond-lh0029-gld-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60263]', () => {
    cy.visit('/' + 'rose-thorn-band-with-diamond.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60264]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-with-single-diamond-lh0029-gld-6-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60265]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-with-single-diamond-lh0029-gld-7-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60266]', () => {
    cy.visit('/' + 'rose-thorn-band-with-diamond.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60267]', () => {
    cy.visit('/' + '14k-gold-rose-thron-band-with-single-diamond-lh0029-gld-8-5-pre-order.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [60296]', () => {
    cy.visit('/' + 'delia-neclace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [60308]', () => {
    cy.visit('/' + 'biggie-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60314]', () => {
    cy.visit('/' + 'blu-tank-long-tunic-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60323]', () => {
    cy.visit('/' + 'spear-tank-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60328]', () => {
    cy.visit('/' + 'tropic-tunder-scarf-back-dress-plus-size.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60329]', () => {
    cy.visit('/' + 'lucia-relaxed-v-neck-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60330]', () => {
    cy.visit('/' + 'lucia-relaxed-v-neck-tee-plus-size-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60336]', () => {
    cy.visit('/' + 'tiva-tank-dress-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60337]', () => {
    cy.visit('/' + 'mayee-scarf-back-tee-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60394]', () => {
    cy.visit('/' + 'christine-v-neck-blouse-j13517x-mpi-1x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60395]', () => {
    cy.visit('/' + 'christine-v-neck-blouse-j13517x-mpi-2x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60396]', () => {
    cy.visit('/' + 'christine-v-neck-blouse-j13517x-mpi-3x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60406]', () => {
    cy.visit('/' + 'tropic-thunder-scarf-back-dress-j30517x-nvy-1x.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60407]', () => {
    cy.visit('/' + 'tropic-thunder-scarf-back-dress-j30517x-nvy-2x.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60408]', () => {
    cy.visit('/' + 'tropic-thunder-scarf-back-dress-j30517x-nvy-3x.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60433]', () => {
    cy.visit('/' + 'mayee-scarf-back-tee-j11117x-nvy-1x.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60434]', () => {
    cy.visit('/' + 'mayee-scarf-back-tee-j11117x-nvy-2x.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60435]', () => {
    cy.visit('/' + 'mayee-scarf-back-tee-j11117x-nvy-3x.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60443]', () => {
    cy.visit('/' + 'camioni-eyelet-tunic-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [60445]', () => {
    cy.visit('/' + 'mixed-embroidered-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60446]', () => {
    cy.visit('/' + 'mixed-embroidered-tank-1.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60450]', () => {
    cy.visit('/' + 'tank-slit-dress.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60451]', () => {
    cy.visit('/' + 'knit-tank-2.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60452]', () => {
    cy.visit('/' + 'knit-tank-3.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60453]', () => {
    cy.visit('/' + 'teeteem-button-down.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60454]', () => {
    cy.visit('/' + 'teemy-pants.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60456]', () => {
    cy.visit('/' + 'athens-tops.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [60470]', () => {
    cy.visit('/' + 'anita-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [60471]', () => {
    cy.visit('/' + 'rev-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [60472]', () => {
    cy.visit('/' + 'morning-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [60473]', () => {
    cy.visit('/' + 'freemont-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [60483]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-7.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [60484]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-8.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [60493]', () => {
    cy.visit('/' + 'jojo-v-neck-crop-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60498]', () => {
    cy.visit('/' + 'jojo-bucket-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [60499]', () => {
    cy.visit('/' + 'jojo-bucket-bag-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [60504]', () => {
    cy.visit('/' + 'butterfly-cap-sleeve-scarf-back-tunic.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60507]', () => {
    cy.visit('/' + 'edem-denim-tote-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [60508]', () => {
    cy.visit('/' + 'ariella-flowy-tank.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60515]', () => {
    cy.visit('/' + 'bekkah-modal-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [60516]', () => {
    cy.visit('/' + 'bekkah-modal-top-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [60523]', () => {
    cy.visit('/' + 'sollee-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [60528]', () => {
    cy.visit('/' + 'leather-wrap-choker-4.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [60595]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-xs-1.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60596]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-s-1.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60597]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-m-1.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60598]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-l-1.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60599]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-xl-1.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60600]', () => {
    cy.visit('/' + 'knit-tank-c12398-wht-xxl-1.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60601]', () => {
    cy.visit('/' + 'knit-tank-c12398-nvynt-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60602]', () => {
    cy.visit('/' + 'knit-tank-c12398-nvynt-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60603]', () => {
    cy.visit('/' + 'knit-tank-c12398-nvynt-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60604]', () => {
    cy.visit('/' + 'knit-tank-c12398-nvynt-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60605]', () => {
    cy.visit('/' + 'knit-tank-c12398-nvynt-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60606]', () => {
    cy.visit('/' + 'knit-tank-c12398-nvynt-xxl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60753]', () => {
    cy.visit('/' + 'medium-slip-l13698-blk-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60754]', () => {
    cy.visit('/' + 'medium-slip-l13698-blk-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60755]', () => {
    cy.visit('/' + 'medium-slip-l13698-blk-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60756]', () => {
    cy.visit('/' + 'medium-slip-l13698-blk-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60757]', () => {
    cy.visit('/' + 'medium-slip-l13698-blk-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60758]', () => {
    cy.visit('/' + 'medium-slip-l13698-ant-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60759]', () => {
    cy.visit('/' + 'medium-slip-l13698-ant-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60760]', () => {
    cy.visit('/' + 'medium-slip-l13698-ant-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60761]', () => {
    cy.visit('/' + 'medium-slip-l13698-ant-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60762]', () => {
    cy.visit('/' + 'medium-slip-l13698-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [60850]', () => {
    cy.visit('/' + 'butterfly-cap-sleeve-scarf-back-tunic-w20715-pla-xs.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60851]', () => {
    cy.visit('/' + 'butterfly-cap-sleeve-scarf-back-tunic-w20715-pla-s.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60852]', () => {
    cy.visit('/' + 'butterfly-cap-sleeve-scarf-back-tunic-w20715-pla-m.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60853]', () => {
    cy.visit('/' + 'butterfly-cap-sleeve-scarf-back-tunic-w20715-pla-l.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60854]', () => {
    cy.visit('/' + 'butterfly-cap-sleeve-scarf-back-tunic-w20715-pla-xl.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [60980]', () => {
    cy.visit('/' + 'avery-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [60983]', () => {
    cy.visit('/' + 'ida-tunic-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [60985]', () => {
    cy.visit('/' + 'eliza-deep-sccop-tee.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [60986]', () => {
    cy.visit('/' + 'lace-up-top-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61072]', () => {
    cy.visit('/' + 'mixed-embroidered-tank-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [61077]', () => {
    cy.visit('/' + 'teeteem-button-down-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [61083]', () => {
    cy.visit('/' + 'jojo-yoke-tank-tunic-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [61084]', () => {
    cy.visit('/' + 'patchwork-scarf-back-tank-plus-size.html')
    cy.url().should('include', '/' + 'clothing/tops/clothing-tops-tanks-camis.html')
  })

  it('URL redirect for [61132]', () => {
    cy.visit('/' + 'patchwork-scarf-back-tank-j11217x-duc-1x.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [61133]', () => {
    cy.visit('/' + 'patchwork-scarf-back-tank-j11217x-duc-2x.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [61134]', () => {
    cy.visit('/' + 'patchwork-scarf-back-tank-j11217x-duc-3x.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [61160]', () => {
    cy.visit('/' + 'peacock-sable-blouse.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61173]', () => {
    cy.visit('/' + 'medium-slip-l13798-blk-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61174]', () => {
    cy.visit('/' + 'medium-slip-l13798-blk-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61175]', () => {
    cy.visit('/' + 'medium-slip-l13798-blk-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61176]', () => {
    cy.visit('/' + 'medium-slip-l13798-blk-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61177]', () => {
    cy.visit('/' + 'medium-slip-l13798-blk-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61178]', () => {
    cy.visit('/' + 'medium-slip-l13798-ant-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61179]', () => {
    cy.visit('/' + 'medium-slip-l13798-ant-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61180]', () => {
    cy.visit('/' + 'medium-slip-l13798-ant-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61181]', () => {
    cy.visit('/' + 'medium-slip-l13798-ant-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61182]', () => {
    cy.visit('/' + 'medium-slip-l13798-ant-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61183]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-9.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [61184]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-10.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [61185]', () => {
    cy.visit('/' + 'cenote-button-down-shirt.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61186]', () => {
    cy.visit('/' + 'cenote-button-down-shirt-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61187]', () => {
    cy.visit('/' + 'cenote-button-down-shirt-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61188]', () => {
    cy.visit('/' + 'stars-popover-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61189]', () => {
    cy.visit('/' + 'stars-popover-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61190]', () => {
    cy.visit('/' + 'minna-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61191]', () => {
    cy.visit('/' + 'minna-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61192]', () => {
    cy.visit('/' + 'stargaze-flare-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61193]', () => {
    cy.visit('/' + 'stargaze-flare-top-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61194]', () => {
    cy.visit('/' + 'cenoteka-kimono.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61195]', () => {
    cy.visit('/' + 'cenoteka-kimono-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61196]', () => {
    cy.visit('/' + 'harley-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61197]', () => {
    cy.visit('/' + 'harley-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61198]', () => {
    cy.visit('/' + 'stretch-eyelet-legging-2.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61199]', () => {
    cy.visit('/' + 'stretch-eyelet-legging-3.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61200]', () => {
    cy.visit('/' + 'pacheco-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61201]', () => {
    cy.visit('/' + 'pacheco-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61202]', () => {
    cy.visit('/' + 'ficher-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61203]', () => {
    cy.visit('/' + 'strona-bomber-jacket.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61204]', () => {
    cy.visit('/' + 'biyand-shrug.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61205]', () => {
    cy.visit('/' + 'stine-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61206]', () => {
    cy.visit('/' + 'dover-block-embroidered-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61207]', () => {
    cy.visit('/' + 'dover-block-embroidered-dress-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61208]', () => {
    cy.visit('/' + 'beyore-tier-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61209]', () => {
    cy.visit('/' + 'sarabeth-tunic.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [61210]', () => {
    cy.visit('/' + 'sarabeth-tunic-1.html')
    cy.url().should('include', '/' + 'clothing/johnny-was.html')
  })

  it('URL redirect for [61211]', () => {
    cy.visit('/' + 'sarabeth-tunic-2.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61212]', () => {
    cy.visit('/' + 'sindri-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61213]', () => {
    cy.visit('/' + 'sindri-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61214]', () => {
    cy.visit('/' + 'sindri-tunic-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61215]', () => {
    cy.visit('/' + 'sheesoh-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61216]', () => {
    cy.visit('/' + 'sheesoh-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61217]', () => {
    cy.visit('/' + 'spring-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61218]', () => {
    cy.visit('/' + 'sathya-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61219]', () => {
    cy.visit('/' + 'karino-button-down-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61220]', () => {
    cy.visit('/' + 'whisper-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61221]', () => {
    cy.visit('/' + 'whisper-boxy-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61222]', () => {
    cy.visit('/' + 'myra-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61223]', () => {
    cy.visit('/' + 'karino-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [61224]', () => {
    cy.visit('/' + 'sathya-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [61225]', () => {
    cy.visit('/' + 'saint-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [61227]', () => {
    cy.visit('/' + 'whisper-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [61228]', () => {
    cy.visit('/' + 'flora-waves-deep-v-blouse.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [61229]', () => {
    cy.visit('/' + 'twill-pants-with-embroidery.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [61230]', () => {
    cy.visit('/' + 'midnight-blooms-tunic.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [61231]', () => {
    cy.visit('/' + 'floral-waves-faux-wrap-dress.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [61232]', () => {
    cy.visit('/' + 'floral-waves-belted-v-neck.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [61233]', () => {
    cy.visit('/' + 'dusty-blooms-smocked-top.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [61234]', () => {
    cy.visit('/' + 'dusty-blooms-easy-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61235]', () => {
    cy.visit('/' + 'velvet-tiered-skirt.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [61236]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-7.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [61237]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-8.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [61238]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-11.html')
    cy.url().should('include', '/' + 'dresses/clothing/dresses/slips.html')
  })

  it('URL redirect for [61239]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-12.html')
    cy.url().should('include', '/' + 'dresses/clothing/dresses/slips.html')
  })

  it('URL redirect for [61240]', () => {
    cy.visit('/' + 'rib-cardi-with-scallop-trim.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [61241]', () => {
    cy.visit('/' + 'rib-tank-with-eyelash-lace.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [61242]', () => {
    cy.visit('/' + 'rib-tank-with-eyelash-lace-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [61243]', () => {
    cy.visit('/' + 'embroidered-sweatpants-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [61244]', () => {
    cy.visit('/' + 'lovebird-embroidered-pullover.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61245]', () => {
    cy.visit('/' + 'emilia-legging.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [61246]', () => {
    cy.visit('/' + 'emilia-legging-1.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [61247]', () => {
    cy.visit('/' + 'nindi-velvet-drape-top.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61248]', () => {
    cy.visit('/' + 'nindi-velvet-drape-top-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61249]', () => {
    cy.visit('/' + 'nindi-long-sleeve-thermal.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61250]', () => {
    cy.visit('/' + 'nindi-long-sleeve-thermal-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61251]', () => {
    cy.visit('/' + 'zoe-zip-up-hoodie.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61252]', () => {
    cy.visit('/' + 'zoe-zip-up-hoodie-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61253]', () => {
    cy.visit('/' + 'dexter-deep-scoop-tee.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61254]', () => {
    cy.visit('/' + 'dexter-deep-scoop-tee-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61255]', () => {
    cy.visit('/' + 'zoe-velvet-swing-tank.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61256]', () => {
    cy.visit('/' + 'zoe-velvet-swing-tank-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61257]', () => {
    cy.visit('/' + 'zoe-draped-top.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61258]', () => {
    cy.visit('/' + 'nindi-cold-shoulder-tunic.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61259]', () => {
    cy.visit('/' + 'emilia-velvet-pintuck-dress.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61260]', () => {
    cy.visit('/' + 'emilia-crop-jacket.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61261]', () => {
    cy.visit('/' + 'dexter-weekend-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [61262]', () => {
    cy.visit('/' + 'dexter-weekend-bag-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [61263]', () => {
    cy.visit('/' + 'emilia-backpack.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [61264]', () => {
    cy.visit('/' + 'emilia-backpack-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [61265]', () => {
    cy.visit('/' + 'megan-flare-sleeve-boho-blouse.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61266]', () => {
    cy.visit('/' + 'megan-flare-sleeve-boho-blouse-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61267]', () => {
    cy.visit('/' + 'kiki-laceup-tunic.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61268]', () => {
    cy.visit('/' + 'kiki-laceup-tunic-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61269]', () => {
    cy.visit('/' + 'alice-bomber-jacket.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61270]', () => {
    cy.visit('/' + 'alice-bomber-jacket-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61271]', () => {
    cy.visit('/' + 'kiki-pleated-embroidered-back-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61272]', () => {
    cy.visit('/' + 'kealan-boho-blouse.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61273]', () => {
    cy.visit('/' + 'kiki-drape-top.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61274]', () => {
    cy.visit('/' + 'alice-western-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61275]', () => {
    cy.visit('/' + 'alice-western-shirt-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61276]', () => {
    cy.visit('/' + 'kealan-easy-v-neck-dress.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61277]', () => {
    cy.visit('/' + 'melody-eyelet-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [61278]', () => {
    cy.visit('/' + 'trilow-cotton-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61279]', () => {
    cy.visit('/' + 'yoo-cupra-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61280]', () => {
    cy.visit('/' + 'bullio-challis-tunic.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61281]', () => {
    cy.visit('/' + 'liaath-challis-blouse.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61282]', () => {
    cy.visit('/' + 'lev-silk-top.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61283]', () => {
    cy.visit('/' + 'lev-silk-top-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61284]', () => {
    cy.visit('/' + 'xene-silk-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61285]', () => {
    cy.visit('/' + 'malla-chiffon-blouse.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61286]', () => {
    cy.visit('/' + 'misana-mesh-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61287]', () => {
    cy.visit('/' + 'yemasse-mesh-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61288]', () => {
    cy.visit('/' + 'marquardt-patchwork-hoodie.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61289]', () => {
    cy.visit('/' + 'marquardt-patchwork-hoodie-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61290]', () => {
    cy.visit('/' + 'solea-pullover.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61291]', () => {
    cy.visit('/' + 'solea-pullover-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61292]', () => {
    cy.visit('/' + 'leona-long-hoodie.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61293]', () => {
    cy.visit('/' + 'hiyles-wrap.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [61294]', () => {
    cy.visit('/' + 'hiyles-wrap-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [61295]', () => {
    cy.visit('/' + 'rectangle-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [61297]', () => {
    cy.visit('/' + 'marika-cargo-pant-8.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [61298]', () => {
    cy.visit('/' + 'keisha-velvet-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61299]', () => {
    cy.visit('/' + 'chenoa-velvet-top.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [61300]', () => {
    cy.visit('/' + 'ramble-pull-on-cargo-pant-3.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [61301]', () => {
    cy.visit('/' + 'ramble-pull-on-cargo-pant-4.html')
    cy.url().should('include', '/' + 'clothing/bottoms.html')
  })

  it('URL redirect for [61302]', () => {
    cy.visit('/' + 'mercer-sherpa-jacket.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [61303]', () => {
    cy.visit('/' + 'catall-sherpa-jacket.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [61577]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11717-den-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61578]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11717-den-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61579]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11717-den-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61580]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11717-den-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61581]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11717-den-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61582]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11717-rai-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61583]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11717-rai-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61584]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11717-rai-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61585]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11717-rai-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61586]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11717-rai-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61587]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l11817-den-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61588]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l11817-den-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61589]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l11817-den-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61590]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l11817-den-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61591]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l11817-den-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61592]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l11817-rai-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61593]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l11817-rai-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61594]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l11817-rai-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61595]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l11817-rai-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61596]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l11817-rai-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [61846]', () => {
    cy.visit('/' + 'hinga-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [61847]', () => {
    cy.visit('/' + 'rectangle-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [61894]', () => {
    cy.visit('/' + 'ficher-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61906]', () => {
    cy.visit('/' + 'kimberly-maxi-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61914]', () => {
    cy.visit('/' + 'allegra-washed-leather-cross-body-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61915]', () => {
    cy.visit('/' + 'allegra-washed-leather-cross-body-bag-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61916]', () => {
    cy.visit('/' + 'ilaria-woven-washed-leather-cross-body-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61917]', () => {
    cy.visit('/' + 'ilaria-woven-washed-leather-cross-body-bag-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61918]', () => {
    cy.visit('/' + 'ilaria-woven-washed-leather-cross-body-bag-2.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61919]', () => {
    cy.visit('/' + 'giada-multi-pocket-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61920]', () => {
    cy.visit('/' + 'giada-multi-pocket-bag-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [61921]', () => {
    cy.visit('/' + 'goddess-coat.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [61922]', () => {
    cy.visit('/' + 'peiter-coat.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [61923]', () => {
    cy.visit('/' + 'budri-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61924]', () => {
    cy.visit('/' + 'budri-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [61952]', () => {
    cy.visit('/' + 'spring-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61953]', () => {
    cy.visit('/' + 'spring-blouse-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61954]', () => {
    cy.visit('/' + 'cenote-button-down-shirt-3.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61955]', () => {
    cy.visit('/' + 'ficher-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61956]', () => {
    cy.visit('/' + 'pacheco-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61957]', () => {
    cy.visit('/' + 'sindri-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61958]', () => {
    cy.visit('/' + 'karino-button-down-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61959]', () => {
    cy.visit('/' + 'angeline-pant-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61960]', () => {
    cy.visit('/' + 'harley-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61961]', () => {
    cy.visit('/' + 'harley-blouse-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61962]', () => {
    cy.visit('/' + 'sheesho-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61963]', () => {
    cy.visit('/' + 'sheesho-blouse-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61964]', () => {
    cy.visit('/' + 'sathya-top-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61967]', () => {
    cy.visit('/' + 'alice-bomber-jacket-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61968]', () => {
    cy.visit('/' + 'emilia-legging-plus-size.html')
    cy.url().should('include', '/' + 'clothing/bottoms/legging.html')
  })

  it('URL redirect for [61969]', () => {
    cy.visit('/' + 'emilia-legging-plus-size-1.html')
    cy.url().should('include', '/' + 'clothing/bottoms/legging.html')
  })

  it('URL redirect for [61972]', () => {
    cy.visit('/' + 'nindi-cold-shoulder-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61973]', () => {
    cy.visit('/' + 'nindi-cold-shoulder-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61974]', () => {
    cy.visit('/' + 'nindi-velvet-drape-top-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61977]', () => {
    cy.visit('/' + 'zoe-short-sleeve-draped-t-shirt-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61978]', () => {
    cy.visit('/' + 'zoe-zip-up-hoodie-plus-size.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [61979]', () => {
    cy.visit('/' + 'zoe-zip-up-hoodie-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [62064]', () => {
    cy.visit('/' + 'patule-button-down-shirt.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62065]', () => {
    cy.visit('/' + 'patule-button-down-shirt-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62066]', () => {
    cy.visit('/' + 'patule-button-down-shirt-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62067]', () => {
    cy.visit('/' + 'paisley-flair-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62068]', () => {
    cy.visit('/' + 'paisley-flair-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62069]', () => {
    cy.visit('/' + 'applique-allie-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62070]', () => {
    cy.visit('/' + 'applique-allie-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62071]', () => {
    cy.visit('/' + 'tumizoo-jacket.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62072]', () => {
    cy.visit('/' + 'tumizoo-jacket-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62073]', () => {
    cy.visit('/' + 'leaf-garden-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62074]', () => {
    cy.visit('/' + 'leaf-garden-tunic-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62075]', () => {
    cy.visit('/' + 'freyja-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62076]', () => {
    cy.visit('/' + 'freyja-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62077]', () => {
    cy.visit('/' + 'freyja-blouse-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62078]', () => {
    cy.visit('/' + 'gemstone-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62079]', () => {
    cy.visit('/' + 'gemstone-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62080]', () => {
    cy.visit('/' + 'tanyah-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62081]', () => {
    cy.visit('/' + 'tanyah-dress-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62082]', () => {
    cy.visit('/' + 'skye-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62083]', () => {
    cy.visit('/' + 'killani-cropped-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62084]', () => {
    cy.visit('/' + 'killani-cropped-top-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62085]', () => {
    cy.visit('/' + 'ludios-tie-front-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62086]', () => {
    cy.visit('/' + 'ludios-tie-front-top-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62087]', () => {
    cy.visit('/' + 'kehlani-kimono.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62088]', () => {
    cy.visit('/' + 'mardi-oversized-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62089]', () => {
    cy.visit('/' + 'luda-popover-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62090]', () => {
    cy.visit('/' + 'koben-journal-embroidered-kimono.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62091]', () => {
    cy.visit('/' + 'eevanah-patchwork-kimono.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62092]', () => {
    cy.visit('/' + 'plate-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62093]', () => {
    cy.visit('/' + 'spezia-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62094]', () => {
    cy.visit('/' + 'mocity-button-down.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62095]', () => {
    cy.visit('/' + 'mocity-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62096]', () => {
    cy.visit('/' + 'plate-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62097]', () => {
    cy.visit('/' + 'anjali-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62098]', () => {
    cy.visit('/' + 'spezia-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62099]', () => {
    cy.visit('/' + 'evangelina-velvet-blouse.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [62100]', () => {
    cy.visit('/' + 'beaded-color-gables-poncho-top.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [62101]', () => {
    cy.visit('/' + 'nina-duster-with-embroidery.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [62102]', () => {
    cy.visit('/' + 'fall-moon-deep-v-blouse.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [62103]', () => {
    cy.visit('/' + 'fall-moon-tiered-dress.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [62104]', () => {
    cy.visit('/' + 'fall-moon-embroidery-top.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [62105]', () => {
    cy.visit('/' + 'fall-moon-embroidery-top-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [62107]', () => {
    cy.visit('/' + 'victorian-glass-lace-up-dress.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [62108]', () => {
    cy.visit('/' + 'embroidered-zipper-jogger.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [62109]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-9.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [62110]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-10.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [62111]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-13.html')
    cy.url().should('include', '/' + 'dresses/clothing/dresses/slips.html')
  })

  it('URL redirect for [62112]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-14.html')
    cy.url().should('include', '/' + 'dresses/clothing/dresses/slips.html')
  })

  it('URL redirect for [62113]', () => {
    cy.visit('/' + 'saskia-flutter-sleeve-velvet.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [62114]', () => {
    cy.visit('/' + 'saskia-flutter-sleeve-velvet-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [62115]', () => {
    cy.visit('/' + 'chrys-velvet-bomber-jacket.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62116]', () => {
    cy.visit('/' + 'chrys-velvet-bomber-jacket-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62117]', () => {
    cy.visit('/' + 'waleska-legging.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [62118]', () => {
    cy.visit('/' + 'waleska-legging-1.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [62119]', () => {
    cy.visit('/' + 'waleska-legging-2.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [62120]', () => {
    cy.visit('/' + 'chrys-long-sleeve-neck-thermal.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [62121]', () => {
    cy.visit('/' + 'chrys-long-sleeve-neck-thermal-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [62122]', () => {
    cy.visit('/' + 'issoria-velvet-v-neck-t-shirt.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [62123]', () => {
    cy.visit('/' + 'issoria-velvet-v-neck-t-shirt-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [62124]', () => {
    cy.visit('/' + 'waleska-velvet-draped-cardigan.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62125]', () => {
    cy.visit('/' + 'waleska-velvet-draped-cardigan-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62126]', () => {
    cy.visit('/' + 'chrys-velvet-tote-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62127]', () => {
    cy.visit('/' + 'chrys-velvet-tote-bag-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62128]', () => {
    cy.visit('/' + 'issoria-tote-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62129]', () => {
    cy.visit('/' + 'issoria-tote-bag-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62130]', () => {
    cy.visit('/' + 'waleska-woven-panel-dress.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [62131]', () => {
    cy.visit('/' + 'harleth-long-sleeve-basic-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [62132]', () => {
    cy.visit('/' + 'harleth-long-sleeve-basic-shirt-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [62133]', () => {
    cy.visit('/' + 'harleth-off-the-shoulder-top.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [62134]', () => {
    cy.visit('/' + 'bonnie-painters-smock-shirt.html')
    cy.url().should('include', '/' + 'clothing/tops/shirts.html')
  })

  it('URL redirect for [62135]', () => {
    cy.visit('/' + 'bonnie-drawstring-military-jacket.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [62136]', () => {
    cy.visit('/' + 'bonnie-drawstring-military-jacket-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [62137]', () => {
    cy.visit('/' + 'bonnie-short-kaftan.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [62140]', () => {
    cy.visit('/' + 'oohla-silk-blouse.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [62141]', () => {
    cy.visit('/' + 'ostah-challis-tunic.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [62142]', () => {
    cy.visit('/' + 'lodeau-challis-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [62143]', () => {
    cy.visit('/' + 'tro-patchwork-hoodie.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [62144]', () => {
    cy.visit('/' + 'enna-long-hoodie.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [62145]', () => {
    cy.visit('/' + 'enna-long-hoodie-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [62146]', () => {
    cy.visit('/' + 'esau-silk-blouse.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [62147]', () => {
    cy.visit('/' + 'malla-chiffon-blouse-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [62148]', () => {
    cy.visit('/' + 'bora-silk-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62149]', () => {
    cy.visit('/' + 'junip-mesh-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62150]', () => {
    cy.visit('/' + 'behmet-printed-suede-coat.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [62151]', () => {
    cy.visit('/' + 'chevis-velvet-top.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [62152]', () => {
    cy.visit('/' + 'bersin-velvet-hoodie.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [62154]', () => {
    cy.visit('/' + 'javo-fleece-tunic.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [62155]', () => {
    cy.visit('/' + 'cupra-long-cargo-skirt-7.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [62156]', () => {
    cy.visit('/' + 'cupra-long-cargo-skirt-8.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [62157]', () => {
    cy.visit('/' + 'catall-sherpa-jacket-1.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [62158]', () => {
    cy.visit('/' + 'marika-cargo-pant-9.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [62378]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11917-ecr-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62379]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11917-ecr-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62380]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11917-ecr-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62381]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11917-ecr-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62382]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11917-ecr-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62383]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11917-blk-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62384]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11917-blk-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62385]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11917-blk-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62386]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11917-blk-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62387]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l11917-blk-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62388]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12017-ecr-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62389]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12017-ecr-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62390]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12017-ecr-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62391]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12017-ecr-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62392]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12017-ecr-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62393]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12017-blk-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62394]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12017-blk-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62395]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12017-blk-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62396]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12017-blk-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62397]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12017-blk-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62616]', () => {
    cy.visit('/' + 'onule-pant.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [62617]', () => {
    cy.visit('/' + 'byzantine-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62618]', () => {
    cy.visit('/' + 'serpentine-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62619]', () => {
    cy.visit('/' + 'carnivale-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62621]', () => {
    cy.visit('/' + 'watermelon-tourmaline-ring-with-diamonds.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62622]', () => {
    cy.visit('/' + 'watermelon-tourmaline-pendant.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62623]', () => {
    cy.visit('/' + 'watermelon-tourmaline-ring.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62624]', () => {
    cy.visit('/' + 'watermelon-tourmaline-pendant-with-diamonds.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62625]', () => {
    cy.visit('/' + 'juniper-berry-6c72a5431db8056f756ad01075d41764.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62626]', () => {
    cy.visit('/' + 'white-sage-leaves-4ba5b10f64eba0d19146f888c671421d.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62627]', () => {
    cy.visit('/' + 'redwood-leaves-5df32c5be409d20414596b43f46243e5.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62628]', () => {
    cy.visit('/' + 'pink-peppercorn-9a8307e6ea10cebfd3607d1371585ba8.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62629]', () => {
    cy.visit('/' + 'austin-denim-weekend-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62630]', () => {
    cy.visit('/' + 'festival-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62635]', () => {
    cy.visit('/' + 'watermelon-tourmaline-ring-with-diamonds-lh7003-14kgld-6.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [62636]', () => {
    cy.visit('/' + 'watermelon-tourmaline-pendant-lh7001-14kgld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [62637]', () => {
    cy.visit('/' + 'watermelon-tourmaline-ring-lh7004-14kgld-6.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [62638]', () => {
    cy.visit('/' + 'watermelon-tourmaline-pendant-with-diamonds-lh7002-14kgld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [62639]', () => {
    cy.visit('/' + 'juniper-berry-ow1001-mti-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62640]', () => {
    cy.visit('/' + 'white-sage-leaves-ow1002-mti-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62641]', () => {
    cy.visit('/' + 'redwood-leaves-ow1003-mti-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62642]', () => {
    cy.visit('/' + 'pink-peppercorn-ow1004-mti-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62644]', () => {
    cy.visit('/' + 'festival-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [62688]', () => {
    cy.visit('/' + 'catarina-woven-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62691]', () => {
    cy.visit('/' + 'marta-tote-bag-m00117-gry-os.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62692]', () => {
    cy.visit('/' + 'watermelon-tourmaline-ring-with-diamonds-lh7005-gld.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [62694]', () => {
    cy.visit('/' + 'mini-melody-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62695]', () => {
    cy.visit('/' + 'mini-melody-scarf-r91317-mti-os-1.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [62696]', () => {
    cy.visit('/' + 'mini-horizon-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62703]', () => {
    cy.visit('/' + 'velvet-mix-boho-henley-dress-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [62704]', () => {
    cy.visit('/' + 'quincy-velvet-blouse.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [62705]', () => {
    cy.visit('/' + 'watermelon-tourmaline-ring-with-diamond.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [62711]', () => {
    cy.visit('/' + 'cassie-pants-with-embroidery.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [62717]', () => {
    cy.visit('/' + 'leopard-bomber-jacket-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [62719]', () => {
    cy.visit('/' + 'oohla-silk-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62721]', () => {
    cy.visit('/' + 'watermelon-tourmaline-ring-with-diamonds-1.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [62722]', () => {
    cy.visit('/' + 'watermelon-tourmaline-ring-with-diamonds-2.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [62723]', () => {
    cy.visit('/' + 'vinny-loafer.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62724]', () => {
    cy.visit('/' + 'vinny-butterfly-loafer.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62725]', () => {
    cy.visit('/' + 'vinny-butterfly-loafer-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62726]', () => {
    cy.visit('/' + 'keya-combo-sneaker.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62727]', () => {
    cy.visit('/' + 'retro-metallic-bootie.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62728]', () => {
    cy.visit('/' + 'retro-peacock-bootie.html')
    cy.url().should('include', '/' + 'accessories/shoes.html')
  })

  it('URL redirect for [62765]', () => {
    cy.visit('/' + 'vicney-vest-black.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62766]', () => {
    cy.visit('/' + 'vicney-vest-white.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62767]', () => {
    cy.visit('/' + 'vicney-vest-chocoalte-currant.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62768]', () => {
    cy.visit('/' + 'vicney-vest-lagoon-blue.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62769]', () => {
    cy.visit('/' + 'eckley-long-hoodie-black.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62770]', () => {
    cy.visit('/' + 'eckley-long-hoodie-white.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62771]', () => {
    cy.visit('/' + 'eckley-long-hoodie-chocolate-currant.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62773]', () => {
    cy.visit('/' + 'lorenna-short-hoodie-black.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62774]', () => {
    cy.visit('/' + 'lorenna-short-hoodie-white.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62775]', () => {
    cy.visit('/' + 'lorenna-short-hoodie-chocolate-currant.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [62776]', () => {
    cy.visit('/' + 'lorenna-short-hoodie-lagoon-blue.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62777]', () => {
    cy.visit('/' + 'laustef-shirt.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62778]', () => {
    cy.visit('/' + 'laustef-shirt-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62779]', () => {
    cy.visit('/' + 'laustef-shirt-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62780]', () => {
    cy.visit('/' + 'laustef-shirt-3.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62781]', () => {
    cy.visit('/' + 'nelsona-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62782]', () => {
    cy.visit('/' + 'nelsona-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62783]', () => {
    cy.visit('/' + 'nelsona-tunic-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62784]', () => {
    cy.visit('/' + 'nelsona-tunic-3.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62785]', () => {
    cy.visit('/' + 'wiklend-legging.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62786]', () => {
    cy.visit('/' + 'wiklend-legging-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62787]', () => {
    cy.visit('/' + 'wiklend-legging-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62788]', () => {
    cy.visit('/' + 'wiklend-legging-3.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62789]', () => {
    cy.visit('/' + 'monami-pant.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62790]', () => {
    cy.visit('/' + 'rose-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62791]', () => {
    cy.visit('/' + 'zalfur-wrap.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [62792]', () => {
    cy.visit('/' + 'patchwork-kaftan-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [62793]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-11.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [62794]', () => {
    cy.visit('/' + 'arroyo-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62795]', () => {
    cy.visit('/' + 'verdino-cozy-blanket.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [62796]', () => {
    cy.visit('/' + 'tile-cozy-blanket.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [62936]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l13698-cadbl-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62937]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l13698-cadbl-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62938]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l13698-cadbl-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62939]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l13698-cadbl-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62940]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l13698-cadbl-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62948]', () => {
    cy.visit('/' + 'kehlani-kimono-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62949]', () => {
    cy.visit('/' + 'tanyah-dress-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62950]', () => {
    cy.visit('/' + 'tanyah-dress-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62951]', () => {
    cy.visit('/' + 'ludios-tie-front-top-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62952]', () => {
    cy.visit('/' + 'gemstone-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62953]', () => {
    cy.visit('/' + 'gemstone-blouse-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62954]', () => {
    cy.visit('/' + 'luda-popover-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62955]', () => {
    cy.visit('/' + 'applique-allie-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62956]', () => {
    cy.visit('/' + 'applique-allie-blouse-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62957]', () => {
    cy.visit('/' + 'leafy-tier-popover-tunic-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62958]', () => {
    cy.visit('/' + 'freya-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62959]', () => {
    cy.visit('/' + 'tumi-boxy-top-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62960]', () => {
    cy.visit('/' + 'spezia-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62961]', () => {
    cy.visit('/' + 'ludios-tie-front-top-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62962]', () => {
    cy.visit('/' + 'leaf-garden-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62963]', () => {
    cy.visit('/' + 'ludio-popover-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62964]', () => {
    cy.visit('/' + 'paisley-flair-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62965]', () => {
    cy.visit('/' + 'mocity-button-down-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62966]', () => {
    cy.visit('/' + 'patule-button-down-shirt-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62967]', () => {
    cy.visit('/' + 'journey-v-neck-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62968]', () => {
    cy.visit('/' + 'skye-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62969]', () => {
    cy.visit('/' + 'mardi-oversized-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62970]', () => {
    cy.visit('/' + 'koben-journal-embroidered-kimono-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62971]', () => {
    cy.visit('/' + 'issoria-velvet-v-neck-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62973]', () => {
    cy.visit('/' + 'waleska-velvet-draped-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62974]', () => {
    cy.visit('/' + 'saskia-flutter-velvet-top-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62975]', () => {
    cy.visit('/' + 'saskia-flutter-velvet-top-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62976]', () => {
    cy.visit('/' + 'issoria-blanket-poncho-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62977]', () => {
    cy.visit('/' + 'issoria-blanket-poncho-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62978]', () => {
    cy.visit('/' + 'issoria-popver-sweatshirt-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62979]', () => {
    cy.visit('/' + 'issoria-popver-sweatshirt-plus-size-1.html')
    cy.url().should('include', '/' + 'clothing/tops/shirts.html')
  })

  it('URL redirect for [62980]', () => {
    cy.visit('/' + 'waleska-woven-panel-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62981]', () => {
    cy.visit('/' + 'saskia-draped-cardigan-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62982]', () => {
    cy.visit('/' + 'waleska-legging-plus-size.html')
    cy.url().should('include', '/' + 'clothing/bottoms/legging.html')
  })

  it('URL redirect for [62983]', () => {
    cy.visit('/' + 'waleska-legging-plus-size-1.html')
    cy.url().should('include', '/' + 'clothing/bottoms/legging.html')
  })

  it('URL redirect for [62984]', () => {
    cy.visit('/' + 'harleth-off-the-shoulder-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62985]', () => {
    cy.visit('/' + 'harleth-off-the-shoulder-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [62986]', () => {
    cy.visit('/' + 'bonnie-short-kaftan-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [62987]', () => {
    cy.visit('/' + 'bonnie-painters-smock-shirt-plus-size.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63015]', () => {
    cy.visit('/' + 'leafy-tier-popover-tunic-c2107x-port-1x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63016]', () => {
    cy.visit('/' + 'leafy-tier-popover-tunic-c2107x-port-2x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63017]', () => {
    cy.visit('/' + 'leafy-tier-popover-tunic-c2107x-port-3x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63075]', () => {
    cy.visit('/' + 'issoria-blanket-poncho-j40617x-nap-1x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63076]', () => {
    cy.visit('/' + 'issoria-blanket-poncho-j40617x-nap-2x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63077]', () => {
    cy.visit('/' + 'issoria-blanket-poncho-j40617x-nap-3x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63102]', () => {
    cy.visit('/' + 'boonie-short-kaftan-w21217x-pla-1x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63103]', () => {
    cy.visit('/' + 'boonie-short-kaftan-w21217x-pla-2x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63104]', () => {
    cy.visit('/' + 'boonie-short-kaftan-w21217x-pla-3x.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63111]', () => {
    cy.visit('/' + 'jossimar-flowy-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63112]', () => {
    cy.visit('/' + 'jossimar-flowy-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63113]', () => {
    cy.visit('/' + 'jossimar-flowy-tunic-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63114]', () => {
    cy.visit('/' + 'jossy-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63115]', () => {
    cy.visit('/' + 'jossy-top-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63116]', () => {
    cy.visit('/' + 'coco-jacket.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63117]', () => {
    cy.visit('/' + 'coco-jacket-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63118]', () => {
    cy.visit('/' + 'wynee-scalloped-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63119]', () => {
    cy.visit('/' + 'wynee-scalloped-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63120]', () => {
    cy.visit('/' + 'wynee-scalloped-tunic-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63121]', () => {
    cy.visit('/' + 'flower-patch-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63122]', () => {
    cy.visit('/' + 'flower-patch-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63123]', () => {
    cy.visit('/' + 'josselyn-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63124]', () => {
    cy.visit('/' + 'whitley-scalloped-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63125]', () => {
    cy.visit('/' + 'butterfly-winter-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63126]', () => {
    cy.visit('/' + 'butterfly-winter-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63127]', () => {
    cy.visit('/' + 'butterfly-winter-blouse-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63128]', () => {
    cy.visit('/' + 'zivelly-tunic.html')
    cy.url().should('include', '/' + 'clothing/tops.html')
  })

  it('URL redirect for [63129]', () => {
    cy.visit('/' + 'zivelly-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63130]', () => {
    cy.visit('/' + 'ollie-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63131]', () => {
    cy.visit('/' + 'ollie-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63132]', () => {
    cy.visit('/' + 'ollie-blouse-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63133]', () => {
    cy.visit('/' + 'clarissa-button-down.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63134]', () => {
    cy.visit('/' + 'briyah-pant.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63135]', () => {
    cy.visit('/' + 'dragonia-kimono.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63136]', () => {
    cy.visit('/' + 'velvet-okinowa-kimono.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63137]', () => {
    cy.visit('/' + 'paolomo-button-down.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63138]', () => {
    cy.visit('/' + 'marv-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63139]', () => {
    cy.visit('/' + 'cavalan-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63140]', () => {
    cy.visit('/' + 'chavalley-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63141]', () => {
    cy.visit('/' + 'peppa-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63142]', () => {
    cy.visit('/' + 'tribute-long-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63144]', () => {
    cy.visit('/' + 'annabelle-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63145]', () => {
    cy.visit('/' + 'yuen-po-garden-reversible-jacket.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [63146]', () => {
    cy.visit('/' + 'windflower-long-coat.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [63147]', () => {
    cy.visit('/' + 'winderflower-velvet-tee.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [63148]', () => {
    cy.visit('/' + 'velvet-jumper-2.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63149]', () => {
    cy.visit('/' + 'velvet-jumper-3.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63150]', () => {
    cy.visit('/' + 'twill-pants-with-embroidery-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [63151]', () => {
    cy.visit('/' + 'yuen-po-garden-lacey-cami.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [63152]', () => {
    cy.visit('/' + 'windflower-long-easy-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63153]', () => {
    cy.visit('/' + 'windflower-long-easy-dress-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63154]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-12.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [63155]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63156]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-15.html')
    cy.url().should('include', '/' + 'dresses/clothing/dresses/slips.html')
  })

  it('URL redirect for [63157]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'dresses/clothing/dresses/slips.html')
  })

  it('URL redirect for [63158]', () => {
    cy.visit('/' + 'kyoto-gardens-cardigan.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [63159]', () => {
    cy.visit('/' + 'kyoto-gardens-jacket.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [63160]', () => {
    cy.visit('/' + 'rising-sun-tiered-dress.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [63161]', () => {
    cy.visit('/' + 'flores-draped-cardigan.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [63162]', () => {
    cy.visit('/' + 'flores-short-sleeve-sccop-neck-t-shirt.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [63163]', () => {
    cy.visit('/' + 'flores-short-sleeve-sccop-neck-t-shirt-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [63164]', () => {
    cy.visit('/' + 'flores-velvet-boho-henley-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63165]', () => {
    cy.visit('/' + 'roberta-velvet-smock-shirt.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [63166]', () => {
    cy.visit('/' + 'roberta-velvet-smock-shirt-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [63167]', () => {
    cy.visit('/' + 'roberta-velvet-coat.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [63168]', () => {
    cy.visit('/' + 'malui-zip-up-hoodie.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [63169]', () => {
    cy.visit('/' + 'malui-legging-2.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [63170]', () => {
    cy.visit('/' + 'malui-legging-3.html')
    cy.url().should('include', '/' + 'clothing/jwla.html')
  })

  it('URL redirect for [63171]', () => {
    cy.visit('/' + 'yucatan-embroidered-back-velvet.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [63172]', () => {
    cy.visit('/' + 'quilted-bomber.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [63173]', () => {
    cy.visit('/' + 'yucatan-everyday-coat.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [63174]', () => {
    cy.visit('/' + 'esmeralda-handkerchief-bolero-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [63175]', () => {
    cy.visit('/' + 'esmeralda-handkerchief-bolero-shirt-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [63176]', () => {
    cy.visit('/' + 'maui-velvet-embroidered-back-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [63177]', () => {
    cy.visit('/' + 'forrest-velvet-mix-shirt.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63178]', () => {
    cy.visit('/' + 'esmeralda-trapeze-tunic.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [63179]', () => {
    cy.visit('/' + 'forrest-bomber-jacket.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [63180]', () => {
    cy.visit('/' + 'velvet-mix-boho-blouse.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [63181]', () => {
    cy.visit('/' + 'maui-boho-blouse.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [63182]', () => {
    cy.visit('/' + 'antonia-suede-coat.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [63183]', () => {
    cy.visit('/' + 'esmeralda-suede-kaftan.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [63184]', () => {
    cy.visit('/' + 'velvet-mix-pleated-peasant-tunic.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [63185]', () => {
    cy.visit('/' + 'fieral-long-hoodie.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63186]', () => {
    cy.visit('/' + 'rubina-wrap.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63187]', () => {
    cy.visit('/' + 'rubina-wrap-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63188]', () => {
    cy.visit('/' + 'mauvis-long-hoodie.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63189]', () => {
    cy.visit('/' + 'effie-challis-blouse.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63190]', () => {
    cy.visit('/' + 'effie-challis-blouse-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63191]', () => {
    cy.visit('/' + 'nomeo-silk-blouse.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63192]', () => {
    cy.visit('/' + 'nomeo-silk-blouse-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63193]', () => {
    cy.visit('/' + 'tambit-challis-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63194]', () => {
    cy.visit('/' + 'yemasse-mesh-dress-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63195]', () => {
    cy.visit('/' + 'conoan-chiffon-blouse.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63196]', () => {
    cy.visit('/' + 'rae-silk-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [63197]', () => {
    cy.visit('/' + 'poplin-cargo-pant-6.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [63198]', () => {
    cy.visit('/' + 'marika-cargo-pant-10.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [63199]', () => {
    cy.visit('/' + 'saulo-velvet-hoodie.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [63200]', () => {
    cy.visit('/' + 'reylae-velvet-top.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [63203]', () => {
    cy.visit('/' + 'toruk-sherpa-coat.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [63204]', () => {
    cy.visit('/' + 'peppa-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63205]', () => {
    cy.visit('/' + 'arina-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63206]', () => {
    cy.visit('/' + 'maitri-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63207]', () => {
    cy.visit('/' + 'tribute-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63208]', () => {
    cy.visit('/' + 'annabelle-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63209]', () => {
    cy.visit('/' + 'yucatan-weekend-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63210]', () => {
    cy.visit('/' + 'yucatan-weekend-bag-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63211]', () => {
    cy.visit('/' + 'flores-velvet-tote.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63212]', () => {
    cy.visit('/' + 'flores-velvet-tote-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63213]', () => {
    cy.visit('/' + 'esmeralda-suede-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63214]', () => {
    cy.visit('/' + 'sonoma-scarf-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63215]', () => {
    cy.visit('/' + 'rose-lace-scarf-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63458]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l12117-dte-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63459]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l12117-dte-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63460]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l12117-dte-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63461]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l12117-dte-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63462]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l12117-dte-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63466]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-l12117-blk-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63468]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12217-dte-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63469]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12217-dte-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63472]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-l12217-dte-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63673]', () => {
    cy.visit('/' + 'sonoma-scarf.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [63674]', () => {
    cy.visit('/' + 'rose-lace-scarf-b90717-mti-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [63716]', () => {
    cy.visit('/' + 'calme-linen-poncho-d9b5c8ddb87957ba89ecd37a97a36861.html')
    cy.url().should('include', '/' + 'sustainable.html')
  })

  it('URL redirect for [63717]', () => {
    cy.visit('/' + 'calme-linen-poncho-1-56dcaca948db417028fad19fff2fcc72.html')
    cy.url().should('include', '/' + 'sustainable.html')
  })

  it('URL redirect for [63718]', () => {
    cy.visit('/' + 'calme-linen-poncho-2-6dd17918352598080f43efac4eca393e.html')
    cy.url().should('include', '/' + 'sustainable.html')
  })

  it('URL redirect for [63719]', () => {
    cy.visit('/' + 'calme-linen-cardigan-e122b4478f06e35a0c6cb83a75902c88.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63720]', () => {
    cy.visit('/' + 'calme-linen-cardigan-1-57ad67ef1830fe0b00678159a6d63ffd.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63721]', () => {
    cy.visit('/' + 'calme-linen-cardigan-2-4a35f50fdc92206dd3ab083d7930e2d3.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63722]', () => {
    cy.visit('/' + 'calme-peasant-blouse-b6efc07f871f06b3b267e22cd6f25244.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63723]', () => {
    cy.visit('/' + 'calme-peasant-blouse-1-a6a7934aee0973aecadc0df12d64551c.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63724]', () => {
    cy.visit('/' + 'calme-pocket-detail-dress-0313cf0a4f770e6ba4e4cd954e50dd7b.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63725]', () => {
    cy.visit('/' + 'calme-pocket-detail-dress-1-38b14801a0951a9e12f561da5f76cb4e.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63726]', () => {
    cy.visit('/' + 'calme-stitch-detail-tunic-37d9f03869a9d82c93636d858318f99f.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63727]', () => {
    cy.visit('/' + 'calme-stitch-detail-tunic-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63728]', () => {
    cy.visit('/' + 'calme-stitch-detail-tunic-2-a04df9cf03fcbbec33ff5c687b897120.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63729]', () => {
    cy.visit('/' + 'indigo-embroidered-skinny-jean.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63730]', () => {
    cy.visit('/' + 'christy-embroidered-skirt.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63731]', () => {
    cy.visit('/' + 'charmeuse-slip-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63732]', () => {
    cy.visit('/' + 'charmeuse-slip-dress-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63733]', () => {
    cy.visit('/' + 'charmeuse-slip-dress-2.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63735]', () => {
    cy.visit('/' + 'malbee-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63738]', () => {
    cy.visit('/' + 'carmenere-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63739]', () => {
    cy.visit('/' + 'cabernet-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63740]', () => {
    cy.visit('/' + 'sauvignon-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63741]', () => {
    cy.visit('/' + 'marsanne-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63742]', () => {
    cy.visit('/' + 'muscadelle-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63743]', () => {
    cy.visit('/' + 'rousanna-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63744]', () => {
    cy.visit('/' + 'dragen-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63813]', () => {
    cy.visit('/' + 'charmeuse-silk-dress-r30617-fwn-xs.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [63814]', () => {
    cy.visit('/' + 'charmeuse-silk-dress-r30617-fwn-s.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [63815]', () => {
    cy.visit('/' + 'charmeuse-silk-dress-r30617-fwn-m.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [63816]', () => {
    cy.visit('/' + 'charmeuse-silk-dress-r30617-fwn-l.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [63817]', () => {
    cy.visit('/' + 'charmeuse-silk-dress-r30617-fwn-xl.html')
    cy.url().should('include', '/' + 'new/when-in-pink.html')
  })

  it('URL redirect for [63878]', () => {
    cy.visit('/' + 'calme-knit-tank-89248c7bc03c22851eef3ba2d7ff3762.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63879]', () => {
    cy.visit('/' + 'calme-knit-tank-1-4acd59304797b6f39c8d36bddcb34910.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63880]', () => {
    cy.visit('/' + 'calme-knit-tank-2-d2db30508c83de1463a46d5bca032b6b.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63881]', () => {
    cy.visit('/' + 'calme-short-sleeve-simple-top-81ab600fd9d65f2bd8152c80efd92545.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63882]', () => {
    cy.visit('/' + 'calme-short-sleeve-simple-top-1-9721bc4ced5fa100b540cbb04365ed58.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63883]', () => {
    cy.visit('/' + 'calme-v-neck-top-1af1ce8887c4fe29aaae053624227328.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63884]', () => {
    cy.visit('/' + 'calme-long-sleeve-top-9d89f89079ba655108746ce39c891d02.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63885]', () => {
    cy.visit('/' + 'calme-long-sleeve-top-1-54053f36e8bf568a7a5698f53e646e0d.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63886]', () => {
    cy.visit('/' + 'calme-palm-spring-pant-c8aeeb15978100a5e3b23cd87e52b33f.html')
    cy.url().should('include', '/' + 'sustainable.html')
  })

  it('URL redirect for [63887]', () => {
    cy.visit('/' + 'calme-knit-skirt-a802daa723f0988327fa980d2efbd1a1.html')
    cy.url().should('include', '/' + 'sustainable.html')
  })

  it('URL redirect for [63948]', () => {
    cy.visit('/' + 'calme-cafe-sleeve-top-bc35b054140e59250d73cb92f353f13c.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63949]', () => {
    cy.visit('/' + 'calme-cafe-sleeve-top-1-8220ca9f970e7174c522c2fd1f512a60.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63951]', () => {
    cy.visit('/' + 'mourverde-necklace-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63953]', () => {
    cy.visit('/' + 'riesling-necklace-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63954]', () => {
    cy.visit('/' + 'marta-washed-leather-handbag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63955]', () => {
    cy.visit('/' + 'amara-cross-body-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63956]', () => {
    cy.visit('/' + 'amara-cross-body-bag-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63957]', () => {
    cy.visit('/' + 'amara-cross-body-bag-2.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63963]', () => {
    cy.visit('/' + 'nicce-handwoven-fringe-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63965]', () => {
    cy.visit('/' + 'calme-v-neck-top-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [63979]', () => {
    cy.visit('/' + 'necklace-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63981]', () => {
    cy.visit('/' + 'necklace-2.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63983]', () => {
    cy.visit('/' + 'necklace-3.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63985]', () => {
    cy.visit('/' + 'necklace-4.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63987]', () => {
    cy.visit('/' + 'necklace-5.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63988]', () => {
    cy.visit('/' + 'earrings-jwl8917-mti-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63989]', () => {
    cy.visit('/' + 'earrings.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63990]', () => {
    cy.visit('/' + 'earrings-jwl8917-gld-os.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [63991]', () => {
    cy.visit('/' + 'earring.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63993]', () => {
    cy.visit('/' + 'grenache-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63995]', () => {
    cy.visit('/' + 'semillon-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [63996]', () => {
    cy.visit('/' + 'velet-okinawa-kimono-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63997]', () => {
    cy.visit('/' + 'multi-print-cardigan-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [63998]', () => {
    cy.visit('/' + 'cavalana-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64002]', () => {
    cy.visit('/' + 'clarissa-button-down-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64003]', () => {
    cy.visit('/' + 'peppa-top-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64004]', () => {
    cy.visit('/' + 'ollie-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64005]', () => {
    cy.visit('/' + 'wynee-scalloped-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64007]', () => {
    cy.visit('/' + 'zivelly-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64009]', () => {
    cy.visit('/' + 'butterfly-winter-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64010]', () => {
    cy.visit('/' + 'rose-eyelet-top-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64011]', () => {
    cy.visit('/' + 'flower-patch-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64012]', () => {
    cy.visit('/' + 'malui-dropped-shoulder-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64013]', () => {
    cy.visit('/' + 'malui-dropped-shoulder-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64014]', () => {
    cy.visit('/' + 'malui-dropped-shoulder-plus-size.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64017]', () => {
    cy.visit('/' + 'roberta-velvet-coat-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64019]', () => {
    cy.visit('/' + 'roberta-velvet-smock-shirt-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64020]', () => {
    cy.visit('/' + 'roberta-velvet-smock-shirt-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64022]', () => {
    cy.visit('/' + 'flores-velvet-henley-dress-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64023]', () => {
    cy.visit('/' + 'malui-zip-up-hoodie-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64112]', () => {
    cy.visit('/' + 'ardeen-box-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64113]', () => {
    cy.visit('/' + 'peridot-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64114]', () => {
    cy.visit('/' + 'sidney-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64115]', () => {
    cy.visit('/' + 'verdell-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64116]', () => {
    cy.visit('/' + 'verdell-dress-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64118]', () => {
    cy.visit('/' + 'fayette-pant.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64119]', () => {
    cy.visit('/' + 'keely-kaftan.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64120]', () => {
    cy.visit('/' + 'patchwork-cozy-blanket.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [64152]', () => {
    cy.visit('/' + 'baja-drape-top-2.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64153]', () => {
    cy.visit('/' + 'rona-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64154]', () => {
    cy.visit('/' + 'rona-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64155]', () => {
    cy.visit('/' + 'rona-tunic-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64156]', () => {
    cy.visit('/' + 'christina-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64157]', () => {
    cy.visit('/' + 'christina-top-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64158]', () => {
    cy.visit('/' + 'cloudio-flare-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64159]', () => {
    cy.visit('/' + 'cloudio-flare-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64160]', () => {
    cy.visit('/' + 'zig-zag-popover.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64161]', () => {
    cy.visit('/' + 'zig-zag-popover-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64162]', () => {
    cy.visit('/' + 'christy-jacket.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64163]', () => {
    cy.visit('/' + 'christy-jacket-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64164]', () => {
    cy.visit('/' + 'ziggy-button-down-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64165]', () => {
    cy.visit('/' + 'ziggy-button-down-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64166]', () => {
    cy.visit('/' + 'kikimu-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64167]', () => {
    cy.visit('/' + 'kikimu-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64168]', () => {
    cy.visit('/' + 'kikimu-blouse-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64169]', () => {
    cy.visit('/' + 'brisa-button-down-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64170]', () => {
    cy.visit('/' + 'brisa-button-down-dress-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64171]', () => {
    cy.visit('/' + 'talin-tonal-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64172]', () => {
    cy.visit('/' + 'talin-tonal-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64173]', () => {
    cy.visit('/' + 'dolora-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64174]', () => {
    cy.visit('/' + 'dolora-blouse-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64175]', () => {
    cy.visit('/' + 'koben-canvas-embroidered-kimono.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64176]', () => {
    cy.visit('/' + 'nina-boxy-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64177]', () => {
    cy.visit('/' + 'cane-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64178]', () => {
    cy.visit('/' + 'cambria-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64179]', () => {
    cy.visit('/' + 'vella-kimono.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64180]', () => {
    cy.visit('/' + 'velveta-cowl-neck.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64181]', () => {
    cy.visit('/' + 'emorie-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64182]', () => {
    cy.visit('/' + 'emorie-dress-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64183]', () => {
    cy.visit('/' + 'multi-print-button-down.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64184]', () => {
    cy.visit('/' + 'besimo-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64185]', () => {
    cy.visit('/' + 'mabel-long-side-slit-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64186]', () => {
    cy.visit('/' + 'flores-long-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64187]', () => {
    cy.visit('/' + 'indianio-boxy-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64188]', () => {
    cy.visit('/' + 'mabel-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64189]', () => {
    cy.visit('/' + 'flores-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64190]', () => {
    cy.visit('/' + 'chloe-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64191]', () => {
    cy.visit('/' + 'besimo-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64192]', () => {
    cy.visit('/' + 'indianio-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64193]', () => {
    cy.visit('/' + 'velvet-duster-2.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64194]', () => {
    cy.visit('/' + 'paisley-blues-smocked-top.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64195]', () => {
    cy.visit('/' + 'paisley-blues-smocked-top-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64196]', () => {
    cy.visit('/' + 'velvet-cropped-pants.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64197]', () => {
    cy.visit('/' + 'praire-rose-tie-neck-dress.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64198]', () => {
    cy.visit('/' + 'paisley-blues-maxi-dress.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64199]', () => {
    cy.visit('/' + 'paisley-blues-maxi-dress-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64200]', () => {
    cy.visit('/' + 'boucle-with-gold-lurex-cardigan.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64201]', () => {
    cy.visit('/' + 'mixed-media-flared-cami-top.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64202]', () => {
    cy.visit('/' + 'mixed-media-tie-back-tunic.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64203]', () => {
    cy.visit('/' + 'andy-warhol-relaxed-top.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64204]', () => {
    cy.visit('/' + 'andy-warhol-pleated-pants.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64205]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [64206]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-15.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [64207]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [64208]', () => {
    cy.visit('/' + 'medium-sip-with-lace-trim-1.html')
    cy.url().should('include', '/' + 'dresses.html')
  })

  it('URL redirect for [64209]', () => {
    cy.visit('/' + 'velvet-drape-sweater.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64210]', () => {
    cy.visit('/' + 'merl-velveet-draped-cardigan.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64211]', () => {
    cy.visit('/' + 'meri-velvet-draped-cardigan-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64212]', () => {
    cy.visit('/' + 'matilda-velvet-t-shirt.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64213]', () => {
    cy.visit('/' + 'matilda-velvet-t-shirt-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64214]', () => {
    cy.visit('/' + 'merl-pull-on-hoodie.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64215]', () => {
    cy.visit('/' + 'merl-pull-on-hoodie-1.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64216]', () => {
    cy.visit('/' + 'camilla-3-4-scarf-back-tee.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64217]', () => {
    cy.visit('/' + 'aurelia-3-4-sleeve-relaxed-t-shirt.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64218]', () => {
    cy.visit('/' + 'parina-long-sleeve-boho-tee.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64219]', () => {
    cy.visit('/' + 'matilda-button-down-djellaba.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64220]', () => {
    cy.visit('/' + 'matilda-draped-cardigan-coat.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64221]', () => {
    cy.visit('/' + 'matilda-velvet-backpack.html')
    cy.url().should('include', '/' + 'accessories/handbags.html')
  })

  it('URL redirect for [64222]', () => {
    cy.visit('/' + 'matilda-velvet-backpack-1.html')
    cy.url().should('include', '/' + 'accessories/handbags.html')
  })

  it('URL redirect for [64223]', () => {
    cy.visit('/' + 'aurelia-velvet-backpack.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64224]', () => {
    cy.visit('/' + 'aurelia-velvet-backpack-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64225]', () => {
    cy.visit('/' + 'parina-long-velvet-dress.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [64226]', () => {
    cy.visit('/' + 'marchella-fitted-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [64227]', () => {
    cy.visit('/' + 'marchella-fitted-shirt-1.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [64228]', () => {
    cy.visit('/' + 'rialto-military-jacket.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [64229]', () => {
    cy.visit('/' + 'lennon-swing-shirt-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64231]', () => {
    cy.visit('/' + 'lennon-bomber-jacket.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [64232]', () => {
    cy.visit('/' + 'marchella-shirt-kurta.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [64233]', () => {
    cy.visit('/' + 'delaney-button-back-shirt.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [64234]', () => {
    cy.visit('/' + 'delaney-peasant-top.html')
    cy.url().should('include', '/' + 'sale/3j-workshop.html')
  })

  it('URL redirect for [64235]', () => {
    cy.visit('/' + 'rialto-weekend-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64236]', () => {
    cy.visit('/' + 'whels-long-hoodie.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64237]', () => {
    cy.visit('/' + 'whels-long-hoodie-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64238]', () => {
    cy.visit('/' + 'cavan-long-hoodie.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [64239]', () => {
    cy.visit('/' + 'wyckfield-long-hoodie.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64240]', () => {
    cy.visit('/' + 'wyckfield-long-hoodie-1.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [64242]', () => {
    cy.visit('/' + 'allyna-cotton-blouse-1.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [64243]', () => {
    cy.visit('/' + 'ollie-cupra-blouse.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [64244]', () => {
    cy.visit('/' + 'eluthro-challis-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [64245]', () => {
    cy.visit('/' + 'sybil-chiffon-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [64246]', () => {
    cy.visit('/' + 'portea-silk-dress.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [64247]', () => {
    cy.visit('/' + 'tormay-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64248]', () => {
    cy.visit('/' + 'miena-sherpa-jacket.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [64249]', () => {
    cy.visit('/' + 'genoah-poplin-blouse.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [64250]', () => {
    cy.visit('/' + 'ashton-velvet-jacket.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [64251]', () => {
    cy.visit('/' + 'dorant-velvet-top.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [64252]', () => {
    cy.visit('/' + 'soling-short-hoodie.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [64253]', () => {
    cy.visit('/' + 'mercer-sherpa-jacket-1.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [64254]', () => {
    cy.visit('/' + 'catall-sherpa-jacket-2.html')
    cy.url().should('include', '/' + 'sale/pete-and-greta.html')
  })

  it('URL redirect for [64255]', () => {
    cy.visit('/' + 'poplin-cargo-pant-7.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [64256]', () => {
    cy.visit('/' + 'poplin-cargo-pant-8.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [64257]', () => {
    cy.visit('/' + 'peasant-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64258]', () => {
    cy.visit('/' + 'peasant-tunic-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64259]', () => {
    cy.visit('/' + 'embroidered-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64260]', () => {
    cy.visit('/' + 'embroidered-top-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64261]', () => {
    cy.visit('/' + 'hoodie.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64262]', () => {
    cy.visit('/' + 'hoodie-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64263]', () => {
    cy.visit('/' + 'tosca-italian-leather-tote.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64264]', () => {
    cy.visit('/' + 'tosca-italian-leather-tote-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64265]', () => {
    cy.visit('/' + 'bria-italian-leather-crossbody-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64266]', () => {
    cy.visit('/' + 'bria-italian-leather-crossbody-bag-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64267]', () => {
    cy.visit('/' + 'vivia-studded-crossbody-bag.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64268]', () => {
    cy.visit('/' + 'vivia-studded-crossbody-bag-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64269]', () => {
    cy.visit('/' + 'carina-studded-italian-hobo-bag.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64270]', () => {
    cy.visit('/' + 'austin-denim-pillow.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64271]', () => {
    cy.visit('/' + 'snake-bangle-with-wrapped-tail.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64272]', () => {
    cy.visit('/' + 'snake-bangle-with-wrapped-tail.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64273]', () => {
    cy.visit('/' + 'snake-hoops-with-star-set-diamond.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64274]', () => {
    cy.visit('/' + 'snake-hoops-with-star-set-diamond-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64275]', () => {
    cy.visit('/' + 'snake-ring-with-star-set-diamond.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64276]', () => {
    cy.visit('/' + 'mini-butterfly-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64277]', () => {
    cy.visit('/' + 'mini-butterfly-necklace-1.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64278]', () => {
    cy.visit('/' + 'butterfly-necklace-md.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64279]', () => {
    cy.visit('/' + 'butterfly-necklace-md-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64280]', () => {
    cy.visit('/' + 'butterfly-studs-sm.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64281]', () => {
    cy.visit('/' + 'butterfly-studs-sm-1.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64282]', () => {
    cy.visit('/' + 'butterfly-necklace-lg-with-garnet.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64283]', () => {
    cy.visit('/' + 'bee-studs.html')
    cy.url().should('include', '/' + 'accessories/jewelry/earrings.html')
  })

  it('URL redirect for [64284]', () => {
    cy.visit('/' + 'bee-studs-1.html')
    cy.url().should('include', '/' + 'accessories/jewelry/earrings.html')
  })

  it('URL redirect for [64285]', () => {
    cy.visit('/' + 'dragon-fly-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64286]', () => {
    cy.visit('/' + 'dragon-fly-earring.html')
    cy.url().should('include', '/' + 'accessories/jewelry/earrings.html')
  })

  it('URL redirect for [64287]', () => {
    cy.visit('/' + 'diamond-cut-lariat-with-cz.html')
    cy.url().should('include', '/' + 'accessories/jewelry.html')
  })

  it('URL redirect for [64288]', () => {
    cy.visit('/' + 'turq-larimar-trio-hoop.html')
    cy.url().should('include', '/' + 'accessories/jewelry.html')
  })

  it('URL redirect for [64289]', () => {
    cy.visit('/' + 'silverite-trio-hoop.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64290]', () => {
    cy.visit('/' + 'morganite-trio-hoop.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64291]', () => {
    cy.visit('/' + 'grey-moonstone-trio-hoop.html')
    cy.url().should('include', '/' + 'accessories/jewelry.html')
  })

  it('URL redirect for [64292]', () => {
    cy.visit('/' + 'labradorite-trio-hoop.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64293]', () => {
    cy.visit('/' + 'dip-dye-ruana.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [64294]', () => {
    cy.visit('/' + 'dip-dye-cardigan.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [64508]', () => {
    cy.visit('/' + 'besimo-scarf-9-c90417-9-mti-os.html')
    cy.url().should('include', '/' + 'accessories/scarves/silk-scarves.html')
  })

  it('URL redirect for [64571]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-9-l12317-9-blk-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64575]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-9-l12317-9-ecr-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64577]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-9-l12317-9-ecr-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64578]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-9-l12317-9-ecr-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64579]', () => {
    cy.visit('/' + 'short-slip-with-lace-trim-9-l12317-9-ecr-xl.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64585]', () => {
    cy.visit('/' + 'medium-slip-with-lace-trim-9-l12417-9-ecr-xs.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64818]', () => {
    cy.visit('/' + 'embroidered-top-9-m20117-dustr-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64819]', () => {
    cy.visit('/' + 'embroidered-top-9-m20117-dustr-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64820]', () => {
    cy.visit('/' + 'embroidered-top-9-m20117-dustr-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64821]', () => {
    cy.visit('/' + 'embroidered-top-9-m20117-blusl-s.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64822]', () => {
    cy.visit('/' + 'embroidered-top-9-m20117-blusl-m.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64823]', () => {
    cy.visit('/' + 'embroidered-top-9-m20117-blusl-l.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [64846]', () => {
    cy.visit('/' + 'mini-butterfly-necklace-mini-butterfly-necklace-9-lh0086-9-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64847]', () => {
    cy.visit('/' + 'mini-butterfly-necklace-mini-butterfly-necklace-9-lh0087-9-sil-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64850]', () => {
    cy.visit('/' + 'butterfly-studs-sm-1-1.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64852]', () => {
    cy.visit('/' + 'butterfly-necklace-lg-with-garnet-9-lh0092-9-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64853]', () => {
    cy.visit('/' + 'bee-studs-9-lh0093-9-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64854]', () => {
    cy.visit('/' + 'bee-studs-9-lh0094-9-sil-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64855]', () => {
    cy.visit('/' + 'dragon-fly-necklace-9-lh0095-9-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64856]', () => {
    cy.visit('/' + 'dragon-fly-earring-9-lh0096-9-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64857]', () => {
    cy.visit('/' + 'diamond-cut-lariat-with-cz-9-lh0097-9-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64858]', () => {
    cy.visit('/' + 'turq-larimar-trio-hoop-9-lh0098-9-mti-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64860]', () => {
    cy.visit('/' + 'morganite-trio-hoop-9-lh0102-9-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64861]', () => {
    cy.visit('/' + 'grey-moonstone-trio-hoop-9-lh0103-9-sil-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64875]', () => {
    cy.visit('/' + 'carmelita-embroidered-cape.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [64876]', () => {
    cy.visit('/' + 'carmelita-embroidered-cape-1.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [64877]', () => {
    cy.visit('/' + 'embroidered-border-drape-cardigan.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [64878]', () => {
    cy.visit('/' + 'embroidered-border-drape-cardigan-1.html')
    cy.url().should('include', '/' + 'clothing/clothing-jackets.html')
  })

  it('URL redirect for [64879]', () => {
    cy.visit('/' + 'vinny-morraco-loafer.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64880]', () => {
    cy.visit('/' + 'sammi-western-boot.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64881]', () => {
    cy.visit('/' + 'canon-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64882]', () => {
    cy.visit('/' + 'callado-choker.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64883]', () => {
    cy.visit('/' + 'altaridfe-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64884]', () => {
    cy.visit('/' + 'encina-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64925]', () => {
    cy.visit('/' + 'turquoise-trio-hoop-earrings-lh0099-9-gld-os.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64926]', () => {
    cy.visit('/' + 'turquoise-tri-hoop-earrings.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64928]', () => {
    cy.visit('/' + 'turquoise-tri-hoop-earrings-1.html')
    cy.url().should('include', '/' + 'accessories/jewelry/logan-x-johnny-was.html')
  })

  it('URL redirect for [64936]', () => {
    cy.visit('/' + 'ramble-pull-on-cargo-2.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [64938]', () => {
    cy.visit('/' + 'verdot-necklace.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64939]', () => {
    cy.visit('/' + 'leroile-pant-2.html')
    cy.url().should('include', '/' + 'clothing/pete-and-greta.html')
  })

  it('URL redirect for [64940]', () => {
    cy.visit('/' + 'leroile-pant-3.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [64958]', () => {
    cy.visit('/' + 'talia-soap.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [64960]', () => {
    cy.visit('/' + 'kikimu-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64962]', () => {
    cy.visit('/' + 'mabel-long-side-slit-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64963]', () => {
    cy.visit('/' + 'vella-kimono-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64964]', () => {
    cy.visit('/' + 'besimo-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64967]', () => {
    cy.visit('/' + 'christina-top-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64968]', () => {
    cy.visit('/' + 'kiben-canvas-embroidered-kimono-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64969]', () => {
    cy.visit('/' + 'zig-zag-popover-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64970]', () => {
    cy.visit('/' + 'cane-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64971]', () => {
    cy.visit('/' + 'rona-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64972]', () => {
    cy.visit('/' + 'ziggy-button-down-tunic-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64973]', () => {
    cy.visit('/' + 'dolara-blouse-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64974]', () => {
    cy.visit('/' + 'brisa-button-down-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64979]', () => {
    cy.visit('/' + 'meri-velvet-draped-cardigan-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64980]', () => {
    cy.visit('/' + 'meri-pull-on-hoodie-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64981]', () => {
    cy.visit('/' + 'meri-pull-on-hoodie-plus-size-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64982]', () => {
    cy.visit('/' + 'leopard-bomber-jacket-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [64983]', () => {
    cy.visit('/' + 'velvet-mix-boho-henley-dress-plus-size.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65056]', () => {
    cy.visit('/' + 'allyna-cotton-blouse-2.html')
    cy.url().should('include', '/' + 'sale/biya.html')
  })

  it('URL redirect for [65058]', () => {
    cy.visit('/' + 'dido-pillow.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [65060]', () => {
    cy.visit('/' + 'dido-pillow-1.html')
    cy.url().should('include', '/' + 'accessories/home.html')
  })

  it('URL redirect for [65063]', () => {
    cy.visit('/' + 'monrow-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65064]', () => {
    cy.visit('/' + 'monrow-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65065]', () => {
    cy.visit('/' + 'monrow-tunic-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65066]', () => {
    cy.visit('/' + 'blossom-blouse-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65067]', () => {
    cy.visit('/' + 'blossom-blouse-3.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65068]', () => {
    cy.visit('/' + 'montak-top.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65069]', () => {
    cy.visit('/' + 'montak-top-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65070]', () => {
    cy.visit('/' + 'motley-kimono.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65071]', () => {
    cy.visit('/' + 'motley-kimono-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65072]', () => {
    cy.visit('/' + 'rainbow-shrug.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65073]', () => {
    cy.visit('/' + 'rainbow-shrug-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65074]', () => {
    cy.visit('/' + 'meco-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [65075]', () => {
    cy.visit('/' + 'meco-tunic-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [65076]', () => {
    cy.visit('/' + 'rainbow-blouson.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65077]', () => {
    cy.visit('/' + 'rainbow-blouson-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65078]', () => {
    cy.visit('/' + 'meco-mandarin.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65079]', () => {
    cy.visit('/' + 'julian-blazer.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65080]', () => {
    cy.visit('/' + 'cardinal-waist-tie-pant.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65081]', () => {
    cy.visit('/' + 'rainbow-fly-embroidered-dress.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65082]', () => {
    cy.visit('/' + 'roma-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65083]', () => {
    cy.visit('/' + 'roma-tunic-1.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65085]', () => {
    cy.visit('/' + 'araxi-tunic.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [65086]', () => {
    cy.visit('/' + 'araxi-tunic-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [65087]', () => {
    cy.visit('/' + 'araxi-tunic-2.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65088]', () => {
    cy.visit('/' + 'kayo-kimono.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [65089]', () => {
    cy.visit('/' + 'kayo-kimono-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [65090]', () => {
    cy.visit('/' + 'brazillia-tunic.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65091]', () => {
    cy.visit('/' + 'wishing-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65092]', () => {
    cy.visit('/' + 'aura-peasant-blouse.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65093]', () => {
    cy.visit('/' + 'voloom-button-down.html')
    cy.url().should('include', '/' + 'sale/johnny-was.html')
  })

  it('URL redirect for [65094]', () => {
    cy.visit('/' + 'aura-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [65095]', () => {
    cy.visit('/' + 'wishing-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [65096]', () => {
    cy.visit('/' + 'vacation-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [65097]', () => {
    cy.visit('/' + 'voloom-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [65098]', () => {
    cy.visit('/' + 'aura-scarf.html')
    cy.url().should('include', '/' + 'accessories.html')
  })

  it('URL redirect for [65099]', () => {
    cy.visit('/' + 'embroidered-hoodie.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [65100]', () => {
    cy.visit('/' + 'floral-prism-key-blouse.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [65101]', () => {
    cy.visit('/' + 'venetian-duster.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [65102]', () => {
    cy.visit('/' + 'venetian-deep-v-blouse.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [65103]', () => {
    cy.visit('/' + 'patch-tie-neck-tunic.html')
    cy.url().should('include', '/' + 'sale/love-johnny-was.html')
  })

  it('URL redirect for [65104]', () => {
    cy.visit('/' + 'short-slip-with-lace.html')
    cy.url().should('include', '/' + 'red-hot-and-festive.html')
  })

  it('URL redirect for [65105]', () => {
    cy.visit('/' + 'short-slip-with-lace-1.html')
    cy.url().should('include', '/' + 'clothing/slips.html')
  })

  it('URL redirect for [65106]', () => {
    cy.visit('/' + 'short-slip-with-lace-2.html')
    cy.url().should('include', '/' + 'clothing/tops.html')
  })

  it('URL redirect for [65107]', () => {
    cy.visit('/' + 'medium-slip-with-lace-2.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [65108]', () => {
    cy.visit('/' + 'medium-slip-with-lace-3.html')
    cy.url().should('include', '/' + 'clothing.html')
  })

  it('URL redirect for [65109]', () => {
    cy.visit('/' + 'medium-slip-with-lace-4.html')
    cy.url().should('include', '/' + 'clothing/love-johnny-was.html')
  })

  it('URL redirect for [65110]', () => {
    cy.visit('/' + 'embroidered-crop-pants-2.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [65111]', () => {
    cy.visit('/' + 'dropwaist-dress.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [65112]', () => {
    cy.visit('/' + 'magdalene-long-sleeve-thermal.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [65113]', () => {
    cy.visit('/' + 'magdalene-long-sleeve-thermal-1.html')
    cy.url().should('include', '/' + 'sale.html')
  })

  it('URL redirect for [65114]', () => {
    cy.visit('/' + 'leith-velvet-peasant-blouse.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

  it('URL redirect for [65115]', () => {
    cy.visit('/' + 'aspen-velvet-draped-cardigan.html')
    cy.url().should('include', '/' + 'sale/jwla.html')
  })

})