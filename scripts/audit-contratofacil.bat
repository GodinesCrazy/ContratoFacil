@echo off
echo Iniciando auditoria basica de ContratoFacil...
echo.

echo --- VERIFICANDO NODE Y NPM ---
node -v
npm -v
echo.

echo --- ESTADO GIT ---
git status
echo.

echo --- REMOTOS GIT ---
git remote -v
echo.

echo --- GENERANDO PRISMA CLIENT ---
npm run prisma:generate
echo.

echo --- COMPILANDO PROYECTO ---
npm run build
echo.

echo Auditoria finalizada.
pause
