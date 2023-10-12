import { rest,  } from 'msw'
import { faker } from '@faker-js/faker';

export const host = "https://my.backend"

export const handlers = [
  rest.get(`${host}/skills`, (_req, res, ctx) => {
    return res(
      ctx.json(['Skills1', 'Skills2', 'Skills3'])
    )
  }),

  rest.get(`${host}/projects`, (_req, res, ctx) => {
    const projects = []
    for (let i = 0; i < 100; i ++) {
      projects.push({
        id: faker.string.uuid(),
        labels: faker.helpers.arrayElements([faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]),
        icon: faker.image.url(),
        company: faker.company.name(),
        subtitle: faker.company.buzzPhrase(),
        description: faker.word.words({ count: 30 }),
        roles: faker.helpers.arrayElements(['Product Manager', 'Front End Developer', 'Back End Developer', 'UX Designer']),
        skills: faker.helpers.arrayElements(['3D Engineering', 'Ada', 'Adtech', 'Agora', 'React', 'Java']),
        minRate: faker.number.int({min: 0, max: 50}),
        maxRate: faker.number.int({min: 50, max: 200}),
        locations: faker.helpers.arrayElements(['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Oceania']),
      })
    }

    return res(
      ctx.json(projects)
    )
  }),


  rest.get(`${host}/work/saveJobs`, (_req, res, ctx) => {
    const saveJobs = []
    for (let i = 0; i < 6; i ++) {
      saveJobs.push({
        companyIcon: faker.helpers.arrayElement(['spotify.png', 'stripe.png', 'figma.png']),
        companyName: faker.helpers.arrayElement(['Spotify', 'Stripe', 'Figma']),
        project: 'SurveySwap',
        role: 'Front-End Engineer'
      })
    }

    return res(
      ctx.json(faker.helpers.arrayElement([[], saveJobs]))
      // ctx.json(saveJobs)
    )
  }),
]
