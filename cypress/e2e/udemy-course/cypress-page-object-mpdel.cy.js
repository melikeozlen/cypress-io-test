import { Homepage } from "../../page-object-model/homepage";
const homepagePom = new Homepage()

import homepageSecond from "../../page-object-model/homepage-second";

describe('Page Object Model İlk Kullanımı', () => {
    it('Page Object Model Kullanım Örnekleri - 1', () => {
        homepagePom.navigate()
            //* homepagePom.pricingBtn() // navi gate içerisine return this der isem bunu yazmama gerek olmayacak
            .pricingBtn() //*  return  this var ise bunu eklemem yerli
    });
})

describe.only('Page Object Model İkinci Kullanımı', () => {
    it('Page Object Model Kullanım Örnekleri - 2', () => {
        homepageSecond.navigate()
        homepageSecond.pricingBtn.should('be.visible').and('contain','Pricing').click()
    });
})