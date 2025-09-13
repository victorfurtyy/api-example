# API Example - NestJS

Uma API de exemplo criada com NestJS que fornece dois endpoints:

## Endpoints

### GET /random-phrase
Retorna uma frase aleatória em português.

**Exemplo de resposta:**
```json
{
  "phrase": "O sucesso é a soma de pequenos esforços repetidos dia após dia."
}
```

### POST /sum
Recebe dois números e retorna a soma.

**Corpo da requisição:**
```json
{
  "a": 5,
  "b": 3
}
```

**Exemplo de resposta:**
```json
{
  "result": 8
}
```

## Como executar

### Desenvolvimento
```bash
npm install
npm run start:dev
```

### Produção
```bash
npm install
npm run build
npm start
```

A API estará disponível em `http://localhost:3000`

## Testando os endpoints

### Testar frase aleatória:
```bash
curl -X GET http://localhost:3000/random-phrase
```

### Testar soma:
```bash
curl -X POST http://localhost:3000/sum \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}'
```

## Tecnologias utilizadas

- NestJS
- TypeScript
- Class Validator (para validação)
- Express (como servidor HTTP)