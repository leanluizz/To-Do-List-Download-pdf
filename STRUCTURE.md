# Documentação da Estrutura e Arquitetura do Projeto

Este documento detalha a organização técnica, escolhas arquiteturais e ferramentas utilizadas no projeto "To-Do List Download PDF".

## 1. Estrutura de Pastas

A estrutura do projeto segue uma organização modular, separando componentes de UI genéricos de componentes de funcionalidade específica.

```
src/
├── assets/             # Recursos estáticos
│   ├── images/         # Imagens e ícones rasterizados
│   └── styles/         # Arquivos CSS globais e variáveis
├── components/
│   └── ui/             # Componentes de interface reutilizáveis e genéricos
│       ├── button/     # Botões padrão
│       ├── card/       # Cards de conteúdo
│       ├── icon/       # Wrapper para ícones (Heroicons)
│       ├── iconButton/ # Botões compostos apenas por ícones
│       ├── modal/      # Modais genéricos
│       └── ...
├── context/            # Context API para gerenciamento de estado global
├── hooks/              # Custom Hooks (ex: useWindowsDimensions)
├── layout/             # Estrutura da aplicação e Features
│   ├── components/     # Componentes específicos de layout
│   ├── feature/        # Funcionalidades principais (ex: criação de listas)
│   ├── footer/         # Rodapé da aplicação
│   ├── header/         # Cabeçalho e navegação
│   └── main/           # Conteúdo principal e seções da Home
├── pages/              # Páginas da aplicação (Roteamento)
│   ├── createPage.tsx      # Página de criação de listas
│   ├── homePage.tsx        # Página inicial
│   └── privacyPolicy.tsx   # Página de política de privacidade
├── types/              # Definições de tipos TypeScript (.d.ts e .ts)
└── utils/              # Funções utilitárias e helpers
```

## 2. Arquitetura

O projeto é uma **Single Page Application (SPA)** construída com **React** e **TypeScript**.

- **Componentização**:
  - **UI Components (`src/components/ui`)**: Componentes "burros" (presentational) que recebem dados via props e não dependem de lógica de negócio específica. Altamente reutilizáveis.
  - **Feature Components (`src/layout/feature`)**: Componentes "inteligentes" (containers) que contêm lógica de negócio, manipulação de estado e regras específicas da aplicação (ex: lógica de adicionar itens à lista).
  - **Layout Components (`src/layout`)**: Definem a estrutura macro das páginas (Header, Main, Footer).

- **Gerenciamento de Estado**:
  - Utiliza `useState` e `useRef` para estados locais.
  - Context API (`src/context`) para estados que precisam ser compartilhados globalmente (se aplicável).

- **Roteamento**:
  - `react-router-dom` gerencia a navegação entre as páginas (Home, Criar Lista, Privacidade).

## 3. Estilo e Design System

A estilização do projeto é híbrida, combinando um framework CSS com estilos customizados.

- **Framework**: **Bootstrap 5** (via classes utilitárias e componentes `react-bootstrap`) é usado para o sistema de grid, espaçamento e componentes base responsivos.
- **Ícones**: **Heroicons** (`@heroicons/react`) integrados através de um componente wrapper `Icon` para garantir consistência.
- **Animações**: **Animate.css** para animações de entrada e transições de elementos.
- **CSS Customizado**: Arquivos como `App.css`, `index.css` e arquivos CSS dentro de `assets/styles` definem variáveis globais (cores, fontes) e sobrescrevem estilos padrão quando necessário.

## 4. Libs e Pacotes Principais

As principais dependências do projeto são:

### Core
- **`react`** / **`react-dom`**: Biblioteca principal para construção da interface.
- **`typescript`**: Adiciona tipagem estática ao JavaScript, aumentando a segurança e manutenibilidade do código.

### Navegação
- **`react-router-dom`**: Gerencia as rotas e navegação da SPA.

### UI e Estilização
- **`bootstrap`** / **`react-bootstrap`**: Framework CSS e componentes React prontos.
- **`@heroicons/react`**: Biblioteca de ícones SVG.
- **`animate.css`**: Biblioteca de animações CSS prontas.

### Funcionalidades
- **`jspdf`**: Biblioteca utilizada para gerar e baixar os arquivos PDF das listas criadas pelo usuário.
- **`web-vitals`**: Métricas de performance.

## 5. Convenções de Código

- **Arquivos**: `camelCase` (ex: `iconButton.tsx`).
- **Componentes**: PascalCase (ex: `IconButton`).
- **Tipagem**: Uso extensivo de Interfaces e Types para props e estados.
- **Imports**: Caminhos relativos organizados.
