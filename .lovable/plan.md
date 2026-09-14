# Correção final de Schema.org e SEO técnico

## Objetivo
Centralizar a identidade técnica da Schultz Energia Solar sem alterar layout, conteúdo comercial ou funcionalidades.

## Alterações
- Ajustar o JSON-LD estático da Home para um único `@graph` com Organization/LocalBusiness, WebSite, WebPage e BreadcrumbList, usando sempre `#organization`.
- Completar os dados oficiais confirmados, manter apenas o Instagram informado e remover qualquer entidade ou propriedade conflitante.
- Centralizar no componente de SEO a geração de canonical absoluto, Open Graph, Twitter, robots e JSON-LD por página.
- Padronizar Service e BreadcrumbList com IDs absolutos e referência ao mesmo `#organization`.
- Adicionar WebPage com referência à empresa nas páginas Sobre e Contato, sem repetir a entidade completa.
- Preservar BreadcrumbList nas páginas individuais de projetos, usando somente os dados reais existentes.
- Conferir sitemap e robots.txt contra as rotas públicas atuais, sem trocar o mecanismo existente.

## Validação
- Procurar duplicações de LocalBusiness/Organization, `priceRange`, reviews e IDs divergentes.
- Validar JSON-LD, titles, descriptions, H1, canonicals, Open Graph, robots e sitemap nas rotas públicas.
- Executar TypeScript, testes do projeto, build e verificação no navegador, incluindo console e rede.
- Registrar como corrigidos apenas achados de SEO efetivamente resolvidos.
