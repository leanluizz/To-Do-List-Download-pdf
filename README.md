# to-do-list-download-PDF

Esse site open-source foi feito na intenção de facilitar uma simples lista, por exemplo caso você queira fazer uma lista de compras ou uma lista de tarefas por exemplo e guardar em algum lugar local do seu dispositivo.

## Clone o projeto ou baixe o zip do repositório 

Com o zip extraia o arquivo no seu dispositivo

## Instalando dependências 

Com um terminal vá até o repositório local com os comandos

```bash
cd ./local
npm i
```

## Iniciar projeto

```bash
npm start
```
Projeto: [localhost:3000](https://localhost:3000)

## Conclusão 

Caso queira contribuir com o projeto deixe sua PR pra podermos analisar.

## Contato

email: luizzleandro827@gmail.com 

linkedin: [linkedin](https://www.linkedin.com/in/leandroluizz?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

## Regras para mexer no projeto

- Seguir estrutura de pastas: componentes de interface em `src/components/ui`, páginas e layouts em `src/layout`, tipos em `src/types`, utilitários em `src/utils`, assets em `src/assets`.
- Nome de arquivos em camelCase iniciando com letra minúscula (ex.: `criarListas.jsx`, `icon.tsx`).
- Cada arquivo deve ter menos de 400 linhas; divida responsabilidades em componentes menores quando necessário.
- Código bem identado e legível, com 2 espaços por nível de indentação.
- Seguir semântica HTML: usar `header`, `nav`, `main`, `section`, `article`, `footer` conforme apropriado; botões interativos devem ser `button`.
- Ícones devem usar o componente `Icon` (Heroicons) em vez de tags `svg` inline.
- Em mobile (menu responsivo), ao clicar nos botões do tooltipbar, abrir `Modal` com overlay cobrindo a tela e z-index alto.
- Evitar lógica complexa em JSX; extraia funções para utils ou hooks.
- Respeitar acessibilidade: `aria-label` em botões icônicos, foco acessível e contraste adequado.
- Estilos: preferir classes utilitárias e CSS modular; z-index deve considerar camadas (navbar > overlay > conteúdo).
- Nomenclatura em inglês: manter nomes em inglês para variáveis, funções, componentes, props e arquivos. Evitar termos em português no código para padronização e consistência.

### Melhorias significativas

- Padronizado o comportamento de overlay em mobile: os botões do menu responsivo abrem um `Modal` com backdrop fullscreen e z-index alto, garantindo foco e melhor UX.
- Padronização de ícones com o componente `Icon` para consistência visual e manutenção mais simples.
