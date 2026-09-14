# Melhorias finais de SEO técnico e indexação

## Objetivo
Preservar a implementação visual e a arquitetura central de SEO, corrigindo apenas rotas e eventuais inconsistências técnicas encontradas na auditoria.

## Alterações
- Remover a rota genérica `/:slug/`, mantendo somente as páginas cadastradas, projetos, páginas institucionais e a página 404.
- Preservar `src/lib/seo-schema.ts` como fonte única de Schema.org e `SEO.tsx` como central de metadados.
- Corrigir somente divergências confirmadas em canonical, Open Graph, Twitter, robots, JSON-LD, imagens ou links internos.
- Manter os nove projetos reais, dados oficiais, sitemap e robots.txt sem criar páginas ou conteúdo novo.

## Detalhes técnicos
- Confirmar uma única entidade `https://schultzenergiasolar.com.br/#organization` e ausência de JSON-LD duplicado no HTML estático.
- Validar Home com LocalBusiness/Organization, WebSite, WebPage e BreadcrumbList.
- Validar serviços e segmentos com Service + BreadcrumbList e projetos individuais apenas com BreadcrumbList.
- Comparar rotas públicas cadastradas com as 25 URLs atuais do sitemap.
- Verificar um H1 na Home, ALT contextuais, links internos e metadados absolutos por rota.

## Validação
- Executar TypeScript e `npm run build`.
- Testar todas as rotas públicas e uma URL inexistente no navegador.
- Conferir console, JSON-LD, canonical, Open Graph, robots e sitemap.
- Relatar arquivos alterados, schemas por tipo de página, duplicações e avisos remanescentes.
