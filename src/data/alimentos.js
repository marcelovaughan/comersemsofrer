const alimentos = {
  "Arroz, integral, cozido": {
    "energia": "124",
    "proteina": "2.6",
    "gordura": "1.0",
    "carboidrato": "25.8"
  },
  "Arroz, integral, cru": {
    "energia": "360",
    "proteina": "7.3",
    "gordura": "1.9",
    "carboidrato": "77.5"
  },
  "Arroz Parboilizado Tipo 1, cozido": {
    "energia": "128",
    "proteina": "2.5",
    "gordura": "0.2",
    "carboidrato": "28.1"
  },
  "Arroz, tipo 1, cru": {
    "energia": "358",
    "proteina": "7.2",
    "gordura": "0.3",
    "carboidrato": "78.8"
  },
  "Arroz, tipo 2, cozido": {
    "energia": "130",
    "proteina": "2.6",
    "gordura": "0.4",
    "carboidrato": "28.2"
  },
  "Arroz, tipo 2, cru": {
    "energia": "358",
    "proteina": "7.2",
    "gordura": "0.3",
    "carboidrato": "78.9"
  },
  "Aveia, flocos, crua": {
    "energia": "394",
    "proteina": "13.9",
    "gordura": "8.5",
    "carboidrato": "66.6"
  },
  "Biscoito, doce, maisena": {
    "energia": "443",
    "proteina": "8.1",
    "gordura": "12.0",
    "carboidrato": "75.2"
  },
  "Biscoito, doce, recheado com chocolate": {
    "energia": "472",
    "proteina": "6.4",
    "gordura": "19.6",
    "carboidrato": "70.5"
  },
  "Biscoito, doce, recheado com morango": {
    "energia": "471",
    "proteina": "5.7",
    "gordura": "19.6",
    "carboidrato": "71.0"
  },
  "Biscoito, doce, wafer, recheado de chocolate": {
    "energia": "502",
    "proteina": "5.6",
    "gordura": "24.7",
    "carboidrato": "67.5"
  },
  "Biscoito, doce, wafer, recheado de morango": {
    "energia": "513",
    "proteina": "4.5",
    "gordura": "26.4",
    "carboidrato": "67.4"
  },
  "Biscoito, salgado, cream cracker": {
    "energia": "432",
    "proteina": "10.1",
    "gordura": "14.4",
    "carboidrato": "68.7"
  },
  "Bolo, mistura para": {
    "energia": "419",
    "proteina": "6.2",
    "gordura": "6.1",
    "carboidrato": "84.7"
  },
  "Bolo, pronto, aipim": {
    "energia": "324",
    "proteina": "4.4",
    "gordura": "12.7",
    "carboidrato": "47.9"
  },
  "Bolo, pronto, chocolate": {
    "energia": "410",
    "proteina": "6.2",
    "gordura": "18.5",
    "carboidrato": "54.7"
  },
  "Bolo, pronto, coco": {
    "energia": "333",
    "proteina": "5.7",
    "gordura": "11.3",
    "carboidrato": "52.3"
  },
  "Bolo, pronto, milho": {
    "energia": "311",
    "proteina": "4.8",
    "gordura": "12.4",
    "carboidrato": "45.1"
  },
  "Canjica, branca, crua": {
    "energia": "358",
    "proteina": "7.2",
    "gordura": "1.0",
    "carboidrato": "78.1"
  },
  "Canjica, com leite integral": {
    "energia": "112",
    "proteina": "2.4",
    "gordura": "1.2",
    "carboidrato": "23.6"
  },
  "Cereais, milho, flocos, com sal": {
    "energia": "370",
    "proteina": "7.3",
    "gordura": "1.6",
    "carboidrato": "80.8"
  },
  "Cereais, milho, flocos, sem sal": {
    "energia": "363",
    "proteina": "6.9",
    "gordura": "1.2",
    "carboidrato": "80.4"
  },
  "Cereais, mingau, milho, infantil": {
    "energia": "394",
    "proteina": "6.4",
    "gordura": "1.1",
    "carboidrato": "87.3"
  },
  "Cereais, mistura para vitamina, trigo, cevada e aveia": {
    "energia": "381",
    "proteina": "8.9",
    "gordura": "2.1",
    "carboidrato": "81.6"
  },
  "Cereal matinal, milho": {
    "energia": "365",
    "proteina": "7.2",
    "gordura": "1.0",
    "carboidrato": "83.8"
  },
  "Cereal matinal, milho, açúcar": {
    "energia": "377",
    "proteina": "4.7",
    "gordura": "0.7",
    "carboidrato": "88.8"
  },
  "Creme de arroz, pó": {
    "energia": "386",
    "proteina": "7.0",
    "gordura": "1.2",
    "carboidrato": "83.9"
  },
  "Creme de milho, pó": {
    "energia": "333",
    "proteina": "4.8",
    "gordura": "1.6",
    "carboidrato": "86.1"
  },
  "Curau, milho verde": {
    "energia": "78",
    "proteina": "2.4",
    "gordura": "1.6",
    "carboidrato": "13.9"
  },
  "Curau, milho verde, mistura para": {
    "energia": "402",
    "proteina": "2.2",
    "gordura": "13.4",
    "carboidrato": "79.8"
  },
  "Farinha, de arroz, enriquecida": {
    "energia": "363",
    "proteina": "1.3",
    "gordura": "0.3",
    "carboidrato": "85.5"
  },
  "Farinha, de centeio, integral": {
    "energia": "336",
    "proteina": "12.5",
    "gordura": "1.8",
    "carboidrato": "73.3"
  },
  "Farinha, de milho, amarela": {
    "energia": "351",
    "proteina": "7.2",
    "gordura": "1.5",
    "carboidrato": "79.1"
  },
  "Farinha, de rosca": {
    "energia": "371",
    "proteina": "11.4",
    "gordura": "1.5",
    "carboidrato": "75.8"
  },
  "Farinha, de trigo": {
    "energia": "360",
    "proteina": "9.8",
    "gordura": "1.4",
    "carboidrato": "75.1"
  },
  "Farinha, láctea, de cereais": {
    "energia": "415",
    "proteina": "11.9",
    "gordura": "5.8",
    "carboidrato": "77.8"
  },
  "Lasanha, massa fresca, cozida": {
    "energia": "164",
    "proteina": "5.8",
    "gordura": "1.2",
    "carboidrato": "32.5"
  },
  "Lasanha, massa fresca, crua": {
    "energia": "220",
    "proteina": "7.0",
    "gordura": "1.3",
    "carboidrato": "45.1"
  },
  "Macarrão, instantâneo": {
    "energia": "436",
    "proteina": "8.8",
    "gordura": "17.2",
    "carboidrato": "62.4"
  },
  "Macarrão, trigo, cru": {
    "energia": "371",
    "proteina": "10.0",
    "gordura": "1.3",
    "carboidrato": "77.9"
  },
  "Macarrão, trigo, cru, com ovos": {
    "energia": "371",
    "proteina": "10.3",
    "gordura": "2.0",
    "carboidrato": "76.6"
  },
  "Milho, amido, cru": {
    "energia": "361",
    "proteina": "0.6",
    "gordura": "Tr",
    "carboidrato": "87.1"
  },
  "Milho, fubá, cru": {
    "energia": "353",
    "proteina": "7.2",
    "gordura": "1.9",
    "carboidrato": "78.9"
  },
  "Milho, verde, cru": {
    "energia": "138",
    "proteina": "6.6",
    "gordura": "0.6",
    "carboidrato": "28.6"
  },
  "Milho, verde, enlatado, drenado": {
    "energia": "98",
    "proteina": "3.2",
    "gordura": "2.4",
    "carboidrato": "17.1"
  },
  "Mingau tradicional, pó": {
    "energia": "373",
    "proteina": "0.6",
    "gordura": "0.4",
    "carboidrato": "89.3"
  },
  "Pamonha, barra para cozimento, pré-cozida": {
    "energia": "171",
    "proteina": "2.6",
    "gordura": "4.8",
    "carboidrato": "30.7"
  },
  "Pão, aveia, forma": {
    "energia": "343",
    "proteina": "12.4",
    "gordura": "5.7",
    "carboidrato": "59.6"
  },
  "Pão, de soja": {
    "energia": "309",
    "proteina": "11.3",
    "gordura": "3.6",
    "carboidrato": "56.5"
  },
  "Pão, glúten, forma": {
    "energia": "253",
    "proteina": "12.0",
    "gordura": "2.7",
    "carboidrato": "44.1"
  },
  "Pão, milho, forma": {
    "energia": "292",
    "proteina": "8.3",
    "gordura": "3.1",
    "carboidrato": "56.4"
  },
  "Pão, trigo, forma, integral": {
    "energia": "253",
    "proteina": "9.4",
    "gordura": "3.7",
    "carboidrato": "49.9"
  },
  "Pão, trigo, francês": {
    "energia": "300",
    "proteina": "8.0",
    "gordura": "3.1",
    "carboidrato": "58.6"
  },
  "Pão, trigo, sovado": {
    "energia": "311",
    "proteina": "8.4",
    "gordura": "2.8",
    "carboidrato": "61.5"
  },
  "Pastel, de carne, cru": {
    "energia": "289",
    "proteina": "10.7",
    "gordura": "8.8",
    "carboidrato": "42.0"
  },
  "Pastel, de carne, frito": {
    "energia": "388",
    "proteina": "10.1",
    "gordura": "20.1",
    "carboidrato": "43.8"
  },
  "Pastel, de queijo, cru": {
    "energia": "308",
    "proteina": "9.9",
    "gordura": "9.6",
    "carboidrato": "45.9"
  },
  "Pastel, de queijo, frito": {
    "energia": "422",
    "proteina": "8.7",
    "gordura": "22.7",
    "carboidrato": "48.1"
  },
  "Pastel, massa, crua": {
    "energia": "310",
    "proteina": "6.9",
    "gordura": "5.5",
    "carboidrato": "57.4"
  },
  "Pastel, massa, frita": {
    "energia": "570",
    "proteina": "6.0",
    "gordura": "40.9",
    "carboidrato": "49.3"
  },
  "Pipoca, com óleo de soja, sem sal": {
    "energia": "448",
    "proteina": "9.9",
    "gordura": "15.9",
    "carboidrato": "70.3"
  },
  "Polenta, pré-cozida": {
    "energia": "103",
    "proteina": "2.3",
    "gordura": "0.3",
    "carboidrato": "23.3"
  },
  "Torrada, pão francês": {
    "energia": "377",
    "proteina": "10.5",
    "gordura": "3.3",
    "carboidrato": "74.6"
  },
  "Abóbora, cabotian, cozida": {
    "energia": "48",
    "proteina": "1.4",
    "gordura": "0.7",
    "carboidrato": "10.8"
  },
  "Abóbora, cabotian, crua": {
    "energia": "39",
    "proteina": "1.7",
    "gordura": "0.5",
    "carboidrato": "8.4"
  },
  "Abóbora, menina brasileira, crua": {
    "energia": "14",
    "proteina": "0.6",
    "gordura": "Tr",
    "carboidrato": "3.3"
  },
  "Abóbora, moranga, crua": {
    "energia": "12",
    "proteina": "1.0",
    "gordura": "0.1",
    "carboidrato": "2.7"
  },
  "Abóbora, moranga, refogada": {
    "energia": "29",
    "proteina": "0.4",
    "gordura": "0.8",
    "carboidrato": "6.0"
  },
  "Abóbora, pescoço, crua": {
    "energia": "24",
    "proteina": "0.7",
    "gordura": "0.1",
    "carboidrato": "6.1"
  },
  "Abobrinha, italiana, cozida": {
    "energia": "15",
    "proteina": "1.1",
    "gordura": "0.2",
    "carboidrato": "3.0"
  },
  "Abobrinha, italiana, crua": {
    "energia": "19",
    "proteina": "1.1",
    "gordura": "0.1",
    "carboidrato": "4.3"
  },
  "Abobrinha, italiana, refogada": {
    "energia": "24",
    "proteina": "1.1",
    "gordura": "0.8",
    "carboidrato": "4.2"
  },
  "Abobrinha, paulista, crua": {
    "energia": "31",
    "proteina": "0.6",
    "gordura": "0.1",
    "carboidrato": "7.9"
  },
  "Acelga, crua": {
    "energia": "21",
    "proteina": "1.4",
    "gordura": "0.1",
    "carboidrato": "4.6"
  },
  "Agrião, cru": {
    "energia": "17",
    "proteina": "2.7",
    "gordura": "0.2",
    "carboidrato": "2.3"
  },
  "Aipo, cru": {
    "energia": "19",
    "proteina": "0.8",
    "gordura": "0.1",
    "carboidrato": "4.3"
  },
  "Alface, americana, crua": {
    "energia": "9",
    "proteina": "0.6",
    "gordura": "0.1",
    "carboidrato": "1.7"
  },
  "Alface, crespa, crua": {
    "energia": "11",
    "proteina": "1.3",
    "gordura": "0.2",
    "carboidrato": "1.7"
  },
  "Alface, lisa, crua": {
    "energia": "14",
    "proteina": "1.7",
    "gordura": "0.1",
    "carboidrato": "2.4"
  },
  "Alface, roxa, crua": {
    "energia": "13",
    "proteina": "0.9",
    "gordura": "0.2",
    "carboidrato": "2.5"
  },
  "Alfavaca, crua": {
    "energia": "29",
    "proteina": "2.7",
    "gordura": "0.5",
    "carboidrato": "5.2"
  },
  "Alho, cru": {
    "energia": "113",
    "proteina": "7.0",
    "gordura": "0.2",
    "carboidrato": "23.9"
  },
  "Alho-poró, cru": {
    "energia": "32",
    "proteina": "1.4",
    "gordura": "0.1",
    "carboidrato": "6.9"
  },
  "Almeirão, cru": {
    "energia": "18",
    "proteina": "1.8",
    "gordura": "0.2",
    "carboidrato": "3.3"
  },
  "Almeirão, refogado": {
    "energia": "65",
    "proteina": "1.7",
    "gordura": "4.8",
    "carboidrato": "5.7"
  },
  "Batata, baroa, cozida": {
    "energia": "80",
    "proteina": "0.9",
    "gordura": "0.2",
    "carboidrato": "18.9"
  },
  "Batata, baroa, crua": {
    "energia": "101",
    "proteina": "1.0",
    "gordura": "0.2",
    "carboidrato": "24.0"
  },
  "Batata, doce, cozida": {
    "energia": "77",
    "proteina": "0.6",
    "gordura": "0.1",
    "carboidrato": "18.4"
  },
  "Batata, doce, crua": {
    "energia": "118",
    "proteina": "1.3",
    "gordura": "0.1",
    "carboidrato": "28.2"
  },
  "Batata, frita, tipo chips, industrializada": {
    "energia": "543",
    "proteina": "5.6",
    "gordura": "36.6",
    "carboidrato": "51.2"
  },
  "Batata, inglesa, cozida": {
    "energia": "52",
    "proteina": "1.2",
    "gordura": "Tr",
    "carboidrato": "11.9"
  },
  "Batata, inglesa, crua": {
    "energia": "64",
    "proteina": "1.8",
    "gordura": "Tr",
    "carboidrato": "14.7"
  },
  "Batata, inglesa, frita": {
    "energia": "267",
    "proteina": "5.0",
    "gordura": "13.1",
    "carboidrato": "35.6"
  },
  "Batata, inglesa, sauté": {
    "energia": "68",
    "proteina": "1.3",
    "gordura": "0.9",
    "carboidrato": "14.1"
  },
  "Berinjela, cozida": {
    "energia": "19",
    "proteina": "0.7",
    "gordura": "0.1",
    "carboidrato": "4.5"
  },
  "Berinjela, crua": {
    "energia": "20",
    "proteina": "1.2",
    "gordura": "0.1",
    "carboidrato": "4.4"
  },
  "Beterraba, cozida": {
    "energia": "32",
    "proteina": "1.3",
    "gordura": "0.1",
    "carboidrato": "7.2"
  },
  "Beterraba, crua": {
    "energia": "49",
    "proteina": "1.9",
    "gordura": "0.1",
    "carboidrato": "11.1"
  },
  "Biscoito, polvilho doce": {
    "energia": "438",
    "proteina": "1.3",
    "gordura": "12.2",
    "carboidrato": "80.5"
  },
  "Brócolis, cozido": {
    "energia": "25",
    "proteina": "2.1",
    "gordura": "0.5",
    "carboidrato": "4.4"
  },
  "Brócolis, cru": {
    "energia": "25",
    "proteina": "3.6",
    "gordura": "0.3",
    "carboidrato": "4.0"
  },
  "Cará, cozido": {
    "energia": "78",
    "proteina": "1.5",
    "gordura": "0.1",
    "carboidrato": "18.9"
  },
  "Cará, cru": {
    "energia": "96",
    "proteina": "2.3",
    "gordura": "0.1",
    "carboidrato": "23.0"
  },
  "Caruru, cru": {
    "energia": "34",
    "proteina": "3.2",
    "gordura": "0.6",
    "carboidrato": "6.0"
  },
  "Catalonha, crua": {
    "energia": "24",
    "proteina": "1.9",
    "gordura": "0.3",
    "carboidrato": "4.8"
  },
  "Catalonha, refogada": {
    "energia": "63",
    "proteina": "2.0",
    "gordura": "4.8",
    "carboidrato": "4.8"
  },
  "Cebola, crua": {
    "energia": "39",
    "proteina": "1.7",
    "gordura": "0.1",
    "carboidrato": "8.9"
  },
  "Cebolinha, crua": {
    "energia": "20",
    "proteina": "1.9",
    "gordura": "0.4",
    "carboidrato": "3.4"
  },
  "Cenoura, cozida": {
    "energia": "30",
    "proteina": "0.8",
    "gordura": "0.2",
    "carboidrato": "6.7"
  },
  "Cenoura, crua": {
    "energia": "34",
    "proteina": "1.3",
    "gordura": "0.2",
    "carboidrato": "7.7"
  },
  "Chicória, crua": {
    "energia": "14",
    "proteina": "1.1",
    "gordura": "0.1",
    "carboidrato": "2.9"
  },
  "Chuchu, cozido": {
    "energia": "19",
    "proteina": "0.4",
    "gordura": "Tr",
    "carboidrato": "4.8"
  },
  "Chuchu, cru": {
    "energia": "17",
    "proteina": "0.7",
    "gordura": "0.1",
    "carboidrato": "4.1"
  },
  "Coentro, folhas desidratadas": {
    "energia": "309",
    "proteina": "20.9",
    "gordura": "10.4",
    "carboidrato": "48.0"
  },
  "Couve, manteiga, crua": {
    "energia": "27",
    "proteina": "2.9",
    "gordura": "0.5",
    "carboidrato": "4.3"
  },
  "Couve, manteiga, refogada": {
    "energia": "90",
    "proteina": "1.7",
    "gordura": "6.6",
    "carboidrato": "8.7"
  },
  "Couve-flor, crua": {
    "energia": "23",
    "proteina": "1.9",
    "gordura": "0.2",
    "carboidrato": "4.5"
  },
  "Couve-flor, cozida": {
    "energia": "19",
    "proteina": "1.2",
    "gordura": "0.3",
    "carboidrato": "3.9"
  },
  "Espinafre, Nova Zelândia, cru": {
    "energia": "16",
    "proteina": "2.0",
    "gordura": "0.2",
    "carboidrato": "2.6"
  },
  "Espinafre, Nova Zelândia, refogado": {
    "energia": "67",
    "proteina": "2.7",
    "gordura": "5.4",
    "carboidrato": "4.2"
  },
  "Farinha, de mandioca, crua": {
    "energia": "361",
    "proteina": "1.6",
    "gordura": "0.3",
    "carboidrato": "87.9"
  },
  "Farinha, de mandioca, torrada": {
    "energia": "365",
    "proteina": "1.2",
    "gordura": "0.3",
    "carboidrato": "89.2"
  },
  "Farinha, de puba": {
    "energia": "360",
    "proteina": "1.6",
    "gordura": "0.5",
    "carboidrato": "87.3"
  },
  "Fécula, de mandioca": {
    "energia": "331",
    "proteina": "0.5",
    "gordura": "0.3",
    "carboidrato": "81.1"
  },
  "Feijão, broto, cru": {
    "energia": "39",
    "proteina": "4.2",
    "gordura": "0.1",
    "carboidrato": "7.8"
  },
  "Inhame, cru": {
    "energia": "97",
    "proteina": "2.1",
    "gordura": "0.2",
    "carboidrato": "23.2"
  },
  "Jiló, cru": {
    "energia": "27",
    "proteina": "1.4",
    "gordura": "0.2",
    "carboidrato": "6.2"
  },
  "Jurubeba, crua": {
    "energia": "126",
    "proteina": "4.4",
    "gordura": "3.9",
    "carboidrato": "23.1"
  },
  "Mandioca, cozida": {
    "energia": "125",
    "proteina": "0.6",
    "gordura": "0.3",
    "carboidrato": "30.1"
  },
  "Mandioca, crua": {
    "energia": "151",
    "proteina": "1.1",
    "gordura": "0.3",
    "carboidrato": "36.2"
  },
  "Mandioca, farofa, temperada": {
    "energia": "406",
    "proteina": "2.1",
    "gordura": "9.1",
    "carboidrato": "80.3"
  },
  "Mandioca, frita": {
    "energia": "300",
    "proteina": "1.4",
    "gordura": "11.2",
    "carboidrato": "50.3"
  },
  "Manjericão, cru": {
    "energia": "21",
    "proteina": "2.0",
    "gordura": "0.4",
    "carboidrato": "3.6"
  },
  "Maxixe, cru": {
    "energia": "14",
    "proteina": "1.4",
    "gordura": "0.1",
    "carboidrato": "2.7"
  },
  "Mostarda, folha, crua": {
    "energia": "18",
    "proteina": "2.1",
    "gordura": "0.2",
    "carboidrato": "3.2"
  },
  "Nhoque, batata, cozido": {
    "energia": "181",
    "proteina": "5.9",
    "gordura": "1.9",
    "carboidrato": "36.8"
  },
  "Nabo, cru": {
    "energia": "18",
    "proteina": "1.2",
    "gordura": "0.1",
    "carboidrato": "4.1"
  },
  "Palmito, juçara, em conserva": {
    "energia": "23",
    "proteina": "1.8",
    "gordura": "0.4",
    "carboidrato": "4.3"
  },
  "Palmito, pupunha, em conserva": {
    "energia": "29",
    "proteina": "2.5",
    "gordura": "0.5",
    "carboidrato": "5.5"
  },
  "Pão, de queijo, assado": {
    "energia": "363",
    "proteina": "5.1",
    "gordura": "24.6",
    "carboidrato": "34.2"
  },
  "Pão, de queijo, cru": {
    "energia": "295",
    "proteina": "3.6",
    "gordura": "14.0",
    "carboidrato": "38.5"
  },
  "Pepino, cru": {
    "energia": "10",
    "proteina": "0.9",
    "gordura": "Tr",
    "carboidrato": "2.0"
  },
  "Pimentão, amarelo, cru": {
    "energia": "28",
    "proteina": "1.2",
    "gordura": "0.4",
    "carboidrato": "6.0"
  },
  "Pimentão, verde, cru": {
    "energia": "21",
    "proteina": "1.1",
    "gordura": "0.2",
    "carboidrato": "4.9"
  },
  "Pimentão, vermelho, cru": {
    "energia": "23",
    "proteina": "1.0",
    "gordura": "0.1",
    "carboidrato": "5.5"
  },
  "Polvilho, doce": {
    "energia": "351",
    "proteina": "0.4",
    "gordura": "Tr",
    "carboidrato": "86.8"
  },
  "Quiabo, cru": {
    "energia": "30",
    "proteina": "1.9",
    "gordura": "0.3",
    "carboidrato": "6.4"
  },
  "Rabanete, cru": {
    "energia": "14",
    "proteina": "1.4",
    "gordura": "0.1",
    "carboidrato": "2.7"
  },
  "Repolho, branco, cru": {
    "energia": "17",
    "proteina": "0.9",
    "gordura": "0.1",
    "carboidrato": "3.9"
  },
  "Repolho, roxo, cru": {
    "energia": "31",
    "proteina": "1.9",
    "gordura": "0.1",
    "carboidrato": "7.2"
  },
  "Repolho, roxo, refogado": {
    "energia": "42",
    "proteina": "1.8",
    "gordura": "1.2",
    "carboidrato": "7.6"
  },
  "Rúcula, crua": {
    "energia": "13",
    "proteina": "1.8",
    "gordura": "0.1",
    "carboidrato": "2.2"
  },
  "Salsa, crua": {
    "energia": "33",
    "proteina": "3.3",
    "gordura": "0.6",
    "carboidrato": "5.7"
  },
  "Seleta de legumes, enlatada": {
    "energia": "57",
    "proteina": "3.4",
    "gordura": "0.4",
    "carboidrato": "12.7"
  },
  "Serralha, crua": {
    "energia": "30",
    "proteina": "2.7",
    "gordura": "0.7",
    "carboidrato": "4.9"
  },
  "Taioba, crua": {
    "energia": "34",
    "proteina": "2.9",
    "gordura": "0.9",
    "carboidrato": "5.4"
  },
  "Tomate, com semente, cru": {
    "energia": "15",
    "proteina": "1.1",
    "gordura": "0.2",
    "carboidrato": "3.1"
  },
  "Tomate, extrato": {
    "energia": "61",
    "proteina": "2.4",
    "gordura": "0.2",
    "carboidrato": "15.0"
  },
  "Tomate, molho industrializado": {
    "energia": "38",
    "proteina": "1.4",
    "gordura": "0.9",
    "carboidrato": "7.7"
  },
  "Tomate, purê": {
    "energia": "28",
    "proteina": "1.4",
    "gordura": "Tr",
    "carboidrato": "6.9"
  },
  "Tomate, salada": {
    "energia": "21",
    "proteina": "0.8",
    "gordura": "Tr",
    "carboidrato": "5.1"
  },
  "Vagem, crua": {
    "energia": "25",
    "proteina": "1.8",
    "gordura": "0.2",
    "carboidrato": "5.3"
  },
  "Abacate, cru": {
    "energia": "96",
    "proteina": "1.2",
    "gordura": "8.4",
    "carboidrato": "6.0"
  },
  "Abacaxi, cru": {
    "energia": "48",
    "proteina": "0.9",
    "gordura": "0.1",
    "carboidrato": "12.3"
  },
  "Abacaxi, polpa, congelada": {
    "energia": "31",
    "proteina": "0.5",
    "gordura": "0.1",
    "carboidrato": "7.8"
  },
  "Abiu, cru": {
    "energia": "62",
    "proteina": "0.8",
    "gordura": "0.7",
    "carboidrato": "14.9"
  },
  "Açaí, polpa, com xarope de guaraná e glucose": {
    "energia": "110",
    "proteina": "0.7",
    "gordura": "3.7",
    "carboidrato": "21.5"
  },
  "Açaí, polpa, congelada": {
    "energia": "58",
    "proteina": "0.8",
    "gordura": "3.9",
    "carboidrato": "6.2"
  },
  "Acerola, crua": {
    "energia": "33",
    "proteina": "0.9",
    "gordura": "0.2",
    "carboidrato": "8.0"
  },
  "Acerola, polpa, congelada": {
    "energia": "22",
    "proteina": "0.6",
    "gordura": "Tr",
    "carboidrato": "5.5"
  },
  "Ameixa, calda, enlatada": {
    "energia": "183",
    "proteina": "0.4",
    "gordura": "Tr",
    "carboidrato": "46.9"
  },
  "Ameixa, crua": {
    "energia": "53",
    "proteina": "0.8",
    "gordura": "Tr",
    "carboidrato": "13.9"
  },
  "Ameixa, em calda, enlatada, drenada": {
    "energia": "177",
    "proteina": "1.0",
    "gordura": "0.3",
    "carboidrato": "47.7"
  },
  "Atemóia, crua": {
    "energia": "97",
    "proteina": "1.0",
    "gordura": "0.3",
    "carboidrato": "25.3"
  },
  "Banana, da terra, crua": {
    "energia": "128",
    "proteina": "1.4",
    "gordura": "0.2",
    "carboidrato": "33.7"
  },
  "Banana, doce em barra": {
    "energia": "280",
    "proteina": "2.2",
    "gordura": "0.1",
    "carboidrato": "75.7"
  },
  "Banana, figo, crua": {
    "energia": "105",
    "proteina": "1.1",
    "gordura": "0.1",
    "carboidrato": "27.8"
  },
  "Banana, maçã, crua": {
    "energia": "87",
    "proteina": "1.8",
    "gordura": "0.1",
    "carboidrato": "22.3"
  },
  "Banana, nanica, crua": {
    "energia": "92",
    "proteina": "1.4",
    "gordura": "0.1",
    "carboidrato": "23.8"
  },
  "Banana, ouro, crua": {
    "energia": "112",
    "proteina": "1.5",
    "gordura": "0.2",
    "carboidrato": "29.3"
  },
  "Banana, pacova, crua": {
    "energia": "78",
    "proteina": "1.2",
    "gordura": "0.1",
    "carboidrato": "20.3"
  },
  "Banana, prata, crua": {
    "energia": "98",
    "proteina": "1.3",
    "gordura": "0.1",
    "carboidrato": "26.0"
  },
  "Cacau, cru": {
    "energia": "74",
    "proteina": "1.0",
    "gordura": "0.1",
    "carboidrato": "19.4"
  },
  "Cajá-Manga, cru": {
    "energia": "46",
    "proteina": "1.3",
    "gordura": "Tr",
    "carboidrato": "11.4"
  },
  "Cajá, polpa, congelada": {
    "energia": "26",
    "proteina": "0.6",
    "gordura": "0.2",
    "carboidrato": "6.4"
  },
  "Caju, cru": {
    "energia": "43",
    "proteina": "1.0",
    "gordura": "0.3",
    "carboidrato": "10.3"
  },
  "Caju, polpa, congelada": {
    "energia": "37",
    "proteina": "0.5",
    "gordura": "0.2",
    "carboidrato": "9.4"
  },
  "Caju, suco concentrado, envasado": {
    "energia": "45",
    "proteina": "0.4",
    "gordura": "0.2",
    "carboidrato": "10.7"
  },
  "Caqui, chocolate, cru": {
    "energia": "71",
    "proteina": "0.4",
    "gordura": "0.1",
    "carboidrato": "19.3"
  },
  "Carambola, crua": {
    "energia": "46",
    "proteina": "0.9",
    "gordura": "0.2",
    "carboidrato": "11.5"
  },
  "Ciriguela, crua": {
    "energia": "76",
    "proteina": "1.4",
    "gordura": "0.4",
    "carboidrato": "18.9"
  },
  "Cupuaçu, cru": {
    "energia": "49",
    "proteina": "1.2",
    "gordura": "1.0",
    "carboidrato": "10.4"
  },
  "Cupuaçu, polpa, congelada": {
    "energia": "49",
    "proteina": "0.8",
    "gordura": "0.6",
    "carboidrato": "11.4"
  },
  "Figo, cru": {
    "energia": "41",
    "proteina": "1.0",
    "gordura": "0.2",
    "carboidrato": "10.2"
  },
  "Figo, enlatado, em calda": {
    "energia": "184",
    "proteina": "0.6",
    "gordura": "0.2",
    "carboidrato": "50.3"
  },
  "Fruta-pão, crua": {
    "energia": "67",
    "proteina": "1.1",
    "gordura": "0.2",
    "carboidrato": "17.2"
  },
  "Goiaba, branca, com casca, crua": {
    "energia": "52",
    "proteina": "0.9",
    "gordura": "0.5",
    "carboidrato": "12.4"
  },
  "Goiaba, doce em pasta": {
    "energia": "269",
    "proteina": "0.6",
    "gordura": "0.0",
    "carboidrato": "74.1"
  },
  "Goiaba, doce, cascão": {
    "energia": "286",
    "proteina": "0.4",
    "gordura": "0.1",
    "carboidrato": "78.7"
  },
  "Goiaba, vermelha, com casca, crua": {
    "energia": "54",
    "proteina": "1.1",
    "gordura": "0.4",
    "carboidrato": "13.0"
  },
  "Graviola, crua": {
    "energia": "62",
    "proteina": "0.8",
    "gordura": "0.2",
    "carboidrato": "15.8"
  },
  "Graviola, polpa, congelada": {
    "energia": "38",
    "proteina": "0.6",
    "gordura": "0.1",
    "carboidrato": "9.8"
  },
  "Jabuticaba, crua": {
    "energia": "58",
    "proteina": "0.6",
    "gordura": "0.1",
    "carboidrato": "15.3"
  },
  "Jaca, crua": {
    "energia": "88",
    "proteina": "1.4",
    "gordura": "0.3",
    "carboidrato": "22.5"
  },
  "Jambo, cru": {
    "energia": "27",
    "proteina": "0.9",
    "gordura": "0.1",
    "carboidrato": "6.5"
  },
  "Jamelão, cru": {
    "energia": "41",
    "proteina": "0.5",
    "gordura": "0.1",
    "carboidrato": "10.6"
  },
  "Kiwi, cru": {
    "energia": "51",
    "proteina": "1.3",
    "gordura": "0.6",
    "carboidrato": "11.5"
  },
  "Laranja, baía, crua": {
    "energia": "45",
    "proteina": "1.0",
    "gordura": "0.1",
    "carboidrato": "11.5"
  },
  "Laranja, baía, suco": {
    "energia": "37",
    "proteina": "0.7",
    "gordura": "Tr",
    "carboidrato": "8.7"
  },
  "Laranja, da terra, crua": {
    "energia": "51",
    "proteina": "1.1",
    "gordura": "0.2",
    "carboidrato": "12.9"
  },
  "Laranja, da terra, suco": {
    "energia": "41",
    "proteina": "0.7",
    "gordura": "0.1",
    "carboidrato": "9.6"
  },
  "Laranja, lima, crua": {
    "energia": "46",
    "proteina": "1.1",
    "gordura": "0.1",
    "carboidrato": "11.5"
  },
  "Laranja, lima, suco": {
    "energia": "39",
    "proteina": "0.7",
    "gordura": "0.1",
    "carboidrato": "9.2"
  },
  "Laranja, pêra, crua": {
    "energia": "37",
    "proteina": "1.0",
    "gordura": "0.1",
    "carboidrato": "8.9"
  },
  "Laranja, pêra, suco": {
    "energia": "33",
    "proteina": "0.7",
    "gordura": "0.1",
    "carboidrato": "7.6"
  },
  "Laranja, valência, crua": {
    "energia": "46",
    "proteina": "0.8",
    "gordura": "0.2",
    "carboidrato": "11.7"
  },
  "Laranja, valência, suco": {
    "energia": "36",
    "proteina": "0.5",
    "gordura": "0.1",
    "carboidrato": "8.6"
  },
  "Limão, cravo, suco": {
    "energia": "14",
    "proteina": "0.3",
    "gordura": "Tr",
    "carboidrato": "5.2"
  },
  "Limão, galego, suco": {
    "energia": "22",
    "proteina": "0.6",
    "gordura": "0.1",
    "carboidrato": "7.3"
  },
  "Limão, tahiti, cru": {
    "energia": "32",
    "proteina": "0.9",
    "gordura": "0.1",
    "carboidrato": "11.1"
  },
  "Maçã, Argentina, com casca, crua": {
    "energia": "63",
    "proteina": "0.2",
    "gordura": "0.2",
    "carboidrato": "16.6"
  },
  "Maçã, Fuji, com casca, crua": {
    "energia": "56",
    "proteina": "0.3",
    "gordura": "Tr",
    "carboidrato": "15.2"
  },
  "Macaúba, crua": {
    "energia": "404",
    "proteina": "2.1",
    "gordura": "40.7",
    "carboidrato": "13.9"
  },
  "Mamão, doce em calda, drenado": {
    "energia": "196",
    "proteina": "0.2",
    "gordura": "0.1",
    "carboidrato": "54.0"
  },
  "Mamão, Formosa, cru": {
    "energia": "45",
    "proteina": "0.8",
    "gordura": "0.1",
    "carboidrato": "11.6"
  },
  "Mamão, Papaia, cru": {
    "energia": "40",
    "proteina": "0.5",
    "gordura": "0.1",
    "carboidrato": "10.4"
  },
  "Mamão verde, doce em calda, drenado": {
    "energia": "209",
    "proteina": "0.3",
    "gordura": "0.1",
    "carboidrato": "57.6"
  },
  "Manga, Haden, crua": {
    "energia": "64",
    "proteina": "0.4",
    "gordura": "0.3",
    "carboidrato": "16.7"
  },
  "Manga, Palmer, crua": {
    "energia": "72",
    "proteina": "0.4",
    "gordura": "0.2",
    "carboidrato": "19.4"
  },
  "Manga, polpa, congelada": {
    "energia": "48",
    "proteina": "0.4",
    "gordura": "0.2",
    "carboidrato": "12.5"
  },
  "Manga, Tommy Atkins, crua": {
    "energia": "51",
    "proteina": "0.9",
    "gordura": "0.2",
    "carboidrato": "12.8"
  },
  "Maracujá, cru": {
    "energia": "68",
    "proteina": "2.0",
    "gordura": "2.1",
    "carboidrato": "12.3"
  },
  "Maracujá, polpa, congelada": {
    "energia": "39",
    "proteina": "0.8",
    "gordura": "0.2",
    "carboidrato": "9.6"
  },
  "Maracujá, suco concentrado, envasado": {
    "energia": "42",
    "proteina": "0.8",
    "gordura": "0.2",
    "carboidrato": "9.6"
  },
  "Melancia, crua": {
    "energia": "33",
    "proteina": "0.9",
    "gordura": "Tr",
    "carboidrato": "8.1"
  },
  "Melão, cru": {
    "energia": "29",
    "proteina": "0.7",
    "gordura": "Tr",
    "carboidrato": "7.5"
  },
  "Mexerica, Murcote, crua": {
    "energia": "58",
    "proteina": "0.9",
    "gordura": "0.1",
    "carboidrato": "14.9"
  },
  "Mexerica, Rio, crua": {
    "energia": "37",
    "proteina": "0.7",
    "gordura": "0.1",
    "carboidrato": "9.3"
  },
  "Morango, cru": {
    "energia": "30",
    "proteina": "0.9",
    "gordura": "0.3",
    "carboidrato": "6.8"
  },
  "Nêspera, crua": {
    "energia": "43",
    "proteina": "0.3",
    "gordura": "Tr",
    "carboidrato": "11.5"
  },
  "Pequi, cru": {
    "energia": "205",
    "proteina": "2.3",
    "gordura": "18.0",
    "carboidrato": "13.0"
  },
  "Pêra, Park, crua": {
    "energia": "61",
    "proteina": "0.2",
    "gordura": "0.2",
    "carboidrato": "16.1"
  },
  "Pêra, Williams, crua": {
    "energia": "53",
    "proteina": "0.6",
    "gordura": "0.1",
    "carboidrato": "14.0"
  },
  "Pêssego, Aurora, cru": {
    "energia": "36",
    "proteina": "0.8",
    "gordura": "Tr",
    "carboidrato": "9.3"
  },
  "Pêssego, enlatado, em calda": {
    "energia": "63",
    "proteina": "0.7",
    "gordura": "Tr",
    "carboidrato": "16.9"
  },
  "Pinha, crua": {
    "energia": "88",
    "proteina": "1.5",
    "gordura": "0.3",
    "carboidrato": "22.4"
  },
  "Pitanga, crua": {
    "energia": "41",
    "proteina": "0.9",
    "gordura": "0.2",
    "carboidrato": "10.2"
  },
  "Pitanga, polpa, congelada": {
    "energia": "19",
    "proteina": "0.3",
    "gordura": "0.1",
    "carboidrato": "4.8"
  },
  "Romã, crua": {
    "energia": "56",
    "proteina": "0.4",
    "gordura": "Tr",
    "carboidrato": "15.1"
  },
  "Tamarindo, cru": {
    "energia": "276",
    "proteina": "3.2",
    "gordura": "0.5",
    "carboidrato": "72.5"
  },
  "Tangerina, Poncã, crua": {
    "energia": "38",
    "proteina": "0.8",
    "gordura": "0.1",
    "carboidrato": "9.6"
  },
  "Tangerina, Poncã, suco": {
    "energia": "36",
    "proteina": "0.5",
    "gordura": "Tr",
    "carboidrato": "8.8"
  },
  "Tucumã, cru": {
    "energia": "262",
    "proteina": "2.1",
    "gordura": "19.1",
    "carboidrato": "26.5"
  },
  "Umbu, cru": {
    "energia": "37",
    "proteina": "0.8",
    "gordura": "Tr",
    "carboidrato": "9.4"
  },
  "Umbu, polpa, congelada": {
    "energia": "34",
    "proteina": "0.5",
    "gordura": "0.1",
    "carboidrato": "8.8"
  },
  "Uva, Itália, crua": {
    "energia": "53",
    "proteina": "0.7",
    "gordura": "0.2",
    "carboidrato": "13.6"
  },
  "Uva, Rubi, crua": {
    "energia": "49",
    "proteina": "0.6",
    "gordura": "0.2",
    "carboidrato": "12.7"
  },
  "Uva, suco concentrado, envasado": {
    "energia": "58",
    "proteina": "Tr",
    "gordura": "Tr",
    "carboidrato": "14.7"
  },
  "Azeite, de dendê": {
    "energia": "884",
    "proteina": "NA",
    "gordura": "100.0",
    "carboidrato": "NA"
  },
  "Azeite, de oliva, extra virgem": {
    "energia": "884",
    "proteina": "NA",
    "gordura": "100.0",
    "carboidrato": "NA"
  },
  "Manteiga, com sal": {
    "energia": "726",
    "proteina": "0.4",
    "gordura": "82.4",
    "carboidrato": "0.1"
  },
  "Manteiga, sem sal": {
    "energia": "758",
    "proteina": "0.4",
    "gordura": "86.0",
    "carboidrato": "0.0"
  },
  "Margarina, com óleo hidrogenado, com sal (65% de lipídeos)": {
    "energia": "596",
    "proteina": "Tr",
    "gordura": "67.4",
    "carboidrato": "0.0"
  },
  "Margarina, com óleo hidrogenado, sem sal (80% de lipídeos)": {
    "energia": "723",
    "proteina": "Tr",
    "gordura": "81.7",
    "carboidrato": "0.0"
  },
  "Margarina, com óleo interesterificado, com sal (65%de lipídeos)": {
    "energia": "594",
    "proteina": "Tr",
    "gordura": "67.2",
    "carboidrato": "0.0"
  },
  "Margarina, com óleo interesterificado, sem sal (65% de lipídeos)": {
    "energia": "593",
    "proteina": "Tr",
    "gordura": "67.1",
    "carboidrato": "0.0"
  },
  "Óleo, de babaçu": {
    "energia": "884",
    "proteina": "NA",
    "gordura": "100.0",
    "carboidrato": "NA"
  },
  "Óleo, de canola": {
    "energia": "884",
    "proteina": "NA",
    "gordura": "100.0",
    "carboidrato": "NA"
  },
  "Óleo, de girassol": {
    "energia": "884",
    "proteina": "NA",
    "gordura": "100.0",
    "carboidrato": "NA"
  },
  "Óleo, de milho": {
    "energia": "884",
    "proteina": "NA",
    "gordura": "100.0",
    "carboidrato": "NA"
  },
  "Óleo, de pequi": {
    "energia": "884",
    "proteina": "NA",
    "gordura": "100.0",
    "carboidrato": "NA"
  },
  "Óleo, de soja": {
    "energia": "884",
    "proteina": "NA",
    "gordura": "100.0",
    "carboidrato": "NA"
  },
  "Abadejo, filé, congelado, assado": {
    "energia": "112",
    "proteina": "23.5",
    "gordura": "1.2",
    "carboidrato": "0.0"
  },
  "Abadejo, filé, congelado,cozido": {
    "energia": "91",
    "proteina": "19.3",
    "gordura": "0.9",
    "carboidrato": "0.0"
  },
  "Abadejo, filé, congelado, cru": {
    "energia": "59",
    "proteina": "13.1",
    "gordura": "0.4",
    "carboidrato": "0.0"
  },
  "Abadejo, filé, congelado, grelhado": {
    "energia": "130",
    "proteina": "27.6",
    "gordura": "1.3",
    "carboidrato": "0.0"
  },
  "Atum, conserva em óleo": {
    "energia": "166",
    "proteina": "26.2",
    "gordura": "6.0",
    "carboidrato": "0.0"
  },
  "Atum, fresco, cru": {
    "energia": "118",
    "proteina": "25.7",
    "gordura": "0.9",
    "carboidrato": "0.0"
  },
  "Bacalhau, salgado, cru": {
    "energia": "136",
    "proteina": "29.0",
    "gordura": "1.3",
    "carboidrato": "0.0"
  },
  "Bacalhau, salgado, refogado": {
    "energia": "140",
    "proteina": "24.0",
    "gordura": "3.6",
    "carboidrato": "1.2"
  },
  "Cação, posta, com farinha de trigo, frita": {
    "energia": "208",
    "proteina": "25.0",
    "gordura": "10.0",
    "carboidrato": "3.1"
  },
  "Cação, posta, cozida": {
    "energia": "116",
    "proteina": "25.6",
    "gordura": "0.7",
    "carboidrato": "0.0"
  },
  "Cação, posta, crua": {
    "energia": "83",
    "proteina": "17.9",
    "gordura": "0.8",
    "carboidrato": "0.0"
  },
  "Camarão, Rio Grande, grande, cozido": {
    "energia": "90",
    "proteina": "19.0",
    "gordura": "1.0",
    "carboidrato": "0.0"
  },
  "Camarão, Rio Grande, grande, cru": {
    "energia": "47",
    "proteina": "10.0",
    "gordura": "0.5",
    "carboidrato": "0.0"
  },
  "Camarão, Sete Barbas, sem cabeça, com casca, frito": {
    "energia": "231",
    "proteina": "18.4",
    "gordura": "15.6",
    "carboidrato": "2.9"
  },
  "Caranguejo, cozido": {
    "energia": "83",
    "proteina": "18.5",
    "gordura": "0.4",
    "carboidrato": "0.0"
  },
  "Corimba, cru": {
    "energia": "128",
    "proteina": "17.4",
    "gordura": "6.0",
    "carboidrato": "0.0"
  },
  "Corimbatá, assado": {
    "energia": "261",
    "proteina": "19.9",
    "gordura": "19.6",
    "carboidrato": "0.0"
  },
  "Corimbatá, cozido": {
    "energia": "239",
    "proteina": "20.1",
    "gordura": "16.9",
    "carboidrato": "0.0"
  },
  "Corvina de água doce, crua": {
    "energia": "101",
    "proteina": "18.9",
    "gordura": "2.2",
    "carboidrato": "0.0"
  },
  "Corvina do mar, crua": {
    "energia": "94",
    "proteina": "18.6",
    "gordura": "1.6",
    "carboidrato": "0.0"
  },
  "Corvina grande, assada": {
    "energia": "147",
    "proteina": "26.8",
    "gordura": "3.6",
    "carboidrato": "0.0"
  },
  "Corvina grande, cozida": {
    "energia": "100",
    "proteina": "23.4",
    "gordura": "2.6",
    "carboidrato": "0.0"
  },
  "Dourada de água doce, fresca": {
    "energia": "131",
    "proteina": "18.8",
    "gordura": "5.6",
    "carboidrato": "0.0"
  },
  "Lambari, congelado, cru": {
    "energia": "131",
    "proteina": "16.8",
    "gordura": "6.5",
    "carboidrato": "0.0"
  },
  "Lambari, congelado, frito": {
    "energia": "327",
    "proteina": "28.4",
    "gordura": "22.8",
    "carboidrato": "0.0"
  },
  "Lambari, fresco, cru": {
    "energia": "152",
    "proteina": "15.7",
    "gordura": "9.4",
    "carboidrato": "0.0"
  },
  "Manjuba, com farinha de trigo, frita": {
    "energia": "344",
    "proteina": "23.5",
    "gordura": "22.6",
    "carboidrato": "10.2"
  },
  "Manjuba, frita": {
    "energia": "349",
    "proteina": "30.1",
    "gordura": "24.5",
    "carboidrato": "0.0"
  },
  "Merluza, filé, assado": {
    "energia": "122",
    "proteina": "26.6",
    "gordura": "0.9",
    "carboidrato": "0.0"
  },
  "Merluza, filé, cru": {
    "energia": "89",
    "proteina": "16.6",
    "gordura": "2.0",
    "carboidrato": "0.0"
  },
  "Merluza, filé, frito": {
    "energia": "192",
    "proteina": "26.9",
    "gordura": "8.5",
    "carboidrato": "0.0"
  },
  "Pescada, branca, crua": {
    "energia": "111",
    "proteina": "16.3",
    "gordura": "4.6",
    "carboidrato": "0.0"
  },
  "Pescada, branca, frita": {
    "energia": "223",
    "proteina": "27.4",
    "gordura": "11.8",
    "carboidrato": "0.0"
  },
  "Pescada, filé, com farinha de trigo, frito": {
    "energia": "283",
    "proteina": "21.4",
    "gordura": "19.1",
    "carboidrato": "5.0"
  },
  "Pescada, filé, cru": {
    "energia": "107",
    "proteina": "16.7",
    "gordura": "4.0",
    "carboidrato": "0.0"
  },
  "Pescada, filé, frito": {
    "energia": "154",
    "proteina": "28.6",
    "gordura": "3.6",
    "carboidrato": "0.0"
  },
  "Pescada, filé, molho escabeche": {
    "energia": "142",
    "proteina": "11.8",
    "gordura": "8.0",
    "carboidrato": "5.0"
  },
  "Pescadinha, crua": {
    "energia": "76",
    "proteina": "15.5",
    "gordura": "1.1",
    "carboidrato": "0.0"
  },
  "Pintado, assado": {
    "energia": "192",
    "proteina": "36.5",
    "gordura": "4.0",
    "carboidrato": "0.0"
  },
  "Pintado, cru": {
    "energia": "91",
    "proteina": "18.6",
    "gordura": "1.3",
    "carboidrato": "0.0"
  },
  "Pintado, grelhado": {
    "energia": "152",
    "proteina": "30.8",
    "gordura": "2.3",
    "carboidrato": "0.0"
  },
  "Porquinho, cru": {
    "energia": "93",
    "proteina": "20.5",
    "gordura": "0.6",
    "carboidrato": "0.0"
  },
  "Salmão, filé, com pele, fresco,  grelhado": {
    "energia": "229",
    "proteina": "23.9",
    "gordura": "14.0",
    "carboidrato": "0.0"
  },
  "Salmão, sem pele, fresco, cru": {
    "energia": "170",
    "proteina": "19.3",
    "gordura": "9.7",
    "carboidrato": "0.0"
  },
  "Salmão, sem pele, fresco, grelhado": {
    "energia": "243",
    "proteina": "26.1",
    "gordura": "14.5",
    "carboidrato": "0.0"
  },
  "Sardinha, assada": {
    "energia": "164",
    "proteina": "32.2",
    "gordura": "3.0",
    "carboidrato": "0.0"
  },
  "Sardinha, conserva em óleo": {
    "energia": "285",
    "proteina": "15.9",
    "gordura": "24.0",
    "carboidrato": "0.0"
  },
  "Sardinha, frita": {
    "energia": "257",
    "proteina": "33.4",
    "gordura": "12.7",
    "carboidrato": "0.0"
  },
  "Sardinha, inteira, crua": {
    "energia": "114",
    "proteina": "21.1",
    "gordura": "2.7",
    "carboidrato": "0.0"
  },
  "Tucunaré, filé, congelado, cru": {
    "energia": "88",
    "proteina": "18.0",
    "gordura": "1.2",
    "carboidrato": "0.0"
  },
  "Apresuntado": {
    "energia": "129",
    "proteina": "13.5",
    "gordura": "6.7",
    "carboidrato": "2.9"
  },
  "Caldo de carne, tablete": {
    "energia": "241",
    "proteina": "7.8",
    "gordura": "16.6",
    "carboidrato": "15.1"
  },
  "Caldo de galinha, tablete": {
    "energia": "251",
    "proteina": "6.3",
    "gordura": "20.4",
    "carboidrato": "10.6"
  },
  "Carne, bovina, acém, moído, cozido": {
    "energia": "212",
    "proteina": "26.7",
    "gordura": "10.9",
    "carboidrato": "0.0"
  },
  "Carne, bovina, acém, moído, cru": {
    "energia": "137",
    "proteina": "19.4",
    "gordura": "5.9",
    "carboidrato": "0.0"
  },
  "Carne, bovina, acém, sem gordura, cozido": {
    "energia": "215",
    "proteina": "27.3",
    "gordura": "10.9",
    "carboidrato": "0.0"
  },
  "Carne, bovina, acém, sem gordura, cru": {
    "energia": "144",
    "proteina": "20.8",
    "gordura": "6.1",
    "carboidrato": "0.0"
  },
  "Carne, bovina, almôndegas, cruas": {
    "energia": "189",
    "proteina": "12.3",
    "gordura": "11.2",
    "carboidrato": "9.8"
  },
  "Carne, bovina, almôndegas, fritas": {
    "energia": "272",
    "proteina": "18.2",
    "gordura": "15.8",
    "carboidrato": "14.3"
  },
  "Carne, bovina, bucho, cozido": {
    "energia": "133",
    "proteina": "21.6",
    "gordura": "4.5",
    "carboidrato": "0.0"
  },
  "Carne, bovina, bucho, cru": {
    "energia": "137",
    "proteina": "20.5",
    "gordura": "5.5",
    "carboidrato": "0.0"
  },
  "Carne, bovina, capa de contra-filé, com gordura, crua": {
    "energia": "217",
    "proteina": "19.2",
    "gordura": "15.0",
    "carboidrato": "0.0"
  },
  "Carne, bovina, capa de contra-filé, com gordura, grelhada": {
    "energia": "312",
    "proteina": "30.7",
    "gordura": "20.0",
    "carboidrato": "0.0"
  },
  "Carne, bovina, capa de contra-filé, sem gordura, crua": {
    "energia": "131",
    "proteina": "21.5",
    "gordura": "4.3",
    "carboidrato": "0.0"
  },
  "Carne, bovina, capa de contra-filé, sem gordura, grelhada": {
    "energia": "239",
    "proteina": "35.1",
    "gordura": "10.0",
    "carboidrato": "0.0"
  },
  "Carne, bovina, charque, cozido": {
    "energia": "263",
    "proteina": "36.4",
    "gordura": "11.9",
    "carboidrato": "0.0"
  },
  "Carne, bovina, charque, cru": {
    "energia": "249",
    "proteina": "22.7",
    "gordura": "16.8",
    "carboidrato": "0.0"
  },
  "Carne, bovina, contra-filé, à milanesa": {
    "energia": "352",
    "proteina": "20.6",
    "gordura": "24.0",
    "carboidrato": "12.2"
  },
  "Carne, bovina, contra-filé de costela, cru": {
    "energia": "202",
    "proteina": "19.8",
    "gordura": "13.1",
    "carboidrato": "0.0"
  },
  "Carne, bovina, contra-filé de costela, grelhado": {
    "energia": "275",
    "proteina": "29.9",
    "gordura": "16.3",
    "carboidrato": "0.0"
  },
  "Carne, bovina, contra-filé, com gordura, cru": {
    "energia": "206",
    "proteina": "21.2",
    "gordura": "12.8",
    "carboidrato": "0.0"
  },
  "Carne, bovina, contra-filé, com gordura, grelhado": {
    "energia": "278",
    "proteina": "32.4",
    "gordura": "15.5",
    "carboidrato": "0.0"
  },
  "Carne, bovina, contra-filé, sem gordura, cru": {
    "energia": "157",
    "proteina": "24.0",
    "gordura": "6.0",
    "carboidrato": "0.0"
  },
  "Carne, bovina, contra-filé, sem gordura, grelhado": {
    "energia": "194",
    "proteina": "35.9",
    "gordura": "4.5",
    "carboidrato": "0.0"
  },
  "Carne, bovina, costela, assada": {
    "energia": "373",
    "proteina": "28.8",
    "gordura": "27.7",
    "carboidrato": "0.0"
  },
  "Carne, bovina, costela, crua": {
    "energia": "358",
    "proteina": "16.7",
    "gordura": "31.8",
    "carboidrato": "0.0"
  },
  "Carne, bovina, coxão duro, sem gordura, cozido": {
    "energia": "217",
    "proteina": "31.9",
    "gordura": "8.9",
    "carboidrato": "0.0"
  },
  "Carne, bovina, coxão duro, sem gordura, cru": {
    "energia": "148",
    "proteina": "21.5",
    "gordura": "6.2",
    "carboidrato": "0.0"
  },
  "Carne, bovina, coxão mole, sem gordura, cozido": {
    "energia": "219",
    "proteina": "32.4",
    "gordura": "8.9",
    "carboidrato": "0.0"
  },
  "Carne, bovina, coxão mole, sem gordura, cru": {
    "energia": "169",
    "proteina": "21.2",
    "gordura": "8.7",
    "carboidrato": "0.0"
  },
  "Carne, bovina, cupim, assado": {
    "energia": "330",
    "proteina": "28.6",
    "gordura": "23.0",
    "carboidrato": "0.0"
  },
  "Carne, bovina, cupim, cru": {
    "energia": "221",
    "proteina": "19.5",
    "gordura": "15.3",
    "carboidrato": "0.0"
  },
  "Carne, bovina, fígado, cru": {
    "energia": "141",
    "proteina": "20.7",
    "gordura": "5.4",
    "carboidrato": "1.1"
  },
  "Carne, bovina, fígado, grelhado": {
    "energia": "225",
    "proteina": "29.9",
    "gordura": "9.0",
    "carboidrato": "4.2"
  },
  "Carne, bovina, filé mingnon, sem gordura, cru": {
    "energia": "143",
    "proteina": "21.6",
    "gordura": "5.6",
    "carboidrato": "0.0"
  },
  "Carne, bovina, filé mingnon, sem gordura, grelhado": {
    "energia": "220",
    "proteina": "32.8",
    "gordura": "8.8",
    "carboidrato": "0.0"
  },
  "Carne, bovina, flanco, sem gordura, cozido": {
    "energia": "196",
    "proteina": "29.4",
    "gordura": "7.8",
    "carboidrato": "0.0"
  },
  "Carne, bovina, flanco, sem gordura, cru": {
    "energia": "141",
    "proteina": "20.0",
    "gordura": "6.2",
    "carboidrato": "0.0"
  },
  "Carne, bovina, fraldinha, com gordura, cozida": {
    "energia": "338",
    "proteina": "24.2",
    "gordura": "26.0",
    "carboidrato": "0.0"
  },
  "Carne, bovina, fraldinha, com gordura, crua": {
    "energia": "221",
    "proteina": "17.6",
    "gordura": "16.1",
    "carboidrato": "0.0"
  },
  "Carne, bovina, lagarto, cozido": {
    "energia": "222",
    "proteina": "32.9",
    "gordura": "9.1",
    "carboidrato": "0.0"
  },
  "Carne, bovina, lagarto, cru": {
    "energia": "135",
    "proteina": "20.5",
    "gordura": "5.2",
    "carboidrato": "0.0"
  },
  "Carne, bovina, língua, cozida": {
    "energia": "315",
    "proteina": "21.4",
    "gordura": "24.8",
    "carboidrato": "0.0"
  },
  "Carne, bovina, língua, crua": {
    "energia": "215",
    "proteina": "17.1",
    "gordura": "15.8",
    "carboidrato": "0.0"
  },
  "Carne, bovina, maminha, crua": {
    "energia": "153",
    "proteina": "20.9",
    "gordura": "7.0",
    "carboidrato": "0.0"
  },
  "Carne, bovina, maminha, grelhada": {
    "energia": "153",
    "proteina": "30.7",
    "gordura": "2.4",
    "carboidrato": "0.0"
  },
  "Carne, bovina, miolo de alcatra, sem gordura, cru": {
    "energia": "163",
    "proteina": "21.6",
    "gordura": "7.8",
    "carboidrato": "0.0"
  },
  "Carne, bovina, miolo de alcatra, sem gordura, grelhado": {
    "energia": "241",
    "proteina": "31.9",
    "gordura": "11.6",
    "carboidrato": "0.0"
  },
  "Carne, bovina, músculo, sem gordura, cozido": {
    "energia": "194",
    "proteina": "31.2",
    "gordura": "6.7",
    "carboidrato": "0.0"
  },
  "Carne, bovina, músculo, sem gordura, cru": {
    "energia": "142",
    "proteina": "21.6",
    "gordura": "5.5",
    "carboidrato": "0.0"
  },
  "Carne, bovina, paleta, com gordura, crua": {
    "energia": "159",
    "proteina": "21.4",
    "gordura": "7.5",
    "carboidrato": "0.0"
  },
  "Carne, bovina, paleta, sem gordura, cozida": {
    "energia": "194",
    "proteina": "29.7",
    "gordura": "7.4",
    "carboidrato": "0.0"
  },
  "Carne, bovina, paleta, sem gordura, crua": {
    "energia": "141",
    "proteina": "21.0",
    "gordura": "5.7",
    "carboidrato": "0.0"
  },
  "Carne, bovina, patinho, sem gordura, cru": {
    "energia": "133",
    "proteina": "21.7",
    "gordura": "4.5",
    "carboidrato": "0.0"
  },
  "Carne, bovina, patinho, sem gordura, grelhado": {
    "energia": "219",
    "proteina": "35.9",
    "gordura": "7.3",
    "carboidrato": "0.0"
  },
  "Carne, bovina, peito, sem gordura, cozido": {
    "energia": "338",
    "proteina": "22.2",
    "gordura": "27.0",
    "carboidrato": "0.0"
  },
  "Carne, bovina, peito, sem gordura, cru": {
    "energia": "259",
    "proteina": "17.6",
    "gordura": "20.4",
    "carboidrato": "0.0"
  },
  "Carne, bovina, picanha, com gordura, crua": {
    "energia": "213",
    "proteina": "18.8",
    "gordura": "14.7",
    "carboidrato": "0.0"
  },
  "Carne, bovina, picanha, com gordura, grelhada": {
    "energia": "289",
    "proteina": "26.4",
    "gordura": "19.5",
    "carboidrato": "0.0"
  },
  "Carne, bovina, picanha, sem gordura, crua": {
    "energia": "134",
    "proteina": "21.3",
    "gordura": "4.7",
    "carboidrato": "0.0"
  },
  "Carne, bovina, picanha, sem gordura, grelhada": {
    "energia": "238",
    "proteina": "31.9",
    "gordura": "11.3",
    "carboidrato": "0.0"
  },
  "Carne, bovina, seca, cozida": {
    "energia": "313",
    "proteina": "26.9",
    "gordura": "21.9",
    "carboidrato": "0.0"
  },
  "Carne, bovina, seca, crua": {
    "energia": "313",
    "proteina": "19.7",
    "gordura": "25.4",
    "carboidrato": "0.0"
  },
  "Coxinha de frango, frita": {
    "energia": "283",
    "proteina": "9.6",
    "gordura": "11.8",
    "carboidrato": "34.5"
  },
  "Croquete, de carne, cru": {
    "energia": "246",
    "proteina": "12.0",
    "gordura": "15.6",
    "carboidrato": "13.9"
  },
  "Croquete, de carne, frito": {
    "energia": "347",
    "proteina": "16.9",
    "gordura": "22.7",
    "carboidrato": "18.1"
  },
  "Empada de frango, pré-cozida, assada": {
    "energia": "358",
    "proteina": "6.9",
    "gordura": "15.6",
    "carboidrato": "47.5"
  },
  "Empada, de frango, pré-cozida": {
    "energia": "377",
    "proteina": "7.3",
    "gordura": "22.9",
    "carboidrato": "35.5"
  },
  "Frango, asa, com pele, crua": {
    "energia": "213",
    "proteina": "18.1",
    "gordura": "15.1",
    "carboidrato": "0.0"
  },
  "Frango, caipira, inteiro, com pele, cozido": {
    "energia": "243",
    "proteina": "23.9",
    "gordura": "15.6",
    "carboidrato": "0.0"
  },
  "Frango, caipira, inteiro, sem pele, cozido": {
    "energia": "196",
    "proteina": "29.6",
    "gordura": "7.7",
    "carboidrato": "0.0"
  },
  "Frango, coração, cru": {
    "energia": "222",
    "proteina": "12.6",
    "gordura": "18.6",
    "carboidrato": "0.0"
  },
  "Frango, coração, grelhado": {
    "energia": "207",
    "proteina": "22.4",
    "gordura": "12.1",
    "carboidrato": "0.6"
  },
  "Frango, coxa, com pele, assada": {
    "energia": "215",
    "proteina": "28.5",
    "gordura": "10.4",
    "carboidrato": "0.1"
  },
  "Frango, coxa, com pele, crua": {
    "energia": "161",
    "proteina": "17.1",
    "gordura": "9.8",
    "carboidrato": "0.0"
  },
  "Frango, coxa, sem pele, cozida": {
    "energia": "167",
    "proteina": "26.9",
    "gordura": "5.8",
    "carboidrato": "0.0"
  },
  "Frango, coxa, sem pele, crua": {
    "energia": "120",
    "proteina": "17.8",
    "gordura": "4.9",
    "carboidrato": "0.0"
  },
  "Frango, fígado, cru": {
    "energia": "106",
    "proteina": "17.6",
    "gordura": "3.5",
    "carboidrato": "0.0"
  },
  "Frango, filé, à milanesa": {
    "energia": "221",
    "proteina": "28.5",
    "gordura": "7.8",
    "carboidrato": "7.5"
  },
  "Frango, inteiro, com pele, cru": {
    "energia": "226",
    "proteina": "16.4",
    "gordura": "17.3",
    "carboidrato": "0.0"
  },
  "Frango, inteiro, sem pele, assado": {
    "energia": "187",
    "proteina": "28.0",
    "gordura": "7.5",
    "carboidrato": "0.0"
  },
  "Frango, inteiro, sem pele, cozido": {
    "energia": "170",
    "proteina": "25.0",
    "gordura": "7.1",
    "carboidrato": "0.0"
  },
  "Frango, inteiro, sem pele, cru": {
    "energia": "129",
    "proteina": "20.6",
    "gordura": "4.6",
    "carboidrato": "0.0"
  },
  "Frango, peito, com pele, assado": {
    "energia": "212",
    "proteina": "33.4",
    "gordura": "7.6",
    "carboidrato": "0.0"
  },
  "Frango, peito, com pele, cru": {
    "energia": "149",
    "proteina": "20.8",
    "gordura": "6.7",
    "carboidrato": "0.0"
  },
  "Frango, peito, sem pele, cozido": {
    "energia": "163",
    "proteina": "31.5",
    "gordura": "3.2",
    "carboidrato": "0.0"
  },
  "Frango, peito, sem pele, cru": {
    "energia": "119",
    "proteina": "21.5",
    "gordura": "3.0",
    "carboidrato": "0.0"
  },
  "Frango, peito, sem pele, grelhado": {
    "energia": "159",
    "proteina": "32.0",
    "gordura": "2.5",
    "carboidrato": "0.0"
  },
  "Frango, sobrecoxa, com pele, assada": {
    "energia": "260",
    "proteina": "28.7",
    "gordura": "15.2",
    "carboidrato": "0.0"
  },
  "Frango, sobrecoxa, com pele, crua": {
    "energia": "255",
    "proteina": "15.5",
    "gordura": "20.9",
    "carboidrato": "0.0"
  },
  "Frango, sobrecoxa, sem pele, assada": {
    "energia": "233",
    "proteina": "29.2",
    "gordura": "12.0",
    "carboidrato": "0.0"
  },
  "Frango, sobrecoxa, sem pele, crua": {
    "energia": "162",
    "proteina": "17.6",
    "gordura": "9.6",
    "carboidrato": "0.0"
  },
  "Hambúrguer, bovino, cru": {
    "energia": "215",
    "proteina": "13.2",
    "gordura": "16.2",
    "carboidrato": "4.2"
  },
  "Hambúrguer, bovino, frito": {
    "energia": "258",
    "proteina": "20.0",
    "gordura": "17.0",
    "carboidrato": "6.3"
  },
  "Hambúrguer, bovino, grelhado": {
    "energia": "210",
    "proteina": "13.2",
    "gordura": "12.4",
    "carboidrato": "11.3"
  },
  "Lingüiça, frango, crua": {
    "energia": "218",
    "proteina": "14.2",
    "gordura": "17.4",
    "carboidrato": "0.0"
  },
  "Lingüiça, frango, frita": {
    "energia": "245",
    "proteina": "18.3",
    "gordura": "18.5",
    "carboidrato": "0.0"
  },
  "Lingüiça, frango, grelhada": {
    "energia": "244",
    "proteina": "18.2",
    "gordura": "18.4",
    "carboidrato": "0.0"
  },
  "Lingüiça, porco, crua": {
    "energia": "227",
    "proteina": "16.1",
    "gordura": "17.6",
    "carboidrato": "0.0"
  },
  "Lingüiça, porco, frita": {
    "energia": "280",
    "proteina": "20.5",
    "gordura": "21.3",
    "carboidrato": "0.0"
  },
  "Lingüiça, porco, grelhada": {
    "energia": "296",
    "proteina": "23.2",
    "gordura": "21.9",
    "carboidrato": "0.0"
  },
  "Mortadela": {
    "energia": "269",
    "proteina": "12.0",
    "gordura": "21.6",
    "carboidrato": "5.8"
  },
  "Peru, congelado, assado": {
    "energia": "163",
    "proteina": "26.2",
    "gordura": "5.7",
    "carboidrato": "0.0"
  },
  "Peru, congelado, cru": {
    "energia": "94",
    "proteina": "18.1",
    "gordura": "1.8",
    "carboidrato": "0.0"
  },
  "Porco, bisteca, crua": {
    "energia": "164",
    "proteina": "21.5",
    "gordura": "8.0",
    "carboidrato": "0.0"
  },
  "Porco, bisteca, frita": {
    "energia": "311",
    "proteina": "33.7",
    "gordura": "18.5",
    "carboidrato": "0.0"
  },
  "Porco, bisteca, grelhada": {
    "energia": "280",
    "proteina": "28.9",
    "gordura": "17.4",
    "carboidrato": "0.0"
  },
  "Porco, costela, assada": {
    "energia": "402",
    "proteina": "30.2",
    "gordura": "30.3",
    "carboidrato": "0.0"
  },
  "Porco, costela, crua": {
    "energia": "256",
    "proteina": "18.0",
    "gordura": "19.8",
    "carboidrato": "0.0"
  },
  "Porco, lombo, assado": {
    "energia": "210",
    "proteina": "35.7",
    "gordura": "6.4",
    "carboidrato": "0.0"
  },
  "Porco, lombo, cru": {
    "energia": "176",
    "proteina": "22.6",
    "gordura": "8.8",
    "carboidrato": "0.0"
  },
  "Porco, orelha, salgada, crua": {
    "energia": "258",
    "proteina": "18.5",
    "gordura": "19.9",
    "carboidrato": "0.0"
  },
  "Porco, pernil, assado": {
    "energia": "262",
    "proteina": "32.1",
    "gordura": "13.9",
    "carboidrato": "0.0"
  },
  "Porco, pernil, cru": {
    "energia": "186",
    "proteina": "20.1",
    "gordura": "11.1",
    "carboidrato": "0.0"
  },
  "Porco, rabo, salgado, cru": {
    "energia": "377",
    "proteina": "15.6",
    "gordura": "34.5",
    "carboidrato": "0.0"
  },
  "Presunto, com capa de gordura": {
    "energia": "128",
    "proteina": "14.4",
    "gordura": "6.8",
    "carboidrato": "1.4"
  },
  "Presunto, sem capa de gordura": {
    "energia": "94",
    "proteina": "14.3",
    "gordura": "2.7",
    "carboidrato": "2.1"
  },
  "Quibe, assado": {
    "energia": "136",
    "proteina": "14.6",
    "gordura": "2.7",
    "carboidrato": "12.9"
  },
  "Quibe, cru": {
    "energia": "109",
    "proteina": "12.4",
    "gordura": "1.7",
    "carboidrato": "10.8"
  },
  "Quibe, frito": {
    "energia": "254",
    "proteina": "14.9",
    "gordura": "15.8",
    "carboidrato": "12.3"
  },
  "Salame": {
    "energia": "398",
    "proteina": "25.8",
    "gordura": "30.6",
    "carboidrato": "2.9"
  },
  "Toucinho, cru": {
    "energia": "593",
    "proteina": "11.5",
    "gordura": "60.3",
    "carboidrato": "0.0"
  },
  "Toucinho, frito": {
    "energia": "697",
    "proteina": "27.3",
    "gordura": "64.3",
    "carboidrato": "0.0"
  },
  "Bebida láctea, pêssego": {
    "energia": "55",
    "proteina": "2.1",
    "gordura": "1.9",
    "carboidrato": "7.6"
  },
  "Creme de Leite": {
    "energia": "221",
    "proteina": "1.5",
    "gordura": "22.5",
    "carboidrato": "4.5"
  },
  "Iogurte, natural": {
    "energia": "51",
    "proteina": "4.1",
    "gordura": "3.0",
    "carboidrato": "1.9"
  },
  "Iogurte, natural, desnatado": {
    "energia": "41",
    "proteina": "3.8",
    "gordura": "0.3",
    "carboidrato": "5.8"
  },
  "Iogurte, sabor abacaxi": {
    "energia": "*",
    "proteina": "*",
    "gordura": "*",
    "carboidrato": "*"
  },
  "Iogurte, sabor morango": {
    "energia": "70",
    "proteina": "2.7",
    "gordura": "2.3",
    "carboidrato": "9.7"
  },
  "Iogurte, sabor pêssego": {
    "energia": "68",
    "proteina": "2.5",
    "gordura": "2.3",
    "carboidrato": "9.4"
  },
  "Leite, condensado": {
    "energia": "313",
    "proteina": "7.7",
    "gordura": "6.7",
    "carboidrato": "57.0"
  },
  "Leite, de cabra": {
    "energia": "66",
    "proteina": "3.1",
    "gordura": "3.8",
    "carboidrato": "5.2"
  },
  "Leite, de vaca, achocolatado": {
    "energia": "83",
    "proteina": "2.1",
    "gordura": "2.2",
    "carboidrato": "14.2"
  },
  "Leite, de vaca, desnatado, pó": {
    "energia": "362",
    "proteina": "34.7",
    "gordura": "0.9",
    "carboidrato": "53.0"
  },
  "Leite, de vaca, desnatado, UHT": {
    "energia": "*",
    "proteina": "*",
    "gordura": "*",
    "carboidrato": "*"
  },
  "Leite, de vaca, integral": {
    "energia": "*",
    "proteina": "*",
    "gordura": "*",
    "carboidrato": "*"
  },
  "Leite, de vaca, integral, pó": {
    "energia": "497",
    "proteina": "25.4",
    "gordura": "26.9",
    "carboidrato": "39.2"
  },
  "Leite, fermentado": {
    "energia": "70",
    "proteina": "1.9",
    "gordura": "0.1",
    "carboidrato": "15.7"
  },
  "Queijo, minas, frescal": {
    "energia": "264",
    "proteina": "17.4",
    "gordura": "20.2",
    "carboidrato": "3.2"
  },
  "Queijo, minas, meia cura": {
    "energia": "321",
    "proteina": "21.2",
    "gordura": "24.6",
    "carboidrato": "3.6"
  },
  "Queijo, mozarela": {
    "energia": "330",
    "proteina": "22.6",
    "gordura": "25.2",
    "carboidrato": "3.0"
  },
  "Queijo, parmesão": {
    "energia": "453",
    "proteina": "35.6",
    "gordura": "33.5",
    "carboidrato": "1.7"
  },
  "Queijo, pasteurizado": {
    "energia": "303",
    "proteina": "9.4",
    "gordura": "27.4",
    "carboidrato": "5.7"
  },
  "Queijo, petit suisse, morango": {
    "energia": "121",
    "proteina": "5.8",
    "gordura": "2.8",
    "carboidrato": "18.5"
  },
  "Queijo, prato": {
    "energia": "360",
    "proteina": "22.7",
    "gordura": "29.1",
    "carboidrato": "1.9"
  },
  "Queijo, requeijão, cremoso": {
    "energia": "257",
    "proteina": "9.6",
    "gordura": "23.4",
    "carboidrato": "2.4"
  },
  "Queijo, ricota": {
    "energia": "140",
    "proteina": "12.6",
    "gordura": "8.1",
    "carboidrato": "3.8"
  },
  "Bebida isotônica, sabores variados": {
    "energia": "26",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "6.4"
  },
  "Café, infusão 10%": {
    "energia": "9",
    "proteina": "0.7",
    "gordura": "0.1",
    "carboidrato": "1.5"
  },
  "Cana, aguardente 1": {
    "energia": "216",
    "proteina": "",
    "gordura": "",
    "carboidrato": ""
  },
  "Cana, caldo de": {
    "energia": "65",
    "proteina": "Tr",
    "gordura": "Tr",
    "carboidrato": "18.2"
  },
  "Cerveja, pilsen 2": {
    "energia": "41",
    "proteina": "0.6",
    "gordura": "Tr",
    "carboidrato": "3.3"
  },
  "Chá, erva-doce, infusão 5%": {
    "energia": "1",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "0.4"
  },
  "Chá, mate, infusão 5%": {
    "energia": "3",
    "proteina": "0.0",
    "gordura": "0.1",
    "carboidrato": "0.6"
  },
  "Chá, preto, infusão 5%": {
    "energia": "2",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "0.6"
  },
  "Coco, água de": {
    "energia": "22",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "5.3"
  },
  "Refrigerante, tipo água tônica": {
    "energia": "31",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "8.0"
  },
  "Refrigerante, tipo cola": {
    "energia": "34",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "8.7"
  },
  "Refrigerante, tipo guaraná": {
    "energia": "39",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "10.0"
  },
  "Refrigerante, tipo laranja": {
    "energia": "46",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "11.8"
  },
  "Refrigerante, tipo limão": {
    "energia": "40",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "10.3"
  },
  "Omelete, de queijo": {
    "energia": "268",
    "proteina": "15.6",
    "gordura": "22.0",
    "carboidrato": "0.4"
  },
  "Ovo, de codorna, inteiro, cru": {
    "energia": "177",
    "proteina": "13.7",
    "gordura": "12.7",
    "carboidrato": "0.8"
  },
  "Ovo, de galinha, clara, cozida/10minutos": {
    "energia": "59",
    "proteina": "13.4",
    "gordura": "0.1",
    "carboidrato": "0.0"
  },
  "Ovo, de galinha, gema, cozida/10minutos": {
    "energia": "353",
    "proteina": "15.9",
    "gordura": "30.8",
    "carboidrato": "1.6"
  },
  "Ovo, de galinha, inteiro, cozido/10minutos": {
    "energia": "146",
    "proteina": "13.3",
    "gordura": "9.5",
    "carboidrato": "0.6"
  },
  "Ovo, de galinha, inteiro, cru": {
    "energia": "143",
    "proteina": "13.0",
    "gordura": "8.9",
    "carboidrato": "1.6"
  },
  "Ovo, de galinha, inteiro, frito": {
    "energia": "240",
    "proteina": "15.6",
    "gordura": "18.6",
    "carboidrato": "1.2"
  },
  "Achocolatado, pó": {
    "energia": "401",
    "proteina": "4.2",
    "gordura": "2.2",
    "carboidrato": "91.2"
  },
  "Açúcar, cristal": {
    "energia": "387",
    "proteina": "0.3",
    "gordura": "Tr",
    "carboidrato": "99.6"
  },
  "Açúcar, mascavo": {
    "energia": "369",
    "proteina": "0.8",
    "gordura": "0.1",
    "carboidrato": "94.5"
  },
  "Açúcar, refinado": {
    "energia": "387",
    "proteina": "0.3",
    "gordura": "Tr",
    "carboidrato": "99.5"
  },
  "Chocolate, ao leite": {
    "energia": "540",
    "proteina": "7.2",
    "gordura": "30.3",
    "carboidrato": "59.6"
  },
  "Chocolate, ao leite, com castanha do Pará": {
    "energia": "559",
    "proteina": "7.4",
    "gordura": "34.2",
    "carboidrato": "55.4"
  },
  "Chocolate, ao leite, dietético": {
    "energia": "557",
    "proteina": "6.9",
    "gordura": "33.8",
    "carboidrato": "56.3"
  },
  "Chocolate, meio amargo": {
    "energia": "475",
    "proteina": "4.9",
    "gordura": "29.9",
    "carboidrato": "62.4"
  },
  "Cocada branca": {
    "energia": "449",
    "proteina": "1.1",
    "gordura": "13.6",
    "carboidrato": "81.4"
  },
  "Doce, de abóbora, cremoso": {
    "energia": "199",
    "proteina": "0.9",
    "gordura": "0.2",
    "carboidrato": "54.6"
  },
  "Doce, de leite, cremoso": {
    "energia": "306",
    "proteina": "5.5",
    "gordura": "6.0",
    "carboidrato": "59.5"
  },
  "Geléia, mocotó, natural": {
    "energia": "106",
    "proteina": "2.1",
    "gordura": "0.1",
    "carboidrato": "24.2"
  },
  "Glicose de milho": {
    "energia": "292",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "79.4"
  },
  "Maria mole": {
    "energia": "301",
    "proteina": "3.8",
    "gordura": "0.2",
    "carboidrato": "73.6"
  },
  "Maria mole, coco queimado": {
    "energia": "307",
    "proteina": "3.9",
    "gordura": "0.1",
    "carboidrato": "75.1"
  },
  "Marmelada": {
    "energia": "257",
    "proteina": "0.4",
    "gordura": "0.1",
    "carboidrato": "70.8"
  },
  "Mel, de abelha": {
    "energia": "309",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "84.0"
  },
  "Melado": {
    "energia": "297",
    "proteina": "0.0",
    "gordura": "0.0",
    "carboidrato": "76.6"
  },
  "Quindim": {
    "energia": "411",
    "proteina": "4.7",
    "gordura": "24.4",
    "carboidrato": "46.3"
  },
  "Rapadura": {
    "energia": "352",
    "proteina": "1.0",
    "gordura": "0.1",
    "carboidrato": "90.8"
  },
  "Café, pó, torrado": {
    "energia": "419",
    "proteina": "14.7",
    "gordura": "11.9",
    "carboidrato": "65.8"
  },
  "Capuccino, pó": {
    "energia": "417",
    "proteina": "11.3",
    "gordura": "8.6",
    "carboidrato": "73.6"
  },
  "Fermento em pó, químico": {
    "energia": "90",
    "proteina": "0.5",
    "gordura": "0.1",
    "carboidrato": "43.9"
  },
  "Fermento, biológico, levedura, tablete": {
    "energia": "90",
    "proteina": "17.0",
    "gordura": "1.5",
    "carboidrato": "7.7"
  },
  "Gelatina, sabores variados, pó": {
    "energia": "380",
    "proteina": "8.9",
    "gordura": "Tr",
    "carboidrato": "89.2"
  },
  "Sal, dietético": {
    "energia": "NA",
    "proteina": "NA",
    "gordura": "NA",
    "carboidrato": "NA"
  },
  "Sal, grosso": {
    "energia": "NA",
    "proteina": "NA",
    "gordura": "NA",
    "carboidrato": "NA"
  },
  "Shoyu": {
    "energia": "61",
    "proteina": "3.3",
    "gordura": "0.3",
    "carboidrato": "11.6"
  },
  "Tempero a base de sal": {
    "energia": "21",
    "proteina": "2.7",
    "gordura": "0.3",
    "carboidrato": "2.1"
  },
  "Azeitona, preta, conserva": {
    "energia": "194",
    "proteina": "1.2",
    "gordura": "20.3",
    "carboidrato": "5.5"
  },
  "Azeitona, verde, conserva": {
    "energia": "137",
    "proteina": "0.9",
    "gordura": "14.2",
    "carboidrato": "4.1"
  },
  "Chantilly, spray, com gordura vegetal": {
    "energia": "315",
    "proteina": "0.5",
    "gordura": "27.3",
    "carboidrato": "16.9"
  },
  "Leite, de coco": {
    "energia": "166",
    "proteina": "1.0",
    "gordura": "18.4",
    "carboidrato": "2.2"
  },
  "Maionese, tradicional com ovos": {
    "energia": "302",
    "proteina": "0.6",
    "gordura": "30.5",
    "carboidrato": "7.9"
  },
  "Acarajé": {
    "energia": "289",
    "proteina": "8.3",
    "gordura": "19.9",
    "carboidrato": "19.1"
  },
  "Arroz carreteiro": {
    "energia": "154",
    "proteina": "10.8",
    "gordura": "7.1",
    "carboidrato": "11.6"
  },
  "Baião de dois, arroz e feijão-de-corda": {
    "energia": "136",
    "proteina": "6.2",
    "gordura": "3.2",
    "carboidrato": "20.4"
  },
  "Barreado": {
    "energia": "165",
    "proteina": "18.3",
    "gordura": "9.5",
    "carboidrato": "0.2"
  },
  "Bife à cavalo, com contra filé": {
    "energia": "291",
    "proteina": "23.7",
    "gordura": "21.1",
    "carboidrato": "0.0"
  },
  "Bolinho de arroz": {
    "energia": "274",
    "proteina": "8.0",
    "gordura": "8.3",
    "carboidrato": "41.7"
  },
  "Camarão à baiana": {
    "energia": "101",
    "proteina": "7.9",
    "gordura": "6.0",
    "carboidrato": "3.2"
  },
  "Charuto, de repolho": {
    "energia": "78",
    "proteina": "6.8",
    "gordura": "1.1",
    "carboidrato": "10.1"
  },
  "Cuscuz, de milho, cozido com sal": {
    "energia": "113",
    "proteina": "2.2",
    "gordura": "0.7",
    "carboidrato": "25.3"
  },
  "Cuscuz, paulista": {
    "energia": "142",
    "proteina": "2.6",
    "gordura": "4.6",
    "carboidrato": "22.5"
  },
  "Cuxá, molho": {
    "energia": "80",
    "proteina": "5.6",
    "gordura": "3.6",
    "carboidrato": "5.7"
  },
  "Dobradinha": {
    "energia": "125",
    "proteina": "19.8",
    "gordura": "4.4",
    "carboidrato": "0.0"
  },
  "Estrogonofe de carne": {
    "energia": "173",
    "proteina": "15.0",
    "gordura": "10.8",
    "carboidrato": "3.0"
  },
  "Estrogonofe de frango": {
    "energia": "157",
    "proteina": "17.6",
    "gordura": "8.0",
    "carboidrato": "2.6"
  },
  "Feijão tropeiro mineiro": {
    "energia": "152",
    "proteina": "10.2",
    "gordura": "6.8",
    "carboidrato": "19.6"
  },
  "Feijoada": {
    "energia": "117",
    "proteina": "8.7",
    "gordura": "6.5",
    "carboidrato": "11.6"
  },
  "Frango, com açafrão": {
    "energia": "113",
    "proteina": "9.7",
    "gordura": "6.2",
    "carboidrato": "4.1"
  },
  "Macarrão, molho bolognesa": {
    "energia": "120",
    "proteina": "4.9",
    "gordura": "0.9",
    "carboidrato": "22.5"
  },
  "Maniçoba": {
    "energia": "134",
    "proteina": "10.0",
    "gordura": "8.7",
    "carboidrato": "3.4"
  },
  "Quibebe": {
    "energia": "86",
    "proteina": "8.6",
    "gordura": "2.7",
    "carboidrato": "6.6"
  },
  "Salada, de legumes, com maionese": {
    "energia": "96",
    "proteina": "1.1",
    "gordura": "7.0",
    "carboidrato": "8.9"
  },
  "Salada, de legumes, cozida no vapor": {
    "energia": "35",
    "proteina": "2.0",
    "gordura": "0.3",
    "carboidrato": "7.1"
  },
  "Salpicão, de frango": {
    "energia": "148",
    "proteina": "13.9",
    "gordura": "7.8",
    "carboidrato": "4.6"
  },
  "Sarapatel": {
    "energia": "123",
    "proteina": "18.5",
    "gordura": "4.4",
    "carboidrato": "1.1"
  },
  "Tabule": {
    "energia": "57",
    "proteina": "2.0",
    "gordura": "1.2",
    "carboidrato": "10.6"
  },
  "Tacacá": {
    "energia": "47",
    "proteina": "7.0",
    "gordura": "0.4",
    "carboidrato": "3.4"
  },
  "Tapioca, com manteiga": {
    "energia": "348",
    "proteina": "0.1",
    "gordura": "10.9",
    "carboidrato": "63.6"
  },
  "Tucupi, com pimenta-de-cheiro": {
    "energia": "27",
    "proteina": "2.1",
    "gordura": "0.3",
    "carboidrato": "4.7"
  },
  "Vaca atolada": {
    "energia": "145",
    "proteina": "5.1",
    "gordura": "9.3",
    "carboidrato": "10.1"
  },
  "Vatapá": {
    "energia": "255",
    "proteina": "6.0",
    "gordura": "23.2",
    "carboidrato": "9.7"
  },
  "Virado à paulista": {
    "energia": "307",
    "proteina": "10.2",
    "gordura": "25.6",
    "carboidrato": "14.1"
  },
  "Yakisoba": {
    "energia": "113",
    "proteina": "7.5",
    "gordura": "2.6",
    "carboidrato": "18.3"
  },
  "Amendoim, grão, cru": {
    "energia": "544",
    "proteina": "27.2",
    "gordura": "43.9",
    "carboidrato": "20.3"
  },
  "Amendoim, torrado, salgado": {
    "energia": "606",
    "proteina": "22.5",
    "gordura": "54.0",
    "carboidrato": "18.7"
  },
  "Ervilha, em vagem": {
    "energia": "88",
    "proteina": "7.5",
    "gordura": "0.5",
    "carboidrato": "14.2"
  },
  "Ervilha, enlatada, drenada": {
    "energia": "74",
    "proteina": "4.6",
    "gordura": "0.4",
    "carboidrato": "13.4"
  },
  "Feijão, carioca, cozido": {
    "energia": "76",
    "proteina": "4.8",
    "gordura": "0.5",
    "carboidrato": "13.6"
  },
  "Feijão, carioca, cru": {
    "energia": "329",
    "proteina": "20.0",
    "gordura": "1.3",
    "carboidrato": "61.2"
  },
  "Feijão, fradinho, cozido": {
    "energia": "78",
    "proteina": "5.1",
    "gordura": "0.6",
    "carboidrato": "13.5"
  },
  "Feijão, fradinho, cru": {
    "energia": "339",
    "proteina": "20.2",
    "gordura": "2.4",
    "carboidrato": "61.2"
  },
  "Feijão, jalo, cozido": {
    "energia": "93",
    "proteina": "6.1",
    "gordura": "0.5",
    "carboidrato": "16.5"
  },
  "Feijão, jalo, cru": {
    "energia": "328",
    "proteina": "20.1",
    "gordura": "0.9",
    "carboidrato": "61.5"
  },
  "Feijão, preto, cozido": {
    "energia": "77",
    "proteina": "4.5",
    "gordura": "0.5",
    "carboidrato": "14.0"
  },
  "Feijão, preto, cru": {
    "energia": "324",
    "proteina": "21.3",
    "gordura": "1.2",
    "carboidrato": "58.8"
  },
  "Feijão, rajado, cozido": {
    "energia": "85",
    "proteina": "5.5",
    "gordura": "0.4",
    "carboidrato": "15.3"
  },
  "Feijão, rajado, cru": {
    "energia": "326",
    "proteina": "17.3",
    "gordura": "1.2",
    "carboidrato": "62.9"
  },
  "Feijão, rosinha, cozido": {
    "energia": "68",
    "proteina": "4.5",
    "gordura": "0.5",
    "carboidrato": "11.8"
  },
  "Feijão, rosinha, cru": {
    "energia": "337",
    "proteina": "20.9",
    "gordura": "1.3",
    "carboidrato": "62.2"
  },
  "Feijão, roxo, cozido": {
    "energia": "77",
    "proteina": "5.7",
    "gordura": "0.5",
    "carboidrato": "12.9"
  },
  "Feijão, roxo, cru": {
    "energia": "331",
    "proteina": "22.2",
    "gordura": "1.2",
    "carboidrato": "60.0"
  },
  "Grão-de-bico, cru": {
    "energia": "355",
    "proteina": "21.2",
    "gordura": "5.4",
    "carboidrato": "57.9"
  },
  "Guandu, cru": {
    "energia": "344",
    "proteina": "19.0",
    "gordura": "2.1",
    "carboidrato": "64.0"
  },
  "Lentilha, cozida": {
    "energia": "93",
    "proteina": "6.3",
    "gordura": "0.5",
    "carboidrato": "16.3"
  },
  "Lentilha, crua": {
    "energia": "339",
    "proteina": "23.2",
    "gordura": "0.8",
    "carboidrato": "62.0"
  },
  "Paçoca, amendoim": {
    "energia": "487",
    "proteina": "16.0",
    "gordura": "26.1",
    "carboidrato": "52.4"
  },
  "Pé-de-moleque, amendoim": {
    "energia": "503",
    "proteina": "13.2",
    "gordura": "28.0",
    "carboidrato": "54.7"
  },
  "Soja, farinha": {
    "energia": "404",
    "proteina": "36.0",
    "gordura": "14.6",
    "carboidrato": "38.4"
  },
  "Soja, extrato solúvel, natural, fluido": {
    "energia": "39",
    "proteina": "2.4",
    "gordura": "1.6",
    "carboidrato": "4.3"
  },
  "Soja, extrato solúvel, pó": {
    "energia": "459",
    "proteina": "35.7",
    "gordura": "26.2",
    "carboidrato": "28.5"
  },
  "Soja, queijo (tofu)": {
    "energia": "64",
    "proteina": "6.6",
    "gordura": "4.0",
    "carboidrato": "2.1"
  },
  "Tremoço, cru": {
    "energia": "381",
    "proteina": "33.6",
    "gordura": "10.3",
    "carboidrato": "43.8"
  },
  "Tremoço, em conserva": {
    "energia": "121",
    "proteina": "11.1",
    "gordura": "3.8",
    "carboidrato": "12.4"
  },
  "Amêndoa, torrada, salgada": {
    "energia": "581",
    "proteina": "18.6",
    "gordura": "47.3",
    "carboidrato": "29.5"
  },
  "Castanha-de-caju, torrada, salgada": {
    "energia": "570",
    "proteina": "18.5",
    "gordura": "46.3",
    "carboidrato": "29.1"
  },
  "Castanha-do-Brasil, crua": {
    "energia": "643",
    "proteina": "14.5",
    "gordura": "63.5",
    "carboidrato": "15.1"
  },
  "Coco, cru": {
    "energia": "406",
    "proteina": "3.7",
    "gordura": "42.0",
    "carboidrato": "10.4"
  },
  "Coco,  verde, cru": {
    "energia": "*",
    "proteina": "*",
    "gordura": "*",
    "carboidrato": "*"
  },
  "Farinha, de mesocarpo de babaçu, crua": {
    "energia": "329",
    "proteina": "1.4",
    "gordura": "0.2",
    "carboidrato": "79.2"
  },
  "Gergelim, semente": {
    "energia": "584",
    "proteina": "21.2",
    "gordura": "50.4",
    "carboidrato": "21.6"
  },
  "Linhaça, semente": {
    "energia": "495",
    "proteina": "14.1",
    "gordura": "32.3",
    "carboidrato": "43.3"
  },
  "Pinhão, cozido": {
    "energia": "174",
    "proteina": "3.0",
    "gordura": "0.7",
    "carboidrato": "43.9"
  },
  "Pupunha, cozida": {
    "energia": "219",
    "proteina": "2.5",
    "gordura": "12.8",
    "carboidrato": "29.6"
  },
  "Noz, crua": {
    "energia": "620",
    "proteina": "14.0",
    "gordura": "59.4",
    "carboidrato": "18.4"
  },
  "Panqueca de carne": {
    "energia": 286,
    "proteina": 17.63,
    "gordura": 14.13,
    "carboidrato": 22.01,
    "porcao": 100
  }
}

export default alimentos;