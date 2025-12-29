# Arquitetura Moderna do Portfólio

## 🚀 Stack Atualizada (2025)

- **React 18.2** - Framework UI com suporte a Concurrent Features
- **React Hooks & Context API** - Gerenciamento de estado moderno
- **React Syntax Highlighter** - Syntax highlighting para código
- **React Feather** - Ícones modernos e leves
- **React Scripts 5.0** - Tooling moderno com Webpack 5

## 📁 Nova Estrutura de Diretórios

```
src/
├── assets/              # Recursos estáticos
│   └── images/
│       ├── companies/      # Logos das empresas (local)
│       └── projects/       # Logos dos projetos (local)
├── components/          # Componentes reutilizáveis
│   ├── Company.js         # Card de empresa
│   ├── Project.js         # Card de projeto
│   └── Footer.js          # Rodapé
├── containers/          # Componentes containers
│   ├── Page.js            # Provider wrapper
│   └── Content.js         # Layout principal
├── context/             # React Context API
│   └── DataContext.js     # Context para dados globais
├── data/                # Dados em JSON (local)
│   ├── companies.json
│   └── projects.json
├── screens/             # Telas/Seções da aplicação
│   ├── ProfileScreen.js
│   ├── CompanyScreen.js
│   └── ProjectScreen.js
├── utils/               # Utilitários
│   └── imageHelper.js     # Helpers para imagens
└── index.js             # Entry point (React 18)
```

## 🏗️ Arquitetura Moderna

### Context API + Hooks

Substituiu o Flux para gerenciamento de estado. Mais simples e nativo do React.

**Vantagens:**
- ✅ Nativo do React (sem deps externas)
- ✅ Mais simples e menos boilerplate
- ✅ Hooks modernos (useState, useEffect)
- ✅ Performance otimizada

## 🎨 Design System Moderno

### Paleta de Cores
- **Primary**: `#667eea` → `#764ba2` (Gradiente roxo)
- **Background**: Gradiente dinâmico
- **Text**: `#2d3748` (títulos), `#4a5568` (corpo)
- **Cards**: Branco com sombras sutis

### CSS Grid Layout
```css
.company-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
```

## 📊 Comparação: Antes vs Depois

| Aspecto | Antes (v1) | Depois (v2) |
|---------|-----------|-------------|
| React | 17.0.2 | 18.2.0 |
| State Management | Flux + Immutable | Context API + Hooks |
| Components | Classes | Functions |
| Dependencies | 11 | 5 (-6) |
| Code Lines | ~1000 | ~600 (-40%) |
| Modern Standards | ❌ | ✅ |

## 🌟 Deploy

```bash
npm run deploy
```

URL: https://tiagomarques.com.br

---

**Versão**: 2.0.0  
**Status**: ✅ Produção
