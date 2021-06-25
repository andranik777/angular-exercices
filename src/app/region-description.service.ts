import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionDescriptionService {


  private _region = [
    {
      'name': 'Ile de France',
      'content': 'L\'Île-de-France est une région située dans le centre-nord de la France. Elle entoure la célèbre capitale du pays, Paris, centre international de culture et de gastronomie avec ses cafés chics et ses jardins structurés.',
      'img': 'https://www.eivp-paris.fr/sites/default/files/styles/max_2600x2600/public/2018-01/bg-slider-home-1.jpg?itok=N-KiKHjO'
    },
    {
      'name': 'Auvergne-Rhône-Alpes',
      'content': 'Auvergne-Rhône-Alpes est une région administrative française située dans la partie centrale et orientale du sud de la France. Elle a été créée par la réforme territoriale de 2015 et mise en place après les élections régionales de décembre 2015.',
      'img': 'https://www.notretemps.com/cache/com_zoo_images/98/adobestock-95457101_97598053d8d3393a4c6924a260b4c303.jpg'
    },
    {
      'name': 'Bretagne',
      'content': 'Une région est, en France, une collectivité territoriale issue de la décentralisation, dotée de la personnalité juridique et d\'une liberté d\'administration, ainsi qu\'une division administrative du territoire et des services déconcentrés de l\'État.',
      'img': 'https://www.misterfly.com/blog/wp-content/uploads/2020/05/bretagne-1.jpg'
    },
  ];

  get region(): Array<{ name: string; content: string; img: string; }> {
    return this._region;
  }


  constructor() { 
    
  }

}
