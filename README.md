# Semana de Tecnologia

Página única de divulgação da Semana de Tecnologia 2026, um evento de três dias com palestras sobre desenvolvimento, dados e carreira na área de tecnologia. A página apresenta as informações principais do evento (datas, local e inscrição), a programação completa com os cards das palestras — cada um com foto, título, palestrante, data e horário, descrição e a opção de favoritar — e uma seção com as empresas patrocinadoras, tudo com layout responsivo pensado primeiro para o celular e adaptado para tablet e desktop.

## Como executar

É preciso ter o Node.js instalado. Na pasta do projeto, rode:

```bash
npm install
npm run dev
```

Depois abra no navegador o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Fonte dos dados

- **Palestras (listagem principal):** JSON gerado pelo [Mockaroo](https://mockaroo.com), no schema `palestras`, que tem os mesmos campos do type `Palestra`. O endereço fica em `src/data/palestras.ts` e os dados são carregados com `fetch` dentro de um `useEffect`. Enquanto os dados não chegam, a página mostra uma mensagem de carregando; se a requisição falhar, mostra uma mensagem de erro.
- **Limite do Mockaroo:** o plano grátis aceita 200 requisições por dia. Se passar disso, a página mostra a mensagem de erro até o limite renovar.
- **Patrocinadores (listagem secundária):** vetor de objetos em `src/data/patrocinadores.ts`.
- **Imagens das palestras:** arquivos SVG em `public/imagens`.
