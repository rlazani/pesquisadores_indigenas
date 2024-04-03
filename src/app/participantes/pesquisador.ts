export class Pesquisador {
  public nome: string;
  public img: string;
  public titulo: string;
  public local: string;
  public lattes: string;
  public descricao: string;

  constructor(
    img: string,
    nome: string,
    titulo: string,
    local: string,
    lattes: string,
    descricao: string
  ) {
    this.img = img;
    this.nome = nome;
    this.titulo = titulo;
    this.local = local;
    this.lattes = lattes;
    this.descricao = descricao;
  }
}
