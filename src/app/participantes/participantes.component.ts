import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pesquisador } from './pesquisador';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css'],
})
export class ParticipantesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  carregarLocal = 'ficha-fechada';

  // Enviar para o app fechar a ficha e abrir os demais componentes:

  @Output() sinalFechamentoApp = new EventEmitter<string>();

  fecharFicha(evento: string) {
    this.sinalFechamentoApp.emit('ficha-fechada-app');
    this.carregarLocal = evento;
  }

  // Envia o sinal para o app para fechar os demais componentes

  @Output() sinalAberturaApp = new EventEmitter<string>();

  objetoPai?: Pesquisador;

  abrirFicha(item: Pesquisador) {
    this.sinalAberturaApp.emit('ficha-aberta-app');
    this.carregarLocal = 'ficha-aberta';
    // Pegas os detalhes do item clicado para passar para a abertura da ficha:''
    this.objetoPai = item;
  }

  pesquisadores: Pesquisador[] = [
    new Pesquisador(
      '../assets/imagens/ana_claudia.jfif',
      'Anas Claudia Martins Tomas',
      'Mestranda',
      'Linguistica / Unicamp',
      'http://lattes.cnpq.br/4394434281910965',
      '  O objeto de estudo desta pesquisa é a importância da educação indígena neste contexto peri urbano, principalmente entre os jovens indígenas aonde há variedades de identidades culturais, cujo problema tem seu foco direcionado à convivência destes com a sociedade envolvente, por considerar muito próximas suas relações sociais com outros jovens, crianças e adultos. Neste sentido tenciona-se realizar uma análise da educação indígena como ferramenta do cunho cultural e vivência social entre os povos envolventes. A partir dai surge a necessidade de construção de materiais didáticos (cartilhas) na Língua Indígena Nheengatú, para utilização como ferramenta de ensino e aprendizagem para se trabalhar com os alunos indígenas do Espaço Cultural Indígena Wakenai Anumarehit, localizado No Parque das Tribos, em Manaus.'
    ),
    new Pesquisador(
      '../../assets/imagens/ana_maria.jpeg',
      'Ana Maria Rabelo Gomes',
      'Professora',
      'UFMG',
      'http://lattes.cnpq.br/9504461153751227',
      'Possui doutorado em Educação pela Universidade de Bolonha (1996). Realizou pós-doutorado no PPG Antropologia Social do Museu Nacional - UFRJ (2007-2008); e no Depto. de Antropologia da Univ. St. Andrews (2017). Atualmente é professora titular da Faculdade de Educação da UFMG, com atuação na área de Antropologia e Educação, principalmente nos seguintes temas: educação intercultural indígena; cultura e escolarização; aprendizagem e cultura; etnografia e aprendizagem; cosmopolítica e ecologia de práticas.'
    ),
    new Pesquisador(
      'assets/imagens/arlindo.jpeg',
      'Arlindo Alemão Gregório',
      'Graduando',
      'Engenharia Elétrica / Unicamp',
      'http://lattes.cnpq.br/9340179618863234',
      'Pesquisa interdisciplinar Solar Rio Negro integra o Centro Paulista de Estudos da Transição Energética - CPTEn a partir dos Eixos V - Educação, formação e capacitação para a sustentabilidade socioambiental e VI - Transição para energias renováveis e bioenergia. Propõe investigar mecanismos para a formulação implementação da política pública interdisciplinar denominada Solar Rio Negro em áreas remotas das terras indígenas (T.I.) Cué-Cué/Marabitanas, localizadas no noroeste do Amazonas no município de São Gabriel da Cachoeira, região do Alto Rio Negro e habitadas por quatro povos: Baré, Baniwa, Tukano e Warekena, com 32 comunidades (aldeias) e 55 sítios (pequenas aldeias de uma ou duas famílias) indígenas.'
    ),
    new Pesquisador(
      '/assets/imagens/chantal.jpg',
      'Chantal Victória Medaets',
      'Professora',
      'Educação / Unicamp',
      'http://lattes.cnpq.br/8835346304041092',
      'Professora Adjunta na Faculdade de Educação da Universidade Estadual de Campinas (Unicamp), onde coordena o Centro de Pesquisa em Antropologia e Educação (Ceape). Possui mestrado em Educação (2009) e doutorado em Antropologia (2015), ambos pela Universidade Paris Descartes (desde 2022, Univsersité Paris Cité). Realizou pesquisas sobre infâncias indígenas e ribeirinhas e formas de socialização na região do Baixo Tapajós, na Amazônia brasileira, analisando estilos de parentalidade, educação não formal (práticas de transmissão e aprendizagem fora da escola) e suas conexões com a escola. Em seu projeto de pesquisa atual, aborda diferentes aspectos da presença indígena no Ensino Superior no Brasil, combinando trabalho de campo etnográfico na Unicamp com a análise de políticas interculturais para o Ensino Superior em nível nacional.'
    ),
    new Pesquisador(
      '../assets/imagens/clarice.jpeg',
      'Clarice Cohn',
      'Professora',
      'Ufscar',
      'http://lattes.cnpq.br/1714080901123094',
      'Clarice Cohn é professora associada do Departamento de Ciências Sociais e do Programa de Pós-Graduação em Antropologia Social da Universidade Federal de São Carlos. Coordenou o Observatório da Educação Escolar Indígena da UFSCar, com financiamento CAPES, e o Laboratório de Estudos e Pesquisas em Antropologia da Criança (LEPAC), tendo feito parte, nesta mesma universidade, da Comissão de Ações Afirmativas e, posteriormente, do Grupo Gestor do Programa de Ações Afirmativas. Possui graduação em Ciências Sociais (1994), mestrado (2000) e doutorado em Antropologia Social (2006) pela Universidade de São Paulo, e é Pós-Doutora pela Université Paris Ouest Nanterre La Défense (2016). É associada da Associação Brasileira de Antropologia (ABA) e membro do Public Issues and Action Committee (PIAC) ligado à associação internacional de antropologia Society for the Anthropology of Lowland South America (SALSA). Tem experiência de pesquisa, docência e orientação na área de Antropologia, com ênfase em Etnologia Indígena. Pesquisa com os Mebengokré-Xikrin, povo indígena de língua Jê que vive no Pará, e atua principalmente nos seguintes temas: antropologia, etnologia indígena, estudos Jê, crianças indígenas, antropologia da criança, antropologia da educação e educação escolar indígena.'
    ),
    new Pesquisador(
      '../../assets/imagens/dalila.JPG',
      'Dalila Luiz',
      'Doutoranda',
      'Educação / Unicamp',
      ' http://lattes.cnpq.br/4737474023231638',
      'Este trabalho é o meu projeto de pesquisa para o desenvolvimento de minha tese de doutoramento da Faculdade em Educação da Universidade Estadual de Campinas/SP. Sou indígena da etnia Terena do Município de Aquidauana – Mato Grosso do Sul, moradora da Aldeia Bananal. Desde a minha infância, vivi, convivi com a minha ancestralidade e com ela aprendi a valorizar o que sou e o que me tornei hoje e com toda a minha trajetória sem deixar de ser o que sou. Este projeto de pesquisa tem como título “A Língua Terena no currículo Escolar Indígena: em busca do Bilinguismo”, um tema muito relevante que aborda a presença e a busca de efetivação da língua nas instituições de ensino através do currículo autodenominado como bilíngues. Pretendo comparar os currículos de um comparando-as com a escola urbana onde regem o ensino bilíngüe (língua inglesaportuguesa), no o caso da escola SESI (CG) e das Escolas Indígenas dos (Municípios de Aquidauana, Miranda, Dois Irmãos do Buriti e Dourados). Sabendo que, o contexto escolar é um dos instrumentos a ser usada para o fortalecimento da identidade indígena, no caso a língua terena, como cita Tassinari, a escola é um “[...] espaço de fronteiras, espaço de articulação e troca de conhecimentos e técnicas, assim como espaços de incompreensões e de redefinições identitária dos grupos envolvidos nesse processo, índios e não índios” (TASSINARI, 2001, p.4). A negação da língua indígena falada se deu devido aos processos de colonização, como afirma alguns teóricos estudados como; a Bittencourt e Ladeira (2000), Gallo (1994/1997), Nicao (2003/2008), Monserrat (1999), Tassinari, 2001), Teixeira e Grupione (1995), Veiga e D’angeles (1993), Maher (1991), Lopes e Macedo (2011) e outros, ainda sendo finalizado.'
    ),
    new Pesquisador(
      '../../assets/imagens/elisangela.jpeg',
      'Elisangêla Baré',
      'Graduanda',
      'Unicamp',
      ' http://lattes.cnpq.br/4737474023231638',
      'Os Kariãma/Cestos de conhecimentos:  são elementos composta por tradição, território, povo, mito e cultura esse conjunto faz com que você perpassa por diversos ensinamentos naturais principalmente na primeira menstruação “ritual da moça nova”, o  ensino e o  aprendizado  é constituída por esse momento, onde a menina resguardará dias revivendo o ensino e aprendendo sobre  saberes  sobre a sua identidade cultural,  território, mitos, artesanatos, canto, danças, manejo da roça, Plantas medicinais e   o cuidado com corpo femenino.'
    ),
    new Pesquisador(
      '../../assets/imagens/geovane.jfif',
      'Geovane Matori Maleewaka',
      'Graduando',
      'Unicamp',
      '',
      'O cuidado de saúde para populações indígenas tem algumas especificidades e está previsto nos serviços de saúde indígena no Brasil. No entanto, esse cuidado de saúde é uma realidade distante que pode ser evidenciada pela lacuna existente na construção dos conhecimentos acerca da saúde indígena que segue excluindo a pluralidade dos saberes. O objetivo desta pesquisa é compreender os sentidos atribuídos à saúde-doença-cuidado pelos estudantes indígenas do povo Baníwa ingressantes do vestibular indígena da Unicamp. Será adotada metodologia qualitativa e a técnica de produção e análise do material produzido em encontros coletivos será apoiada no arcabouço teórico dos Estudos Decoloniais e dos Estudos Culturais. A construção de diálogos que incluam e componham com as perspectivas dos estudantes do povo Baníwa será possível vislumbrar um enriquecimento do conhecimento e das práticas clínicas em saúde. As narrativas construídas, coletiva ou individualmente, sobre os sentidos atribuídos ao processo saúde-doença-cuidado pretendem ser um conhecimento entre o pesquisador e os participantes, uma vez que o pesquisador do projeto também é pertencente à etnia Baníwa.'
    ),
    new Pesquisador(
      '../../assets/imagens/italo.jpg',
      'Ítalo Rodrigo Mongconãnn Reis',
      'Doutorando',
      'Multimeios / Unicamp',
      '',
      '  O presente projeto de pesquisa nasce com a proposta de investigar as narrativas e produções cinematográficas realizadas e produzidas por nós cineastas e realizadores(as) indígenas, dentro do movimento Acampamento Terra Livre (ATL), durante as próximas três edições (2024-2026) que acontecem todos os anos no mês de abril na Capital Federal. Essas produções além de exibirem a cultura e a diversidade dos povos originários com um próprio olhar, são também peculiares, inéditas e trazem questões politicas em seus registros. Assim, pretendo questionar e compreender de que forma nossas produções estão sendo realizadas como “ferramentas de luta” e de como a estética e a política estão inseridas e se articulam nesse processo. A nossa relação (dos povos originários) com o fazer cinema se insere em um processo complexo, no qual percebemos que o nosso contato com o audiovisual se (re)criou ao longo dos tempos e como adquirimos autonomia no uso do(a) vídeo/imagem, resignificando nossas produções. Desse modo, luz, câmera e (r)existência!  '
    ),
    new Pesquisador(
      '../../assets/imagens/joana.png',
      'Joana Cabral de Oliveira',
      'Professora',
      'Antropologia / Unicamp',
      ' http://lattes.cnpq.br/1865013236957945',
      'É professora da Universidade Estadual de Campinas, Departamento de Antropologia. Possui graduação em Ciências Sociais, mestrado e doutorado em Antropologia Social, pós-doutorado pelo Instituto de Biociências, todos pela Universidade de São Paulo. Realizou estagio de pós-doutorado na Universidade de Oxford (UK). É pesquisadora colaboradora do Centro de Estudos Ameríndios (USP), coordenadora do Laboratório de Estudos Pós-Disciplinares (USP) e membro do Centro de Estudos e Pesquisa em Etnologia (Unicamp). Desenvolveu atividades indigenistas como assessora do Programa Wajãpi pelo Instituto de Pesquisa e Formação Indígena Iepé de 2004 a 2017. Concentra suas pesquisas na área de etnologia indígena e antropologia da ciência, trafegando pelos diálogos entre a antropologia e biologia. Coordenadora do Programa de Antropologia Social da Unicamp (2019-2022). É mãe.'
    ),
    new Pesquisador(
      '../../assets/imagens/katia.jpg',
      'Katia Paz Sampaio',
      'Graduanda',
      'Educação / Unicamp',
      ' ',
      'O objetivo dessa pesquisa é analisar as formas de transmissão de práticas culturais associadas ao povo Tukano, e em especial da língua, na região de São Gabriel da Cachoeira, estado do Amazonas. A partir de revisão bibliográfica e de entrevistas com pessoas de diferentes gerações, pretendo investigar como pessoas da etnia Tukano, em diferentes momentos históricos, aprenderam as línguas que falam e outras práticas culturais consideradas tradicionais, como rituais, grafismos indígenas, artesanatos e remédios caseiros. Sendo eu mesma pertencente ao povo Tukano, proponho basear este estudo, nesta fase inicial da pesquisa que é a iniciação científica, em casos da minha própria família, relacionando relatos pessoais com a história da região. O estudo tem um enfoque interdisciplinar, integrando aportes da área da Educação, História e Antropologia.'
    ),
    new Pesquisador(
      '../../assets/imagens/laura.jfif',
      'Laura Rival',
      'Professora',
      'Oxford University',
      'https://www.qeh.ox.ac.uk/people/laura-rival',
      'Laura Rival trabalha em projetos interrelacionados de pesquisa que, juntos, ilustram sua abordagem distintiva da Antropologia da natureza, da sociedade e do desenvolvimento. Sua pesquisa, empiricamente fundamentada, teoricamente orientada e com intuito de ser relevante para políticas, tem como objetivo renovar nosso pensamento sobre a relação entre meio ambiente e sociedade. Empiricamente, seu trabalho é fundamentado em pesquisa etnográfica com os Huaorani (Amazônia equatoriana), pesquisa interdisciplinar com os Makushi (Guiana central) e pesquisa orientada para políticas com várias comunidades indígenas e camponesas da América Latina, tanto na América Central quanto na América do Sul. Teoricamente, ela tem se envolvido criticamente com uma série de pressupostos deterministas associados a ideologias modernistas, assim como com várias teorias que reificam a divisão natureza/cultura ou perpetuam interpretações duvidosas dos meios de vida indígenas e camponeses e suas dinâmicas históricas. Ela também contribuiu para análises político-econômicas de políticas de desenvolvimento, bem como para discussões em torno de instrumentos políticos destinados a conciliar o desenvolvimento humano e a conservação da diversidade biológica e cultural. Sua pesquisa atual baseia-se nessa experiência para abordar questões prementes de desenvolvimento diante da grave degradação ambiental e das mudanças climáticas aceleradas.'
    ),
    new Pesquisador(
      '../../assets/imagens/leandro.jpeg',
      'Leandro Karaí Mirim',
      'Mestrando',
      'Psicologia / USP',
      '',
      'O presente estudo visa contribuir com a reflexão sobre teorias e sistemas psicológicos no processo de construção da psicologia indígena no Instituto de Psicologia da Universidade de São Paulo IPUSP (cf. Guimarães, 2020). Focaremos nos tensionamentos, a partir das linguagens que se expressam durante as interações interétnicas e interculturais do serviço de extensão universitária Rede de Atenção à Pessoa Indígena (Rede Indígena). Em meio aos novos conceitos e noções que surgiram de trocas e aprendizados mútuos destes encontros entre indígenas e acadêmicos, buscaremos compreender como a experiência na formação psicológica se transforma quando essas tensões ocorrem. Esse processo pode ser descrito enquanto uma sensibilização conjunta do corpo (physis)-espírito (psyché), ou do espírito-nome, aproximação para o português a partir da noção em Mbya Guarani de nhe’e (cf. Benites, 2015), constituindo uma nova linguagem. Recusando posturas ecléticas e dogmáticas (cf. Vygotski, 1927/2020; Figueiredo, 1996/2013), buscaremos recursos no arcabouço teórico-metodológico do construtivismo semiótico-cultural em psicologia e da área da psicologia indígena, para analisar o material documental público produzido pela Rede Indígena. Dessa forma, buscamos possibilitar um maior entendimento do diálogo bilíngue, que surge dos encontros interétnicos, para melhor cultivar, na chave da coautoria, a relação entre psicologia e povos indígenas, fortalecendo novos caminhos para as práticas de atenção e cuidado, em busca da saúde e bem viver, ou da noção em Mbya Guarani, teko porã.'
    ),
    new Pesquisador(
      '../../assets/imagens/niceias.jpeg',
      'Niceias Angélica Maués',
      'Graduanda',
      'Engenharia / Unicamp',
      'http://lattes.cnpq.br/7391100500198202',
      'Pesquisa interdisciplinar Solar Rio Negro integra o Centro Paulista de Estudos da Transição Energética - CPTEn a partir dos Eixos V - Educação, formação e capacitação para a sustentabilidade socioambiental e VI - Transição para energias renováveis e bioenergia. Propõe investigar mecanismos para a formulação implementação da política pública interdisciplinar denominada Solar Rio Negro em áreas remotas das terras indígenas (T.I.) Cué-Cué/Marabitanas, localizadas no noroeste do Amazonas no município de São Gabriel da Cachoeira, região do Alto Rio Negro e habitadas por quatro povos: Baré, Baniwa, Tukano e Warekena, com 32 comunidades (aldeias) e 55 sítios (pequenas aldeias de uma ou duas famílias) indígenas.'
    ),
    new Pesquisador(
      '../../assets/imagens/jeremias.jfif',
      'Paulo Jeremias',
      'Graduando',
      'Arquitetura / Unicamp',
      '',
      'O povo Akroá-Gamella reside atualmente em uma região que abrange três municípios na baixada maranhense, mantendo suas práticas socioculturais e modo de vida. Após anos de hostilidade e sendo considerados extintos, eles se adaptaram, enfrentando perseguições e apagamento identitário. Como indígena pertencente ao povo Akroá-Gamella, pretendo buscar,  discutir e contar a história do apagamento histórico ocorrido dentro do território dos Akroá-Gamellas, bem como analisar qual era a nossa relação com o chão que pisamos há mais de 300 anos.'
    ),
    new Pesquisador(
      '../../assets/imagens/saniwe.jpeg',
      'Saniwê Alves Braz ',
      'Doutorando',
      'Educação / UFMG',
      'http://lattes.cnpq.br/0649381362701822',
      'A criança é considerada uma grande força nas aldeias indígenas, pois são elas quem olham e carregam as práticas de ensino que são passados pelos mais velhos na vivência em comunidade. Na infância, se dá início o período de formação para a criança com os modos de aprender com os mais velhos e para que aconteça uma troca de conhecimentos, onde também se trabalhe com os olhares da criança nos processos de produção e criação. Esta pesquisa propõe investigar os modos de viver e os fazeres das crianças indígenas de Muã Mimatxi, revelando os valores que estão presentes nas tradições e nas vivências do povo Pataxoop. Com objetivo de mostrar como as crianças de Muã Mimatxi se relacionam com o território no processo educativo estabelecido na Escola Estadual Indígena Pataxó Muã Mimatxi. É importante elucidar que as crianças sempre caminham pelos espaços que são coletivos da aldeia, como nas matas, fruteiras, rios, casas dos parentes, quintal de casa, e na escola. Esses lugares são importantes para a sua formação de ser indígena e é uma forma de poder conhecer suas ligações com tudo na vida. A criança tem o seu olhar sempre voltado aos pequenos acontecimentos que tem no território, como o florir das plantas, o tempo de um ritual e o tempo de preparo da terra para o plantio, todos esses movimentos de vida corroboram com seu aprendizado. Deste modo, considera-se que a criança tem muito a ensinar aos mais velhos, com sua observação que contribui para o aprendizado. Elas sempre sabem o momento e o lugar onde devem estar na comunidade, e traz o movimento para o seu território. Portanto, uma aldeia sem criança é uma aldeia parada, sem movimento. A abordagem metodológica proposta é a qualitativa, onde realizaremos entrevistas, filmagens de imagens e oficinas de produção que nos permitirão registrar os fazeres da criança em seu território de vida. A investigação dialogará com as produções já existentes sobre a Aldeia Muã Mimatxi, Kanatyo( 2013), Siwê Alves Braz (2021), Saniwê Alves Braz (2021), Werymehe Alves Braz (2022). Para abordar as questões sobre as territorialidades indígenas, Célia Nunes Correa, Silvia Cusicanqui, Glória Alzandua, Linda Smith, e outros que levantaremos ao longo deste estudo. A criança na aldeia tem seu próprio jeito de se interagir no espaço da aldeia, ela está em vários lugares do território, cada um tem o seu relacionamento de vida com seus lugares, pois cada espaço tem um sentido de vida e de aprendizado. Portanto, pretendemos mostrar como a criança aprende com os mais velhos no movimento de criação da aldeia, mantendo o olhar sempre atento aos seus meios de aprendizado com sua trajetória na participação nos momentos de coletividade e de aprendizagem em seus espaços de vivência. O jeito que a criança tem o seu olhar para a vida que está ao seu redor como as matas, os rios, as fruteiras, os animais, as roças todos estes espaços são de grande aprendizado na infância a aldeia.'
    ),
    new Pesquisador(
      '../../assets/imagens/siwe.jpeg',
      'Siwê Alves Braz',
      'Doutorando',
      'Educação / UFMG',
      'http://lattes.cnpq.br/6988125231515541',
      'Sentimos necessidade de pesquisar líderes que se engajaram na luta por uma educação escolar indígena específica e diferenciada que em suas atuações produziram conhecimentos importantes no pensar essa modalidade de ensino, suas lutas pelo território, a sua participação no movimento indígena. Essa pesquisa busca compreender como essas lutas formaram muitas lideranças indígenas a partir do movimento de educação escolar indígena. Entender como que a implantação das escolas indígenas proporcionou a defesa de direitos fundamentais nas comunidades indígenas e suas relações com os territórios indígenas. A importância da escola na trajetória de vida dessas lideranças que trazem para o centro do debate as identidades, a cultura, as línguas indígenas, as imagens, a ancestralidade, os valores de vida, o canto, a literatura indígena a luta pela terra e traçando um plano de vida futuro para seu povo, aldeia ou comunidade. Como as comunidades indígenas sempre foram consideradas como pessoas insuficiente e tuteladas nessa estrutura de racismo estrutural de onde podemos ver de maneira clara nas ações do Estado na tentativa de assimilação do indígena a sociedade nacional, civilizar o indígena e dentre outras tentativas de aculturação. Nesta pesquisa vamos usar a trajetória de vida do líder Kanatyo Pataxoop como referência e como essa luta possibilitou pensar a educação na aldeia Muã Mimatxi, sua influência e inspiração na produção do conhecimento e assim a defesa de direito.'
    ),
    new Pesquisador(
      '../../assets/imagens/uara.jpeg',
      'Uara Pataxó',
      'Mestranda',
      'Ciência da Informação / Ufscar',
      '',
      'O projeto de pesquisa visa conhecer e compreender como os Povos Indígenas vem sendo representados na Ciência da Informação  e o que se produz acerca dessa população em publicações científicas, suscitou o interesse em estudar o assunto em diversos âmbitos ou eixos dentro da Ciência da Informação  para um maior conhecimento e compreensão no que envolve esta temática de Povos indígenas.'
    ),
    new Pesquisador(
      '../../assets/imagens/velinai.jpg',
      'Velina Ninkova',
      'Professora',
      'Universidade Oslo Metropolitan',
      'https://www.oslomet.no/en/about/employee/velinani/',
      'Conduzo pesquisas etnográficas com comunidades San na Namíbia e no Botswana desde 2008. Meu principal local de pesquisa é a região de Omaheke, no leste-central da Namíbia, onde trabalhei com os Ju|’hoansi. Publiquei sobre tópicos relacionados à educação formal e tradicional, desenvolvimento estatal, animismo, ontologia relacional e ética. Sou membra fundadora do Research and Advocacy Group for Hunter Gatherer Education, Grupo de pesquisa e advocacy para a Educação de povos caçadores-coletores (HG-Edu), estabelecido sob a International Society for Hunter Gatherer Research (ISHGR). O HG-Edu concentra-se em identificar abordagens cientificamente informadas para questões relacionadas à educação entre esses grupos e comunicar essas descobertas a instituições relevantes. Atualmente, lidero um projeto para a documentação da cultura material dos Ju|’hoansi de Omaheke, financiado pelo Endangered Material Knowledge Project (Projeto sobre Cultura e Conhecimentos Material em perigo de desaparecimento), hospedado pelo Museu Britânico (British Museum).'
    ),
    new Pesquisador(
      '../../assets/imagens/veronika.jpeg',
      'Veronica de Carvalho',
      'Doutoranda',
      'Antropologia / Unicamp',
      'http://lattes.cnpq.br/7766704030418030',
      'Mestre em Antropologia Social e Bacharel em Ciências Sociais pela Universidade Estadual de Campinas. Atualmente cursa doutorado no Programa de Pós-Graduação em Antropologia Social pela mesma universidade, realizando pesquisas na área de Etnologia Indígena, Modos de Conhecimentos e Estudos da Criança. É integrante do Centro de Pesquisa em Etnologia Indígena (CPEI), vinculado à Universidade Estadual de Campinas (UNICAMP). Participa da equipe do projeto FAPESP e grupo de pesquisa Sistemas regionais ameríndios em transformação: o caso do Alto Xingu. Editora da Maloca - Revista de Estudos Indígenas e co-fundadora do Ciclo de Cinema Indígena do CPEI.'
    ),
    new Pesquisador(
      '../../assets/imagens/vera.jpeg',
      'Vera Lúcia Aguiar Moura',
      'Graduanda',
      'História / Unicamp',
      '',
      '   A mulher indígena do Alto Rio Negro é a principal autora nos trabalhos da roça, desde a organização para abrir nova roça até ao preparo da alimentação do fruto do trabalho da roça. No sistema da troca que envolve o casamento entre os povos do Alto Rio Negro, os saberes de um povo é agregado com o do outro, o que envolve as memorias e entrelaçamento de relações principalmente no trabalho da mulher na roça, com plantio, manejo, cuidado e colheita da maniwa e o repassar para nova geração ou as mulheres proximas. A região do Alto do Rio Negro é localizado no estado do Amazonas, habitado pela diversidade de povos, sendo 22 povos que falam idiomas pertencentes a três familias linguisticas diferente: Tukano oriental, Arawak  e Naduhupy (via livro do PGTA). Essa região possui um vasto território com terras indígenas homologadas e demarcadas. A área onde os Ye’pa Mahsã predominam fica na Terra Indigena Alto Rio Negro conhecida como “Triângulo Tukano” composta por três distritos (chamados assim pela organização da prefeitura de São Gabriel da Cachoeira): Pari-Cachoeira, Taracuá e Iauaretê. Por ser a diversidade de povos, o sistema de casamento vai além do seu povo como no caso do povo Tukano que tem a prática de fazer a troca de casamento com a do povo Dessano, Tuyuka, Tariano e outros povos, onde acontecem troca de saberes, manejos e utensílios.'
    ),
    new Pesquisador(
      '../../assets/imagens/yashira.png',
      'Yashira Wendy Raymundo Yauri',
      'Mestranda',
      'Engenharia Elétrica / Unicamp',
      'http://lattes.cnpq.br/6589839819632423',
      'Os sistemas de energia elétrica atuais dependem de estudos elétricos prévios, os quais envolvem a simulação da dinâmica do sistema. Esses estudos fundamentam-se em modelos dos equipamentos elétricos presentes no sistema, os quais são descritos por conjuntos de equações algébricas e diferenciais. Esses modelos representam o comportamento de grandezas como módulo e ângulo de tensões e correntes, velocidade de rotores, potências mecânica e elétrica (ativa e reativa). No contexto dos   geradores síncronos, é comum que os parâmetros desses modelos sejam inicialmente fornecidos pelos fabricantes e validados durante o comissionamento, por meio de testes clássicos realizados com a máquina fora da operação real. Entretanto, ao longo da vida útil, esses parâmetros podem sofrer variações, demandando procedimentos periódicos de validação e, se necessário, calibração para ajustar valores incorretos. Realizar testes com a parada do gerador implica em custos econômicos significativos. Uma alternativa mais vantajosa consiste na realização de validação e calibração utilizando dados obtidos com os geradores em operação real. A adoção da infraestrutura moderna de monitoração e medição facilita essa abordagem, proporcionando uma solução mais eficiente e econômica para manter a precisão e confiabilidade dos modelos ao longo do tempo.'
    ),
  ];
}
