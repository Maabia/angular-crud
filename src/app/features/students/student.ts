export class Student {
  id: number;
  name: string;
  email: string;
  birthday: string;

  constructor(id?: number, name?: string, email?: string, birthday?: string ) {
    this.id = id || 0; // se o id estiver nulo, eu qro que o default seja zero.
    // se for vazio, se for undefined, se eu não informar eu qro que seja uma string vazia. E será assim com todos os demais.
    this.name = name || '';
    this.email = email || '';
    this.birthday = birthday || '';
  }
}
