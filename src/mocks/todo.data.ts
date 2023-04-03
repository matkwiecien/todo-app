import { factory, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'

const TodoModel = {
  id: primaryKey(() => faker.random.numeric(20)),
  title: () => faker.lorem.words(),
  description: () => faker.lorem.paragraph(),
}

export const db = factory({
  todo: TodoModel,
})
