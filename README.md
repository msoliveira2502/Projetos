# 💰 Portal de Orçamento Pessoal (GitHub Pages + GitHub API)

Documentação técnica e principais aprendizados obtidos durante a construção, modernização visual e integração de persistência em nuvem gratuita deste portal financeiro estático.

---

## 🛠️ Arquitetura da Solução

O portal funciona de forma **100% serverless (sem servidor back-end)**, utilizando:
- **HTML5 + CSS3 (Grid & Design Fintech):** Interface responsiva com cards de resumo, alertas inteligentes de limite por categoria e tabelas financeiras alinhadas (`tabular-nums`).
- **Chart.js + DataTables:** Visualização mensal comparativa com linha de orçamento e gráfico de rosca (`doughnut`) por categoria.
- **GitHub REST API + `localStorage`:** Persistência direta no arquivo `dados.js` do repositório com atualização instantânea na tela.

---

## 📚 Principais Aprendizados Técnicos

### 1. Carregamento de Arquivos e Cache no GitHub Pages
- **Case-Sensitivity:** O servidor do GitHub Pages diferencia letras maiúsculas de minúsculas nos nomes de arquivos e pastas (`dados.js` ≠ `Dados.js`).
- **Caminhos Relativos:** Como o projeto roda em um subdiretório (`/Projetos/`), evitar barras iniciais (`/dados.js`) impede erros `404`.
- **Cache Busting:** Adicionar `?v=${Date.now()}` ao importar o `dados.js` garante que o navegador sempre busque a versão mais recente publicada.

### 2. Persistência Gratuita via GitHub API (`GET` → `PUT`)
- **Fluxo de Atualização:** Para alterar um arquivo via API (`/repos/{usuario}/{repo}/contents/dados.js`), primeiro realiza-se uma requisição `GET` para obter o `sha` (assinatura atual do arquivo) e, em seguida, um `PUT` enviando o novo conteúdo codificado em Base64 com suporte a UTF-8.
- **Sincronização Híbrida (`localStorage`):** Como o GitHub Pages leva cerca de 30 segundos para republicar o site após um commit, salvar temporariamente no `localStorage` permite que o usuário visualize adições, edições e exclusões na hora.

### 3. Segurança e Permissões do Personal Access Token (Fine-grained PAT)
- **Proteção da Chave:** Em repositórios públicos, o token nunca deve ser gravado no código-fonte. Solicitar a chave via interface (`prompt`) e armazená-la apenas no `localStorage` do dispositivo mantém o acesso protegido.
- **Permissão Obrigatória (Evitando `HTTP 403`):** Ao configurar um *Fine-grained Token*, é indispensável:
  1. Vincular explicitamente o repositório alvo (`Projetos`).
  2. Definir a permissão de repositório **`Contents` como `Read and write`** (permissões como `Actions` ou apenas `Metadata` resultam em bloqueio `HTTP 403`).

### 4. Compatibilidade e Armadilhas no iPadOS / WebKit
- **Corrupção de URLs no Copiar/Colar:** Navegadores no iPadOS/iOS podem alterar strings completas contendo `https://api.github.com` durante o copiar/colar (quebrando para `://github.com` e gerando `Load failed`). Montar a URL dinamicamente (`window.location.protocol + "//api." + "github." + ...`) torna o código imune a esse comportamento.
- **Sanitização do Token:** Remover caracteres invisíveis com `.replace(/[^a-zA-Z0-9_]/g, "")` evita falhas silenciosas nos cabeçalhos HTTP do Safari/WebKit.
- **`XMLHttpRequest` e Anti-Cache:** Utilizar `XMLHttpRequest` com cabeçalhos enxutos e parâmetro `&t=${Date.now()}` na leitura do `sha` evita bloqueios de rede e conflitos de versão.

### 5. Melhorias de UI/UX Financeiro
- **Hierarquia Visual:** Substituição de fundos saturados por cards brancos com borda superior colorida por indicador.
- **Gráfico de Rosca (`Doughnut`):** Ocultação automática de rótulos menores que `4%` dentro das fatias para eliminar sobreposição de texto em categorias menores.
- **Tabelas Responsivas:** Alinhamento de valores monetários à direita e rolagem horizontal automática (`overflow-x: auto`) para telas móveis.

---

## 🔄 Como Renovar o Token Quando Expirar

1. Acesse **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens**.
2. Selecione o token do portal (ou gere um novo vinculado ao repositório **`Projetos`** com permissão **`Contents: Read and write`**).
3. No portal, clique no botão **🔑 Token**, cole o novo código gerado e confirme.
