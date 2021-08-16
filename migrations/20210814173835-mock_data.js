const faker = require('faker-br');

module.exports = {
  async up(db, client) {
    await db.collection('employee').insertMany(
      [
        {
          name: faker.name.findName(),
          email: faker.internet.email(),
          company_id: 1,
          password: faker.br.cpf(),
          phone: faker.phone.phoneNumber(),
          cpf: faker.br.cpf(),
          photo: faker.image.avatar(),
          role: 3
        },
        {
          name: faker.name.findName(),
          email: faker.internet.email(),
          company_id: 1,
          password: faker.br.cpf(),
          phone: faker.phone.phoneNumber(),
          cpf: faker.br.cpf(),
          photo: faker.image.avatar(),
          role: 3
        },
        {
          name: faker.name.findName(),
          email: faker.internet.email(),
          company_id: 1,
          password: faker.br.cpf(),
          phone: faker.phone.phoneNumber(),
          cpf: faker.br.cpf(),
          photo: faker.image.avatar(),
          role: 3
        },
        {
          name: faker.name.findName(),
          email: faker.internet.email(),
          company_id: 1,
          password: faker.br.cpf(),
          phone: faker.phone.phoneNumber(),
          cpf: faker.br.cpf(),
          photo: faker.image.avatar(),
          role: 3
        },
        {
          name: faker.name.findName(),
          email: faker.internet.email(),
          company_id: 1,
          password: faker.br.cpf(),
          phone: faker.phone.phoneNumber(),
          cpf: faker.br.cpf(),
          photo: faker.image.avatar(),
          role: 3
        }
      ],
      {}
    );
    await db.collection('manager').insertMany(
      [
        {
          name: faker.name.findName(),
          email: faker.internet.email(),
          company_id: 1,
          password: faker.br.cpf(),
          phone: faker.phone.phoneNumber(),
          cpf: faker.br.cpf(),
          photo: faker.image.avatar(),
          role: 2
        },
        {
          name: faker.name.findName(),
          email: faker.internet.email(),
          company_id: 1,
          password: faker.br.cpf(),
          phone: faker.phone.phoneNumber(),
          cpf: faker.br.cpf(),
          photo: faker.image.avatar(),
          role: 2
        }
      ],
      {}
    );
    await db.collection('criterion').insertMany(
      [
        {
          name: faker.lorem.sentence(),
          company_id: 1,
        },
        {
          name: faker.lorem.sentence(),
          company_id: 1,
        },
        {
          name: faker.lorem.sentence(),
          company_id: 1,
        },
        {
          name: faker.lorem.sentence(),
          company_id: 1,
        },
        {
          name: faker.lorem.sentence(),
          company_id: 1,
        }
      ],
      {}
    );
    await db.collection('company').insertMany(
      [
        {
          name: 'Doce Lar',
          logo: 'https://scontent.fsra1-1.fna.fbcdn.net/v/t31.18172-8/27788617_946117405552422_1578933117152492086_o.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHoIQL1H4bwY-EyQSD9LX-xB_ttvf4tqyMH-229_i2rI8CnZbUGxHFhbbeT8UYdO0OcJ-G-BGmIDK9HLajOs8S_&_nc_ohc=aukJLGCXXHsAX_hIEW_&tn=wnq2L6tsAjf3omIa&_nc_ht=scontent.fsra1-1.fna&oh=ca73500e136f09ca7cc23207db72077f&oe=613D8F7F',
        },
        {
          name: 'Pollo Automotiva',
          logo: 'https://scontent.fsra1-1.fna.fbcdn.net/v/t1.6435-9/56184382_568949003589332_9006244676784619520_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGWKO_eR-7R40ruGnewMBmpTZpTn_2ysfpNmlOf_bKx-kqtnJfi9Vb_wBAckvmYe2hVzxSxmzpQIs0_fRVzxbrs&_nc_ohc=mEsFWjBEe5QAX-QvDdk&_nc_ht=scontent.fsra1-1.fna&oh=be85bf351024059d288feec08beb6413&oe=613D1202',
        }
      ],
      {}
    );
    await db.collection('quantitative evaluation').insertMany(
      [
        {
          manager_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              _id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              _id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              _id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              _id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              _id: faker.random.number()
            }
          ],
          evaluator_id: 1,
          evaluee_id: 1,
          created_at: faker.date.recent(),
          self_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              _id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              _id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              _id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              _id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              _id: faker.random.number()
            }
          ],
          company_id: 1
        },
        {
          manager_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            }
          ],
          evaluator_id: 1,
          evaluee_id: 2,
          created_at: faker.date.recent(),
          self_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            }
          ],
          company_id: 1
        },
        {
          manager_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 1,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            }
          ],
          evaluator_id: 1,
          evaluee_id: 3,
          created_at: faker.date.recent(),
          self_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            }
          ],
          _id: 3,
          company_id: 1
        },
        {
          manager_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            }
          ],
          evaluator_id: 1,
          evaluee_id: 4,
          created_at: faker.date.past(),
          self_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            }
          ],
          company_id: 1
        },
        {
          manager_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            }
          ],
          evaluator_id: 1,
          evaluee_id: 2,
          created_at: faker.date.past(),
          self_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            }
          ],
          company_id: 1
        },
        {
          manager_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            }
          ],
          evaluator_id: 1,
          evaluee_id: 1,
          created_at: faker.date.past(),
          self_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            }
          ],
          company_id: 1
        },
        {
          manager_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            }
          ],
          evaluator_id: 2,
          evaluee_id: 1,
          created_at: faker.date.past(),
          self_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            }
          ],
          company_id: 1
        },
        {
          manager_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 1,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            }
          ],
          evaluator_id: 2,
          evaluee_id: 1,
          created_at: faker.date.past(),
          self_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            }
          ],
          company_id: 1
        },
        {
          manager_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            }
          ],
          evaluator_id: 1,
          evaluee_id: 1,
          created_at: faker.date.past(),
          self_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            }
          ],
          _id: 12,
          company_id: 1
        },
        {
          manager_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            }
          ],
          evaluator_id: 1,
          evaluee_id: 1,
          created_at: faker.date.recent(),
          self_ratings: [
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 2,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 3,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 4,
              id: faker.random.number()
            },
            {
              criterion: faker.lorem.sentence(),
              rating: 5,
              id: faker.random.number()
            }
          ],
          company_id: 1
        }
      ],
      {}
    );
    await db.collection('qualitative evaluation').insertMany(
      [
        {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          evaluator_id: 1,
          evaluee_id: 1,
          created_at: faker.date.recent(),
          company_id: 1,
        },
        {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          evaluator_id: 1,
          evaluee_id: 2,
          created_at: faker.date.recent(),
          company_id: 1,
        },
        {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          evaluator_id: 1,
          evaluee_id: 3,
          created_at: faker.date.recent(),
          company_id: 1,
        },
        {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          evaluator_id: 1,
          evaluee_id: 4,
          created_at: faker.date.recent(),
          company_id: 1,
        },
        {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          evaluator_id: 2,
          evaluee_id: 1,
          created_at: faker.date.recent(),
          company_id: 1,
        },
      ],
      {}
    );
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
