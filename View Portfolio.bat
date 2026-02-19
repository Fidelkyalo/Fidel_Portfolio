@echo off
TITLE Fidel Portfolio
ECHO ==========================================
ECHO   Starting Fidel's Portfolio...
ECHO ==========================================
ECHO.
ECHO Please wait while we start the local server.
ECHO This window must stay open for the site to work.
ECHO.

:: Start the browser in a separate process after 4 seconds
start "" /B cmd /c "timeout /t 4 /nobreak >nul & start http://localhost:4173"

:: Run the preview server
npm run preview
