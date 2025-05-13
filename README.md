# 💸 Desafio Técnico – Sistemas da Agendamento de Transferências Financeiras.

Projeto desenvolvido para a vaga de Desenvolvedor Java Pleno na Tokio Marine.  
A aplicação permite o agendamento de transferências bancárias com **cálculo automático de taxa**, **validação de regras de negócio**, e uma **interface clara, responsiva e formatada para o Brasil**.

---

## 🧰 Tecnologias utilizadas

### 🔹 Frontend
- Angular 19 (standalone)
- TypeScript
- HTML/CSS

### 🔹 Backend
- Java 11
- Spring Boot
- Spring Data JPA
- H2 Database

---

## 📋 Funcionalidades

- Cadastro de transferências com:
  - Conta origem
  - Conta destino
  - Valor
  - Data futura para execução
- Cálculo de taxa automática (baseado em dias)
- Lista de transferências em tabela moderna
- Formatação de moeda (`R$ 1.000,00`) e data (`10/05/2025`)
- Validações de formulário (required, mínimo, máscara)
- Alertas visuais de sucesso e erro
- Loading no botão durante o envio
- Rejeição de transferências inválidas conforme regras

---

## 🧠 Regras de cálculo da taxa

| Condição                         | Taxa aplicada                              |
|----------------------------------|--------------------------------------------|
| Mesma data (hoje)                | R$ 3,00 + 2,5% do valor                    |
| Até 10 dias da data atual        | R$ 12,00 fixo                              |
| Entre 11 e 20 dias               | 8,2% do valor                              |
| Entre 21 e 30 dias               | 6,9% do valor                              |
| Entre 31 e 40 dias               | 4,7% do valor                              |
| Entre 41 e 50 dias               | 1,7% do valor                              |
| Acima de 50 dias ou negativa     | ❌ Transferência bloqueada com erro        

---

## ▶️ Como rodar o projeto

### 🔧 Backend (Spring Boot)

1. Na pasta do backend:
```bash
./mvnw spring-boot:run

## A API ficará disponível em:

http://localhost:8080/transferencias

### 💻 Frontend (Angular)

1. Instale as dependências:

npm install

2. Rode o projeto:

ng serve

3. Acesse no Navegador:

http://localhost:4200

## 📦 Configuração especial
- O projeto usa Angular standalone (sem AppModule)
- HttpClient fornecido via provideHttpClient() no main.ts

## 📁 Estrutura de pastas

/agendamento            ← backend Spring Boot
/agendamento-front      ← frontend Angular
  ├── components/transferencia
  ├── models/
  ├── services/
  ├── styles.css
  └── main.ts

## 🧪 Testes manuais realizados
✅ Taxa correta para todas as faixas de dias
✅ Alerta vermelho para datas inválidas (erro real do back)
✅ Validação de valor mínimo
✅ Exibição de R$ com vírgula e ponto
✅ Alerta verde para sucesso
✅ Rejeição automática de valor acima de R$ 100.000,00
✅ Validação de formulário (botão desabilitado)
✅ Exibição em tabela moderna com datas formatadas

## 👨‍💻 Desenvolvedor
Jose Josimar Leandro Da Silva
Fullstack Dev | Deficiente Auditivo
📧 josejosimar7@gmail.com
🔗 https://www.linkedin.com/in/jose-josimar/