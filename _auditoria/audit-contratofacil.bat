@echo off
setlocal enabledelayedexpansion
title Auditoria ContratoFacil

echo ============================================================
echo   AUDITORIA LOCAL CONTRATOFACIL
echo ============================================================
echo.

set PROJECT_DIR=C:\ContratoFacil

if not exist "%PROJECT_DIR%" (
  echo [ERROR] No existe %PROJECT_DIR%
  pause
  exit /b 1
)

cd /d "%PROJECT_DIR%"

echo [1/8] Ruta actual:
cd
echo.

echo [2/8] Version Node:
where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js no esta disponible en PATH.
  pause
  exit /b 1
)
node -v
echo.

echo [3/8] Version npm:
where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm no esta disponible en PATH.
  pause
  exit /b 1
)
npm -v
echo.

echo [4/8] Estado Git:
where git >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Git no esta disponible en PATH.
  pause
  exit /b 1
)
git status
echo.

echo [5/8] Remoto Git:
git remote -v
echo.

echo [6/8] Prisma generate:
call npm run prisma:generate
if errorlevel 1 (
  echo [ERROR] Fallo npm run prisma:generate
  pause
  exit /b 1
)
echo.

echo [7/8] Build:
call npm run build
if errorlevel 1 (
  echo [ERROR] Fallo npm run build
  pause
  exit /b 1
)
echo.

echo [8/8] Auditoria basica finalizada correctamente.
echo.
echo Siguiente paso recomendado:
echo - Revisar docs/CONTRATOFACIL_HANDOFF_MASTER.md
echo - Revisar docs/AUDITORIA_ESTADO_ACTUAL.md
echo - Subir GEMINI_SETUP_REVIEW.md a ChatGPT para revision
echo.

pause
endlocal
