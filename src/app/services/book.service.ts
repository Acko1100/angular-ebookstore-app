import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Apsolutna istina',
      price: 1800,
      genre: 'Autobiografija',
      description: 'https://www.laguna.rs/n5917_knjiga_apsolutna_istina_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/5917/apsolutna_istina-majk_tajson_v.jpg',
    },
    {
      id: 2,
      title: 'Ciao bella',
      price: 800,
      genre: 'Drama',
      description: 'https://www.laguna.rs/n5767_knjiga_ciao_bella_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/5767/ciao_bella-serena_djulijano_v.png',
    },
    {
      id: 3,
      title: 'Pakt sa đavolom',
      price: 1000 ,
      genre: 'Ljubavne',
      description: 'https://www.laguna.rs/n5991_knjiga_pakt_sa_djavolom_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/5991/pakt_sa_djavolom_v.jpg',
    },
    {
      id: 4,
      title: 'Umetnost pobede',
      price: 1400 ,
      genre: 'Autobiografija',
      description: 'https://www.laguna.rs/n4386_knjiga_umetnost_pobede_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/4386/umetnost_pobede-fil_najt_v.jpg',
    },
    {
      id: 5,
      title: 'Čovek po imenu Uve',
      price: 1100 ,
      genre: 'Drama',
      description: 'https://www.laguna.rs/n3366_knjiga_covek_po_imenu_uve_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/3366/covek_po_imenu_uve_v.jpg',
    },
    {
      id: 6,
      title: 'Šta Evropa želi?',
      price: 1600 ,
      genre: 'Filozofija',
      description: 'https://www.laguna.rs/n2617_knjiga_sta_evropa_zeli_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/2617/sta_evropa_zeli-srecko_horvat-_slavoj_zizek_v.jpg',
    },
    {
      id: 7,
      title: 'Grad ogledala',
      price: 2000 ,
      genre: 'Horor',
      description: 'https://www.laguna.rs/n3437_knjiga_grad_ogledala_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/3437/grad_ogledala-dzastin_kronin_v.jpg',
    },
    {
      id: 8,
      title: 'Alijenista',
      price: 1000 ,
      genre: 'Horor',
      description: 'https://www.laguna.rs/n69_knjiga_alijenista_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/69/alijenista-kejleb_kar_v.jpg',
    },
    {
      id: 9,
      title: 'Pitajte filozofa',
      price: 700 ,
      genre: 'Filozofija',
      description: 'https://www.laguna.rs/n5188_knjiga_pitajte_filozofa_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/5188/pitajte_filozofa-ijan_olasov_v.jpg',
    },
    {
      id: 10,
      title: 'Put do zvezda',
      price: 800 ,
      genre: 'Autobiografija',
      description: 'https://www.laguna.rs/n4898_knjiga_put_do_zvezda_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/4898/put_do_zvezda-jurij_gagarin_v.jpg',
    },
    {
      id: 11,
      title: 'Sa nama počinje',
      price: 1000 ,
      genre: 'Ljubavne',
      description: 'https://www.laguna.rs/n5778_knjiga_sa_nama_pocinje_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/5778/sa_nama_pocinje-kolin_huver_v.jpg',
    },
    {
      id: 12,
      title: 'Intelektualci',
      price: 1600 ,
      genre: 'Filozofija',
      description: 'https://www.laguna.rs/n4643_knjiga_intelektualci_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/4643/intelektualci-pol_dzonson_v.jpg',
    },
    {
      id: 13,
      title: 'Zemlja snova',
      price: 1100 ,
      genre: 'Ljubavne',
      description: 'https://www.laguna.rs/n5821_knjiga_zemlja_snova_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/5821/zemlja_snova-nikolas_sparks_v.jpg',
    },
    {
      id: 14,
      title: 'Mojih pedeset',
      price: 800 ,
      genre: 'Autobiografija',
      description: 'https://www.laguna.rs/n4075_knjiga_mojih_pedeset_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/4075/mojih_pedeset-branko_djuric_djuro_v.jpg',
    },
    {
      id: 15,
      title: 'Teror',
      price: 2000 ,
      genre: 'Horor',
      description: 'https://www.laguna.rs/n1045_knjiga_teror_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/1045/teror-den_simons_v.jpg',
    },
    {
      id: 16,
      title: 'Rečnik izgubljenih reči',
      price: 1400 ,
      genre: 'Drama',
      description: 'https://www.laguna.rs/n5941_knjiga_recnik_izgubljenih_reci_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/5941/recnik_izgubljenih_reci-pip_vilijams_v.png',
    },
    {
      id: 17,
      title: 'Hačiko čeka',
      price: 500 ,
      genre: 'Drama',
      description: 'https://www.laguna.rs/n5936_knjiga_haciko_ceka_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/5936/haciko_ceka-lezlija_njuman_v.jpg',
    },
    {
      id: 18,
      title: 'Male uspomene',
      price: 600 ,
      genre: 'Autobiografija',
      description: 'https://www.laguna.rs/n3538_knjiga_male_uspomene_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/3538/male_uspomene-zoze_saramago_v.jpg',
    },
    {
      id: 19,
      title: 'Sreća',
      price: 1900 ,
      genre: 'Filozofija',
      description: 'https://www.laguna.rs/n3546_knjiga_sreca_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/3546/sreca-vilhelm_smid_v.jpg',
    },
    {
      id: 20,
      title: 'Spokojstvo',
      price: 2100 ,
      genre: 'Filozofija',
      description: 'https://www.laguna.rs/n3545_knjiga_spokojstvo_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/3545/spokojstvo-vilhelm_smid_v.jpg',
    },
    {
      id: 21,
      title: 'Meduzin pogled',
      price: 1200 ,
      genre: 'Drama',
      description: 'https://www.laguna.rs/n5898_knjiga_meduzin_pogled_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/5898/meduzin_pogled-natali_hejns_v.png',
    },
    {
      id: 22,
      title: 'Žurka iznenađenja',
      price: 1300,
      genre: 'Horor',
      description: 'https://www.laguna.rs/n522_knjiga_zurka_iznenadjenja_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/522/zurka_iznenadjenja-r_l_stajn_v.jpg',
    },
    {
      id: 23,
      title: 'Igra prokletstva',
      price: 1800 ,
      genre: 'Horor',
      description: 'https://www.laguna.rs/n39_knjiga_igra_prokletstva_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/39/igra_prokletstva-klajv_barker_v.jpg',
    },
    {
      id: 24,
      title: 'Neupareni',
      price: 1400 ,
      genre: 'Ljubavni',
      description: 'https://www.laguna.rs/n5028_knjiga_neupareni_laguna.html',
      image: 'https://www.laguna.rs/_img/korice/5028/neupareni-samanta_jang-_kristen_kalihan_v.jpg',
    },
    
  
  ];

  getBooks(): Book[] {
    return this.books;
  }

  constructor() { }
}
