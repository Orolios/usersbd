"use strict";
const User = use("App/Models/User");
const Hash = use("Hash");

class UserController {

  async get({ response }) {
    try {
      const response = await User.all();
      return response;
    } catch (err) {
      return response.status(err.status).send(err);
    }
  }

  async getid({ response, params }) {
    try {
      const response = await User.findBy("id", params.id); // perguntar breno
      return response;
    } catch (err) {
      return response.status(err.status).send(err);
    }
  }

  async store({ request, response }) {
    try {
      // getting data passed within the request
      const data = request.all();
      // looking for user in database
      const userExists = await User.findBy("email", data.email);

      // if user exists don't save
      if (userExists) {
        return response
          .status(400)
          .send({ message: { error: "User already registered" } });
      }

      // if user doesn't exist, proceeds with saving him in DB
      const user = await User.create({
        username: data.name,
        email: data.email,
        password: data.password,
        cpf: data.cpf,
        image: "aaaaa",
        access: 1000,
      });

      return user;
    } catch (err) {
      return response.status(err.status).send(err);
    }
  }

  async destroy({ params, response }) {
      try {
        // getting data passed within the request
        const user = await User.query().where("id", params.id).delete();
        return response
        .status(201)
        .send({ message: { error: "deu bom" } });
      }
      catch (err) {
        return response.status(err.status).send(err);
      }
    }


  async login ({ request, auth }) {
        const { email, password } = request.all()
        return await auth.attempt(email, password)
    }

  async getuser({auth}){
      return await auth.getUser()
  }
  async update({ request, response, params }) {
    try {
      // getting data passed within the request
      let data = request.all();
      if (data.password) {
        data.passoword = await Hash.make(data.password);
      }
      const user = await User.query().where("id", params.id).update({
          username: data.name,
          email: data.email,
          password: data.password,
          cpf: data.cpf,
      }

      );
      return response
      .status(201)
      .send({ message: { error: "deu bom" } });
    } catch (err) {
      return response.status(err.status).send(err);
    }
  }
}

module.exports = UserController;
