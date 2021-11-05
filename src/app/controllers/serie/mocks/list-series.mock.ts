import { Data } from "src/app/models/Data";

export const MOCK_LIST_SERIES: Data = {
  code: 200,
  status: 'Ok',
  copyright: '© 2021 MARVEL',
  attributionText: 'Data provided by Marvel. © 2021 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2021 MARVEL</a>',
  etag: 'd7a84c7ba67316686d19294ea0a824e10b34b09a',
  data: {
    offset: 0,
    limit: 10,
    total: 10,
    count: 10,
    results: [
      {
        id: 31445,
        title: ' Fantastic Four by Dan Slott Vol. 1 (2021)',
        description: null,
        resourceURI: 'http://gateway.marvel.com/v1/public/series/31445',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/series/31445/_fantastic_four_by_dan_slott_vol_1_2021?utm_campaign=apiRef&utm_source=ec023cc710cb69c813951883df7c163c',
          },
        ],
        startYear: 2021,
        endYear: 2021,
        rating: '',
        type: 'collection',
        modified: '2020-07-29T09:04:18-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        creators: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/31445/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 1,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/31445/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/31445/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/205070',
              name: 'cover from FANTASTIC FOUR BY DAN SLOTT VOL. 1 HC (2021) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/205071',
              name: 'story from FANTASTIC FOUR BY DAN SLOTT VOL. 1 HC (2021) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        comics: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/31445/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/91992',
              name: ' Fantastic Four by Dan Slott Vol. 1 (Hardcover)',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/31445/events',
          items: [],
          returned: 0,
        },
        next: null,
        previous: null,
      },
      {
        id: 26024,
        title: ' Superior Spider-Man Vol. 2: Otto-matic (2019)',
        description: null,
        resourceURI: 'http://gateway.marvel.com/v1/public/series/26024',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/series/26024/_superior_spider-man_vol_2_otto-matic_2019?utm_campaign=apiRef&utm_source=ec023cc710cb69c813951883df7c163c',
          },
        ],
        startYear: 2019,
        endYear: 2019,
        rating: '',
        type: 'collection',
        modified: '2019-12-13T16:23:45-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        creators: {
          available: 4,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/26024/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11765',
              name: 'Christos Gage',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/942',
              name: 'Mike Hawthorne',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/437',
              name: 'Lan Medina',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 4,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/26024/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man (Peter Parker)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/26024/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/158776',
              name: 'cover from SUPERIOR SPIDER-MAN VOL. 2 TPB (2020) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/158777',
              name: 'story from SUPERIOR SPIDER-MAN VOL. 2 TPB (2020) #2',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        comics: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/26024/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/71400',
              name: ' Superior Spider-Man Vol. 2: Otto-matic (Trade Paperback)',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/26024/events',
          items: [],
          returned: 0,
        },
        next: null,
        previous: null,
      },
      {
        id: 18454,
        title: '100th Anniversary Special (2014)',
        description: null,
        resourceURI: 'http://gateway.marvel.com/v1/public/series/18454',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/series/18454/100th_anniversary_special_2014?utm_campaign=apiRef&utm_source=ec023cc710cb69c813951883df7c163c',
          },
        ],
        startYear: 2014,
        endYear: 2014,
        rating: 'Rated T',
        type: 'limited',
        modified: '2019-10-01T18:42:55-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/b0/5d939e25a9787',
          extension: 'jpg',
        },
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/18454/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
              name: 'Andy Lanning',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9432',
              name: 'Sean Ryan',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11788',
              name: 'Jennifer Van Meter',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13138',
              name: 'In-Hyuk Lee',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12392',
              name: 'David Lopez',
              role: 'penciller (cover)',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/18454/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 10,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/18454/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/110101',
              name: 'cover from 100th Anniversary Special (2014) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/110102',
              name: 'story from 100th Anniversary Special (2014) #1',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/110103',
              name: 'cover from 100th Anniversary Special (2014) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/110104',
              name: 'story from 100th Anniversary Special (2014) #2',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/110105',
              name: 'cover from 100th Anniversary Special (2014) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/110106',
              name: 'story from 100th Anniversary Special (2014) #3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/110107',
              name: 'cover from 100th Anniversary Special (2014) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/110108',
              name: 'story from 100th Anniversary Special (2014) #4',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/110109',
              name: 'cover from 100th Anniversary Special (2014) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/110110',
              name: 'story from 100th Anniversary Special (2014) #5',
              type: 'interiorStory',
            },
          ],
          returned: 10,
        },
        comics: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/18454/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/49007',
              name: '100th Anniversary Special (2014) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/49008',
              name: '100th Anniversary Special (2014) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/49010',
              name: '100th Anniversary Special (2014) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/49009',
              name: '100th Anniversary Special (2014) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/49011',
              name: '100th Anniversary Special (2014) #1',
            },
          ],
          returned: 5,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/18454/events',
          items: [],
          returned: 0,
        },
        next: null,
        previous: null,
      },
      {
        id: 13379,
        title: '15 Love (2011)',
        description: null,
        resourceURI: 'http://gateway.marvel.com/v1/public/series/13379',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/series/13379/15_love_2011?utm_campaign=apiRef&utm_source=ec023cc710cb69c813951883df7c163c',
          },
        ],
        startYear: 2011,
        endYear: 2011,
        rating: '',
        type: '',
        modified: '2015-09-22T17:11:46-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/00/51644d6b47668',
          extension: 'jpg',
        },
        creators: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/13379/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/274',
              name: 'Tommy Ohtsuka',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/496',
              name: 'Andi Watson',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8822',
              name: 'Jordan D. White',
              role: 'editor',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/13379/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/13379/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/82480',
              name: 'Cover #82480',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/82481',
              name: 'Interior #82481',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/82484',
              name: 'Cover #82484',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/82485',
              name: 'Interior #82485',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/82486',
              name: '15-Love (2011) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/82487',
              name: 'Interior #82487',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/106025',
              name: 'cover from 15-Love #1.5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/106026',
              name: 'cover from 15-Love #2.5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/106027',
              name: 'cover from 15-Love #3.5',
              type: 'cover',
            },
          ],
          returned: 9,
        },
        comics: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/13379/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37254',
              name: '15 Love (2011) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37251',
              name: '15 Love (2011) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37253',
              name: '15 Love (2011) #3',
            },
          ],
          returned: 3,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/13379/events',
          items: [],
          returned: 0,
        },
        next: null,
        previous: null,
      },
      {
        id: 13380,
        title: '15-Love GN-TPB (2013 - Present)',
        description: null,
        resourceURI: 'http://gateway.marvel.com/v1/public/series/13380',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/series/13380/15-love_gn-tpb_2013_-_present?utm_campaign=apiRef&utm_source=ec023cc710cb69c813951883df7c163c',
          },
        ],
        startYear: 2013,
        endYear: 2099,
        rating: '',
        type: '',
        modified: '2011-10-14T16:22:04-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        creators: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/13380/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/13380/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/13380/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/82482',
              name: '15-Love GN-TPB (2013) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/82483',
              name: 'Interior #82483',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        comics: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/13380/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37252',
              name: '15-Love GN-TPB (Graphic Novel)',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/13380/events',
          items: [],
          returned: 0,
        },
        next: null,
        previous: null,
      },
      {
        id: 489,
        title: '1602 (2003 - 2004)',
        description:
          "Award-winning writer Neil Gaiman teams with artist Andy Kubert to re-imagine the Marvel Universe in the year 1602! It's Spider-Man, the X-Men, Nick Fury, Doctor Strange, Daredevil and more as you'd never think to imagine them in an utterly unique and thrilling tale of high adventure!",
        resourceURI: 'http://gateway.marvel.com/v1/public/series/489',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/series/489/1602_2003_-_2004?utm_campaign=apiRef&utm_source=ec023cc710cb69c813951883df7c163c',
          },
        ],
        startYear: 2003,
        endYear: 2004,
        rating: 'Marvel Psr',
        type: 'limited',
        modified: '2013-10-02T12:13:44-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/51926fde9c18a',
          extension: 'jpg',
        },
        creators: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/489/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/567',
              name: 'Neil Gaiman',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/175',
              name: 'Andy Kubert',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/566',
              name: 'Scott McKowen',
              role: 'penciller (cover)',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/489/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009281',
              name: 'Doctor Doom',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009417',
              name: 'Magneto',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009463',
              name: 'Matthew Murdock',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009547',
              name: 'Natasha Romanoff',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009471',
              name: 'Nick Fury',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1011054',
              name: 'Spider-Man (1602)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009661',
              name: 'The Watchers',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010697',
              name: 'Virginia Dare',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009726',
              name: 'X-Men',
            },
          ],
          returned: 9,
        },
        stories: {
          available: 15,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/489/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1600',
              name: 'Cover #1600',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1601',
              name: 'Interior #1601',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1616',
              name: 'Cover #1616',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1617',
              name: 'Interior #1617',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1723',
              name: 'Cover #1723',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1724',
              name: 'Interior #1724',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1770',
              name: 'Cover #1770',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1771',
              name: 'Interior #1771',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2264',
              name: 'Cover #2264',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2265',
              name: 'Interior #2265',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2629',
              name: '1602 #7',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2630',
              name: '1602 #7',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/44869',
              name: 'Cover #44869',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/44870',
              name: 'Interior #44870',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/113142',
              name: 'Cover from 1602 #2',
              type: 'cover',
            },
          ],
          returned: 15,
        },
        comics: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/489/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20630',
              name: '1602 (2003) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/50114',
              name: '1602 (2003) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/377',
              name: '1602 (2003) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/148',
              name: '1602 (2003) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/147',
              name: '1602 (2003) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/146',
              name: '1602 (2003) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/145',
              name: '1602 (2003) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/440',
              name: '1602 (2003) #8',
            },
          ],
          returned: 8,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/489/events',
          items: [],
          returned: 0,
        },
        next: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/783',
          name: 'Marvel 1602: New World (2005)',
        },
        previous: null,
      },
      {
        id: 19244,
        title: '1602 Witch Hunter Angela (2015)',
        description: null,
        resourceURI: 'http://gateway.marvel.com/v1/public/series/19244',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/series/19244/1602_witch_hunter_angela_2015?utm_campaign=apiRef&utm_source=ec023cc710cb69c813951883df7c163c',
          },
        ],
        startYear: 2015,
        endYear: 2015,
        rating: 'Rated T+',
        type: 'limited',
        modified: '2017-10-26T14:30:43-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/553a60a66f2f6',
          extension: 'jpg',
        },
        creators: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/19244/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12441',
              name: 'Marguerite Bennett',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8901',
              name: 'Kieron Gillen',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10405',
              name: 'John Tyler Christopher',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13055',
              name: 'Richard Isanove',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12756',
              name: 'Irene Koh',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10785',
              name: 'Stephanie Hans',
              role: 'artist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1063',
              name: 'Frazer Irving',
              role: 'artist',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/19244/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1017574',
              name: 'Angela (Aldrif Odinsdottir)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 16,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/19244/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/113973',
              name: 'cover from 1602 Witch Hunter Angela (2015) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/113974',
              name: 'story from 1602 Witch Hunter Angela (2015) #1',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/113975',
              name: 'cover from 1602 Witch Hunter Angela (2015) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/113976',
              name: 'story from 1602 Witch Hunter Angela (2015) #2',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/113977',
              name: 'cover from 1602 Witch Hunter Angela (2015) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/113978',
              name: 'story from 1602 Witch Hunter Angela (2015) #3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/113979',
              name: 'cover from 1602 Witch Hunter Angela (2015) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/113980',
              name: 'story from 1602 Witch Hunter Angela (2015) #4',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/120677',
              name: 'cover from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST VARIANT)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/120678',
              name: 'story from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST VARIANT)',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/121219',
              name: 'cover from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST MISTRESS OF GWENG FU VARIANT)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/121220',
              name: 'story from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST MISTRESS OF GWENG FU VARIANT)',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/121474',
              name: 'cover from 1602 Witch Hunter Angela (2015) #2 (TBD ARTIST VARIANT)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/121475',
              name: 'story from 1602 Witch Hunter Angela (2015) #2 (TBD ARTIST VARIANT)',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/123459',
              name: 'cover from 1602 Witch Hunter Angela (2015) #3 (IRVING VARIANT)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/123460',
              name: 'story from 1602 Witch Hunter Angela (2015) #3 (IRVING VARIANT)',
              type: 'interiorStory',
            },
          ],
          returned: 16,
        },
        comics: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/19244/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/51198',
              name: '1602 Witch Hunter Angela (2015) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/55028',
              name: '1602 Witch Hunter Angela (2015) #1 (Christopher Gwengela Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/54728',
              name: '1602 Witch Hunter Angela (2015) #1 (Isanove Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/51199',
              name: '1602 Witch Hunter Angela (2015) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/55191',
              name: '1602 Witch Hunter Angela (2015) #2 (Koh Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/51200',
              name: '1602 Witch Hunter Angela (2015) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/56248',
              name: '1602 Witch Hunter Angela (2015) #3 (Irving Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/51201',
              name: '1602 Witch Hunter Angela (2015) #4',
            },
          ],
          returned: 8,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/19244/events',
          items: [],
          returned: 0,
        },
        next: null,
        previous: null,
      },
      {
        id: 20293,
        title: '1602 Witch Hunter Angela (2016)',
        description: null,
        resourceURI: 'http://gateway.marvel.com/v1/public/series/20293',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/series/20293/1602_witch_hunter_angela_2016?utm_campaign=apiRef&utm_source=ec023cc710cb69c813951883df7c163c',
          },
        ],
        startYear: 2016,
        endYear: 2016,
        rating: '',
        type: 'collection',
        modified: '2016-02-05T13:09:46-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        creators: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/20293/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/20293/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/20293/stories',
          items: [],
          returned: 0,
        },
        comics: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/20293/comics',
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/20293/events',
          items: [],
          returned: 0,
        },
        next: null,
        previous: null,
      },
      {
        id: 19501,
        title: '1872 (2015)',
        description: null,
        resourceURI: 'http://gateway.marvel.com/v1/public/series/19501',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/series/19501/1872_2015?utm_campaign=apiRef&utm_source=ec023cc710cb69c813951883df7c163c',
          },
        ],
        startYear: 2015,
        endYear: 2015,
        rating: 'Rated T+',
        type: 'limited',
        modified: '2017-10-26T14:31:35-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/553a60e7ab48d',
          extension: 'jpg',
        },
        creators: {
          available: 11,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/19501/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11482',
              name: 'Jesus Aburtov',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10172',
              name: 'Vc Clayton Cowles',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11680',
              name: 'Gerry Duggan',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11886',
              name: 'Francesco Francavilla',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/25',
              name: 'Alex Maleev',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/7190',
              name: 'Skottie Young',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/820',
              name: 'Leonard Kirk',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/593',
              name: 'Lee Loughridge',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12708',
              name: 'Evan Doc Shaner',
              role: 'artist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11921',
              name: 'Jacob Thomas',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12483',
              name: 'Nik Virella',
              role: 'penciller',
            },
          ],
          returned: 11,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/19501/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 14,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/19501/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/115721',
              name: 'cover from Marvel 1862 (2015) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/115722',
              name: 'story from Marvel 1862 (2015) #1',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/115723',
              name: 'cover from Marvel 1862 (2015) #1 (YOUNG VARIANT)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/115724',
              name: 'story from Marvel 1862 (2015) #1 (YOUNG VARIANT)',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/115725',
              name: 'cover from Marvel 1862 (2015) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/115726',
              name: 'story from Marvel 1862 (2015) #2',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/115727',
              name: 'cover from Marvel 1862 (2015) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/115728',
              name: 'story from Marvel 1862 (2015) #3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/115729',
              name: 'cover from Marvel 1862 (2015) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/115730',
              name: 'story from Marvel 1862 (2015) #4',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/121278',
              name: 'cover from Marvel 1862 (2015) #1 (SHANER VARIANT)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/121279',
              name: 'story from Marvel 1862 (2015) #1 (SHANER VARIANT)',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/123461',
              name: 'cover from 1872 (2015) #3 (TBD ARTIST VARIANT)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/123462',
              name: 'story from 1872 (2015) #3 (TBD ARTIST VARIANT)',
              type: 'interiorStory',
            },
          ],
          returned: 14,
        },
        comics: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/19501/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/52072',
              name: '1872 (2015) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/52073',
              name: '1872 (2015) #1 (Young Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/55058',
              name: '1872 (2015) #1 (Shaner Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/52074',
              name: '1872 (2015) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/52075',
              name: '1872 (2015) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/56249',
              name: '1872 (2015) #3 (Francavilla Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/52076',
              name: '1872 (2015) #4',
            },
          ],
          returned: 7,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/19501/events',
          items: [],
          returned: 0,
        },
        next: null,
        previous: null,
      },
      {
        id: 7520,
        title: '1939 Daily Bugle (2009 - Present)',
        description: null,
        resourceURI: 'http://gateway.marvel.com/v1/public/series/7520',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/series/7520/1939_daily_bugle_2009_-_present?utm_campaign=apiRef&utm_source=ec023cc710cb69c813951883df7c163c',
          },
        ],
        startYear: 2009,
        endYear: 2099,
        rating: '',
        type: '',
        modified: '2011-04-29T14:04:00-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/d0/4bb4eafadecaf',
          extension: 'jpg',
        },
        creators: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/7520/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10024',
              name: 'Chance Fiveash',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8123',
              name: 'Bob Greenberger',
              role: 'other',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9718',
              name: 'Jess Harold',
              role: 'other',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/7935',
              name: 'Sheila Johnson',
              role: 'other',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8155',
              name: "Brian O'Dell",
              role: 'other',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10363',
              name: 'John Rhett Thomas',
              role: 'other',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8402',
              name: 'Dugan Trodglen',
              role: 'other',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/7553',
              name: 'JEPH YORK',
              role: 'other',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/243',
              name: 'Mike Mayhew',
              role: 'colorist',
            },
          ],
          returned: 9,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/7520/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/7520/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/54073',
              name: 'Cover #54073',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/54074',
              name: 'Interior #54074',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        comics: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/7520/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24321',
              name: '1939 Daily Bugle (2009) #6',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/7520/events',
          items: [],
          returned: 0,
        },
        next: null,
        previous: null,
      },
    ],
  },
};
