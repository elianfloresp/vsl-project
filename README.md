# VSL Landing Page - Protocolo Vitalidade

Projeto de Landing Page de alta conversão (VSL) desenvolvido com foco em performance mobile extrema, rastreamento de dados (UTMs) persistente e otimização de taxa de conversão (CRO).

O sistema implementa um funil de vendas funcional: **Página de Vendas (VSL) → Checkout → Página de Obrigado.**

🔗 **[VER PROJETO ONLINE (LIVE DEMO)](https://vsl-project-seven.vercel.app/)**

---

## 🚀 Diferenciais Técnicos e Arquitetura

### 1. Sistema de Rastreamento (Advanced UTM Tracking)
Para garantir a atribuição correta de vendas em campanhas de marketing, desenvolvi uma arquitetura de persistência de dados:
- **Hook Personalizado (`useUTM`):** Captura automaticamente parâmetros como `utm_source`, `utm_medium` e `utm_campaign` na entrada.
- **Persistência de Sessão:** Os dados não se perdem na navegação. Eles são injetados dinamicamente nos links de Checkout e repassados até a Página de Obrigado (e até no retorno à Home).

### 2. Performance Mobile
Otimizações implementadas para carregamento instantâneo em redes 3G/4G:
- **LiteYouTube Facade:** O player de vídeo carrega apenas a thumbnail (`loading="eager"`). O iframe pesado do YouTube só é injetado no DOM após a interação do usuário (clique), evitando o bloqueio da thread principal.
- **Code Splitting & Tree Shaking:** Build otimizado via Vite.

### 3. Funcionalidades de Conversão (CRO)
Componentes desenvolvidos com gatilhos de Marketing de Resposta Direta:
- **Smart Urgency Bar:** Contador regressivo que utiliza `localStorage`. A contagem persiste mesmo se o usuário atualizar a página (F5), mantendo a credibilidade da escassez.
- **Checkout Responsivo:** Interface simulada com feedback visual e tratamento de rotas.

---

## 🧪 Como Testar o Rastreamento (UTMs)

Para validar a persistência dos dados através do funil, utilize os links simulados abaixo:

**Cenário 1: Tráfego Facebook Ads**
> Simula um clique vindo de um anúncio focado em "Energia".
https://vsl-project-seven.vercel.app/?utm_source=facebook&utm_medium=cpc&utm_campaign=protocolo_verao&utm_content=video_01&utm_term=saude

**Cenário 2: Tráfego Google Ads**
> Simula um clique vindo de uma pesquisa direta.
https://vsl-project-seven.vercel.app/?utm_source=google&utm_medium=search&utm_campaign=venda_direta&utm_term=vitalidade

### ✅ Validação
1. Clique em um dos links acima.
2. Navegue pelo site: **Botão de Compra → Checkout → Finalizar Compra**.
3. Na **Página de Obrigado**, observe a caixa cinza "Parâmetros Rastreados". Os dados da URL inicial estarão lá, provando que o rastreamento funcionou em todo o fluxo.

---

## 🛠️ Stack Tecnológica

- **Core:** React 18 + Vite
- **Estilização:** Tailwind CSS (Utility-first)
- **Linguagem:** TypeScript (Tipagem estática estrita)
- **Ícones:** Lucide React (SVG otimizado)
- **Router:** React Router DOM v6
- **Deploy:** Vercel (CI/CD)

---

## 💻 Instalação Local

1. Siga estes passos no seu terminal (crie a pasta aonde você preferir):
```bash
git clone https://github.com/elianfloresp/vsl-project.git
cd VSLPage
npm install
npm run dev

