# Usa una imagen oficial de Node.js como base
FROM node:18

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Construye la aplicación
RUN npm run build

# Instala `serve` globalmente para servir la aplicación
RUN npm install -g serve

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["serve", "-s", "dist", "-l", "3000"]
