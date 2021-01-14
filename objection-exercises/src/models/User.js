const { ManyToManyRelation, HasManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')
const Pet = require('./Pet')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get VirtualAttributes() {
    return ['fullName', 'emailDomain']
  }

  fullName() {
    return this.firstName + ' ' + this.lastName
  }

  emailDomain() {
    return this.email.substring('@')
  }

  static get relationMappings() {
    return {
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId'
        }
      },
      children: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId'
          },
          to: 'users.id'
        }
      },
      parents: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId'
          },
          to: 'users.id'
        }
      }
    }
  }
}

module.exports = User
