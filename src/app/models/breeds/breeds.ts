export class Breeds {
  id: number;
  name: string;
  icon: string;
  mattoltip: string;
  info: string;
  image: string;
  region: string;
  age: number;
  weight: number;
  height: number;
  life_span: number;
  temperament: string;
  nerf: string;
  energy: number;
  habilities: string[];
  iniciat: number;
  max: number;
  cityImage: string;
  nameCity: string;
  cityDescription: string;

  constructor(
    id: number,
    name: string,
    icon: string,
    mattoltip: string,
    info: string,
    image: string,
    region: string,
    age: number,
    weight: number,
    height: number,
    life_span: number,
    energy: number,
    habilities: string[],
    iniciat: number,
    max: number,
    cityImage: string,
    nameCity: string,
    cityDescription: string
  ) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.mattoltip = mattoltip;
    this.info = info;
    this.image = image;
    this.region = region;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.life_span = life_span;
    this.energy = energy;
    this.habilities = habilities;
    this.iniciat = iniciat;
    this.max = max;
    this.cityImage = cityImage;
    this.nameCity = nameCity;
    this.cityDescription = cityDescription;
  }

  static getBreeds(): Breeds[] {
    return [
      new Breeds(
        2,
        "Elf",
        "elf.png",
        "Elfos",
        "Nascidos na mesma era dos Draconatos, os Elfos são uma raça ancestral, marcada por sua longevidade, sabedoria e conexão profunda com a magia e a natureza. Dotados de uma graça inata e sentidos aguçados, eles caminham entre as árvores como sombras e moldam a energia arcana com maestria. Se você busca uma raça ideal para classes que dominam a magia ou a arte da furtividade, os Elfos são uma escolha certeira, combinando agilidade, inteligência e um legado de mistério.",
        "backelf.jpg",
        "Reino de Elvendar - Floresta de Lysandra",
        220,
        60,
        180,
        8,
        12,
        [
          "Canalizar - Você recupera 1 - até o máximo nos pontos de Magia",
          "Olho de gato - Visão noturna",
          "Sábedoria - +4 em testes de Sabedoria",
        ],
        7,
        60,
        "backelfcity.jpg",
        "Cidade de Lysandra",
        "Cidade de Lysandra é a capital do Reino de Elvendar, uma cidade mágica e repleta de vida. Construída nas copas das árvores, é um lugar de beleza e harmonia, onde Elfos e outras raças convivem em paz e prosperidade."
      ),
      new Breeds(
        4,
        "Human",
        "human.png",
        "Humanos",
        "Humanos são uma raça versátil, capazes de se adaptar a qualquer ambiente e situação. Com uma vida curta em comparação com outras raças, eles compensam sua brevidade com uma capacidade de aprendizado e evolução acelerada, tornando-se mestres em diversas áreas. Se você busca uma raça que possa se encaixar em qualquer classe ou papel, os Humanos são a escolha perfeita, com habilidades que se destacam em qualquer situação.",
        "backhuman.jpg",
        "Reino de Arton - Cidade de Valkaria",
        80,
        90,
        180,
        8,
        8,
        [
          "Adaptabilidade - +2 em qualquer atributo de sua escolha / Apenas na criação do personagem.",
          "Adaptabilidade Versátil - +1 em qualquer teste de habilidade.",
          "Inteligência - +2 em testes de resistência a controle mental ou manipulação por Magia.",
        ],
        4,
        80,
        "backhumancity.jpg",
        "Cidade de Valkaria",
        "Valkaria é a capital do Reino de Arton, uma cidade movimentada e repleta de oportunidades. Lar de diversas raças e culturas, é um lugar de comércio e aventuras, onde a magia e a tecnologia se misturam em harmonia."
      ),
      new Breeds(
        5,
        "Githyanki",
        "githyanki.png",
        "Githyankis",
        "Guerreiros criados nos céus astrais, os Githyankis são uma raça de guerreiros, marcados por sua resistência e habilidades psíquicas. Com uma cultura marcada por guerras intermináveis e uma sociedade rígida, eles são uma raça de guerreiros, capazes de manipular objetos com a mente. Se você busca uma raça que combine força bruta e truques, os Githyankis são a escolha perfeita.",
        "backgithyanki.jpg",
        "Planalto Astral - Fortaleza de Tu'Narath",
        140,
        100,
        185,
        12,
        4,
        [
          "Telecinese - Move objetos ou inimigos com a mente (consome 1 - 6 de magia por uso)",
          "Domadores - +5 em testes de montaria.",
          "Força - +2 em testes de força.",
        ],
        7,
        100,
        "backgithyankicity.jpg",
        "Fortaleza de Tu'Narath",
        "Tu'Narath é a fortaleza dos Githyankis, uma cidade-fortaleza flutuante que paira sobre o Planalto Astral. Lar de guerreiros e magos, é um lugar de treinamento e disciplina, onde os Githyankis se preparam para a guerra contra seus inimigos ancestrais."
      ),
      new Breeds(
        6,
        "Tiefling",
        "tiefling.png",
        "Tieflings",
        "Tieflings são descendentes de humanos e demônios, marcados por sua aparência exótica e habilidades mágicas. Com uma aparência marcante e uma aura de mistério, eles são uma raça de manipuladores e feiticeiros, capazes de lançar feitiços e manipular a energia arcana com facilidade. Se você busca uma raça que combine magia e astúcia, os Tieflings são a escolha perfeita.",
        "backtiefling.jpg",
        "Terras de Vih Okar - Cidade de Baator",
        185,
        80,
        190,
        9,
        9,
        [
          "Chamas Infernais - Fogo que não se apaga. 1 a 6 de dano por turno. (consome 3 de Magia por turno)",
          "Olhar Hipnótico - +2 em testes de persuasão.",
          "Destreza - +2 em testes de destreza.",
        ],
        5,
        70,
        "backtieflingcity.jpg",
        "Cidade de Baator",
        "Baator é a cidade dos Tieflings, uma cidade mágica e repleta de segredos. Construída sobre as ruínas de uma antiga civilização, é um lugar de mistério e intriga, onde os Tieflings se reúnem para trocar segredos e conhecimentos proibidos."
      ),
      new Breeds(
        7,
        "Dragonborn",
        "dragonborn.png",
        "Draconatos",
        "Descendentes de dragões ancestrais, os Draconatos são uma raça à beira da extinção, vagando pelo mundo como guerreiros nômades em busca de glória e redenção. Forjados no fogo da batalha, possuem uma força descomunal e uma resistência sobre-humana, com corpos cobertos por escamas reluzentes como ouro ou tão escuras quanto a noite. Além de sua imponente presença física, herdam o poder místico de seus ancestrais dracônicos, sendo capazes de conjurar feitiços devastadores. Se você procura uma raça que una brutalidade e magia em um só ser, os Draconatos são a escolha definitiva.",
        "backdragonborn.jpg",
        "Antiga Cidade de Drak'Thalon",
        600,
        160,
        200,
        14,
        6,
        [
          "Sopro Dracônico - Expele um ataque elemental causa 1 - 8 de dano. (consome 6 de Magia por uso)",
          "Escamas Resistentes - Pele naturalmente protegida contra ataques. (1 - 6 de dano reduzido por ataque)",
          "Força - +2 em testes de força.",
        ],
        4,
        110,
        "backdragonborncity.jpg",
        "Antiga Cidade de Drak'Thalon",
        "Drak'Thalon é a cidade dos Draconatos, uma cidade-fortaleza construída nas montanhas. Lar de guerreiros e magos, é um lugar de treinamento e disciplina, onde os Draconatos se preparam para a guerra contra seus inimigos ancestrais."
      ),
      new Breeds(
        8,
        "dwarf",
        "dwarf.png",
        "Anões",
        "Os Anões de Duroh Tar descendem de uma antiga raça que habitava as profundezas das montanhas, onde ergueram seus grandiosos salões de pedra. Exímios sobreviventes, adaptaram-se às adversidades e estabeleceram prósperas cidades subterrâneas, sustentadas por uma cultura rica e uma sociedade rigorosamente estruturada. Forjados na guerra, são guerreiros habilidosos, mas envoltos em mistério: pouco se sabe sobre suas verdadeiras origens, e menos ainda sobre a razão pela qual são incapazes de sonhar ou conjurar o Trama Arcano",
        "backdwarf.jpg",
        "Cordilheira de Duroh Tar - Cidade de Khazad Dum",
        180,
        130,
        150,
        16,
        0,
        [
          "Frenesi de Ataque - Uma vez por combate, você pode atacar duas vezes em um turno.",
          "Ferraria Anã - +5 em testes de forja e reparo de equipamentos.",
          "Natureza  - +2 em testes de natureza",
        ],
        2,
        180,
        "backdwarfcity.jpg",
        "Cidade de Khazad Dum",
        "Khazad Dum é a cidade dos Anões, uma cidade-fortaleza construída nas montanhas. Lar de guerreiros e artesãos, é um lugar de trabalho e disciplina, onde os Anões se preparam para a guerra contra seus inimigos ancestrais."
      ),
      new Breeds(
        9,
        "halfling",
        "halfling.png",
        "Halflings",
        "Criaturas peculiares, envoltas em mistério, cuja origem se perde no tempo. Acredita-se que descendam da união entre humanos e elfos, herdando a astúcia dos primeiros e a graça dos segundos. São conhecidos por sua criatividade e talento para inovações, mas preferem a reclusão, vivendo em comunidades ocultas em tocas espalhadas pelos reinos de Valkaria. Relutantes em interagir com outras espécies além de humanos e elfos, temem que tal convivência possa levar sua raça à ruína.",
        "backhalfling.jpg",
        "Gramado de Arton - Reino de Valkaria",
        730,
        50,
        120,
        5,
        14,
        [
          "Misseis Mágicos - Ataque elemental causa 1 - 8 de dano. (consome 6 de Magia por uso)",
          "Aprender - +2 em testes de Inteligencia",
          "Conhecimento - +4 em testes de Sabedoria",
        ],
        1,
        40,
        "backhalflingcity.jpg",
        "Cidade de Arton",
        "Arton é a cidade dos Halflings, uma cidade-fortaleza construída nas montanhas. Lar de guerreiros e magos, é um lugar de treinamento e disciplina, onde os Halflings se preparam para a guerra contra seus inimigos ancestrais."
      ),
    ];
  }

  static getBreedById(id: number): Breeds | undefined {
    return this.getBreeds().find((breed) => breed.id === id);
  }
}
