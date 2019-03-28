const TrafficMock = {
  radars: {
    total: 5,
    roadEntries: [
      {
        road: 'A4',
        roadType: 'aWegen',
        radars: [
          {
            msgNr: '173381351',
            from: 'Den Hoorn',
            fromLoc: {
              lat: 51.99438,
              lon: 4.31888,
            },
            to: 'Delft',
            toLoc: {
              lat: 51.98352,
              lon: 4.32902,
            },
            loc: {
              lat: 51.98847,
              lon: 4.32436,
            },
            location: 'A4 Den Haag richting Rotterdam',
            segStart: 'Den Haag',
            segEnd: 'Rotterdam',
            reason: 'bij hectometerpaal 56,1.',
            description: 'Tussen Den Hoorn en Delft bij hectometerpaal 56,1.',
            events: [
              {
                alertC: '3101',
                text: 'Snelheidscontrole',
              },
            ],
          },
        ],
      },
      {
        road: 'A13',
        roadType: 'aWegen',
        radars: [
          {
            msgNr: '173402945',
            from: 'Rotterdam-Airport',
            fromLoc: {
              lat: 51.9505,
              lon: 4.41636,
            },
            to: 'Delft-Zuid',
            toLoc: {
              lat: 51.99687,
              lon: 4.3889,
            },
            loc: {
              lat: 51.96304,
              lon: 4.40627,
            },
            location: 'A13 Rotterdam richting Den Haag',
            segStart: 'Rotterdam',
            segEnd: 'Den Haag',
            reason: 'bij hectometerpaal 15,1.',
            description: 'Tussen Rotterdam-Airport en Delft-Zuid bij hectometerpaal 15,1.',
            events: [
              {
                alertC: '3101',
                text: 'Snelheidscontrole',
              },
            ],
          },
        ],
      },
      {
        road: 'A16',
        roadType: 'aWegen',
        radars: [
          {
            msgNr: '173400174',
            from: 'de Randweg Dordrecht',
            fromLoc: {
              lat: 51.7726,
              lon: 4.64903,
            },
            to: 'Dordrecht-Centrum',
            toLoc: {
              lat: 51.80352,
              lon: 4.65023,
            },
            loc: {
              lat: 51.77946,
              lon: 4.65065,
            },
            location: 'A16 Breda richting Rotterdam',
            segStart: 'Breda',
            segEnd: 'Rotterdam',
            reason: 'bij hectometerpaal 37,7.',
            description: 'Tussen de Randweg Dordrecht en Dordrecht-Centrum bij hectometerpaal 37,7.',
            events: [
              {
                alertC: '3101',
                text: 'Snelheidscontrole',
              },
            ],
          },
        ],
      },
      {
        road: 'A28',
        roadType: 'aWegen',
        radars: [
          {
            msgNr: '173383989',
            from: 'Leusden',
            fromLoc: {
              lat: 52.1453,
              lon: 5.41043,
            },
            to: 'knp. Hoevelaken naar de A1 richting Apeldoorn',
            toLoc: {
              lat: 52.17116,
              lon: 5.43673,
            },
            loc: {
              lat: 52.15955,
              lon: 5.41917,
            },
            location: 'A28 Amersfoort richting Zwolle',
            segStart: 'Amersfoort',
            segEnd: 'Zwolle',
            reason: 'bij hectometerpaal 21,5.',
            description: 'Tussen Leusden en knp. Hoevelaken naar de A1 richting Apeldoorn bij hectometerpaal 21,5.',
            events: [
              {
                alertC: '3101',
                text: 'Snelheidscontrole',
              },
            ],
          },
        ],
      },
      {
        road: 'A76',
        roadType: 'aWegen',
        radars: [
          {
            msgNr: '172841721',
            from: 'Nuth',
            fromLoc: {
              lat: 50.92306,
              lon: 5.88896,
            },
            to: 'Schinnen',
            toLoc: {
              lat: 50.93826,
              lon: 5.87342,
            },
            loc: {
              lat: 50.92995,
              lon: 5.88443,
            },
            location: 'A76 Heerlen richting Geleen',
            segStart: 'Heerlen',
            segEnd: 'Geleen',
            reason: 'bij hectometerpaal 10,9.',
            description: 'Tussen Nuth en Schinnen bij hectometerpaal 10,9.',
            events: [
              {
                alertC: '3101',
                text: 'Snelheidscontrole',
              },
            ],
          },
        ],
      },
    ],
  },
  trafficJams: {
    total: 86,
    roadEntries: [
      {
        road: 'A1',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403299',
            from: 'afrit Markelo',
            fromLoc: {
              lat: 52.26259,
              lon: 6.45569,
            },
            to: 'afrit Lochem',
            toLoc: {
              lat: 52.24932,
              lon: 6.39788,
            },
            location: 'A1 Hengelo richting Apeldoorn',
            segStart: 'Hengelo',
            segEnd: 'Apeldoorn',
            start: '2019-03-28T06:22:00',
            startDate: '28 maart 2019 07:22 uur',
            delay: 300,
            distance: 2300,
            reason: '',
            description: 'Tussen afrit Markelo en afrit Lochem. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403260',
            from: 'Stroe',
            fromLoc: {
              lat: 52.19165,
              lon: 5.70158,
            },
            to: 'Hoevelaken',
            toLoc: {
              lat: 52.17043,
              lon: 5.43905,
            },
            location: 'A1 Apeldoorn richting Amsterdam',
            segStart: 'Apeldoorn',
            segEnd: 'Amsterdam',
            start: '2019-03-28T05:04:30',
            startDate: '28 maart 2019 06:04 uur',
            delay: 660,
            distance: 4600,
            reason: '',
            description: 'Tussen Stroe en Hoevelaken. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A2',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403292',
            from: 'Nederweert',
            fromLoc: {
              lat: 51.2759,
              lon: 5.73637,
            },
            to: 'afrit Budel',
            toLoc: {
              lat: 51.29803,
              lon: 5.6271,
            },
            location: 'A2 Maastricht richting Eindhoven',
            segStart: 'Maastricht',
            segEnd: 'Eindhoven',
            start: '2019-03-28T05:30:00',
            startDate: '28 maart 2019 06:30 uur',
            delay: 300,
            distance: 2100,
            reason: '',
            description: 'Tussen Nederweert en afrit Budel. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403304',
            from: 'Weert-Noord',
            fromLoc: {
              lat: 51.2763,
              lon: 5.66674,
            },
            to: 'Leende',
            toLoc: {
              lat: 51.33866,
              lon: 5.56659,
            },
            location: 'A2 Maastricht richting Eindhoven',
            segStart: 'Maastricht',
            segEnd: 'Eindhoven',
            start: '2019-03-28T06:15:00',
            startDate: '28 maart 2019 07:15 uur',
            delay: 300,
            distance: 4900,
            reason: '',
            description: 'Tussen Weert-Noord en Leende. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403300',
            from: 'Maarheeze',
            fromLoc: {
              lat: 51.3123,
              lon: 5.60601,
            },
            to: 'knp. Leenderheide',
            toLoc: {
              lat: 51.40191,
              lon: 5.50359,
            },
            location: 'A2 Maastricht richting Eindhoven',
            segStart: 'Maastricht',
            segEnd: 'Eindhoven',
            start: '2019-03-28T06:15:00',
            startDate: '28 maart 2019 07:15 uur',
            delay: 240,
            distance: 5200,
            reason: '',
            description: 'Tussen Maarheeze en knp. Leenderheide. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
          {
            msgNr: '173403306',
            from: 'knp. Leenderheide',
            fromLoc: {
              lat: 51.40499,
              lon: 5.50244,
            },
            to: 'knp. Batadorp',
            toLoc: {
              lat: 51.48316,
              lon: 5.40628,
            },
            location: 'A2 Maastricht richting Eindhoven',
            segStart: 'Maastricht',
            segEnd: 'Eindhoven',
            start: '2019-03-28T05:52:30',
            startDate: '28 maart 2019 06:52 uur',
            delay: 180,
            distance: 3900,
            reason: '',
            description: 'Tussen knp. Leenderheide en knp. Batadorp. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
          {
            msgNr: '173403256',
            from: 'afrit Geldermalsen',
            fromLoc: {
              lat: 51.87769,
              lon: 5.20972,
            },
            to: 'Culemborg',
            toLoc: {
              lat: 51.92811,
              lon: 5.16552,
            },
            location: "A2 's-Hertogenbosch richting Utrecht",
            segStart: "'s-Hertogenbosch",
            segEnd: 'Utrecht',
            start: '2019-03-28T05:19:00',
            startDate: '28 maart 2019 06:19 uur',
            delay: 480,
            distance: 6700,
            reason: '',
            description: 'Tussen afrit Geldermalsen en Culemborg. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403322',
            from: 'Nieuwegein-Zuid',
            fromLoc: {
              lat: 52.00381,
              lon: 5.0748,
            },
            to: 'knp. Oudenrijn',
            toLoc: {
              lat: 52.06562,
              lon: 5.07012,
            },
            location: "A2 's-Hertogenbosch richting Utrecht",
            segStart: "'s-Hertogenbosch",
            segEnd: 'Utrecht',
            start: '2019-03-28T06:17:32',
            startDate: '28 maart 2019 07:17 uur',
            delay: 180,
            distance: 2200,
            reason: '',
            description: 'Tussen Nieuwegein-Zuid en knp. Oudenrijn. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403280',
            from: 'Maarssen',
            fromLoc: {
              lat: 52.11816,
              lon: 5.03346,
            },
            to: 'Breukelen',
            toLoc: {
              lat: 52.17215,
              lon: 4.98751,
            },
            location: 'A2 Utrecht richting Amsterdam',
            segStart: 'Utrecht',
            segEnd: 'Amsterdam',
            start: '2019-03-28T06:17:32',
            startDate: '28 maart 2019 07:17 uur',
            delay: 360,
            distance: 3300,
            reason: '',
            description: 'Tussen Maarssen en Breukelen. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403261',
            from: 'Breukelen',
            fromLoc: {
              lat: 52.17215,
              lon: 4.98751,
            },
            to: 'Maarssen',
            toLoc: {
              lat: 52.11816,
              lon: 5.03346,
            },
            location: 'A2 Amsterdam richting Utrecht',
            segStart: 'Amsterdam',
            segEnd: 'Utrecht',
            start: '2019-03-28T06:45:00',
            startDate: '28 maart 2019 07:45 uur',
            delay: 600,
            distance: 4300,
            reason: '',
            description: 'Tussen Breukelen en Maarssen. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403305',
            from: 'afrit Geldermalsen',
            fromLoc: {
              lat: 51.87769,
              lon: 5.20972,
            },
            to: 'Waardenburg',
            toLoc: {
              lat: 51.83012,
              lon: 5.25422,
            },
            location: "A2 Utrecht richting 's-Hertogenbosch",
            segStart: 'Utrecht',
            segEnd: "'s-Hertogenbosch",
            start: '2019-03-28T06:24:00',
            startDate: '28 maart 2019 07:24 uur',
            delay: 240,
            distance: 3500,
            reason: '',
            description: 'Tussen afrit Geldermalsen en Waardenburg. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A4',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403250',
            from: 'Leidschendam',
            fromLoc: {
              lat: 52.07356,
              lon: 4.39532,
            },
            to: 'Hoogmade',
            toLoc: {
              lat: 52.15781,
              lon: 4.54839,
            },
            location: 'A4 Den Haag richting Amsterdam',
            segStart: 'Den Haag',
            segEnd: 'Amsterdam',
            start: '2019-03-28T05:06:30',
            startDate: '28 maart 2019 06:06 uur',
            delay: 660,
            distance: 11100,
            reason: '',
            description: 'Tussen Leidschendam en Hoogmade. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
          {
            msgNr: '173403335',
            from: 'knp. De Hoek',
            fromLoc: {
              lat: 52.29135,
              lon: 4.73123,
            },
            to: 'knp. Badhoevedorp',
            toLoc: {
              lat: 52.32863,
              lon: 4.79537,
            },
            location: 'A4 Den Haag richting Amsterdam',
            segStart: 'Den Haag',
            segEnd: 'Amsterdam',
            start: '2019-03-28T06:33:00',
            startDate: '28 maart 2019 07:33 uur',
            delay: 240,
            distance: 3000,
            reason: '',
            description: 'Tussen knp. De Hoek en knp. Badhoevedorp. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403341',
            from: 'Roelofarendsveen',
            fromLoc: {
              lat: 52.19967,
              lon: 4.61407,
            },
            to: 'Hoogmade',
            toLoc: {
              lat: 52.15781,
              lon: 4.54839,
            },
            location: 'A4 Amsterdam richting Den Haag',
            segStart: 'Amsterdam',
            segEnd: 'Den Haag',
            start: '2019-03-28T06:20:00',
            startDate: '28 maart 2019 07:20 uur',
            delay: 180,
            distance: 3800,
            reason: '',
            description: 'Tussen Roelofarendsveen en Hoogmade. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
          {
            msgNr: '173403345',
            from: 'Hoogmade',
            fromLoc: {
              lat: 52.15781,
              lon: 4.54839,
            },
            to: 'Zoeterwoude-Dorp',
            toLoc: {
              lat: 52.12969,
              lon: 4.49096,
            },
            location: 'A4 Amsterdam richting Den Haag',
            segStart: 'Amsterdam',
            segEnd: 'Den Haag',
            start: '2019-03-28T06:20:00',
            startDate: '28 maart 2019 07:20 uur',
            delay: 180,
            distance: 3500,
            reason: '',
            description: 'Tussen Hoogmade en Zoeterwoude-Dorp. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A6',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403303',
            from: 'Almere-Buiten',
            fromLoc: {
              lat: 52.3887,
              lon: 5.31816,
            },
            to: 'Almere-Stad',
            toLoc: {
              lat: 52.35532,
              lon: 5.25606,
            },
            location: 'A6 Lelystad richting Muiden',
            segStart: 'Lelystad',
            segEnd: 'Muiden',
            start: '2019-03-28T06:39:00',
            startDate: '28 maart 2019 07:39 uur',
            delay: 300,
            distance: 2900,
            reason: '',
            description: 'Tussen Almere-Buiten en Almere-Stad. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A7',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403262',
            from: 'Leek',
            fromLoc: {
              lat: 53.18486,
              lon: 6.37803,
            },
            to: 'Groningen-Helpman',
            toLoc: {
              lat: 53.20534,
              lon: 6.57403,
            },
            location: 'A7 Heerenveen richting Duitse grens',
            segStart: 'Heerenveen',
            segEnd: 'Duitse grens',
            start: '2019-03-28T05:47:00',
            startDate: '28 maart 2019 06:47 uur',
            delay: 660,
            distance: 3800,
            reason: '',
            description: 'Tussen Leek en Groningen-Helpman. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403317',
            from: 'afrit Avenhorn',
            fromLoc: {
              lat: 52.62816,
              lon: 5.00587,
            },
            to: 'Purmerend-Noord',
            toLoc: {
              lat: 52.53118,
              lon: 4.94728,
            },
            location: 'A7 Hoorn richting Zaandam',
            segStart: 'Hoorn',
            segEnd: 'Zaandam',
            start: '2019-03-28T06:45:00',
            startDate: '28 maart 2019 07:45 uur',
            delay: 180,
            distance: 4500,
            reason: '',
            description: 'Tussen afrit Avenhorn en Purmerend-Noord. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A8',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403326',
            from: 'Westzaan',
            fromLoc: {
              lat: 52.47411,
              lon: 4.77236,
            },
            to: 'knp. Zaandam',
            toLoc: {
              lat: 52.45554,
              lon: 4.84151,
            },
            location: 'A8 Zaandam richting Amsterdam',
            segStart: 'Zaandam',
            segEnd: 'Amsterdam',
            start: '2019-03-28T05:56:30',
            startDate: '28 maart 2019 06:56 uur',
            delay: 180,
            distance: 2600,
            reason: '',
            description: 'Tussen Westzaan en knp. Zaandam. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403301',
            from: 'Zaandijk',
            fromLoc: {
              lat: 52.46387,
              lon: 4.80818,
            },
            to: 'Zaanstad-Zuid',
            toLoc: {
              lat: 52.43212,
              lon: 4.86777,
            },
            location: 'A8 Zaandam richting Amsterdam',
            segStart: 'Zaandam',
            segEnd: 'Amsterdam',
            start: '2019-03-28T06:40:00',
            startDate: '28 maart 2019 07:40 uur',
            delay: 180,
            distance: 4700,
            reason: '',
            description: 'Tussen Zaandijk en Zaanstad-Zuid. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A9',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403290',
            from: 'Uitgeest',
            fromLoc: {
              lat: 52.51702,
              lon: 4.71669,
            },
            to: 'knp. Beverwijk',
            toLoc: {
              lat: 52.48608,
              lon: 4.69237,
            },
            location: 'A9 Alkmaar richting Amstelveen',
            segStart: 'Alkmaar',
            segEnd: 'Amstelveen',
            start: '2019-03-28T06:14:00',
            startDate: '28 maart 2019 07:14 uur',
            delay: 300,
            distance: 2900,
            reason: '',
            description: 'Tussen Uitgeest en knp. Beverwijk. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403293',
            from: 'Beverwijk-Oost',
            fromLoc: {
              lat: 52.47377,
              lon: 4.68258,
            },
            to: 'knp. Rottepolderplein',
            toLoc: {
              lat: 52.38439,
              lon: 4.70737,
            },
            location: 'A9 Alkmaar richting Amstelveen',
            segStart: 'Alkmaar',
            segEnd: 'Amstelveen',
            start: '2019-03-28T06:14:00',
            startDate: '28 maart 2019 07:14 uur',
            delay: 240,
            distance: 4100,
            reason: '',
            description: 'Tussen Beverwijk-Oost en knp. Rottepolderplein. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A12',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403277',
            from: 'Nieuwerbrug',
            fromLoc: {
              lat: 52.06583,
              lon: 4.82243,
            },
            to: 'Harmelen',
            toLoc: {
              lat: 52.08053,
              lon: 4.96595,
            },
            location: 'A12 Den Haag richting Utrecht',
            segStart: 'Den Haag',
            segEnd: 'Utrecht',
            start: '2019-03-28T06:26:00',
            startDate: '28 maart 2019 07:26 uur',
            delay: 300,
            distance: 5500,
            reason: '',
            description: 'Tussen Nieuwerbrug en Harmelen. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403275',
            from: 'Woerden',
            fromLoc: {
              lat: 52.07128,
              lon: 4.9029,
            },
            to: 'knp. Oudenrijn',
            toLoc: {
              lat: 52.0656,
              lon: 5.0701,
            },
            location: 'A12 Den Haag richting Utrecht',
            segStart: 'Den Haag',
            segEnd: 'Utrecht',
            start: '2019-03-28T06:26:00',
            startDate: '28 maart 2019 07:26 uur',
            delay: 300,
            distance: 5400,
            reason: '',
            description: 'Tussen Woerden en knp. Oudenrijn. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
          {
            msgNr: '173403263',
            from: 'afrit Beek',
            fromLoc: {
              lat: 51.90781,
              lon: 6.15371,
            },
            to: 'Duiven',
            toLoc: {
              lat: 51.9613,
              lon: 6.02159,
            },
            location: 'A12 Duitse grens richting Arnhem',
            segStart: 'Duitse grens',
            segEnd: 'Arnhem',
            start: '2019-03-28T05:20:00',
            startDate: '28 maart 2019 06:20 uur',
            delay: 420,
            distance: 6300,
            reason: '',
            description: 'Tussen afrit Beek en Duiven. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403271',
            from: 'Veenendaal-West',
            fromLoc: {
              lat: 52.0425,
              lon: 5.55367,
            },
            to: 'Maarsbergen',
            toLoc: {
              lat: 52.05486,
              lon: 5.40268,
            },
            location: 'A12 Arnhem richting Utrecht',
            segStart: 'Arnhem',
            segEnd: 'Utrecht',
            start: '2019-03-28T06:26:30',
            startDate: '28 maart 2019 07:26 uur',
            delay: 300,
            distance: 6000,
            reason: '',
            description: 'Tussen Veenendaal-West en Maarsbergen. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
          {
            msgNr: '173403313',
            from: 'Nieuwegein',
            fromLoc: {
              lat: 52.06139,
              lon: 5.09007,
            },
            to: 'Harmelen',
            toLoc: {
              lat: 52.08053,
              lon: 4.96595,
            },
            location: 'A12 Utrecht richting Den Haag',
            segStart: 'Utrecht',
            segEnd: 'Den Haag',
            start: '2019-03-28T06:43:00',
            startDate: '28 maart 2019 07:43 uur',
            delay: 240,
            distance: 3500,
            reason: '',
            description: 'Tussen Nieuwegein en Harmelen. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403334',
            from: 'Voorburg',
            fromLoc: {
              lat: 52.06631,
              lon: 4.36112,
            },
            to: 'Den Haag-Malieveld',
            toLoc: {
              lat: 52.088,
              lon: 4.3211,
            },
            location: 'A12 Utrecht richting Den Haag',
            segStart: 'Utrecht',
            segEnd: 'Den Haag',
            start: '2019-03-28T06:26:00',
            startDate: '28 maart 2019 07:26 uur',
            delay: 240,
            distance: 2000,
            reason: '',
            description: 'Tussen Voorburg en Den Haag-Malieveld. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A15',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403254',
            from: 'Hendrik-Ido-Ambacht',
            fromLoc: {
              lat: 51.85648,
              lon: 4.62923,
            },
            to: 'Sliedrecht-Oost',
            toLoc: {
              lat: 51.82233,
              lon: 4.80791,
            },
            location: 'A15 Rotterdam richting Gorinchem',
            segStart: 'Rotterdam',
            segEnd: 'Gorinchem',
            start: '2019-03-28T05:34:30',
            startDate: '28 maart 2019 06:34 uur',
            delay: 660,
            distance: 7900,
            reason: '',
            description: 'Tussen Hendrik-Ido-Ambacht en Sliedrecht-Oost. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403312',
            from: 'afrit Arkel',
            fromLoc: {
              lat: 51.84293,
              lon: 5.0063,
            },
            to: 'Hardinxveld-Giessendam',
            toLoc: {
              lat: 51.82443,
              lon: 4.84649,
            },
            location: 'A15 Nijmegen richting Rotterdam',
            segStart: 'Nijmegen',
            segEnd: 'Rotterdam',
            start: '2019-03-28T05:13:30',
            startDate: '28 maart 2019 06:13 uur',
            delay: 180,
            distance: 2000,
            reason: '',
            description: 'Tussen afrit Arkel en Hardinxveld-Giessendam. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A16',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403248',
            from: 'Breda-Noord',
            fromLoc: {
              lat: 51.60416,
              lon: 4.72074,
            },
            to: 'de Randweg Dordrecht',
            toLoc: {
              lat: 51.7726,
              lon: 4.64903,
            },
            location: 'A16 Breda richting Rotterdam',
            segStart: 'Breda',
            segEnd: 'Rotterdam',
            start: '2019-03-28T05:18:00',
            startDate: '28 maart 2019 06:18 uur',
            delay: 960,
            distance: 9600,
            reason: '',
            description: 'Tussen Breda-Noord en de Randweg Dordrecht. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A17',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403249',
            from: 'Industrieterrein Moerdijk',
            fromLoc: {
              lat: 51.67247,
              lon: 4.61143,
            },
            to: 'knp. Klaverpolder',
            toLoc: {
              lat: 51.69988,
              lon: 4.64995,
            },
            location: 'A17 Roosendaal richting Dordrecht',
            segStart: 'Roosendaal',
            segEnd: 'Dordrecht',
            start: '2019-03-28T05:20:30',
            startDate: '28 maart 2019 06:20 uur',
            delay: 900,
            distance: 3100,
            reason: '',
            description: 'Tussen Industrieterrein Moerdijk en knp. Klaverpolder. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A20',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403264',
            from: 'Schiedam',
            fromLoc: {
              lat: 51.92589,
              lon: 4.40387,
            },
            to: 'Rotterdam-Crooswijk',
            toLoc: {
              lat: 51.94183,
              lon: 4.48195,
            },
            location: 'A20 Hoek van Holland richting Gouda',
            segStart: 'Hoek van Holland',
            segEnd: 'Gouda',
            start: '2019-03-28T06:15:30',
            startDate: '28 maart 2019 07:15 uur',
            delay: 480,
            distance: 4900,
            reason: '',
            description: 'Tussen Schiedam en Rotterdam-Crooswijk. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403268',
            from: 'Rotterdam-Prins Alexander',
            fromLoc: {
              lat: 51.9558,
              lon: 4.5627,
            },
            to: 'Moordrecht',
            toLoc: {
              lat: 52.00326,
              lon: 4.6534,
            },
            location: 'A20 Hoek van Holland richting Gouda',
            segStart: 'Hoek van Holland',
            segEnd: 'Gouda',
            start: '2019-03-28T05:11:00',
            startDate: '28 maart 2019 06:11 uur',
            delay: 420,
            distance: 4000,
            reason: '',
            description: 'Tussen Rotterdam-Prins Alexander en Moordrecht. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403328',
            from: 'knp. Gouwe',
            fromLoc: {
              lat: 52.0244,
              lon: 4.66262,
            },
            to: 'Nieuwerkerk a/d IJssel',
            toLoc: {
              lat: 51.98055,
              lon: 4.61948,
            },
            location: 'A20 Gouda richting Hoek van Holland',
            segStart: 'Gouda',
            segEnd: 'Hoek van Holland',
            start: '2019-03-28T05:40:30',
            startDate: '28 maart 2019 06:40 uur',
            delay: 180,
            distance: 3400,
            reason: '',
            description: 'Tussen knp. Gouwe en Nieuwerkerk a/d IJssel. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
          {
            msgNr: '173403310',
            from: 'Rotterdam-Prins Alexander',
            fromLoc: {
              lat: 51.9558,
              lon: 4.5627,
            },
            to: 'Rotterdam-Centrum',
            toLoc: {
              lat: 51.93836,
              lon: 4.46063,
            },
            location: 'A20 Gouda richting Hoek van Holland',
            segStart: 'Gouda',
            segEnd: 'Hoek van Holland',
            start: '2019-03-28T05:31:00',
            startDate: '28 maart 2019 06:31 uur',
            delay: 180,
            distance: 3300,
            reason: '',
            description: 'Tussen Rotterdam-Prins Alexander en Rotterdam-Centrum. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A22',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403333',
            from: 'knp. Beverwijk',
            fromLoc: {
              lat: 52.48877,
              lon: 4.6949,
            },
            to: 'Beverwijk',
            toLoc: {
              lat: 52.47364,
              lon: 4.65357,
            },
            location: 'A22 Beverwijk richting Velsen',
            segStart: 'Beverwijk',
            segEnd: 'Velsen',
            start: '2019-03-28T06:46:00',
            startDate: '28 maart 2019 07:46 uur',
            delay: 240,
            distance: 2800,
            reason: '',
            description: 'Tussen knp. Beverwijk en Beverwijk. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A27',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403285',
            from: 'Geertruidenberg',
            fromLoc: {
              lat: 51.71392,
              lon: 4.88897,
            },
            to: 'Nieuwendijk',
            toLoc: {
              lat: 51.77275,
              lon: 4.92764,
            },
            location: 'A27 Breda richting Gorinchem',
            segStart: 'Breda',
            segEnd: 'Gorinchem',
            start: '2019-03-28T05:46:30',
            startDate: '28 maart 2019 06:46 uur',
            delay: 300,
            distance: 4400,
            reason: '',
            description: 'Tussen Geertruidenberg en Nieuwendijk. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403282',
            from: 'Hank',
            fromLoc: {
              lat: 51.73558,
              lon: 4.90803,
            },
            to: 'Industrieterrein Avelingen',
            toLoc: {
              lat: 51.83396,
              lon: 4.94488,
            },
            location: 'A27 Breda richting Gorinchem',
            segStart: 'Breda',
            segEnd: 'Gorinchem',
            start: '2019-03-28T05:46:30',
            startDate: '28 maart 2019 06:46 uur',
            delay: 300,
            distance: 5300,
            reason: '',
            description: 'Tussen Hank en Industrieterrein Avelingen. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
          {
            msgNr: '173403283',
            from: 'knp. Gorinchem',
            fromLoc: {
              lat: 51.84609,
              lon: 4.95048,
            },
            to: 'Lexmond',
            toLoc: {
              lat: 51.95512,
              lon: 5.02874,
            },
            location: 'A27 Breda richting Utrecht',
            segStart: 'Breda',
            segEnd: 'Utrecht',
            start: '2019-03-28T05:10:30',
            startDate: '28 maart 2019 06:10 uur',
            delay: 480,
            distance: 4900,
            reason: '',
            description: 'Tussen knp. Gorinchem en Lexmond. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403279',
            from: 'Noordeloos',
            fromLoc: {
              lat: 51.89845,
              lon: 4.97873,
            },
            to: 'Lexmond',
            toLoc: {
              lat: 51.95512,
              lon: 5.02874,
            },
            location: 'A27 Gorinchem richting Utrecht',
            segStart: 'Gorinchem',
            segEnd: 'Utrecht',
            start: '2019-03-28T05:47:00',
            startDate: '28 maart 2019 06:47 uur',
            delay: 300,
            distance: 3000,
            reason: '',
            description: 'Tussen Noordeloos en Lexmond. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403246',
            from: 'Hilversum',
            fromLoc: {
              lat: 52.20084,
              lon: 5.19207,
            },
            to: 'knp. Lunetten',
            toLoc: {
              lat: 52.05556,
              lon: 5.14456,
            },
            location: 'A27 Almere richting Gorinchem',
            segStart: 'Almere',
            segEnd: 'Gorinchem',
            start: '2019-03-28T05:17:30',
            startDate: '28 maart 2019 06:17 uur',
            delay: 4500,
            distance: 12100,
            reason: 'Kapotte vrachtauto. De linkerrijstrook is dicht.',
            description: 'Tussen Hilversum en knp. Lunetten. Kapotte vrachtauto. De linkerrijstrook is dicht.',
            events: [
              {
                alertC: '212',
                text: 'Kapotte vrachtauto',
              },
              {
                alertC: '503',
                text: 'De linkerrijstrook is dicht',
              },
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A28',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403272',
            from: 'afrit Eelde',
            fromLoc: {
              lat: 53.12509,
              lon: 6.61018,
            },
            to: 'knp. Julianaplein',
            toLoc: {
              lat: 53.20327,
              lon: 6.56458,
            },
            location: 'A28 Zwolle richting Groningen',
            segStart: 'Zwolle',
            segEnd: 'Groningen',
            start: '2019-03-28T06:19:00',
            startDate: '28 maart 2019 07:19 uur',
            delay: 360,
            distance: 5400,
            reason: '',
            description: 'Tussen afrit Eelde en knp. Julianaplein. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403267',
            from: 'Strand Horst',
            fromLoc: {
              lat: 52.31221,
              lon: 5.56321,
            },
            to: 'Strand Nulde',
            toLoc: {
              lat: 52.2668,
              lon: 5.53526,
            },
            location: 'A28 Zwolle richting Amersfoort',
            segStart: 'Zwolle',
            segEnd: 'Amersfoort',
            start: '2019-03-28T06:12:30',
            startDate: '28 maart 2019 07:12 uur',
            delay: 360,
            distance: 4000,
            reason: '',
            description: 'Tussen Strand Horst en Strand Nulde. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403286',
            from: 'Strand Horst',
            fromLoc: {
              lat: 52.31221,
              lon: 5.56321,
            },
            to: 'Nijkerk',
            toLoc: {
              lat: 52.24414,
              lon: 5.48079,
            },
            location: 'A28 Zwolle richting Amersfoort',
            segStart: 'Zwolle',
            segEnd: 'Amersfoort',
            start: '2019-03-28T06:12:30',
            startDate: '28 maart 2019 07:12 uur',
            delay: 300,
            distance: 3400,
            reason: '',
            description: 'Tussen Strand Horst en Nijkerk. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403289',
            from: 'Strand Nulde',
            fromLoc: {
              lat: 52.2668,
              lon: 5.53526,
            },
            to: 'Amersfoort-Vathorst',
            toLoc: {
              lat: 52.21074,
              lon: 5.44369,
            },
            location: 'A28 Zwolle richting Amersfoort',
            segStart: 'Zwolle',
            segEnd: 'Amersfoort',
            start: '2019-03-28T06:12:30',
            startDate: '28 maart 2019 07:12 uur',
            delay: 300,
            distance: 3600,
            reason: '',
            description: 'Tussen Strand Nulde en Amersfoort-Vathorst. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403315',
            from: 'Leusden',
            fromLoc: {
              lat: 52.1453,
              lon: 5.41043,
            },
            to: 'Soesterberg',
            toLoc: {
              lat: 52.11575,
              lon: 5.30564,
            },
            location: 'A28 Zwolle richting Utrecht',
            segStart: 'Zwolle',
            segEnd: 'Utrecht',
            start: '2019-03-28T06:16:30',
            startDate: '28 maart 2019 07:16 uur',
            delay: 180,
            distance: 2600,
            reason: '',
            description: 'Tussen Leusden en Soesterberg. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403257',
            from: 'Soesterberg',
            fromLoc: {
              lat: 52.11575,
              lon: 5.30564,
            },
            to: 'knp. Rijnsweerd',
            toLoc: {
              lat: 52.09177,
              lon: 5.16132,
            },
            location: 'A28 Amersfoort richting Utrecht',
            segStart: 'Amersfoort',
            segEnd: 'Utrecht',
            start: '2019-03-28T06:16:30',
            startDate: '28 maart 2019 07:16 uur',
            delay: 540,
            distance: 6500,
            reason: '',
            description: 'Tussen Soesterberg en knp. Rijnsweerd. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A29',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403324',
            from: 'afrit Numansdorp',
            fromLoc: {
              lat: 51.74901,
              lon: 4.4148,
            },
            to: 'afrit Oud-Beijerland',
            toLoc: {
              lat: 51.81528,
              lon: 4.48713,
            },
            location: 'A29 Bergen op Zoom richting Rotterdam',
            segStart: 'Bergen op Zoom',
            segEnd: 'Rotterdam',
            start: '2019-03-28T06:34:30',
            startDate: '28 maart 2019 07:34 uur',
            delay: 180,
            distance: 2700,
            reason: '',
            description: 'Tussen afrit Numansdorp en afrit Oud-Beijerland. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A35',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403276',
            from: 'Almelo-West',
            fromLoc: {
              lat: 52.34203,
              lon: 6.59666,
            },
            to: 'Wierden-West',
            toLoc: {
              lat: 52.35864,
              lon: 6.56644,
            },
            location: 'A35 Enschede richting Zwolle',
            segStart: 'Enschede',
            segEnd: 'Zwolle',
            start: '2019-03-28T06:25:30',
            startDate: '28 maart 2019 07:25 uur',
            delay: 420,
            distance: 2300,
            reason: '',
            description: 'Tussen Almelo-West en Wierden-West. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A44',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403269',
            from: 'Leiden',
            fromLoc: {
              lat: 52.16632,
              lon: 4.4525,
            },
            to: 'Wassenaar',
            toLoc: {
              lat: 52.15667,
              lon: 4.44398,
            },
            location: 'A44 Amsterdam richting Den Haag',
            segStart: 'Amsterdam',
            segEnd: 'Den Haag',
            start: '2019-03-28T05:57:30',
            startDate: '28 maart 2019 06:57 uur',
            delay: 540,
            distance: 3000,
            reason: '',
            description: 'Tussen Leiden en Wassenaar. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A50',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403298',
            from: 'Oss-Oost',
            fromLoc: {
              lat: 51.72743,
              lon: 5.57317,
            },
            to: 'Ravenstein',
            toLoc: {
              lat: 51.78808,
              lon: 5.65334,
            },
            location: 'A50 Eindhoven richting Arnhem',
            segStart: 'Eindhoven',
            segEnd: 'Arnhem',
            start: '2019-03-28T05:37:00',
            startDate: '28 maart 2019 06:37 uur',
            delay: 240,
            distance: 3000,
            reason: '',
            description: 'Tussen Oss-Oost en Ravenstein. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403251',
            from: 'Heerde',
            fromLoc: {
              lat: 52.41301,
              lon: 6.01578,
            },
            to: 'Vaassen',
            toLoc: {
              lat: 52.29355,
              lon: 6.00929,
            },
            location: 'A50 Zwolle richting Apeldoorn',
            segStart: 'Zwolle',
            segEnd: 'Apeldoorn',
            start: '2019-03-28T05:22:00',
            startDate: '28 maart 2019 06:22 uur',
            delay: 660,
            distance: 6000,
            reason: '',
            description: 'Tussen Heerde en Vaassen. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403291',
            from: 'afrit Hoenderloo',
            fromLoc: {
              lat: 52.1223,
              lon: 5.95538,
            },
            to: 'afrit Schaarsbergen',
            toLoc: {
              lat: 52.03819,
              lon: 5.93112,
            },
            location: 'A50 Apeldoorn richting Arnhem',
            segStart: 'Apeldoorn',
            segEnd: 'Arnhem',
            start: '2019-03-28T06:33:00',
            startDate: '28 maart 2019 07:33 uur',
            delay: 300,
            distance: 3400,
            reason: '',
            description: 'Tussen afrit Hoenderloo en afrit Schaarsbergen. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403270',
            from: 'knp. Valburg',
            fromLoc: {
              lat: 51.9081,
              lon: 5.76784,
            },
            to: 'Ravenstein',
            toLoc: {
              lat: 51.78808,
              lon: 5.65334,
            },
            location: 'A50 Arnhem richting Oss',
            segStart: 'Arnhem',
            segEnd: 'Oss',
            start: '2019-03-28T05:56:30',
            startDate: '28 maart 2019 06:56 uur',
            delay: 420,
            distance: 7600,
            reason: '',
            description: 'Tussen knp. Valburg en Ravenstein. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403308',
            from: 'Nistelrode',
            fromLoc: {
              lat: 51.71503,
              lon: 5.5689,
            },
            to: 'Veghel-Noord',
            toLoc: {
              lat: 51.63799,
              lon: 5.57041,
            },
            location: 'A50 Oss richting Eindhoven',
            segStart: 'Oss',
            segEnd: 'Eindhoven',
            start: '2019-03-28T06:28:00',
            startDate: '28 maart 2019 07:28 uur',
            delay: 240,
            distance: 4900,
            reason: '',
            description: 'Tussen Nistelrode en Veghel-Noord. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A58',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403296',
            from: 'Tilburg-Centrum Oost',
            fromLoc: {
              lat: 51.5428,
              lon: 5.11301,
            },
            to: 'Moergestel',
            toLoc: {
              lat: 51.53574,
              lon: 5.17852,
            },
            location: 'A58 Breda richting Eindhoven',
            segStart: 'Breda',
            segEnd: 'Eindhoven',
            start: '2019-03-28T05:29:00',
            startDate: '28 maart 2019 06:29 uur',
            delay: 240,
            distance: 3800,
            reason: '',
            description: 'Tussen Tilburg-Centrum Oost en Moergestel. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403278',
            from: 'Moergestel',
            fromLoc: {
              lat: 51.53574,
              lon: 5.17852,
            },
            to: 'Oirschot',
            toLoc: {
              lat: 51.49392,
              lon: 5.30861,
            },
            location: 'A58 Tilburg richting Eindhoven',
            segStart: 'Tilburg',
            segEnd: 'Eindhoven',
            start: '2019-03-28T06:06:00',
            startDate: '28 maart 2019 07:06 uur',
            delay: 360,
            distance: 3600,
            reason: '',
            description: 'Tussen Moergestel en Oirschot. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403274',
            from: 'Oirschot',
            fromLoc: {
              lat: 51.49392,
              lon: 5.30861,
            },
            to: 'Moergestel',
            toLoc: {
              lat: 51.53574,
              lon: 5.17852,
            },
            location: 'A58 Eindhoven richting Tilburg',
            segStart: 'Eindhoven',
            segEnd: 'Tilburg',
            start: '2019-03-28T06:26:30',
            startDate: '28 maart 2019 07:26 uur',
            delay: 360,
            distance: 3500,
            reason: '',
            description: 'Tussen Oirschot en Moergestel. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403302',
            from: 'Tilburg-Centrum West',
            fromLoc: {
              lat: 51.53947,
              lon: 5.04758,
            },
            to: 'Tilburg-Reeshof',
            toLoc: {
              lat: 51.55142,
              lon: 4.95224,
            },
            location: 'A58 Tilburg richting Breda',
            segStart: 'Tilburg',
            segEnd: 'Breda',
            start: '2019-03-28T06:35:00',
            startDate: '28 maart 2019 07:35 uur',
            delay: 240,
            distance: 3900,
            reason: '',
            description: 'Tussen Tilburg-Centrum West en Tilburg-Reeshof. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A59',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403247',
            from: 'Made',
            fromLoc: {
              lat: 51.66886,
              lon: 4.7968,
            },
            to: 'knp. Hooipolder',
            toLoc: {
              lat: 51.68725,
              lon: 4.88382,
            },
            location: 'A59 knp. Zonzeel richting Oss',
            segStart: 'knp. Zonzeel',
            segEnd: 'Oss',
            start: '2019-03-28T05:34:00',
            startDate: '28 maart 2019 06:34 uur',
            delay: 540,
            distance: 3900,
            reason: '',
            description: 'Tussen Made en knp. Hooipolder. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403307',
            from: 'Waalwijk-Centrum',
            fromLoc: {
              lat: 51.69406,
              lon: 5.07685,
            },
            to: 'Heusden',
            toLoc: {
              lat: 51.69851,
              lon: 5.16484,
            },
            location: 'A59 knp. Zonzeel richting Oss',
            segStart: 'knp. Zonzeel',
            segEnd: 'Oss',
            start: '2019-03-28T06:18:30',
            startDate: '28 maart 2019 07:18 uur',
            delay: 180,
            distance: 3400,
            reason: '',
            description: 'Tussen Waalwijk-Centrum en Heusden. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
          {
            msgNr: '173403336',
            from: 'Drunen-West',
            fromLoc: {
              lat: 51.69361,
              lon: 5.10912,
            },
            to: 'Nieuwkuijk',
            toLoc: {
              lat: 51.69483,
              lon: 5.19434,
            },
            location: 'A59 knp. Zonzeel richting Oss',
            segStart: 'knp. Zonzeel',
            segEnd: 'Oss',
            start: '2019-03-28T06:18:30',
            startDate: '28 maart 2019 07:18 uur',
            delay: 180,
            distance: 2500,
            reason: '',
            description: 'Tussen Drunen-West en Nieuwkuijk. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A325',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403349',
            from: 'Elst',
            fromLoc: {
              lat: 51.91599,
              lon: 5.87435,
            },
            to: 'het Gelredome',
            toLoc: {
              lat: 51.96286,
              lon: 5.89744,
            },
            location: 'A325 Nijmegen richting Arnhem',
            segStart: 'Nijmegen',
            segEnd: 'Arnhem',
            start: '2019-03-28T06:13:30',
            startDate: '28 maart 2019 07:13 uur',
            delay: 180,
            distance: 2300,
            reason: '',
            description: 'Tussen Elst en het Gelredome. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'A326',
        roadType: 'aWegen',
        trafficJams: [
          {
            msgNr: '173403287',
            from: 'Beuningen',
            fromLoc: {
              lat: 51.82708,
              lon: 5.73787,
            },
            to: 'knp. Bankhoef',
            toLoc: {
              lat: 51.81521,
              lon: 5.67928,
            },
            location: 'A326 Nijmegen richting Ravenstein',
            segStart: 'Nijmegen',
            segEnd: 'Ravenstein',
            start: '2019-03-28T06:01:00',
            startDate: '28 maart 2019 07:01 uur',
            delay: 360,
            distance: 2300,
            reason: '',
            description: 'Tussen Beuningen en knp. Bankhoef. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N11',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403320',
            from: 'Hazerswoude-Dorp',
            fromLoc: {
              lat: 52.12271,
              lon: 4.5876,
            },
            to: 'de aansluiting met de A4',
            toLoc: {
              lat: 52.13983,
              lon: 4.50913,
            },
            location: 'N11 Bodegraven - Leiden',
            segStart: 'Bodegraven',
            segEnd: 'Leiden',
            start: '2019-03-28T06:07:00',
            startDate: '28 maart 2019 07:07 uur',
            delay: 300,
            distance: 2100,
            reason: '',
            description: 'Tussen Hazerswoude-Dorp en de aansluiting met de A4. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N35',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403295',
            from: 'Nijverdal',
            fromLoc: {
              lat: 52.36205,
              lon: 6.51219,
            },
            to: 'Wierden',
            toLoc: {
              lat: 52.35021,
              lon: 6.5862,
            },
            location: 'N35 Zwolle - Enschede',
            segStart: 'Zwolle',
            segEnd: 'Enschede',
            start: '2019-03-28T06:13:00',
            startDate: '28 maart 2019 07:13 uur',
            delay: 360,
            distance: 2800,
            reason: '',
            description: 'Tussen Nijverdal en Wierden. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N50',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403253',
            from: 'knp. Hattemerbroek',
            fromLoc: {
              lat: 52.4944,
              lon: 6.01243,
            },
            to: 'Kampen',
            toLoc: {
              lat: 52.55471,
              lon: 5.88169,
            },
            location: 'N50 Zwolle - Emmeloord',
            segStart: 'Zwolle',
            segEnd: 'Emmeloord',
            start: '2019-03-28T06:09:30',
            startDate: '28 maart 2019 07:09 uur',
            delay: 720,
            distance: 8100,
            reason: '',
            description: 'Tussen knp. Hattemerbroek en Kampen. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403252',
            from: 'Ens',
            fromLoc: {
              lat: 52.63814,
              lon: 5.81559,
            },
            to: 'Kampen-Zuid',
            toLoc: {
              lat: 52.52993,
              lon: 5.91514,
            },
            location: 'N50 Emmeloord - Zwolle',
            segStart: 'Emmeloord',
            segEnd: 'Zwolle',
            start: '2019-03-28T06:16:00',
            startDate: '28 maart 2019 07:16 uur',
            delay: 840,
            distance: 4100,
            reason: '',
            description: 'Tussen Ens en Kampen-Zuid. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
          {
            msgNr: '173403348',
            from: 'Kampen',
            fromLoc: {
              lat: 52.55471,
              lon: 5.88169,
            },
            to: 'knp. Hattemerbroek',
            toLoc: {
              lat: 52.4944,
              lon: 6.01243,
            },
            location: 'N50 Emmeloord - Zwolle',
            segStart: 'Emmeloord',
            segEnd: 'Zwolle',
            start: '2019-03-28T06:16:00',
            startDate: '28 maart 2019 07:16 uur',
            delay: 180,
            distance: 2300,
            reason: '',
            description: 'Tussen Kampen en knp. Hattemerbroek. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N57',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403266',
            from: 'afrit Oudenhoorn',
            fromLoc: {
              lat: 51.86146,
              lon: 4.15723,
            },
            to: 'afrit Brielle',
            toLoc: {
              lat: 51.89017,
              lon: 4.19675,
            },
            location: 'N57 Brouwersdam - Rotterdam',
            segStart: 'Brouwersdam',
            segEnd: 'Rotterdam',
            start: '2019-03-28T06:25:30',
            startDate: '28 maart 2019 07:25 uur',
            delay: 540,
            distance: 2200,
            reason: '',
            description: 'Tussen afrit Oudenhoorn en afrit Brielle. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N201',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403321',
            from: 'Vreeland',
            fromLoc: {
              lat: 52.22779,
              lon: 5.02877,
            },
            to: 'de aansluiting met de A2',
            toLoc: {
              lat: 52.2234,
              lon: 4.98558,
            },
            location: 'N201 Hilversum - Uithoorn',
            segStart: 'Hilversum',
            segEnd: 'Uithoorn',
            start: '2019-03-28T06:22:00',
            startDate: '28 maart 2019 07:22 uur',
            delay: 360,
            distance: 2100,
            reason: '',
            description: 'Tussen Vreeland en de aansluiting met de A2. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N207',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403418',
            from: 'Alphen a/d Rijn-Centrum',
            fromLoc: {
              lat: 52.1208,
              lon: 4.67688,
            },
            to: 'Aarlanderveen',
            toLoc: {
              lat: 52.13601,
              lon: 4.69265,
            },
            location: 'N207 Bergambacht - Alphen a/d Rijn',
            segStart: 'Bergambacht',
            segEnd: 'Alphen a/d Rijn',
            start: '2019-03-28T06:49:00',
            startDate: '28 maart 2019 07:49 uur',
            delay: 180,
            distance: 2100,
            reason: '',
            description: 'Tussen Alphen a/d Rijn-Centrum en Aarlanderveen. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N219',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403362',
            from: 'de aansluiting met de A12',
            fromLoc: {
              lat: 52.02045,
              lon: 4.60973,
            },
            to: 'de aansluiting met de A20',
            toLoc: {
              lat: 51.97992,
              lon: 4.61854,
            },
            location: 'N219 Zevenhuizen - Capelle a/d IJssel',
            segStart: 'Zevenhuizen',
            segEnd: 'Capelle a/d IJssel',
            start: '2019-03-28T06:46:00',
            startDate: '28 maart 2019 07:46 uur',
            delay: 240,
            distance: 2400,
            reason: '',
            description: 'Tussen de aansluiting met de A12 en de aansluiting met de A20. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N230',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403259',
            from: 'Overvecht',
            fromLoc: {
              lat: 52.12254,
              lon: 5.11654,
            },
            to: 'de aansluiting met de A2',
            toLoc: {
              lat: 52.11804,
              lon: 5.03359,
            },
            location: 'N230 Utrecht - Maarssen',
            segStart: 'Utrecht',
            segEnd: 'Maarssen',
            start: '2019-03-28T06:14:30',
            startDate: '28 maart 2019 07:14 uur',
            delay: 660,
            distance: 3900,
            reason: '',
            description: 'Tussen Overvecht en de aansluiting met de A2. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N233',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403258',
            from: 'de aansluiting met de A15',
            fromLoc: {
              lat: 51.92015,
              lon: 5.57161,
            },
            to: 'Rhenen',
            toLoc: {
              lat: 51.95588,
              lon: 5.57732,
            },
            location: 'N233 Kesteren - Veenendaal',
            segStart: 'Kesteren',
            segEnd: 'Veenendaal',
            start: '2019-03-28T06:08:00',
            startDate: '28 maart 2019 07:08 uur',
            delay: 720,
            distance: 3600,
            reason: '',
            description: 'Tussen de aansluiting met de A15 en Rhenen. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N242',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403337',
            from: 'Ring Alkmaar',
            fromLoc: {
              lat: 52.64051,
              lon: 4.79173,
            },
            to: 'Industrieterrein Boekelermeer',
            toLoc: {
              lat: 52.61684,
              lon: 4.7597,
            },
            location: 'N242 Middenmeer - Alkmaar',
            segStart: 'Middenmeer',
            segEnd: 'Alkmaar',
            start: '2019-03-28T05:10:30',
            startDate: '28 maart 2019 06:10 uur',
            delay: 180,
            distance: 2800,
            reason: '',
            description: 'Tussen Ring Alkmaar en Industrieterrein Boekelermeer. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N247',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403273',
            from: 'Purmerend',
            fromLoc: {
              lat: 52.5033,
              lon: 5.04007,
            },
            to: 'Broek in Waterland',
            toLoc: {
              lat: 52.43398,
              lon: 4.99835,
            },
            location: 'N247 Hoorn - Amsterdam',
            segStart: 'Hoorn',
            segEnd: 'Amsterdam',
            start: '2019-03-28T06:14:30',
            startDate: '28 maart 2019 07:14 uur',
            delay: 480,
            distance: 2900,
            reason: '',
            description: 'Tussen Purmerend en Broek in Waterland. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N270',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403365',
            from: 'Deurne-Noord',
            fromLoc: {
              lat: 51.47195,
              lon: 5.80356,
            },
            to: 'de aansluiting met de N279',
            toLoc: {
              lat: 51.47095,
              lon: 5.71621,
            },
            location: 'N270 Deurne - Helmond',
            segStart: 'Deurne',
            segEnd: 'Helmond',
            start: '2019-03-28T06:42:30',
            startDate: '28 maart 2019 07:42 uur',
            delay: 180,
            distance: 3200,
            reason: '',
            description: 'Tussen Deurne-Noord en de aansluiting met de N279. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N279',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403311',
            from: 'Beek en Donk',
            fromLoc: {
              lat: 51.53722,
              lon: 5.65875,
            },
            to: 'Veghel',
            toLoc: {
              lat: 51.60915,
              lon: 5.53139,
            },
            location: "N279 Roermond - 's-Hertogenbosch",
            segStart: 'Roermond',
            segEnd: "'s-Hertogenbosch",
            start: '2019-03-28T06:24:30',
            startDate: '28 maart 2019 07:24 uur',
            delay: 360,
            distance: 3300,
            reason: '',
            description: 'Tussen Beek en Donk en Veghel. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N280',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403281',
            from: 'Horn',
            fromLoc: {
              lat: 51.21013,
              lon: 5.91308,
            },
            to: 'Hatenboer',
            toLoc: {
              lat: 51.19964,
              lon: 5.97424,
            },
            location: 'N280 Weert - Duitse grens',
            segStart: 'Weert',
            segEnd: 'Duitse grens',
            start: '2019-03-28T06:14:30',
            startDate: '28 maart 2019 07:14 uur',
            delay: 420,
            distance: 2100,
            reason: '',
            description: 'Tussen Horn en Hatenboer. ',
            events: [
              {
                alertC: '101',
                text: 'Stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N322',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403329',
            from: 'de aansluiting met de N329',
            fromLoc: {
              lat: 51.8674,
              lon: 5.58418,
            },
            to: 'Ewijk',
            toLoc: {
              lat: 51.86004,
              lon: 5.70575,
            },
            location: 'N322 Beneden-Leeuwen - Nijmegen',
            segStart: 'Beneden-Leeuwen',
            segEnd: 'Nijmegen',
            start: '2019-03-28T06:16:30',
            startDate: '28 maart 2019 07:16 uur',
            delay: 240,
            distance: 2900,
            reason: '',
            description: 'Tussen de aansluiting met de N329 en Ewijk. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N325',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403342',
            from: 'het Gelredome',
            fromLoc: {
              lat: 51.95989,
              lon: 5.90223,
            },
            to: 'Westervoort',
            toLoc: {
              lat: 51.97036,
              lon: 5.95407,
            },
            location: 'N325 Nijmegen - knp. Velperbroek',
            segStart: 'Nijmegen',
            segEnd: 'knp. Velperbroek',
            start: '2019-03-28T06:19:00',
            startDate: '28 maart 2019 07:19 uur',
            delay: 180,
            distance: 2000,
            reason: '',
            description: 'Tussen het Gelredome en Westervoort. ',
            events: [
              {
                alertC: '115',
                text: 'Langzaam rijdend verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N366',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403319',
            from: 'Oude Pekela',
            fromLoc: {
              lat: 53.08719,
              lon: 6.96394,
            },
            to: 'Veendam',
            toLoc: {
              lat: 53.09838,
              lon: 6.89731,
            },
            location: 'N366 Ter Apel - Veendam',
            segStart: 'Ter Apel',
            segEnd: 'Veendam',
            start: '2019-03-28T06:12:30',
            startDate: '28 maart 2019 07:12 uur',
            delay: 240,
            distance: 2600,
            reason: '',
            description: 'Tussen Oude Pekela en Veendam. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N397',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403344',
            from: 'Walik/Bergeijk',
            fromLoc: {
              lat: 51.33775,
              lon: 5.36568,
            },
            to: 'de aansluiting met de A67',
            toLoc: {
              lat: 51.36699,
              lon: 5.32686,
            },
            location: 'N397 Valkenswaard - Eersel',
            segStart: 'Valkenswaard',
            segEnd: 'Eersel',
            start: '2019-03-28T06:30:00',
            startDate: '28 maart 2019 07:30 uur',
            delay: 240,
            distance: 2600,
            reason: '',
            description: 'Tussen Walik/Bergeijk en de aansluiting met de A67. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
      {
        road: 'N417',
        roadType: 'nWegen',
        trafficJams: [
          {
            msgNr: '173403255',
            from: 'Maartensdijk',
            fromLoc: {
              lat: 52.15848,
              lon: 5.16481,
            },
            to: 'Maarssen/Utrecht',
            toLoc: {
              lat: 52.11901,
              lon: 5.14024,
            },
            location: 'N417 Hilversum - Groenekan',
            segStart: 'Hilversum',
            segEnd: 'Groenekan',
            start: '2019-03-28T06:16:00',
            startDate: '28 maart 2019 07:16 uur',
            delay: 780,
            distance: 3900,
            reason: '',
            description: 'Tussen Maartensdijk en Maarssen/Utrecht. ',
            events: [
              {
                alertC: '108',
                text: 'Langzaam rijdend tot stilstaand verkeer',
              },
            ],
          },
        ],
      },
    ],
  },
  roadWorks: {
    total: 16,
    roadEntries: [
      {
        road: 'A6',
        roadType: 'aWegen',
        roadWorks: [
          {
            msgNr: '173271711',
            from: 'afrit Swifterbant',
            fromLoc: {
              lat: 52.60731,
              lon: 5.63573,
            },
            to: 'afrit Swifterbant',
            toLoc: {
              lat: 52.60731,
              lon: 5.63573,
            },
            location: 'A6 Lelystad richting Emmeloord',
            segStart: 'Lelystad',
            segEnd: 'Emmeloord',
            start: '2019-03-28T19:00:00',
            startDate: '28 maart 2019 20:00 uur',
            stop: '2019-03-29T04:00:00',
            stopDate: '29 maart 2019 05:00 uur',
            reason: 'De oprit is dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            description:
              'Bij afrit Swifterbant. De oprit is dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            events: [
              {
                alertC: '406',
                text: 'De oprit is dicht',
              },
            ],
          },
          {
            msgNr: '173271930',
            from: 'Almere-Stad',
            fromLoc: {
              lat: 52.35532,
              lon: 5.25606,
            },
            to: 'Almere-Stad',
            toLoc: {
              lat: 52.35532,
              lon: 5.25606,
            },
            location: 'A6 Muiden richting Lelystad',
            segStart: 'Muiden',
            segEnd: 'Lelystad',
            start: '2019-03-28T19:00:00',
            startDate: '28 maart 2019 20:00 uur',
            stop: '2019-03-29T04:00:00',
            stopDate: '29 maart 2019 05:00 uur',
            reason: 'De oprit is dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            description: 'Bij Almere-Stad. De oprit is dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            events: [
              {
                alertC: '406',
                text: 'De oprit is dicht',
              },
            ],
          },
          {
            msgNr: '173270646',
            from: 'afrit Swifterbant',
            fromLoc: {
              lat: 52.60731,
              lon: 5.63573,
            },
            to: 'afrit Swifterbant',
            toLoc: {
              lat: 52.60731,
              lon: 5.63573,
            },
            location: 'A6 Emmeloord richting Lelystad',
            segStart: 'Emmeloord',
            segEnd: 'Lelystad',
            start: '2019-03-28T19:00:00',
            startDate: '28 maart 2019 20:00 uur',
            stop: '2019-03-29T04:00:00',
            stopDate: '29 maart 2019 05:00 uur',
            reason: 'De afrit is dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            description:
              'Bij afrit Swifterbant. De afrit is dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            events: [
              {
                alertC: '407',
                text: 'De afrit is dicht',
              },
            ],
          },
          {
            msgNr: '173055160',
            from: 'Almere-Buiten',
            fromLoc: {
              lat: 52.3887,
              lon: 5.31816,
            },
            to: 'Almere-Buiten',
            toLoc: {
              lat: 52.3887,
              lon: 5.31816,
            },
            location: 'A6 Lelystad richting Muiden',
            segStart: 'Lelystad',
            segEnd: 'Muiden',
            start: '2019-03-27T19:00:00',
            startDate: '27 maart 2019 20:00 uur',
            stop: '2019-03-29T04:00:00',
            stopDate: '29 maart 2019 05:00 uur',
            reason: 'Oprit dicht. Van 27 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            description: 'Bij Almere-Buiten. Oprit dicht. Van 27 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            events: [
              {
                alertC: '471',
                text: 'Oprit dicht',
              },
            ],
          },
        ],
      },
      {
        road: 'A9',
        roadType: 'aWegen',
        roadWorks: [
          {
            msgNr: '173272834',
            from: 'afrit Haarlem-Zuid',
            fromLoc: {
              lat: 52.37293,
              lon: 4.71035,
            },
            to: 'afrit Haarlem-Zuid',
            toLoc: {
              lat: 52.37293,
              lon: 4.71035,
            },
            location: 'A9 Amstelveen richting Alkmaar',
            segStart: 'Amstelveen',
            segEnd: 'Alkmaar',
            start: '2019-03-28T22:00:00',
            startDate: '28 maart 2019 23:00 uur',
            stop: '2019-03-29T04:00:00',
            stopDate: '29 maart 2019 05:00 uur',
            reason: 'De afrit is dicht. Van 28 maart 2019 23:00 uur tot 29 maart 2019 05:00 uur.',
            description:
              'Bij afrit Haarlem-Zuid. De afrit is dicht. Van 28 maart 2019 23:00 uur tot 29 maart 2019 05:00 uur.',
            events: [
              {
                alertC: '407',
                text: 'De afrit is dicht',
              },
            ],
          },
        ],
      },
      {
        road: 'A12',
        roadType: 'aWegen',
        roadWorks: [
          {
            msgNr: '173273610',
            from: 'Den Haag-Centrum',
            fromLoc: {
              lat: 52.07771,
              lon: 4.3355,
            },
            to: 'Den Haag-Centrum',
            toLoc: {
              lat: 52.07771,
              lon: 4.3355,
            },
            location: 'A12 Den Haag richting Utrecht',
            segStart: 'Den Haag',
            segEnd: 'Utrecht',
            start: '2019-03-28T20:00:00',
            startDate: '28 maart 2019 21:00 uur',
            stop: '2019-03-29T05:00:00',
            stopDate: '29 maart 2019 06:00 uur',
            reason: 'De afrit is dicht. Van 28 maart 2019 21:00 uur tot 29 maart 2019 06:00 uur.',
            description:
              'Bij Den Haag-Centrum. De afrit is dicht. Van 28 maart 2019 21:00 uur tot 29 maart 2019 06:00 uur.',
            events: [
              {
                alertC: '407',
                text: 'De afrit is dicht',
              },
            ],
          },
        ],
      },
      {
        road: 'A15',
        roadType: 'aWegen',
        roadWorks: [
          {
            msgNr: '173273909a',
            from: 'de Botlektunnel',
            fromLoc: {
              lat: 51.87055,
              lon: 4.33089,
            },
            to: 'de Botlektunnel',
            toLoc: {
              lat: 51.87055,
              lon: 4.33089,
            },
            location: 'A15 Europoort richting Rotterdam',
            segStart: 'Europoort',
            segEnd: 'Rotterdam',
            start: '2019-03-28T19:00:00',
            startDate: '28 maart 2019 20:00 uur',
            stop: '2019-03-29T04:00:00',
            stopDate: '29 maart 2019 05:00 uur',
            reason: 'Dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            description: 'Bij de Botlektunnel. Dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            events: [
              {
                alertC: '401',
                text: 'Dicht',
              },
            ],
          },
          {
            msgNr: '173273909b',
            from: 'de Botlektunnel',
            fromLoc: {
              lat: 51.87055,
              lon: 4.33089,
            },
            to: 'de Botlektunnel',
            toLoc: {
              lat: 51.87055,
              lon: 4.33089,
            },
            location: 'A15 Rotterdam richting Europoort',
            segStart: 'Rotterdam',
            segEnd: 'Europoort',
            start: '2019-03-28T19:00:00',
            startDate: '28 maart 2019 20:00 uur',
            stop: '2019-03-29T04:00:00',
            stopDate: '29 maart 2019 05:00 uur',
            reason: 'Dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            description: 'Bij de Botlektunnel. Dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            events: [
              {
                alertC: '401',
                text: 'Dicht',
              },
            ],
          },
        ],
      },
      {
        road: 'A27',
        roadType: 'aWegen',
        roadWorks: [
          {
            msgNr: '173276319',
            from: 'knp. Gorinchem',
            fromLoc: {
              lat: 51.84609,
              lon: 4.95048,
            },
            to: 'knp. Gorinchem',
            toLoc: {
              lat: 51.84609,
              lon: 4.95048,
            },
            location: 'A27 Breda richting Gorinchem',
            segStart: 'Breda',
            segEnd: 'Gorinchem',
            start: '2019-03-28T22:00:00',
            startDate: '28 maart 2019 23:00 uur',
            stop: '2019-03-29T04:00:00',
            stopDate: '29 maart 2019 05:00 uur',
            reason: 'De afrit is dicht. Van 28 maart 2019 23:00 uur tot 29 maart 2019 05:00 uur.',
            description:
              'Bij knp. Gorinchem. De afrit is dicht. Van 28 maart 2019 23:00 uur tot 29 maart 2019 05:00 uur.',
            events: [
              {
                alertC: '407',
                text: 'De afrit is dicht',
              },
            ],
          },
          {
            msgNr: '173275693',
            from: 'Hank',
            fromLoc: {
              lat: 51.73558,
              lon: 4.90803,
            },
            to: 'Hank',
            toLoc: {
              lat: 51.73558,
              lon: 4.90803,
            },
            location: 'A27 Breda richting Gorinchem',
            segStart: 'Breda',
            segEnd: 'Gorinchem',
            start: '2019-03-28T22:00:00',
            startDate: '28 maart 2019 23:00 uur',
            stop: '2019-03-29T04:00:00',
            stopDate: '29 maart 2019 05:00 uur',
            reason: 'De afrit is dicht. Van 28 maart 2019 23:00 uur tot 29 maart 2019 05:00 uur.',
            description: 'Bij Hank. De afrit is dicht. Van 28 maart 2019 23:00 uur tot 29 maart 2019 05:00 uur.',
            events: [
              {
                alertC: '407',
                text: 'De afrit is dicht',
              },
            ],
          },
        ],
      },
      {
        road: 'A35',
        roadType: 'aWegen',
        roadWorks: [
          {
            msgNr: '173296486',
            from: 'Delden',
            fromLoc: {
              lat: 52.26597,
              lon: 6.75066,
            },
            to: 'Delden',
            toLoc: {
              lat: 52.26597,
              lon: 6.75066,
            },
            location: 'A35 Enschede richting Almelo',
            segStart: 'Enschede',
            segEnd: 'Almelo',
            start: '2019-03-28T19:00:00',
            startDate: '28 maart 2019 20:00 uur',
            stop: '2019-03-29T04:00:00',
            stopDate: '29 maart 2019 05:00 uur',
            reason: 'De op- en afrit is dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            description:
              'Bij Delden. De op- en afrit is dicht. Van 28 maart 2019 20:00 uur tot 29 maart 2019 05:00 uur.',
            events: [
              {
                alertC: '408',
                text: 'De op- en afrit is dicht',
              },
            ],
          },
        ],
      },
      {
        road: 'A65',
        roadType: 'aWegen',
        roadWorks: [
          {
            msgNr: '169044771',
            from: 'knp. Vught',
            fromLoc: {
              lat: 51.66996,
              lon: 5.3147,
            },
            to: 'Udenhout/Oisterwijk',
            toLoc: {
              lat: 51.59304,
              lon: 5.17156,
            },
            location: "A65 's-Hertogenbosch richting Tilburg",
            segStart: "'s-Hertogenbosch",
            segEnd: 'Tilburg',
            start: '2019-03-29T20:00:00',
            startDate: '29 maart 2019 21:00 uur',
            stop: '2019-03-30T11:00:00',
            stopDate: '30 maart 2019 12:00 uur',
            reason: 'Dicht. Van 29 maart 2019 21:00 uur tot 30 maart 2019 12:00 uur.',
            description:
              'Tussen knp. Vught en Udenhout/Oisterwijk. Dicht. Van 29 maart 2019 21:00 uur tot 30 maart 2019 12:00 uur.',
            events: [
              {
                alertC: '401',
                text: 'Dicht',
              },
            ],
          },
        ],
      },
      {
        road: 'A76',
        roadType: 'aWegen',
        roadWorks: [
          {
            msgNr: '163860898',
            from: 'Spaubeek',
            fromLoc: {
              lat: 50.94644,
              lon: 5.83868,
            },
            to: 'Nuth',
            toLoc: {
              lat: 50.92306,
              lon: 5.88896,
            },
            location: 'A76 Geleen richting Heerlen',
            segStart: 'Geleen',
            segEnd: 'Heerlen',
            start: '2018-09-25T03:30:00',
            startDate: '25 september 2018 05:30 uur',
            stop: '2019-06-15T19:00:00',
            stopDate: '15 juni 2019 21:00 uur',
            reason: 'Wegwerkzaamheden. Van 25 september 2018 05:30 uur tot 15 juni 2019 21:00 uur.',
            description:
              'Tussen Spaubeek en Nuth. Wegwerkzaamheden. Van 25 september 2018 05:30 uur tot 15 juni 2019 21:00 uur.',
            events: [
              {
                alertC: '701',
                text: 'Wegwerkzaamheden',
              },
            ],
          },
          {
            msgNr: '163860757',
            from: 'Nuth',
            fromLoc: {
              lat: 50.92306,
              lon: 5.88896,
            },
            to: 'Spaubeek',
            toLoc: {
              lat: 50.94644,
              lon: 5.83868,
            },
            location: 'A76 Heerlen richting Geleen',
            segStart: 'Heerlen',
            segEnd: 'Geleen',
            start: '2018-09-25T03:30:00',
            startDate: '25 september 2018 05:30 uur',
            stop: '2019-06-15T19:00:00',
            stopDate: '15 juni 2019 21:00 uur',
            reason: 'Wegwerkzaamheden. Van 25 september 2018 05:30 uur tot 15 juni 2019 21:00 uur.',
            description:
              'Tussen Nuth en Spaubeek. Wegwerkzaamheden. Van 25 september 2018 05:30 uur tot 15 juni 2019 21:00 uur.',
            events: [
              {
                alertC: '701',
                text: 'Wegwerkzaamheden',
              },
            ],
          },
        ],
      },
      {
        road: 'N325',
        roadType: 'nWegen',
        roadWorks: [
          {
            msgNr: '172423308a',
            from: 'de Waalbrug bij Nijmegen',
            fromLoc: {
              lat: 51.85127,
              lon: 5.87127,
            },
            to: 'de Waalbrug bij Nijmegen',
            toLoc: {
              lat: 51.85127,
              lon: 5.87127,
            },
            location: 'N325 Duitse grens - Nijmegen',
            segStart: 'Duitse grens',
            segEnd: 'Nijmegen',
            start: '2019-03-22T05:00:00',
            startDate: '22 maart 2019 06:00 uur',
            stop: '2019-09-30T04:00:00',
            stopDate: '30 september 2019 06:00 uur',
            reason: 'Wegwerkzaamheden. Van 22 maart 2019 06:00 uur tot 30 september 2019 06:00 uur.',
            description:
              'Bij de Waalbrug bij Nijmegen. Wegwerkzaamheden. Van 22 maart 2019 06:00 uur tot 30 september 2019 06:00 uur.',
            events: [
              {
                alertC: '701',
                text: 'Wegwerkzaamheden',
              },
            ],
          },
          {
            msgNr: '172423308b',
            from: 'de Waalbrug bij Nijmegen',
            fromLoc: {
              lat: 51.85127,
              lon: 5.87127,
            },
            to: 'de Waalbrug bij Nijmegen',
            toLoc: {
              lat: 51.85127,
              lon: 5.87127,
            },
            location: 'N325 Nijmegen - Duitse grens',
            segStart: 'Nijmegen',
            segEnd: 'Duitse grens',
            start: '2019-03-22T05:00:00',
            startDate: '22 maart 2019 06:00 uur',
            stop: '2019-09-30T04:00:00',
            stopDate: '30 september 2019 06:00 uur',
            reason: 'Wegwerkzaamheden. Van 22 maart 2019 06:00 uur tot 30 september 2019 06:00 uur.',
            description:
              'Bij de Waalbrug bij Nijmegen. Wegwerkzaamheden. Van 22 maart 2019 06:00 uur tot 30 september 2019 06:00 uur.',
            events: [
              {
                alertC: '701',
                text: 'Wegwerkzaamheden',
              },
            ],
          },
        ],
      },
    ],
  },
};

export default TrafficMock;
