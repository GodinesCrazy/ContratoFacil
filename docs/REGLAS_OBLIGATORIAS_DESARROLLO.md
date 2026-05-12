# Reglas Obligatorias de Desarrollo

Cualquier IA, agente o desarrollador humano que trabaje en este proyecto DEBE adherirse a las siguientes directrices sin excepción:

1. **No inventar nada**: Basarse estrictamente en los archivos existentes y el estado documentado.
2. **No modificar código funcionando sin necesidad**: Refactorizaciones requieren aprobación.
3. **No romper la estructura del monorepo**: Frontend y backend deben mantenerse bajo NPM Workspaces de forma aislada.
4. **No cambiar el remoto Git**: Mantener origin apuntando a `https://github.com/GodinesCrazy/ContratoFacil.git`.
5. **No tocar archivos `.env` reales**: Solo se pueden modificar `.env.example`. Los secretos reales no deben registrarse en el código ni en los logs.
6. **No eliminar carpetas o archivos indiscriminadamente**: Usar `git status` y no hacer commits destructivos.
7. **Mantener contexto aislado**: NO cruzar bases de código, tokens o configuraciones de otros proyectos como "Ivan Reseller".
8. **Documentar cada cambio**: Toda modificación importante debe reflejarse en un README, changelog o comentario.
9. **Análisis de causa raíz**: Antes de aplicar un "fix" para un error, se debe explicar el porqué del error.
10. **Consultar ante la duda**: Si hay ambigüedad en los requerimientos o en el producto, marcar como "REQUIERE DECISIÓN DEL DUEÑO" o consultar directamente a Iván.
