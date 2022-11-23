export default class UserDto {
  email;
  id;
  name;
  roles;
  createdAt;
  updatedAt;
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.name = model.name;
    this.roles = model.roles;
    this.createdAt = model.createdAt;
    this.updatedAt = model.updatedAt;
  }
}
