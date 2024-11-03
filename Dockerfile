# Build stage
FROM node:20-alpine AS deps

# Adicionar dependências necessárias
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências com critters
RUN npm install --legacy-peer-deps
RUN npm install critters --legacy-peer-deps

# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Configurar variáveis de ambiente para o build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV NEXT_FONT_GOOGLE_SKIP_DOWNLOAD=1

# Criar arquivo de configuração temporário para build
RUN echo '{ "assetPrefix": ".", "experimental": { "optimizeCss": true }, "typescript": { "ignoreBuildErrors": true }, "eslint": { "ignoreDuringBuilds": true }, "optimizeFonts": false }' > /tmp/next.config.json

# Copiar dependências do stage anterior
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Sobrescrever next.config temporariamente para o build
RUN cp /tmp/next.config.json next.config.json

# Build da aplicação
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Configurar variáveis de ambiente para produção
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_FONT_GOOGLE_SKIP_DOWNLOAD=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copiar arquivos necessários
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/next.config.* ./

# Usar usuário não-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]