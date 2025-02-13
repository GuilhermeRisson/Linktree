# Linktree com Next.js

Este projeto é um clone do Linktree desenvolvido com [Next.js](https://nextjs.org), utilizando as melhores práticas de desenvolvimento moderno para web.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org) - Framework para React
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Estilização rápida e responsiva
- [Vercel](https://vercel.com/) - Hospedagem fácil para projetos Next.js

## Instalação e Configuração

### Requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: 18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos para instalar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

## Estrutura do Projeto

O projeto segue a estrutura padrão do Next.js com a pasta `app`:
```
/
|-- app/
|   |-- page.tsx    # Página principal
|   |-- layout.tsx  # Layout principal
|-- components/     # Componentes reutilizáveis
|-- styles/         # Estilos do projeto
|-- public/         # Imagens e arquivos estáticos
|-- .env.local      # Variáveis de ambiente
|-- package.json    # Dependências do projeto
```

## Personalização

Você pode modificar os links e estilos editando os componentes em `app/page.tsx` e `components/`.

