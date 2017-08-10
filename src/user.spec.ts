import { expect } from 'chai'
import { User } from './user'

describe('Person', () => {
  let user: User

  const firstName = 'Samwell'
  const lastName = 'Tarly'

  beforeEach(() => {
    user = new User(firstName, lastName)
  })

  it('constructor() creates a User with correct properties', () => {
    expect(user.firstName).to.equal(firstName)
    expect(user.lastName).to.equal(lastName)
  })

  it('getFullName() returns the correct full name', () => {
    expect(user.getFullName()).to.equal(`${firstName} ${lastName}`)
  })

})
