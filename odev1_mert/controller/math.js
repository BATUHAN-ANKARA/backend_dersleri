const toplama = (sayi1,sayi2,islem) => {
    return sayi1 + sayi2
}

const cikarma = (sayi1,sayi2,islem)=>{
    return sayi1 - sayi2
}

const carpma = (sayi1,sayi2,islem)=>{
    return sayi1 * sayi2
}

const bolme = (sayi1,sayi2,islem)=>{
    if (sayi2===0) {
       return ({error:"Bölen 0 olamaz"})
    } else {
       return sayi1 / sayi2
    }
}

const faktoriyell = (sayi) => {
    let sonuc = 1
    for (let index = 2; index <= sayi; index++) {
        sonuc *= index
      }return sonuc
}

module.exports = {toplama,cikarma,carpma,bolme,faktoriyell}