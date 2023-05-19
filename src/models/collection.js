`use strict`;
// This class replaces all your CRUD operations but has to use SQL functionality
class Collection {
  constructor(model) {
    this.model = model;
  }

  // This sequelize functionality lives here
  // can make a route model that abstracts all of this too
  async create(data) {
    try {
      const newRecord = await this.model.create(data);
      return newRecord;

    } catch (e) {
      console.error('We have a ModelInterface create error', e);
      return e;
    };
  };

  // creates a default of null if I don't enter in an ID
  // This finds 1 or finds all based on if else
  async read(id = null) {
    try {
      if (id) {
        console.log("Am I the problem ID?", id);
        let singleRecord = await this.model.findByPk(id);
        return singleRecord;
      }
      // else if({include: {recipe}}) {
      //   let recipeRecords = await this.model.findAll({include: {recipe}});
      //   console.log("Am I the problem recipeObject?");
      //   return recipeRecords;
      // } 
      else  {
        let allRecords = await this.model.findAll();
        return allRecords;
      }
    } catch (e) {
      console.error('We have a ModelInterface read error', e);
      return e;
    };
  };

  async delete(id) {
    try {
      const deleteRecord = await this.model.findOne(id);
      console.log("here is the ID", id);
      return deleteRecord.destroy(id);
    } catch (e) {
      console.error('We have a ModelInterface delete error', e);
      return e;
    }
  };

  async update(data, id) {
    try {
      const updatedRecord = await this.model.update(data, id);
      return updatedRecord;
    } catch (e) {
      console.error('We have a ModelInterface update error', e);
      return e;
    }
  };

};

module.exports = Collection;