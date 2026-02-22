# Regras do Projeto

Estas são as diretrizes fundamentais para o desenvolvimento e manutenção deste projeto.

## Estrutura e Organização
- **Estrutura de Pastas**: 
  - Componentes de interface genéricos: `src/components/ui`
  - Páginas e layouts estruturais: `src/layout`
  - Definições de tipos: `src/types`
  - Utilitários e helpers: `src/utils`
  - Recursos estáticos (imagens/estilos): `src/assets`
  - **Tamanho de Arquivos**: Mantenha arquivos com menos de 400 linhas. Se exceder, divida em componentes menores para melhor manutenção e separação de responsabilidades.

## Código e Estilo
- **Indentação**: Código bem indentado e legível, utilizando 2 espaços por nível.
- **Nomenclatura no Código**: 
  - Mantenha nomes de variáveis, funções, componentes, props e arquivos em **inglês**.
  - Evite misturar termos em português no código para garantir padronização.
- **Lógica em JSX**: Evite lógica complexa diretamente no JSX. Extraia regras de negócio e formatações para `utils` ou `hooks`.

## HTML Semântico e Acessibilidade
- **Tags Semânticas**: Use `header`, `nav`, `main`, `section`, `article`, `footer` conforme apropriado.
- **Interatividade**: Elementos clicáveis e interativos devem ser tags `button` (ou links `a` quando for navegação), não `div` ou `span`.
- **Acessibilidade**:
  - Use `aria-label` em botões que contêm apenas ícones.
  - Garanta foco visível e acessível.
  - Mantenha contraste adequado entre cores de texto e fundo.

## Componentes e UI
- **Ícones**: Utilize sempre o componente `Icon` (wrapper do Heroicons) em vez de tags `svg` inline.
- **Estilos**:
  - Prefira classes utilitárias (Bootstrap) e CSS modular.
  - Gerencie `z-index` com cuidado, respeitando as camadas (navbar > overlay > conteúdo).
- **Comportamento Mobile**:
  - Menus responsivos e toolbars devem abrir em `Modal` ou overlays que cubram a tela, com `z-index` alto para garantir foco e boa experiência (UX).

## Fluxo de Trabalho
- **Commits**: Escreva mensagens de commit claras e descritivas.
- **Pull Requests**: Descreva as alterações realizadas e o motivo.
