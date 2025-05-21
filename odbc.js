const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'AtividadesBD',
  port: 5432
});

async function main() {
  await client.connect();

  // a. Inserir atividade
  await client.query(`
    INSERT INTO atividade (nome, descricao, id_projeto)
    VALUES ('Nova Atividade', 'Descrição exemplo', 1);
  `);

  // b. Atualizar líder
  await client.query(`
    UPDATE projeto SET id_lider = 2 WHERE id = 1;
  `);

  // c. Listar projetos e atividades
  const res = await client.query(`
    SELECT p.nome AS projeto, a.nome AS atividade
    FROM projeto p
    LEFT JOIN atividade a ON a.id_projeto = p.id;
  `);
  console.table(res.rows);

  await client.end();
}

main();

