import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12365498700);

diretor.cadatrarSenha("123456789");
const cliente = new Cliente ("Lais", 78978978989, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456789");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "987654321");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(clienteEstaLogado);