export class User {

  constructor(
    public firstName: string,
    public lastName: string,
  ) { }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}
