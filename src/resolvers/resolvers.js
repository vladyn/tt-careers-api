let careers = [];

const getCareers = () => {
  return Promise.resolve(careers);
}

const getCareerById = ({ careerID }) => {
  return Promise.resolve(careers.find(c => c.id === careerID))
}

const createCareer = ({ career }) => {
  const id = careers.length === 0 ? 1 : careers[careers.length - 1].id + 1;
  careers = [ ...careers, { ...career, id }];
  return Promise.resolve('success');
}

module.exports = {
  Query: {
    careers: async () => getCareers,
    career: async (_, { id }) => getCareerById({ careerID: id})
  },
  Mutation: {
    createCareer: async (_, { career }) => createCareer({ career })
  }
}
