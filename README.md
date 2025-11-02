# Portfólio — Iury

Um portfólio simples, moderno e acessível, feito com HTML, CSS e JavaScript puros.

## Como rodar

Como é um site estático, basta abrir o arquivo `index.html` no navegador. Para um teste local com servidor (recomendado para evitar restrições de CORS em alguns recursos), você pode usar o Live Server do VS Code.

### Windows (PowerShell)

- Abra o VS Code nesta pasta e instale a extensão "Live Server" (Ritwick Dey)
- Clique com o botão direito no `index.html` e escolha "Open with Live Server"

Ou, se você tiver Python instalado, rode um servidor estático simples:

```powershell
# opcional — inicia um servidor HTTP local na porta 8000
python -m http.server 8000
# depois acesse http://localhost:8000 no navegador
```

## Personalização rápida

Edite os seguintes pontos:

- `index.html`
  - Nome: procure por "Eu sou Iury" e ajuste se necessário
  - Bio/hero: parágrafo explicando estudos na EBAC e stack
  - Links de projetos: substitua `#` pelos links reais (Live e Código)
  - Contato: troque `contato@exemplo.com` pelo seu e-mail e atualize GitHub/LinkedIn
- `styles.css` — estilos globais, cores, espaçamentos e componentes
- `script.js` — alternância de tema, menu mobile e destaque de seção ativa
- `favicon.svg` — ícone do site (pode substituir pelo seu)

## Estrutura

- Header com navegação e alternância de tema (claro/escuro/auto)
- Seções: Hero, Sobre, Skills, Projetos, Formação & Experiência, Contato, Rodapé
- CSS com variáveis, responsividade e acessibilidade
- No JS, preferências de tema via `localStorage` e melhorias de UX

## Próximos passos (sugestões)

- Adicionar prints/imagens dos projetos
- Integrar formulário de contato (ex.: Formspree) ou back-end próprio
- Publicar no GitHub Pages ou Vercel
- Adicionar mais projetos com cases curtos (problema → solução → resultado)

---

Feito com cuidado e código sem dependências.