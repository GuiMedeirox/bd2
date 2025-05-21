await Atividade.create({
  descricao: 'Atividade ORM com Sequelize',
  projeto: 1,
  data_inicio: new Date(),
  data_fim: new Date()
});

await Projeto.update({ responsavel: 1 }, { where: { codigo: 1 } });

const projetos = await Projeto.findAll({ include: Atividade });
