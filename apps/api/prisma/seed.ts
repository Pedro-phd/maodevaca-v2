import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { hashSync } from 'bcrypt';

const client = new PrismaClient();

const seed = async () => {
  await client.member.deleteMany();
  await client.transaction.deleteMany();
  await client.planning.deleteMany();
  await client.tag.deleteMany();
  await client.user.deleteMany();

  const admin = await client.user.create({
    data: {
      email: 'admin@admin.com',
      password: hashSync('admin', 1),
      name: 'admin',
    },
  });

  const another = await client.user.create({
    data: {
      email: faker.internet.email(),
      password: hashSync('123', 1),
      name: faker.person.fullName(),
      avatarUrl: faker.image.avatarGitHub(),
    },
  });

  const tag = await client.tag.create({
    data: {
      name: 'tag-01',
      userId: admin.id,
    },
  });

  const anotherTag = await client.tag.create({
    data: {
      name: 'tag-02',
      userId: another.id,
    },
  });
  const planning = await client.planning.create({
    data: {
      description: faker.lorem.paragraph(),
      name: faker.word.verb(),
      members: {
        createMany: {
          data: [
            {
              userId: admin.id,
            },
            {
              userId: another.id,
            },
          ],
        },
      },
      ownerId: admin.id,
    },
  });

  const antoherPlanning = await client.planning.create({
    data: {
      description: faker.lorem.paragraph(),
      name: faker.word.verb(),
      members: {
        createMany: {
          data: [
            {
              userId: admin.id,
            },
            {
              userId: another.id,
            },
          ],
        },
      },
      ownerId: admin.id,
    },
  });

  const antoherPlanning2 = await client.planning.create({
    data: {
      description: faker.lorem.paragraph(),
      name: faker.word.verb(),
      members: {
        createMany: {
          data: [
            {
              userId: admin.id,
            },
            {
              userId: another.id,
            },
          ],
        },
      },
      ownerId: admin.id,
    },
  });

  await client.transaction.createMany({
    data: [
      {
        amount: 1000,
        description: faker.lorem.paragraph(),
        tagsId: faker.helpers.arrayElements([tag.id, anotherTag.id]),
        planningId: planning.id,
        ownerId: admin.id,
        type: 'INPUT',
      },
      {
        amount: 500,
        description: faker.lorem.paragraph(),
        tagsId: faker.helpers.arrayElements([tag.id, anotherTag.id]),
        planningId: antoherPlanning.id,
        ownerId: another.id,
        type: 'OUTPUT',
      },
      {
        amount: 10,
        description: faker.lorem.paragraph(),
        tagsId: faker.helpers.arrayElements([tag.id, anotherTag.id]),
        ownerId: admin.id,
        type: 'OUTPUT',
      },
      {
        amount: 10123.12,
        description: faker.lorem.paragraph(),
        tagsId: faker.helpers.arrayElements([tag.id, anotherTag.id]),
        ownerId: admin.id,
        type: 'OUTPUT',
        planningId: antoherPlanning2.id,
      },
    ],
  });
};

seed().then(() => {
  console.log('Database seeded!');
});
