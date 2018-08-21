import steak from "../svg/steak.svg";
import oliveOil from "../svg/olive-oil.svg";
import tempero from "../svg/salt-and-pepper.svg";
import eggs from "../svg/eggs.svg";
import chillis from "../svg/chillis.svg";
import glass from "../svg/glass.svg";
import coffeeBeans from "../svg/coffee-beans.svg";
import apple from "../svg/apple.svg";
import nozes from "../svg/nozes.svg";
import list from "../svg/list.svg";

export const ACELERADORES = [
  {
    category: "Carnes e Peixes",
    icon: steak,
    items: [
      {
        name: "Anchovas"
      },
      {
        name: "Arenque"
      },
      {
        name: "Atum"
      },
      {
        name: "Bacon"
      },
      {
        name: "Camarão"
      },
      {
        name: "Carangueijo"
      },
      {
        name: "Carneiro"
      },
      {
        name: "Carnes de Caça"
      },
      {
        name: "Coelho"
      },
      {
        name: "Figado de Frango"
      },
      {
        name: "Figado de Vaca"
      },
      {
        name: "Frango"
      },
      {
        name: "Gado"
      },
      {
        name: "Lagosta"
      },
      {
        name: "Língua"
      },
      {
        name: "Lula"
      },
      {
        name: "Marisco"
      },
      {
        name: "Merluza"
      },
      {
        name: "Ostra"
      },
      {
        name: "Pato"
      },
      {
        name: "Peixes no geral"
      },
      {
        name: "Peru"
      },
      {
        name: "Polvo"
      },
      {
        name: "Porco"
      },
      {
        name: "Rins"
      },
      {
        name: "Salmão"
      },
      {
        name: "Sardinhas"
      },
      {
        name: "Tilápias"
      },
      {
        name: "Truta"
      }
    ]
  },

  {
    category: "Gorduras e Óleos",
    icon: oliveOil,
    items: [
      {
        name: "Azeite de dendê "
      },
      {
        name: "Azeite de oliva"
      },
      {
        name: "Banha de Porco"
      },
      {
        name: "Ghee"
      },
      {
        name: "Gordura bovina"
      },
      {
        name: "Gordura de pato"
      },
      {
        name: "Manteiga"
      },
      {
        name: "Mateiga de cacao"
      },
      {
        name: "Óleo de Abacate"
      },
      {
        name: "Óleo de coco"
      },
      {
        name: "Óleo de macadâmia"
      },
      {
        name: "Óleo de peixe"
      }
    ]
  },

  {
    category: "Legumes e Tubérculos",
    icon: chillis,
    items: [
      {
        name: "Abacate"
      },
      {
        name: "Abobrina"
      },
      {
        name: "Agrão"
      },
      {
        name: "Alcachofra"
      },
      {
        name: "Aipo"
      },
      {
        name: "Alcachofra"
      },
      {
        name: "Alface e afins"
      },
      {
        name: "Algas"
      },
      {
        name: "Alho"
      },
      {
        name: "Almeirão"
      },
      {
        name: "Aspargo"
      },
      {
        name: "Azeitona"
      },
      {
        name: "Beringela"
      },
      {
        name: "Beterraba"
      },
      {
        name: "Brócoli"
      },
      {
        name: "Brotos"
      },
      {
        name: "Cebelo (todas)"
      },
      {
        name: "Cebolinha"
      },
      {
        name: "Cenoura"
      },
      {
        name: "Chilis"
      },
      {
        name: "Cogumelos (todos)"
      },
      {
        name: "Coube de bruxelas"
      },
      {
        name: "Couve galega"
      },
      {
        name: "Couve-de-folhas"
      },
      {
        name: "Couve-flor"
      },
      {
        name: "Ervilhas"
      },
      {
        name: "Espinafre"
      },
      {
        name: "Funcho"
      },
      {
        name: "Gengibre"
      },

      {
        name: "Pepino"
      },

      {
        name: "Pimentão"
      },

      {
        name: "Rabanete"
      },

      {
        name: "Repolho"
      },

      {
        name: "Rúcula"
      },

      {
        name: "Tomates"
      },

      {
        name: "Vagem"
      },

      {
        name: "Zucchini"
      }
    ]
  },

  {
    category: "Ovos e Laticínios",
    icon: eggs,
    items: [
      {
        name: "Leite de côco (Não é laticínio)"
      },
      {
        name: "Ovos (clara e gema)"
      }
    ]
  },

  {
    category: "Bebidas e Adoçantes",
    icon: glass,
    items: [
      {
        name: "Água com gás(natural)"
      },
      {
        name: "Brodo(frango, peixe, gado)"
      },
      {
        name: "Café Preto"
      },
      {
        name: "Café com manteiga"
      },
      {
        name: "Chá (todos)"
      },
      {
        name: "Chá gelado (sem açucar/adoçante)"
      },
      {
        name: "Kefir"
      },
      {
        name: "Suco verde (sem adoçar)"
      }
    ]
  },

  {
    category: "Nozes, Sementes e Afins",
    icon: nozes,
    items: [
      {
        name: "Gergelim"
      },
      {
        name: "Linhaça"
      },
      {
        name: "Semente de abóbora"
      },
      {
        name: "Semente de chia"
      },
      {
        name: "Semente de girassol"
      }
    ]
  },

  {
    category: "Frutas",
    icon: apple,
    items: [
      {
        name: "Abacate"
      },
      {
        name: "Amoras"
      },
      {
        name: "Coco"
      },
      {
        name: "Cranberry"
      },
      {
        name: "Framboesa(raspberry)"
      },
      {
        name: "Limão e lima"
      },
      {
        name: "Mirtilo (blueberry)"
      },
      {
        name: "Morango"
      }
    ]
  },

  {
    category: "Temperos, Ervas e Afins",
    icon: tempero,
    items: [
      {
        name: "Açafrão"
      },
      {
        name: "Alecrim"
      },
      {
        name: "Canela"
      },
      {
        name: "Coentro"
      },
      {
        name: "Cominho"
      },
      {
        name: "Cravo  Curry"
      },
      {
        name: "Endro"
      },
      {
        name: "Gengibre"
      },
      {
        name: "Hortelã"
      },
      {
        name: "Maionese (caseira)"
      },
      {
        name: "Mostarda (planta)"
      },
      {
        name: "Mostarda (semente) "
      },
      {
        name: "Noz moscada"
      },
      {
        name: "Orágano"
      },
      {
        name: "Páprica"
      },
      {
        name: "Pimenta (todas)"
      },
      {
        name: "Sal"
      },
      {
        name: "Salsinha"
      },
      {
        name: "Salvia"
      },
      {
        name: "Vinagre"
      },
      {
        name: "Vinagra balâmico (sem açucar)"
      }
    ]
  },

  {
    category: "Outros",
    icon: list,
    items: [
      {
        name: "Chucrute(Sauerkraut)"
      },
      {
        name: " Pão de linhaça"
      }
    ]
  }
];

export const MODERADORES = [
  {
    category: "Carnes e Peixes",
    icon: steak,
    items: [
      {
        name: "Peperoni"
      },
      {
        name: "Presunto"
      },
      {
        name: "Salame"
      }
    ]
  },

  {
    category: "Gorduras e Óleos",
    icon: oliveOil,
    items: [
      {
        name: "Manteiga de amêndoas"
      },
      {
        name: "Pasta de amendoim"
      }
    ]
  },

  {
    category: "Grãos e Cereais",
    icon: coffeeBeans,
    items: [
      {
        name: "Arroz branco"
      },
      {
        name: "Arroz integral"
      },
      {
        name: "Arroz selvagem"
      }
    ]
  },

  {
    category: "Legumes e Tubérculos",
    icon: chillis,
    items: [
      {
        name: "Abobora"
      },
      {
        name: "Banana verde (de cozinhar)"
      },
      {
        name: "Batata doce"
      },
      {
        name: "Batata inglesa"
      },
      {
        name: "Grão de bico"
      },
      {
        name: "Inhame"
      },
      {
        name: "Mandioca"
      },
      {
        name: "Tapioca (mandioca)"
      },
      {
        name: "Taro"
      }
    ]
  },

  {
    category: "Bebidas e Adoçantes",
    icon: glass,
    items: [
      {
        name: "Água de côco "
      },
      {
        name: "Leite de amêndoas"
      },
      {
        name: "Suco de fruta natural (recém feito)"
      }
    ]
  },

  {
    category: "Nozes, sementes e afins",
    icon: nozes,
    items: [
      {
        name: "Amêndoa"
      },
      {
        name: "Avelâ"
      },
      {
        name: "Castanha de caju"
      },
      {
        name: "Castanha do pará"
      },
      {
        name: "Macadâmia"
      },
      {
        name: "Noz pecã"
      },
      {
        name: "Pistache"
      }
    ]
  },
  {
    category: "Frutas",
    icon: apple,
    items: [
      {
        name: "Abacaxi"
      },
      {
        name: "Ameixa"
      },
      {
        name: "Carambola"
      },
      {
        name: "Cereja"
      },
      {
        name: "Caqui"
      },
      {
        name: "Damasco"
      },
      {
        name: "Figo"
      },
      {
        name: "Fruta do conde"
      },
      {
        name: "Fruta pão"
      },
      {
        name: "Goiaba"
      },
      {
        name: "Grapefruit"
      },
      {
        name: "Jaca"
      },
      {
        name: "Kiwi"
      },
      {
        name: "Laranja"
      },
      {
        name: "Lichia"
      },
      {
        name: "Maça"
      },
      {
        name: "Mamão"
      },
      {
        name: "Maracujá"
      },
      {
        name: "Melancia"
      },
      {
        name: "Melão"
      },
      {
        name: "Nactarina"
      },
      {
        name: "Pêra"
      },
      {
        name: "Pêssego"
      },
      {
        name: "Tangerina"
      },
      {
        name: "Uva"
      }
    ]
  },

  {
    category: "Outros",
    icon: list,
    items: [
      {
        name: "Chocolate 85% para cima"
      }
    ]
  }
];

export const RETARDADORES = [
  {
    category: "Carnes e Peixes",
    icon: steak,
    items: [
      {
        name: "Apresentado"
      },
      {
        name: "Salsicha"
      }
    ]
  },

  {
    category: "Gorduras e Óleos",
    icon: oliveOil,
    items: [
      {
        name: "Óleo de amendoim "
      },
      {
        name: "Óleo de canola"
      },
      {
        name: "Óleo de girassol"
      },
      {
        name: "Óleo de milho"
      },
      {
        name: "Óleo de semente de algodão"
      },
      {
        name: "Óleo de soja"
      },
      {
        name: "Óleo vegetal (outros)"
      }
    ]
  },

  {
    category: "Grãos e Cereais",
    icon: coffeeBeans,
    items: [
      {
        name: "Aveia"
      },
      {
        name: "Cuscus"
      },
      {
        name: "Granola"
      },
      {
        name: "Milho"
      },
      {
        name: "Quinoa"
      },
      {
        name: "Soja"
      },
      {
        name: "Trigo (em todas as formas)"
      }
    ]
  },

  {
    category: "Legumes e Tubérculos",
    icon: chillis,
    items: [
      {
        name: "Feijão (todos)"
      },
      {
        name: "Lentilha"
      }
    ]
  },

  {
    category: "Ovos e Laticínios",
    icon: eggs,
    items: [
      {
        name: "Cream (integral fullfat)"
      },
      {
        name: "Creme de leite "
      },
      {
        name: "Iogurte de baixa gordura"
      },
      {
        name: "Iogurte natural integral"
      },
      {
        name: "Kefir de leite"
      },
      {
        name: "Leite condensado"
      },
      {
        name: "Leite desnatado e afins"
      },
      {
        name: "Leite em pó"
      },
      {
        name: "Leite integral (não pasteurizado)"
      },
      {
        name: "Queijo Cottage"
      },
      {
        name: "Queijo de cabra"
      },
      {
        name: "Queijos"
      },
      {
        name: "Requeijão"
      },
      {
        name: "Sorvete"
      },
      {
        name: "Whey Protein"
      }
    ]
  },

  {
    category: "Bebidas e Adocantes",
    icon: glass,
    items: [
      {
        name: "Açucar cristalizado "
      },
      {
        name: "Açucar de côco"
      },
      {
        name: "Açucar integral"
      },
      {
        name: "Açucar mascavo "
      },
      {
        name: "Ágave Aspartame"
      },
      {
        name: "Caldo de cana "
      },
      {
        name: "Cerveja"
      },
      {
        name: "Cerveja gluten-free"
      },
      {
        name: "Destilados"
      },
      {
        name: "Dextrose"
      },
      {
        name: "Energéticos (normal e diet)"
      },
      {
        name: "Erythritol"
      },
      {
        name: "Estévia"
      },
      {
        name: "Frutose"
      },
      {
        name: "Gatorade e afins"
      },
      {
        name: "Leite de soja "
      },
      {
        name: "Maltitol"
      },
      {
        name: "Mel (natural)"
      },
      {
        name: "Refrigerante (normal e diet)"
      },
      {
        name: "Sorbitol"
      },
      {
        name: "Suco de frutas industrializado"
      },
      {
        name: "Sucralose"
      },
      {
        name: "Vinho"
      },
      {
        name: "Xarope de Maple "
      },
      {
        name: "Xylitol"
      }
    ]
  },

  {
    category: "Nozes, Sementes e Afins",
    icon: nozes,
    items: [
      {
        name: "Amendoin"
      }
    ]
  },

  {
    category: "Frutas",
    icon: apple,
    items: [
      {
        name: "Frutas em lata"
      },
      {
        name: "Frutas secas"
      },
      {
        name: "Geléia"
      },
      {
        name: "Tâmara"
      },
      {
        name: "Uva passa"
      }
    ]
  },

  {
    category: "Temperos e Ervas",
    icon: tempero,
    items: [
      {
        name: "Caldo de carne (comprado, todos)"
      },
      {
        name: "Ketchup"
      },
      {
        name: "Maionese (comprada)"
      },
      {
        name: "Molho barbecue"
      },
      {
        name: "Molho de soja"
      },
      {
        name: "Molhos de salada industrializados"
      },
      {
        name: "Molhos industrializados"
      },
      {
        name: "Mostarda (condimento)"
      }
    ]
  },

  {
    category: "Outros",
    icon: list,
    items: [
      {
        name: "Barra de cereal"
      },
      {
        name: "Barra de proteína"
      },
      {
        name: "Batata frita"
      },
      {
        name: "Chips"
      },
      {
        name: "Massas"
      },
      {
        name: "Pão (todos)"
      },
      {
        name: "Salgadinhos"
      },
      {
        name: "Salgados (coxinha, pastel, etc)"
      },
      {
        name: "Sucrilhos e cereais matinais"
      },
      {
        name: "Tortilhas"
      }
    ]
  }
];
